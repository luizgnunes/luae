/* ===== LUAE TAROT - MAIN JS ===== */
/* Arquivo principal que inicializa todos os módulos */

// Tiragem de Tarot Grátis
const arcanos = [
  { 
    key: 'mago', 
    img: 'images/optimized/mago.png', 
    nome: 'O Mago', 
    mensagem: 'Você tem o poder de manifestar seus desejos. Use sua criatividade e determinação para transformar sonhos em realidade.',
    nomeEn: 'The Magician',
    mensagemEn: 'You have the power to manifest your desires. Use your creativity and determination to transform dreams into reality.'
  },
  { 
    key: 'sacerdotisa', 
    img: 'images/optimized/sacerdotisa.png', 
    nome: 'A Sacerdotisa', 
    mensagem: 'Conecte-se com sua intuição e sabedoria interior. Esteja atento aos sinais e mensagens do universo.',
    nomeEn: 'The High Priestess',
    mensagemEn: 'Connect with your intuition and inner wisdom. Be attentive to signs and messages from the universe.'
  },
  { 
    key: 'imperatriz', 
    img: 'images/optimized/imperatriz.png', 
    nome: 'A Imperatriz', 
    mensagem: 'Abundância e fertilidade estão ao seu alcance. Nutra seus projetos e relacionamentos com amor e paciência.',
    nomeEn: 'The Empress',
    mensagemEn: 'Abundance and fertility are within your reach. Nurture your projects and relationships with love and patience.'
  },
  { 
    key: 'imperador', 
    img: 'images/optimized/imperador.png', 
    nome: 'O Imperador', 
    mensagem: 'Assuma o controle da situação com autoridade e disciplina. Estrutura e organização são essenciais agora.',
    nomeEn: 'The Emperor',
    mensagemEn: 'Take control of the situation with authority and discipline. Structure and organization are essential now.'
  },
  { 
    key: 'papa', 
    img: 'images/optimized/papa.png', 
    nome: 'O Papa', 
    mensagem: 'Busque orientação espiritual e siga sua fé interior. Conhecimento e sabedoria estão disponíveis para você.',
    nomeEn: 'The Hierophant',
    mensagemEn: 'Seek spiritual guidance and follow your inner faith. Knowledge and wisdom are available to you.'
  },
  { 
    key: 'enamorados', 
    img: 'images/optimized/enamorados.png', 
    nome: 'Os Enamorados', 
    mensagem: 'Decisões importantes sobre amor e relacionamentos. Escolha com o coração, mas não ignore a razão.',
    nomeEn: 'The Lovers',
    mensagemEn: 'Important decisions about love and relationships. Choose with your heart, but don\'t ignore reason.'
  },
  { 
    key: 'carro', 
    img: 'images/optimized/carro.png', 
    nome: 'O Carro', 
    mensagem: 'Progresso e vitória através da determinação. Mantenha o controle e siga em frente com confiança.',
    nomeEn: 'The Chariot',
    mensagemEn: 'Progress and victory through determination. Maintain control and move forward with confidence.'
  },
  { 
    key: 'justica', 
    img: 'images/optimized/justica.png', 
    nome: 'A Justiça', 
    mensagem: 'Equilíbrio e justiça prevalecem. Seja honesto consigo mesmo e com os outros.',
    nomeEn: 'Justice',
    mensagemEn: 'Balance and justice prevail. Be honest with yourself and others.'
  },
  { 
    key: 'eremita', 
    img: 'images/optimized/eremita.png', 
    nome: 'O Eremita', 
    mensagem: 'Momento de introspecção e busca interior. Solitude pode trazer clareza.',
    nomeEn: 'The Hermit',
    mensagemEn: 'Time for introspection and inner search. Solitude can bring clarity.'
  },
  { 
    key: 'fortuna', 
    img: 'images/optimized/fortuna.png', 
    nome: 'A Roda da Fortuna', 
    mensagem: 'Mudanças estão chegando. Aceite os ciclos da vida com otimismo.',
    nomeEn: 'Wheel of Fortune',
    mensagemEn: 'Changes are coming. Accept life\'s cycles with optimism.'
  },
  { 
    key: 'forca', 
    img: 'images/optimized/forca.png', 
    nome: 'A Força', 
    mensagem: 'Use sua força interior com gentileza e compaixão. Paciência e coragem são suas aliadas.',
    nomeEn: 'Strength',
    mensagemEn: 'Use your inner strength with gentleness and compassion. Patience and courage are your allies.'
  },
  { 
    key: 'pendurado', 
    img: 'images/optimized/pendurado.png', 
    nome: 'O Pendurado', 
    mensagem: 'Mudança de perspectiva é necessária. Veja a situação de um novo ângulo.',
    nomeEn: 'The Hanged Man',
    mensagemEn: 'A change of perspective is needed. See the situation from a new angle.'
  },
  { 
    key: 'morte', 
    img: 'images/optimized/morte.png', 
    nome: 'A Morte', 
    mensagem: 'Transformação e renascimento. Deixe ir o que não serve mais.',
    nomeEn: 'Death',
    mensagemEn: 'Transformation and rebirth. Let go of what no longer serves you.'
  },
  { 
    key: 'temperanca', 
    img: 'images/optimized/temperanca.png', 
    nome: 'A Temperança', 
    mensagem: 'Equilíbrio e harmonia são essenciais. Moderação e paciência trarão os melhores resultados.',
    nomeEn: 'Temperance',
    mensagemEn: 'Balance and harmony are essential. Moderation and patience will bring the best results.'
  },
  { 
    key: 'diabo', 
    img: 'images/optimized/diabo.png', 
    nome: 'O Diabo', 
    mensagem: 'Liberte-se de limitações e medos. Não se deixe aprisionar por crenças limitantes.',
    nomeEn: 'The Devil',
    mensagemEn: 'Free yourself from limitations and fears. Don\'t let yourself be imprisoned by limiting beliefs.'
  },
  { 
    key: 'torre', 
    img: 'images/optimized/torre.png', 
    nome: 'A Torre', 
    mensagem: 'Mudanças súbitas e revelações. Estruturas antigas podem ruir para dar lugar ao novo.',
    nomeEn: 'The Tower',
    mensagemEn: 'Sudden changes and revelations. Old structures may crumble to make way for the new.'
  },
  { 
    key: 'estrela', 
    img: 'images/optimized/estrela.png', 
    nome: 'A Estrela', 
    mensagem: 'Esperança e inspiração estão presentes. Mantenha a fé e siga seus sonhos.',
    nomeEn: 'The Star',
    mensagemEn: 'Hope and inspiration are present. Keep faith and follow your dreams.'
  },
  { 
    key: 'lua', 
    img: 'images/optimized/lua.png', 
    nome: 'A Lua', 
    mensagem: 'Intuição e mistério estão em destaque. Confie em seus instintos.',
    nomeEn: 'The Moon',
    mensagemEn: 'Intuition and mystery are highlighted. Trust your instincts.'
  },
  { 
    key: 'sol', 
    img: 'images/optimized/sol.png', 
    nome: 'O Sol', 
    mensagem: 'Alegria, sucesso e vitalidade. Este é um momento de otimismo e realização.',
    nomeEn: 'The Sun',
    mensagemEn: 'Joy, success and vitality. This is a time of optimism and achievement.'
  },
  { 
    key: 'julgamento', 
    img: 'images/optimized/julgamento.png', 
    nome: 'O Julgamento', 
    mensagem: 'Renascimento espiritual e despertar. Escute o chamado interior.',
    nomeEn: 'Judgement',
    mensagemEn: 'Spiritual rebirth and awakening. Listen to the inner call.'
  },
  { 
    key: 'mundo', 
    img: 'images/optimized/mundo.png', 
    nome: 'O Mundo', 
    mensagem: 'Completude e realização. Você alcançou um ciclo importante.',
    nomeEn: 'The World',
    mensagemEn: 'Completeness and fulfillment. You have reached an important cycle.'
  },
  { 
    key: 'louco', 
    img: 'images/optimized/louco.png', 
    nome: 'O Louco', 
    mensagem: 'Aventura e novos começos. Confie na jornada e mantenha a fé.',
    nomeEn: 'The Fool',
    mensagemEn: 'Adventure and new beginnings. Trust the journey and keep faith.'
  }
];

// Função para inicializar funcionalidades
function initApp() {
  console.log('🚀 Inicializando Luaé Tarot...');
  
  // Scroll suave para navegação
  const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
  navLinks.forEach(link => {
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

  // Funcionalidade do tarot
  const btnTirarCarta = document.getElementById('btn-tirar-carta');
  const tarotLoading = document.getElementById('tarot-loading');
  const cartaTiradaDiv = document.getElementById('carta-tirada');
  const imgCarta = document.getElementById('img-carta');
  const nomeCarta = document.getElementById('nome-carta');
  const mensagemCarta = document.getElementById('mensagem-carta');

  if (btnTirarCarta && tarotLoading && cartaTiradaDiv && imgCarta && nomeCarta && mensagemCarta) {
    console.log('✅ Elementos do tarot encontrados');
    
    btnTirarCarta.addEventListener('click', function() {
      console.log('🎯 Botão "tirar carta" clicado');
      
      // Esconde carta anterior e mostra loading
      cartaTiradaDiv.style.display = 'none';
      tarotLoading.style.display = 'flex';
      btnTirarCarta.disabled = true;
      
      // Simula conexão com o universo
      setTimeout(function() {
        const idx = Math.floor(Math.random() * arcanos.length);
        const carta = arcanos[idx];
        
        console.log('🎴 Carta selecionada:', carta.nome);
        
        // Verificar idioma atual
        const currentLang = localStorage.getItem('siteLanguage') || 'pt-BR';
        
        imgCarta.src = carta.img;
        imgCarta.alt = currentLang === 'en' ? carta.nomeEn : carta.nome;
        nomeCarta.textContent = currentLang === 'en' ? carta.nomeEn : carta.nome;
        mensagemCarta.textContent = currentLang === 'en' ? carta.mensagemEn : carta.mensagem;
        
        tarotLoading.style.display = 'none';
        cartaTiradaDiv.style.display = 'flex';
        cartaTiradaDiv.classList.remove('mostrar');
        
        setTimeout(function() {
          cartaTiradaDiv.classList.add('mostrar');
          btnTirarCarta.disabled = false;
          console.log('✨ Carta exibida com sucesso');
        }, 30);
      }, 1500);
    });
    
    console.log('✅ Event listener do tarot adicionado');
  } else {
    console.error('❌ Elementos do tarot não encontrados');
  }

  // Inicializar carrossel de depoimentos
  if (typeof window.initCarousel === 'function') {
    window.initCarousel();
  }
  
  console.log('✅ Luaé Tarot inicializado com sucesso!');
}

// Inicializar quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', initApp);

// Inicializar quando página estiver completamente carregada
window.addEventListener('load', function() {
  console.log('📱 Site carregado completamente');
}); 