const CACHE_VERSION = 'neikung-v2';
const CACHE_FILES = [
  '/naikung/',
  '/naikung/index.html',
  '/naikung/style.css',
  '/naikung/app.js',
  '/naikung/data.js',
  '/naikung/manifest.json',
  '/naikung/icon-192.png',
  '/naikung/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(cache => cache.addAll(CACHE_FILES))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
