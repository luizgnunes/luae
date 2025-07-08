// Service Worker para Luaé Tarot
// Cache avançado para melhor performance

const CACHE_NAME = 'luae-tarot-v1.2';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.min.css',
  '/script.min.js',
  '/images/optimized/inicio.png',
  '/images/optimized/favicon.png',
  '/images/optimized/mago.png',
  '/images/optimized/sacerdotisa.png',
  '/images/optimized/imperatriz.png',
  '/images/optimized/imperador.png',
  '/images/optimized/papa.png',
  '/images/optimized/enamorados.png',
  '/images/optimized/carro.png',
  '/images/optimized/justica.png',
  '/images/optimized/eremita.png',
  '/images/optimized/fortuna.png',
  '/images/optimized/forca.png',
  '/images/optimized/pendurado.png',
  '/images/optimized/morte.png',
  '/images/optimized/temperanca.png',
  '/images/optimized/diabo.png',
  '/images/optimized/torre.png',
  '/images/optimized/estrela.png',
  '/images/optimized/lua.png',
  '/images/optimized/sol.png',
  '/images/optimized/julgamento.png',
  '/images/optimized/mundo.png',
  '/images/optimized/louco.png'
];

// Instalação do Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache aberto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Interceptação de requisições
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Retorna do cache se disponível
        if (response) {
          return response;
        }
        
        // Se não estiver no cache, busca da rede
        return fetch(event.request).then(response => {
          // Não cacheia se não for uma resposta válida
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clona a resposta para cache
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
          
          return response;
        });
      })
  );
});

// Limpeza de caches antigos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Removendo cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 