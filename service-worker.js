const CACHE_VERSION = 'v1';
const STATIC_CACHE = 'she-static-' + CACHE_VERSION;
const HTML_CACHE   = 'she-html-'   + CACHE_VERSION;

const STATIC_ASSETS = [
    '/style.css',
    '/script.js',
    '/favicon.svg',
    '/manifest.json',
    '/SHELLYHAIR.jpg'
];

const HTML_PAGES = [
    '/',
    '/about.html',
    '/contact.html',
    '/privacy.html',
    '/terms.html',
    '/404.html'
];

// Install: pre-cache static assets
self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(STATIC_CACHE).then(cache => cache.addAll(STATIC_ASSETS))
    );
});

// Activate: delete old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys
                    .filter(k => k !== STATIC_CACHE && k !== HTML_CACHE)
                    .map(k => caches.delete(k))
            )
        ).then(() => self.clients.claim())
    );
});

// Fetch strategy
self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);

    // Only handle same-origin requests
    if (url.origin !== location.origin) return;

    const isHTML = request.headers.get('accept') &&
                   request.headers.get('accept').includes('text/html');

    if (isHTML) {
        // Network-first for HTML
        event.respondWith(
            fetch(request)
                .then(response => {
                    const clone = response.clone();
                    caches.open(HTML_CACHE).then(cache => cache.put(request, clone));
                    return response;
                })
                .catch(() => caches.match(request).then(r => r || caches.match('/404.html')))
        );
    } else {
        // Cache-first for static assets
        event.respondWith(
            caches.match(request).then(cached => {
                if (cached) return cached;
                return fetch(request).then(response => {
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    const clone = response.clone();
                    caches.open(STATIC_CACHE).then(cache => cache.put(request, clone));
                    return response;
                });
            })
        );
    }
});
