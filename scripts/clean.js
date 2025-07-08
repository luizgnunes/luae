/* ===== CLEAN SCRIPT ===== */
/* Script para limpar arquivos de build */

const fs = require('fs');
const path = require('path');

// Diretórios para limpar
const dirsToClean = [
  './dist',
  './src/assets/images/optimized'
];

// Função para remover diretório recursivamente
function removeDir(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
    console.log(`🗑️ Removido diretório: ${dir}`);
  }
}

// Função para limpar arquivos específicos
function cleanFiles() {
  const filesToRemove = [
    './styles.min.css',
    './script.min.js'
  ];
  
  filesToRemove.forEach(file => {
    if (fs.existsSync(file)) {
      fs.unlinkSync(file);
      console.log(`🗑️ Removido arquivo: ${file}`);
    }
  });
}

// Função principal de limpeza
function clean() {
  console.log('🧹 Iniciando limpeza...');
  
  // Limpar diretórios
  dirsToClean.forEach(dir => {
    removeDir(dir);
  });
  
  // Limpar arquivos
  cleanFiles();
  
  console.log('✅ Limpeza concluída!');
}

// Executar limpeza se chamado diretamente
if (require.main === module) {
  clean();
}

module.exports = { clean }; 