/* ==========================================================================
   VAYU HOLIDAYS — MAIN APPLICATION INITIALIZATION
   Production: EmailJS + GA4 + Firebase Auth listener + Cookie Consent
   ========================================================================== */

// ─── EMAILJS CONFIG ───────────────────────────────────────────────────────────
const EMAILJS_CONFIG = {
  publicKey:       "YOUR_EMAILJS_PUBLIC_KEY",
  serviceId:       "service_vayuholidays",
  templateEnquiry: "template_enquiry_notify",
  templateAutoReply: "template_enquiry_autoreply"
};

// ─── GA4 CONFIG ───────────────────────────────────────────────────────────────
const GA4_MEASUREMENT_ID = "G-XXXXXXXXXX";

// ─── INPUT SANITIZER (XSS prevention) ────────────────────────────────────────
function sanitizeInput(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;");
}

// ─── EMAILJS ──────────────────────────────────────────────────────────────────
async function sendEnquiryEmail(enquiry) {
  try {
    if (typeof emailjs === "undefined") return false;
    emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });

    const params = {
      to_name:        "Vayu Holidays Concierge",
      from_name:      sanitizeInput(enquiry.name),
      from_email:     sanitizeInput(enquiry.email),
      from_phone:     sanitizeInput(enquiry.phone),
      destination:    sanitizeInput(enquiry.destination),
      travel_month:   sanitizeInput(enquiry.travelMonth),
      travelers:      sanitizeInput(enquiry.travelers),
      budget:         sanitizeInput(enquiry.budgetPerPerson || "Not specified"),
      notes:          sanitizeInput(enquiry.notes || "None"),
      departure_city: sanitizeInput(enquiry.departureCity || "Bhopal"),
      enquiry_id:     sanitizeInput(enquiry.id || "N/A"),
      reply_to:       sanitizeInput(enquiry.email),
      whatsapp_link:  `https://wa.me/${enquiry.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello ${enquiry.name}, this is Vayu Holidays Bhopal.`)}`
    };

    await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateEnquiry, params);
    await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateAutoReply, {
      to_name:      sanitizeInput(enquiry.name),
      to_email:     sanitizeInput(enquiry.email),
      destination:  sanitizeInput(enquiry.destination),
      travel_month: sanitizeInput(enquiry.travelMonth),
      travelers:    sanitizeInput(enquiry.travelers),
      enquiry_id:   sanitizeInput(enquiry.id || "N/A"),
      office_phone: "+91 888 975 4969",
      whatsapp:     "+91 888 975 4969"
    });
    return true;
  } catch (err) {
    console.error("EmailJS send failed:", err);
    return false;
  }
}

// ─── GA4 ──────────────────────────────────────────────────────────────────────
function loadGA4() {
  if (localStorage.getItem("vayu_cookie_consent") !== "accepted") return;
  if (GA4_MEASUREMENT_ID === "G-XXXXXXXXXX") return;
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA4_MEASUREMENT_ID, { anonymize_ip: true });
}

function trackPageView(path) {
  if (typeof window.gtag === "function") {
    window.gtag("event", "page_view", { page_path: path });
  }
}

function trackEvent(name, params = {}) {
  if (typeof window.gtag === "function") window.gtag("event", name, params);
}

// ─── COOKIE CONSENT ───────────────────────────────────────────────────────────
function handleCookieAccept() {
  localStorage.setItem("vayu_cookie_consent", "accepted");
  const b = document.getElementById("cookieConsentBanner");
  if (b) { b.style.opacity = "0"; b.style.visibility = "hidden"; b.style.pointerEvents = "none"; }
  loadGA4();
}

function handleCookieDecline() {
  localStorage.setItem("vayu_cookie_consent", "declined");
  const b = document.getElementById("cookieConsentBanner");
  if (b) { b.style.opacity = "0"; b.style.visibility = "hidden"; b.style.pointerEvents = "none"; }
}

function showCookieBanner() {
  const consent = localStorage.getItem("vayu_cookie_consent");
  if (!consent) {
    setTimeout(() => {
      const b = document.getElementById("cookieConsentBanner");
      if (b) {
        b.style.visibility = "visible";
        b.style.opacity    = "1";
        b.style.pointerEvents = "auto";
      }
    }, 2000);
  } else if (consent === "accepted") {
    loadGA4();
  }
}

// ─── FIREBASE AUTH STATE LISTENER ────────────────────────────────────────────
function initFirebaseAuthListener() {
  if (typeof firebase === "undefined" || !isFirebaseConfigured()) return;
  try {
    firebase.auth().onAuthStateChanged(user => {
      window._vayuAdminFirebaseLoggedIn = !!user;
      if (user) {
        sessionStorage.setItem("vayu_admin_session_2026", "true");
      } else {
        window._vayuAdminFirebaseLoggedIn = false;
        // Don't clear sessionStorage here — logout() handles that
      }
    });
  } catch (e) {
    console.warn("Firebase auth listener failed:", e.message);
  }
}

// ─── PATCH store.addEnquiry → also send email ─────────────────────────────────
window.addEventListener("DOMContentLoaded", () => {
  // Wait for store to be ready then patch
  const originalAdd = window.vayuStore.addEnquiry.bind(window.vayuStore);
  window.vayuStore.addEnquiry = async function(enquiry) {
    const saved = await originalAdd(enquiry);
    sendEnquiryEmail(saved).then(sent => {
      if (sent) trackEvent("enquiry_submitted", { destination: saved.destination });
    });
    return saved;
  };
});

// ─── DOM READY ────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {

  // ── LENIS SMOOTH SCROLL INITIALIZATION ─────────────────────────────────────  // Waits for Lenis CDN script to be available (loaded with defer)
  function initLenis() {
    if (typeof Lenis === "undefined") {
      // Retry up to 5 times if Lenis hasn't parsed yet
      if (!initLenis._retries) initLenis._retries = 0;
      if (initLenis._retries < 5) {
        initLenis._retries++;
        setTimeout(initLenis, 300);
      }
      return;
    }
    const lenis = new Lenis({
      duration:   1.4,
      easing:     t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction:  "vertical",
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });
    window._vayuLenis = lenis;

    // Connect Lenis RAF to GSAP ticker when GSAP is ready
    function connectGSAP() {
      if (window.gsap) {
        window.gsap.ticker.add((time) => lenis.raf(time * 1000));
        window.gsap.ticker.lagSmoothing(0);
        if (window.ScrollTrigger) {
          lenis.on("scroll", window.ScrollTrigger.update);
        }
      } else {
        // Fallback: own RAF loop
        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      }
    }
    // GSAP is loaded with defer — give it a moment
    setTimeout(connectGSAP, 400);
  }
  initLenis();

  // ── PRELOADER ──────────────────────────────────────────────────────────────
  const preloader = document.getElementById("vayu-preloader");
  const preBar    = document.getElementById("preloaderBar");
  const preCount  = document.getElementById("preloaderCounter");
  const prePlane  = document.getElementById("preloaderPlane");
  let   barWidth  = 0;

  // Animate progress bar + counter + plane
  const barInterval = setInterval(() => {
    barWidth += Math.random() * 18 + 8;
    if (barWidth >= 100) {
      barWidth = 100;
      clearInterval(barInterval);
    }
    const pct = Math.round(barWidth);
    if (preBar)   preBar.style.width = barWidth + "%";
    if (preCount) preCount.textContent = String(pct).padStart(2, "0") + "%";
    if (prePlane) prePlane.style.left  = barWidth + "%";
  }, 110);

  // Hide preloader with cinematic curtain reveal
  const hidePreloader = () => {
    clearInterval(barInterval);
    if (preBar)   preBar.style.width = "100%";
    if (preCount) preCount.textContent = "100%";
    if (prePlane) prePlane.style.left  = "100%";

    // Small hold so user sees 100%
    setTimeout(() => {
      if (preloader) preloader.classList.add("hide");
      document.body.classList.add("page-ready");

      // After curtain finishes (0.9s), mark as gone & scale down hero BG
      setTimeout(() => {
        if (preloader) preloader.classList.add("gone");
        // Hero BG scale-down is handled by CSS animation heroBgReveal
      }, 950);

      // Start scroll reveal after page is ready
      setTimeout(() => {
        if (typeof initScrollAnimations === "function") initScrollAnimations();
        else if (typeof initScrollReveal === "function") initScrollReveal();
      }, 250);
      setTimeout(initCounters, 900);
    }, 320);
  };

  const minTime = 900;
  const started = Date.now();
  window.addEventListener("load", () => {
    const elapsed = Date.now() - started;
    const wait    = Math.max(0, minTime - elapsed);
    setTimeout(hidePreloader, wait);
  });
  // Safety fallback
  setTimeout(hidePreloader, 3500);

  // ── STICKY HEADER ──────────────────────────────────────────────────────────
  window.addEventListener("scroll", () => {
    const h = document.getElementById("siteHeader");
    if (h) h.classList.toggle("scrolled", window.scrollY > 40);
  }, { passive: true });

  // ── ESC CLOSES MODALS ──────────────────────────────────────────────────────
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay.open").forEach(m => m.remove());
      document.getElementById("mobileDrawer")?.classList.remove("open");
      document.getElementById("mobileDrawerOverlay")?.classList.remove("open");
    }
  });

  // ── COOKIE CONSENT ─────────────────────────────────────────────────────────
  showCookieBanner();

  // ── SERVICE WORKER — force update old caches ───────────────────────────────
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js")
      .then(reg => {
        console.log("SW registered:", reg.scope);
        reg.update();
      })
      .catch(e => console.warn("SW failed:", e));

    navigator.serviceWorker.addEventListener("controllerchange", () => {
      window.location.reload();
    });
  }

  // ── FIREBASE AUTH ──────────────────────────────────────────────────────────
  initFirebaseAuthListener();

  // ── GA4 PAGE TRACKING ──────────────────────────────────────────────────────
  window.addEventListener("popstate", () => trackPageView(window.location.pathname));

  // ── MOBILE NAV ARIA ────────────────────────────────────────────────────────
  const mobileToggle = document.getElementById("mobileNavToggle");
  if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
      const isOpen = document.getElementById("mobileDrawer")?.classList.contains("open");
      mobileToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // Re-run animations after router renders new page (hash/popstate fallback)
  window.addEventListener("hashchange", () => {
    setTimeout(() => {
      if (typeof initScrollAnimations === "function") initScrollAnimations();
      else if (typeof initScrollReveal === "function") initScrollReveal();
      initCounters();
    }, 250);
  });
  window.addEventListener("popstate", () => {
    setTimeout(() => {
      if (typeof initScrollAnimations === "function") initScrollAnimations();
      else if (typeof initScrollReveal === "function") initScrollReveal();
      initCounters();
    }, 250);
  });

  console.log("%cVayu Holidays 2026 ✈️", "color:#D4AF37;font-size:16px;font-weight:300;font-family:'Cormorant Garamond',serif;");
});

// ── SCROLL REVEAL ─────────────────────────────────────────────────────────────
function initScrollReveal() {
  if (typeof IntersectionObserver === "undefined") {
    // Fallback for old browsers
    document.querySelectorAll(".reveal,.reveal-left,.reveal-right,.reveal-scale,.reveal-fade,[data-reveal]")
      .forEach(el => el.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -48px 0px" }
  );

  // Both old data-reveal and new .reveal classes
  document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade, [data-reveal]"
  ).forEach(el => {
    if (!el.classList.contains("revealed")) {
      observer.observe(el);
    }
  });

  // Stagger grids automatically
  document.querySelectorAll(
    ".packages-grid, .destinations-grid, .services-grid, .how-steps-grid, .testimonials-grid, .blog-grid, .why-grid"
  ).forEach(grid => {
    const children = Array.from(grid.children);
    children.forEach((child, i) => {
      if (!child.classList.contains("reveal") && !child.classList.contains("revealed")) {
        child.classList.add("reveal");
        child.style.transitionDelay = `${i * 0.08}s`;
        observer.observe(child);
      }
    });
  });
}

// ── NUMBER COUNTER ────────────────────────────────────────────────────────────
function initCounters() {
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll(".trust-minimal-num, [data-count]").forEach(el => {
    // Only animate elements with numeric content
    const text   = el.textContent.trim();
    const numStr = text.replace(/[^0-9.]/g, "");
    if (numStr && !el.dataset.counted) {
      el.dataset.originalText = text;
      el.dataset.countTarget  = numStr;
      el.dataset.counted      = "false";
      counterObserver.observe(el);
    }
  });
}

function animateCounter(el) {
  if (el.dataset.counted === "true") return;
  el.dataset.counted = "true";

  const original = el.dataset.originalText || el.textContent;
  const target   = parseFloat(el.dataset.countTarget || "0");
  const isFloat  = original.includes(".");
  const suffix   = original.replace(/[\d.]/g, "").trim(); // e.g. "★", "+", "yrs"
  const prefix   = "";
  const duration = 1400;
  const start    = performance.now();

  const easeOut = t => 1 - Math.pow(1 - t, 3);

  const tick = (now) => {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const current  = target * easeOut(progress);

    el.textContent = (isFloat ? current.toFixed(1) : Math.round(current)) + suffix;

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      el.textContent = original; // restore exact original
    }
  };

  requestAnimationFrame(tick);
}


// ── REMOVE NETLIFY BADGE ──────────────────────────────────────────────────────
(function removeNetlifyBadge() {
  const kill = () => {
    document.querySelectorAll(
      '[data-netlify-deploy-id], .netlify-badge, ' +
      'a[href*="app.netlify.com"], a[href*="netlify.com/products"], ' +
      'iframe[src*="netlify"]'
    ).forEach(el => el.remove());
  };
  kill();
  new MutationObserver(kill).observe(document.body, { childList: true, subtree: true });
})();

// ── MOBILE DRAWER SWIPE-TO-CLOSE ─────────────────────────────────────────────
// Allows swiping right to close the navigation drawer on touch devices
(function initDrawerSwipe() {
  let startX = 0;
  let startY = 0;
  let isDragging = false;

  document.addEventListener("touchstart", (e) => {
    const drawer = document.getElementById("mobileDrawer");
    if (!drawer || !drawer.classList.contains("open")) return;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    isDragging = true;
  }, { passive: true });

  document.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    const drawer = document.getElementById("mobileDrawer");
    if (!drawer || !drawer.classList.contains("open")) return;

    const dx = e.touches[0].clientX - startX;
    const dy = Math.abs(e.touches[0].clientY - startY);

    // Only horizontal swipe (not vertical scroll)
    if (dx > 0 && dy < 60 && dx > dy) {
      const progress = Math.min(dx / 200, 1);
      drawer.style.transform = `translateX(${dx}px)`;
      drawer.style.transition = "none";
      const overlay = document.getElementById("mobileDrawerOverlay");
      if (overlay) overlay.style.opacity = String(1 - progress * 0.8);
    }
  }, { passive: true });

  document.addEventListener("touchend", (e) => {
    if (!isDragging) return;
    isDragging = false;

    const drawer = document.getElementById("mobileDrawer");
    if (!drawer || !drawer.classList.contains("open")) return;

    const dx = e.changedTouches[0].clientX - startX;
    drawer.style.transition = "";

    if (dx > 80) {
      // Swipe far enough — close drawer
      drawer.style.transform = "";
      if (typeof toggleMobileNav === "function") toggleMobileNav();
    } else {
      // Snap back
      drawer.style.transform = "";
      const overlay = document.getElementById("mobileDrawerOverlay");
      if (overlay) overlay.style.opacity = "";
    }
  }, { passive: true });
})();

// ── SCROLL REVEAL — MOBILE-OPTIMISED THRESHOLDS ───────────────────────────────
// On mobile, elements are taller relative to viewport, so use lower threshold
(function patchScrollRevealForMobile() {
  if (typeof IntersectionObserver === "undefined") return;
  if (window.innerWidth > 768) return; // only on mobile

  // Re-observe with mobile-friendly threshold (5% vs 10% for desktop)
  const mobileObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          mobileObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
  );

  // Wait for content to render, then re-observe unrevealed items
  setTimeout(() => {
    document.querySelectorAll(
      ".reveal:not(.revealed), [data-reveal]:not(.revealed)"
    ).forEach(el => mobileObserver.observe(el));
  }, 600);
})();

// ── RATING DIALOG ─────────────────────────────────────────────────────────────
(function initRatingDialog() {
  // Only show once per browser session
  if (sessionStorage.getItem("vayu_rating_shown")) return;

  let selectedRating = 0;

  // Show after 5 seconds
  setTimeout(() => {
    const backdrop = document.getElementById("ratingDialogBackdrop");
    if (!backdrop) return;
    sessionStorage.setItem("vayu_rating_shown", "1");
    backdrop.style.display = "flex";
    backdrop.removeAttribute("aria-hidden");
  }, 5000);

  window.handleStarClick = function(val) {
    selectedRating = val;
    document.querySelectorAll(".rating-star-btn").forEach(btn => {
      btn.classList.toggle("active", parseInt(btn.dataset.val) <= val);
    });
    const submitBtn = document.getElementById("ratingSubmitBtn");
    if (submitBtn) submitBtn.disabled = false;
  };

  window.submitRating = function() {
    const body = document.getElementById("ratingDialogBody");
    if (!body) return;
    body.innerHTML = `
      <div class="rating-thankyou">
        <div class="rating-thankyou-icon">🙏</div>
        <div class="rating-thankyou-text">Thank you for rating us!</div>
        <div class="rating-thankyou-sub">Your feedback means the world to us.</div>
      </div>
    `;
    setTimeout(() => closeRatingDialog(), 2200);
  };

  window.closeRatingDialog = function() {
    const dialog = document.getElementById("ratingDialog");
    const backdrop = document.getElementById("ratingDialogBackdrop");
    if (!dialog || !backdrop) return;
    dialog.classList.add("hide");
    setTimeout(() => {
      backdrop.style.display = "none";
      backdrop.setAttribute("aria-hidden", "true");
    }, 320);
  };
})();
