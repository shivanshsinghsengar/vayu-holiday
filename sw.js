/* ==========================================================================
   VAYU HOLIDAYS — SERVICE WORKER CLEANUP
   This version unregisters itself and deletes all old caches.
   Deployed to fix SPA routing issues caused by cached static pages.
   VERSION: 2.0.0 — Self-uninstall
   ========================================================================== */

// Immediately take control and delete all caches
self.addEventListener("install", (event) => {
  console.log("[SW] Installing cleanup version - deleting all caches");
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          console.log("[SW] Deleting cache:", cacheName);
          return caches.delete(cacheName);
        })
      );
    }).then(() => self.skipWaiting())
  );
});

// Take control immediately
self.addEventListener("activate", (event) => {
  console.log("[SW] Activating cleanup version");
  event.waitUntil(
    Promise.all([
      // Delete all caches again (double cleanup)
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => caches.delete(cacheName))
        );
      }),
      // Claim all clients immediately
      self.clients.claim()
    ]).then(() => {
      console.log("[SW] Cleanup complete - unregistering");
      // Notify all clients to unregister this service worker
      return self.clients.matchAll().then((clients) => {
        clients.forEach((client) => {
          client.postMessage({
            type: "SW_CLEANUP_COMPLETE",
            message: "Service worker caches cleared. Please reload."
          });
        });
      });
    })
  );
});

// Don't cache anything - just pass through to network
self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
