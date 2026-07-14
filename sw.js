const CACHE_NAME = 'tea-comunicador-v1';
const STATIC_ASSETS = [
    './',
    './index.html',
    './styles.css',
    './app.js',
    './data.js',
    './manifest.json',
    './Logo/logo-claro.png'
];

// Instalar Service Worker y guardar recursos estáticos
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('[Service Worker] Caching static assets');
            return cache.addAll(STATIC_ASSETS);
        })
    );
    self.skipWaiting();
});

// Activar y limpiar cachés antiguas
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(name => name !== CACHE_NAME)
                          .map(name => caches.delete(name))
            );
        })
    );
    self.clients.claim();
});

// Estrategias de Fetch
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);

    // 1. Imágenes de ARASAAC: Cache First (si está en caché se usa, si no, se descarga y se guarda)
    if (url.hostname === 'static.arasaac.org') {
        event.respondWith(
            caches.match(event.request).then(cachedResponse => {
                if (cachedResponse) return cachedResponse;
                return fetch(event.request).then(networkResponse => {
                    return caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    });
                }).catch(err => console.error('[SW] Image fetch failed:', err));
            })
        );
        return;
    }

    // 2. API de ARASAAC: Stale-While-Revalidate (prioriza caché para que sea instantáneo y funcione offline, pero actualiza por detrás)
    if (url.hostname === 'api.arasaac.org') {
        event.respondWith(
            caches.match(event.request).then(cachedResponse => {
                const fetchPromise = fetch(event.request).then(networkResponse => {
                    return caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    });
                }).catch(err => console.log('[SW] API Offline:', err));
                
                return cachedResponse || fetchPromise;
            })
        );
        return;
    }

    // 3. Por defecto (recursos estáticos): Cache First
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            return cachedResponse || fetch(event.request);
        })
    );
});
