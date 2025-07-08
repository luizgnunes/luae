/* ===== BUILD SCRIPT ===== */
/* Script principal para build de produção */

const fs = require('fs');
const path = require('path');

// Configurações do build
const buildConfig = {
  srcDir: './src',
  distDir: './dist',
  cssFiles: [
    'base.css',
    'layout.css', 
    'navbar.css',
    'hero.css',
    'components.css',
    'services.css',
    'testimonials.css',
    'tarot.css',
    'footer.css',
    'utilities.css'
  ],
  jsFiles: [
    'config.js',
    'utils.js',
    'navigation.js',
    'cards.js',
    'carousel.js',
    'tarot.js',
    'cookies.js',
    'main.js'
  ]
};

// Função para criar diretório se não existir
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`📁 Criado diretório: ${dir}`);
  }
}

// Função para ler arquivo
function readFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    console.error(`❌ Erro ao ler arquivo: ${filePath}`, error.message);
    return '';
  }
}

// Função para escrever arquivo
function writeFile(filePath, content) {
  try {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Arquivo criado: ${filePath}`);
  } catch (error) {
    console.error(`❌ Erro ao escrever arquivo: ${filePath}`, error.message);
  }
}

// Função para concatenar CSS
function concatCSS() {
  console.log('\n🎨 Concatenando arquivos CSS...');
  
  let cssContent = '/* ===== LUAE TAROT - CSS CONCATENADO ===== */\n';
  cssContent += '/* Build: ' + new Date().toISOString() + ' */\n\n';
  
  buildConfig.cssFiles.forEach(file => {
    const filePath = path.join(buildConfig.srcDir, 'assets/css', file);
    const content = readFile(filePath);
    if (content) {
      cssContent += `/* === ${file} === */\n`;
      cssContent += content + '\n\n';
    }
  });
  
  const outputPath = path.join(buildConfig.distDir, 'styles.min.css');
  writeFile(outputPath, cssContent);
  
  return cssContent.length;
}

// Função para concatenar JavaScript
function concatJS() {
  console.log('\n⚡ Concatenando arquivos JavaScript...');
  
  let jsContent = '/* ===== LUAE TAROT - JS CONCATENADO ===== */\n';
  jsContent += '/* Build: ' + new Date().toISOString() + ' */\n\n';
  
  buildConfig.jsFiles.forEach(file => {
    const filePath = path.join(buildConfig.srcDir, 'assets/js', file);
    const content = readFile(filePath);
    if (content) {
      jsContent += `/* === ${file} === */\n`;
      // Envolver cada módulo em uma IIFE para evitar conflitos de variáveis globais
      jsContent += `(function(){\n${content}\n})();\n\n`;
    }
  });
  
  const outputPath = path.join(buildConfig.distDir, 'script.min.js');
  writeFile(outputPath, jsContent);
  
  return jsContent.length;
}

// Função para corrigir caminhos CSS em arquivos HTML
function fixCSSPaths(content, isPage = false) {
  if (isPage) {
    // Para páginas (politica-privacidade.html, termos-de-uso.html)
    return content.replace(/href="\.\.\/styles\.min\.css"/g, 'href="styles.min.css"');
  }
  return content;
}

// Função para copiar arquivos estáticos
function copyStaticFiles() {
  console.log('\n📋 Copiando arquivos estáticos...');
  
  const staticFiles = [
    { src: 'index.html', dest: 'index.html', isPage: false },
    { src: 'pages/politica-privacidade.html', dest: 'politica-privacidade.html', isPage: true },
    { src: 'pages/termos-de-uso.html', dest: 'termos-de-uso.html', isPage: true },
    { src: 'assets/js/sw.js', dest: 'sw.js', isPage: false }
  ];
  
  staticFiles.forEach(file => {
    const srcPath = path.join(buildConfig.srcDir, file.src);
    const destPath = path.join(buildConfig.distDir, file.dest);
    
    if (fs.existsSync(srcPath)) {
      let content = readFile(srcPath);
      content = fixCSSPaths(content, file.isPage);
      writeFile(destPath, content);
    } else {
      console.log(`⚠️ Arquivo não encontrado: ${srcPath}`);
    }
  });
}

// Função para copiar imagens otimizadas
function copyImages() {
  console.log('\n🖼️ Copiando imagens otimizadas...');
  
  const imagesDir = path.join(buildConfig.srcDir, 'assets/images/optimized');
  const distImagesDir = path.join(buildConfig.distDir, 'images/optimized');
  
  if (fs.existsSync(imagesDir)) {
    ensureDir(distImagesDir);
    
    const files = fs.readdirSync(imagesDir);
    files.forEach(file => {
      if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
        const srcPath = path.join(imagesDir, file);
        const destPath = path.join(distImagesDir, file);
        
        try {
          fs.copyFileSync(srcPath, destPath);
          console.log(`✅ Imagem copiada: ${file}`);
        } catch (error) {
          console.error(`❌ Erro ao copiar imagem: ${file}`, error.message);
        }
      }
    });
  } else {
    console.log(`⚠️ Diretório de imagens não encontrado: ${imagesDir}`);
  }
}

// Função para copiar arquivos de configuração
function copyConfigFiles() {
  console.log('\n⚙️ Copiando arquivos de configuração...');
  
  const configFiles = [
    '.htaccess',
    'robots.txt',
    'sitemap.xml'
  ];
  
  configFiles.forEach(file => {
    const srcPath = path.join('.', file);
    const destPath = path.join(buildConfig.distDir, file);
    
    if (fs.existsSync(srcPath)) {
      const content = readFile(srcPath);
      writeFile(destPath, content);
    } else {
      console.log(`⚠️ Arquivo de configuração não encontrado: ${file}`);
    }
  });
}

// Função principal de build
function build() {
  console.log('🚀 Iniciando build de produção...');
  console.log('📅 Build iniciado em:', new Date().toLocaleString());
  
  // Criar diretório dist se não existir
  ensureDir(buildConfig.distDir);
  
  // Executar build
  const cssSize = concatCSS();
  const jsSize = concatJS();
  copyStaticFiles();
  copyImages();
  copyConfigFiles();
  
  // Resumo do build
  console.log('\n📊 RESUMO DO BUILD:');
  console.log('==================');
  console.log(`📁 Diretório de saída: ${buildConfig.distDir}`);
  console.log(`🎨 CSS concatenado: ${(cssSize / 1024).toFixed(2)} KB`);
  console.log(`⚡ JS concatenado: ${(jsSize / 1024).toFixed(2)} KB`);
  console.log(`📅 Build concluído em: ${new Date().toLocaleString()}`);
  console.log('\n✅ Build concluído com sucesso!');

  // Copiar dist/index.html para a raiz do projeto
  const distIndex = path.join(buildConfig.distDir, 'index.html');
  const rootIndex = path.join(__dirname, '..', 'index.html');
  try {
    fs.copyFileSync(distIndex, rootIndex);
    console.log('✅ index.html da raiz atualizado com sucesso!');
  } catch (err) {
    console.error('❌ Erro ao copiar index.html para a raiz:', err.message);
  }

  // Copiar dist/styles.min.css para a raiz do projeto
  const distCSS = path.join(buildConfig.distDir, 'styles.min.css');
  const rootCSS = path.join(__dirname, '..', 'styles.min.css');
  try {
    fs.copyFileSync(distCSS, rootCSS);
    console.log('✅ styles.min.css da raiz atualizado com sucesso!');
  } catch (err) {
    console.error('❌ Erro ao copiar styles.min.css para a raiz:', err.message);
  }

  // Copiar dist/script.min.js para a raiz do projeto
  const distJS = path.join(buildConfig.distDir, 'script.min.js');
  const rootJS = path.join(__dirname, '..', 'script.min.js');
  try {
    fs.copyFileSync(distJS, rootJS);
    console.log('✅ script.min.js da raiz atualizado com sucesso!');
  } catch (err) {
    console.error('❌ Erro ao copiar script.min.js para a raiz:', err.message);
  }
}

// Executar build se chamado diretamente
if (require.main === module) {
  build();
}

module.exports = { build, buildConfig }; 