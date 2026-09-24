/* ==========================================================================
   VAYU HOLIDAYS — DEDICATED SERVICES VIEW (Flights, Hotels, Visa, Forex, etc.)
   ========================================================================== */

async function renderServiceDetailView(serviceSlug) {
  const service = window.vayuStore.getServiceBySlug(serviceSlug);
  const company = await window.vayuStore.getCompany();

  if (!service) {
    return `
      <div class="container" style="padding: 6rem 1.5rem; text-align: center;">
        <h2 style="font-family: var(--font-serif); font-size: 2.2rem; margin-bottom: 1rem;">Service Desk Not Found</h2>
        <p style="color: var(--color-text-muted); margin-bottom: 2rem;">The requested travel service page could not be located.</p>
        <a href="#/" class="btn btn-primary">Return to Home</a>
      </div>
    `;
  }

  return `
    <div class="package-detail-header">
      <div class="container">
        <div class="breadcrumbs">
          <a href="#/">Home</a>
          <span class="breadcrumb-separator">/</span>
          <a href="#/services/flights">Services</a>
          <span class="breadcrumb-separator">/</span>
          <span style="color: var(--color-obsidian); font-weight: 600;">${service.title}</span>
        </div>

        <div class="package-detail-title-wrap">
          <div>
            <span class="eyebrow">Professional Travel Services • Bhopal HQ</span>
            <h1 class="package-detail-title">${service.title}</h1>
            <p style="font-size: 1.15rem; max-width: 720px; color: var(--color-text-muted); line-height: 1.7;">
              ${service.heroDesc}
            </p>
          </div>

          <div style="display: flex; gap: 0.75rem;">
            <button class="btn btn-gold" onclick="openEnquiryModal({ title: '${service.title} Inquiry' })">
              ${ICONS.sparkles} Inquire Now
            </button>
            <a href="https://wa.me/919826012345?text=${encodeURIComponent(`Hello Vayu Holidays! I would like to inquire regarding ${service.title}.`)}" target="_blank" rel="noopener" class="btn btn-whatsapp">
              ${ICONS.whatsapp} WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>

    <section class="section" style="padding-top: 3.5rem;">
      <div class="container">
        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 3.5rem; align-items: start;">
          <div>
            <!-- Core Features -->
            <div style="margin-bottom: 3.5rem;">
              <h2 style="font-family: var(--font-serif); font-size: 1.85rem; margin-bottom: 1.5rem;">
                Why Book ${service.title} With Vayu Holidays?
              </h2>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem;">
                ${(service.features || []).map(f => `
                  <div style="background: var(--color-cream); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.5rem; display: flex; align-items: flex-start; gap: 0.85rem;">
                    <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--color-sand); color: var(--color-gold-dark); display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">
                      ${ICONS.check}
                    </div>
                    <div style="font-size: 0.95rem; color: var(--color-obsidian); font-weight: 500; line-height: 1.5;">
                      ${f}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Detailed Explanation & Process -->
            <div style="background: var(--color-sand); border: 1px solid var(--border-gold); border-radius: var(--radius-lg); padding: 2.5rem; margin-bottom: 3.5rem;">
              <h3 style="font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: 1rem;">
                How Our Bhopal Service Desk Operates
              </h3>
              <p style="font-size: 1rem; line-height: 1.75; color: var(--color-text-main); margin-bottom: 1.5rem;">
                Whether you need urgent business visa slots, confirmed train berths under premium tatkal, zero-markup foreign currency cards, or group airline ticketing, Vayu Holidays operates specialized workstations at our Bhopal headquarters on Airport Road.
              </p>

              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
                <div style="background: var(--color-cream); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
                  <strong style="color: var(--color-gold-dark); font-size: 0.82rem; text-transform: uppercase;">Step 01</strong>
                  <div style="font-weight: 700; margin: 0.35rem 0; font-size: 0.95rem;">Documentation Audit</div>
                  <div style="font-size: 0.82rem; color: var(--color-text-muted);">Meticulous verification to eliminate rejections or delays.</div>
                </div>
                <div style="background: var(--color-cream); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
                  <strong style="color: var(--color-gold-dark); font-size: 0.82rem; text-transform: uppercase;">Step 02</strong>
                  <div style="font-weight: 700; margin: 0.35rem 0; font-size: 0.95rem;">Best Rate Booking</div>
                  <div style="font-size: 0.82rem; color: var(--color-text-muted);">Negotiated airline and supplier rates without hidden markups.</div>
                </div>
                <div style="background: var(--color-cream); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
                  <strong style="color: var(--color-gold-dark); font-size: 0.82rem; text-transform: uppercase;">Step 03</strong>
                  <div style="font-weight: 700; margin: 0.35rem 0; font-size: 0.95rem;">Instant Delivery</div>
                  <div style="font-size: 0.82rem; color: var(--color-text-muted);">Confirmed digital e-tickets, policies & doorstep forex delivery.</div>
                </div>
              </div>
            </div>

            <!-- Service FAQs -->
            <div>
              <h3 style="font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: 1.25rem;">
                Frequently Asked Questions
              </h3>
              <div style="display: flex; flex-direction: column; gap: 0.85rem;">
                ${(service.faqs || []).map(faq => `
                  <details style="background: var(--color-cream); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.25rem; font-size: 0.95rem; cursor: pointer;">
                    <summary style="font-weight: 700; color: var(--color-obsidian);">${faq.q}</summary>
                    <p style="margin-top: 0.75rem; color: var(--color-text-muted); line-height: 1.6;">${faq.a}</p>
                  </details>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Service Fast Inquiry Card -->
          <div style="background: var(--color-cream); border: 1px solid var(--border-gold); border-radius: var(--radius-xl); padding: 2.25rem; box-shadow: var(--shadow-lg); position: sticky; top: 104px;">
            <span class="eyebrow" style="color: var(--color-gold-dark);">Priority Desk</span>
            <h3 style="font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: 0.75rem;">
              Request ${service.title}
            </h3>
            <p style="font-size: 0.88rem; color: var(--color-text-muted); margin-bottom: 1.5rem;">
              Fill in your contact info to receive quick quotation and assistance from our Bhopal desk.
            </p>

            <form onsubmit="handleServiceFastSubmit(event, '${service.title}')">
              <div class="form-group">
                <label class="form-label">Full Name *</label>
                <input type="text" name="name" class="form-control" placeholder="Your name" required />
              </div>

              <div class="form-group">
                <label class="form-label">Phone / WhatsApp *</label>
                <input type="tel" name="phone" class="form-control" placeholder="+91 98260 00000" required />
              </div>

              <div class="form-group">
                <label class="form-label">Email Address *</label>
                <input type="email" name="email" class="form-control" placeholder="name@domain.com" required />
              </div>

              <div class="form-group">
                <label class="form-label">Details / Requirements</label>
                <textarea name="notes" class="form-control" placeholder="Specify travel dates, sector, passenger count, or specific requirements..." style="min-height: 90px;"></textarea>
              </div>

              <button type="submit" class="btn btn-gold" style="width: 100%; margin-top: 0.5rem;">
                ${ICONS.sparkles} Submit Request
              </button>
            </form>

            <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--border-subtle); text-align: center;">
              <span style="font-size: 0.8rem; color: var(--color-text-muted);">Direct Desk Phone:</span><br/>
              <a href="tel:${company.phone}" style="font-weight: 700; color: var(--color-obsidian); font-size: 1.05rem;">
                ${company.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

async function handleServiceFastSubmit(e, serviceTitle) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  const enquiry = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    destination: `Service Desk: ${serviceTitle}`,
    travelMonth: "As requested",
    travelers: "1+",
    budgetPerPerson: "Standard Service Quote",
    notes: formData.get("notes") || "No additional notes."
  };

  await window.vayuStore.addEnquiry(enquiry);
  form.reset();

  showToast(
    "Service Request Logged",
    `Thank you, ${enquiry.name}. Our ${serviceTitle} desk at Bhopal headquarters will contact you shortly.`
  );
}
