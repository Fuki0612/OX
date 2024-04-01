// Cache name
const CACHE_NAME = 'pwa-sample-caches-v1';
// Cache targets
const urlsToCache = [
  './',
  './index.html',
  './src/clear.html',
  './src/game.html',
  './css/clear_style.css',
  './css/game_style.css',
  './css/index_style.css',
  './images/bg_image.jpg',
  './images/image_O.png',
  './images/image_X.png',
  './images/OXtitle.png',
  './images/shortcut.png',
  './images/th_bg_orange.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        return response ? response : fetch(event.request);
      })
  );
});
