const fs = require('fs');
const path = require('path');

// Configurações
const config = {
  src: {
    css: 'src/assets/css',
    js: 'src/assets/js',
    images: 'src/assets/images',
    html: 'src'
  }
};

// Função para concatenar arquivos (retorna string)
function concatenateFiles(files) {
  let content = '';
  files.forEach(file => {
    if (fs.existsSync(file)) {
      content += fs.readFileSync(file, 'utf8') + '\n';
      console.log(`✓ Concatenado: ${file}`);
    } else {
      console.log(`⚠ Arquivo não encontrado: ${file}`);
    }
  });
  return content;
}

// Função para minificar CSS
function minifyCSS(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*{\s*/g, '{')
    .replace(/\s*}\s*/g, '}')
    .replace(/\s*:\s*/g, ':')
    .replace(/\s*;\s*/g, ';')
    .replace(/\s*,\s*/g, ',')
    .trim();
}

// Função para minificar JavaScript
function minifyJS(js) {
  return js
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/.*$/gm, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*{\s*/g, '{')
    .replace(/\s*}\s*/g, '}')
    .replace(/\s*:\s*/g, ':')
    .replace(/\s*;\s*/g, ';')
    .replace(/\s*,\s*/g, ',')
    .replace(/\s*\(\s*/g, '(')
    .replace(/\s*\)\s*/g, ')')
    .trim();
}

// Função para otimizar/copiar imagens (mantém estrutura original)
function copyImages() {
  const imageDir = config.src.images;
  const outputDir = 'images/optimized';
  if (!fs.existsSync(imageDir)) {
    console.log(`⚠ Diretório de imagens não encontrado: ${imageDir}`);
    return;
  }
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  const imageFiles = fs.readdirSync(imageDir + '/optimized').filter(file =>
    /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
  );
  imageFiles.forEach(file => {
    const inputPath = path.join(imageDir, 'optimized', file);
    const outputPath = path.join(outputDir, file);
    try {
      fs.copyFileSync(inputPath, outputPath);
      console.log(`✓ Imagem copiada: ${file}`);
    } catch (error) {
      console.error(`✗ Erro ao copiar imagem ${file}: ${error.message}`);
    }
  });
}

// Função para processar HTML
function processHTML() {
  const htmlFiles = fs.readdirSync(config.src.html).filter(file => file.endsWith('.html'));
  htmlFiles.forEach(file => {
    const inputPath = path.join(config.src.html, file);
    const outputPath = file; // Salva direto na raiz
    try {
      let content = fs.readFileSync(inputPath, 'utf8');
      // Substituir referências para arquivos minificados
      content = content.replace(/href="assets\/css\/styles\.css"/g, 'href="styles.min.css"');
      content = content.replace(/src="assets\/js\/script\.js"/g, 'src="script.min.js"');
      fs.writeFileSync(outputPath, content);
      console.log(`✓ HTML processado: ${file}`);
    } catch (error) {
      console.error(`✗ Erro ao processar HTML ${file}: ${error.message}`);
    }
  });
}

// Função principal de build
function build() {
  console.log('🚀 Iniciando build...\n');

  // Concatenar e minificar TODOS os CSS da pasta src/assets/css
  const cssDir = config.src.css;
  const cssFiles = fs.readdirSync(cssDir)
    .filter(file => file.endsWith('.css'))
    .map(file => path.join(cssDir, file));
  const cssContent = concatenateFiles(cssFiles);
  fs.writeFileSync('styles.min.css', minifyCSS(cssContent));
  console.log('✓ CSS minificado: styles.min.css');

  // Concatenar e minificar TODOS os JS da pasta src/assets/js
  const jsDir = config.src.js;
  const jsFiles = fs.readdirSync(jsDir)
    .filter(file => file.endsWith('.js'))
    .map(file => path.join(jsDir, file));
  const jsContent = concatenateFiles(jsFiles);
  fs.writeFileSync('script.min.js', minifyJS(jsContent));
  console.log('✓ JavaScript minificado: script.min.js');

  // Copiar imagens otimizadas
  copyImages();

  // Processar HTML
  processHTML();

  console.log('\n✅ Build concluído com sucesso!');
}

build(); 