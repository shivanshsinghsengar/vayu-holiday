/* ==========================================================================
   VAYU HOLIDAYS — PACKAGE DETAIL VIEW (Editorial Itinerary & Booking Drawer)
   ========================================================================== */

async function renderPackageDetailView(packageId) {
  const pkg = await window.vayuStore.getPackageById(packageId);
  const company = await window.vayuStore.getCompany();

  if (!pkg) {
    return `
      <div class="container" style="padding: 6rem 1.5rem; text-align: center;">
        <h2 style="font-family: var(--font-serif); font-size: 2.2rem; margin-bottom: 1rem;">Itinerary Not Found</h2>
        <p style="color: var(--color-text-muted); margin-bottom: 2rem;">The requested holiday itinerary could not be located.</p>
        <a href="#/packages" class="btn btn-primary">Return to All Packages</a>
      </div>
    `;
  }

  const formattedPrice = window.vayuStore.formatPrice(pkg.price);
  const formattedOriginal = pkg.originalPrice ? window.vayuStore.formatPrice(pkg.originalPrice) : null;

  return `
    <div class="package-detail-header">
      <div class="container">
        <div class="breadcrumbs">
          <a href="#/">Home</a>
          <span class="breadcrumb-separator">/</span>
          <a href="#/packages">Holidays</a>
          <span class="breadcrumb-separator">/</span>
          <span style="color: var(--color-obsidian); font-weight: 600;">${pkg.destinationName}</span>
        </div>

        <div class="package-detail-title-wrap">
          <div>
            <div style="display: flex; gap: 0.5rem; margin-bottom: 0.75rem;">
              <span class="badge ${pkg.category === 'domestic' ? 'badge-emerald' : 'badge-gold'}">
                ${pkg.category === 'domestic' ? 'Incredible India' : 'International Journey'}
              </span>
              <span class="badge badge-dark">
                Ref: ${pkg.id.toUpperCase()}
              </span>
            </div>

            <h1 class="package-detail-title">${pkg.title}</h1>

            <div class="package-detail-meta-row">
              <span style="display: inline-flex; align-items: center; gap: 0.4rem;">
                ${ICONS.mapPin} ${pkg.destinationName}
              </span>
              <span>•</span>
              <span style="display: inline-flex; align-items: center; gap: 0.4rem;">
                ${ICONS.clock} ${pkg.durationDays} Days / ${pkg.durationNights} Nights
              </span>
              <span>•</span>
              <span style="display: inline-flex; align-items: center; gap: 0.4rem; color: #b89758; font-weight: 600;">
                ${ICONS.star} ${pkg.rating} (${pkg.reviewsCount} Discerning Guests)
              </span>
            </div>
          </div>

          <div style="text-align: right;">
            <div style="font-size: 0.78rem; text-transform: uppercase; color: var(--color-text-muted); letter-spacing: 0.08em;">
              Starting Package Price
            </div>
            <div style="display: flex; align-items: baseline; gap: 0.5rem; justify-content: flex-end;">
              <span style="font-family: var(--font-serif); font-size: 2.2rem; font-weight: 700; color: var(--color-obsidian);">
                ${formattedPrice}
              </span>
              ${formattedOriginal ? `<span style="text-decoration: line-through; color: var(--color-text-light); font-size: 1rem;">${formattedOriginal}</span>` : ''}
            </div>
            <div style="font-size: 0.8rem; color: var(--color-text-muted);">per person (twin share)</div>
          </div>
        </div>
      </div>
    </div>

    <section class="section" style="padding-top: 2rem;">
      <div class="container">
        <!-- EDITORIAL GALLERY GRID -->
        <div class="package-gallery-grid">
          ${(pkg.gallery && pkg.gallery.length > 0 ? pkg.gallery : [pkg.image, pkg.image, pkg.image]).slice(0, 4).map((img, idx) => `
            <div class="gallery-item" onclick="window.open('${img}', '_blank')">
              <img src="${img}" alt="${pkg.title} Photo ${idx + 1}" loading="lazy" />
            </div>
          `).join('')}
        </div>

        <!-- QUICK FACTS STRIP -->
        <div class="package-facts-strip">
          <div class="fact-item">
            <div class="fact-icon">${ICONS.clock}</div>
            <div>
              <div class="fact-label">Duration</div>
              <div class="fact-val">${pkg.durationDays}D / ${pkg.durationNights}N</div>
            </div>
          </div>

          <div class="fact-item">
            <div class="fact-icon">${ICONS.calendar}</div>
            <div>
              <div class="fact-label">Best Season</div>
              <div class="fact-val" style="font-size: 0.85rem;">${pkg.bestTime || "Year-Round"}</div>
            </div>
          </div>

          <div class="fact-item">
            <div class="fact-icon">${ICONS.sparkles}</div>
            <div>
              <div class="fact-label">Stay Tier</div>
              <div class="fact-val">4★ & 5★ Luxury</div>
            </div>
          </div>

          <div class="fact-item">
            <div class="fact-icon">${ICONS.plane}</div>
            <div>
              <div class="fact-label">Transfers</div>
              <div class="fact-val">Private Chauffeur</div>
            </div>
          </div>

          <div class="fact-item">
            <div class="fact-icon">${ICONS.shield}</div>
            <div>
              <div class="fact-label">Support</div>
              <div class="fact-val">24/7 Concierge</div>
            </div>
          </div>
        </div>

        <!-- MAIN LAYOUT: ITINERARY + STICKY QUOTE CARD -->
        <div class="package-layout-grid">
          <div>
            <!-- Overview -->
            <div style="margin-bottom: 3.5rem;">
              <h2 class="timeline-section-title">
                ${ICONS.sparkles} Journey Overview
              </h2>
              <p style="font-size: 1.15rem; line-height: 1.8; color: var(--color-text-main); margin-bottom: 1.5rem;">
                ${pkg.overview}
              </p>

              <div style="background: var(--color-sand); border: 1px solid var(--border-gold); border-radius: var(--radius-md); padding: 1.5rem 1.75rem;">
                <h4 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--color-gold-dark); margin-bottom: 0.75rem;">
                  Curated Highlights of this Journey:
                </h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
                  ${(pkg.highlights || []).map(h => `
                    <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.92rem; color: var(--color-obsidian);">
                      <span style="color: var(--color-gold-dark);">${ICONS.check}</span>
                      <span>${h}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>

            <!-- Day-wise Detailed Itinerary Timeline -->
            <div style="margin-bottom: 3.5rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h2 class="timeline-section-title" style="margin-bottom: 0;">
                  ${ICONS.calendar} Day-wise Detailed Itinerary
                </h2>
                <button class="btn btn-secondary btn-sm" onclick="toggleAllTimelineDays()">
                  Expand All Days
                </button>
              </div>

              <div class="itinerary-timeline" id="itineraryTimelineWrap">
                ${(pkg.itinerary || []).map((day, idx) => `
                  <div class="timeline-day-card ${idx === 0 ? 'active' : ''}" id="timelineDay${day.day}">
                    <div class="timeline-day-header" onclick="toggleTimelineDay(${day.day})">
                      <div class="timeline-day-title-wrap">
                        <span class="day-badge">Day 0${day.day}</span>
                        <h4 class="day-title">${day.title}</h4>
                      </div>
                      <span class="timeline-chevron">${ICONS.chevronDown}</span>
                    </div>

                    <div class="timeline-day-body">
                      <p style="font-size: 0.98rem; line-height: 1.75; color: var(--color-text-main); margin-bottom: 1rem;">
                        ${day.description}
                      </p>

                      <div style="display: flex; flex-wrap: wrap; gap: 1.5rem; padding-top: 1rem; border-top: 1px solid var(--border-subtle); font-size: 0.85rem;">
                        <div>
                          <strong style="color: var(--color-gold-dark);">Stay:</strong>
                          <span style="color: var(--color-text-muted);">${day.stay}</span>
                        </div>
                        <div>
                          <strong style="color: var(--color-gold-dark);">Meal Plan:</strong>
                          <span style="color: var(--color-text-muted);">${day.meals}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Inclusions & Exclusions -->
            <div class="inclusions-grid">
              <div class="inclusion-box">
                <h3 class="inclusion-title" style="color: #1b5e20;">
                  ${ICONS.check} What's Included
                </h3>
                <div class="inclusion-list">
                  ${(pkg.inclusions || []).map(inc => `
                    <div class="inclusion-item">
                      <span class="icon-check">${ICONS.check}</span>
                      <span>${inc}</span>
                    </div>
                  `).join('')}
                </div>
              </div>

              <div class="inclusion-box">
                <h3 class="inclusion-title" style="color: #b71c1c;">
                  ${ICONS.x} What's Excluded
                </h3>
                <div class="inclusion-list">
                  ${(pkg.exclusions || []).map(exc => `
                    <div class="inclusion-item">
                      <span class="icon-cross">${ICONS.x}</span>
                      <span>${exc}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>

            <!-- Accommodations Note -->
            <div style="background: var(--color-cream); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 2rem; margin-bottom: 3.5rem;">
              <h3 style="font-family: var(--font-serif); font-size: 1.35rem; margin-bottom: 0.75rem;">
                Verified Luxury Accommodations
              </h3>
              <p style="font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.7; margin-bottom: 1rem;">
                ${pkg.hotelInfo || "We select boutique heritage properties, 5-star mountain lodges, or lagoon overwater bungalows verified by our inspection team."}
              </p>
              <div style="font-size: 0.85rem; color: var(--color-gold-dark); font-weight: 600;">
                ★ Need a specific luxury resort or room category upgrade? Our concierge can substitute any property seamlessly.
              </div>
            </div>

            <!-- Important FAQs & Booking Policies -->
            <div>
              <h3 style="font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: 1.25rem;">
                Booking Terms & Guest Policies
              </h3>
              <div style="display: flex; flex-direction: column; gap: 0.85rem;">
                <details style="background: var(--color-sand); border-radius: var(--radius-md); padding: 1rem 1.25rem; font-size: 0.92rem; cursor: pointer;">
                  <summary style="font-weight: 700; color: var(--color-obsidian);">How does Phase 1 booking work?</summary>
                  <p style="margin-top: 0.75rem; color: var(--color-text-muted); line-height: 1.6;">
                    Phase 1 is strictly quotation and consultation based. We do not process speculative charges online. Our Bhopal office presents an itemized quotation, confirms live flight/hotel inventory, and shares bank remittance details directly.
                  </p>
                </details>

                <details style="background: var(--color-sand); border-radius: var(--radius-md); padding: 1rem 1.25rem; font-size: 0.92rem; cursor: pointer;">
                  <summary style="font-weight: 700; color: var(--color-obsidian);">Can this itinerary be customized for our travel dates?</summary>
                  <p style="margin-top: 0.75rem; color: var(--color-text-muted); line-height: 1.6;">
                    Absolutely. Every package shown on Vayu Holidays can be extended, trimmed, or customized with specific dining, vehicle upgrades (e.g., luxury Mercedes/BMW or Toyota Vellfire), or special celebration amenities.
                  </p>
                </details>

                <details style="background: var(--color-sand); border-radius: var(--radius-md); padding: 1rem 1.25rem; font-size: 0.92rem; cursor: pointer;">
                  <summary style="font-weight: 700; color: var(--color-obsidian);">What payment modes are accepted?</summary>
                  <p style="margin-top: 0.75rem; color: var(--color-text-muted); line-height: 1.6;">
                    We accept official bank NEFT/RTGS, UPI transfers to verified corporate Vayu Holidays accounts, and major credit cards with formal GST invoicing.
                  </p>
                </details>
              </div>
            </div>
          </div>

          <!-- STICKY QUOTE & BOOKING ACTION SIDEBAR -->
          <div class="sticky-quote-card">
            <div class="quote-card-price-header">
              <span class="quote-price-tag">Itemized Package Fare</span>
              <div style="display: flex; align-items: baseline; gap: 0.5rem;">
                <span class="quote-price-val">${formattedPrice}</span>
                ${formattedOriginal ? `<span style="text-decoration: line-through; font-size: 1.1rem; color: var(--color-text-light);">${formattedOriginal}</span>` : ''}
              </div>
              <span class="quote-per-person">Starting price per adult on double occupancy</span>
            </div>

            <div class="quote-benefits-list">
              <div class="quote-benefit-item">
                ${ICONS.check} Handpicked 4★ / 5★ Verified Hotels
              </div>
              <div class="quote-benefit-item">
                ${ICONS.check} Dedicated Private AC Vehicle & Chauffeur
              </div>
              <div class="quote-benefit-item">
                ${ICONS.check} Daily Buffet Breakfast & Curated Meals
              </div>
              <div class="quote-benefit-item">
                ${ICONS.check} 24/7 Bhopal Concierge Support
              </div>
              <div class="quote-benefit-item">
                ${ICONS.check} Transparent Pricing with GST Invoicing
              </div>
            </div>

            <div class="quote-actions">
              <button class="btn btn-gold btn-lg" style="width: 100%;" onclick="openEnquiryModal({ packageId: '${pkg.id}', title: '${pkg.title}' })">
                ${ICONS.sparkles} Request Itemized Quote
              </button>

              <a 
                href="https://wa.me/919826012345?text=${encodeURIComponent(`Hello Vayu Holidays! I would like to enquire about '${pkg.title}' (Ref: ${pkg.id}). Please share customized quotation and availability.`)}" 
                target="_blank" 
                rel="noopener" 
                class="btn btn-whatsapp" 
                style="width: 100%;"
              >
                ${ICONS.whatsapp} WhatsApp Our Concierge
              </a>

              <a href="tel:${company.phone}" class="btn btn-secondary" style="width: 100%;">
                ${ICONS.phone} Call Us: ${company.phone}
              </a>

              <button class="btn btn-white" style="width: 100%; border: 1px solid var(--border-subtle);" onclick="window.print()">
                Print / Save Itinerary (PDF)
              </button>
            </div>

            <p class="quote-concierge-note">
              No booking charges apply for quotation requests. Our senior trip managers in Bhopal will review and respond within 2 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
}

// --- Interactive Timeline Accordion Helpers ---
function toggleTimelineDay(dayNum) {
  const card = document.getElementById(`timelineDay${dayNum}`);
  if (card) {
    card.classList.toggle("active");
  }
}

function toggleAllTimelineDays() {
  const cards = document.querySelectorAll(".timeline-day-card");
  const anyClosed = Array.from(cards).some(c => !c.classList.contains("active"));
  cards.forEach(c => {
    if (anyClosed) c.classList.add("active");
    else c.classList.remove("active");
  });
}
