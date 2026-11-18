const CACHE = 'app-v6';

const ASSETS = [
  './',
  'index.html',
  'manifest.webmanifest',
  'css/style.css',
  'js/main.js',
  'js/router.js',
  'js/store.js',
  'js/theme.js',
  'js/ui.js',
  'js/icons.js',
  'js/util.js',
  'js/result.js',
  'js/quiz.js',
  'js/ring.js',
  'js/cover.js',
  'js/data/library.js',
  'js/data/grammar-in-use.js',
  'js/data/lessons.js',
  'js/data/words.js',
  'js/data/tests.js',
  'js/views/home.js',
  'js/views/books.js',
  'js/views/book.js',
  'js/views/unit.js',
  'js/views/words.js',
  'js/views/deck.js',
  'js/views/games.js',
  'js/views/match.js',
  'js/views/scramble.js',
  'js/views/tests.js',
  'js/views/test.js',
  'js/views/settings.js',
  'icons/icon-180.png',
  'icons/icon-192.png',
  'icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET' || new URL(request.url).origin !== location.origin) return;

  event.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const hit = await cache.match(request);
      const network = fetch(request)
        .then((response) => {
          if (response.ok) cache.put(request, response.clone());
          return response;
        })
        .catch(() => hit);
      return hit || network;
    })
  );
});
