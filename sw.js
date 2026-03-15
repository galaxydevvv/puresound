const CACHE_NAME = "puresound-audio-v1";
let cachingEnabled = false;

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("message", (event) => {
  const data = event.data || {};
  if (data.type === "SET_CACHING") {
    cachingEnabled = Boolean(data.enabled);
  }
  if (data.type === "CLEAR_CACHE") {
    event.waitUntil(
      caches.delete(CACHE_NAME).then(() => {
        if (event.source && event.source.postMessage) {
          event.source.postMessage({ type: "CACHE_CLEARED" });
        }
      })
    );
  }
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  
  // Never intercept Google Drive API requests
  if (url.hostname.includes("googleapis.com") || url.hostname.includes("drive.google.com")) {
    return;
  }
  
  // Normal caching for other resources
  if (!cachingEnabled || event.request.method !== "GET") return;
  event.respondWith(cacheFirst(event.request));
});

async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  if (cached) return cached;

  const response = await fetch(request);
  if (response && response.ok) {
    cache.put(request, response.clone());
  }
  return response;
}
