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

  // 1. Sticky header
  window.addEventListener("scroll", () => {
    const h = document.getElementById("siteHeader");
    if (h) h.classList.toggle("scrolled", window.scrollY > 40);
  });

  // 2. ESC closes modals
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay.open").forEach(m => m.remove());
      document.getElementById("mobileDrawer")?.classList.remove("open");
      document.getElementById("mobileDrawerOverlay")?.classList.remove("open");
    }
  });

  // 3. Cookie consent
  showCookieBanner();

  // 4. Service Worker
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js")
      .then(r => console.log("SW registered:", r.scope))
      .catch(e => console.warn("SW failed:", e));
  }

  // 5. Firebase Auth listener
  initFirebaseAuthListener();

  // 6. Track hash changes
  window.addEventListener("hashchange", () => trackPageView(window.location.hash));

  // 7. Scroll reveal animation
  function initScrollReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll("[data-reveal]").forEach(el => observer.observe(el));
  }
  // Run on each navigation
  window.addEventListener("hashchange", () => setTimeout(initScrollReveal, 200));
  setTimeout(initScrollReveal, 300);

  // 8. Mobile nav toggle ARIA update
  const mobileToggle = document.getElementById("mobileNavToggle");
  if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
      const isOpen = document.getElementById("mobileDrawer")?.classList.contains("open");
      mobileToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  console.log("%cVayu Holidays 2026 ✈️", "color:#C5A880;font-size:18px;font-weight:bold;font-family:serif;");
});
