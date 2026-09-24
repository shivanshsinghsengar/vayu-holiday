/* ==========================================================================
   VAYU HOLIDAYS — SERVICE WORKER (PWA Offline Support)
   Strategy: Cache-First for static assets, Network-First for API calls
   ========================================================================== */

const CACHE_NAME = "vayu-holidays-v1.0.0";
const OFFLINE_URL = "/offline.html";

// Assets to pre-cache on install
const PRECACHE_ASSETS = [
  "/",
  "/index.html",
  "/css/variables.css",
  "/css/main.css",
  "/css/components.css",
  "/css/sections.css",
  "/css/package-detail.css",
  "/css/admin.css",
  "/js/data.js",
  "/js/store.js",
  "/js/components.js",
  "/js/router.js",
  "/js/app.js",
  "/js/views/home.js",
  "/js/views/packages.js",
  "/js/views/packageDetail.js",
  "/js/views/services.js",
  "/js/views/about.js",
  "/js/views/blog.js",
  "/js/views/contact.js",
  "/js/views/admin.js",
  "/js/views/legal.js",
  "/offline.html"
];

// ============================================================
// INSTALL — Pre-cache core assets
// ============================================================
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[SW] Pre-caching core assets");
      return cache.addAll(PRECACHE_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// ============================================================
// ACTIVATE — Clean up old caches
// ============================================================
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => {
            console.log("[SW] Deleting old cache:", name);
            return caches.delete(name);
          })
      );
    }).then(() => self.clients.claim())
  );
});

// ============================================================
// FETCH — Cache-First for static, Network-First for navigation
// ============================================================
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests and external origins (analytics, CDN)
  if (request.method !== "GET") return;
  if (url.origin !== self.location.origin) return;

  // Navigation requests (HTML pages) — Network-First
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          return response;
        })
        .catch(() => {
          // Serve cached index or offline page
          return caches.match("/index.html")
            .then(cached => cached || caches.match(OFFLINE_URL));
        })
    );
    return;
  }

  // Static assets (CSS, JS, fonts) — Cache-First
  if (
    url.pathname.startsWith("/css/") ||
    url.pathname.startsWith("/js/") ||
    url.pathname.startsWith("/icons/") ||
    url.pathname.endsWith(".css") ||
    url.pathname.endsWith(".js")
  ) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => {
          if (response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        });
      })
    );
    return;
  }

  // Everything else — Network-First with cache fallback
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
        }
        return response;
      })
      .catch(() => caches.match(request))
  );
});

// ============================================================
// PUSH NOTIFICATIONS (Future: when backend is added)
// ============================================================
self.addEventListener("push", (event) => {
  if (!event.data) return;
  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification(data.title || "Vayu Holidays", {
      body: data.body || "New update from Vayu Holidays",
      icon: "/icons/icon-192.png",
      badge: "/icons/icon-32.png",
      data: { url: data.url || "/" }
    })
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url || "/")
  );
});
