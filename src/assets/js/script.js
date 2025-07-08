// ===== SISTEMA DE FOCO/BLUR DOS DEPOIMENTOS =====
document.addEventListener('DOMContentLoaded', function() {
    const relatos = document.querySelectorAll('.relato');
    
    if (relatos.length > 0) {
        // Definir o primeiro relato como foco inicial
        relatos[0].classList.add('foco');
        
        // Adicionar blur aos outros relatos
        for (let i = 1; i < relatos.length; i++) {
            relatos[i].classList.add('blur');
        }
        
        // Adicionar event listeners para cada relato
        relatos.forEach((relato, index) => {
            relato.addEventListener('click', function() {
                // Remover classes de todos os relatos
                relatos.forEach(r => {
                    r.classList.remove('foco', 'blur');
                });
                
                // Adicionar foco ao relato clicado
                relato.classList.add('foco');
                
                // Adicionar blur aos outros relatos
                relatos.forEach((r, i) => {
                    if (i !== index) {
                        r.classList.add('blur');
                    }
                });
            });
        });
    }
}); 