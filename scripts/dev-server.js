/* ===== DEV SERVER ===== */
/* Servidor de desenvolvimento simples */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Configurações do servidor
const serverConfig = {
  port: 3000,
  host: 'localhost',
  rootDir: './dist' // Alterado de './src' para './dist'
};

// MIME types
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

// Função para obter MIME type
function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return mimeTypes[ext] || 'text/plain';
}

// Função para servir arquivo
function serveFile(filePath, res) {
  try {
    const content = fs.readFileSync(filePath);
    const mimeType = getMimeType(filePath);
    
    res.writeHead(200, {
      'Content-Type': mimeType,
      'Content-Length': content.length
    });
    
    res.end(content);
  } catch (error) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Arquivo não encontrado');
  }
}

// Função para criar servidor
function createServer() {
  const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    let pathname = parsedUrl.pathname;
    
    // Rota padrão
    if (pathname === '/') {
      pathname = '/index.html';
    }
    
    // Construir caminho do arquivo
    const filePath = path.join(serverConfig.rootDir, pathname);
    
    // Verificar se arquivo existe
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      serveFile(filePath, res);
    } else {
      // Tentar com .html
      const htmlPath = filePath + '.html';
      if (fs.existsSync(htmlPath)) {
        serveFile(htmlPath, res);
      } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`
          <html>
            <head><title>404 - Não encontrado</title></head>
            <body>
              <h1>404 - Página não encontrada</h1>
              <p>A página <strong>${pathname}</strong> não foi encontrada.</p>
              <a href="/">Voltar ao início</a>
            </body>
          </html>
        `);
      }
    }
  });
  
  return server;
}

// Função para iniciar servidor
function startServer() {
  const server = createServer();
  
  server.listen(serverConfig.port, serverConfig.host, () => {
    console.log('🚀 Servidor de desenvolvimento iniciado!');
    console.log(`📱 URL: http://${serverConfig.host}:${serverConfig.port}`);
    console.log(`📁 Diretório raiz: ${serverConfig.rootDir}`);
    console.log('🔄 Pressione Ctrl+C para parar o servidor');
  });
  
  // Tratamento de erros
  server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
      console.error(`❌ Porta ${serverConfig.port} já está em uso`);
      console.log('💡 Tente usar uma porta diferente ou pare o processo atual');
    } else {
      console.error('❌ Erro no servidor:', error.message);
    }
  });
}

// Executar servidor se chamado diretamente
if (require.main === module) {
  startServer();
}

module.exports = { startServer, serverConfig }; 