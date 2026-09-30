/* ==========================================================================
   VAYU HOLIDAYS — HOMEPAGE (Editorial Redesign)
   Philosophy: 80% whitespace · Restrained interactions · Editorial hierarchy
   ========================================================================== */

// ── Local card renderers (self-contained, no external dependency) ────────────
function renderPackageCard(pkg) {
  const fmt = (p) => window.vayuStore.formatPrice(p);
  const formattedPrice    = fmt(pkg.price);
  const formattedOriginal = pkg.originalPrice ? fmt(pkg.originalPrice) : null;
  return `
    <div class="card package-card" data-package-id="${pkg.id}">
      <div class="package-card-img-wrap">
        <img src="${pkg.image}" alt="${pkg.title}" class="package-card-img" loading="lazy" width="600" height="375" />
        <div class="package-card-top-badges">
          <span class="badge ${pkg.category === 'domestic' ? 'badge-emerald' : 'badge-gold'}">
            ${pkg.category === 'domestic' ? 'Incredible India' : 'International'}
          </span>
          <span class="badge badge-dark">${pkg.durationDays}D / ${pkg.durationNights}N</span>
        </div>
      </div>
      <div class="package-card-body">
        <div class="package-card-meta">
          <span class="package-card-meta-item">${ICONS.mapPin} ${pkg.destinationName}</span>
          <span class="package-card-meta-item" style="color:#b89758;font-weight:600;">${ICONS.star} ${pkg.rating}</span>
        </div>
        <h3 class="package-card-title"><a href="/package/${pkg.id}">${pkg.title}</a></h3>
        <p class="package-card-desc">${pkg.overview}</p>
        <div class="package-card-footer">
          <div class="package-price-wrap">
            <span class="price-label">Starting from</span>
            <div style="display:flex;align-items:baseline;gap:.4rem;">
              <span class="price-amount">${formattedPrice}</span>
              ${formattedOriginal ? `<span style="text-decoration:line-through;font-size:.82rem;color:var(--c-ink-4);">${formattedOriginal}</span>` : ''}
            </div>
            <span class="price-per">per person · twin sharing</span>
          </div>
          <div style="display:flex;gap:.5rem;">
            <a href="/package/${pkg.id}" class="btn btn-secondary btn-sm">Details</a>
            <button class="btn btn-gold btn-sm" onclick="openEnquiryModal({ packageId: '${pkg.id}', title: '${pkg.title}' })">Get Quote</button>
          </div>
        </div>
      </div>
    </div>`;
}

function renderDestinationCard(dest) {
  const formattedStarting = window.vayuStore.formatPrice(dest.startingPrice);
  return `
    <div class="dest-card" onclick="window.navigate('/packages?dest=${dest.id}')" role="button" tabindex="0" aria-label="View ${dest.name} packages" onkeydown="if(event.key==='Enter')window.navigate('/packages?dest=${dest.id}')">
      <img src="${dest.image}" alt="${dest.name}" class="dest-card-bg" loading="lazy" />
      <div class="dest-card-overlay"></div>
      <div class="dest-card-content">
        <span class="dest-card-tag">${dest.type === 'domestic' ? 'Incredible India' : 'International Escape'}</span>
        <h3 class="dest-card-title">${dest.name}</h3>
        <div class="dest-card-footer">
          <span class="dest-card-count">${dest.packagesCount} Itineraries</span>
          <span style="font-size:.82rem;color:#fff;">From <strong>${formattedStarting}</strong></span>
        </div>
      </div>
    </div>`;
}
async function renderHomeView() {
  const company      = await window.vayuStore.getCompany();
  const pageSettings = await window.vayuStore.getPageSettings();
  const destinations = await window.vayuStore.getDestinations();
  const packages     = await window.vayuStore.getPackages();
  const services     = window.vayuStore.getServices();
  const testimonials = await window.vayuStore.getTestimonials();
  const blogs        = await window.vayuStore.getBlogs();
  const waNumber     = (company.whatsapp || "919826012345").replace(/[^0-9]/g, "");
  const waMsg        = encodeURIComponent(company.whatsappMessage || "Hello Vayu Holidays! I'd like to inquire about a luxury holiday.");

  // Page settings with fallbacks
  const heroHeadline   = pageSettings.heroHeadline   || "Your Journey. Beautifully Planned.";
  const heroSubtitle   = pageSettings.heroSubtitle   || "Handcrafted itineraries, private sanctuaries, and dedicated 24/7 concierge — from Bhopal to the world.";
  const heroImage      = pageSettings.heroImage      || "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=75";
  const trustTrips     = pageSettings.trustTrips     || "500+";
  const trustRating    = pageSettings.trustRating    || "4.9★";
  const trustCountries = pageSettings.trustCountries || "50+";
  const trustYears     = pageSettings.trustYears     || "8 yrs";

  // Featured destinations for interactive section
  const featuredDests = destinations.filter(d => d.featured !== false).slice(0, 6);

  return `

    <!-- ══════════════════════════════════════════════════════════════
         HERO — FULLSCREEN EDITORIAL
    ══════════════════════════════════════════════════════════════ -->
    <section class="hero-section" aria-label="Hero">
      <img
        src="${heroImage}"
        alt="Luxury travel — Vayu Holidays"
        class="hero-bg-media"
        fetchpriority="high"
        width="1920" height="1080"
      />
      <div class="hero-overlay" aria-hidden="true"></div>

      <div class="hero-content">
        <div class="hero-inner">

          <div class="hero-eyebrow-wrap">
            <span class="hero-eyebrow">
              Bespoke Travel Agency &nbsp;&middot;&nbsp; Bhopal, India
            </span>
          </div>

          <h1 class="hero-title">
            ${heroHeadline.includes('<br') ? heroHeadline : heroHeadline.replace('. ', '.<br/><em>').replace(/(<br\/>)?$/, heroHeadline.includes('<em>') ? '' : '</em>')}
          </h1>

          <p class="hero-subtitle">
            ${heroSubtitle}
          </p>

          <div class="hero-actions">
            <a href="/packages" class="btn btn-white btn-lg">
              Explore Packages
            </a>
            <button class="btn btn-outline-white btn-lg" onclick="openEnquiryModal({ title: 'Plan My Journey' })">
              Plan My Trip
            </button>
          </div>

          <!-- Journey finder — minimal -->
          <div class="hero-search-bar" role="search" aria-label="Journey finder">
            <div class="search-field">
              <span class="search-field-label">${ICONS.mapPin} Destination</span>
              <select class="search-field-select" id="heroSearchDest" aria-label="Select destination">
                <option value="">All Destinations</option>
                <option value="kashmir">Kashmir</option>
                <option value="kerala">Kerala</option>
                <option value="rajasthan">Rajasthan</option>
                <option value="dubai">Dubai & UAE</option>
                <option value="bali">Bali</option>
                <option value="switzerland">Switzerland</option>
                <option value="maldives">Maldives</option>
              </select>
            </div>
            <div class="search-field">
              <span class="search-field-label">${ICONS.calendar} Travel Month</span>
              <select class="search-field-select" id="heroSearchMonth" aria-label="Select month">
                <option value="">Any Month</option>
                <option value="oct">October 2026</option>
                <option value="nov">November 2026</option>
                <option value="dec">December 2026</option>
                <option value="jan">January 2027</option>
                <option value="feb">February 2027</option>
              </select>
            </div>
            <div class="search-field">
              <span class="search-field-label">${ICONS.sparkles} Experience</span>
              <select class="search-field-select" id="heroSearchTheme" aria-label="Select experience">
                <option value="">All Themes</option>
                <option value="honeymoon">Honeymoon</option>
                <option value="luxury">Ultra-Luxury</option>
                <option value="family">Family</option>
                <option value="group">Group Tours</option>
                <option value="mice">Corporate MICE</option>
              </select>
            </div>
            <div class="search-field">
              <span class="search-field-label">${ICONS.clock} Duration</span>
              <select class="search-field-select" id="heroSearchDuration" aria-label="Select duration">
                <option value="">Any Duration</option>
                <option value="4-6">4–6 Days</option>
                <option value="7-9">7–9 Days</option>
                <option value="10+">10+ Days</option>
              </select>
            </div>
            <button class="search-submit-btn" onclick="executeHeroSearch()">
              ${ICONS.plane} Find
            </button>
          </div>

        </div>
      </div>
    </section>


    <!-- ══════════════════════════════════════════════════════════════
         DESTINATIONS — INTERACTIVE EDITORIAL
    ══════════════════════════════════════════════════════════════ -->
    <section class="section" id="destinationsSection" aria-label="Featured destinations" style="padding-top: var(--space-12); padding-bottom: var(--space-12);">
      <div class="container">

        <!-- Header -->
        <div class="section-header" style="max-width:none;display:flex;justify-content:space-between;align-items:flex-end;gap:2rem;flex-wrap:wrap;">
          <div>
            <span class="eyebrow">Where Would You Like to Go</span>
            <h2 class="section-title" style="max-width:420px;">Curated Destinations</h2>
          </div>
          <div class="tab-group" id="destTabGroup">
            <button class="tab-btn active" onclick="filterDestinations('all', this)">All</button>
            <button class="tab-btn" onclick="filterDestinations('domestic', this)">India</button>
            <button class="tab-btn" onclick="filterDestinations('international', this)">International</button>
          </div>
        </div>

        <!-- Interactive destination showcase -->
        <div class="dest-showcase" id="destShowcase">
          <div class="dest-showcase-main" id="destMainImage">
            <img
              src="${featuredDests[0]?.image || 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1400&q=80'}"
              alt="${featuredDests[0]?.name || 'Destination'}"
              id="destMainImg"
              loading="lazy"
            />
            <div class="dest-showcase-overlay">
              <div class="dest-showcase-tag" id="destMainTag">${featuredDests[0]?.type === 'domestic' ? 'Incredible India' : 'International'}</div>
              <div class="dest-showcase-info">
                <h3 class="dest-showcase-name" id="destMainName">${featuredDests[0]?.name || ''}</h3>
                <p class="dest-showcase-tagline" id="destMainTagline">${featuredDests[0]?.tagline || ''}</p>
                <div class="dest-showcase-meta">
                  <span id="destMainCount">${featuredDests[0]?.packagesCount || 0} itineraries</span>
                  <span class="dest-showcase-sep">·</span>
                  <span id="destMainPrice">From ${window.vayuStore.formatPrice(featuredDests[0]?.startingPrice || 0)}</span>
                </div>
                <a href="/packages?dest=${featuredDests[0]?.id || ''}" class="dest-showcase-cta" id="destMainCta">
                  Explore <span>${ICONS.arrowRight}</span>
                </a>
              </div>
            </div>
          </div>

          <div class="dest-showcase-list" id="destinationsGrid">
            ${featuredDests.map((d, i) => `
              <div class="dest-list-item ${i === 0 ? 'active' : ''}"
                   onclick="selectDestination(${i})"
                   data-dest-id="${d.id}"
                   data-image="${d.image}"
                   data-name="${d.name}"
                   data-tagline="${d.tagline}"
                   data-type="${d.type}"
                   data-count="${d.packagesCount}"
                   data-price="${d.startingPrice}">
                <div class="dest-list-thumb">
                  <img src="${d.image.replace('w=1200', 'w=300').replace('q=80', 'q=60')}" alt="${d.name}" loading="lazy" />
                </div>
                <div class="dest-list-info">
                  <span class="dest-list-type">${d.type === 'domestic' ? 'India' : 'International'}</span>
                  <span class="dest-list-name">${d.name}</span>
                  <span class="dest-list-price">${window.vayuStore.formatPrice(d.startingPrice)}</span>
                </div>
                <div class="dest-list-arrow">${ICONS.arrowRight}</div>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    </section>


    <!-- ══════════════════════════════════════════════════════════════
         PACKAGES — SIMPLIFIED CARDS
    ══════════════════════════════════════════════════════════════ -->
    <section class="section section-sand" id="packagesSection" aria-label="Holiday packages">
      <div class="container">

        <div class="section-header text-center">
          <span class="eyebrow">Signature Journeys</span>
          <h2 class="section-title">Curated Holiday Packages</h2>
          <p class="section-desc">Day-wise itineraries, verified stays, private chauffeurs — every detail handled.</p>
        </div>

        <div class="packages-grid" id="packagesCatalogGrid">
          ${packages.slice(0, 6).map(p => renderPackageCard(p)).join('')}
        </div>

        <div style="text-align:center;margin-top:var(--space-8);">
          <a href="/packages" class="btn btn-primary btn-lg">
            View All Packages ${ICONS.arrowRight}
          </a>
        </div>

      </div>
    </section>


    <!-- ══════════════════════════════════════════════════════════════
         BESPOKE — EDITORIAL DARK SECTION
    ══════════════════════════════════════════════════════════════ -->
    <section class="section section-dark" aria-label="Bespoke travel">
      <div class="container">
        <div class="bespoke-split">

          <div class="bespoke-text">
            <span class="eyebrow" style="color:rgba(250,250,248,0.4);">Entirely Yours</span>
            <h2 class="section-title">Travel On Your<br/>Own Terms.</h2>
            <p style="font-size:1.05rem;line-height:1.85;margin-bottom:var(--space-6);color:var(--c-dark-muted);">
              Not all travelers fit rigid tour boxes. We design private journeys around your pace, dietary preferences, flight schedules, and personal wishlist — down to the finest detail.
            </p>

            <div class="bespoke-list" style="margin-bottom:var(--space-7);">
              <div class="bespoke-item">
                <span style="color:var(--c-accent);margin-top:3px;flex-shrink:0;">${ICONS.check}</span>
                <div>
                  <strong style="color:var(--c-bg);font-family:var(--font-body);font-size:0.95rem;">Zero cookie-cutter itineraries</strong>
                  <span style="color:var(--c-dark-muted);font-size:0.9rem;"> — every route drafted from scratch.</span>
                </div>
              </div>
              <div class="bespoke-item">
                <span style="color:var(--c-accent);margin-top:3px;flex-shrink:0;">${ICONS.check}</span>
                <div>
                  <strong style="color:var(--c-bg);font-family:var(--font-body);font-size:0.95rem;">Private chauffeur-driven vehicles</strong>
                  <span style="color:var(--c-dark-muted);font-size:0.9rem;"> — exclusively for your party.</span>
                </div>
              </div>
              <div class="bespoke-item">
                <span style="color:var(--c-accent);margin-top:3px;flex-shrink:0;">${ICONS.check}</span>
                <div>
                  <strong style="color:var(--c-bg);font-family:var(--font-body);font-size:0.95rem;">24/7 dedicated concierge</strong>
                  <span style="color:var(--c-dark-muted);font-size:0.9rem;"> — one message away, always.</span>
                </div>
              </div>
            </div>

            <div style="display:flex;gap:1rem;flex-wrap:wrap;">
              <button class="btn btn-white" onclick="openEnquiryModal({ title: 'Design My Custom Journey' })">
                Craft My Journey
              </button>
              <a href="https://wa.me/${waNumber}?text=${waMsg}" target="_blank" rel="noopener" class="btn btn-outline-white">
                ${ICONS.whatsapp} WhatsApp Us
              </a>
            </div>
          </div>

          <div class="bespoke-visual">
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=75"
              alt="Private luxury travel experience"
              loading="lazy"
              style="border-radius:var(--radius-lg);width:100%;aspect-ratio:3/4;object-fit:cover;"
            />
            <div class="bespoke-stat-card">
              <div style="font-family:var(--font-display);font-size:2.5rem;font-weight:300;color:var(--c-ink);line-height:1;">100%</div>
              <div style="font-size:0.82rem;font-family:var(--font-body);color:var(--c-ink-3);margin-top:0.25rem;">Fully Customizable</div>
            </div>
          </div>

        </div>
      </div>
    </section>


    <!-- ══════════════════════════════════════════════════════════════
         SMART TRIP PLANNER
    ══════════════════════════════════════════════════════════════ -->
    <section class="section" id="plannerSection" aria-label="Trip planner">
      <div class="container" style="max-width:860px;">

        <div class="section-header text-center">
          <span class="eyebrow">Personalised For You</span>
          <h2 class="section-title">Design Your Journey</h2>
          <p class="section-desc" style="margin:0 auto;">Four steps. Your dream holiday, precisely planned.</p>
        </div>

        <div class="planner-wrapper">
          <div class="planner-steps-nav" role="tablist">
            <button class="planner-step-tab active" id="plannerTab1" onclick="switchPlannerStep(1)" role="tab" aria-selected="true">
              <span class="step-num">01</span>
              <span class="step-label">Experience</span>
            </button>
            <button class="planner-step-tab" id="plannerTab2" onclick="switchPlannerStep(2)" role="tab" aria-selected="false">
              <span class="step-num">02</span>
              <span class="step-label">Destination</span>
            </button>
            <button class="planner-step-tab" id="plannerTab3" onclick="switchPlannerStep(3)" role="tab" aria-selected="false">
              <span class="step-num">03</span>
              <span class="step-label">Preferences</span>
            </button>
            <button class="planner-step-tab" id="plannerTab4" onclick="switchPlannerStep(4)" role="tab" aria-selected="false">
              <span class="step-num">04</span>
              <span class="step-label">Get Quote</span>
            </button>
          </div>

          <div class="planner-body">

            <!-- Step 1 -->
            <div class="planner-step-panel active" id="plannerStep1" role="tabpanel">
              <p style="font-size:0.9rem;color:var(--c-ink-3);margin-bottom:1.25rem;font-family:var(--font-body);">What kind of journey are you envisioning?</p>
              <div class="options-grid" id="plannerThemeGrid">
                <div class="option-card selected" onclick="selectPlannerOption('theme','Honeymoon & Romance',this)">
                  <div class="option-icon">💍</div>
                  <div class="option-title">Honeymoon</div>
                  <div class="option-desc">Private villas, romance</div>
                </div>
                <div class="option-card" onclick="selectPlannerOption('theme','Ultra-Luxury',this)">
                  <div class="option-icon">👑</div>
                  <div class="option-title">Ultra-Luxury</div>
                  <div class="option-desc">5-star, butler service</div>
                </div>
                <div class="option-card" onclick="selectPlannerOption('theme','Family Retreat',this)">
                  <div class="option-icon">👨‍👩‍👧</div>
                  <div class="option-title">Family</div>
                  <div class="option-desc">All-ages friendly</div>
                </div>
                <div class="option-card" onclick="selectPlannerOption('theme','Group Tour',this)">
                  <div class="option-icon">🌍</div>
                  <div class="option-title">Group Tour</div>
                  <div class="option-desc">Fixed departures</div>
                </div>
                <div class="option-card" onclick="selectPlannerOption('theme','Adventure',this)">
                  <div class="option-icon">⛰️</div>
                  <div class="option-title">Adventure</div>
                  <div class="option-desc">Mountains, nature</div>
                </div>
                <div class="option-card" onclick="selectPlannerOption('theme','Corporate MICE',this)">
                  <div class="option-icon">🏢</div>
                  <div class="option-title">Corporate</div>
                  <div class="option-desc">MICE & retreats</div>
                </div>
              </div>
              <div class="planner-controls">
                <div></div>
                <button class="btn btn-primary" onclick="switchPlannerStep(2)">Next ${ICONS.arrowRight}</button>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="planner-step-panel" id="plannerStep2" role="tabpanel">
              <p style="font-size:0.9rem;color:var(--c-ink-3);margin-bottom:1.25rem;font-family:var(--font-body);">Where and when would you like to travel?</p>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1.5rem;">
                <div class="form-group">
                  <label class="form-label" for="plannerDestination">Destination</label>
                  <select class="form-control" id="plannerDestination">
                    <option>Kashmir (Srinagar, Gulmarg)</option>
                    <option>Kerala Backwaters & Munnar</option>
                    <option>Royal Rajasthan</option>
                    <option>Dubai & Abu Dhabi</option>
                    <option>Bali & Nusa Penida</option>
                    <option>Switzerland Alps</option>
                    <option>Maldives Overwater</option>
                    <option>Vietnam & Indochina</option>
                    <option>Custom Destination</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label" for="plannerMonth">Travel Month</label>
                  <select class="form-control" id="plannerMonth">
                    <option>October 2026</option>
                    <option>November 2026</option>
                    <option>December 2026</option>
                    <option>January 2027</option>
                    <option>February 2027</option>
                    <option>Summer 2027</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label" for="plannerDuration">Duration</label>
                  <select class="form-control" id="plannerDuration">
                    <option>5 Days / 4 Nights</option>
                    <option>6 Days / 5 Nights (Recommended)</option>
                    <option>7 Days / 6 Nights</option>
                    <option>10+ Days Grand Tour</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label" for="plannerTravelers">Travelers</label>
                  <input type="text" class="form-control" id="plannerTravelers" value="2 Adults" placeholder="e.g. 2 Adults, 1 Child" />
                </div>
              </div>
              <div class="planner-controls">
                <button class="btn btn-secondary" onclick="switchPlannerStep(1)">← Back</button>
                <button class="btn btn-primary" onclick="switchPlannerStep(3)">Next ${ICONS.arrowRight}</button>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="planner-step-panel" id="plannerStep3" role="tabpanel">
              <p style="font-size:0.9rem;color:var(--c-ink-3);margin-bottom:1.25rem;font-family:var(--font-body);">Your comfort and service preferences.</p>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1.5rem;">
                <div class="form-group">
                  <label class="form-label" for="plannerStayType">Stay Category</label>
                  <select class="form-control" id="plannerStayType">
                    <option>Handpicked 4-Star Boutique</option>
                    <option>5-Star Luxury & Heritage Palaces</option>
                    <option>Private Island / Overwater Villas</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label" for="plannerCity">Departure City</label>
                  <input type="text" class="form-control" id="plannerCity" value="Bhopal" placeholder="e.g. Bhopal, Indore, Delhi" />
                </div>
              </div>
              <div style="margin-bottom:1.25rem;">
                <label class="form-label" style="margin-bottom:0.65rem;display:block;">Additional Services</label>
                <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">
                  <label class="planner-checkbox-label"><input type="checkbox" id="chkFlights" checked /> ✈ Flights</label>
                  <label class="planner-checkbox-label"><input type="checkbox" id="chkVisa" checked /> 🛂 Visa</label>
                  <label class="planner-checkbox-label"><input type="checkbox" id="chkForex" /> 💱 Forex</label>
                  <label class="planner-checkbox-label"><input type="checkbox" id="chkInsurance" checked /> 🛡 Insurance</label>
                </div>
              </div>
              <div class="planner-controls">
                <button class="btn btn-secondary" onclick="switchPlannerStep(2)">← Back</button>
                <button class="btn btn-primary" onclick="switchPlannerStep(4)">Next ${ICONS.arrowRight}</button>
              </div>
            </div>

            <!-- Step 4 -->
            <div class="planner-step-panel" id="plannerStep4" role="tabpanel">
              <p style="font-size:0.9rem;color:var(--c-ink-3);margin-bottom:1.25rem;font-family:var(--font-body);">Where should we send your personalized itinerary?</p>
              <form id="plannerFinalForm" onsubmit="submitPlannerWizard(event)" novalidate>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
                  <div class="form-group">
                    <label class="form-label" for="pName">Full Name *</label>
                    <input type="text" class="form-control" id="pName" placeholder="Your name" required autocomplete="name" />
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="pPhone">WhatsApp / Phone *</label>
                    <input type="tel" class="form-control" id="pPhone" placeholder="+91 98260 00000" required autocomplete="tel" />
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="pEmail">Email Address *</label>
                    <input type="email" class="form-control" id="pEmail" placeholder="name@domain.com" required autocomplete="email" />
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="pBudget">Budget</label>
                    <select class="form-control" id="pBudget">
                      <option>Comfort (₹35k–₹55k / person)</option>
                      <option selected>Luxury (₹55k–₹95k / person)</option>
                      <option>Ultra-Luxury (₹95k+ / person)</option>
                    </select>
                  </div>
                </div>
                <div class="form-group" style="margin-top:0.5rem;">
                  <label class="form-label" for="pNotes">Special Requests</label>
                  <textarea class="form-control" id="pNotes" placeholder="Dietary needs, anniversary, specific hotel, accessibility…"></textarea>
                </div>
                <div class="planner-controls" style="margin-top:1.25rem;">
                  <button type="button" class="btn btn-secondary" onclick="switchPlannerStep(3)">← Back</button>
                  <button type="submit" class="btn btn-primary btn-lg">
                    ${ICONS.sparkles} Get My Quotation
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>


    <!-- ══════════════════════════════════════════════════════════════
         SERVICES — CLEAN GRID
    ══════════════════════════════════════════════════════════════ -->
    <section class="section section-sand" id="servicesSection" aria-label="Travel services">
      <div class="container">

        <div class="section-header text-center">
          <span class="eyebrow">End-to-End Travel</span>
          <h2 class="section-title">Every Service, One Desk</h2>
          <p class="section-desc">From Schengen visa to multi-currency forex — our specialists handle it all from Bhopal.</p>
        </div>

        <div class="services-grid">
          ${services.map(s => `
            <div class="service-card">
              <div class="service-icon-wrap" aria-hidden="true">
                ${ICONS[s.icon] || ICONS.sparkles}
              </div>
              <h3 class="service-card-title">${s.title}</h3>
              <p class="service-card-desc">${s.shortDesc}</p>
              <a href="/services/${s.slug}" class="service-card-link">
                Learn more ${ICONS.arrowRight}
              </a>
            </div>
          `).join('')}
        </div>

      </div>
    </section>


    <!-- ══════════════════════════════════════════════════════════════
         HOW IT WORKS
    ══════════════════════════════════════════════════════════════ -->
    <section class="section" aria-label="How it works">
      <div class="container">

        <div class="section-header text-center">
          <span class="eyebrow">Effortless Planning</span>
          <h2 class="section-title">Three Steps</h2>
        </div>

        <div class="how-steps-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;">
          <div class="how-step-card" data-reveal>
            <div class="how-step-badge" aria-hidden="true">1</div>
            <h3 class="how-step-title">Share Your Vision</h3>
            <p style="font-size:0.9rem;color:var(--c-ink-3);line-height:1.75;font-family:var(--font-body);">Tell us your destination, dates, and preferences via our planner, form, or WhatsApp.</p>
          </div>
          <div class="how-step-card" data-reveal>
            <div class="how-step-badge" aria-hidden="true">2</div>
            <h3 class="how-step-title">Receive Your Proposal</h3>
            <p style="font-size:0.9rem;color:var(--c-ink-3);line-height:1.75;font-family:var(--font-body);">Within 2–4 hours, a senior specialist crafts an itemized day-wise itinerary with transparent pricing.</p>
          </div>
          <div class="how-step-card" data-reveal>
            <div class="how-step-badge" aria-hidden="true">3</div>
            <h3 class="how-step-title">Travel in Peace</h3>
            <p style="font-size:0.9rem;color:var(--c-ink-3);line-height:1.75;font-family:var(--font-body);">Confirmed vouchers, e-tickets, visa clearance. 24/7 concierge support throughout your journey.</p>
          </div>
        </div>

      </div>
    </section>


    <!-- ══════════════════════════════════════════════════════════════
         TRUST — MINIMAL METRICS
    ══════════════════════════════════════════════════════════════ -->
    <section class="section section-sand" aria-label="Trust metrics">
      <div class="container" style="max-width:900px;text-align:center;">

        <p style="font-family:var(--font-display);font-size:clamp(1.5rem,2.5vw,2rem);font-weight:300;color:var(--c-ink);line-height:1.5;margin-bottom:var(--space-9);" data-reveal>
          "Trusted by families, couples, and executives<br/>who value extraordinary journeys."
        </p>

        <div class="trust-minimal-grid" data-reveal>
          <div class="trust-minimal-item">
            <span class="trust-minimal-num">${trustTrips}</span>
            <span class="trust-minimal-label">Trips Curated</span>
          </div>
          <div class="trust-minimal-sep" aria-hidden="true"></div>
          <div class="trust-minimal-item">
            <span class="trust-minimal-num">${trustRating}</span>
            <span class="trust-minimal-label">Average Rating</span>
          </div>
          <div class="trust-minimal-sep" aria-hidden="true"></div>
          <div class="trust-minimal-item">
            <span class="trust-minimal-num">${trustCountries}</span>
            <span class="trust-minimal-label">Countries Covered</span>
          </div>
          <div class="trust-minimal-sep" aria-hidden="true"></div>
          <div class="trust-minimal-item">
            <span class="trust-minimal-num">${trustYears}</span>
            <span class="trust-minimal-label">Of Excellence</span>
          </div>
          <div class="trust-minimal-sep" aria-hidden="true"></div>
          <div class="trust-minimal-item">
            <span class="trust-minimal-num">24 / 7</span>
            <span class="trust-minimal-label">Concierge</span>
          </div>
        </div>

      </div>
    </section>


    <!-- ══════════════════════════════════════════════════════════════
         TESTIMONIALS
    ══════════════════════════════════════════════════════════════ -->
    <section class="section" aria-label="Guest testimonials">
      <div class="container">

        <div class="section-header text-center">
          <span class="eyebrow">Guest Stories</span>
          <h2 class="section-title">Discerning Travellers</h2>
          <div class="aggregate-rating" aria-label="4.9 out of 5 stars">
            <span class="agg-stars">★★★★★</span>
            <span class="agg-score">4.9</span>
            <span class="agg-count">Based on 120+ verified reviews</span>
          </div>
        </div>

        <div class="testimonials-grid">
          ${testimonials.map(t => `
            <div class="testimonial-card" itemscope itemtype="https://schema.org/Review">
              <div class="testimonial-stars">${'★'.repeat(t.rating)}</div>
              <p class="testimonial-quote" itemprop="reviewBody">"${t.quote}"</p>
              <div class="testimonial-author">
                <img src="${t.avatar}" alt="${t.name}" class="author-avatar" loading="lazy" width="44" height="44" />
                <div>
                  <div class="author-name" itemprop="author">${t.name}</div>
                  <div class="author-trip">${t.trip} · ${t.location}</div>
                  <span class="verified-badge">✓ Verified Guest</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>


    <!-- ══════════════════════════════════════════════════════════════
         BLOG — CLEAN EDITORIAL
    ══════════════════════════════════════════════════════════════ -->
    <section class="section section-sand" aria-label="Travel journal">
      <div class="container">

        <div class="section-header" style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:1.5rem;max-width:none;">
          <div>
            <span class="eyebrow">The Vayu Journal</span>
            <h2 class="section-title">Stories From The Road</h2>
          </div>
          <a href="/blog" class="btn btn-secondary">All Stories ${ICONS.arrowRight}</a>
        </div>

        <div class="blog-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;">
          ${blogs.slice(0, 3).map(b => `
            <article class="blog-card card"
                     onclick="window.navigate('/blog/${b.slug}')"
                     role="button" tabindex="0"
                     aria-label="Read: ${b.title}"
                     onkeydown="if(event.key==='Enter')window.navigate('/blog/${b.slug}')">
              <img src="${b.image}" alt="${b.title}" class="blog-card-img" loading="lazy" width="640" height="400" />
              <div class="blog-card-body">
                <div class="blog-card-date">${b.category} · ${b.readTime}</div>
                <h3 class="blog-card-title">${b.title}</h3>
                <p style="font-size:0.85rem;color:var(--c-ink-3);margin-top:0.5rem;line-height:1.65;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;font-family:var(--font-body);">${b.excerpt}</p>
              </div>
            </article>
          `).join('')}
        </div>

      </div>
    </section>


    <!-- ══════════════════════════════════════════════════════════════
         FINAL CTA — DARK, CLEAN
    ══════════════════════════════════════════════════════════════ -->
    <section class="section" style="padding-top:0;" aria-label="Call to action">
      <div class="container">
        <div class="vip-cta-banner">

          <span class="eyebrow" style="color:rgba(250,250,248,0.35);text-align:center;display:block;margin:0 auto var(--space-4);">Your 2026 Departure</span>
          <h2 class="vip-cta-title">Ready for an<br/>Extraordinary Journey?</h2>
          <p class="vip-cta-desc">
            Speak with our senior travel directors in Bhopal. We turn aspirations into meticulously planned, unforgettable experiences.
          </p>

          <div style="display:flex;justify-content:center;gap:1rem;flex-wrap:wrap;">
            <button class="btn btn-white btn-lg" onclick="openEnquiryModal({ title: 'Plan My 2026 Journey' })">
              Plan My Journey
            </button>
            <a href="tel:${company.phone}" class="btn btn-outline-white btn-lg">
              ${ICONS.phone} ${company.phone}
            </a>
            <a href="https://wa.me/${waNumber}?text=${waMsg}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-lg">
              ${ICONS.whatsapp} WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>

  `;
}


// ── Destination showcase interaction ────────────────────────────────────────
const _destData = [];

function selectDestination(index) {
  const items = document.querySelectorAll('.dest-list-item');
  if (!items[index]) return;

  // Update active state
  items.forEach(i => i.classList.remove('active'));
  items[index].classList.add('active');

  // Get data from data attributes
  const item = items[index];
  const image    = item.dataset.image;
  const name     = item.dataset.name;
  const tagline  = item.dataset.tagline;
  const type     = item.dataset.type;
  const count    = item.dataset.count;
  const price    = item.dataset.price;
  const destId   = item.dataset.destId;

  // Update main panel with smooth transition
  const mainImg   = document.getElementById('destMainImg');
  const mainName  = document.getElementById('destMainName');
  const mainTagline = document.getElementById('destMainTagline');
  const mainTag   = document.getElementById('destMainTag');
  const mainCount = document.getElementById('destMainCount');
  const mainPrice = document.getElementById('destMainPrice');
  const mainCta   = document.getElementById('destMainCta');

  if (mainImg) {
    mainImg.style.opacity = '0';
    mainImg.style.transform = 'scale(1.03)';
    setTimeout(() => {
      mainImg.src = image;
      mainImg.alt = name;
      mainImg.style.opacity = '1';
      mainImg.style.transform = 'scale(1)';
    }, 200);
  }

  const fade = (el, newText) => {
    if (!el) return;
    el.style.opacity = '0';
    setTimeout(() => { el.textContent = newText; el.style.opacity = '1'; }, 180);
  };

  fade(mainName, name);
  fade(mainTagline, tagline);
  fade(mainTag, type === 'domestic' ? 'Incredible India' : 'International');
  fade(mainCount, count + ' itineraries');
  fade(mainPrice, 'From ' + window.vayuStore.formatPrice(parseInt(price)));
  if (mainCta) {
    mainCta.href = '/packages?dest=' + destId;
  }
}

// ── Planner helpers ──────────────────────────────────────────────────────────
let plannerState = {
  theme: 'Honeymoon & Romance',
  destination: 'Kashmir',
  month: 'October 2026',
  duration: '6 Days / 5 Nights',
  travelers: '2 Adults',
  stayType: '5-Star Luxury',
  city: 'Bhopal'
};

function switchPlannerStep(stepNum) {
  for (let i = 1; i <= 4; i++) {
    const tab   = document.getElementById(`plannerTab${i}`);
    const panel = document.getElementById(`plannerStep${i}`);
    if (!tab || !panel) continue;
    const active = i === stepNum;
    tab.classList.toggle('active', active);
    panel.classList.toggle('active', active);
    tab.setAttribute('aria-selected', active ? 'true' : 'false');
  }
  const wrapper = document.querySelector('.planner-wrapper');
  if (wrapper && window.innerWidth < 768) {
    wrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function selectPlannerOption(field, value, el) {
  plannerState[field] = value;
  el.parentElement?.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
}

async function submitPlannerWizard(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }

  const enquiry = {
    name:            document.getElementById('pName')?.value,
    phone:           document.getElementById('pPhone')?.value,
    email:           document.getElementById('pEmail')?.value,
    departureCity:   document.getElementById('plannerCity')?.value || 'Bhopal',
    destination:     document.getElementById('plannerDestination')?.value || plannerState.destination,
    travelMonth:     document.getElementById('plannerMonth')?.value || plannerState.month,
    duration:        document.getElementById('plannerDuration')?.value,
    travelers:       document.getElementById('plannerTravelers')?.value,
    budgetPerPerson: document.getElementById('pBudget')?.value,
    notes:           `Theme: ${plannerState.theme} | Stay: ${document.getElementById('plannerStayType')?.value} | ${document.getElementById('pNotes')?.value || ''}`
  };

  await window.vayuStore.addEnquiry(enquiry);

  showToast('Quotation Sent!', `Thank you, ${enquiry.name}. Our concierge will respond within 2 hours.`);
  switchPlannerStep(1);
  e.target.reset();
  if (btn) { btn.disabled = false; btn.innerHTML = '✦ Get My Quotation'; }

  setTimeout(() => {
    const waText = encodeURIComponent(`Hello Vayu Holidays! I just submitted a trip plan for "${enquiry.destination}" (${enquiry.travelMonth}). Traveler: ${enquiry.name} (${enquiry.phone}). Please share my quotation.`);
    if (confirm('Open WhatsApp to connect with your Vayu Holidays concierge?')) {
      window.open(`https://wa.me/${waNumber}?text=${waText}`, '_blank');
    }
  }, 800);
}

async function filterDestinations(type, btn) {
  document.getElementById('destTabGroup')?.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn?.classList.add('active');

  const destinations = await window.vayuStore.getDestinations();
  const filtered     = type === 'all' ? destinations : destinations.filter(d => d.type === type);
  const grid         = document.getElementById('destinationsGrid');
  if (!grid) return;

  grid.innerHTML = filtered.slice(0, 6).map((d, i) => `
    <div class="dest-list-item ${i === 0 ? 'active' : ''}"
         onclick="selectDestination(${i})"
         data-dest-id="${d.id}"
         data-image="${d.image}"
         data-name="${d.name}"
         data-tagline="${d.tagline}"
         data-type="${d.type}"
         data-count="${d.packagesCount}"
         data-price="${d.startingPrice}">
      <div class="dest-list-thumb">
        <img src="${d.image.replace('w=1200', 'w=300').replace('q=80', 'q=60')}" alt="${d.name}" loading="lazy" />
      </div>
      <div class="dest-list-info">
        <span class="dest-list-type">${d.type === 'domestic' ? 'India' : 'International'}</span>
        <span class="dest-list-name">${d.name}</span>
        <span class="dest-list-price">${window.vayuStore.formatPrice(d.startingPrice)}</span>
      </div>
      <div class="dest-list-arrow">${ICONS.arrowRight}</div>
    </div>
  `).join('');

  if (filtered.length > 0) {
    const first = filtered[0];
    const mainImg = document.getElementById('destMainImg');
    if (mainImg) { mainImg.src = first.image; mainImg.alt = first.name; }
    const el = n => document.getElementById(n);
    if (el('destMainName'))    el('destMainName').textContent    = first.name;
    if (el('destMainTagline')) el('destMainTagline').textContent = first.tagline;
    if (el('destMainTag'))     el('destMainTag').textContent     = first.type === 'domestic' ? 'Incredible India' : 'International';
    if (el('destMainCount'))   el('destMainCount').textContent   = first.packagesCount + ' itineraries';
    if (el('destMainPrice'))   el('destMainPrice').textContent   = 'From ' + window.vayuStore.formatPrice(first.startingPrice);
    if (el('destMainCta'))     el('destMainCta').href            = '/packages?dest=' + first.id;
  }
}

function executeHeroSearch() {
  const dest  = document.getElementById('heroSearchDest')?.value  || '';
  const theme = document.getElementById('heroSearchTheme')?.value || '';
  window.navigate('/packages?dest=' + dest + '&theme=' + theme);
}
