// ===== TRADUÇÕES DO SITE =====
const translations = {
  'pt-BR': {
    // Navegação
    'nav.luae': 'Luaé',
    'nav.about': 'Sobre',
    'nav.tarot': 'Tarot',
    'nav.services': 'Serviços',
    'nav.clients': 'Clientes',
    'nav.schedule': 'Agende',

    // Hero Section
    'hero.title': 'Tarot com Luaé',
    'hero.subtitle': 'Descubra o que os oráculos têm a revelar sobre sua jornada',

    // Sobre Section
    'about.title': 'Sobre Luaé',
    'about.paragraph1': 'Desde a <strong>infância</strong>, percebo <strong>vozes e presenças</strong> que não pertencem a este plano — algo natural para mim, embora estranho para quem me cercava. Sempre fui muito <strong>criativa</strong>, com <strong>dons artísticos e espirituais</strong> que se manifestaram desde cedo.',
    'about.paragraph2': 'Quando eu era mais nova, vivendo na <strong>Inglaterra</strong>, minha <strong>mediunidade</strong> se intensificou. Passei a captar com clareza <strong>mensagens espirituais</strong> e sentimentos de pessoas ao meu redor. De volta ao Brasil, fui iniciada no culto tradicional em <strong>Obatalá, Exu</strong> e na primeira mão de <strong>Ifá</strong>. Também vivi três anos em <strong>terreiro</strong>, onde aprendi profundamente com a <strong>incorporação</strong>.',
    'about.paragraph3': 'Hoje, uno <strong>Tarot, mediunidade e arte</strong>. Desenvolvi a <strong>pictografia mediúnica</strong>, através da qual visualizo e desenho os <strong>guias espirituais</strong> das pessoas. Durante as leituras, sou guiada por <strong>entidades</strong> que me orientam com sabedoria — e é com essa <strong>conexão</strong> que entrego cada mensagem com <strong>verdade e amor</strong>.',

    // Tarot Section
    'tarot.title': 'Tiragem de Tarot Grátis',
    'tarot.explanation': 'O tarot é um espelho da alma. Ele revela caminhos, ilumina dúvidas e traz respostas para o presente. Consultar o tarot é um convite para enxergar além do óbvio e se reconectar com sua essência.',
    'tarot.instruction': 'Conecte-se com a energia dos Arcanos Maiores. <strong>Feche os olhos, mentalize um tema ou questão e clique para tirar sua carta.</strong>',
    'tarot.button': 'Tirar uma carta',
    'tarot.loading': 'Conectando com o universo...',

    // Serviços Section
    'services.title': 'Como posso te ajudar?',
    'services.objective.title': 'Pergunta Objetiva',
    'services.objective.description': 'Responda uma dúvida rápida (Sim ou Não).',
    'services.objective.price1': 'R$15 <span class="preco-desc">(sem conselho)</span>',
    'services.objective.price2': 'R$30 <span class="preco-desc">(com conselho)</span>',
    
    'services.specific.title': 'Tema Específico',
    'services.specific.description': 'Leitura aprofundada sobre um tema (amor, carreira, espiritualidade...)',
    'services.specific.price': 'R$80',
    
    'services.cross.title': 'Cruz da Vida',
    'services.cross.description': 'Leitura completa sobre áreas-chave da sua vida.',
    'services.cross.price': 'R$120',
    
    'services.live.title': 'Consulta ao Vivo por Vídeo',
    'services.live.description': 'Interpretação ao vivo e interação direta (30-40 min).',
    'services.live.price': 'R$210',

    'services.payment.note': 'Ao clicar, envie uma mensagem direta no Instagram informando o serviço desejado.<br>Pagamento antecipado via Pix ou transferência.<br>Em caso de ausência do cliente no horário marcado, o valor não será reembolsado.',
    'services.instagram.button': 'Agendar pelo Instagram',

    // Clientes Section
    'clients.title': 'Clientes',
    'clients.testimonial1': '"Gostei muito da sessão de tarot de hoje! Foi bem explicativa e a atenção foi impecável. Obrigado! 🙌🙌"',
    'clients.testimonial2': '"Gostei do jogo, muito obrigado, gratidão."',
    'clients.testimonial3': '"Certeira nas respostas e muito atensiosa, muito obrigado!🙏🙏"',
    'clients.name1': 'Lucas L.',
    'clients.name2': 'Dilson S.',
    'clients.name3': 'Luiz N.',

    // CTA Section
    'cta.title': 'Pronto para sua jornada?',
    'cta.subtitle': 'Agende sua consulta e permita-se viver uma experiência transformadora.<br><b>Agende por DM no Instagram</b>.',

    // Footer
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos de Uso',
    'footer.copyright': '© Luaé Tarot 2025',

    // Tarot Cards
    'tarot.mago.name': 'O Mago',
    'tarot.mago.message': 'Você tem o poder de manifestar seus desejos. Use sua criatividade e determinação para transformar sonhos em realidade. Este é um momento de ação e iniciativa.',
    
    'tarot.sacerdotisa.name': 'A Sacerdotisa',
    'tarot.sacerdotisa.message': 'Conecte-se com sua intuição e sabedoria interior. Esteja atento aos sinais e mensagens do universo. É tempo de reflexão e introspecção.',
    
    'tarot.imperatriz.name': 'A Imperatriz',
    'tarot.imperatriz.message': 'Abundância e fertilidade estão ao seu alcance. Nutra seus projetos e relacionamentos com amor e paciência. Prosperidade está chegando.',
    
    'tarot.imperador.name': 'O Imperador',
    'tarot.imperador.message': 'Assuma o controle da situação com autoridade e disciplina. Estrutura e organização são essenciais agora. Seja firme em suas decisões.',
    
    'tarot.papa.name': 'O Papa',
    'tarot.papa.message': 'Busque orientação espiritual e siga sua fé interior. Conhecimento e sabedoria estão disponíveis para você. Confie em seus valores.',
    
    'tarot.enamorados.name': 'Os Enamorados',
    'tarot.enamorados.message': 'Decisões importantes sobre amor e relacionamentos. Escolha com o coração, mas não ignore a razão. Harmonia e união são possíveis.',
    
    'tarot.carro.name': 'O Carro',
    'tarot.carro.message': 'Progresso e vitória através da determinação. Mantenha o controle e siga em frente com confiança. Sucesso está ao seu alcance.',
    
    'tarot.forca.name': 'A Força',
    'tarot.forca.message': 'Use sua força interior com gentileza e compaixão. Paciência e coragem são suas aliadas. Você é mais forte do que imagina.',
    
    'tarot.eremita.name': 'O Eremita',
    'tarot.eremita.message': 'Momento de introspecção e busca interior. Solitude pode trazer clareza. Compartilhe sua sabedoria com outros.',
    
    'tarot.fortuna.name': 'A Roda da Fortuna',
    'tarot.fortuna.message': 'Mudanças estão chegando. Aceite os ciclos da vida com otimismo. O universo está trabalhando a seu favor.',
    
    'tarot.justica.name': 'A Justiça',
    'tarot.justica.message': 'Equilíbrio e justiça prevalecem. Seja honesto consigo mesmo e com os outros. Decisões importantes devem ser tomadas com clareza.',
    
    'tarot.pendurado.name': 'O Pendurado',
    'tarot.pendurado.message': 'Mudança de perspectiva é necessária. Sacrifícios temporários podem trazer insights valiosos. Veja a situação de um novo ângulo.',
    
    'tarot.morte.name': 'A Morte',
    'tarot.morte.message': 'Transformação e renascimento. Deixe ir o que não serve mais. Novos começos estão se aproximando.',
    
    'tarot.temperanca.name': 'A Temperança',
    'tarot.temperanca.message': 'Equilíbrio e harmonia são essenciais. Moderação e paciência trarão os melhores resultados. Cura e paz estão disponíveis.',
    
    'tarot.diabo.name': 'O Diabo',
    'tarot.diabo.message': 'Liberte-se de limitações e medos. Não se deixe aprisionar por crenças limitantes. Transformação é possível.',
    
    'tarot.torre.name': 'A Torre',
    'tarot.torre.message': 'Mudanças súbitas e revelações. Estruturas antigas podem ruir para dar lugar ao novo. Confie no processo.',
    
    'tarot.estrela.name': 'A Estrela',
    'tarot.estrela.message': 'Esperança e inspiração estão presentes. Mantenha a fé e siga seus sonhos. Cura e renovação estão chegando.',
    
    'tarot.lua.name': 'A Lua',
    'tarot.lua.message': 'Intuição e mistério estão em destaque. Confie em seus instintos, mas não se deixe enganar por ilusões. Clareza virá.',
    
    'tarot.sol.name': 'O Sol',
    'tarot.sol.message': 'Alegria, sucesso e vitalidade. Este é um momento de otimismo e realização. Brilhe e compartilhe sua luz.',
    
    'tarot.julgamento.name': 'O Julgamento',
    'tarot.julgamento.message': 'Renascimento espiritual e despertar. Escute o chamado interior. Transformação profunda está acontecendo.',
    
    'tarot.mundo.name': 'O Mundo',
    'tarot.mundo.message': 'Completude e realização. Você alcançou um ciclo importante. Celebre suas conquistas e prepare-se para novos desafios.',
    
    'tarot.louco.name': 'O Louco',
    'tarot.louco.message': 'Aventura e novos começos. Confie na jornada e mantenha a fé. Inocência e espontaneidade são suas aliadas.'
  },

  'en': {
    // Navigation
    'nav.luae': 'Luaé',
    'nav.about': 'About',
    'nav.tarot': 'Tarot',
    'nav.services': 'Services',
    'nav.clients': 'Clients',
    'nav.schedule': 'Schedule',

    // Hero Section
    'hero.title': 'Tarot with Luaé',
    'hero.subtitle': 'Discover what the oracles have to reveal about your journey',

    // About Section
    'about.title': 'About Luaé',
    'about.paragraph1': 'Since <strong>childhood</strong>, I have perceived <strong>voices and presences</strong> that do not belong to this plane — something natural for me, though strange to those around me. I have always been very <strong>creative</strong>, with <strong>artistic and spiritual gifts</strong> that manifested from an early age.',
    'about.paragraph2': 'When I was younger, living in <strong>England</strong>, my <strong>mediumship</strong> intensified. I began to clearly capture <strong>spiritual messages</strong> and feelings from people around me. Back in Brazil, I was initiated into the traditional cult of <strong>Obatalá, Exu</strong> and the first hand of <strong>Ifá</strong>. I also lived for three years in a <strong>terreiro</strong>, where I learned deeply through <strong>incorporation</strong>.',
    'about.paragraph3': 'Today, I unite <strong>Tarot, mediumship and art</strong>. I developed <strong>mediumistic pictography</strong>, through which I visualize and draw people\'s <strong>spiritual guides</strong>. During readings, I am guided by <strong>entities</strong> who guide me with wisdom — and it is with this <strong>connection</strong> that I deliver each message with <strong>truth and love</strong>.',

    // Tarot Section
    'tarot.title': 'Free Tarot Reading',
    'tarot.explanation': 'Tarot is a mirror of the soul. It reveals paths, illuminates doubts and brings answers for the present. Consulting tarot is an invitation to see beyond the obvious and reconnect with your essence.',
    'tarot.instruction': 'Connect with the energy of the Major Arcana. <strong>Close your eyes, focus on a theme or question and click to draw your card.</strong>',
    'tarot.button': 'Draw a card',
    'tarot.loading': 'Connecting with the universe...',

    // Services Section
    'services.title': 'How can I help you?',
    'services.objective.title': 'Objective Question',
    'services.objective.description': 'Answer a quick question (Yes or No).',
    'services.objective.price1': 'US$3 <span class="preco-desc">(without advice)</span>',
    'services.objective.price2': 'US$6 <span class="preco-desc">(with advice)</span>',
    
    'services.specific.title': 'Specific Theme',
    'services.specific.description': 'In-depth reading on a theme (love, career, spirituality...)',
    'services.specific.price': 'US$16',
    
    'services.cross.title': 'Cross of Life',
    'services.cross.description': 'Complete reading on key areas of your life.',
    'services.cross.price': 'US$24',
    
    'services.live.title': 'Live Video Consultation',
    'services.live.description': 'Live interpretation and direct interaction (30-40 min).',
    'services.live.price': 'US$42',

    'services.payment.note': 'When clicking, send a direct message on Instagram informing the desired service.<br>Advance payment via transfer.<br>In case of client absence at the scheduled time, the amount will not be refunded.',
    'services.instagram.button': 'Schedule via Instagram',

    // Clients Section
    'clients.title': 'Clients',
    'clients.testimonial1': '"I really liked today\'s tarot session! It was very explanatory and the attention was impeccable. Thank you! 🙌🙌"',
    'clients.testimonial2': '"I liked the game, thank you very much, gratitude."',
    'clients.testimonial3': '"Accurate in the answers and very attentive, thank you very much!🙏🙏"',
    'clients.name1': 'Lucas L.',
    'clients.name2': 'Dilson S.',
    'clients.name3': 'Luiz N.',

    // CTA Section
    'cta.title': 'Ready for your journey?',
    'cta.subtitle': 'Schedule your consultation and allow yourself to live a transformative experience.<br><b>Schedule by DM on Instagram</b>.',

    // Footer
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.copyright': '© Luaé Tarot 2025',

    // Tarot Cards
    'tarot.mago.name': 'The Magician',
    'tarot.mago.message': 'You have the power to manifest your desires. Use your creativity and determination to transform dreams into reality. This is a time for action and initiative.',
    
    'tarot.sacerdotisa.name': 'The High Priestess',
    'tarot.sacerdotisa.message': 'Connect with your intuition and inner wisdom. Be attentive to signs and messages from the universe. It\'s time for reflection and introspection.',
    
    'tarot.imperatriz.name': 'The Empress',
    'tarot.imperatriz.message': 'Abundance and fertility are within your reach. Nurture your projects and relationships with love and patience. Prosperity is coming.',
    
    'tarot.imperador.name': 'The Emperor',
    'tarot.imperador.message': 'Take control of the situation with authority and discipline. Structure and organization are essential now. Be firm in your decisions.',
    
    'tarot.papa.name': 'The Hierophant',
    'tarot.papa.message': 'Seek spiritual guidance and follow your inner faith. Knowledge and wisdom are available to you. Trust in your values.',
    
    'tarot.enamorados.name': 'The Lovers',
    'tarot.enamorados.message': 'Important decisions about love and relationships. Choose with your heart, but don\'t ignore reason. Harmony and union are possible.',
    
    'tarot.carro.name': 'The Chariot',
    'tarot.carro.message': 'Progress and victory through determination. Maintain control and move forward with confidence. Success is within your reach.',
    
    'tarot.forca.name': 'Strength',
    'tarot.forca.message': 'Use your inner strength with gentleness and compassion. Patience and courage are your allies. You are stronger than you think.',
    
    'tarot.eremita.name': 'The Hermit',
    'tarot.eremita.message': 'Time for introspection and inner search. Solitude can bring clarity. Share your wisdom with others.',
    
    'tarot.fortuna.name': 'Wheel of Fortune',
    'tarot.fortuna.message': 'Changes are coming. Accept life\'s cycles with optimism. The universe is working in your favor.',
    
    'tarot.justica.name': 'Justice',
    'tarot.justica.message': 'Balance and justice prevail. Be honest with yourself and others. Important decisions must be made with clarity.',
    
    'tarot.pendurado.name': 'The Hanged Man',
    'tarot.pendurado.message': 'A change of perspective is needed. Temporary sacrifices can bring valuable insights. See the situation from a new angle.',
    
    'tarot.morte.name': 'Death',
    'tarot.morte.message': 'Transformation and rebirth. Let go of what no longer serves you. New beginnings are approaching.',
    
    'tarot.temperanca.name': 'Temperance',
    'tarot.temperanca.message': 'Balance and harmony are essential. Moderation and patience will bring the best results. Healing and peace are available.',
    
    'tarot.diabo.name': 'The Devil',
    'tarot.diabo.message': 'Free yourself from limitations and fears. Don\'t let yourself be imprisoned by limiting beliefs. Transformation is possible.',
    
    'tarot.torre.name': 'The Tower',
    'tarot.torre.message': 'Sudden changes and revelations. Old structures may crumble to make way for the new. Trust the process.',
    
    'tarot.estrela.name': 'The Star',
    'tarot.estrela.message': 'Hope and inspiration are present. Keep faith and follow your dreams. Healing and renewal are coming.',
    
    'tarot.lua.name': 'The Moon',
    'tarot.lua.message': 'Intuition and mystery are highlighted. Trust your instincts, but don\'t be deceived by illusions. Clarity will come.',
    
    'tarot.sol.name': 'The Sun',
    'tarot.sol.message': 'Joy, success and vitality. This is a time of optimism and achievement. Shine and share your light.',
    
    'tarot.julgamento.name': 'Judgement',
    'tarot.julgamento.message': 'Spiritual rebirth and awakening. Listen to the inner call. Deep transformation is happening.',
    
    'tarot.mundo.name': 'The World',
    'tarot.mundo.message': 'Completeness and fulfillment. You have reached an important cycle. Celebrate your achievements and prepare for new challenges.',
    
    'tarot.louco.name': 'The Fool',
    'tarot.louco.message': 'Adventure and new beginnings. Trust the journey and keep faith. Innocence and spontaneity are your allies.'
  }
};

// Função para obter tradução
function getTranslation(key, language = 'pt-BR') {
  return translations[language][key] || key;
}

// Função para traduzir todo o site
function translateSite(language) {
  console.log('🌐 Traduzindo site para:', language);
  
  // Salvar idioma no localStorage
  localStorage.setItem('siteLanguage', language);
  
  // Atualizar atributo lang do HTML
  document.documentElement.lang = language;
  
  // Traduzir elementos com data-translate
  const elements = document.querySelectorAll('[data-translate]');
  console.log('📝 Elementos encontrados para traduzir:', elements.length);
  
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    const translation = getTranslation(key, language);
    
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
      element.placeholder = translation;
    } else {
      element.innerHTML = translation;
    }
  });
  
  // Atualizar seletor de idioma
  updateLanguageSelector(language);
  
  // Feedback visual
  showLanguageFeedback(language);
}

// Função para mostrar feedback visual da mudança de idioma
function showLanguageFeedback(language) {
  // Criar notificação temporária
  const notification = document.createElement('div');
  notification.className = 'language-notification';
  notification.innerHTML = `
    <span>${language === 'pt-BR' ? '🇧🇷' : '🇺🇸'} ${language === 'pt-BR' ? 'Português' : 'English'}</span>
  `;
  
  document.body.appendChild(notification);
  
  // Animar entrada
  setTimeout(() => {
    notification.classList.add('show');
  }, 100);
  
  // Remover após 2 segundos
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 2000);
}

// Função para atualizar seletor de idioma
function updateLanguageSelector(currentLanguage) {
  const languageButtons = document.querySelectorAll('.language-btn');
  languageButtons.forEach(btn => {
    const lang = btn.getAttribute('data-lang');
    if (lang === currentLanguage) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Função para inicializar sistema de idiomas
function initLanguageSystem() {
  console.log('🚀 Inicializando sistema de idiomas...');
  
  // Verificar idioma salvo ou usar padrão
  const savedLanguage = localStorage.getItem('siteLanguage') || 'pt-BR';
  console.log('💾 Idioma salvo:', savedLanguage);
  
  // Aplicar idioma
  translateSite(savedLanguage);
  
  // Adicionar event listeners para botões de idioma
  const languageButtons = document.querySelectorAll('.language-btn');
  console.log('🔘 Botões de idioma encontrados:', languageButtons.length);
  
  languageButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const language = this.getAttribute('data-lang');
      console.log('🖱️ Clique no botão de idioma:', language);
      
      // Adicionar efeito de clique
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = '';
      }, 150);
      
      translateSite(language);
    });
  });
  
  console.log('✅ Sistema de idiomas inicializado com sucesso!');
}

// Inicializar automaticamente quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
  console.log('📄 DOM carregado, inicializando sistema de idiomas...');
  initLanguageSystem();
});

// Exportar funções
window.translations = translations;
window.getTranslation = getTranslation;
window.translateSite = translateSite;
window.initLanguageSystem = initLanguageSystem;

console.log('🌐 Sistema de traduções carregado!'); 