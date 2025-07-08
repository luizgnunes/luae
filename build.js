const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configurações
const config = {
  src: {
    css: 'src/assets/css',
    js: 'src/assets/js',
    images: 'src/assets/images',
    html: 'src'
  },
  dist: {
    root: 'dist',
    css: 'dist/assets/css',
    js: 'dist/assets/js',
    images: 'dist/assets/images'
  }
};

// Função para criar diretórios se não existirem
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Função para concatenar arquivos
function concatenateFiles(files, outputFile) {
  let content = '';
  
  files.forEach(file => {
    if (fs.existsSync(file)) {
      content += fs.readFileSync(file, 'utf8') + '\n';
      console.log(`✓ Concatenado: ${file}`);
    } else {
      console.log(`⚠ Arquivo não encontrado: ${file}`);
    }
  });
  
  ensureDir(path.dirname(outputFile));
  fs.writeFileSync(outputFile, content);
  console.log(`✓ Arquivo criado: ${outputFile}`);
}

// Função para minificar CSS
function minifyCSS(inputFile, outputFile) {
  try {
    const css = fs.readFileSync(inputFile, 'utf8');
    
    // Minificação básica
    let minified = css
      .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comentários
      .replace(/\s+/g, ' ') // Remove espaços extras
      .replace(/\s*{\s*/g, '{') // Remove espaços antes de {
      .replace(/\s*}\s*/g, '}') // Remove espaços antes de }
      .replace(/\s*:\s*/g, ':') // Remove espaços antes de :
      .replace(/\s*;\s*/g, ';') // Remove espaços antes de ;
      .replace(/\s*,\s*/g, ',') // Remove espaços antes de ,
      .trim();
    
    fs.writeFileSync(outputFile, minified);
    console.log(`✓ CSS minificado: ${outputFile}`);
  } catch (error) {
    console.error(`✗ Erro ao minificar CSS: ${error.message}`);
  }
}

// Função para minificar JavaScript
function minifyJS(inputFile, outputFile) {
  try {
    const js = fs.readFileSync(inputFile, 'utf8');
    
    // Minificação básica
    let minified = js
      .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comentários /* */
      .replace(/\/\/.*$/gm, '') // Remove comentários //
      .replace(/\s+/g, ' ') // Remove espaços extras
      .replace(/\s*{\s*/g, '{') // Remove espaços antes de {
      .replace(/\s*}\s*/g, '}') // Remove espaços antes de }
      .replace(/\s*:\s*/g, ':') // Remove espaços antes de :
      .replace(/\s*;\s*/g, ';') // Remove espaços antes de ;
      .replace(/\s*,\s*/g, ',') // Remove espaços antes de ,
      .replace(/\s*\(\s*/g, '(') // Remove espaços antes de (
      .replace(/\s*\)\s*/g, ')') // Remove espaços antes de )
      .trim();
    
    fs.writeFileSync(outputFile, minified);
    console.log(`✓ JavaScript minificado: ${outputFile}`);
  } catch (error) {
    console.error(`✗ Erro ao minificar JavaScript: ${error.message}`);
  }
}

// Função para otimizar imagens
function optimizeImages() {
  const imageDir = config.src.images;
  const outputDir = config.dist.images;
  
  if (!fs.existsSync(imageDir)) {
    console.log(`⚠ Diretório de imagens não encontrado: ${imageDir}`);
    return;
  }
  
  ensureDir(outputDir);
  
  const imageFiles = fs.readdirSync(imageDir).filter(file => 
    /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
  );
  
  imageFiles.forEach(file => {
    const inputPath = path.join(imageDir, file);
    const outputPath = path.join(outputDir, file);
    
    try {
      fs.copyFileSync(inputPath, outputPath);
      console.log(`✓ Imagem copiada: ${file}`);
    } catch (error) {
      console.error(`✗ Erro ao copiar imagem ${file}: ${error.message}`);
    }
  });
}

// Função para copiar HTML
function copyHTML() {
  const htmlFiles = fs.readdirSync(config.src.html).filter(file => 
    file.endsWith('.html')
  );
  
  htmlFiles.forEach(file => {
    const inputPath = path.join(config.src.html, file);
    const outputPath = path.join(config.dist.root, file);
    
    try {
      let content = fs.readFileSync(inputPath, 'utf8');
      
      // Substituir referências para arquivos minificados
      content = content.replace(/href="assets\/css\/styles\.css"/g, 'href="assets/css/styles.min.css"');
      content = content.replace(/src="assets\/js\/script\.js"/g, 'src="assets/js/script.min.js"');
      
      fs.writeFileSync(outputPath, content);
      console.log(`✓ HTML processado: ${file}`);
    } catch (error) {
      console.error(`✗ Erro ao processar HTML ${file}: ${error.message}`);
    }
  });
}

// Função para copiar arquivos minificados para a raiz
function copyMinifiedToRoot() {
  const filesToCopy = [
    { src: 'dist/assets/css/styles.min.css', dest: 'styles.min.css' },
    { src: 'dist/assets/js/script.min.js', dest: 'script.min.js' }
  ];
  
  filesToCopy.forEach(({ src, dest }) => {
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
      console.log(`✓ Arquivo copiado para raiz: ${dest}`);
    } else {
      console.log(`⚠ Arquivo não encontrado: ${src}`);
    }
  });
}

// Função principal de build
function build() {
  console.log('🚀 Iniciando build...\n');
  
  // Criar diretórios de saída
  ensureDir(config.dist.root);
  ensureDir(config.dist.css);
  ensureDir(config.dist.js);
  ensureDir(config.dist.images);
  
  // Concatenar CSS
  const cssFiles = [
    path.join(config.src.css, 'styles.css'),
    path.join(config.src.css, 'testimonials.css')
  ];
  concatenateFiles(cssFiles, path.join(config.dist.css, 'styles.css'));
  
  // Concatenar JavaScript
  const jsFiles = [
    path.join(config.src.js, 'script.js')
  ];
  concatenateFiles(jsFiles, path.join(config.dist.js, 'script.js'));
  
  // Minificar CSS
  minifyCSS(
    path.join(config.dist.css, 'styles.css'),
    path.join(config.dist.css, 'styles.min.css')
  );
  
  // Minificar JavaScript
  minifyJS(
    path.join(config.dist.js, 'script.js'),
    path.join(config.dist.js, 'script.min.js')
  );
  
  // Otimizar imagens
  optimizeImages();
  
  // Copiar HTML
  copyHTML();
  
  // Copiar arquivos minificados para a raiz
  copyMinifiedToRoot();
  
  console.log('\n✅ Build concluído com sucesso!');
  console.log('📁 Arquivos gerados em: dist/');
  console.log('📁 Arquivos minificados também copiados para a raiz');
}

// Executar build se chamado diretamente
if (require.main === module) {
  build();
}

module.exports = { build }; 