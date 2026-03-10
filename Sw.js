const CACHE_NAME = "maroko-roadbook";

const urlsToCache = [
"/",
"/index.html",
"/d1.html",
"/d2.html",
"/d3.html",
"/d4.html",
"/d5.html",
"/d6.html",
"/d7.html",
"/jedzenie.html",
"/gpx.html",
"/style.css"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
