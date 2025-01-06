self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('toko-sembako-cache').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/style.css',
                '/app.js',
                '/images/keranjang.png',
                '/images/sembako1.jpg',
                '/images/sembako2.jpg',
                '/images/sembako3.jpg'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
