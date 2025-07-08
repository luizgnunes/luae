/* ===== CARTAS ===== */
/* Funcionalidade das cartas de tarot */

// Inicializar funcionalidade das cartas
function initCards() {
  if (domCache.cartas && domCache.descDiv) {
    domCache.cartas.forEach(carta => {
      carta.addEventListener('click', handleCardClick);
    });
  }
}

// Handler para clique nas cartas
function handleCardClick() {
  const key = this.getAttribute('data-carta');
  const descricao = descricoes[key] || '';
  domCache.descDiv.textContent = descricao;
}

// Inicializar quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', initCards); 