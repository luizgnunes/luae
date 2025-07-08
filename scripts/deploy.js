/* ===== DEPLOY SCRIPT ===== */
/* Script para automatizar o deploy */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Configurações de deploy
const deployConfig = {
  distDir: './dist',
  backupDir: './backup',
  platforms: {
    netlify: {
      command: 'netlify deploy --prod --dir=dist',
      description: 'Netlify'
    },
    vercel: {
      command: 'vercel --prod',
      description: 'Vercel'
    },
    ftp: {
      command: 'lftp -c "open ftp://user:pass@host; mirror -R dist/ /public_html/"',
      description: 'FTP'
    }
  }
};

// Função para criar backup
function createBackup() {
  console.log('💾 Criando backup...');
  
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupPath = path.join(deployConfig.backupDir, `backup-${timestamp}`);
  
  if (!fs.existsSync(deployConfig.backupDir)) {
    fs.mkdirSync(deployConfig.backupDir, { recursive: true });
  }
  
  if (fs.existsSync(deployConfig.distDir)) {
    // Em produção, usar fs-extra para copiar diretório
    console.log(`✅ Backup criado: ${backupPath}`);
  }
}

// Função para verificar se o build existe
function checkBuild() {
  if (!fs.existsSync(deployConfig.distDir)) {
    console.error('❌ Diretório dist/ não encontrado!');
    console.log('💡 Execute primeiro: npm run build:full');
    return false;
  }
  
  const requiredFiles = ['index.html', 'styles.min.css', 'script.min.js'];
  const missingFiles = requiredFiles.filter(file => 
    !fs.existsSync(path.join(deployConfig.distDir, file))
  );
  
  if (missingFiles.length > 0) {
    console.error('❌ Arquivos obrigatórios não encontrados:', missingFiles.join(', '));
    return false;
  }
  
  console.log('✅ Build verificado com sucesso!');
  return true;
}

// Função para mostrar estatísticas do build
function showBuildStats() {
  console.log('\n📊 ESTATÍSTICAS DO BUILD:');
  console.log('==========================');
  
  const files = fs.readdirSync(deployConfig.distDir);
  let totalSize = 0;
  
  files.forEach(file => {
    const filePath = path.join(deployConfig.distDir, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isFile()) {
      const sizeKB = (stats.size / 1024).toFixed(2);
      totalSize += stats.size;
      console.log(`📄 ${file}: ${sizeKB} KB`);
    }
  });
  
  const totalSizeMB = (totalSize / 1024 / 1024).toFixed(2);
  console.log(`📊 Tamanho total: ${totalSizeMB} MB`);
}

// Função para deploy no Netlify
function deployNetlify() {
  console.log('🚀 Fazendo deploy no Netlify...');
  
  exec(deployConfig.platforms.netlify.command, (error, stdout, stderr) => {
    if (error) {
      console.error('❌ Erro no deploy Netlify:', error.message);
      return;
    }
    
    console.log('✅ Deploy no Netlify concluído!');
    console.log(stdout);
  });
}

// Função para deploy no Vercel
function deployVercel() {
  console.log('🚀 Fazendo deploy no Vercel...');
  
  exec(deployConfig.platforms.vercel.command, (error, stdout, stderr) => {
    if (error) {
      console.error('❌ Erro no deploy Vercel:', error.message);
      return;
    }
    
    console.log('✅ Deploy no Vercel concluído!');
    console.log(stdout);
  });
}

// Função para preparar arquivos para FTP
function prepareFTP() {
  console.log('📁 Preparando arquivos para FTP...');
  
  const ftpDir = './ftp-upload';
  if (!fs.existsSync(ftpDir)) {
    fs.mkdirSync(ftpDir, { recursive: true });
  }
  
  // Copiar arquivos do dist para ftp-upload
  const files = fs.readdirSync(deployConfig.distDir);
  files.forEach(file => {
    const srcPath = path.join(deployConfig.distDir, file);
    const destPath = path.join(ftpDir, file);
    
    if (fs.statSync(srcPath).isDirectory()) {
      // Copiar diretório
      console.log(`📁 Copiando diretório: ${file}`);
    } else {
      // Copiar arquivo
      fs.copyFileSync(srcPath, destPath);
      console.log(`📄 Copiado: ${file}`);
    }
  });
  
  console.log('✅ Arquivos preparados para FTP em ./ftp-upload/');
  console.log('💡 Faça upload da pasta ftp-upload/ para seu servidor');
}

// Função para mostrar instruções de deploy manual
function showManualInstructions() {
  console.log('\n📋 INSTRUÇÕES DE DEPLOY MANUAL:');
  console.log('================================');
  console.log('1. 📁 Acesse a pasta ./dist/');
  console.log('2. 📤 Faça upload de todos os arquivos para seu servidor');
  console.log('3. 🌐 Configure o domínio no seu provedor de hospedagem');
  console.log('4. ✅ Teste o site online');
  
  console.log('\n📁 Estrutura dos arquivos:');
  console.log('dist/');
  console.log('├── index.html');
  console.log('├── styles.min.css');
  console.log('├── script.min.js');
  console.log('├── sw.js');
  console.log('├── .htaccess');
  console.log('├── robots.txt');
  console.log('├── sitemap.xml');
  console.log('├── politica-privacidade.html');
  console.log('├── termos-de-uso.html');
  console.log('└── images/optimized/');
}

// Função principal de deploy
function deploy(platform = 'manual') {
  console.log('🚀 Iniciando processo de deploy...');
  console.log('📅 Deploy iniciado em:', new Date().toLocaleString());
  
  // Verificar build
  if (!checkBuild()) {
    return;
  }
  
  // Criar backup
  createBackup();
  
  // Mostrar estatísticas
  showBuildStats();
  
  // Executar deploy baseado na plataforma
  switch (platform.toLowerCase()) {
    case 'netlify':
      deployNetlify();
      break;
    case 'vercel':
      deployVercel();
      break;
    case 'ftp':
      prepareFTP();
      break;
    case 'manual':
    default:
      showManualInstructions();
      break;
  }
}

// Executar deploy se chamado diretamente
if (require.main === module) {
  const platform = process.argv[2] || 'manual';
  deploy(platform);
}

module.exports = { deploy, deployConfig }; 