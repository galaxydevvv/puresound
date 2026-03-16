const CACHE_NAME = "puresound-audio-v2";
let cachingEnabled = false;

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((key) => key.startsWith("puresound-audio-") && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      );
      await self.clients.claim();
    })()
  );
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
  if (!cachingEnabled || event.request.method !== "GET") return;
  if (!isDriveAudioRequest(event.request)) return;

  event.respondWith(cacheFirstWithFallback(event.request));
});

function isDriveAudioRequest(request) {
  try {
    const url = new URL(request.url);
    const isApiStream =
      url.hostname === "www.googleapis.com" &&
      url.pathname.startsWith("/drive/v3/files/") &&
      url.searchParams.get("alt") === "media";

    const isDriveUcStream =
      url.hostname === "drive.google.com" &&
      url.pathname === "/uc" &&
      ["open", "download"].includes(url.searchParams.get("export"));

    const isDriveUserContent =
      (url.hostname === "drive.usercontent.google.com" || url.hostname.endsWith("googleusercontent.com")) &&
      request.destination === "audio";

    return isApiStream || isDriveUcStream || isDriveUserContent;
  } catch (error) {
    return false;
  }
}

async function cacheFirstWithFallback(request) {
  try {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request);

    if (cached) {
      return cached;
    }

    const response = await fetch(request);

    if (response.ok || response.status === 206) {
      await cache.put(request, response.clone());
    }

    return response;
  } catch (error) {
    return fetch(request);
  }
}
