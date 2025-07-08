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

// Função para inicializar carrossel de depoimentos
function initCarousel() {
  const relatos = document.querySelectorAll('.carrossel-relatos .relato');
  const indicadoresContainer = document.querySelector('.indicadores-carrossel');
  
  if (!relatos.length || !indicadoresContainer) {
    console.log('⚠️ Elementos do carrossel não encontrados');
    return;
  }

  let currentIndex = 0;
  let interval;

  // Criar indicadores
  relatos.forEach((_, index) => {
    const indicador = document.createElement('div');
    indicador.className = 'bolinha';
    if (index === 0) indicador.classList.add('ativa');
    indicador.addEventListener('click', () => goToSlide(index));
    indicadoresContainer.appendChild(indicador);
  });

  // Função para ir para slide específico
  function goToSlide(index) {
    if (index < 0 || index >= relatos.length) return;
    
    // Remover classes ativas
    relatos.forEach(relato => {
      relato.classList.remove('foco', 'blur');
    });
    document.querySelectorAll('.indicadores-carrossel .bolinha').forEach(bolinha => {
      bolinha.classList.remove('ativa');
    });

    // Aplicar classes
    relatos[index].classList.add('foco');
    document.querySelectorAll('.indicadores-carrossel .bolinha')[index].classList.add('ativa');
    
    // Aplicar blur nos outros
    relatos.forEach((relato, i) => {
      if (i !== index) {
        relato.classList.add('blur');
      }
    });

    currentIndex = index;
  }

  // Função para próximo slide
  function nextSlide() {
    const nextIndex = (currentIndex + 1) % relatos.length;
    goToSlide(nextIndex);
  }

  // Iniciar carrossel
  function startCarousel() {
    interval = setInterval(nextSlide, 4000); // 4 segundos
  }

  // Parar carrossel
  function stopCarousel() {
    if (interval) {
      clearInterval(interval);
    }
  }

  // Event listeners para pausar no hover
  const carrosselContainer = document.querySelector('.carrossel-relatos');
  if (carrosselContainer) {
    carrosselContainer.addEventListener('mouseenter', stopCarousel);
    carrosselContainer.addEventListener('mouseleave', startCarousel);
  }

  // Inicializar primeiro slide
  goToSlide(0);
  
  // Iniciar carrossel automático
  startCarousel();

  console.log('✅ Carrossel de depoimentos inicializado');
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

// Função debounce para otimização
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

// Exportar função para uso global
window.initCarousel = initCarousel; 