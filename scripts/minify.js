/* ===== MINIFY SCRIPT ===== */
/* Script para minificar arquivos CSS e JavaScript */

const fs = require('fs');
const path = require('path');

// Função para minificar CSS
function minifyCSS(css) {
  return css
    // Remove comentários
    .replace(/\/\*[\s\S]*?\*\//g, '')
    // Remove espaços em branco desnecessários
    .replace(/\s+/g, ' ')
    // Remove espaços antes de caracteres especiais
    .replace(/\s*([{}:;,>+~])\s*/g, '$1')
    // Remove espaços no final de linhas
    .replace(/\s*;\s*}/g, '}')
    // Remove espaços no início e fim
    .trim();
}

// Função para minificar JavaScript
function minifyJS(js) {
  return js
    // Remove comentários de linha única
    .replace(/\/\/.*$/gm, '')
    // Remove comentários de múltiplas linhas
    .replace(/\/\*[\s\S]*?\*\//g, '')
    // Remove espaços em branco desnecessários
    .replace(/\s+/g, ' ')
    // Remove espaços antes de caracteres especiais
    .replace(/\s*([{}:;,=+\-*/<>!&|])\s*/g, '$1')
    // Remove espaços no início e fim
    .trim();
}

// Função para minificar arquivo
function minifyFile(inputPath, outputPath, type) {
  try {
    const content = fs.readFileSync(inputPath, 'utf8');
    let minified;
    
    if (type === 'css') {
      minified = minifyCSS(content);
    } else if (type === 'js') {
      minified = minifyJS(content);
    } else {
      throw new Error('Tipo de arquivo não suportado');
    }
    
    fs.writeFileSync(outputPath, minified, 'utf8');
    console.log(`✅ Arquivo minificado: ${path.basename(outputPath)}`);
    
    const originalSize = content.length;
    const minifiedSize = minified.length;
    const reduction = ((originalSize - minifiedSize) / originalSize * 100).toFixed(1);
    
    console.log(`   📊 Tamanho original: ${(originalSize / 1024).toFixed(2)} KB`);
    console.log(`   📊 Tamanho minificado: ${(minifiedSize / 1024).toFixed(2)} KB`);
    console.log(`   📊 Redução: ${reduction}%`);
    
    return { originalSize, minifiedSize, reduction };
  } catch (error) {
    console.error(`❌ Erro ao minificar ${inputPath}:`, error.message);
    return null;
  }
}

// Função para minificar arquivos do build
function minifyBuild() {
  console.log('🔧 Iniciando minificação...');
  
  const distDir = './dist';
  const filesToMinify = [
    { input: 'styles.min.css', output: 'styles.min.css', type: 'css' },
    { input: 'script.min.js', output: 'script.min.js', type: 'js' }
  ];
  
  let totalOriginalSize = 0;
  let totalMinifiedSize = 0;
  
  filesToMinify.forEach(file => {
    const inputPath = path.join(distDir, file.input);
    const outputPath = path.join(distDir, file.output);
    
    if (fs.existsSync(inputPath)) {
      const result = minifyFile(inputPath, outputPath, file.type);
      if (result) {
        totalOriginalSize += result.originalSize;
        totalMinifiedSize += result.minifiedSize;
      }
    } else {
      console.log(`⚠️ Arquivo não encontrado: ${inputPath}`);
    }
  });
  
  // Resumo da minificação
  if (totalOriginalSize > 0) {
    const totalReduction = ((totalOriginalSize - totalMinifiedSize) / totalOriginalSize * 100).toFixed(1);
    console.log('\n📊 RESUMO DA MINIFICAÇÃO:');
    console.log('========================');
    console.log(`📊 Tamanho total original: ${(totalOriginalSize / 1024).toFixed(2)} KB`);
    console.log(`📊 Tamanho total minificado: ${(totalMinifiedSize / 1024).toFixed(2)} KB`);
    console.log(`📊 Redução total: ${totalReduction}%`);
    console.log(`📊 Economia: ${((totalOriginalSize - totalMinifiedSize) / 1024).toFixed(2)} KB`);
  }
  
  console.log('\n✅ Minificação concluída!');
}

// Executar minificação se chamado diretamente
if (require.main === module) {
  minifyBuild();
}

module.exports = { minifyCSS, minifyJS, minifyFile, minifyBuild }; 