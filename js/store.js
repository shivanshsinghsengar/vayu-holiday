/* ==========================================================================
   VAYU HOLIDAYS — STORE (Firestore + localStorage fallback)
   
   Architecture:
   - Primary:  Firebase Firestore (when configured)
   - Fallback: localStorage (when Firebase not yet configured)
   - Auth:     Firebase Authentication (replaces hardcoded password)
   ========================================================================== */

const CURRENCY_RATES = {
  INR: { symbol: "₹",    rate: 1,      name: "INR (₹)" },
  USD: { symbol: "$",    rate: 0.012,  name: "USD ($)" },
  EUR: { symbol: "€",    rate: 0.011,  name: "EUR (€)" },
  GBP: { symbol: "£",    rate: 0.0095, name: "GBP (£)" },
  AED: { symbol: "AED ", rate: 0.044,  name: "AED"     }
};

// localStorage keys (used as fallback + currency preference)
const LS = {
  PACKAGES:     "vayu_packages_2026",
  DESTINATIONS: "vayu_destinations_2026",
  ENQUIRIES:    "vayu_enquiries_2026",
  BLOGS:        "vayu_blogs_2026",
  TESTIMONIALS: "vayu_testimonials_2026",
  OFFERS:       "vayu_offers_2026",
  COMPANY:      "vayu_company_2026",
  CURRENCY:     "vayu_currency_pref",
  AUTH:         "vayu_admin_session_2026"
};

class VayuStore {
  constructor() {
    // Always init localStorage fallback so site works before Firebase is configured
    this._initLocalStorage();
  }

  // ─── INTERNAL: check if Firestore is ready ──────────────────────────────
  get _useFirestore() {
    return typeof isFirebaseConfigured === "function" && isFirebaseConfigured();
  }

  get _db() {
    return typeof getDB === "function" ? getDB() : null;
  }

  get _auth() {
    return typeof getAuth === "function" ? getAuth() : null;
  }

  // ─── INIT localStorage with seed data (fallback mode) ───────────────────
  _initLocalStorage() {
    const sets = [
      [LS.PACKAGES,     INITIAL_DATA.packages],
      [LS.DESTINATIONS, INITIAL_DATA.destinations],
      [LS.ENQUIRIES,    INITIAL_DATA.enquiries],
      [LS.BLOGS,        INITIAL_DATA.blogs],
      [LS.TESTIMONIALS, INITIAL_DATA.testimonials],
      [LS.OFFERS,       INITIAL_DATA.offers],
      [LS.COMPANY,      INITIAL_DATA.company]
    ];
    sets.forEach(([key, data]) => {
      if (!localStorage.getItem(key)) {
        localStorage.setItem(key, JSON.stringify(data));
      }
    });
    if (!localStorage.getItem(LS.CURRENCY)) {
      localStorage.setItem(LS.CURRENCY, "INR");
    }
  }

  // ════════════════════════════════════════════════════════════════════════
  // CURRENCY
  // ════════════════════════════════════════════════════════════════════════
  getCurrency() {
    return localStorage.getItem(LS.CURRENCY) || "INR";
  }

  setCurrency(curr) {
    if (CURRENCY_RATES[curr]) {
      localStorage.setItem(LS.CURRENCY, curr);
      window.dispatchEvent(new CustomEvent("currency-changed", { detail: curr }));
    }
  }

  formatPrice(priceInINR) {
    const curr   = this.getCurrency();
    const config = CURRENCY_RATES[curr] || CURRENCY_RATES.INR;
    const converted = Math.round(priceInINR * config.rate);
    if (curr === "INR") return config.symbol + converted.toLocaleString("en-IN");
    return config.symbol + converted.toLocaleString();
  }

  // ════════════════════════════════════════════════════════════════════════
  // COMPANY / SETTINGS
  // ════════════════════════════════════════════════════════════════════════
  async getCompany() {
    if (this._useFirestore) {
      try {
        const snap = await this._db.collection("settings").doc("company").get();
        if (snap.exists) return { id: snap.id, ...snap.data() };
      } catch (e) { console.warn("Firestore getCompany failed, using fallback", e); }
    }
    return JSON.parse(localStorage.getItem(LS.COMPANY) || JSON.stringify(INITIAL_DATA.company));
  }

  async updateCompany(newDetails) {
    const current = await this.getCompany();
    const updated = { ...current, ...newDetails };
    if (this._useFirestore) {
      try {
        await this._db.collection("settings").doc("company").set(updated, { merge: true });
      } catch (e) { console.warn("Firestore updateCompany failed", e); }
    }
    localStorage.setItem(LS.COMPANY, JSON.stringify(updated));
    return updated;
  }

  // ════════════════════════════════════════════════════════════════════════
  // PACKAGES
  // ════════════════════════════════════════════════════════════════════════
  async getPackages() {
    if (this._useFirestore) {
      try {
        const snap = await this._db.collection("packages")
          .orderBy("createdAt", "desc")
          .get();
        if (!snap.empty) return snapshotToArray(snap);
      } catch (e) { console.warn("Firestore getPackages failed, using fallback", e); }
    }
    return JSON.parse(localStorage.getItem(LS.PACKAGES) || "[]");
  }

  async getPackageById(id) {
    if (this._useFirestore) {
      try {
        // Try by doc ID first
        const snap = await this._db.collection("packages").doc(id).get();
        if (snap.exists) return docToObj(snap);
        // Try by slug field
        const q = await this._db.collection("packages").where("slug", "==", id).limit(1).get();
        if (!q.empty) return docToObj(q.docs[0]);
      } catch (e) { console.warn("Firestore getPackageById failed, using fallback", e); }
    }
    const packages = JSON.parse(localStorage.getItem(LS.PACKAGES) || "[]");
    return packages.find(p => p.id === id || p.slug === id) || null;
  }

  async savePackage(pkgData) {
    const now = new Date().toISOString();
    if (!pkgData.id) {
      pkgData.id        = "pkg-" + Date.now();
      pkgData.slug      = slugify(pkgData.title);
      pkgData.createdAt = now;
    }
    pkgData.updatedAt = now;

    if (this._useFirestore) {
      try {
        await this._db.collection("packages").doc(pkgData.id).set(pkgData, { merge: true });
      } catch (e) { console.warn("Firestore savePackage failed, using fallback", e); }
    }
    // Also update localStorage cache
    const list  = JSON.parse(localStorage.getItem(LS.PACKAGES) || "[]");
    const index = list.findIndex(p => p.id === pkgData.id);
    if (index !== -1) list[index] = { ...list[index], ...pkgData };
    else list.unshift(pkgData);
    localStorage.setItem(LS.PACKAGES, JSON.stringify(list));
    return pkgData;
  }

  async deletePackage(id) {
    if (this._useFirestore) {
      try {
        await this._db.collection("packages").doc(id).delete();
      } catch (e) { console.warn("Firestore deletePackage failed", e); }
    }
    let list = JSON.parse(localStorage.getItem(LS.PACKAGES) || "[]");
    list = list.filter(p => p.id !== id);
    localStorage.setItem(LS.PACKAGES, JSON.stringify(list));
  }

  // ════════════════════════════════════════════════════════════════════════
  // DESTINATIONS
  // ════════════════════════════════════════════════════════════════════════
  async getDestinations() {
    if (this._useFirestore) {
      try {
        const snap = await this._db.collection("destinations").get();
        if (!snap.empty) return snapshotToArray(snap);
      } catch (e) { console.warn("Firestore getDestinations failed, using fallback", e); }
    }
    return JSON.parse(localStorage.getItem(LS.DESTINATIONS) || "[]");
  }

  async saveDestination(dest) {
    const now = new Date().toISOString();
    if (!dest.id) {
      dest.id        = "dest-" + Date.now();
      dest.createdAt = now;
    }
    dest.updatedAt = now;

    if (this._useFirestore) {
      try {
        await this._db.collection("destinations").doc(dest.id).set(dest, { merge: true });
      } catch (e) { console.warn("Firestore saveDestination failed", e); }
    }
    const list  = JSON.parse(localStorage.getItem(LS.DESTINATIONS) || "[]");
    const index = list.findIndex(d => d.id === dest.id);
    if (index !== -1) list[index] = { ...list[index], ...dest };
    else list.unshift(dest);
    localStorage.setItem(LS.DESTINATIONS, JSON.stringify(list));
    return dest;
  }

  async deleteDestination(id) {
    if (this._useFirestore) {
      try {
        await this._db.collection("destinations").doc(id).delete();
      } catch (e) { console.warn("Firestore deleteDestination failed", e); }
    }
    let list = JSON.parse(localStorage.getItem(LS.DESTINATIONS) || "[]");
    list = list.filter(d => d.id !== id);
    localStorage.setItem(LS.DESTINATIONS, JSON.stringify(list));
  }

  // ════════════════════════════════════════════════════════════════════════
  // ENQUIRIES / CRM
  // ════════════════════════════════════════════════════════════════════════
  async getEnquiries() {
    if (this._useFirestore) {
      try {
        const snap = await this._db.collection("enquiries")
          .orderBy("createdAt", "desc")
          .get();
        if (!snap.empty) return snapshotToArray(snap);
      } catch (e) { console.warn("Firestore getEnquiries failed, using fallback", e); }
    }
    return JSON.parse(localStorage.getItem(LS.ENQUIRIES) || "[]");
  }

  async addEnquiry(enquiry) {
    const newEnquiry = {
      id:        "enq-" + Date.now(),
      status:    "New",
      createdAt: new Date().toISOString(),
      ...enquiry
    };

    if (this._useFirestore) {
      try {
        await this._db.collection("enquiries").doc(newEnquiry.id).set(newEnquiry);
      } catch (e) { console.warn("Firestore addEnquiry failed, using fallback", e); }
    }
    const list = JSON.parse(localStorage.getItem(LS.ENQUIRIES) || "[]");
    list.unshift(newEnquiry);
    localStorage.setItem(LS.ENQUIRIES, JSON.stringify(list));
    window.dispatchEvent(new CustomEvent("new-enquiry-received", { detail: newEnquiry }));
    return newEnquiry;
  }

  async updateEnquiryStatus(id, newStatus, notes = "") {
    if (this._useFirestore) {
      try {
        const update = { status: newStatus, updatedAt: new Date().toISOString() };
        if (notes) update.notes = notes;
        await this._db.collection("enquiries").doc(id).update(update);
      } catch (e) { console.warn("Firestore updateEnquiryStatus failed", e); }
    }
    const list   = JSON.parse(localStorage.getItem(LS.ENQUIRIES) || "[]");
    const target = list.find(e => e.id === id);
    if (target) {
      target.status = newStatus;
      if (notes) target.notes = notes;
      localStorage.setItem(LS.ENQUIRIES, JSON.stringify(list));
    }
    return target;
  }

  async deleteEnquiry(id) {
    if (this._useFirestore) {
      try {
        await this._db.collection("enquiries").doc(id).delete();
      } catch (e) { console.warn("Firestore deleteEnquiry failed", e); }
    }
    let list = JSON.parse(localStorage.getItem(LS.ENQUIRIES) || "[]");
    list = list.filter(e => e.id !== id);
    localStorage.setItem(LS.ENQUIRIES, JSON.stringify(list));
  }

  // ════════════════════════════════════════════════════════════════════════
  // BLOGS
  // ════════════════════════════════════════════════════════════════════════
  async getBlogs() {
    if (this._useFirestore) {
      try {
        const snap = await this._db.collection("blogs")
          .orderBy("createdAt", "desc")
          .get();
        if (!snap.empty) return snapshotToArray(snap);
      } catch (e) { console.warn("Firestore getBlogs failed, using fallback", e); }
    }
    return JSON.parse(localStorage.getItem(LS.BLOGS) || "[]");
  }

  async getBlogBySlug(slug) {
    if (this._useFirestore) {
      try {
        const q = await this._db.collection("blogs").where("slug", "==", slug).limit(1).get();
        if (!q.empty) return docToObj(q.docs[0]);
        // Fallback: try by doc ID
        const snap = await this._db.collection("blogs").doc(slug).get();
        if (snap.exists) return docToObj(snap);
      } catch (e) { console.warn("Firestore getBlogBySlug failed, using fallback", e); }
    }
    return (JSON.parse(localStorage.getItem(LS.BLOGS) || "[]"))
      .find(b => b.slug === slug || b.id === slug) || null;
  }

  async saveBlog(blog) {
    const now = new Date().toISOString();
    if (!blog.id) {
      blog.id        = "blog-" + Date.now();
      blog.slug      = slugify(blog.title);
      blog.date      = new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
      blog.createdAt = now;
    }
    blog.updatedAt = now;

    if (this._useFirestore) {
      try {
        await this._db.collection("blogs").doc(blog.id).set(blog, { merge: true });
      } catch (e) { console.warn("Firestore saveBlog failed", e); }
    }
    const list  = JSON.parse(localStorage.getItem(LS.BLOGS) || "[]");
    const index = list.findIndex(b => b.id === blog.id);
    if (index !== -1) list[index] = { ...list[index], ...blog };
    else list.unshift(blog);
    localStorage.setItem(LS.BLOGS, JSON.stringify(list));
    return blog;
  }

  async deleteBlog(id) {
    if (this._useFirestore) {
      try {
        await this._db.collection("blogs").doc(id).delete();
      } catch (e) { console.warn("Firestore deleteBlog failed", e); }
    }
    let list = JSON.parse(localStorage.getItem(LS.BLOGS) || "[]");
    list = list.filter(b => b.id !== id);
    localStorage.setItem(LS.BLOGS, JSON.stringify(list));
  }

  // ════════════════════════════════════════════════════════════════════════
  // TESTIMONIALS
  // ════════════════════════════════════════════════════════════════════════
  async getTestimonials() {
    if (this._useFirestore) {
      try {
        const snap = await this._db.collection("testimonials").get();
        if (!snap.empty) return snapshotToArray(snap);
      } catch (e) { console.warn("Firestore getTestimonials failed, using fallback", e); }
    }
    return JSON.parse(localStorage.getItem(LS.TESTIMONIALS) || "[]");
  }

  async saveTestimonial(t) {
    const now = new Date().toISOString();
    if (!t.id) {
      t.id        = "test-" + Date.now();
      t.createdAt = now;
    }
    t.updatedAt = now;

    if (this._useFirestore) {
      try {
        await this._db.collection("testimonials").doc(t.id).set(t, { merge: true });
      } catch (e) { console.warn("Firestore saveTestimonial failed", e); }
    }
    const list  = JSON.parse(localStorage.getItem(LS.TESTIMONIALS) || "[]");
    const index = list.findIndex(item => item.id === t.id);
    if (index !== -1) list[index] = { ...list[index], ...t };
    else list.unshift(t);
    localStorage.setItem(LS.TESTIMONIALS, JSON.stringify(list));
    return t;
  }

  // ════════════════════════════════════════════════════════════════════════
  // OFFERS
  // ════════════════════════════════════════════════════════════════════════
  async getOffers() {
    if (this._useFirestore) {
      try {
        const snap = await this._db.collection("offers").get();
        if (!snap.empty) return snapshotToArray(snap);
      } catch (e) { console.warn("Firestore getOffers failed, using fallback", e); }
    }
    return JSON.parse(localStorage.getItem(LS.OFFERS) || "[]");
  }

  async saveOffer(offer) {
    const now = new Date().toISOString();
    if (!offer.id) {
      offer.id        = "offer-" + Date.now();
      offer.active    = true;
      offer.createdAt = now;
    }
    offer.updatedAt = now;

    if (this._useFirestore) {
      try {
        await this._db.collection("offers").doc(offer.id).set(offer, { merge: true });
      } catch (e) { console.warn("Firestore saveOffer failed", e); }
    }
    const list  = JSON.parse(localStorage.getItem(LS.OFFERS) || "[]");
    const index = list.findIndex(o => o.id === offer.id);
    if (index !== -1) list[index] = { ...list[index], ...offer };
    else list.unshift(offer);
    localStorage.setItem(LS.OFFERS, JSON.stringify(list));
    return offer;
  }

  async deleteOffer(id) {
    if (this._useFirestore) {
      try {
        await this._db.collection("offers").doc(id).delete();
      } catch (e) { console.warn("Firestore deleteOffer failed", e); }
    }
    let list = JSON.parse(localStorage.getItem(LS.OFFERS) || "[]");
    list = list.filter(o => o.id !== id);
    localStorage.setItem(LS.OFFERS, JSON.stringify(list));
  }

  // ════════════════════════════════════════════════════════════════════════
  // MEDIA LIBRARY
  // ════════════════════════════════════════════════════════════════════════
  async getMedia() {
    if (this._useFirestore) {
      try {
        const snap = await this._db.collection("media")
          .orderBy("createdAt", "desc")
          .get();
        if (!snap.empty) return snapshotToArray(snap);
      } catch (e) { console.warn("Firestore getMedia failed, using fallback", e); }
    }
    const stored = localStorage.getItem("vayu_media_2026");
    if (stored) return JSON.parse(stored);
    const initialMedia = [
      { id: "m1", title: "Kashmir Gulmarg Snow Meadows",   url: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80", tag: "Domestic" },
      { id: "m2", title: "Kerala Backwaters Houseboat",    url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80", tag: "Domestic" },
      { id: "m3", title: "Dubai Marina Skyline Sunset",    url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80", tag: "International" },
      { id: "m4", title: "Bali Ubud Jungle Villa",         url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80", tag: "Honeymoon" },
      { id: "m5", title: "Swiss Alps & Glaciers",          url: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80", tag: "International" },
      { id: "m6", title: "Maldives Overwater Sanctuary",   url: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80", tag: "Luxury" }
    ];
    localStorage.setItem("vayu_media_2026", JSON.stringify(initialMedia));
    return initialMedia;
  }

  async saveMedia(item) {
    item.id        = "m-" + Date.now();
    item.createdAt = new Date().toISOString();

    if (this._useFirestore) {
      try {
        await this._db.collection("media").doc(item.id).set(item);
      } catch (e) { console.warn("Firestore saveMedia failed", e); }
    }
    const media = await this.getMedia();
    media.unshift(item);
    localStorage.setItem("vayu_media_2026", JSON.stringify(media));
    return item;
  }

  async deleteMedia(id) {
    if (this._useFirestore) {
      try {
        await this._db.collection("media").doc(id).delete();
      } catch (e) { console.warn("Firestore deleteMedia failed", e); }
    }
    let media = JSON.parse(localStorage.getItem("vayu_media_2026") || "[]");
    media = media.filter(m => m.id !== id);
    localStorage.setItem("vayu_media_2026", JSON.stringify(media));
  }

  // ════════════════════════════════════════════════════════════════════════
  // PAGE SETTINGS
  // ════════════════════════════════════════════════════════════════════════
  async getPageSettings() {
    const defaults = {
      heroHeadline:     "Your Journey. Beautifully Planned.",
      heroSubtitle:     "Original, minimal luxury travel experiences from Bhopal to the world.",
      announcementText: "2026 Luxury Journeys Now Open",
      metaTitle:        "Vayu Holidays — Luxury Travel Agency & Tour Operator | Bhopal, India",
      metaDescription:  "Bespoke holiday packages, flights, luxury hotels, visa, forex, and corporate MICE from Bhopal."
    };
    if (this._useFirestore) {
      try {
        const snap = await this._db.collection("settings").doc("pageSettings").get();
        if (snap.exists) return { ...defaults, ...snap.data() };
      } catch (e) { console.warn("Firestore getPageSettings failed, using fallback", e); }
    }
    return JSON.parse(localStorage.getItem("vayu_pagesettings_2026") || JSON.stringify(defaults));
  }

  async savePageSettings(settings) {
    if (this._useFirestore) {
      try {
        await this._db.collection("settings").doc("pageSettings").set(settings, { merge: true });
      } catch (e) { console.warn("Firestore savePageSettings failed", e); }
    }
    localStorage.setItem("vayu_pagesettings_2026", JSON.stringify(settings));
    return settings;
  }

  // ════════════════════════════════════════════════════════════════════════
  // SERVICES (static — from data.js, no DB needed)
  // ════════════════════════════════════════════════════════════════════════
  getServices()          { return INITIAL_DATA.services; }
  getServiceBySlug(slug) { return INITIAL_DATA.services.find(s => s.slug === slug || s.id === slug); }

  // ════════════════════════════════════════════════════════════════════════
  // AUTHENTICATION — Firebase Auth (with localStorage session fallback)
  // ════════════════════════════════════════════════════════════════════════

  /** Returns true if admin is logged in (Firebase session OR localStorage fallback) */
  isAdminLoggedIn() {
    // Firebase Auth state (set by onAuthStateChanged in app.js)
    if (window._vayuAdminFirebaseLoggedIn === true) return true;
    // localStorage fallback (for when Firebase is not yet configured)
    return sessionStorage.getItem(LS.AUTH) === "true";
  }

  /** Login — uses Firebase Auth if configured, otherwise legacy hardcoded check */
  async loginAdmin(username, password) {
    if (this._useFirestore && this._auth) {
      try {
        // Firebase Auth requires email format
        const email = username.includes("@") ? username : `${username}@vayuholidays.com`;
        await this._auth.signInWithEmailAndPassword(email, password);
        window._vayuAdminFirebaseLoggedIn = true;
        sessionStorage.setItem(LS.AUTH, "true");
        return true;
      } catch (err) {
        console.warn("Firebase login failed:", err.code);
        // Show friendly error messages
        if (err.code === "auth/user-not-found")    throw new Error("No admin account found. Check your email.");
        if (err.code === "auth/wrong-password")    throw new Error("Incorrect password. Please try again.");
        if (err.code === "auth/too-many-requests") throw new Error("Too many failed attempts. Try again later.");
        throw new Error(err.message);
      }
    }
    // Fallback: legacy hardcoded credentials
    if (
      (username === "admin@vayuholidays.com" || username === "admin") &&
      password === "vayu2026"
    ) {
      sessionStorage.setItem(LS.AUTH, "true");
      return true;
    }
    return false;
  }

  /** Logout */
  async logoutAdmin() {
    if (this._useFirestore && this._auth) {
      try { await this._auth.signOut(); } catch (e) { /* silent */ }
    }
    window._vayuAdminFirebaseLoggedIn = false;
    sessionStorage.removeItem(LS.AUTH);
  }

  // ════════════════════════════════════════════════════════════════════════
  // RESET (dev utility)
  // ════════════════════════════════════════════════════════════════════════
  resetToDefault() {
    // Clear localStorage
    Object.values(LS).forEach(key => localStorage.removeItem(key));
    localStorage.removeItem("vayu_media_2026");
    localStorage.removeItem("vayu_pagesettings_2026");
    this._initLocalStorage();
  }
}

// ─── Global Store Instance ────────────────────────────────────────────────────
window.vayuStore = new VayuStore();
