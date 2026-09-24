/* ==========================================================================
   VAYU HOLIDAYS — ABOUT US VIEW (Heritage, Leadership & Bhopal Headquarters)
   ========================================================================== */

async function renderAboutView() {
  const company = await window.vayuStore.getCompany();

  return `
    <div class="package-detail-header">
      <div class="container">
        <div class="breadcrumbs">
          <a href="#/">Home</a>
          <span class="breadcrumb-separator">/</span>
          <span style="color: var(--color-obsidian); font-weight: 600;">About Us</span>
        </div>

        <div class="package-detail-title-wrap">
          <div>
            <span class="eyebrow">Our Philosophy & Heritage</span>
            <h1 class="package-detail-title">About Vayu Holidays</h1>
            <p style="font-size: 1.15rem; max-width: 720px; color: var(--color-text-muted); line-height: 1.7;">
              Founded with the vision to deliver original, minimal luxury travel, Vayu Holidays combines the warmth of personal hospitality with the precision of an international travel atelier.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- STORY & MISSION -->
    <section class="section">
      <div class="container">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4.5rem; align-items: center;">
          <div>
            <span class="eyebrow">The Vayu Standard</span>
            <h2 class="section-title">Your Journey. Beautifully Planned.</h2>
            <p style="font-size: 1.05rem; line-height: 1.8; color: var(--color-text-main); margin-bottom: 1.5rem;">
              At Vayu Holidays, we believe that true luxury travel is never loud or cookie-cutter. It is found in unhurried mornings on misty tea estates, private sunset shikaras, seamless international airport transfers, and the absolute confidence that a dedicated concierge is always one message away.
            </p>
            <p style="font-size: 1.05rem; line-height: 1.8; color: var(--color-text-muted); margin-bottom: 2rem;">
              Headquartered at <strong>Raksha Vihar, Vayu Residency, Airport Road in Bhopal</strong>, we serve discerning families, honeymoon couples, and corporate delegations across Madhya Pradesh and nationwide. We eliminate guesswork by delivering itemized proposals with zero hidden costs.
            </p>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--border-subtle);">
              <div>
                <div style="font-family: var(--font-serif); font-size: 2.2rem; color: var(--color-gold-dark); font-weight: 700;">100%</div>
                <div style="font-size: 0.85rem; color: var(--color-text-muted);">Custom Tailored Routes</div>
              </div>
              <div>
                <div style="font-family: var(--font-serif); font-size: 2.2rem; color: var(--color-gold-dark); font-weight: 700;">24/7</div>
                <div style="font-size: 0.85rem; color: var(--color-text-muted);">Active Concierge Care</div>
              </div>
            </div>
          </div>

          <div style="position: relative;">
            <img 
              src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=80" 
              alt="Vayu Holidays Luxury Destination" 
              style="border-radius: var(--radius-xl); border: 1px solid var(--border-gold); box-shadow: var(--shadow-xl); width: 100%;" 
            />
            <div style="position: absolute; bottom: -25px; right: -25px; background: var(--color-obsidian); color: var(--color-ivory); padding: 1.5rem 2rem; border-radius: var(--radius-lg); border: 1px solid var(--border-gold); max-width: 280px; box-shadow: var(--shadow-lg);">
              <div style="color: var(--color-gold); font-size: 1.25rem; margin-bottom: 0.5rem;">${ICONS.shield}</div>
              <div style="font-family: var(--font-serif); font-size: 1.15rem; margin-bottom: 0.25rem;">Bhopal Headquarters</div>
              <div style="font-size: 0.8rem; color: var(--color-text-inverse-muted);">Raksha Vihar, Airport Road</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EXECUTIVE LEADERSHIP PROFILES -->
    <section class="section section-sand">
      <div class="container">
        <div class="section-header text-center">
          <span class="eyebrow">Executive Stewardship</span>
          <h2 class="section-title">Leadership Team</h2>
          <p class="section-desc">
            Guided by decades of collective dedication to hospitality excellence, trust, and guest satisfaction.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.5rem;">
          <!-- Leader 1: Simran Singh Sengar -->
          <div style="background: var(--color-cream); border: 1px solid var(--border-gold); border-radius: var(--radius-lg); padding: 2.5rem 2rem; text-align: center; box-shadow: var(--shadow-sm); display: flex; flex-direction: column;">
            <div style="width: 90px; height: 90px; border-radius: 50%; background: linear-gradient(135deg, var(--color-obsidian) 0%, var(--color-slate-dark) 100%); color: var(--color-gold); display: flex; align-items: center; justify-content: center; font-family: var(--font-serif); font-size: 2rem; font-weight: 700; margin: 0 auto 1.5rem; border: 2px solid var(--border-gold);">
              SS
            </div>
            <h3 style="font-family: var(--font-serif); font-size: 1.45rem; margin-bottom: 0.35rem; color: var(--color-obsidian);">
              Simran Singh Sengar
            </h3>
            <div style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.14em; color: var(--color-gold-dark); font-weight: 700; margin-bottom: 1.25rem;">
              Chairman
            </div>
            <p style="font-size: 0.92rem; color: var(--color-text-muted); line-height: 1.7; flex-grow: 1;">
              Providing strategic vision and ethical governance, Simran Singh Sengar steers Vayu Holidays with an unwavering commitment to transparent business standards and long-standing client relationships.
            </p>
          </div>

          <!-- Leader 2: Shubham Vishwkarma -->
          <div style="background: var(--color-cream); border: 1px solid var(--border-gold); border-radius: var(--radius-lg); padding: 2.5rem 2rem; text-align: center; box-shadow: var(--shadow-sm); display: flex; flex-direction: column;">
            <div style="width: 90px; height: 90px; border-radius: 50%; background: linear-gradient(135deg, var(--color-obsidian) 0%, var(--color-slate-dark) 100%); color: var(--color-gold); display: flex; align-items: center; justify-content: center; font-family: var(--font-serif); font-size: 2rem; font-weight: 700; margin: 0 auto 1.5rem; border: 2px solid var(--border-gold);">
              SV
            </div>
            <h3 style="font-family: var(--font-serif); font-size: 1.45rem; margin-bottom: 0.35rem; color: var(--color-obsidian);">
              Shubham Vishwkarma
            </h3>
            <div style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.14em; color: var(--color-gold-dark); font-weight: 700; margin-bottom: 1.25rem;">
              Managing Director & CEO
            </div>
            <p style="font-size: 0.92rem; color: var(--color-text-muted); line-height: 1.7; flex-grow: 1;">
              Driving daily operational excellence, airline and hotel alliances, and bespoke itinerary engineering. Shubham ensures that every guest journey reflects quiet elegance, punctuality, and concierge care.
            </p>
          </div>

          <!-- Leader 3: Hardik Singh Sengar -->
          <div style="background: var(--color-cream); border: 1px solid var(--border-gold); border-radius: var(--radius-lg); padding: 2.5rem 2rem; text-align: center; box-shadow: var(--shadow-sm); display: flex; flex-direction: column;">
            <div style="width: 90px; height: 90px; border-radius: 50%; background: linear-gradient(135deg, var(--color-obsidian) 0%, var(--color-slate-dark) 100%); color: var(--color-gold); display: flex; align-items: center; justify-content: center; font-family: var(--font-serif); font-size: 2rem; font-weight: 700; margin: 0 auto 1.5rem; border: 2px solid var(--border-gold);">
              HS
            </div>
            <h3 style="font-family: var(--font-serif); font-size: 1.45rem; margin-bottom: 0.35rem; color: var(--color-obsidian);">
              Hardik Singh Sengar
            </h3>
            <div style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.14em; color: var(--color-gold-dark); font-weight: 700; margin-bottom: 1.25rem;">
              Director
            </div>
            <p style="font-size: 0.92rem; color: var(--color-text-muted); line-height: 1.7; flex-grow: 1;">
              Leading strategic corporate partnerships, domestic route expansion across India, and specialized MICE offsites. Hardik works closely with our ground partners to guarantee pristine service delivery.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CORE VALUES -->
    <section class="section">
      <div class="container">
        <div class="section-header text-center">
          <span class="eyebrow">Our Guiding Compass</span>
          <h2 class="section-title">The Four Core Commitments</h2>
          <p class="section-desc">Every recommendation we make is anchored in these four non-negotiable standards.</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
          <div style="padding: 2rem; border-left: 3px solid var(--color-gold); background: var(--color-cream); border-radius: 0 var(--radius-md) var(--radius-md) 0;">
            <h4 style="font-family: var(--font-serif); font-size: 1.25rem; margin-bottom: 0.5rem;">Total Transparency</h4>
            <p style="font-size: 0.92rem; color: var(--color-text-muted);">
              Clear, itemized pricing. We detail every inclusion, hotel tier, vehicle type, and tax so you know precisely what you are investing in.
            </p>
          </div>

          <div style="padding: 2rem; border-left: 3px solid var(--color-gold); background: var(--color-cream); border-radius: 0 var(--radius-md) var(--radius-md) 0;">
            <h4 style="font-family: var(--font-serif); font-size: 1.25rem; margin-bottom: 0.5rem;">Curated Sanctuaries</h4>
            <p style="font-size: 0.92rem; color: var(--color-text-muted);">
              We never book properties blindly. Every hotel, houseboat, and resort is vetted for aesthetic poise, cleanliness, and guest hospitality.
            </p>
          </div>

          <div style="padding: 2rem; border-left: 3px solid var(--color-gold); background: var(--color-cream); border-radius: 0 var(--radius-md) var(--radius-md) 0;">
            <h4 style="font-family: var(--font-serif); font-size: 1.25rem; margin-bottom: 0.5rem;">Concierge Accountability</h4>
            <p style="font-size: 0.92rem; color: var(--color-text-muted);">
              You are never treated as a support ticket. You receive direct phone and WhatsApp access to senior travel directors in Bhopal.
            </p>
          </div>

          <div style="padding: 2rem; border-left: 3px solid var(--color-gold); background: var(--color-cream); border-radius: 0 var(--radius-md) var(--radius-md) 0;">
            <h4 style="font-family: var(--font-serif); font-size: 1.25rem; margin-bottom: 0.5rem;">Original Design</h4>
            <p style="font-size: 0.92rem; color: var(--color-text-muted);">
              No generic bus-tour schedules. We design your day around optimal lighting, crowd avoidance, and authentic cultural encounters.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- BHOPAL OFFICE CARD & VISIT INVITATION -->
    <section class="section section-sand" style="padding-bottom: 5rem;">
      <div class="container">
        <div style="background: var(--color-cream); border: 1px solid var(--border-gold); border-radius: var(--radius-xl); padding: 3.5rem; display: grid; grid-template-columns: 1.2fr 1fr; gap: 3.5rem; align-items: center;">
          <div>
            <span class="eyebrow">Personal Hospitality</span>
            <h2 style="font-family: var(--font-serif); font-size: 2rem; margin-bottom: 1rem;">
              Visit Us in Bhopal
            </h2>
            <p style="font-size: 1.05rem; line-height: 1.7; color: var(--color-text-main); margin-bottom: 1.5rem;">
              We welcome travelers to visit our office on Airport Road for an in-person journey consultation over freshly brewed coffee. Sit down with our itinerary architects and review private options together.
            </p>

            <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 2rem; font-size: 0.95rem;">
              <div><strong>Address:</strong> ${company.office}</div>
              <div><strong>Direct Phone:</strong> <a href="tel:${company.phone}">${company.phone}</a></div>
              <div><strong>Working Hours:</strong> ${company.hours}</div>
            </div>

            <div style="display: flex; gap: 1rem;">
              <a href="#/contact" class="btn btn-primary">Find Us on Map</a>
              <button class="btn btn-gold" onclick="openEnquiryModal({ title: 'Schedule Office Consultation' })">
                Schedule Meeting
              </button>
            </div>
          </div>

          <div style="background: var(--color-sand); border-radius: var(--radius-lg); padding: 2rem; border: 1px solid var(--border-subtle); text-align: center;">
            <div style="color: var(--color-gold-dark); margin-bottom: 1rem;">${ICONS.mapPin}</div>
            <h4 style="font-family: var(--font-serif); font-size: 1.35rem; margin-bottom: 0.5rem;">Vayu Residency, Airport Road</h4>
            <p style="font-size: 0.88rem; color: var(--color-text-muted); margin-bottom: 1.25rem;">
              Easily accessible from Raja Bhoj Airport Bhopal, VIP Road, and surrounding neighborhoods.
            </p>
            <a href="https://wa.me/919826012345?text=${encodeURIComponent('Hello Vayu Holidays! I would like to schedule a visit to your Airport Road Bhopal office.')}" target="_blank" rel="noopener" class="btn btn-whatsapp" style="width: 100%;">
              ${ICONS.whatsapp} WhatsApp For Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}
