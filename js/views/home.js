/* ==========================================================================
   VAYU HOLIDAYS — HOMEPAGE VIEW (Cinematic Editorial Luxury Experience)
   ========================================================================== */

async function renderHomeView() {
  const company      = await window.vayuStore.getCompany();
  const destinations = await window.vayuStore.getDestinations();
  const packages     = await window.vayuStore.getPackages();
  const services     = window.vayuStore.getServices();
  const testimonials = await window.vayuStore.getTestimonials();
  const blogs        = await window.vayuStore.getBlogs();

  return `
    <!-- CINEMATIC HERO SECTION -->
    <section class="hero-section">
      <img 
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=85" 
        alt="Vayu Holidays Cinematic Destination" 
        class="hero-bg-media" 
      />
      <div class="hero-overlay"></div>

      <div class="container hero-content">
        <span class="hero-eyebrow">
          ${ICONS.sparkles} 2026 Bespoke Travel Agency & Tour Operator • Bhopal
        </span>

        <h1 class="hero-title">
          Your Journey. <em>Beautifully Planned.</em>
        </h1>

        <p class="hero-subtitle">
          Original, minimal luxury travel experiences. Handcrafted itineraries, private sanctuaries, and dedicated 24/7 concierge support curated from Bhopal to the world.
        </p>

        <div class="hero-actions">
          <a href="#/packages" class="btn btn-gold btn-lg">
            Explore 2026 Holidays ${ICONS.arrowRight}
          </a>
          <button class="btn btn-outline-white btn-lg" onclick="openEnquiryModal({ title: 'Bespoke Travel Consultation' })">
            ${ICONS.sparkles} Plan My Trip
          </button>
        </div>

        <!-- QUICK JOURNEY FINDER BAR -->
        <div class="hero-search-bar">
          <div class="search-field">
            <span class="search-field-label">${ICONS.mapPin} Where To?</span>
            <select class="search-field-select" id="heroSearchDest">
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
            <select class="search-field-select" id="heroSearchMonth">
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
            <select class="search-field-select" id="heroSearchTheme">
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
            <select class="search-field-select" id="heroSearchDuration">
              <option value="">Any Duration</option>
              <option value="4-6">4 to 6 Days</option>
              <option value="7-9">7 to 9 Days</option>
              <option value="10+">10+ Days</option>
            </select>
          </div>

          <button class="search-submit-btn" onclick="executeHeroSearch()">
            ${ICONS.plane} Find Journeys
          </button>
        </div>

        <!-- TRUST BADGES -->
        <div class="hero-trust-row">
          <div class="trust-badge-item">
            ${ICONS.shield} 100% Transparent Itemized Quotations
          </div>
          <div class="trust-badge-item">
            ${ICONS.sparkles} 24/7 Dedicated Trip Concierge
          </div>
          <div class="trust-badge-item">
            ${ICONS.mapPin} Headquartered in Bhopal, MP
          </div>
          <div class="trust-badge-item">
            ${ICONS.check} Verified 4★ & 5★ Luxury Partners
          </div>
        </div>
      </div>
    </section>

    <!-- SMART TRIP PLANNER (INTERACTIVE WIZARD) -->
    <section class="section section-sand" id="plannerSection">
      <div class="container">
        <div class="section-header text-center">
          <span class="eyebrow">Interactive Bespoke Designer</span>
          <h2 class="section-title">Design Your Custom Journey</h2>
          <p class="section-desc">
            Tell us your travel dream in four intuitive steps. Our Bhopal luxury travel specialists will craft a bespoke day-wise itinerary with private transfers and handpicked stays.
          </p>
        </div>

        <div class="planner-wrapper">
          <!-- Step Tabs -->
          <div class="planner-steps-nav">
            <button class="planner-step-tab active" id="plannerTab1" onclick="switchPlannerStep(1)">
              <span class="step-num">Step 01</span>
              <span class="step-label">Experience & Vibe</span>
            </button>
            <button class="planner-step-tab" id="plannerTab2" onclick="switchPlannerStep(2)">
              <span class="step-num">Step 02</span>
              <span class="step-label">Destination & Dates</span>
            </button>
            <button class="planner-step-tab" id="plannerTab3" onclick="switchPlannerStep(3)">
              <span class="step-num">Step 03</span>
              <span class="step-label">Comfort & Inclusions</span>
            </button>
            <button class="planner-step-tab" id="plannerTab4" onclick="switchPlannerStep(4)">
              <span class="step-num">Step 04</span>
              <span class="step-label">Get Bespoke Quote</span>
            </button>
          </div>

          <div class="planner-body">
            <!-- Step 1: Experience -->
            <div class="planner-step-panel active" id="plannerStep1">
              <h3 style="font-family: var(--font-serif); font-size: 1.35rem; margin-bottom: 0.5rem;">
                What kind of journey are you envisioning?
              </h3>
              <p style="font-size: 0.92rem; color: var(--color-text-muted);">
                Select the experience that best defines your mood and occasion.
              </p>

              <div class="options-grid" id="plannerThemeGrid">
                <div class="option-card selected" onclick="selectPlannerOption('theme', 'Honeymoon & Romance', this)">
                  <div class="option-icon">${ICONS.sparkles}</div>
                  <div class="option-title">Honeymoon & Romance</div>
                  <div class="option-desc">Private villas, candlelight dinners, scenic seclusion</div>
                </div>
                <div class="option-card" onclick="selectPlannerOption('theme', 'Ultra-Luxury Retreat', this)">
                  <div class="option-icon">${ICONS.star}</div>
                  <div class="option-title">Ultra-Luxury Retreat</div>
                  <div class="option-desc">5-Star palace suites, private charters, butler service</div>
                </div>
                <div class="option-card" onclick="selectPlannerOption('theme', 'Family & Multi-Gen', this)">
                  <div class="option-icon">${ICONS.mapPin}</div>
                  <div class="option-title">Family & Multi-Gen</div>
                  <div class="option-desc">Spacious private vehicles, child & elder friendly</div>
                </div>
                <div class="option-card" onclick="selectPlannerOption('theme', 'Guided Group Escapes', this)">
                  <div class="option-icon">${ICONS.plane}</div>
                  <div class="option-title">Guided Group Escapes</div>
                  <div class="option-desc">Fixed departures, tour leaders, shared camaraderie</div>
                </div>
                <div class="option-card" onclick="selectPlannerOption('theme', 'Adventure & Mountains', this)">
                  <div class="option-icon">${ICONS.shield}</div>
                  <div class="option-title">Adventure & Nature</div>
                  <div class="option-desc">Himalayan valleys, safari drives, alpine walks</div>
                </div>
                <div class="option-card" onclick="selectPlannerOption('theme', 'Corporate MICE & Offsite', this)">
                  <div class="option-icon">${ICONS.clock}</div>
                  <div class="option-title">Corporate MICE</div>
                  <div class="option-desc">Leadership retreats, conferences, dealer summits</div>
                </div>
              </div>

              <div class="planner-controls">
                <div></div>
                <button class="btn btn-primary" onclick="switchPlannerStep(2)">
                  Continue to Destination ${ICONS.arrowRight}
                </button>
              </div>
            </div>

            <!-- Step 2: Destination & Dates -->
            <div class="planner-step-panel" id="plannerStep2">
              <h3 style="font-family: var(--font-serif); font-size: 1.35rem; margin-bottom: 0.5rem;">
                Where and when would you like to travel?
              </h3>
              <p style="font-size: 0.92rem; color: var(--color-text-muted);">
                Choose your dream destination or select custom discovery.
              </p>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 1.75rem 0 2rem;">
                <div class="form-group">
                  <label class="form-label">Target Destination</label>
                  <select class="form-control" id="plannerDestination">
                    <option value="Kashmir (Srinagar, Gulmarg, Pahalgam)">Kashmir (Srinagar, Gulmarg, Pahalgam)</option>
                    <option value="Kerala Backwaters & Munnar">Kerala Backwaters & Munnar</option>
                    <option value="Royal Rajasthan Palaces">Royal Rajasthan Palaces</option>
                    <option value="Dubai & Abu Dhabi">Dubai & Abu Dhabi</option>
                    <option value="Bali & Nusa Penida">Bali & Nusa Penida</option>
                    <option value="Switzerland Alps & Scenic Rail">Switzerland Alps & Scenic Rail</option>
                    <option value="Maldives Overwater Resort">Maldives Overwater Resort</option>
                    <option value="Vietnam & Indochina">Vietnam & Indochina</option>
                    <option value="Custom World Destination">Custom World Destination</option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label">Preferred Travel Month</label>
                  <select class="form-control" id="plannerMonth">
                    <option value="October 2026">October 2026</option>
                    <option value="November 2026">November 2026</option>
                    <option value="December 2026 (Festive / New Year)">December 2026 (Festive / New Year)</option>
                    <option value="January 2027">January 2027</option>
                    <option value="February 2027">February 2027</option>
                    <option value="Summer 2027">Summer 2027</option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label">Ideal Trip Duration</label>
                  <select class="form-control" id="plannerDuration">
                    <option value="5 Days / 4 Nights">5 Days / 4 Nights</option>
                    <option value="6 Days / 5 Nights">6 Days / 5 Nights (Recommended)</option>
                    <option value="7 Days / 6 Nights">7 Days / 6 Nights</option>
                    <option value="10+ Days Grand Tour">10+ Days Grand Tour</option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label">Travelers (Adults & Children)</label>
                  <input type="text" class="form-control" id="plannerTravelers" value="2 Adults (Couple)" />
                </div>
              </div>

              <div class="planner-controls">
                <button class="btn btn-secondary" onclick="switchPlannerStep(1)">Back</button>
                <button class="btn btn-primary" onclick="switchPlannerStep(3)">
                  Continue to Preferences ${ICONS.arrowRight}
                </button>
              </div>
            </div>

            <!-- Step 3: Comfort & Preferences -->
            <div class="planner-step-panel" id="plannerStep3">
              <h3 style="font-family: var(--font-serif); font-size: 1.35rem; margin-bottom: 0.5rem;">
                Select your comfort standards and services
              </h3>
              <p style="font-size: 0.92rem; color: var(--color-text-muted);">
                We customize hotel categories and add turnkey travel services.
              </p>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 1.75rem 0 2rem;">
                <div class="form-group">
                  <label class="form-label">Stay Category Preference</label>
                  <select class="form-control" id="plannerStayType">
                    <option value="Handpicked 4-Star Premium Hotels">Handpicked 4-Star Premium Boutique Stays</option>
                    <option value="5-Star Luxury Resorts & Heritage Palaces">5-Star Luxury Resorts & Heritage Palaces</option>
                    <option value="Private Island / Overwater Villas">Private Island / Overwater Sanctuary Villas</option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label">Departure Airport / City</label>
                  <input type="text" class="form-control" id="plannerCity" placeholder="e.g. Bhopal (BHO), Indore, Delhi..." value="Bhopal" />
                </div>
              </div>

              <div style="margin-bottom: 1.5rem;">
                <label class="form-label" style="margin-bottom: 0.75rem;">Additional Turnkey Services Needed:</label>
                <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
                  <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.88rem; cursor: pointer; background: var(--color-sand); padding: 0.5rem 0.85rem; border-radius: var(--radius-sm);">
                    <input type="checkbox" id="chkFlights" checked /> Flights / Airline Desk
                  </label>
                  <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.88rem; cursor: pointer; background: var(--color-sand); padding: 0.5rem 0.85rem; border-radius: var(--radius-sm);">
                    <input type="checkbox" id="chkVisa" checked /> Visa & Documentation
                  </label>
                  <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.88rem; cursor: pointer; background: var(--color-sand); padding: 0.5rem 0.85rem; border-radius: var(--radius-sm);">
                    <input type="checkbox" id="chkForex" /> Forex / Multi-Currency Card
                  </label>
                  <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.88rem; cursor: pointer; background: var(--color-sand); padding: 0.5rem 0.85rem; border-radius: var(--radius-sm);">
                    <input type="checkbox" id="chkInsurance" checked /> Comprehensive Travel Insurance
                  </label>
                </div>
              </div>

              <div class="planner-controls">
                <button class="btn btn-secondary" onclick="switchPlannerStep(2)">Back</button>
                <button class="btn btn-primary" onclick="switchPlannerStep(4)">
                  Finalize & Get Quote ${ICONS.arrowRight}
                </button>
              </div>
            </div>

            <!-- Step 4: Contact & Instant Quote Request -->
            <div class="planner-step-panel" id="plannerStep4">
              <h3 style="font-family: var(--font-serif); font-size: 1.35rem; margin-bottom: 0.5rem;">
                Where should we send your itemized itinerary & quotation?
              </h3>
              <p style="font-size: 0.92rem; color: var(--color-text-muted);">
                Our travel manager in Bhopal will review your requirements and share an itemized proposal with transparent costing.
              </p>

              <form id="plannerFinalForm" onsubmit="submitPlannerWizard(event)" style="margin-top: 1.5rem;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                  <div class="form-group">
                    <label class="form-label">Full Name *</label>
                    <input type="text" class="form-control" id="pName" placeholder="e.g. Vikram Sharma" required />
                  </div>
                  <div class="form-group">
                    <label class="form-label">WhatsApp / Phone *</label>
                    <input type="tel" class="form-control" id="pPhone" placeholder="+91 98260 00000" required />
                  </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                  <div class="form-group">
                    <label class="form-label">Email Address *</label>
                    <input type="email" class="form-control" id="pEmail" placeholder="name@domain.com" required />
                  </div>
                  <div class="form-group">
                    <label class="form-label">Approx Budget Preference</label>
                    <select class="form-control" id="pBudget">
                      <option value="Comfort Tier (₹35k - ₹55k / person)">Comfort Tier (₹35k - ₹55k / person)</option>
                      <option value="Luxury Tier (₹55k - ₹95k / person)" selected>Luxury Tier (₹55k - ₹95k / person)</option>
                      <option value="Signature Ultra-Luxury (₹95k - ₹2 Lakh+ / person)">Signature Ultra-Luxury (₹95k - ₹2 Lakh+ / person)</option>
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label class="form-label">Specific Notes, Special Dates or Celebrations</label>
                  <textarea class="form-control" id="pNotes" placeholder="E.g. 25th anniversary celebration, private pool villa preferred, pure vegetarian meals, need wheelchair assistance..."></textarea>
                </div>

                <div class="planner-controls">
                  <button type="button" class="btn btn-secondary" onclick="switchPlannerStep(3)">Back</button>
                  <button type="submit" class="btn btn-gold btn-lg">
                    ${ICONS.sparkles} Generate My Quotation & Connect Concierge
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURED DESTINATIONS -->
    <section class="section" id="destinationsSection">
      <div class="container">
        <div class="section-header" style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1.5rem;">
          <div>
            <span class="eyebrow">Curated Sanctuaries</span>
            <h2 class="section-title">Featured Destinations</h2>
            <p class="section-desc">
              From the snow-draped peaks of Kashmir and emerald backwaters of Kerala to the glittering dunes of Dubai and Swiss alpine rail.
            </p>
          </div>

          <div class="tab-group" id="destTabGroup">
            <button class="tab-btn active" onclick="filterDestinations('all', this)">All</button>
            <button class="tab-btn" onclick="filterDestinations('domestic', this)">Domestic (India)</button>
            <button class="tab-btn" onclick="filterDestinations('international', this)">International</button>
          </div>
        </div>

        <div class="destinations-grid" id="destinationsGrid">
          ${destinations.map(d => renderDestinationCard(d)).join('')}
        </div>
      </div>
    </section>

    <!-- FEATURED HOLIDAY PACKAGES -->
    <section class="section section-sand" id="packagesSection">
      <div class="container">
        <div class="section-header text-center">
          <span class="eyebrow">Signature Journeys</span>
          <h2 class="section-title">Curated Holiday Packages</h2>
          <p class="section-desc">
            Handcrafted day-wise itineraries, verified 4★ & 5★ properties, private chauffeur transfers, and transparent pricing.
          </p>
        </div>

        <div class="packages-grid">
          ${packages.map(p => renderPackageCard(p)).join('')}
        </div>

        <div style="text-align: center; margin-top: 3.5rem;">
          <a href="#/packages" class="btn btn-primary btn-lg">
            View All 2026 Packages & Categories ${ICONS.arrowRight}
          </a>
        </div>
      </div>
    </section>

    <!-- TRAVEL BY EXPERIENCE -->
    <section class="section">
      <div class="container">
        <div class="section-header text-center">
          <span class="eyebrow">Themes & Moments</span>
          <h2 class="section-title">Travel by Experience</h2>
          <p class="section-desc">
            Whether celebrating love in secluded overwater villas or taking an executive corporate delegation overseas.
          </p>
        </div>

        <div class="experiences-grid">
          ${INITIAL_DATA.experiences.map(exp => `
            <div class="experience-item" onclick="window.location.hash='#/packages?theme=${exp.id}'">
              <img src="${exp.image}" alt="${exp.title}" loading="lazy" />
              <div class="experience-overlay">
                <span class="badge badge-gold" style="width: fit-content; margin-bottom: 0.65rem;">${exp.tagline}</span>
                <h3 class="experience-title">${exp.title}</h3>
                <p class="experience-desc">${exp.description}</p>
                <div style="display: flex; align-items: center; gap: 0.4rem; font-size: 0.85rem; font-weight: 700; color: var(--color-gold-light); text-transform: uppercase;">
                  Explore Theme ${ICONS.arrowRight}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- CUSTOMIZED BESPOKE TRIP SECTION -->
    <section class="section section-dark">
      <div class="container">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;">
          <div>
            <span class="eyebrow">Bespoke Travel Architecture</span>
            <h2 class="section-title" style="color: #fff;">Travel On Your Own Terms.</h2>
            <p style="font-size: 1.15rem; line-height: 1.8; margin-bottom: 1.75rem;">
              Not all travelers fit into rigid tour boxes. At Vayu Holidays, we design private journeys around your pace, culinary preferences, flight schedules, and personal wishlist.
            </p>

            <div style="display: flex; flex-direction: column; gap: 1.15rem; margin-bottom: 2.5rem;">
              <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
                <span style="color: var(--color-gold); font-size: 1.1rem; margin-top: 2px;">${ICONS.check}</span>
                <div>
                  <strong style="color: var(--color-ivory);">Zero Cookie-Cutter Itineraries:</strong> Every route is custom drafted from scratch by our travel directors.
                </div>
              </div>
              <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
                <span style="color: var(--color-gold); font-size: 1.1rem; margin-top: 2px;">${ICONS.check}</span>
                <div>
                  <strong style="color: var(--color-ivory);">Dedicated Private Chauffeurs:</strong> Sanitized, private luxury vehicles exclusively for your party.
                </div>
              </div>
              <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
                <span style="color: var(--color-gold); font-size: 1.1rem; margin-top: 2px;">${ICONS.check}</span>
                <div>
                  <strong style="color: var(--color-ivory);">VIP Airport Concierge:</strong> Meet and greet, seamless luggage coordination, and 24/7 helpline.
                </div>
              </div>
            </div>

            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <button class="btn btn-gold" onclick="openEnquiryModal({ title: 'Design My Custom Itinerary' })">
                ${ICONS.sparkles} Craft My Custom Journey
              </button>
              <a href="https://wa.me/919826012345?text=${encodeURIComponent(company.whatsappMessage)}" target="_blank" rel="noopener" class="btn btn-outline-white">
                ${ICONS.whatsapp} WhatsApp Our Director
              </a>
            </div>
          </div>

          <div style="position: relative;">
            <img 
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80" 
              alt="Bespoke Luxury Experience" 
              style="border-radius: var(--radius-xl); border: 1px solid var(--border-gold); box-shadow: var(--shadow-xl); width: 100%;" 
            />
            <div style="position: absolute; bottom: -20px; left: -20px; background: var(--color-cream); border: 1px solid var(--border-gold); padding: 1.25rem 1.75rem; border-radius: var(--radius-md); box-shadow: var(--shadow-lg); color: var(--color-obsidian); max-width: 260px;">
              <div style="font-family: var(--font-serif); font-size: 1.75rem; color: var(--color-gold-dark); font-weight: 700;">100%</div>
              <div style="font-size: 0.85rem; font-weight: 600;">Customizable Itineraries with Transparent Itemized Costing</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY VAYU HOLIDAYS (4 LUXURY PILLARS) -->
    <section class="section">
      <div class="container">
        <div class="section-header text-center">
          <span class="eyebrow">The Vayu Standard</span>
          <h2 class="section-title">Why Travel With Vayu Holidays</h2>
          <p class="section-desc">
            Guided by integrity, high hospitality standards, and hands-on executive leadership in Bhopal, Madhya Pradesh.
          </p>
        </div>

        <div class="pillars-grid">
          <div class="pillar-card">
            <div class="pillar-num">01</div>
            <h3 class="pillar-title">Tailor-Made Precision</h3>
            <p class="pillar-desc">
              We never push pre-packaged compromise. Every departure date, duration, hotel room tier, and excursion is molded around your family's personal rhythm.
            </p>
          </div>

          <div class="pillar-card">
            <div class="pillar-num">02</div>
            <h3 class="pillar-title">24/7 Personal Concierge</h3>
            <p class="pillar-desc">
              From the moment you step off your plane until your safe return, a dedicated WhatsApp concierge is standing by for real-time adjustments, dining reservations, or queries.
            </p>
          </div>

          <div class="pillar-card">
            <div class="pillar-num">03</div>
            <h3 class="pillar-title">Verified Luxury Partners</h3>
            <p class="pillar-desc">
              We partner exclusively with vetted 4★ & 5★ luxury hotels, certified chauffeurs, licensed state guides, and accredited cruise operators.
            </p>
          </div>

          <div class="pillar-card">
            <div class="pillar-num">04</div>
            <h3 class="pillar-title">100% Transparent Costing</h3>
            <p class="pillar-desc">
              Phase 1 itemized quotations with clear inclusions and exclusions. No last-minute hidden taxes, unannounced mandatory surcharges, or forced tourist-trap stops.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- TRAVEL SERVICES -->
    <section class="section section-sand" id="servicesSection">
      <div class="container">
        <div class="section-header text-center">
          <span class="eyebrow">Comprehensive Travel Desk</span>
          <h2 class="section-title">End-to-End Travel Services</h2>
          <p class="section-desc">
            Beyond holiday packages, Vayu Holidays operates full-service ticketing, documentation, currency, and corporate desks.
          </p>
        </div>

        <div class="services-grid">
          ${services.map(s => `
            <div class="service-card">
              <div class="service-icon-wrap">
                ${ICONS[s.icon] || ICONS.sparkles}
              </div>
              <h3 class="service-card-title">${s.title}</h3>
              <p class="service-card-desc">${s.shortDesc}</p>
              <a href="#/services/${s.slug}" class="service-card-link">
                Learn More ${ICONS.arrowRight}
              </a>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- HOW IT WORKS (3 STEPS) -->
    <section class="section">
      <div class="container">
        <div class="section-header text-center">
          <span class="eyebrow">Effortless Journey Planning</span>
          <h2 class="section-title">How It Works</h2>
          <p class="section-desc">
            Planning a private luxury journey with Vayu Holidays is smooth, transparent, and completely stress-free.
          </p>
        </div>

        <div class="how-steps-grid">
          <div class="how-step-card">
            <div class="how-step-badge">1</div>
            <h3 class="how-step-title">Share Your Dream</h3>
            <p style="font-size: 0.95rem; color: var(--color-text-muted);">
              Use our Smart Trip Planner, submit an inquiry form, or message our Bhopal office on WhatsApp with your desired dates, companions, and budget preference.
            </p>
          </div>

          <div class="how-step-card">
            <div class="how-step-badge">2</div>
            <h3 class="how-step-title">Receive Your Bespoke Quote</h3>
            <p style="font-size: 0.95rem; color: var(--color-text-muted);">
              Within 2 to 4 hours, our specialists design an itemized day-wise itinerary, accommodation options, and transparent pricing tailored to your feedback.
            </p>
          </div>

          <div class="how-step-card">
            <div class="how-step-badge">3</div>
            <h3 class="how-step-title">Travel in Complete Peace</h3>
            <p style="font-size: 0.95rem; color: var(--color-text-muted);">
              Receive your confirmed vouchers, flight tickets, and visa clearance. Enjoy your holiday backed by our 24/7 active traveler support desk throughout your trip.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="section section-sand">
      <div class="container">
        <div class="section-header text-center">
          <span class="eyebrow">Guest Stories</span>
          <h2 class="section-title">Words From Discerning Travelers</h2>
          <p class="section-desc">
            Authentic experiences from families, honeymoon couples, and corporate delegations who trust Vayu Holidays.
          </p>
        </div>

        <div class="testimonials-grid">
          ${testimonials.map(t => `
            <div class="testimonial-card">
              <div style="color: #b89758; display: flex; gap: 3px; margin-bottom: 1.25rem;">
                ${Array(t.rating).fill(ICONS.star).join('')}
              </div>
              <p class="testimonial-quote">“${t.quote}”</p>
              <div class="testimonial-author">
                <img src="${t.avatar}" alt="${t.name}" class="author-avatar" loading="lazy" />
                <div>
                  <div class="author-name">${t.name}</div>
                  <div class="author-trip">${t.trip} • ${t.location}</div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- EDITORIAL TRAVEL STORIES / BLOG -->
    <section class="section">
      <div class="container">
        <div class="section-header" style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1.5rem;">
          <div>
            <span class="eyebrow">Travel Journals & Guides</span>
            <h2 class="section-title">Stories From The Road</h2>
            <p class="section-desc">
              Insider advice, seasonal recommendations, and visa guidance authored by our luxury itinerary curators.
            </p>
          </div>
          <a href="#/blog" class="btn btn-secondary">
            View All Stories ${ICONS.arrowRight}
          </a>
        </div>

        <div class="blog-grid">
          ${blogs.slice(0, 3).map(b => `
            <div class="blog-card" onclick="window.location.hash='#/blog/${b.slug}'">
              <img src="${b.image}" alt="${b.title}" class="blog-card-img" loading="lazy" />
              <div class="blog-card-body">
                <div class="blog-card-date">${b.category} • ${b.date}</div>
                <h3 class="blog-card-title">${b.title}</h3>
                <p style="font-size: 0.92rem; color: var(--color-text-muted); margin-bottom: 1.25rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
                  ${b.excerpt}
                </p>
                <div style="display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.85rem; font-weight: 700; color: var(--color-gold-dark);">
                  Read Journal ${ICONS.arrowRight}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- FINAL VIP CALL TO ACTION -->
    <section class="section" style="padding-top: 0;">
      <div class="container">
        <div class="vip-cta-banner">
          <span class="eyebrow" style="color: var(--color-gold-light);">Your 2026 Departure Awaits</span>
          <h2 class="vip-cta-title">Ready for an Extraordinary Journey?</h2>
          <p class="vip-cta-desc">
            Speak directly with our senior holiday directors at our Bhopal headquarters. We turn travel aspirations into exquisitely planned memories.
          </p>

          <div style="display: flex; justify-content: center; gap: 1.25rem; flex-wrap: wrap;">
            <button class="btn btn-gold btn-lg" onclick="openEnquiryModal({ title: 'Plan My 2026 Journey' })">
              ${ICONS.sparkles} Plan My Trip Now
            </button>
            <a href="tel:${company.phone}" class="btn btn-outline-white btn-lg">
              ${ICONS.phone} Call Concierge (${company.phone})
            </a>
            <a href="https://wa.me/919826012345?text=${encodeURIComponent(company.whatsappMessage)}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-lg">
              ${ICONS.whatsapp} WhatsApp Desk
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}

// --- Home Interactive Wizard Helpers ---
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
    const tab = document.getElementById(`plannerTab${i}`);
    const panel = document.getElementById(`plannerStep${i}`);
    if (tab && panel) {
      if (i === stepNum) {
        tab.classList.add("active");
        panel.classList.add("active");
      } else {
        tab.classList.remove("active");
        panel.classList.remove("active");
      }
    }
  }
}

function selectPlannerOption(field, value, el) {
  plannerState[field] = value;
  const parent = el.parentElement;
  if (parent) {
    parent.querySelectorAll(".option-card").forEach(c => c.classList.remove("selected"));
  }
  el.classList.add("selected");
}

async function submitPlannerWizard(e) {
  e.preventDefault();
  const name = document.getElementById("pName")?.value;
  const phone = document.getElementById("pPhone")?.value;
  const email = document.getElementById("pEmail")?.value;
  const budget = document.getElementById("pBudget")?.value;
  const notes = document.getElementById("pNotes")?.value || "";

  const dest = document.getElementById("plannerDestination")?.value || plannerState.destination;
  const month = document.getElementById("plannerMonth")?.value || plannerState.month;
  const duration = document.getElementById("plannerDuration")?.value || plannerState.duration;
  const travelers = document.getElementById("plannerTravelers")?.value || plannerState.travelers;
  const stay = document.getElementById("plannerStayType")?.value || plannerState.stayType;
  const city = document.getElementById("plannerCity")?.value || "Bhopal";

  const enquiry = {
    name,
    phone,
    email,
    departureCity: city,
    destination: dest,
    travelMonth: month,
    duration: duration,
    travelers: travelers,
    budgetPerPerson: budget,
    notes: `Theme: ${plannerState.theme} | Stay: ${stay} | Notes: ${notes}`
  };

  await window.vayuStore.addEnquiry(enquiry);

  showToast("Quotation Generated!", `Thank you, ${name}. Reference: VAYU-${Date.now().toString().slice(-4)}`);
  switchPlannerStep(1);
  e.target.reset();

  setTimeout(() => {
    const waText = encodeURIComponent(
      `Hello Vayu Holidays! Trip Planner inquiry for "${dest}". Traveler: ${name} (${phone}), Month: ${month}, Duration: ${duration}, Theme: ${plannerState.theme}.`
    );
    if (confirm("Open WhatsApp to connect with your Vayu Holidays concierge?")) {
      window.open(`https://wa.me/919826012345?text=${waText}`, "_blank");
    }
  }, 900);
}

async function filterDestinations(type, btn) {
  const allTabs = document.getElementById("destTabGroup")?.querySelectorAll(".tab-btn");
  if (allTabs) allTabs.forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  const destinations = await window.vayuStore.getDestinations();
  const filtered = type === "all" ? destinations : destinations.filter(d => d.type === type);

  const grid = document.getElementById("destinationsGrid");
  if (grid) {
    grid.innerHTML = filtered.map(d => renderDestinationCard(d)).join('');
  }
}

function executeHeroSearch() {
  const dest = document.getElementById("heroSearchDest")?.value || "";
  const theme = document.getElementById("heroSearchTheme")?.value || "";
  window.location.hash = `#/packages?dest=${dest}&theme=${theme}`;
}
