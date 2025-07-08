// ===== INICIALIZAÇÃO DO SISTEMA DE IDIOMAS =====
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar sistema de idiomas
    if (typeof initLanguageSystem === 'function') {
        initLanguageSystem();
    }
}); 