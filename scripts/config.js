/* ===== CONFIGURAÇÃO CENTRALIZADA ===== */
/* Configurações compartilhadas entre todos os scripts */

const path = require('path');

// Configurações do projeto
const projectConfig = {
  name: 'Luaé Tarot',
  version: '1.0.0',
  description: 'Site profissional de tarot da Luaé',
  author: 'Luaé Tarot',
  url: 'https://luae-tarot.com',
  email: 'contato@luae-tarot.com'
};

// Configurações de diretórios
const dirs = {
  src: './src',
  dist: './dist',
  backup: './backup',
  scripts: './scripts',
  docs: './docs',
  ftpUpload: './ftp-upload'
};

// Configurações de build
const buildConfig = {
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
  ],
  staticFiles: [
    { src: 'index.html', dest: 'index.html' },
    { src: 'pages/politica-privacidade.html', dest: 'politica-privacidade.html' },
    { src: 'pages/termos-de-uso.html', dest: 'termos-de-uso.html' },
    { src: 'assets/js/sw.js', dest: 'sw.js' }
  ],
  configFiles: [
    '.htaccess',
    'robots.txt',
    'sitemap.xml'
  ]
};

// Configurações de otimização
const optimizationConfig = {
  images: {
    srcDir: path.join(dirs.src, 'assets/images/original'),
    outputDir: path.join(dirs.src, 'assets/images/optimized'),
    quality: 60,
    maxWidth: 800,
    supportedFormats: ['.png', '.jpg', '.jpeg', '.gif', '.webp']
  },
  minification: {
    css: {
      removeComments: true,
      removeWhitespace: true,
      removeEmptyRules: true
    },
    js: {
      removeComments: true,
      removeWhitespace: true,
      mangle: false
    }
  }
};

// Configurações de servidor de desenvolvimento
const devServerConfig = {
  port: 3000,
  host: 'localhost',
  rootDir: dirs.src,
  mimeTypes: {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.webp': 'image/webp'
  }
};

// Configurações de deploy
const deployConfig = {
  platforms: {
    netlify: {
      command: 'netlify deploy --prod --dir=dist',
      description: 'Netlify',
      requirements: ['netlify-cli']
    },
    vercel: {
      command: 'vercel --prod',
      description: 'Vercel',
      requirements: ['vercel']
    },
    ftp: {
      command: 'lftp -c "open ftp://user:pass@host; mirror -R dist/ /public_html/"',
      description: 'FTP',
      requirements: ['lftp']
    }
  },
  backup: {
    enabled: true,
    maxBackups: 10,
    compress: false
  }
};

// Configurações de SEO
const seoConfig = {
  title: 'Luaé Tarot - Consultas Profissionais de Tarot',
  description: 'Consultas profissionais de tarot com Luaé. Descubra seu futuro com as cartas do tarot. Agende sua consulta online.',
  keywords: 'tarot, consulta tarot, cartas tarot, luaé tarot, tarot online, tarot profissional',
  author: 'Luaé Tarot',
  ogImage: '/images/optimized/lua.png',
  twitterCard: 'summary_large_image',
  canonical: 'https://luae-tarot.com'
};

// Configurações de analytics
const analyticsConfig = {
  googleAnalytics: {
    enabled: false,
    trackingId: 'GA_MEASUREMENT_ID'
  },
  googleSearchConsole: {
    enabled: false,
    verificationCode: 'VERIFICATION_CODE'
  }
};

// Configurações de cache
const cacheConfig = {
  serviceWorker: {
    enabled: true,
    cacheName: 'luae-tarot-v1',
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 dias
  },
  browser: {
    css: '1 year',
    js: '1 year',
    images: '1 month',
    html: '1 hour'
  }
};

// Configurações de performance
const performanceConfig = {
  lazyLoading: {
    enabled: true,
    threshold: 0.1
  },
  preload: {
    criticalCSS: true,
    criticalJS: true,
    fonts: false
  },
  compression: {
    gzip: true,
    brotli: false
  }
};

// Exportar todas as configurações
module.exports = {
  projectConfig,
  dirs,
  buildConfig,
  optimizationConfig,
  devServerConfig,
  deployConfig,
  seoConfig,
  analyticsConfig,
  cacheConfig,
  performanceConfig
}; 