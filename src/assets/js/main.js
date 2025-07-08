/* ===== LUAE TAROT - MAIN JS ===== */
/* Arquivo principal que inicializa todos os módulos */

// Cache de elementos DOM para melhor performance
const domCache = {
  navLinks: null,
  cartas: null,
  descDiv: null,
  relatos: null,
  indicadoresContainer: null,
  btnTirarCarta: null,
  cartaTiradaDiv: null,
  imgCarta: null,
  nomeCarta: null,
  mensagemCarta: null,
  tarotLoading: null
};

// Cache de imagens das cartas para melhor performance
const imageCache = new Map();

// Tiragem de Tarot Grátis
const arcanos = [
  { key: 'mago', img: 'images/optimized/mago.png' },
  { key: 'sacerdotisa', img: 'images/optimized/sacerdotisa.png' },
  { key: 'imperatriz', img: 'images/optimized/imperatriz.png' },
  { key: 'imperador', img: 'images/optimized/imperador.png' },
  { key: 'papa', img: 'images/optimized/papa.png' },
  { key: 'enamorados', img: 'images/optimized/enamorados.png' },
  { key: 'carro', img: 'images/optimized/carro.png' },
  { key: 'justica', img: 'images/optimized/justica.png' },
  { key: 'eremita', img: 'images/optimized/eremita.png' },
  { key: 'fortuna', img: 'images/optimized/fortuna.png' },
  { key: 'forca', img: 'images/optimized/forca.png' },
  { key: 'pendurado', img: 'images/optimized/pendurado.png' },
  { key: 'morte', img: 'images/optimized/morte.png' },
  { key: 'temperanca', img: 'images/optimized/temperanca.png' },
  { key: 'diabo', img: 'images/optimized/diabo.png' },
  { key: 'torre', img: 'images/optimized/torre.png' },
  { key: 'estrela', img: 'images/optimized/estrela.png' },
  { key: 'lua', img: 'images/optimized/lua.png' },
  { key: 'sol', img: 'images/optimized/sol.png' },
  { key: 'julgamento', img: 'images/optimized/julgamento.png' },
  { key: 'mundo', img: 'images/optimized/mundo.png' },
  { key: 'louco', img: 'images/optimized/louco.png' }
];

// Função para obter tradução da carta
function getCardTranslation(cardKey, type = 'name') {
  const currentLang = localStorage.getItem('siteLanguage') || 'pt-BR';
  const translationKey = `tarot.${cardKey}.${type}`;
  
  if (window.translations && window.translations[currentLang] && window.translations[currentLang][translationKey]) {
    return window.translations[currentLang][translationKey];
  }
  
  // Fallback para português se não encontrar tradução
  return window.translations && window.translations['pt-BR'] && window.translations['pt-BR'][translationKey] 
    ? window.translations['pt-BR'][translationKey] 
    : cardKey;
}

// Descrições das cartas
const descricoes = {
  sacerdotisa: 'A Sacerdotisa representa intuição, mistério e sabedoria interior. Convida à escuta do próprio coração.',
  sol: 'O Sol simboliza clareza, alegria e realização. Traz luz para todas as situações.',
  louco: 'O Louco fala sobre novos começos, liberdade e confiança no universo. Abra-se para o desconhecido.'
};

// Função para pré-carregar imagens
function preloadImages() {
  arcanos.forEach(carta => {
    const img = new Image();
    img.src = carta.img;
    imageCache.set(carta.key, img);
  });
}

// Função para inicializar cache DOM e funcionalidades
function initDOMCache() {
  domCache.navLinks = document.querySelectorAll('.navbar a[href^="#"]');
  domCache.cartas = document.querySelectorAll('.carta');
  domCache.descDiv = document.getElementById('descricao-carta');
  domCache.relatos = document.querySelectorAll('.carrossel-relatos .relato');
  domCache.indicadoresContainer = document.querySelector('.indicadores-carrossel');
  domCache.btnTirarCarta = document.getElementById('btn-tirar-carta');
  domCache.cartaTiradaDiv = document.getElementById('carta-tirada');
  domCache.imgCarta = document.getElementById('img-carta');
  domCache.nomeCarta = document.getElementById('nome-carta');
  domCache.mensagemCarta = document.getElementById('mensagem-carta');
  domCache.tarotLoading = document.getElementById('tarot-loading');

  // Scroll suave para navegação
  if (domCache.navLinks) {
    domCache.navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // Event listeners para cartas (usando cache)
  if (domCache.cartas && domCache.descDiv) {
    domCache.cartas.forEach(carta => {
      carta.addEventListener('click', () => {
        const key = carta.getAttribute('data-carta');
        domCache.descDiv.textContent = descricoes[key] || '';
      });
    });
  }

  // Nenhuma lógica de carrossel, grid ou manipulação de relatos. Tudo removido.

  // Event listener para tiragem de tarot (usando cache)
  if (domCache.btnTirarCarta && domCache.tarotLoading && domCache.cartaTiradaDiv && domCache.imgCarta && domCache.nomeCarta && domCache.mensagemCarta) {
    domCache.btnTirarCarta.addEventListener('click', () => {
      // Esconde carta anterior e mostra loading
      domCache.cartaTiradaDiv.style.display = 'none';
      domCache.tarotLoading.style.display = 'flex';
      domCache.btnTirarCarta.disabled = true;
      // Simula conexão com o universo
      setTimeout(() => {
        const idx = Math.floor(Math.random() * arcanos.length);
        const carta = arcanos[idx];
        domCache.imgCarta.src = carta.img;
        domCache.imgCarta.alt = getCardTranslation(carta.key, 'name');
        domCache.nomeCarta.textContent = getCardTranslation(carta.key, 'name');
        domCache.mensagemCarta.textContent = getCardTranslation(carta.key, 'message');
        domCache.tarotLoading.style.display = 'none';
        domCache.cartaTiradaDiv.style.display = 'flex';
        domCache.cartaTiradaDiv.classList.remove('mostrar');
        setTimeout(() => {
          domCache.cartaTiradaDiv.classList.add('mostrar');
          domCache.btnTirarCarta.disabled = false;
        }, 30);
      }, 1500);
    });
  }

  // Pré-carregar imagens
  preloadImages();

  // Inicializar carrossel de depoimentos (após domCache estar pronto)
  if (typeof window.initCarousel === 'function') {
    window.initCarousel();
  }
}

// Inicializar aplicação
function initApp() {
  // Inicializar cache DOM
  initDOMCache();
  
  // Pré-carregar imagens
  preloadImages();
  
  console.log('🚀 Luaé Tarot inicializado com sucesso!');
}

// Inicializar quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', initApp);

// Inicializar quando página estiver completamente carregada
window.addEventListener('load', () => {
  console.log('📱 Site carregado completamente');
}); 