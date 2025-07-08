/* ===== COOKIES ===== */
/* Banner de cookies */

// Mostrar banner de cookies
function showCookieBanner() {
  if (localStorage.getItem('cookieAccepted')) return;
  
  const banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.innerHTML = `
    Este site utiliza cookies essenciais para seu funcionamento. Não coletamos dados pessoais nem utilizamos cookies de rastreamento. Ao continuar navegando, você concorda com nossa <a href='politica-privacidade.html' target='_blank' style='color:#22304a;text-decoration:underline;'>Política de Privacidade</a>.
    <button id='btn-aceitar-cookies'>Ok, entendi</button>
  `;
  
  document.body.appendChild(banner);
  
  // Adicionar event listener ao botão
  const btnAceitar = document.getElementById('btn-aceitar-cookies');
  if (btnAceitar) {
    btnAceitar.addEventListener('click', acceptCookies);
  }
}

// Aceitar cookies
function acceptCookies() {
  localStorage.setItem('cookieAccepted', '1');
  const banner = document.querySelector('.cookie-banner');
  if (banner) {
    banner.remove();
  }
}

// Verificar se cookies foram aceitos
function checkCookieAcceptance() {
  return localStorage.getItem('cookieAccepted') === '1';
}

// Inicializar quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', showCookieBanner); 