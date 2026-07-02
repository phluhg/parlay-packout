const CACHE_NAME = 'parlay-packout-v1';
const ASSETS = ['./', './index.html', './manifest.json',
  './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Network-first for the page itself (so slate updates aren't stuck stale),
// falling back to cache when offline. Live Kalshi API calls are never cached.
self.addEventListener('fetch', (event) => {
  const url = event.request.url;
  if (url.includes('external-api.kalshi.com')) return; // never intercept live odds calls
  event.respondWith(
    fetch(event.request)
      .then((res) => {
        const clone = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return res;
      })
      .catch(() => caches.match(event.request))
  );
});
