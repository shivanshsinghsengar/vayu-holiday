/* ==========================================================================
   VAYU HOLIDAYS — CONTACT US VIEW (Bhopal Headquarters & Consultation)
   ========================================================================== */

async function renderContactView() {
  const company  = await window.vayuStore.getCompany();
  const branches = await window.vayuStore.getBranches();
  const waNumber = (company.whatsapp || "918889754969").replace(/[^0-9]/g, "");

  return `
    <div class="package-detail-header">
      <div class="container">
        <div class="breadcrumbs">
          <a href="/">Home</a>
          <span class="breadcrumb-separator">/</span>
          <span style="color: var(--color-obsidian); font-weight: 600;">Contact Us</span>
        </div>

        <div class="package-detail-title-wrap">
          <div>
            <span class="eyebrow">Connect With Our Itinerary Architects</span>
            <h1 class="package-detail-title">Contact Vayu Holidays</h1>
            <p style="font-size: 1.15rem; max-width: 720px; color: var(--color-text-muted); line-height: 1.7;">
              Whether planning a family vacation, romantic honeymoon sanctuary, or corporate offsite, our Bhopal headquarters team is ready to assist you.
            </p>
          </div>
        </div>
      </div>
    </div>

    <section class="section" style="padding-top: 3.5rem;">
      <div class="container">
        <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 4rem; align-items: start;">
          <!-- Contact Form -->
          <div style="background: var(--color-cream); border: 1px solid var(--border-gold); border-radius: var(--radius-xl); padding: 3rem; box-shadow: var(--shadow-sm);">
            <h3 style="font-family: var(--font-serif); font-size: 1.75rem; margin-bottom: 0.5rem; color: var(--color-obsidian);">
              Send an Inquiry
            </h3>
            <p style="font-size: 0.95rem; color: var(--color-text-muted); margin-bottom: 2rem;">
              Fill in your details below and a senior travel specialist will contact you with initial ideas and availability.
            </p>

            <form id="contactPageForm" onsubmit="handleContactPageSubmit(event)">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div class="form-group">
                  <label class="form-label">Full Name *</label>
                  <input type="text" name="name" class="form-control" placeholder="Your name" required />
                </div>
                <div class="form-group">
                  <label class="form-label">Phone / WhatsApp *</label>
                  <input type="tel" name="phone" class="form-control" placeholder="+91 98260 00000" required />
                </div>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div class="form-group">
                  <label class="form-label">Email Address *</label>
                  <input type="email" name="email" class="form-control" placeholder="you@email.com" required />
                </div>
                <div class="form-group">
                  <label class="form-label">Your City *</label>
                  <input type="text" name="destination" class="form-control" placeholder="Bhopal, Indore, Delhi..." required />
                </div>
              </div>

              <button type="submit" class="btn btn-gold btn-lg" style="width: 100%; margin-top: 0.75rem;">
                ${ICONS.sparkles} Send Inquiry
              </button>
            </form>
          </div>

          <!-- Office Info & Map Card -->
          <div>
            <div style="background: var(--color-sand); border: 1px solid var(--border-gold); border-radius: var(--radius-xl); padding: 2.5rem; margin-bottom: 2rem;">
              <span class="eyebrow">Headquarters Information</span>
              <h3 style="font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: 1.5rem;">
                Vayu Holidays Bhopal
              </h3>

              <div style="display: flex; flex-direction: column; gap: 1.25rem;">
                <div style="display: flex; align-items: flex-start; gap: 0.85rem;">
                  <div style="color: var(--color-gold-dark); margin-top: 3px;">${ICONS.mapPin}</div>
                  <div>
                    <strong style="color: var(--color-obsidian); font-size: 0.95rem;">Office Address:</strong>
                    <div style="color: var(--color-text-muted); font-size: 0.92rem; margin-top: 2px;">
                      ${company.office}
                    </div>
                  </div>
                </div>

                <div style="display: flex; align-items: flex-start; gap: 0.85rem;">
                  <div style="color: var(--color-gold-dark); margin-top: 3px;">${ICONS.phone}</div>
                  <div>
                    <strong style="color: var(--color-obsidian); font-size: 0.95rem;">Concierge Desk:</strong>
                    <div style="margin-top: 2px;">
                      <a href="tel:${company.phone}" style="color: var(--color-gold-dark); font-weight: 700;">
                        ${company.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div style="display: flex; align-items: flex-start; gap: 0.85rem;">
                  <div style="color: #25D366; margin-top: 3px;">${ICONS.whatsapp}</div>
                  <div>
                    <strong style="color: var(--color-obsidian); font-size: 0.95rem;">Direct WhatsApp:</strong>
                    <div style="margin-top: 2px;">
                      <a href="https://wa.me/${waNumber}?text=${encodeURIComponent(company.whatsappMessage)}" target="_blank" rel="noopener" style="color: #25D366; font-weight: 700;">
                        ${company.whatsapp} (Instant Reply)
                      </a>
                    </div>
                  </div>
                </div>

                <div style="display: flex; align-items: flex-start; gap: 0.85rem;">
                  <div style="color: var(--color-gold-dark); margin-top: 3px;">${ICONS.clock}</div>
                  <div>
                    <strong style="color: var(--color-obsidian); font-size: 0.95rem;">Office Hours:</strong>
                    <div style="color: var(--color-text-muted); font-size: 0.92rem; margin-top: 2px;">
                      ${company.hours}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Airport Road Location Graphic / Map Card -->
            <div style="background: var(--color-cream); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 1.5rem; text-align: center;">
              <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; color: var(--color-gold-dark); font-weight: 700; font-size: 0.85rem; text-transform: uppercase; margin-bottom: 0.75rem;">
                ${ICONS.plane} Convenient Airport Road Location
              </div>
              <p style="font-size: 0.88rem; color: var(--color-text-muted); margin-bottom: 1.25rem;">
                Located on Airport Road, near Raksha Vihar & Vayu Pride Residency, just 10 minutes from Bhopal Airport. Easy parking available.
              </p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Raksha+Vihar+Vayu+Residency+Airport+Road+Bhopal+Madhya+Pradesh" 
                target="_blank" 
                rel="noopener" 
                class="btn btn-secondary" 
                style="width: 100%;"
              >
                Open in Google Maps ${ICONS.arrowRight}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- REGIONAL BRANCHES -->
    ${(branches && branches.length > 0) ? `
    <section class="section section-sand" style="padding-top:3rem;padding-bottom:4rem;">
      <div class="container">
        <div class="section-header text-center" style="margin-bottom:2.5rem;">
          <span class="eyebrow">Pan-India Presence</span>
          <h2 class="section-title" style="font-size:1.85rem;">Regional Branch Offices</h2>
          <p class="section-desc">Walk in or call your nearest Vayu Holidays branch for a personal consultation.</p>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:1.5rem;">
          ${branches.map(b => `
            <div style="background:var(--color-cream);border:1px solid var(--border-gold);border-radius:var(--radius-lg);padding:1.75rem;display:flex;flex-direction:column;gap:0.75rem;">
              <div style="display:flex;align-items:center;gap:0.5rem;color:var(--color-gold-dark);">${ICONS.mapPin}
                <strong style="font-size:0.72rem;text-transform:uppercase;letter-spacing:0.1em;color:var(--color-gold-dark);">${b.city}</strong>
              </div>
              <h3 style="font-family:var(--font-display);font-size:1.15rem;color:var(--color-obsidian);margin:0;">${b.name}</h3>
              <p style="font-size:0.88rem;color:var(--color-text-muted);line-height:1.6;margin:0;">${b.address}</p>
              <div style="display:flex;gap:0.75rem;margin-top:auto;padding-top:0.75rem;border-top:1px solid var(--border-subtle);">
                <a href="tel:${b.phone}" style="font-size:0.82rem;color:var(--color-obsidian);font-weight:600;text-decoration:none;">${ICONS.phone} ${b.phone}</a>
              </div>
              <a href="${b.mapUrl}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm" style="width:100%;justify-content:center;font-size:0.8rem;">
                View on Map ${ICONS.arrowRight}
              </a>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
    ` : ''}
  `;
}

async function handleContactPageSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  const enquiry = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    destination: formData.get("destination"),
    travelMonth: formData.get("travelMonth"),
    travelers: formData.get("travelers"),
    budgetPerPerson: "Contact Form Direct",
    notes: formData.get("notes") || "No additional notes."
  };

  await window.vayuStore.addEnquiry(enquiry);
  form.reset();

  showToast(
    "Message Received!",
    `Thank you, ${enquiry.name}. Your inquiry has been sent to our Bhopal headquarters. We will connect shortly.`
  );
}

