/* ===== CONFIGURAÇÕES ===== */
/* Configurações globais e dados do tarot */

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

// Tiragem de Tarot Grátis - Dados das cartas
const arcanos = [
  { nome: 'O Mago', img: 'images/optimized/mago.png', mensagem: 'O Mago traz iniciativa, criatividade e poder de manifestação. Use seus talentos para agir no tema mentalizado.' },
  { nome: 'A Sacerdotisa', img: 'images/optimized/sacerdotisa.png', mensagem: 'A Sacerdotisa pede que você confie na sua intuição sobre esse tema. Silencie a mente, ouça sua voz interior e permita que a sabedoria espiritual te guie.' },
  { nome: 'A Imperatriz', img: 'images/optimized/imperatriz.png', mensagem: 'A Imperatriz traz abundância e criatividade para o seu tema. Nutra suas ideias, confie no seu potencial de realização e permita que o novo floresça em sua vida.' },
  { nome: 'O Imperador', img: 'images/optimized/imperador.png', mensagem: 'Para o tema que você mentalizou, O Imperador indica que é hora de assumir o controle, agir com firmeza e estruturar seus planos. Confie na sua liderança e organize seus próximos passos.' },
  { nome: 'O Papa', img: 'images/optimized/papa.png', mensagem: 'O Papa sugere buscar orientação, tradição ou conselhos de alguém experiente para o seu tema.' },
  { nome: 'Os Enamorados', img: 'images/optimized/enamorados.png', mensagem: 'Os Enamorados mostram que escolhas importantes estão ligadas ao seu tema. Siga o caminho do coração e alinhe suas decisões com seus valores mais profundos.' },
  { nome: 'O Carro', img: 'images/optimized/carro.png', mensagem: 'O Carro indica movimento, conquista e superação de obstáculos. Siga em frente com determinação.' },
  { nome: 'A Justiça', img: 'images/optimized/justica.png', mensagem: 'A Justiça orienta que, para o tema mentalizado, é importante agir com equilíbrio, honestidade e responsabilidade. Busque a verdade e tome decisões justas.' },
  { nome: 'O Eremita', img: 'images/optimized/eremita.png', mensagem: 'O Eremita sugere reflexão, busca interior e sabedoria. Tire um tempo para pensar antes de agir.' },
  { nome: 'A Roda da Fortuna', img: 'images/optimized/fortuna.png', mensagem: 'A Roda da Fortuna traz mudanças e ciclos. Aceite o fluxo da vida e adapte-se ao novo.' },
  { nome: 'A Força', img: 'images/optimized/forca.png', mensagem: 'A Força indica coragem, domínio das emoções e resiliência. Confie no seu poder interior.' },
  { nome: 'O Pendurado', img: 'images/optimized/pendurado.png', mensagem: 'O Pendurado pede uma nova perspectiva ou pausa. Reflita antes de tomar decisões.' },
  { nome: 'A Morte', img: 'images/optimized/morte.png', mensagem: 'A Morte representa transformação e renascimento. Deixe o velho para trás e abra-se ao novo.' },
  { nome: 'A Temperança', img: 'images/optimized/temperanca.png', mensagem: 'A Temperança sugere equilíbrio, paciência e harmonia. Busque o meio-termo para o seu tema.' },
  { nome: 'O Diabo', img: 'images/optimized/diabo.png', mensagem: 'O Diabo alerta para apegos, vícios ou ilusões. Liberte-se do que te prende.' },
  { nome: 'A Torre', img: 'images/optimized/torre.png', mensagem: 'A Torre indica mudanças inesperadas ou rupturas. Confie que tudo acontece para o seu crescimento.' },
  { nome: 'A Estrela', img: 'images/optimized/estrela.png', mensagem: 'A Estrela traz esperança, inspiração e cura. Acredite em dias melhores.' },
  { nome: 'A Lua', img: 'images/optimized/lua.png', mensagem: 'A Lua fala de intuição, mistérios e emoções profundas. Confie nos seus sentimentos.' },
  { nome: 'O Sol', img: 'images/optimized/sol.png', mensagem: 'O Sol simboliza clareza, alegria e realização. Traz luz para todas as situações.' },
  { nome: 'O Julgamento', img: 'images/optimized/julgamento.png', mensagem: 'O Julgamento sugere renascimento, avaliação e decisões importantes. Reflita sobre o passado e siga em frente.' },
  { nome: 'O Mundo', img: 'images/optimized/mundo.png', mensagem: 'O Mundo indica realização, conclusão de ciclos e plenitude. Celebre suas conquistas.' },
  { nome: 'O Louco', img: 'images/optimized/louco.png', mensagem: 'O Louco fala sobre novos começos, liberdade e confiança no universo. Abra-se para o desconhecido.' }
];

// Descrições das cartas para seção de cartas
const descricoes = {
  sacerdotisa: 'A Sacerdotisa representa intuição, mistério e sabedoria interior. Convida à escuta do próprio coração.',
  sol: 'O Sol simboliza clareza, alegria e realização. Traz luz para todas as situações.',
  louco: 'O Louco fala sobre novos começos, liberdade e confiança no universo. Abra-se para o desconhecido.'
};

// Configurações do carrossel
const carouselConfig = {
  interval: 4000, // 4 segundos
  animationDuration: 700 // 700ms
};

// Configurações do tarot
const tarotConfig = {
  loadingDuration: 1500, // 1.5 segundos
  animationDelay: 30 // 30ms
}; 