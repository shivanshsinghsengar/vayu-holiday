/* ==========================================================================
   VAYU HOLIDAYS — HOMEPAGE VIEW (Luxury Redesign 2026)
   ========================================================================== */

async function renderHomeView() {
  const company      = await window.vayuStore.getCompany();
  const destinations = await window.vayuStore.getDestinations();
  const packages     = await window.vayuStore.getPackages();
  const services     = window.vayuStore.getServices();
  const testimonials = await window.vayuStore.getTestimonials();
  const blogs        = await window.vayuStore.getBlogs();
  const waNumber     = (company.whatsapp || "919826012345").replace(/[^0-9]/g, "");
  const waMsg        = encodeURIComponent(company.whatsappMessage || "Hello Vayu Holidays! I'd like to inquire about a luxury holiday.");

  return `

    <!-- ═══════════════════════════════════════════════════════════════════
         SECTION 1 — CINEMATIC HERO
    ═══════════════════════════════════════════════════════════════════ -->
    <section class="hero-section" aria-label="Hero">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80"
        alt="Luxury travel destination — Vayu Holidays"
        class="hero-bg-media"
        fetchpriority="high"
        width="1920" height="1080"
      />
      <div class="hero-overlay" aria-hidden="true"></div>

      <div class="container hero-content">

        <div class="hero-eyebrow-wrap" data-reveal>
          <span class="hero-eyebrow">
            ${ICONS.sparkles} Bespoke Travel Agency & Tour Operator &nbsp;·&nbsp; Bhopal, India
          </span>
        </div>

        <h1 class="hero-title" data-reveal>
          Your Journey.<br/><em>Beautifully Planned.</em>
        </h1>

        <p class="hero-subtitle" data-reveal>
          Original, minimal luxury travel from Bhopal to the world. Handcrafted itineraries, private sanctuaries, and a dedicated 24/7 concierge — every step of the way.
        </p>

        <div class="hero-actions" data-reveal>
          <a href="#/packages" class="btn btn-gold btn-lg">
            Explore 2026 Holidays ${ICONS.arrowRight}
          </a>
          <button class="btn btn-outline-white btn-lg" onclick="openEnquiryModal({ title: 'Plan My Bespoke Journey' })">
            ${ICONS.sparkles} Plan My Trip
          </button>
        </div>

        <!-- Journey Finder Bar -->
        <div class="hero-search-bar" role="search" aria-label="Journey finder" data-reveal>
          <div class="search-field">
            <span class="search-field-label">${ICONS.mapPin} Where To?</span>
            <select class="search-field-select" id="heroSearchDest" aria-label="Select destination">
              <option value="">All Destinations</option>
              <option value="kashmir">Kashmir & Gulmarg</option>
              <option value="kerala">Kerala Backwaters</option>
              <option value="rajasthan">Royal Rajasthan</option>
              <option value="dubai">Dubai & Abu Dhabi</option>
              <option value="bali">Bali & Nusa Penida</option>
              <option value="switzerland">Swiss Alps & Rail</option>
              <option value="maldives">The Maldives</option>
            </select>
          </div>
          <div class="search-field">
            <span class="search-field-label">${ICONS.calendar} Travel Month</span>
            <select class="search-field-select" id="heroSearchMonth" aria-label="Select travel month">
              <option value="">Any Month</option>
              <option value="oct">October 2026</option>
              <option value="nov">November 2026</option>
              <option value="dec">December 2026 (Festive)</option>
              <option value="jan">January 2027</option>
              <option value="feb">February 2027</option>
            </select>
          </div>
          <div class="search-field">
            <span class="search-field-label">${ICONS.sparkles} Experience</span>
            <select class="search-field-select" id="heroSearchTheme" aria-label="Select experience type">
              <option value="">All Themes</option>
              <option value="honeymoon">Honeymoon & Romance</option>
              <option value="luxury">Ultra-Luxury</option>
              <option value="family">Family Vacations</option>
              <option value="group">Guided Groups</option>
              <option value="adventure">Adventures</option>
              <option value="mice">Corporate MICE</option>
            </select>
          </div>
          <div class="search-field">
            <span class="search-field-label">${ICONS.clock} Duration</span>
            <select class="search-field-select" id="heroSearchDuration" aria-label="Select duration">
              <option value="">Any Duration</option>
              <option value="4-6">4 to 6 Days</option>
              <option value="7-9">7 to 9 Days</option>
              <option value="10+">10+ Days</option>
            </select>
          </div>
          <button class="search-submit-btn" onclick="executeHeroSearch()" aria-label="Find journeys">
            ${ICONS.plane} Find Journeys
          </button>
        </div>

      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════
         SECTION 2 — TRUST METRICS BAR
    ═══════════════════════════════════════════════════════════════════ -->
    <section class="trust-bar-section" aria-label="Trust metrics">
      <div class="container">
        <div class="trust-metrics-row">
          <div class="trust-metric">
            <div class="trust-metric-val">500<span>+</span></div>
            <div class="trust-metric-label">Luxury Trips Curated</div>
          </div>
          <div class="trust-metric-divider" aria-hidden="true"></div>
          <div class="trust-metric">
            <div class="trust-metric-val">4.9<span>★</span></div>
            <div class="trust-metric-label">Average Guest Rating</div>
          </div>
          <div class="trust-metric-divider" aria-hidden="true"></div>
          <div class="trust-metric">
            <div class="trust-metric-val">50<span>+</span></div>
            <div class="trust-metric-label">Countries &amp; Destinations</div>
          </div>
          <div class="trust-metric-divider" aria-hidden="true"></div>
          <div class="trust-metric">
            <div class="trust-metric-val">24<span>/7</span></div>
            <div class="trust-metric-label">Personal Concierge</div>
          </div>
          <div class="trust-metric-divider" aria-hidden="true"></div>
          <div class="trust-metric">
            <div class="trust-metric-val">100<span>%</span></div>
            <div class="trust-metric-label">Transparent Pricing</div>
          </div>
          <div class="trust-metric-divider" aria-hidden="true"></div>
          <div class="trust-metric">
            <div class="trust-metric-val">8<span>yr</span></div>
            <div class="trust-metric-label">Years of Excellence</div>
          </div>
        </div>

        <!-- Partner / Certification Badges -->
        <div class="partner-badges-row" aria-label="Partner certifications">
          <div class="partner-badge">
            <span class="partner-badge-icon">✈</span>
            <span>IATA Accredited</span>
          </div>
          <div class="partner-badge">
            <span class="partner-badge-icon">🏨</span>
            <span>Marriott Partner</span>
          </div>
          <div class="partner-badge">
            <span class="partner-badge-icon">🏨</span>
            <span>IHG Preferred</span>
          </div>
          <div class="partner-badge">
            <span class="partner-badge-icon">✈</span>
            <span>Air India Authorized</span>
          </div>
          <div class="partner-badge">
            <span class="partner-badge-icon">🛡</span>
            <span>GST Registered</span>
          </div>
          <div class="partner-badge">
            <span class="partner-badge-icon">⭐</span>
            <span>Verified 4★ & 5★ Only</span>
          </div>
          <div class="partner-badge">
            <span class="partner-badge-icon">🔒</span>
            <span>100% Secure Booking</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════
         SECTION 3 — FEATURED DESTINATIONS
    ═══════════════════════════════════════════════════════════════════ -->
    <section class="section" id="destinationsSection" aria-label="Featured destinations">
      <div class="container">
        <div class="section-header" style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:1.5rem;">
          <div>
            <span class="eyebrow">Curated Sanctuaries</span>
            <h2 class="section-title">Featured Destinations</h2>
            <p class="section-desc">From snow-draped Kashmir peaks to turquoise Maldivian lagoons — every destination, intimately known.</p>
          </div>
          <div class="tab-group" id="destTabGroup" role="group" aria-label="Filter destinations">
            <button class="tab-btn active" onclick="filterDestinations('all', this)">All</button>
            <button class="tab-btn" onclick="filterDestinations('domestic', this)">Domestic</button>
            <button class="tab-btn" onclick="filterDestinations('international', this)">International</button>
          </div>
        </div>
        <div class="destinations-grid" id="destinationsGrid">
          ${destinations.map(d => renderDestinationCard(d)).join('')}
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════
         SECTION 4 — SIGNATURE PACKAGES
    ═══════════════════════════════════════════════════════════════════ -->
    <section class="section section-sand" id="packagesSection" aria-label="Signature packages">
      <div class="container">
        <div class="section-header text-center">
          <span class="eyebrow">Signature Journeys</span>
          <h2 class="section-title">Curated Holiday Packages</h2>
          <p class="section-desc">Day-wise itineraries, verified 4★ &amp; 5★ properties, private chauffeur, and transparent pricing — all in one.</p>
        </div>
        <div class="packages-grid">
          ${packages.slice(0, 6).map(p => renderPackageCard(p)).join('')}
        </div>
        <div style="text-align:center;margin-top:3rem;">
          <a href="#/packages" class="btn btn-primary btn-lg">
            View All 2026 Packages ${ICONS.arrowRight}
          </a>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════
         SECTION 5 — EXPERIENCE THEMES
    ═══════════════════════════════════════════════════════════════════ -->
    <section class="section" aria-label="Travel experiences">
      <div class="container">
        <div class="section-header text-center">
          <span class="eyebrow">Themes &amp; Moments</span>
          <h2 class="section-title">Travel by Experience</h2>
          <p class="section-desc">Whether celebrating love in a Maldivian overwater villa or leading an executive delegation to Switzerland.</p>
        </div>
        <div class="experiences-grid">
          ${INITIAL_DATA.experiences.map(exp => `
            <div class="experience-item" onclick="window.location.hash='#/packages?theme=${exp.id}'" role="button" tabindex="0" aria-label="${exp.title}" onkeydown="if(event.key==='Enter')window.location.hash='#/packages?theme=${exp.id}'">
              <img src="${exp.image}" alt="${exp.title}" loading="lazy" width="800" height="560" />
              <div class="experience-overlay">
                <span class="badge badge-gold" style="width:fit-content;margin-bottom:0.65rem;">${exp.tagline}</span>
                <h3 class="experience-title">${exp.title}</h3>
                <p class="experience-desc">${exp.description}</p>
                <div class="experience-cta">
                  Explore ${ICONS.arrowRight}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════
         SECTION 6 — SMART TRIP PLANNER
    ═══════════════════════════════════════════════════════════════════ -->
    <section class="section section-sand" id="plannerSection" aria-label="Trip planner">
      <div class="container">
        <div class="section-header text-center">
          <span class="eyebrow">Bespoke Journey Designer</span>
          <h2 class="section-title">Design Your Custom Trip</h2>
          <p class="section-desc">Tell us your dream in four steps. Our Bhopal specialists craft a day-wise itinerary with private transfers and handpicked stays.</p>
        </div>

        <div class="planner-wrapper">
          <div class="planner-steps-nav" role="tablist" aria-label="Trip planner steps">
            <button class="planner-step-tab active" id="plannerTab1" onclick="switchPlannerStep(1)" role="tab" aria-selected="true" aria-controls="plannerStep1">
              <span class="step-num">01</span>
              <span class="step-label">Experience</span>
            </button>
            <button class="planner-step-tab" id="plannerTab2" onclick="switchPlannerStep(2)" role="tab" aria-selected="false" aria-controls="plannerStep2">
              <span class="step-num">02</span>
              <span class="step-label">Destination</span>
            </button>
            <button class="planner-step-tab" id="plannerTab3" onclick="switchPlannerStep(3)" role="tab" aria-selected="false" aria-controls="plannerStep3">
              <span class="step-num">03</span>
              <span class="step-label">Preferences</span>
            </button>
            <button class="planner-step-tab" id="plannerTab4" onclick="switchPlannerStep(4)" role="tab" aria-selected="false" aria-controls="plannerStep4">
              <span class="step-num">04</span>
              <span class="step-label">Get Quote</span>
            </button>
          </div>

          <div class="planner-body">
            <!-- Step 1 -->
            <div class="planner-step-panel active" id="plannerStep1" role="tabpanel">
              <h3 style="font-family:var(--font-serif);font-size:1.35rem;margin-bottom:0.4rem;">What kind of journey are you envisioning?</h3>
              <p style="font-size:0.92rem;color:var(--color-text-muted);margin-bottom:1rem;">Choose the experience that defines your occasion.</p>
              <div class="options-grid" id="plannerThemeGrid">
                <div class="option-card selected" onclick="selectPlannerOption('theme','Honeymoon & Romance',this)">
                  <div class="option-icon">💍</div>
                  <div class="option-title">Honeymoon & Romance</div>
                  <div class="option-desc">Private villas, candlelight dinners</div>
                </div>
                <div class="option-card" onclick="selectPlannerOption('theme','Ultra-Luxury Retreat',this)">
                  <div class="option-icon">👑</div>
                  <div class="option-title">Ultra-Luxury</div>
                  <div class="option-desc">5-star palaces, butler service</div>
                </div>
                <div class="option-card" onclick="selectPlannerOption('theme','Family & Multi-Gen',this)">
                  <div class="option-icon">👨‍👩‍👧‍👦</div>
                  <div class="option-title">Family Retreat</div>
                  <div class="option-desc">Elder & child friendly pacing</div>
                </div>
                <div class="option-card" onclick="selectPlannerOption('theme','Guided Group Escapes',this)">
                  <div class="option-icon">🌍</div>
                  <div class="option-title">Group Tour</div>
                  <div class="option-desc">Fixed departures, shared experience</div>
                </div>
                <div class="option-card" onclick="selectPlannerOption('theme','Adventure & Mountains',this)">
                  <div class="option-icon">⛰️</div>
                  <div class="option-title">Adventure</div>
                  <div class="option-desc">Himalayan valleys, alpine walks</div>
                </div>
                <div class="option-card" onclick="selectPlannerOption('theme','Corporate MICE',this)">
                  <div class="option-icon">🏢</div>
                  <div class="option-title">Corporate MICE</div>
                  <div class="option-desc">Leadership retreats, conferences</div>
                </div>
              </div>
              <div class="planner-controls">
                <div></div>
                <button class="btn btn-primary" onclick="switchPlannerStep(2)">Next: Destination ${ICONS.arrowRight}</button>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="planner-step-panel" id="plannerStep2" role="tabpanel">
              <h3 style="font-family:var(--font-serif);font-size:1.35rem;margin-bottom:0.4rem;">Where and when would you like to travel?</h3>
              <p style="font-size:0.92rem;color:var(--color-text-muted);margin-bottom:1rem;">Pick your destination and preferred travel window.</p>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;margin:1.5rem 0 1.75rem;">
                <div class="form-group">
                  <label class="form-label" for="plannerDestination">Target Destination</label>
                  <select class="form-control" id="plannerDestination">
                    <option>Kashmir (Srinagar, Gulmarg, Pahalgam)</option>
                    <option>Kerala Backwaters &amp; Munnar</option>
                    <option>Royal Rajasthan Palaces</option>
                    <option>Dubai &amp; Abu Dhabi</option>
                    <option>Bali &amp; Nusa Penida</option>
                    <option>Switzerland Alps &amp; Rail</option>
                    <option>Maldives Overwater Resort</option>
                    <option>Vietnam &amp; Indochina</option>
                    <option>Custom World Destination</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label" for="plannerMonth">Preferred Travel Month</label>
                  <select class="form-control" id="plannerMonth">
                    <option>October 2026</option>
                    <option>November 2026</option>
                    <option>December 2026 (Festive / New Year)</option>
                    <option>January 2027</option>
                    <option>February 2027</option>
                    <option>Summer 2027</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label" for="plannerDuration">Trip Duration</label>
                  <select class="form-control" id="plannerDuration">
                    <option>5 Days / 4 Nights</option>
                    <option>6 Days / 5 Nights (Recommended)</option>
                    <option>7 Days / 6 Nights</option>
                    <option>10+ Days Grand Tour</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label" for="plannerTravelers">Travelers</label>
                  <input type="text" class="form-control" id="plannerTravelers" value="2 Adults (Couple)" placeholder="e.g. 2 Adults, 1 Child" />
                </div>
              </div>
              <div class="planner-controls">
                <button class="btn btn-secondary" onclick="switchPlannerStep(1)">← Back</button>
                <button class="btn btn-primary" onclick="switchPlannerStep(3)">Next: Preferences ${ICONS.arrowRight}</button>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="planner-step-panel" id="plannerStep3" role="tabpanel">
              <h3 style="font-family:var(--font-serif);font-size:1.35rem;margin-bottom:0.4rem;">Your comfort and service preferences</h3>
              <p style="font-size:0.92rem;color:var(--color-text-muted);margin-bottom:1rem;">We customize hotel tiers and include turnkey services.</p>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;margin:1.5rem 0;">
                <div class="form-group">
                  <label class="form-label" for="plannerStayType">Stay Category</label>
                  <select class="form-control" id="plannerStayType">
                    <option>Handpicked 4-Star Premium Boutique</option>
                    <option>5-Star Luxury Resorts &amp; Heritage Palaces</option>
                    <option>Private Island / Overwater Villas</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label" for="plannerCity">Departure City</label>
                  <input type="text" class="form-control" id="plannerCity" placeholder="e.g. Bhopal, Indore, Delhi" value="Bhopal" />
                </div>
              </div>
              <div style="margin-bottom:1.5rem;">
                <label class="form-label" style="margin-bottom:0.75rem;display:block;">Additional Services Needed</label>
                <div style="display:flex;flex-wrap:wrap;gap:0.65rem;">
                  ${[
                    {id:'chkFlights', label:'✈ Flights'},
                    {id:'chkVisa', label:'🛂 Visa Help'},
                    {id:'chkForex', label:'💱 Forex Card'},
                    {id:'chkInsurance', label:'🛡 Insurance'}
                  ].map(item => `
                    <label class="planner-checkbox-label">
                      <input type="checkbox" id="${item.id}" checked />
                      ${item.label}
                    </label>
                  `).join('')}
                </div>
              </div>
              <div class="planner-controls">
                <button class="btn btn-secondary" onclick="switchPlannerStep(2)">← Back</button>
                <button class="btn btn-primary" onclick="switchPlannerStep(4)">Finalize &amp; Quote ${ICONS.arrowRight}</button>
              </div>
            </div>

            <!-- Step 4 -->
            <div class="planner-step-panel" id="plannerStep4" role="tabpanel">
              <h3 style="font-family:var(--font-serif);font-size:1.35rem;margin-bottom:0.4rem;">Where should we send your itinerary?</h3>
              <p style="font-size:0.92rem;color:var(--color-text-muted);margin-bottom:1rem;">Our Bhopal specialist reviews your brief and shares an itemized proposal within 2 hours.</p>
              <form id="plannerFinalForm" onsubmit="submitPlannerWizard(event)" novalidate>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
                  <div class="form-group">
                    <label class="form-label" for="pName">Full Name *</label>
                    <input type="text" class="form-control" id="pName" placeholder="e.g. Vikram Sharma" required autocomplete="name" />
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
                    <label class="form-label" for="pBudget">Budget Preference</label>
                    <select class="form-control" id="pBudget">
                      <option>Comfort Tier (₹35k – ₹55k / person)</option>
                      <option selected>Luxury Tier (₹55k – ₹95k / person)</option>
                      <option>Ultra-Luxury (₹95k – ₹2 Lakh+ / person)</option>
                    </select>
                  </div>
                </div>
                <div class="form-group" style="margin-top:0.5rem;">
                  <label class="form-label" for="pNotes">Special Notes or Celebrations</label>
                  <textarea class="form-control" id="pNotes" placeholder="E.g. 25th anniversary, vegetarian meals, wheelchair access, specific hotel preference…"></textarea>
                </div>
                <div class="planner-controls" style="margin-top:1.5rem;">
                  <button type="button" class="btn btn-secondary" onclick="switchPlannerStep(3)">← Back</button>
                  <button type="submit" class="btn btn-gold btn-lg">
                    ${ICONS.sparkles} Get My Quotation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════
         SECTION 7 — WHY VAYU HOLIDAYS
    ═══════════════════════════════════════════════════════════════════ -->
    <section class="section" aria-label="Why choose Vayu Holidays">
      <div class="container">
        <div class="section-header text-center">
          <span class="eyebrow">The Vayu Standard</span>
          <h2 class="section-title">Why Discerning Travelers Choose Us</h2>
          <p class="section-desc">We don't sell trips. We architect journeys — built around your rhythm, taste, and peace of mind.</p>
        </div>

        <div class="why-grid">
          <div class="why-card">
            <div class="why-icon" aria-hidden="true">🗺</div>
            <div class="why-num">01</div>
            <h3 class="why-title">Tailor-Made Precision</h3>
            <p class="why-desc">Every route, hotel, and departure time is drafted from scratch around your family's rhythm — never a rigid group template.</p>
          </div>
          <div class="why-card">
            <div class="why-icon" aria-hidden="true">💬</div>
            <div class="why-num">02</div>
            <h3 class="why-title">24/7 Personal Concierge</h3>
            <p class="why-desc">A dedicated WhatsApp manager stays with you from itinerary draft to safe return — available for real-time adjustments.</p>
          </div>
          <div class="why-card">
            <div class="why-icon" aria-hidden="true">🏨</div>
            <div class="why-num">03</div>
            <h3 class="why-title">Verified Luxury Partners</h3>
            <p class="why-desc">We book only vetted 4★ &amp; 5★ properties, certified chauffeurs, and licensed state guides — personally inspected.</p>
          </div>
          <div class="why-card">
            <div class="why-icon" aria-hidden="true">📋</div>
            <div class="why-num">04</div>
            <h3 class="why-title">100% Transparent Costing</h3>
            <p class="why-desc">Itemized proposals with clear inclusions &amp; exclusions. Zero hidden surcharges, no forced tourist-trap stops.</p>
          </div>
          <div class="why-card">
            <div class="why-icon" aria-hidden="true">🛂</div>
            <div class="why-num">05</div>
            <h3 class="why-title">Full Visa &amp; Documentation</h3>
            <p class="why-desc">We manage Schengen, UAE, Bali, and 50+ country visa applications in-house — 99% first-time approval rate.</p>
          </div>
          <div class="why-card">
            <div class="why-icon" aria-hidden="true">🏆</div>
            <div class="why-num">06</div>
            <h3 class="why-title">Bhopal's Most Trusted Agency</h3>
            <p class="why-desc">8 years of excellence. 500+ curated journeys. A 4.9★ rating from discerning families, couples, and corporate leaders.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════
         SECTION 8 — BESPOKE TRAVEL HIGHLIGHT
    ═══════════════════════════════════════════════════════════════════ -->
    <section class="section section-dark" aria-label="Bespoke travel">
      <div class="container">
        <div class="bespoke-split">
          <div class="bespoke-text">
            <span class="eyebrow">Private &amp; Personalised</span>
            <h2 class="section-title" style="color:#fff;">Travel On Your Own Terms.</h2>
            <p style="font-size:1.1rem;line-height:1.8;margin-bottom:1.75rem;color:rgba(255,255,255,0.78);">
              Not all travelers fit rigid tour boxes. Vayu Holidays designs journeys around your pace, dietary preferences, flight schedules, and personal wishlist — down to the finest detail.
            </p>
            <div class="bespoke-list">
              <div class="bespoke-item">
                <span style="color:var(--color-gold);">${ICONS.check}</span>
                <div>
                  <strong style="color:var(--color-ivory);">Zero Cookie-Cutter Itineraries</strong>
                  <span style="color:rgba(255,255,255,0.65);"> — Every route custom-drafted by our travel directors.</span>
                </div>
              </div>
              <div class="bespoke-item">
                <span style="color:var(--color-gold);">${ICONS.check}</span>
                <div>
                  <strong style="color:var(--color-ivory);">Private Chauffeur-Driven Vehicles</strong>
                  <span style="color:rgba(255,255,255,0.65);"> — Sanitized luxury vehicles exclusively for your party.</span>
                </div>
              </div>
              <div class="bespoke-item">
                <span style="color:var(--color-gold);">${ICONS.check}</span>
                <div>
                  <strong style="color:var(--color-ivory);">VIP Airport Concierge</strong>
                  <span style="color:rgba(255,255,255,0.65);"> — Meet &amp; greet, seamless luggage, 24/7 helpline.</span>
                </div>
              </div>
            </div>
            <div style="display:flex;gap:1rem;flex-wrap:wrap;margin-top:2rem;">
              <button class="btn btn-gold" onclick="openEnquiryModal({ title: 'Design My Custom Itinerary' })">
                ${ICONS.sparkles} Craft My Custom Journey
              </button>
              <a href="https://wa.me/${waNumber}?text=${waMsg}" target="_blank" rel="noopener" class="btn btn-outline-white">
                ${ICONS.whatsapp} WhatsApp Us Now
              </a>
            </div>
          </div>
          <div class="bespoke-visual">
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80"
              alt="Bespoke luxury travel experience"
              loading="lazy"
              style="border-radius:var(--radius-xl);border:1px solid var(--border-gold);box-shadow:var(--shadow-xl);width:100%;"
              width="900" height="600"
            />
            <div class="bespoke-stat-card">
              <div style="font-family:var(--font-serif);font-size:2rem;color:var(--color-gold-dark);font-weight:700;">100%</div>
              <div style="font-size:0.85rem;font-weight:600;color:var(--color-obsidian);">Fully Customizable — Transparent Itemized Costing</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════
         SECTION 9 — SERVICES
    ═══════════════════════════════════════════════════════════════════ -->
    <section class="section section-sand" id="servicesSection" aria-label="Travel services">
      <div class="container">
        <div class="section-header text-center">
          <span class="eyebrow">Comprehensive Travel Desk</span>
          <h2 class="section-title">End-to-End Travel Services</h2>
          <p class="section-desc">From Schengen visa to multi-currency forex cards — our expert desks handle every aspect of your journey.</p>
        </div>
        <div class="services-grid">
          ${services.map(s => `
            <div class="service-card">
              <div class="service-icon-wrap" aria-hidden="true">
                ${ICONS[s.icon] || ICONS.sparkles}
              </div>
              <h3 class="service-card-title">${s.title}</h3>
              <p class="service-card-desc">${s.shortDesc}</p>
              <a href="#/services/${s.slug}" class="service-card-link" aria-label="Learn more about ${s.title}">
                Learn More ${ICONS.arrowRight}
              </a>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════
         SECTION 10 — HOW IT WORKS
    ═══════════════════════════════════════════════════════════════════ -->
    <section class="section" aria-label="How it works">
      <div class="container">
        <div class="section-header text-center">
          <span class="eyebrow">Effortless Planning</span>
          <h2 class="section-title">How It Works</h2>
          <p class="section-desc">Three simple steps — from a dream to a confirmed luxury departure.</p>
        </div>
        <div class="how-steps-grid">
          <div class="how-step-card">
            <div class="how-step-badge" aria-hidden="true">1</div>
            <h3 class="how-step-title">Share Your Dream</h3>
            <p style="font-size:0.95rem;color:var(--color-text-muted);line-height:1.7;">Use our Trip Planner, submit an enquiry, or message us on WhatsApp. Tell us your dates, companions, and budget preference.</p>
          </div>
          <div class="how-step-card">
            <div class="how-step-badge" aria-hidden="true">2</div>
            <h3 class="how-step-title">Receive Your Bespoke Proposal</h3>
            <p style="font-size:0.95rem;color:var(--color-text-muted);line-height:1.7;">Within 2–4 hours, our specialists design a day-wise itinerary with accommodation options and transparent itemized pricing.</p>
          </div>
          <div class="how-step-card">
            <div class="how-step-badge" aria-hidden="true">3</div>
            <h3 class="how-step-title">Travel in Complete Peace</h3>
            <p style="font-size:0.95rem;color:var(--color-text-muted);line-height:1.7;">Receive confirmed vouchers, e-tickets, and visa clearance. Enjoy your journey backed by our 24/7 active traveler support.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════
         SECTION 11 — TESTIMONIALS (Enhanced)
    ═══════════════════════════════════════════════════════════════════ -->
    <section class="section section-sand" aria-label="Guest testimonials">
      <div class="container">
        <div class="section-header text-center">
          <span class="eyebrow">Verified Guest Stories</span>
          <h2 class="section-title">Words From Discerning Travelers</h2>
          <!-- Aggregate Rating -->
          <div class="aggregate-rating" aria-label="Average rating 4.9 out of 5">
            <div class="agg-stars" aria-hidden="true">★★★★★</div>
            <div class="agg-score">4.9 / 5</div>
            <div class="agg-count">Based on 120+ verified guest reviews</div>
          </div>
        </div>

        <div class="testimonials-grid">
          ${testimonials.map(t => `
            <div class="testimonial-card" itemscope itemtype="https://schema.org/Review">
              <div class="testimonial-stars" aria-label="${t.rating} out of 5 stars">
                ${'★'.repeat(t.rating)}
              </div>
              <p class="testimonial-quote" itemprop="reviewBody">"${t.quote}"</p>
              <div class="testimonial-author">
                <img
                  src="${t.avatar}"
                  alt="${t.name}"
                  class="author-avatar"
                  loading="lazy"
                  width="50" height="50"
                />
                <div>
                  <div class="author-name" itemprop="author">${t.name}</div>
                  <div class="author-trip">${t.trip} · ${t.location}</div>
                  <span class="verified-badge" aria-label="Verified guest">✓ Verified Guest</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════
         SECTION 12 — TRAVEL STORIES
    ═══════════════════════════════════════════════════════════════════ -->
    <section class="section" aria-label="Travel journal">
      <div class="container">
        <div class="section-header" style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:1.5rem;">
          <div>
            <span class="eyebrow">The Vayu Journal</span>
            <h2 class="section-title">Stories From The Road</h2>
            <p class="section-desc">Insider guides, visa tips, and destination essays by our travel curators.</p>
          </div>
          <a href="#/blog" class="btn btn-secondary">View All Stories ${ICONS.arrowRight}</a>
        </div>
        <div class="blog-grid">
          ${blogs.slice(0, 3).map(b => `
            <article class="blog-card" onclick="window.location.hash='#/blog/${b.slug}'" role="button" tabindex="0" aria-label="Read: ${b.title}" onkeydown="if(event.key==='Enter')window.location.hash='#/blog/${b.slug}'">
              <img src="${b.image}" alt="${b.title}" class="blog-card-img" loading="lazy" width="640" height="400" />
              <div class="blog-card-body">
                <div class="blog-card-date">${b.category} · ${b.date} · ${b.readTime}</div>
                <h3 class="blog-card-title">${b.title}</h3>
                <p style="font-size:0.92rem;color:var(--color-text-muted);margin-bottom:1.25rem;line-height:1.6;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">
                  ${b.excerpt}
                </p>
                <span style="display:inline-flex;align-items:center;gap:0.4rem;font-size:0.85rem;font-weight:700;color:var(--color-gold-dark);">
                  Read Story ${ICONS.arrowRight}
                </span>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════════
         SECTION 13 — FINAL CTA BANNER
    ═══════════════════════════════════════════════════════════════════ -->
    <section class="section" style="padding-top:0;" aria-label="Call to action">
      <div class="container">
        <div class="vip-cta-banner">
          <span class="eyebrow" style="color:var(--color-gold-light);">Your 2026 Departure Awaits</span>
          <h2 class="vip-cta-title">Ready for an Extraordinary Journey?</h2>
          <p class="vip-cta-desc">
            Speak with our senior holiday directors in Bhopal. We turn travel aspirations into meticulously planned, unforgettable experiences.
          </p>
          <div style="display:flex;justify-content:center;gap:1.25rem;flex-wrap:wrap;">
            <button class="btn btn-gold btn-lg" onclick="openEnquiryModal({ title: 'Plan My 2026 Journey' })">
              ${ICONS.sparkles} Plan My Trip Now
            </button>
            <a href="tel:${company.phone}" class="btn btn-outline-white btn-lg">
              ${ICONS.phone} ${company.phone}
            </a>
            <a href="https://wa.me/${waNumber}?text=${waMsg}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-lg">
              ${ICONS.whatsapp} WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ── Planner State & Helpers ──────────────────────────────────────────────────
let plannerState = {
  theme: "Honeymoon & Romance",
  destination: "Kashmir",
  month: "October 2026",
  duration: "6 Days / 5 Nights",
  travelers: "2 Adults (Couple)",
  stayType: "5-Star Luxury Resorts",
  city: "Bhopal"
};

function switchPlannerStep(stepNum) {
  for (let i = 1; i <= 4; i++) {
    const tab   = document.getElementById(`plannerTab${i}`);
    const panel = document.getElementById(`plannerStep${i}`);
    if (tab && panel) {
      const active = i === stepNum;
      tab.classList.toggle("active", active);
      panel.classList.toggle("active", active);
      tab.setAttribute("aria-selected", active ? "true" : "false");
    }
  }
  // Scroll planner into view on mobile
  const wrapper = document.querySelector(".planner-wrapper");
  if (wrapper && window.innerWidth < 768) {
    wrapper.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function selectPlannerOption(field, value, el) {
  plannerState[field] = value;
  el.parentElement?.querySelectorAll(".option-card").forEach(c => c.classList.remove("selected"));
  el.classList.add("selected");
}

async function submitPlannerWizard(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  if (btn) { btn.disabled = true; btn.textContent = "Sending…"; }

  const enquiry = {
    name:           document.getElementById("pName")?.value,
    phone:          document.getElementById("pPhone")?.value,
    email:          document.getElementById("pEmail")?.value,
    departureCity:  document.getElementById("plannerCity")?.value || "Bhopal",
    destination:    document.getElementById("plannerDestination")?.value || plannerState.destination,
    travelMonth:    document.getElementById("plannerMonth")?.value || plannerState.month,
    duration:       document.getElementById("plannerDuration")?.value,
    travelers:      document.getElementById("plannerTravelers")?.value,
    budgetPerPerson:document.getElementById("pBudget")?.value,
    notes:          `Theme: ${plannerState.theme} | Stay: ${document.getElementById("plannerStayType")?.value} | ${document.getElementById("pNotes")?.value || ""}`
  };

  await window.vayuStore.addEnquiry(enquiry);

  showToast("Quotation Sent!", `Thank you, ${enquiry.name}. Reference: VAYU-${Date.now().toString().slice(-4)}. We'll contact you within 2 hours.`);
  switchPlannerStep(1);
  e.target.reset();
  if (btn) { btn.disabled = false; btn.innerHTML = `✦ Get My Quotation`; }

  setTimeout(() => {
    const waText = encodeURIComponent(`Hello Vayu Holidays! I just submitted a trip plan for "${enquiry.destination}" (${enquiry.travelMonth}). Traveler: ${enquiry.name} (${enquiry.phone}). Please share my quotation.`);
    if (confirm("Open WhatsApp to connect with your Vayu Holidays concierge directly?")) {
      window.open(`https://wa.me/919826012345?text=${waText}`, "_blank");
    }
  }, 800);
}

async function filterDestinations(type, btn) {
  document.getElementById("destTabGroup")?.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  const destinations = await window.vayuStore.getDestinations();
  const filtered = type === "all" ? destinations : destinations.filter(d => d.type === type);
  const grid = document.getElementById("destinationsGrid");
  if (grid) grid.innerHTML = filtered.map(d => renderDestinationCard(d)).join('');
}

function executeHeroSearch() {
  const dest  = document.getElementById("heroSearchDest")?.value  || "";
  const theme = document.getElementById("heroSearchTheme")?.value || "";
  window.location.hash = `#/packages?dest=${dest}&theme=${theme}`;
}
