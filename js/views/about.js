/* ==========================================================================
   VAYU HOLIDAYS — ABOUT US PAGE (Complete Overwrite - 2025)
   Sections: Hero, Welcome, Founder, Vision/Mission, Business Verticals, 
   Leadership Team, Leadership Spotlight, Why Vayu, Contact CTA
   ========================================================================== */

async function renderAboutView() {
  const company = await window.vayuStore.getCompany();
  const leadership = company.leadership || [];
  const waNumber = (company.whatsapp || "918889754969").replace(/[^0-9]/g, "");

  // Find specific leaders
  const founder = leadership.find(l => l.role === "Founder");
  const simran = leadership.find(l => l.name.includes("Simran"));
  const neeraj = leadership.find(l => l.name.includes("Neeraj"));
  const shubham = leadership.find(l => l.name.includes("Shubham"));

  return `
    <!-- SECTION 1: HERO / BANNER -->
    <div style="background: linear-gradient(135deg, #14203A 0%, #2B4F9A 100%); color: #fff; padding: 5rem 0 4rem; text-align: center;">
      <div class="container">
        <h1 style="font-size: 3rem; font-weight: 700; margin-bottom: 1rem; font-family: var(--font-serif, Georgia, serif);">
          About Vayu Holidays
        </h1>
        <p style="font-size: 1.3rem; margin-bottom: 0.5rem; opacity: 0.95;">
          Domestic & International Travel | Corporate Tours | MICE | Group Travel
        </p>
        <p style="font-size: 1.5rem; font-weight: 600; color: #D4AF37; margin: 1.5rem 0 0.5rem; font-family: var(--font-serif, Georgia, serif);">
          Travel + Explore + Live
        </p>
        <p style="font-size: 0.95rem; opacity: 0.8;">
          A Division of Vayu Build well Private Limited
        </p>
      </div>
    </div>

    <!-- SECTION 2: WELCOME MESSAGE -->
    <section class="section" style="background: #fff; padding: 4rem 0;">
      <div class="container" style="max-width: 1100px;">
        <h2 style="font-size: 2.5rem; font-weight: 700; color: #14203A; margin-bottom: 2rem; text-align: center; font-family: var(--font-serif, Georgia, serif);">
          Welcome Message
        </h2>

        <div style="font-size: 1.1rem; line-height: 1.8; color: #333; margin-bottom: 2rem;">
          <p style="margin-bottom: 1.5rem;">
            At Vayu Holidays, we believe that every business journey is an opportunity to build relationships, exchange ideas and move organisations forward. Corporate travel is more than arranging tickets and hotel rooms—it requires careful planning, clear communication, dependable coordination and attention to every detail.
          </p>
          <p style="margin-bottom: 2rem;">
            Our aim is to make travel and event management simpler for organisations by bringing flights, accommodation, transfers, group movements, meetings, incentive programmes and event requirements together through one coordinated service. We work to understand each client's objectives, timelines, traveller preferences and budget before recommending a suitable solution.
          </p>
        </div>

        <div style="background: linear-gradient(135deg, #2B4F9A 0%, #14203A 100%); color: #fff; padding: 2.5rem; border-radius: 12px; border-left: 5px solid #D4AF37; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
          <p style="font-size: 1.25rem; font-style: italic; margin: 0; line-height: 1.7; text-align: center; font-family: var(--font-serif, Georgia, serif);">
            "A personal commitment to thoughtful planning, reliable coordination and professional service."
          </p>
        </div>
      </div>
    </section>

    <!-- SECTION 3: OUR FOUNDER -->
    <section class="section" style="background: #F8F9FA; padding: 4rem 0;">
      <div class="container" style="max-width: 1100px;">
        <h2 style="font-size: 2.5rem; font-weight: 700; color: #14203A; margin-bottom: 3rem; text-align: center; font-family: var(--font-serif, Georgia, serif);">
          Our Founder
        </h2>

        ${founder ? `
        <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 3rem; align-items: start;">
          <div style="text-align: center;">
            <img 
              src="${founder.image || '/icons/founder.jpeg'}" 
              alt="${founder.name}" 
              style="width: 220px; height: 220px; border-radius: 50%; object-fit: cover; border: 5px solid #D4AF37; box-shadow: 0 8px 20px rgba(0,0,0,0.15); margin-bottom: 1.5rem;" 
            />
            <h3 style="font-size: 1.6rem; font-weight: 700; color: #14203A; margin-bottom: 0.5rem; font-family: var(--font-serif, Georgia, serif);">
              ${founder.name}
            </h3>
            <p style="font-size: 0.95rem; color: #2B4F9A; font-weight: 600; line-height: 1.6;">
              ${founder.title || 'Former Member – Indian Air Force Akash Ganga Team | Parachute Jump Instructor | Entrepreneur | Spiritual Visionary'}
            </p>
          </div>

          <div style="font-size: 1.05rem; line-height: 1.8; color: #333;">
            <p style="margin-bottom: 1.5rem;">
              Vayu Holidays is inspired by his vision, values, and entrepreneurial spirit. His distinguished service in the Indian Air Force shaped his leadership philosophy around discipline, courage, precision, teamwork, responsibility, and commitment to excellence.
            </p>
            <p style="margin-bottom: 1.5rem;">
              After retirement, he entered entrepreneurship and played an active role in developing business ventures, particularly in the real estate sector.
            </p>
            <p style="margin-bottom: 0;">
              As founder of Vayu Holidays, he brings these principles into travel and tourism with a vision to make travel more than simply visiting a destination.
            </p>
          </div>
        </div>
        ` : ''}
      </div>
    </section>

    <!-- SECTION 4: VISION & MISSION -->
    <section class="section" style="background: #fff; padding: 4rem 0;">
      <div class="container" style="max-width: 1100px;">
        <h2 style="font-size: 2.5rem; font-weight: 700; color: #14203A; margin-bottom: 3rem; text-align: center; font-family: var(--font-serif, Georgia, serif);">
          Vision & Mission
        </h2>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem;">
          <!-- Vision Card -->
          <div style="background: linear-gradient(135deg, #2B4F9A 0%, #14203A 100%); color: #fff; padding: 2.5rem; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            <h3 style="font-size: 1.8rem; font-weight: 700; margin-bottom: 1.5rem; color: #D4AF37; font-family: var(--font-serif, Georgia, serif);">
              Vision
            </h3>
            <p style="font-size: 1.05rem; line-height: 1.8; margin: 0;">
              To become a trusted and preferred travel partner for businesses and travellers by delivering well-planned, dependable and value-conscious travel experiences.
            </p>
          </div>

          <!-- Mission Card -->
          <div style="background: linear-gradient(135deg, #D4AF37 0%, #B8941F 100%); color: #14203A; padding: 2.5rem; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            <h3 style="font-size: 1.8rem; font-weight: 700; margin-bottom: 1.5rem; font-family: var(--font-serif, Georgia, serif);">
              Mission
            </h3>
            <p style="font-size: 1.05rem; line-height: 1.8; margin: 0;">
              To make corporate and leisure travel easier through end-to-end planning, transparent quotations and practical travel options, while building long-term client relationships through responsive service and creating meaningful corporate tours, incentive programmes and event experiences.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 5: OUR BUSINESS VERTICALS -->
    <section class="section" style="background: #F8F9FA; padding: 4rem 0;">
      <div class="container" style="max-width: 1200px;">
        <h2 style="font-size: 2.5rem; font-weight: 700; color: #14203A; margin-bottom: 1.5rem; text-align: center; font-family: var(--font-serif, Georgia, serif);">
          Our Services / Our Business Verticals
        </h2>

        <p style="font-size: 1.1rem; line-height: 1.8; color: #333; text-align: center; max-width: 900px; margin: 0 auto 3rem;">
          With a diverse portfolio across multiple industries, Vayu Group operates through strategic business verticals focused on creating sustainable value, delivering quality services, and building long-term relationships.
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 2rem; margin-bottom: 3rem;">
          <!-- Vertical 1 -->
          <div style="background: #fff; border: 2px solid #2B4F9A; border-radius: 12px; padding: 2rem; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
            <div style="font-size: 3rem; margin-bottom: 1rem;">✈️</div>
            <h4 style="font-size: 1.2rem; font-weight: 700; color: #14203A; margin: 0;">Travel, Tourism & Adventure</h4>
          </div>

          <!-- Vertical 2 -->
          <div style="background: #fff; border: 2px solid #2B4F9A; border-radius: 12px; padding: 2rem; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🏗️</div>
            <h4 style="font-size: 1.2rem; font-weight: 700; color: #14203A; margin: 0;">Real Estate & Infrastructure</h4>
          </div>

          <!-- Vertical 3 -->
          <div style="background: #fff; border: 2px solid #2B4F9A; border-radius: 12px; padding: 2rem; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🏨</div>
            <h4 style="font-size: 1.2rem; font-weight: 700; color: #14203A; margin: 0;">Hospitality & Hotels</h4>
          </div>

          <!-- Vertical 4 -->
          <div style="background: #fff; border: 2px solid #2B4F9A; border-radius: 12px; padding: 2rem; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🌾</div>
            <h4 style="font-size: 1.2rem; font-weight: 700; color: #14203A; margin: 0;">Agriculture & Agribusiness</h4>
          </div>

          <!-- Vertical 5 -->
          <div style="background: #fff; border: 2px solid #2B4F9A; border-radius: 12px; padding: 2rem; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🕉️</div>
            <h4 style="font-size: 1.2rem; font-weight: 700; color: #14203A; margin: 0;">Spiritual & Religious Events</h4>
          </div>
        </div>

        <div style="background: #14203A; color: #fff; padding: 2rem; border-radius: 12px; text-align: center;">
          <p style="font-size: 1.05rem; line-height: 1.8; margin-bottom: 0.8rem;">
            ✓ We are committed to delivering quality, reliable, and professional solutions across diverse sectors.
          </p>
          <p style="font-size: 1.05rem; line-height: 1.8; margin: 0;">
            ✓ Our focus is on creating value-driven services and memorable experiences for our clients and partners.
          </p>
        </div>
      </div>
    </section>

    <!-- SECTION 6: OUR LEADERSHIP TEAM -->
    <section class="section" style="background: #fff; padding: 4rem 0;">
      <div class="container" style="max-width: 1200px;">
        <h2 style="font-size: 2.5rem; font-weight: 700; color: #14203A; margin-bottom: 1.5rem; text-align: center; font-family: var(--font-serif, Georgia, serif);">
          Our Best Team
        </h2>

        <p style="font-size: 1.1rem; line-height: 1.8; color: #333; text-align: center; max-width: 900px; margin: 0 auto 3rem;">
          At Vayu Holidays, our leadership team is committed to building a trusted travel brand driven by vision, expertise, innovation, and customer satisfaction. Together, we strive to create seamless, memorable, and exceptional travel experiences while continuously growing with our partners, clients, and team.
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2.5rem;">
          ${simran ? `
          <div style="background: #F8F9FA; border: 2px solid #D4AF37; border-radius: 12px; padding: 2.5rem; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
            <img 
              src="${simran.image || '/icons/simran.jpeg'}" 
              alt="${simran.name}" 
              style="width: 150px; height: 150px; border-radius: 50%; object-fit: cover; border: 4px solid #D4AF37; box-shadow: 0 4px 12px rgba(0,0,0,0.1); margin-bottom: 1.5rem;" 
            />
            <h3 style="font-size: 1.5rem; font-weight: 700; color: #14203A; margin-bottom: 0.5rem; font-family: var(--font-serif, Georgia, serif);">
              ${simran.name}
            </h3>
            <p style="font-size: 0.9rem; color: #2B4F9A; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 1rem;">
              ${simran.role}
            </p>
            <p style="font-size: 1rem; line-height: 1.7; color: #333; margin: 0;">
              A visionary leader driving Vayu Holidays with strategic excellence, innovation, and a strong commitment to delivering exceptional travel experiences.
            </p>
          </div>
          ` : ''}

          ${neeraj ? `
          <div style="background: #F8F9FA; border: 2px solid #D4AF37; border-radius: 12px; padding: 2.5rem; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
            <img 
              src="${neeraj.image || '/icons/neeraj.jpeg'}" 
              alt="${neeraj.name}" 
              style="width: 150px; height: 150px; border-radius: 50%; object-fit: cover; border: 4px solid #D4AF37; box-shadow: 0 4px 12px rgba(0,0,0,0.1); margin-bottom: 1.5rem;" 
            />
            <h3 style="font-size: 1.5rem; font-weight: 700; color: #14203A; margin-bottom: 0.5rem; font-family: var(--font-serif, Georgia, serif);">
              ${neeraj.name}
            </h3>
            <p style="font-size: 0.9rem; color: #2B4F9A; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 1rem;">
              ${neeraj.role}
            </p>
            <p style="font-size: 1rem; line-height: 1.7; color: #333; margin: 0;">
              A dynamic hospitality professional bringing strong leadership, industry expertise, and a commitment to excellence in travel and guest experiences.
            </p>
          </div>
          ` : ''}

          ${shubham ? `
          <div style="background: #F8F9FA; border: 2px solid #D4AF37; border-radius: 12px; padding: 2.5rem; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
            <img 
              src="${shubham.image || '/icons/sub.jpeg'}" 
              alt="${shubham.name}" 
              style="width: 150px; height: 150px; border-radius: 50%; object-fit: cover; border: 4px solid #D4AF37; box-shadow: 0 4px 12px rgba(0,0,0,0.1); margin-bottom: 1.5rem;" 
            />
            <h3 style="font-size: 1.5rem; font-weight: 700; color: #14203A; margin-bottom: 0.5rem; font-family: var(--font-serif, Georgia, serif);">
              ${shubham.name}
            </h3>
            <p style="font-size: 0.9rem; color: #2B4F9A; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 1rem;">
              ${shubham.role}
            </p>
            <p style="font-size: 1rem; line-height: 1.7; color: #333; margin: 0;">
              A results-driven leader focused on strategic growth, operational excellence, and creating exceptional travel experiences for every customer.
            </p>
          </div>
          ` : ''}
        </div>
      </div>
    </section>

    <!-- SECTION 7: LEADERSHIP SPOTLIGHT -->
    <section class="section" style="background: #F8F9FA; padding: 4rem 0;">
      <div class="container" style="max-width: 1100px;">
        <h2 style="font-size: 2.5rem; font-weight: 700; color: #14203A; margin-bottom: 3rem; text-align: center; font-family: var(--font-serif, Georgia, serif);">
          Leadership Spotlight
        </h2>

        ${neeraj ? `
        <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 3rem; align-items: start; background: #fff; padding: 3rem; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); border-left: 5px solid #D4AF37;">
          <div style="text-align: center;">
            <img 
              src="${neeraj.image || '/icons/neeraj.jpeg'}" 
              alt="${neeraj.name}" 
              style="width: 200px; height: 200px; border-radius: 50%; object-fit: cover; border: 4px solid #2B4F9A; box-shadow: 0 6px 16px rgba(0,0,0,0.12); margin-bottom: 1rem;" 
            />
            <h3 style="font-size: 1.5rem; font-weight: 700; color: #14203A; margin-bottom: 0.3rem; font-family: var(--font-serif, Georgia, serif);">
              ${neeraj.name}
            </h3>
            <p style="font-size: 1rem; color: #2B4F9A; font-weight: 600;">
              Director of Vayu Holidays
            </p>
          </div>

          <div style="font-size: 1.05rem; line-height: 1.8; color: #333;">
            <p style="margin-bottom: 1.5rem;">
              A hospitality professional and entrepreneur, Neeraj Singh Nayal is a Hotel Management graduate from IHM Dehradun with over 9 years of leadership experience at globally recognized hospitality brands such as Marriott and Accor.
            </p>
            <p style="margin-bottom: 1.5rem;">
              His professional expertise includes hotel operations, pre-openings, revenue management, business expansion, and brand development.
            </p>
            <p style="margin-bottom: 0;">
              As Director of Vayu Holidays, he brings strategic vision, hospitality expertise, and operational knowledge to support the development of a trusted travel and hospitality brand focused on exceptional customer experiences, sustainable growth, and professionally managed services.
            </p>
          </div>
        </div>
        ` : ''}
      </div>
    </section>

    <!-- SECTION 8: WHY VAYU HOLIDAYS? -->
    <section class="section" style="background: #fff; padding: 4rem 0;">
      <div class="container" style="max-width: 1100px;">
        <h2 style="font-size: 2.5rem; font-weight: 700; color: #14203A; margin-bottom: 2rem; text-align: center; font-family: var(--font-serif, Georgia, serif);">
          Why Vayu Holidays?
        </h2>

        <div style="font-size: 1.1rem; line-height: 1.8; color: #333;">
          <p style="margin-bottom: 1.5rem;">
            At Vayu Holidays, we believe that a holiday is much more than a destination. It is an opportunity to discover, reconnect, celebrate, explore, and create memories that last a lifetime.
          </p>
          <p style="margin-bottom: 1.5rem;">
            Our approach combines the discipline and leadership values inspired by the founder's Indian Air Force background with professional hospitality expertise and a customer-focused approach.
          </p>
          <p style="margin-bottom: 0;">
            Whether the purpose is relaxation, adventure, family time, cultural exploration, corporate travel, or spiritual discovery, our goal is to provide travellers with carefully planned experiences and dependable support.
          </p>
        </div>
      </div>
    </section>

    <!-- SECTION 9: GET IN TOUCH (CTA) -->
    <section class="section" style="background: linear-gradient(135deg, #14203A 0%, #2B4F9A 100%); color: #fff; padding: 4rem 0; text-align: center;">
      <div class="container" style="max-width: 900px;">
        <h2 style="font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem; font-family: var(--font-serif, Georgia, serif);">
          Get In Touch
        </h2>
        <p style="font-size: 1.5rem; color: #D4AF37; margin-bottom: 2.5rem; font-family: var(--font-serif, Georgia, serif);">
          Discover the World, Experience the Difference
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; text-align: left; margin-bottom: 2.5rem;">
          <div>
            <p style="font-size: 0.9rem; color: rgba(255,255,255,0.8); margin-bottom: 0.3rem;">📞 Phone</p>
            <p style="font-size: 1.05rem; font-weight: 600; margin: 0;">
              <a href="tel:+918889754969" style="color: #fff; text-decoration: none;">+91 88897 54969</a><br/>
              <a href="tel:+918828352311" style="color: #fff; text-decoration: none;">+91 88283 52311</a>
            </p>
          </div>

          <div>
            <p style="font-size: 0.9rem; color: rgba(255,255,255,0.8); margin-bottom: 0.3rem;">📧 Email</p>
            <p style="font-size: 1.05rem; font-weight: 600; margin: 0;">
              <a href="mailto:info@vayuholidays.com" style="color: #fff; text-decoration: none;">info@vayuholidays.com</a><br/>
              <a href="mailto:sales@vayuholidays.com" style="color: #fff; text-decoration: none;">sales@vayuholidays.com</a>
            </p>
          </div>

          <div>
            <p style="font-size: 0.9rem; color: rgba(255,255,255,0.8); margin-bottom: 0.3rem;">🌐 Website</p>
            <p style="font-size: 1.05rem; font-weight: 600; margin: 0;">
              <a href="https://www.vayuholidays.com" style="color: #fff; text-decoration: none;">www.vayuholidays.com</a>
            </p>
          </div>

          <div>
            <p style="font-size: 0.9rem; color: rgba(255,255,255,0.8); margin-bottom: 0.3rem;">📍 Location</p>
            <p style="font-size: 1.05rem; font-weight: 600; margin: 0;">
              Vayu Pride Residency<br/>Raksha Vihar, Bhopal
            </p>
          </div>
        </div>

        <a href="/contact" class="btn btn-primary" style="background: #D4AF37; color: #14203A; padding: 1rem 3rem; font-size: 1.1rem; font-weight: 700; border-radius: 8px; text-decoration: none; display: inline-block; border: none; box-shadow: 0 4px 12px rgba(212,175,55,0.3); transition: all 0.3s ease;">
          Contact Us
        </a>
      </div>
    </section>
  `;
}
