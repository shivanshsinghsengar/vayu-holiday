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
      office_phone: "+91 755 492 8899",
      whatsapp:     "+91 98260 12345"
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

  // ── PRELOADER ──────────────────────────────────────────────────────────────
  const preloader  = document.getElementById("vayu-preloader");
  const preBar     = document.getElementById("preloaderBar");
  let   barWidth   = 0;

  // Animate progress bar
  const barInterval = setInterval(() => {
    barWidth += Math.random() * 18 + 8;
    if (barWidth >= 100) {
      barWidth = 100;
      clearInterval(barInterval);
    }
    if (preBar) preBar.style.width = barWidth + "%";
  }, 120);

  // Hide preloader after minimum display time
  const hidePreloader = () => {
    clearInterval(barInterval);
    if (preBar) preBar.style.width = "100%";
    setTimeout(() => {
      if (preloader) preloader.classList.add("hide");
      document.body.classList.add("page-ready");
      // Start scroll reveal after page is ready
      setTimeout(initScrollReveal, 200);
      setTimeout(initCounters, 800);
    }, 300);
  };

  // Hide after 1.6s minimum (feels premium, not too long)
  const minTime  = 1600;
  const started  = Date.now();
  window.addEventListener("load", () => {
    const elapsed = Date.now() - started;
    const wait    = Math.max(0, minTime - elapsed);
    setTimeout(hidePreloader, wait);
  });
  // Safety fallback — always hide after 3s
  setTimeout(hidePreloader, 3000);

  // ── STICKY HEADER ──────────────────────────────────────────────────────────
  window.addEventListener("scroll", () => {
    const h = document.getElementById("siteHeader");
    if (h) h.classList.toggle("scrolled", window.scrollY > 40);
  });

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

  // ── SERVICE WORKER ─────────────────────────────────────────────────────────
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js")
      .then(r => console.log("SW registered:", r.scope))
      .catch(e => console.warn("SW failed:", e));
  }

  // ── FIREBASE AUTH ──────────────────────────────────────────────────────────
  initFirebaseAuthListener();

  // ── GA4 PAGE TRACKING ──────────────────────────────────────────────────────
  window.addEventListener('popstate', () => trackPageView(window.location.pathname));

  // ── MOBILE NAV ARIA ────────────────────────────────────────────────────────
  const mobileToggle = document.getElementById("mobileNavToggle");
  if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
      const isOpen = document.getElementById("mobileDrawer")?.classList.contains("open");
      mobileToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // Re-run animations after router renders new page
  window.addEventListener("hashchange", () => {
    setTimeout(() => { initScrollReveal(); initCounters(); }, 250);
  });
  window.addEventListener("popstate", () => {
    setTimeout(() => { initScrollReveal(); initCounters(); }, 250);
  });

  console.log("%cVayu Holidays 2026 ✈️", "color:#B8A99A;font-size:16px;font-weight:300;font-family:'Cormorant Garamond',serif;");
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

