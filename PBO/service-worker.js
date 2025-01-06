// Install service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('kasir-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/app.js',
        '/manifest.json'
      ]);
    })
  );
});

// Aktivasi service worker
self.addEventListener('activate', (event) => {
  console.log('Service Worker Activated');
});

// Intercept fetch requests dan mengambil data dari cache jika offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
