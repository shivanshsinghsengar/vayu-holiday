/* ==========================================================================
   VAYU HOLIDAYS "” REUSABLE UI COMPONENTS (Navbar, Footer, Cards, Modals, Toast)
   ========================================================================== */

// --- SVG Icons Helper ---
// ICONS is defined inline in index.html <script> block before this file loads.
// This guard prevents a SyntaxError ("already declared") crash if this file is
// ever loaded standalone, while never re-declaring the const on the SPA path.
if (typeof ICONS === "undefined") {
  window.ICONS = {
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
}

// --- Navbar Component ---
async function renderNavbar() {
  const company = await window.vayuStore.getCompany();
  const pageSettings = await window.vayuStore.getPageSettings();
  const currentCurrency = window.vayuStore.getCurrency();
  const waNumber = (company.whatsapp || "+91 98260 12345").replace(/[^0-9]/g, "");
  const waMsg = encodeURIComponent("Hello Vayu Holidays! I'd like to inquire about planning a luxury journey.");
  const showJournal = pageSettings.showJournal !== false;

  const currLabel = currentCurrency === 'INR' ? '₹ INR' : currentCurrency === 'USD' ? '$ USD' : currentCurrency === 'EUR' ? '€ EUR' : currentCurrency === 'GBP' ? '£ GBP' : 'AED';

  return `
    <!-- Utility Bar -->
    <div class="vn-util-bar">
      <div class="vn-util-left">
        <span>24/7 Concierge</span>
        <span>Bhopal's trusted luxury travel agency</span>
      </div>
      <div class="vn-util-right">
        <a href="tel:${company.phone}">${company.phone}</a>
        <span class="vn-util-hours">${company.hours}</span>
      </div>
    </div>

    <!-- Main Header -->
    <header class="vn-header" id="siteHeader" role="banner">
      <div class="vn-main-bar">

        <!-- Logo -->
        <a href="/" class="vn-logo" aria-label="Vayu Holidays home">
          <img src="/icons/nob.png" alt="Vayu Holidays" style="height:72px;width:auto;object-fit:contain;" />
        </a>

        <!-- Desktop Nav -->
        <nav class="vn-nav" aria-label="Main navigation">

          <!-- Services -->
          <div class="vn-item" id="vni-services">
            <button class="vn-btn" aria-haspopup="true" aria-expanded="false" id="vnbtn-services">
              Services
              <svg class="vn-chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 6 8 10 12 6"/></svg>
            </button>
            <div class="vn-dropdown" id="vnd-services">
              <div class="vn-card vn-card-services">
                <div class="vn-svc-grid">
                  <a href="/services/visa" class="vn-svc-row" onclick="closeAllDropdowns()">
                    <div class="vn-svc-icon">🛂</div>
                    <div><div class="vn-svc-title">Visa Assistance</div><div class="vn-svc-desc">50+ countries · fast processing</div></div>
                  </a>
                  <a href="/services/forex" class="vn-svc-row" onclick="closeAllDropdowns()">
                    <div class="vn-svc-icon">💱</div>
                    <div><div class="vn-svc-title">Forex & Travel Cards</div><div class="vn-svc-desc">Best rates · doorstep delivery</div></div>
                  </a>
                  <a href="/services/flights" class="vn-svc-row" onclick="closeAllDropdowns()">
                    <div class="vn-svc-icon">✈️</div>
                    <div><div class="vn-svc-title">Flights & Charters</div><div class="vn-svc-desc">Domestic & international fares</div></div>
                  </a>
                  <a href="/services/hotels" class="vn-svc-row" onclick="closeAllDropdowns()">
                    <div class="vn-svc-icon">🏨</div>
                    <div><div class="vn-svc-title">Hotels & Resorts</div><div class="vn-svc-desc">Handpicked 4★ & 5★ stays</div></div>
                  </a>
                  <a href="/services/insurance" class="vn-svc-row" onclick="closeAllDropdowns()">
                    <div class="vn-svc-icon">🛡️</div>
                    <div><div class="vn-svc-title">Travel Insurance</div><div class="vn-svc-desc">Cashless global cover</div></div>
                  </a>
                  <a href="/services/passport" class="vn-svc-row" onclick="closeAllDropdowns()">
                    <div class="vn-svc-icon">📘</div>
                    <div><div class="vn-svc-title">Passport Services</div><div class="vn-svc-desc">Fresh · renewal · Tatkaal</div></div>
                  </a>
                </div>
                <div class="vn-dd-footer">
                  <span>Looking for a holiday package?</span>
                  <a href="/packages" onclick="closeAllDropdowns()">Explore Holidays →</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Holidays -->
          <div class="vn-item" id="vni-holidays">
            <button class="vn-btn" aria-haspopup="true" aria-expanded="false" id="vnbtn-holidays">
              Holidays
              <svg class="vn-chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 6 8 10 12 6"/></svg>
            </button>
            <div class="vn-dropdown" id="vnd-holidays">
              <div class="vn-card vn-card-holidays">
                <a href="/domestic" class="vn-hol-row" onclick="closeAllDropdowns()">
                  <div class="vn-hol-thumb" style="background:linear-gradient(135deg,#1a4a3a,#2d7a5f)">🏔️</div>
                  <div class="vn-hol-info">
                    <div class="vn-hol-title">Domestic India</div>
                    <div class="vn-hol-dest">Kashmir · Kerala · Goa · Rajasthan</div>
                  </div>
                  <svg class="vn-hol-arrow" width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="8" x2="13" y2="8"/><polyline points="9 4 13 8 9 12"/></svg>
                </a>
                <a href="/international" class="vn-hol-row" onclick="closeAllDropdowns()">
                  <div class="vn-hol-thumb" style="background:linear-gradient(135deg,#1a2d4a,#2d5f7a)">🌍</div>
                  <div class="vn-hol-info">
                    <div class="vn-hol-title">International</div>
                    <div class="vn-hol-dest">Dubai · Bali · Switzerland · Maldives</div>
                  </div>
                  <svg class="vn-hol-arrow" width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="8" x2="13" y2="8"/><polyline points="9 4 13 8 9 12"/></svg>
                </a>
                <a href="/honeymoon" class="vn-hol-row" onclick="closeAllDropdowns()">
                  <div class="vn-hol-thumb" style="background:linear-gradient(135deg,#4a1a2d,#7a2d5f)">💑</div>
                  <div class="vn-hol-info">
                    <div class="vn-hol-title">Honeymoon</div>
                    <div class="vn-hol-dest">Maldives · Bali · Kashmir</div>
                  </div>
                  <svg class="vn-hol-arrow" width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="8" x2="13" y2="8"/><polyline points="9 4 13 8 9 12"/></svg>
                </a>
                <a href="/group-tours" class="vn-hol-row" onclick="closeAllDropdowns()">
                  <div class="vn-hol-thumb" style="background:linear-gradient(135deg,#2d3a1a,#5f7a2d)">👥</div>
                  <div class="vn-hol-info">
                    <div class="vn-hol-title">Group Tours</div>
                    <div class="vn-hol-dest">Fixed departures · guided</div>
                  </div>
                  <svg class="vn-hol-arrow" width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="8" x2="13" y2="8"/><polyline points="9 4 13 8 9 12"/></svg>
                </a>
              </div>
            </div>
          </div>

          <a href="/about" class="vn-btn vn-link" onclick="closeAllDropdowns()">About</a>
          ${showJournal ? `<a href="/blog" class="vn-btn vn-link" onclick="closeAllDropdowns()">Journal</a>` : ''}
          <a href="/contact" class="vn-btn vn-link" onclick="closeAllDropdowns()">Contact</a>
        </nav>

        <!-- Actions -->
        <div class="vn-actions">
          <!-- Currency -->
          <div class="vn-currency-wrap" id="vnCurrencyWrap">
            <button class="vn-currency-btn" onclick="toggleVnCurrency(event)" aria-label="Currency">
              <span id="vnCurrLabel">${currLabel}</span>
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 6 8 10 12 6"/></svg>
            </button>
            <div class="vn-currency-dd" id="vnCurrencyDd">
              <div onclick="selectCurrency('INR','₹ INR')">₹ INR</div>
              <div onclick="selectCurrency('USD','$ USD')">$ USD</div>
              <div onclick="selectCurrency('EUR','€ EUR')">€ EUR</div>
              <div onclick="selectCurrency('GBP','£ GBP')">£ GBP</div>
              <div onclick="selectCurrency('AED','AED')">AED</div>
            </div>
          </div>

          <!-- WhatsApp -->
          <a href="https://wa.me/${waNumber}?text=${waMsg}" target="_blank" rel="noopener" class="vn-wa-btn" aria-label="WhatsApp">
            ${ICONS.whatsapp}
          </a>

          <!-- Plan My Trip CTA -->
          <button class="vn-cta-btn" onclick="openEnquiryModal({ title: 'Plan My Trip' })">
            Plan My Trip
          </button>

          <!-- Hamburger -->
          <button class="vn-hamburger" id="vnHamburger" onclick="toggleVnDrawer()" aria-label="Open menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>

      </div>
    </header>

    <!-- DD Scrim -->
    <div class="vn-dd-scrim" id="vnDdScrim" onclick="closeAllDropdowns()"></div>

    <!-- Mobile Drawer -->
    <div class="vn-mob-scrim" id="vnMobScrim" onclick="toggleVnDrawer()"></div>
    <aside class="vn-drawer" id="vnDrawer" aria-label="Mobile navigation" aria-hidden="true">
      <div class="vn-drawer-head">
        <img src="/icons/nob.png" alt="Vayu Holidays" style="height:44px;width:auto;object-fit:contain;" />
        <button class="vn-drawer-close" onclick="toggleVnDrawer()" aria-label="Close">
          ${ICONS.x}
        </button>
      </div>

      <div class="vn-drawer-body">
        <!-- Services accordion -->
        <button class="vn-drawer-acc-btn" onclick="toggleVnAcc('vnAccServices', this)">
          Services <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 6 8 10 12 6"/></svg>
        </button>
        <div class="vn-drawer-acc" id="vnAccServices">
          <a href="/services/visa"      onclick="toggleVnDrawer()"><span>🛂</span> Visa Assistance</a>
          <a href="/services/forex"     onclick="toggleVnDrawer()"><span>💱</span> Forex & Cards</a>
          <a href="/services/flights"   onclick="toggleVnDrawer()"><span>✈️</span> Flights</a>
          <a href="/services/hotels"    onclick="toggleVnDrawer()"><span>🏨</span> Hotels & Resorts</a>
          <a href="/services/insurance" onclick="toggleVnDrawer()"><span>🛡️</span> Insurance</a>
        </div>

        <button class="vn-drawer-acc-btn" onclick="toggleVnAcc('vnAccHolidays', this)">
          Holidays <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 6 8 10 12 6"/></svg>
        </button>
        <div class="vn-drawer-acc" id="vnAccHolidays">
          <a href="/domestic"      onclick="toggleVnDrawer()"><span>🏔️</span> Domestic India</a>
          <a href="/international" onclick="toggleVnDrawer()"><span>🌍</span> International</a>
          <a href="/honeymoon"     onclick="toggleVnDrawer()"><span>💑</span> Honeymoon</a>
          <a href="/group-tours"   onclick="toggleVnDrawer()"><span>👥</span> Group Tours</a>
          <a href="/mice"          onclick="toggleVnDrawer()"><span>💼</span> Corporate MICE</a>
        </div>

        <div class="vn-drawer-sep"></div>
        <a href="/about"   class="vn-drawer-link" onclick="toggleVnDrawer()">About</a>
        ${showJournal ? `<a href="/blog" class="vn-drawer-link" onclick="toggleVnDrawer()">Journal</a>` : ''}
        <a href="/contact" class="vn-drawer-link" onclick="toggleVnDrawer()">Contact</a>
      </div>

      <div class="vn-drawer-footer">
        <button class="vn-drawer-cta" onclick="toggleVnDrawer(); openEnquiryModal();">✦ Plan My Trip</button>
        <a href="https://wa.me/${waNumber}?text=${waMsg}" target="_blank" rel="noopener" class="vn-drawer-wa" onclick="toggleVnDrawer()">
          ${ICONS.whatsapp} WhatsApp Us
        </a>
      </div>
    </aside>

    <!-- Floating WhatsApp -->
    <a href="https://wa.me/${waNumber}?text=${waMsg}" target="_blank" rel="noopener" class="floating-wa-btn" aria-label="WhatsApp">
      ${ICONS.whatsapp}
    </a>

    <!-- Mobile Bottom Bar -->
    <div class="vn-mob-bar" role="complementary">
      <a href="tel:${company.phone}" class="vn-mob-btn">
        ${ICONS.phone}<span>Call</span>
      </a>
      <a href="https://wa.me/${waNumber}?text=${waMsg}" target="_blank" rel="noopener" class="vn-mob-btn vn-mob-wa">
        ${ICONS.whatsapp}<span>WhatsApp</span>
      </a>
      <button class="vn-mob-btn vn-mob-gold" onclick="openEnquiryModal()">
        ${ICONS.sparkles}<span>Enquire</span>
      </button>
    </div>
  `;
}
// --- Footer Component ---
async function renderFooter() {
  const company = await window.vayuStore.getCompany();
  const waNumber = (company.whatsapp || "+91 98260 12345").replace(/[^0-9]/g, "");
  const waMsg = encodeURIComponent(company.whatsappMessage || "Hello Vayu Holidays! I'd like to inquire about a holiday.");

  return `
    <footer class="site-footer" role="contentinfo">
      <div class="container">

        <!-- Footer Top Grid -->
        <div class="footer-top">

          <!-- Col 1: Brand -->
          <div class="footer-brand">
            <a href="/" class="brand-logo footer-brand-logo" aria-label="Vayu Holidays home">
              <img src="/icons/nob.png" alt="Vayu Holidays" style="height:56px;width:auto;object-fit:contain;" />
            </a>

            <p class="footer-desc">
              Your Journey. Beautifully Planned. Bespoke luxury travel experiences, handcrafted itineraries, and dedicated 24/7 concierge "” from Bhopal to the world.
            </p>

            <!-- Trust Badges -->
            <div class="footer-trust-badges">
              <div class="footer-trust-badge">
                <span class="ftb-icon">★</span>
                <div>
                  <div class="ftb-val">4.9 / 5</div>
                  <div class="ftb-label">Guest Rating</div>
                </div>
              </div>
              <div class="footer-trust-badge">
                <span class="ftb-icon">✓</span>
                <div>
                  <div class="ftb-val">500+</div>
                  <div class="ftb-label">Trips Curated</div>
                </div>
              </div>
              <div class="footer-trust-badge">
                <span class="ftb-icon">⏰</span>
                <div>
                  <div class="ftb-val">24 / 7</div>
                  <div class="ftb-label">Concierge</div>
                </div>
              </div>
            </div>

            <!-- Leadership -->
            <div class="footer-leadership-box">
              <div class="footer-leadership-title">Executive Team</div>
              ${company.leadership.map(l => `
                <div class="footer-leadership-item">
                  <strong>${l.name}</strong>
                  <span class="footer-leadership-role">${l.role}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Col 2: Destinations -->
          <div>
            <div class="footer-col-title">Destinations</div>
            <div class="footer-links">
              <a href="/domestic" class="footer-link">Kashmir & Gulmarg</a>
              <a href="/domestic" class="footer-link">Kerala Backwaters</a>
              <a href="/domestic" class="footer-link">Royal Rajasthan</a>
              <a href="/domestic" class="footer-link">Himachal Pradesh</a>
              <a href="/international" class="footer-link">Dubai & Abu Dhabi</a>
              <a href="/international" class="footer-link">Bali & Nusa Penida</a>
              <a href="/international" class="footer-link">Swiss Alps & Rail</a>
              <a href="/international" class="footer-link">The Maldives</a>
              <a href="/international" class="footer-link">Vietnam & Indochina</a>
            </div>
          </div>

          <!-- Col 3: Packages -->
          <div>
            <div class="footer-col-title">Holiday Styles</div>
            <div class="footer-links">
              <a href="/honeymoon" class="footer-link">Honeymoon & Romance</a>
              <a href="/packages" class="footer-link">Family Luxury Retreats</a>
              <a href="/group-tours" class="footer-link">Guided Group Tours</a>
              <a href="/mice" class="footer-link">Corporate MICE</a>
              <a href="/packages" class="footer-link">Adventure & Trekking</a>
              <a href="/packages" class="footer-link">Heritage Palace Trails</a>
              <a href="/packages" class="footer-link">Custom Bespoke Trips</a>
              <a href="/packages" class="footer-link">Senior-Friendly Tours</a>
            </div>
          </div>

          <!-- Col 4: Services -->
          <div>
            <div class="footer-col-title">Travel Services</div>
            <div class="footer-links">
              <a href="/services/flights" class="footer-link">Flight Bookings</a>
              <a href="/services/hotels" class="footer-link">Hotels & Resorts</a>
              <a href="/services/visa" class="footer-link">Visa Assistance</a>
              <a href="/services/passport" class="footer-link">Passport Help</a>
              <a href="/services/forex" class="footer-link">Forex & Travel Cards</a>
              <a href="/services/insurance" class="footer-link">Travel Insurance</a>
              <a href="/services/bus" class="footer-link">Bus & Coaches</a>
              <a href="/services/train" class="footer-link">Train Ticketing</a>
              <a href="/services/mice" class="footer-link">Corporate MICE</a>
            </div>
          </div>

          <!-- Col 5: Contact & Newsletter -->
          <div>
            <div class="footer-col-title">Head Office</div>
            <address class="footer-address" style="font-style:normal;">
              <div class="footer-contact-item">
                <span class="footer-contact-icon" aria-hidden="true">${ICONS.mapPin}</span>
                <div>
                  <strong style="color:rgba(255,255,255,0.85);display:block;margin-bottom:2px;">Bhopal Office</strong>
                  <span>${company.office}</span>
                </div>
              </div>
              <div class="footer-contact-item">
                <span class="footer-contact-icon" aria-hidden="true">${ICONS.phone}</span>
                <div>
                  <a href="tel:${company.phone}" style="color:rgba(255,255,255,0.85);">${company.phone}</a>
                  <span style="display:block;font-size:0.76rem;opacity:0.6;margin-top:2px;">${company.hours}</span>
                </div>
              </div>
              <div class="footer-contact-item">
                <span class="footer-contact-icon" style="color:#25D366;" aria-hidden="true">${ICONS.whatsapp}</span>
                <div>
                  <a href="https://wa.me/${waNumber}?text=${waMsg}" target="_blank" rel="noopener" style="color:#4ade80;">
                    ${company.whatsapp || "+91 98260 12345"}
                    <span style="display:block;font-size:0.76rem;opacity:0.75;">Instant Reply · 9 AM "“ 9 PM</span>
                  </a>
                </div>
              </div>
              <div class="footer-contact-item">
                <span class="footer-contact-icon" aria-hidden="true">${ICONS.sparkles}</span>
                <div>
                  <a href="mailto:${company.email}" style="color:rgba(255,255,255,0.75);">${company.email}</a>
                </div>
              </div>
            </address>

            <!-- Newsletter -->
            <div class="footer-newsletter-wrap">
              <p class="footer-newsletter-text">
                <strong style="color:rgba(255,255,255,0.9);">Get 2026 exclusive deals</strong><br/>
                Curated journeys and early-bird offers straight to your inbox.
              </p>
              <form class="footer-newsletter-form" onsubmit="handleNewsletterSubmit(event)" novalidate>
                <input type="email" class="footer-newsletter-input" placeholder="your@email.com" required aria-label="Email for newsletter" />
                <button type="submit" class="footer-newsletter-btn" aria-label="Subscribe">Join</button>
              </form>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <div class="footer-divider"></div>

        <!-- Footer Bottom -->
        <div class="footer-bottom">
          <div class="footer-bottom-left">
            <span>© 2026 Vayu Holidays. All rights reserved.</span>
            <span class="footer-reg-info">GST: 23XXXXX0000X1ZX &nbsp;|&nbsp; IATA Accredited Agent</span>
          </div>
          <div class="footer-legal-links">
            <a href="/terms">Terms & Conditions</a>
            <a href="/terms">Cancellation Policy</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/privacy">Cookie Policy</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
          </div>
        </div>

      </div>
    </footer>
  `;
}

// newsletter handler
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const email = e.target.querySelector('input[type="email"]').value;
  if (email) {
    showToast("Subscribed!", "Welcome to the Vayu Holidays travel circle. Watch your inbox for curated 2026 offers.");
    e.target.reset();
  }
}

// --- Package Card Component ---
window.renderPackageCard = function renderPackageCard(pkg) {
  const formattedPrice    = window.vayuStore.formatPrice(pkg.price);
  const formattedOriginal = pkg.originalPrice ? window.vayuStore.formatPrice(pkg.originalPrice) : null;
  const discount = pkg.originalPrice
    ? Math.round((1 - pkg.price / pkg.originalPrice) * 100) + "% OFF"
    : null;

  return `
    <div class="card package-card" data-package-id="${pkg.id}">
      <div class="package-card-img-wrap">
        <img src="${pkg.image}" alt="${pkg.title}" class="package-card-img" loading="lazy" width="600" height="400" />

        <!-- Dark gradient over image bottom -->
        <div class="package-card-img-gradient" aria-hidden="true"></div>

        <!-- Frosted-glass price badge — top right -->
        <div class="package-card-price-badge">
          ${discount ? `<span class="package-card-discount-tag">${discount}</span>` : ""}
          <span class="package-card-price-float">${formattedPrice}</span>
        </div>

        <!-- Duration pill — bottom left of image -->
        <div class="package-card-duration-pill">
          ${ICONS.clock} ${pkg.durationDays}D&thinsp;/&thinsp;${pkg.durationNights}N
        </div>

        <!-- Category badge — top left -->
        <div class="package-card-cat-badge">
          <span class="badge ${pkg.category === 'domestic' ? 'badge-emerald' : 'badge-gold'}">
            ${pkg.category === 'domestic' ? 'Incredible India' : 'International'}
          </span>
        </div>
      </div>

      <div class="package-card-body">
        <div class="package-card-meta">
          <span class="package-card-meta-item">${ICONS.mapPin} ${pkg.destinationName}</span>
          <span class="package-card-meta-item package-card-rating">
            ${ICONS.star} ${pkg.rating} <span style="opacity:.6;font-weight:400;">(${pkg.reviewsCount})</span>
          </span>
        </div>

        <h3 class="package-card-title">
          <a href="/package/${pkg.id}">${pkg.title}</a>
        </h3>

        <p class="package-card-desc">${pkg.overview}</p>

        <div class="package-card-footer">
          <div class="package-price-wrap">
            <span class="price-label">Starting from</span>
            <div style="display:flex;align-items:baseline;gap:.4rem;">
              <span class="price-amount">${formattedPrice}</span>
              ${formattedOriginal ? `<span style="text-decoration:line-through;font-size:.82rem;color:var(--c-ink-4);">${formattedOriginal}</span>` : ""}
            </div>
            <span class="price-per">per person · twin sharing</span>
          </div>
          <div style="display:flex;gap:.5rem;align-items:center;">
            <a href="/package/${pkg.id}" class="btn btn-secondary btn-sm">Details</a>
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
window.renderDestinationCard = function renderDestinationCard(dest) {
  const formattedStarting = window.vayuStore.formatPrice(dest.startingPrice);

  return `
    <div class="dest-card" onclick="window.navigate('/packages?dest=${dest.id}')" role="button" tabindex="0" aria-label="View ${dest.name} packages" onkeydown="if(event.key==='Enter')window.navigate('/packages?dest=${dest.id}')">
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

// --- Enquiry Modal ---
async function openEnquiryModal(prefill = {}) {
  const company = await window.vayuStore.getCompany();
  const waNumber = (company.whatsapp || "919826012345").replace(/[^0-9]/g, "");

  const modalHtml = `
    <div class="modal-overlay open" id="enquiryModalOverlay">
      <div class="modal-dialog" style="max-width:480px;">
        <div class="modal-header">
          <div>
            <h3 class="modal-title">${prefill.title || 'Plan My Trip'}</h3>
            <p style="font-size:0.82rem;color:var(--color-text-muted);margin-top:0.25rem;">We'll call you back within 2 hours.</p>
          </div>
          <button class="modal-close-btn" onclick="closeEnquiryModal()">${ICONS.x}</button>
        </div>

        <form id="enquiryModalForm" onsubmit="handleEnquirySubmit(event)">
          <div class="modal-body" style="padding-top:1rem;">

            <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
              <div class="form-group">
                <label class="form-label">Full Name *</label>
                <input type="text" name="name" class="form-control" placeholder="Your name" required />
              </div>
              <div class="form-group">
                <label class="form-label">Phone / WhatsApp *</label>
                <input type="tel" name="phone" class="form-control" placeholder="+91 98260 00000" required />
              </div>
            </div>

            <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
              <div class="form-group">
                <label class="form-label">Email *</label>
                <input type="email" name="email" class="form-control" placeholder="you@email.com" required />
              </div>
              <div class="form-group">
                <label class="form-label">Your City *</label>
                <input type="text" name="departureCity" class="form-control" placeholder="Bhopal, Indore..." required />
              </div>
            </div>

          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" onclick="closeEnquiryModal()">Cancel</button>
            <button type="submit" class="btn btn-gold">
              ${ICONS.sparkles} Get Free Quote
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
    name:          formData.get("name"),
    phone:         formData.get("phone"),
    email:         formData.get("email"),
    departureCity: formData.get("departureCity"),
    packageId:     "custom",
    destination:   "Custom Journey",
    travelMonth:   "Not specified",
    travelers:     "Not specified",
    budgetPerPerson: "Not specified",
    notes:         "No additional notes."
  };

  await window.vayuStore.addEnquiry(enquiry);
  closeEnquiryModal();
  showToast("Request Sent!", `Thank you ${enquiry.name}, our team will call you within 2 hours.`);
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
// PRODUCTION ADDITIONS "” Safe Guards & Utility Helpers
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
 * Lazy image loader "” add IntersectionObserver for images
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
 * Back to top button "” call after router renders each page.
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

// --- Custom Currency Dropdown ---
function toggleCurrencyDropdown(e) {
  e.stopPropagation();
  const opts = document.getElementById("currencyOptions");
  if (opts) opts.classList.toggle("open");
}

function selectCurrency(code, label) {
  vayuStore.setCurrency(code);
  const lbl = document.getElementById("currencyLabel");
  if (lbl) lbl.textContent = label;
  const opts = document.getElementById("currencyOptions");
  if (opts) opts.classList.remove("open");
}

// Close dropdown when clicking outside
document.addEventListener("click", function() {
  const opts = document.getElementById("currencyOptions");
  if (opts) opts.classList.remove("open");
});

// ═══════════════════════════════════════════════════════════════════
// NEW NAVBAR (vn-*) — Dropdown, Drawer, Scroll behaviour
// ═══════════════════════════════════════════════════════════════════

// ── Scroll: hide-on-down / show-on-up + at-top glass ────────────────
(function initVnScroll() {
  const header = document.getElementById("siteHeader");
  if (!header) return;
  let lastY = 0, ticking = false, anyOpen = false;

  function updateHeader() {
    const y = window.scrollY;
    if (y < 20) {
      header.classList.remove("vn-scrolled", "vn-hide");
    } else {
      header.classList.add("vn-scrolled");
      if (!anyOpen) {
        if (y > lastY + 4) header.classList.add("vn-hide");
        else if (y < lastY - 4) header.classList.remove("vn-hide");
      }
    }
    lastY = y;
    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) { requestAnimationFrame(updateHeader); ticking = true; }
  }, { passive: true });

  window._vnSetAnyOpen = (v) => { anyOpen = v; if (!v) header.classList.remove("vn-hide"); };
  updateHeader();
})();

// ── Dropdown logic ──────────────────────────────────────────────────
let _vnCloseTimer = null;

function closeAllDropdowns() {
  document.querySelectorAll(".vn-item").forEach(ni => {
    const btn = ni.querySelector(".vn-btn[aria-expanded]");
    const dd  = ni.querySelector(".vn-dropdown");
    if (btn) btn.setAttribute("aria-expanded", "false");
    if (dd)  dd.classList.remove("vn-open");
  });
  const scrim = document.getElementById("vnDdScrim");
  if (scrim) scrim.classList.remove("vn-show");
  if (window._vnSetAnyOpen) window._vnSetAnyOpen(false);
}

function openVnDrop(ni) {
  closeAllDropdowns();
  const btn = ni.querySelector(".vn-btn[aria-expanded]");
  const dd  = ni.querySelector(".vn-dropdown");
  if (!btn || !dd) return;
  btn.setAttribute("aria-expanded", "true");
  dd.classList.add("vn-open");
  const scrim = document.getElementById("vnDdScrim");
  if (scrim) scrim.classList.add("vn-show");
  if (window._vnSetAnyOpen) window._vnSetAnyOpen(true);
}

// Attach hover + click on each vn-item
function initVnDropdowns() {
  document.querySelectorAll(".vn-item[id^='vni-']").forEach(ni => {
    ni.addEventListener("mouseenter", () => {
      clearTimeout(_vnCloseTimer);
      openVnDrop(ni);
    });
    ni.addEventListener("mouseleave", () => {
      _vnCloseTimer = setTimeout(() => closeAllDropdowns(), 150);
    });
    const btn = ni.querySelector(".vn-btn[aria-expanded]");
    if (btn) {
      btn.addEventListener("click", () => {
        const isOpen = btn.getAttribute("aria-expanded") === "true";
        isOpen ? closeAllDropdowns() : openVnDrop(ni);
      });
    }
  });

  const scrim = document.getElementById("vnDdScrim");
  if (scrim) scrim.addEventListener("click", closeAllDropdowns);
  document.addEventListener("keydown", e => { if (e.key === "Escape") { closeAllDropdowns(); closeVnDrawer(); } });
}
document.addEventListener("DOMContentLoaded", initVnDropdowns);

// ── Mobile Drawer ───────────────────────────────────────────────────
function toggleVnDrawer() {
  const drawer = document.getElementById("vnDrawer");
  if (!drawer) return;
  drawer.classList.contains("vn-open") ? closeVnDrawer() : openVnDrawer();
}

function openVnDrawer() {
  const drawer  = document.getElementById("vnDrawer");
  const scrim   = document.getElementById("vnMobScrim");
  const burger  = document.getElementById("vnHamburger");
  if (drawer)  { drawer.classList.add("vn-open"); drawer.setAttribute("aria-hidden","false"); }
  if (scrim)   scrim.classList.add("vn-show");
  if (burger)  { burger.classList.add("vn-open"); burger.setAttribute("aria-expanded","true"); }
  document.body.style.overflow = "hidden";
  if (window._vnSetAnyOpen) window._vnSetAnyOpen(true);
}

function closeVnDrawer() {
  const drawer  = document.getElementById("vnDrawer");
  const scrim   = document.getElementById("vnMobScrim");
  const burger  = document.getElementById("vnHamburger");
  if (drawer)  { drawer.classList.remove("vn-open"); drawer.setAttribute("aria-hidden","true"); }
  if (scrim)   scrim.classList.remove("vn-show");
  if (burger)  { burger.classList.remove("vn-open"); burger.setAttribute("aria-expanded","false"); }
  document.body.style.overflow = "";
  if (window._vnSetAnyOpen) window._vnSetAnyOpen(false);
}

// ── Drawer Accordion ────────────────────────────────────────────────
function toggleVnAcc(id, btn) {
  const el = document.getElementById(id);
  if (!el) return;
  const isOpen = el.classList.contains("vn-open");
  document.querySelectorAll(".vn-drawer-acc").forEach(a => a.classList.remove("vn-open"));
  document.querySelectorAll(".vn-drawer-acc-btn").forEach(b => b.classList.remove("vn-acc-open"));
  if (!isOpen) {
    el.classList.add("vn-open");
    if (btn) btn.classList.add("vn-acc-open");
  }
}

// ── Currency dropdown (new navbar) ──────────────────────────────────
function toggleVnCurrency(e) {
  e.stopPropagation();
  const dd = document.getElementById("vnCurrencyDd");
  if (dd) dd.classList.toggle("vn-open");
}

// Override selectCurrency to also update new navbar label
const _origSelectCurrency = window.selectCurrency;
window.selectCurrency = function(code, label) {
  if (_origSelectCurrency) _origSelectCurrency(code, label);
  const lbl = document.getElementById("vnCurrLabel");
  if (lbl) lbl.textContent = label;
  const dd = document.getElementById("vnCurrencyDd");
  if (dd) dd.classList.remove("vn-open");
};

document.addEventListener("click", () => {
  const dd = document.getElementById("vnCurrencyDd");
  if (dd) dd.classList.remove("vn-open");
});
