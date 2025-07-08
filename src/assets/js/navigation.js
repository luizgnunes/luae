/* ===== NAVEGAÇÃO ===== */
/* Funcionalidade de navegação suave */

// Inicializar navegação
function initNavigation() {
  if (domCache.navLinks) {
    domCache.navLinks.forEach(link => {
      link.addEventListener('click', handleNavigationClick);
    });
  }
}

// Handler para clique na navegação
function handleNavigationClick(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  const target = document.querySelector(href);
  smoothScrollTo(target);
}

// Inicializar quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', initNavigation); 