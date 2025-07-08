/* ===== UTILITÁRIOS ===== */
/* Funções utilitárias e helpers */

// Função para pré-carregar imagens
function preloadImages() {
  arcanos.forEach(carta => {
    const img = new Image();
    img.src = carta.img;
    imageCache.set(carta.nome, img);
  });
}

// Função para inicializar cache DOM
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
}

// Função para scroll suave
function smoothScrollTo(target, offset = 70) {
  if (target) {
    window.scrollTo({
      top: target.offsetTop - offset,
      behavior: 'smooth'
    });
  }
}

// Função para debounce (otimização de performance)
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Função para verificar se elemento existe
function elementExists(element) {
  return element !== null && element !== undefined;
}

// Função para adicionar classe com delay
function addClassWithDelay(element, className, delay) {
  setTimeout(() => {
    if (elementExists(element)) {
      element.classList.add(className);
    }
  }, delay);
}

// Função para remover classe com delay
function removeClassWithDelay(element, className, delay) {
  setTimeout(() => {
    if (elementExists(element)) {
      element.classList.remove(className);
    }
  }, delay);
}

// Função para mostrar elemento
function showElement(element) {
  if (elementExists(element)) {
    element.style.display = 'flex';
  }
}

// Função para esconder elemento
function hideElement(element) {
  if (elementExists(element)) {
    element.style.display = 'none';
  }
}

// Função para desabilitar botão
function disableButton(button) {
  if (elementExists(button)) {
    button.disabled = true;
  }
}

// Função para habilitar botão
function enableButton(button) {
  if (elementExists(button)) {
    button.disabled = false;
  }
} 