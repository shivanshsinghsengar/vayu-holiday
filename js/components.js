/* ==========================================================================
   VAYU HOLIDAYS — REUSABLE UI COMPONENTS (Navbar, Footer, Cards, Modals, Toast)
   ========================================================================== */

// --- SVG Icons Helper ---
const ICONS = {
  plane: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>`,
  mapPin: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  calendar: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>`,
  clock: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  star: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  x: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  phone: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  whatsapp: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43l-.48-.01c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/></svg>`,
  shield: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  sparkles: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z"/></svg>`,
  arrowRight: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  chevronDown: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
  menu: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`
};

// --- Navbar Component ---
async function renderNavbar() {
  const company = await window.vayuStore.getCompany();
  const currentCurrency = window.vayuStore.getCurrency();

  return `
    <!-- Top Announcement Bar -->
    <div class="top-bar">
      <div class="container top-bar-inner">
        <div class="top-bar-left">
          <span class="top-bar-item">
            ${ICONS.mapPin} Raksha Vihar, Airport Road, Bhopal, MP
          </span>
          <a href="tel:${company.phone}" class="top-bar-item">
            ${ICONS.phone} ${company.phone}
          </a>
        </div>
        <div class="top-bar-right">
          <span class="top-bar-item top-bar-highlight">
            ${ICONS.sparkles} 2026 Luxury Journeys Now Open
          </span>
          <a href="#/admin" class="top-bar-item" style="opacity: 0.75;" title="Admin Portal">
            Staff Portal
          </a>
        </div>
      </div>
    </div>

    <!-- Sticky Main Navbar -->
    <header class="site-header" id="siteHeader">
      <div class="container navbar">
        <!-- Logo -->
        <a href="#/" class="brand-logo">
          <div class="brand-emblem">V</div>
          <div class="brand-text">
            <span class="brand-name">Vayu Holidays</span>
            <span class="brand-tagline">Tours & Concierge • Bhopal</span>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="nav-links">
          <div class="nav-item">
            <a href="#/destinations" class="nav-link">
              Destinations ${ICONS.chevronDown}
            </a>
            <div class="nav-dropdown">
              <a href="#/domestic" class="dropdown-link">
                <span>Domestic India Tours</span>
                <span class="dropdown-link-badge">Kashmir, Kerala+</span>
              </a>
              <a href="#/international" class="dropdown-link">
                <span>International Tours</span>
                <span class="dropdown-link-badge">Dubai, Bali, Swiss+</span>
              </a>
            </div>
          </div>

          <div class="nav-item">
            <a href="#/packages" class="nav-link">
              Holidays ${ICONS.chevronDown}
            </a>
            <div class="nav-dropdown">
              <a href="#/packages" class="dropdown-link">All Holiday Packages</a>
              <a href="#/group-tours" class="dropdown-link">Guided Group Tours</a>
              <a href="#/honeymoon" class="dropdown-link">Honeymoon Specials</a>
              <a href="#/mice" class="dropdown-link">Corporate MICE & Offsites</a>
            </div>
          </div>

          <div class="nav-item">
            <a href="#/experiences" class="nav-link">
              Experiences
            </a>
          </div>

          <div class="nav-item">
            <a href="#/services/flights" class="nav-link">
              Services ${ICONS.chevronDown}
            </a>
            <div class="nav-dropdown" style="min-width: 260px;">
              <a href="#/services/flights" class="dropdown-link">Flight Bookings & Charters</a>
              <a href="#/services/hotels" class="dropdown-link">Hotels & Luxury Resorts</a>
              <a href="#/services/bus" class="dropdown-link">Bus & Volvo Coaches</a>
              <a href="#/services/train" class="dropdown-link">Train & Royal Rail</a>
              <a href="#/services/visa" class="dropdown-link">Visa Assistance & Processing</a>
              <a href="#/services/passport" class="dropdown-link">Passport Services</a>
              <a href="#/services/forex" class="dropdown-link">Forex & Multi-Currency Cards</a>
              <a href="#/services/insurance" class="dropdown-link">Travel Insurance Cover</a>
              <a href="#/services/mice" class="dropdown-link">Corporate MICE Logistics</a>
            </div>
          </div>

          <div class="nav-item">
            <a href="#/about" class="nav-link">About Us</a>
          </div>

          <div class="nav-item">
            <a href="#/blog" class="nav-link">Travel Stories</a>
          </div>

          <div class="nav-item">
            <a href="#/contact" class="nav-link">Contact</a>
          </div>
        </nav>

        <!-- Nav Actions -->
        <div class="nav-actions">
          <!-- Currency Selector -->
          <div class="currency-select-wrapper">
            <select class="currency-select" id="currencySelect" onchange="vayuStore.setCurrency(this.value)">
              <option value="INR" ${currentCurrency === "INR" ? "selected" : ""}>INR (₹)</option>
              <option value="USD" ${currentCurrency === "USD" ? "selected" : ""}>USD ($)</option>
              <option value="EUR" ${currentCurrency === "EUR" ? "selected" : ""}>EUR (€)</option>
              <option value="GBP" ${currentCurrency === "GBP" ? "selected" : ""}>GBP (£)</option>
              <option value="AED" ${currentCurrency === "AED" ? "selected" : ""}>AED</option>
            </select>
            <span class="currency-chevron">${ICONS.chevronDown}</span>
          </div>

          <!-- Primary CTA Button -->
          <button class="btn btn-gold btn-sm" onclick="openEnquiryModal({ title: 'Bespoke Journey Consultation' })">
            ${ICONS.sparkles} Plan My Trip
          </button>

          <!-- Mobile Hamburger Toggle -->
          <button class="mobile-nav-toggle" id="mobileNavToggle" onclick="toggleMobileNav()" aria-label="Toggle Navigation">
            ${ICONS.menu}
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Drawer Overlay & Drawer -->
    <div class="mobile-drawer-overlay" id="mobileDrawerOverlay" onclick="toggleMobileNav()"></div>
    <div class="mobile-drawer" id="mobileDrawer">
      <div class="mobile-drawer-header">
        <div class="brand-text">
          <span class="brand-name">Vayu Holidays</span>
          <span class="brand-tagline">Bhopal, MP</span>
        </div>
        <button class="mobile-drawer-close" onclick="toggleMobileNav()">${ICONS.x}</button>
      </div>

      <nav class="mobile-nav-links">
        <a href="#/" onclick="toggleMobileNav()">Home</a>
        <a href="#/packages" onclick="toggleMobileNav()">Holiday Packages</a>
        <a href="#/domestic" onclick="toggleMobileNav()">Domestic Tours</a>
        <a href="#/international" onclick="toggleMobileNav()">International Tours</a>
        <a href="#/group-tours" onclick="toggleMobileNav()">Group Tours</a>
        <a href="#/honeymoon" onclick="toggleMobileNav()">Honeymoon Escapes</a>
        <a href="#/mice" onclick="toggleMobileNav()">Corporate MICE</a>
        <a href="#/services/visa" onclick="toggleMobileNav()">Visa Assistance</a>
        <a href="#/services/flights" onclick="toggleMobileNav()">Flight Tickets</a>
        <a href="#/services/hotels" onclick="toggleMobileNav()">Hotel Stays</a>
        <a href="#/services/forex" onclick="toggleMobileNav()">Forex & Currency</a>
        <a href="#/about" onclick="toggleMobileNav()">About Vayu</a>
        <a href="#/blog" onclick="toggleMobileNav()">Travel Journal</a>
        <a href="#/contact" onclick="toggleMobileNav()">Contact & Office</a>
        <a href="#/admin" onclick="toggleMobileNav()" style="font-size: 1.1rem; color: var(--color-gold-dark);">Admin CMS</a>
      </nav>

      <div style="margin-top: auto; padding-top: 2rem;">
        <button class="btn btn-gold" style="width: 100%;" onclick="toggleMobileNav(); openEnquiryModal();">
          ${ICONS.sparkles} Plan My Bespoke Trip
        </button>
      </div>
    </div>
  `;
}

// --- Footer Component ---
async function renderFooter() {
  const company = await window.vayuStore.getCompany();

  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-top">
          <!-- Col 1: Brand & Office -->
          <div class="footer-brand">
            <a href="#/" class="brand-logo" style="margin-bottom: 1rem;">
              <div class="brand-emblem" style="width: 36px; height: 36px; font-size: 1.1rem;">V</div>
              <div class="brand-text">
                <span class="brand-name" style="font-size: 1.15rem; color: #fff;">Vayu Holidays</span>
                <span class="brand-tagline" style="color: var(--color-gold);">Travel Agency & Tour Operator</span>
              </div>
            </a>
            <p class="footer-desc">
              Your Journey. Beautifully Planned. Crafting original, minimal luxury travel experiences, domestic escapes, and seamless international journeys from Bhopal to the world.
            </p>

            <div class="footer-leadership-box">
              <div class="footer-leadership-title">Executive Leadership</div>
              ${company.leadership.map(l => `
                <div class="footer-leadership-item">
                  <strong>${l.name}</strong> — <span class="footer-leadership-role">${l.role}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Col 2: Destinations -->
          <div>
            <div class="footer-col-title">Destinations</div>
            <div class="footer-links">
              <a href="#/domestic" class="footer-link">Kashmir & Gulmarg</a>
              <a href="#/domestic" class="footer-link">Kerala Backwaters</a>
              <a href="#/domestic" class="footer-link">Royal Rajasthan</a>
              <a href="#/international" class="footer-link">Dubai & Abu Dhabi</a>
              <a href="#/international" class="footer-link">Bali & Nusa Penida</a>
              <a href="#/international" class="footer-link">Swiss Alps & Rail</a>
              <a href="#/international" class="footer-link">The Maldives Villas</a>
              <a href="#/international" class="footer-link">Vietnam & Indochina</a>
            </div>
          </div>

          <!-- Col 3: Holiday Categories -->
          <div>
            <div class="footer-col-title">Holiday Styles</div>
            <div class="footer-links">
              <a href="#/honeymoon" class="footer-link">Honeymoon & Romance</a>
              <a href="#/packages" class="footer-link">Luxury Family Retreats</a>
              <a href="#/group-tours" class="footer-link">Guided Group Tours</a>
              <a href="#/mice" class="footer-link">Corporate MICE & Offsites</a>
              <a href="#/packages" class="footer-link">Adventure & High Pass</a>
              <a href="#/packages" class="footer-link">Heritage Palace Trails</a>
              <a href="#/packages" class="footer-link">Custom Bespoke Itineraries</a>
            </div>
          </div>

          <!-- Col 4: Services -->
          <div>
            <div class="footer-col-title">Travel Services</div>
            <div class="footer-links">
              <a href="#/services/flights" class="footer-link">Flight Bookings & Charters</a>
              <a href="#/services/hotels" class="footer-link">Hotels & Luxury Resorts</a>
              <a href="#/services/bus" class="footer-link">Volvo Bus & Coaches</a>
              <a href="#/services/train" class="footer-link">Train & Royal Rail</a>
              <a href="#/services/visa" class="footer-link">Visa Assistance (50+ Countries)</a>
              <a href="#/services/passport" class="footer-link">Passport Consultation</a>
              <a href="#/services/forex" class="footer-link">Forex & Travel Cards</a>
              <a href="#/services/insurance" class="footer-link">Travel Insurance Cover</a>
            </div>
          </div>

          <!-- Col 5: Contact & Newsletter -->
          <div>
            <div class="footer-col-title">Head Office & Concierge</div>
            <div class="footer-contact-item">
              <span class="footer-contact-icon">${ICONS.mapPin}</span>
              <div>
                <strong>Bhopal Office:</strong><br/>
                ${company.office}
              </div>
            </div>
            <div class="footer-contact-item">
              <span class="footer-contact-icon">${ICONS.phone}</span>
              <div>
                <a href="tel:${company.phone}">${company.phone}</a><br/>
                <span style="font-size: 0.78rem; opacity: 0.75;">${company.hours}</span>
              </div>
            </div>
            <div class="footer-contact-item">
              <span class="footer-contact-icon">${ICONS.whatsapp}</span>
              <div>
                <a href="https://wa.me/919826012345?text=${encodeURIComponent(company.whatsappMessage)}" target="_blank" rel="noopener">
                  WhatsApp Concierge Desk
                </a>
              </div>
            </div>

            <div style="margin-top: 1.5rem;">
              <p class="footer-newsletter-text">Join the private travel journal circle for 2026 curated journeys:</p>
              <form class="footer-newsletter-form" onsubmit="event.preventDefault(); showToast('Subscribed', 'Thank you for joining the Vayu Holidays journal.'); this.reset();">
                <input type="email" class="footer-newsletter-input" placeholder="Your personal email..." required />
                <button type="submit" class="footer-newsletter-btn">Join</button>
              </form>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div>
            © 2026 Vayu Holidays. Travel Agency & Tour Operator. All rights reserved.
          </div>
          <div class="footer-legal-links">
            <a href="#/about">About Company</a>
            <a href="#/contact">Contact Us</a>
            <a href="#/terms">Terms & Booking Conditions</a>
            <a href="#/privacy">Privacy Policy</a>
            <a href="#/admin">CMS Staff Portal</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// --- Package Card Component ---
function renderPackageCard(pkg) {
  const formattedPrice = window.vayuStore.formatPrice(pkg.price);
  const formattedOriginal = pkg.originalPrice ? window.vayuStore.formatPrice(pkg.originalPrice) : null;

  return `
    <div class="card package-card" data-package-id="${pkg.id}">
      <div class="package-card-img-wrap">
        <img src="${pkg.image}" alt="${pkg.title}" class="package-card-img" loading="lazy" />
        <div class="package-card-top-badges">
          <span class="badge ${pkg.category === 'domestic' ? 'badge-emerald' : 'badge-gold'}">
            ${pkg.category === 'domestic' ? 'Incredible India' : 'International'}
          </span>
          <span class="badge badge-dark">
            ${pkg.durationDays}D / ${pkg.durationNights}N
          </span>
        </div>
      </div>

      <div class="package-card-body">
        <div class="package-card-meta">
          <span class="package-card-meta-item">
            ${ICONS.mapPin} ${pkg.destinationName}
          </span>
          <span class="package-card-meta-item" style="color: #b89758; font-weight: 600;">
            ${ICONS.star} ${pkg.rating} (${pkg.reviewsCount})
          </span>
        </div>

        <h3 class="package-card-title">
          <a href="#/package/${pkg.id}">${pkg.title}</a>
        </h3>

        <p class="package-card-desc">${pkg.overview}</p>

        <div class="package-card-highlights">
          ${(pkg.highlights || []).slice(0, 3).map(h => `
            <span class="highlight-pill">${h}</span>
          `).join('')}
        </div>

        <div class="package-card-footer">
          <div class="package-price-wrap">
            <span class="price-label">Starting from</span>
            <div style="display: flex; align-items: baseline; gap: 0.4rem;">
              <span class="price-amount">${formattedPrice}</span>
              ${formattedOriginal ? `<span style="text-decoration: line-through; font-size: 0.85rem; color: var(--color-text-light);">${formattedOriginal}</span>` : ''}
            </div>
            <span class="price-per">per person on twin sharing</span>
          </div>

          <div style="display: flex; gap: 0.5rem;">
            <a href="#/package/${pkg.id}" class="btn btn-secondary btn-sm">
              Details
            </a>
            <button class="btn btn-gold btn-sm" onclick="openEnquiryModal({ packageId: '${pkg.id}', title: '${pkg.title}' })">
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// --- Destination Card Component ---
function renderDestinationCard(dest) {
  const formattedStarting = window.vayuStore.formatPrice(dest.startingPrice);

  return `
    <div class="dest-card" onclick="window.location.hash='#/packages?dest=${dest.id}'">
      <img src="${dest.image}" alt="${dest.name}" class="dest-card-bg" loading="lazy" />
      <div class="dest-card-overlay"></div>
      <div class="dest-card-content">
        <span class="dest-card-tag">${dest.type === 'domestic' ? 'Domestic Discovery' : 'International Escape'}</span>
        <h3 class="dest-card-title">${dest.name}</h3>
        <p class="dest-card-desc">${dest.description}</p>
        <div class="dest-card-footer">
          <span class="dest-card-count">${dest.packagesCount} Curated Itineraries</span>
          <span style="font-size: 0.85rem; color: #fff;">From <strong>${formattedStarting}</strong></span>
        </div>
      </div>
    </div>
  `;
}

// --- Interactive Bespoke Quotation Modal ---
async function openEnquiryModal(prefill = {}) {
  const company = await window.vayuStore.getCompany();
  const packages = await window.vayuStore.getPackages();

  const modalHtml = `
    <div class="modal-overlay open" id="enquiryModalOverlay">
      <div class="modal-dialog">
        <div class="modal-header">
          <div>
            <span class="eyebrow" style="margin-bottom: 0.25rem;">Phase 1 Tailored Quotation</span>
            <h3 class="modal-title">${prefill.title || 'Plan Your Bespoke Journey'}</h3>
          </div>
          <button class="modal-close-btn" onclick="closeEnquiryModal()">${ICONS.x}</button>
        </div>

        <form id="enquiryModalForm" onsubmit="handleEnquirySubmit(event)">
          <div class="modal-body">
            <p style="font-size: 0.92rem; margin-bottom: 1.5rem; color: var(--color-text-muted);">
              Share your journey vision. Our Bhopal headquarters concierge will design a complete, transparent, itemized quotation and reach out within 2 hours.
            </p>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="form-group">
                <label class="form-label">Full Name *</label>
                <input type="text" name="name" class="form-control" placeholder="e.g. Dr. Rajesh Sharma" required />
              </div>
              <div class="form-group">
                <label class="form-label">WhatsApp / Phone *</label>
                <input type="tel" name="phone" class="form-control" placeholder="+91 98260 00000" required />
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="form-group">
                <label class="form-label">Email Address *</label>
                <input type="email" name="email" class="form-control" placeholder="name@example.com" required />
              </div>
              <div class="form-group">
                <label class="form-label">Departure City</label>
                <input type="text" name="departureCity" class="form-control" placeholder="Bhopal, Indore, Delhi..." />
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="form-group">
                <label class="form-label">Destination / Package</label>
                <select name="packageId" class="form-control">
                  <option value="">-- Select Destination or Itinerary --</option>
                  ${packages.map(p => `
                    <option value="${p.id}" ${prefill.packageId === p.id ? 'selected' : ''}>
                      ${p.title} (${p.destinationName})
                    </option>
                  `).join('')}
                  <option value="custom" ${!prefill.packageId ? 'selected' : ''}>Custom Itinerary (Any Destination)</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label">Tentative Travel Month</label>
                <select name="travelMonth" class="form-control">
                  <option value="October 2026">October 2026</option>
                  <option value="November 2026">November 2026</option>
                  <option value="December 2026">December 2026</option>
                  <option value="January 2027">January 2027</option>
                  <option value="February 2027">February 2027</option>
                  <option value="Summer 2027">Summer 2027</option>
                </select>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="form-group">
                <label class="form-label">Number of Travelers</label>
                <input type="text" name="travelers" class="form-control" placeholder="e.g. 2 Adults, 1 Child" value="2 Adults" />
              </div>
              <div class="form-group">
                <label class="form-label">Approx Budget Preference</label>
                <select name="budgetPerPerson" class="form-control">
                  <option value="Comfort (₹25k - ₹45k / person)">Comfort (₹25k - ₹45k / person)</option>
                  <option value="Luxury (₹45k - ₹85k / person)">Luxury (₹45k - ₹85k / person)</option>
                  <option value="Ultra-Luxury (₹85k - ₹2 Lakh+ / person)">Ultra-Luxury (₹85k - ₹2 Lakh+ / person)</option>
                  <option value="Corporate / Group Quote">Corporate / Group Quote</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Special Preferences or Requests</label>
              <textarea name="notes" class="form-control" placeholder="Specify hotel rating preference, flight requirements, honeymoon amenities, vegetarian meals, or custom sightseeing..."></textarea>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" onclick="closeEnquiryModal()">Cancel</button>
            <button type="submit" class="btn btn-gold">
              ${ICONS.sparkles} Submit Quotation Request
            </button>
          </div>
        </form>
      </div>
    </div>
  `;

  const existing = document.getElementById("enquiryModalOverlay");
  if (existing) existing.remove();

  document.body.insertAdjacentHTML("beforeend", modalHtml);
}

function closeEnquiryModal() {
  const modal = document.getElementById("enquiryModalOverlay");
  if (modal) modal.remove();
}

async function handleEnquirySubmit(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  const enquiry = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    departureCity: formData.get("departureCity") || "Bhopal",
    packageId: formData.get("packageId") || "custom",
    destination: form.packageId.options[form.packageId.selectedIndex]?.text || "Custom Journey",
    travelMonth: formData.get("travelMonth"),
    travelers: formData.get("travelers"),
    budgetPerPerson: formData.get("budgetPerPerson"),
    notes: formData.get("notes") || "No additional notes."
  };

  // Save to Firestore + localStorage
  const saved = await window.vayuStore.addEnquiry(enquiry);

  closeEnquiryModal();

  showToast(
    "Quotation Requested!",
    `Thank you, ${enquiry.name}. Your quotation reference is logged. Our concierge is preparing your itemized travel plan.`
  );

  // Optional: Prompt WhatsApp connect
  setTimeout(() => {
    const waText = encodeURIComponent(
      `Hello Vayu Holidays Concierge! I just submitted an inquiry for "${enquiry.destination}". Traveler: ${enquiry.name} (${enquiry.phone}), Month: ${enquiry.travelMonth}, Travelers: ${enquiry.travelers}. Please share quotation details.`
    );
    const waUrl = `https://wa.me/919826012345?text=${waText}`;
    if (confirm("Would you like to open WhatsApp to connect directly with your dedicated Vayu Holidays concierge right now?")) {
      window.open(waUrl, "_blank");
    }
  }, 900);
}

// --- Toast System ---
function showToast(title, message) {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <div style="color: var(--color-gold); font-size: 1.25rem;">${ICONS.sparkles}</div>
    <div>
      <div style="font-weight: 700; font-size: 0.92rem; margin-bottom: 2px;">${title}</div>
      <div style="font-size: 0.82rem; color: var(--color-text-inverse-muted);">${message}</div>
    </div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(15px)";
    setTimeout(() => toast.remove(), 400);
  }, 4500);
}

// --- Mobile Navigation Toggle ---
function toggleMobileNav() {
  const drawer = document.getElementById("mobileDrawer");
  const overlay = document.getElementById("mobileDrawerOverlay");
  if (drawer && overlay) {
    drawer.classList.toggle("open");
    overlay.classList.toggle("open");
  }
}

// ==========================================================================
// PRODUCTION ADDITIONS — Safe Guards & Utility Helpers
// ==========================================================================

/**
 * Sanitize HTML entities to prevent XSS in rendered user content.
 * Mirrors the same function in app.js (available globally before app.js loads).
 */
function sanitizeHtml(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

/**
 * Format a phone number for WhatsApp links (strip non-numeric, add 91 if needed).
 */
function formatWhatsAppNumber(phone) {
  const digits = phone.replace(/[^0-9]/g, "");
  if (digits.startsWith("91") && digits.length === 12) return digits;
  if (digits.length === 10) return "91" + digits;
  return digits;
}

/**
 * Lazy image loader — add IntersectionObserver for images
 * with data-src attribute (progressive loading).
 */
function initLazyImages() {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute("data-src");
              observer.unobserve(img);
            }
          }
        });
      },
      { rootMargin: "200px 0px" }
    );

    document.querySelectorAll("img[data-src]").forEach((img) => {
      observer.observe(img);
    });
  }
}

/**
 * Smooth scroll to an anchor by ID (used for hero "Explore" links).
 */
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/**
 * Copy text to clipboard with fallback.
 */
function copyToClipboard(text, successMsg = "Copied!") {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg, text.slice(0, 60));
    }).catch(() => fallbackCopy(text, successMsg));
  } else {
    fallbackCopy(text, successMsg);
  }
}

function fallbackCopy(text, msg) {
  const el = document.createElement("textarea");
  el.value = text;
  el.style.position = "fixed";
  el.style.opacity = "0";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  showToast(msg, text.slice(0, 60));
}

/**
 * Debounce utility for search inputs.
 */
function debounce(fn, delay = 300) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

/**
 * Back to top button — call after router renders each page.
 */
function injectBackToTop() {
  const existing = document.getElementById("backToTopBtn");
  if (existing) return; // Already present

  const btn = document.createElement("button");
  btn.id = "backToTopBtn";
  btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>`;
  btn.setAttribute("aria-label", "Back to top");
  btn.style.cssText = `
    position: fixed; bottom: 5.5rem; right: 2rem; width: 44px; height: 44px;
    background: var(--color-obsidian); color: var(--color-gold);
    border: 1px solid rgba(197,168,128,0.4); border-radius: 50%;
    display: none; align-items: center; justify-content: center;
    cursor: pointer; z-index: 94; box-shadow: 0 4px 16px rgba(0,0,0,0.3);
    transition: all 0.25s ease;
  `;
  btn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
  document.body.appendChild(btn);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.style.display = "flex";
    } else {
      btn.style.display = "none";
    }
  });
}

// Initialize back-to-top and lazy images after any DOM update.
// Called from router after each page render.
window.addEventListener("hashchange", () => {
  requestAnimationFrame(() => {
    initLazyImages();
    injectBackToTop();
  });
});

window.addEventListener("load", () => {
  initLazyImages();
  injectBackToTop();
});
