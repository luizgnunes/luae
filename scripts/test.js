/* ===== TEST SCRIPT ===== */
/* Script para testar a integridade do projeto */

const fs = require('fs');
const path = require('path');

// Função para verificar se arquivo existe
function fileExists(filePath) {
  return fs.existsSync(filePath);
}

// Função para verificar se diretório existe
function dirExists(dirPath) {
  return fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory();
}

// Função para listar arquivos em diretório
function listFiles(dirPath) {
  if (!dirExists(dirPath)) return [];
  return fs.readdirSync(dirPath);
}

// Função para obter tamanho do arquivo
function getFileSize(filePath) {
  if (!fileExists(filePath)) return 0;
  return fs.statSync(filePath).size;
}

// Função para testar estrutura de diretórios
function testDirectoryStructure() {
  console.log('📁 Testando estrutura de diretórios...');
  
  const requiredDirs = [
    './src',
    './src/assets',
    './src/assets/css',
    './src/assets/js',
    './src/assets/images',
    './src/assets/images/optimized',
    './src/pages',
    './scripts'
  ];
  
  let allDirsExist = true;
  
  requiredDirs.forEach(dir => {
    if (dirExists(dir)) {
      console.log(`✅ ${dir}`);
    } else {
      console.log(`❌ ${dir} - NÃO ENCONTRADO`);
      allDirsExist = false;
    }
  });
  
  return allDirsExist;
}

// Função para testar arquivos CSS
function testCSSFiles() {
  console.log('\n🎨 Testando arquivos CSS...');
  
  const cssDir = './src/assets/css';
  const requiredCSS = [
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
  ];
  
  let allCSSExist = true;
  let totalSize = 0;
  
  requiredCSS.forEach(file => {
    const filePath = path.join(cssDir, file);
    if (fileExists(filePath)) {
      const size = getFileSize(filePath);
      totalSize += size;
      console.log(`✅ ${file} (${(size / 1024).toFixed(2)} KB)`);
    } else {
      console.log(`❌ ${file} - NÃO ENCONTRADO`);
      allCSSExist = false;
    }
  });
  
  console.log(`📊 Total CSS: ${(totalSize / 1024).toFixed(2)} KB`);
  return allCSSExist;
}

// Função para testar arquivos JavaScript
function testJSFiles() {
  console.log('\n⚡ Testando arquivos JavaScript...');
  
  const jsDir = './src/assets/js';
  const requiredJS = [
    'config.js',
    'utils.js',
    'navigation.js',
    'cards.js',
    'carousel.js',
    'tarot.js',
    'cookies.js',
    'main.js',
    'app.js'
  ];
  
  let allJSExist = true;
  let totalSize = 0;
  
  requiredJS.forEach(file => {
    const filePath = path.join(jsDir, file);
    if (fileExists(filePath)) {
      const size = getFileSize(filePath);
      totalSize += size;
      console.log(`✅ ${file} (${(size / 1024).toFixed(2)} KB)`);
    } else {
      console.log(`❌ ${file} - NÃO ENCONTRADO`);
      allJSExist = false;
    }
  });
  
  console.log(`📊 Total JS: ${(totalSize / 1024).toFixed(2)} KB`);
  return allJSExist;
}

// Função para testar imagens
function testImages() {
  console.log('\n🖼️ Testando imagens...');
  
  const imagesDir = './src/assets/images/optimized';
  const imageFiles = listFiles(imagesDir);
  
  if (imageFiles.length === 0) {
    console.log('⚠️ Nenhuma imagem encontrada');
    return false;
  }
  
  let totalSize = 0;
  let pngCount = 0;
  let jpgCount = 0;
  
  imageFiles.forEach(file => {
    const filePath = path.join(imagesDir, file);
    const size = getFileSize(filePath);
    totalSize += size;
    
    if (file.endsWith('.png')) pngCount++;
    if (file.endsWith('.jpg') || file.endsWith('.jpeg')) jpgCount++;
    
    console.log(`✅ ${file} (${(size / 1024 / 1024).toFixed(2)} MB)`);
  });
  
  console.log(`📊 Total imagens: ${imageFiles.length}`);
  console.log(`📊 PNG: ${pngCount}, JPG: ${jpgCount}`);
  console.log(`📊 Tamanho total: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
  
  return imageFiles.length > 0;
}

// Função para testar arquivos HTML
function testHTMLFiles() {
  console.log('\n📄 Testando arquivos HTML...');
  
  const requiredHTML = [
    './src/index.html',
    './src/pages/politica-privacidade.html',
    './src/pages/termos-de-uso.html'
  ];
  
  let allHTMLExist = true;
  
  requiredHTML.forEach(file => {
    if (fileExists(file)) {
      const size = getFileSize(file);
      console.log(`✅ ${path.basename(file)} (${(size / 1024).toFixed(2)} KB)`);
    } else {
      console.log(`❌ ${path.basename(file)} - NÃO ENCONTRADO`);
      allHTMLExist = false;
    }
  });
  
  return allHTMLExist;
}

// Função para testar scripts de build
function testBuildScripts() {
  console.log('\n🔧 Testando scripts de build...');
  
  const requiredScripts = [
    './scripts/build.js',
    './scripts/minify.js',
    './scripts/optimize-images.js',
    './scripts/clean.js',
    './scripts/dev-server.js',
    './scripts/deploy.js',
    './scripts/config.js'
  ];
  
  let allScriptsExist = true;
  
  requiredScripts.forEach(script => {
    if (fileExists(script)) {
      console.log(`✅ ${path.basename(script)}`);
    } else {
      console.log(`❌ ${path.basename(script)} - NÃO ENCONTRADO`);
      allScriptsExist = false;
    }
  });
  
  return allScriptsExist;
}

// Função para testar arquivos de configuração
function testConfigFiles() {
  console.log('\n⚙️ Testando arquivos de configuração...');
  
  const requiredConfig = [
    './package.json',
    './.htaccess',
    './robots.txt',
    './sitemap.xml',
    './README.md'
  ];
  
  let allConfigExist = true;
  
  requiredConfig.forEach(file => {
    if (fileExists(file)) {
      const size = getFileSize(file);
      console.log(`✅ ${path.basename(file)} (${(size / 1024).toFixed(2)} KB)`);
    } else {
      console.log(`❌ ${path.basename(file)} - NÃO ENCONTRADO`);
      allConfigExist = false;
    }
  });
  
  return allConfigExist;
}

// Função para testar build de produção
function testProductionBuild() {
  console.log('\n🚀 Testando build de produção...');
  
  if (!dirExists('./dist')) {
    console.log('❌ Diretório dist/ não encontrado');
    console.log('💡 Execute: npm run build:full');
    return false;
  }
  
  const distFiles = listFiles('./dist');
  const requiredDistFiles = [
    'index.html',
    'styles.min.css',
    'script.min.js',
    'sw.js'
  ];
  
  let allDistFilesExist = true;
  let totalSize = 0;
  
  requiredDistFiles.forEach(file => {
    const filePath = path.join('./dist', file);
    if (fileExists(filePath)) {
      const size = getFileSize(filePath);
      totalSize += size;
      console.log(`✅ ${file} (${(size / 1024).toFixed(2)} KB)`);
    } else {
      console.log(`❌ ${file} - NÃO ENCONTRADO`);
      allDistFilesExist = false;
    }
  });
  
  console.log(`📊 Total arquivos de produção: ${(totalSize / 1024).toFixed(2)} KB`);
  return allDistFilesExist;
}

// Função principal de teste
function runTests() {
  console.log('🧪 Iniciando testes de integridade...');
  console.log('📅 Testes iniciados em:', new Date().toLocaleString());
  console.log('=' .repeat(50));
  
  const tests = [
    { name: 'Estrutura de diretórios', test: testDirectoryStructure },
    { name: 'Arquivos CSS', test: testCSSFiles },
    { name: 'Arquivos JavaScript', test: testJSFiles },
    { name: 'Imagens', test: testImages },
    { name: 'Arquivos HTML', test: testHTMLFiles },
    { name: 'Scripts de build', test: testBuildScripts },
    { name: 'Arquivos de configuração', test: testConfigFiles },
    { name: 'Build de produção', test: testProductionBuild }
  ];
  
  let passedTests = 0;
  let totalTests = tests.length;
  
  tests.forEach(({ name, test }) => {
    try {
      const result = test();
      if (result) {
        passedTests++;
      }
    } catch (error) {
      console.error(`❌ Erro no teste "${name}":`, error.message);
    }
  });
  
  console.log('\n' + '=' .repeat(50));
  console.log('📊 RESUMO DOS TESTES:');
  console.log('=====================');
  console.log(`✅ Testes aprovados: ${passedTests}/${totalTests}`);
  console.log(`❌ Testes falharam: ${totalTests - passedTests}/${totalTests}`);
  
  if (passedTests === totalTests) {
    console.log('\n🎉 Todos os testes passaram! O projeto está pronto para produção.');
  } else {
    console.log('\n⚠️ Alguns testes falharam. Verifique os problemas acima.');
  }
  
  console.log('\n📅 Testes concluídos em:', new Date().toLocaleString());
}

// Executar testes se chamado diretamente
if (require.main === module) {
  runTests();
}

module.exports = { runTests }; 