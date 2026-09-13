const CACHE_NAME = "instagram-pwa-v1";
const APP_SHELL = [
  "/Instagram.pwb/",
  "/Instagram.pwb/index.html",
  "/Instagram.pwb/manifest.webmanifest",
  "/Instagram.pwb/style.css",
  "/Instagram.pwb/app.js",
  "/Instagram.pwb/icons/icon-192.png",
  "/Instagram.pwb/icons/icon-512.png"
];
  "/",
  "/index.html",
  "/manifest.webmanifest",
  "/style.css",
  "/app.js",
  "/icons/icon-192.png",
  "/icons/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
