self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

// Просто пропускаем все запросы в сеть (ничего не кэшируем, чтобы не забивать память)
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});