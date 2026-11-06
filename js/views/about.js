/* ==========================================================================
   VAYU HOLIDAYS — ABOUT US VIEW (Company Profile Based)
   ========================================================================== */

async function renderAboutView() {
  const company      = await window.vayuStore.getCompany();
  const pageSettings = await window.vayuStore.getPageSettings();
  const leadership   = (company.leadership || []);
  const waNumber     = (company.whatsapp || "918889754969").replace(/[^0-9]/g, "");

  // Get founder (first leader) and rest of team
  const founder = leadership[0];
  const team = leadership.slice(1);

  return `
    <div class="package-detail-header">
      <div class="container">
        <div class="breadcrumbs">
          <a href="/">Home</a>
          <span class="breadcrumb-separator">/</span>
          <span style="color: var(--color-obsidian); font-weight: 600;">About Us</span>
        </div>

        <div class="package-detail-title-wrap">
          <div>
            <span class="eyebrow">Company Profile</span>
            <h1 class="package-detail-title">About Vayu Holidays</h1>
            <p style="font-size: 1.15rem; max-width: 720px; color: var(--color-text-muted); line-height: 1.7;">
              A Division of Vayu Build well Private Limited<br/>
              Domestic & International Travel | Corporate Tours | MICE | Group Travel
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- WELCOME MESSAGE -->
    <section class="section">
      <div class="container">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4.5rem; align-items: center;">
          <div>
            <span class="eyebrow">Welcome Message</span>
            <h2 class="section-title">A Personal Commitment to Excellence</h2>
            <p style="font-size: 1.05rem; line-height: 1.8; color: var(--color-text-main); margin-bottom: 1.5rem;">
              At Vayu Holidays, we believe that every business journey is an opportunity to build relationships, exchange ideas and move organisations forward. Corporate travel is more than arranging tickets and hotel rooms—it requires careful planning, clear communication, dependable coordination and attention to every detail.
            </p>
            <p style="font-size: 1.05rem; line-height: 1.8; color: var(--color-text-muted); margin-bottom: 2rem;">
              Our aim is to make travel and event management simpler for organisations by bringing flights, accommodation, transfers, group movements, meetings, incentive programmes and event requirements together through one coordinated service. We work to understand each client's objectives, timelines, traveller preferences and budget before recommending a suitable solution.
            </p>

            <div style="background: var(--color-obsidian); color: white; padding: 1.75rem 2rem; border-radius: var(--radius-lg); border-left: 4px solid var(--color-gold);">
              <p style="font-size: 1rem; line-height: 1.7; color: rgba(255,255,255,0.9); font-style: italic;">
                "A personal commitment to thoughtful planning, reliable coordination and professional service."
              </p>
            </div>
          </div>

          <div style="position: relative;">
            <img 
              src="/icons/headquator.png" 
              alt="Vayu Holidays Headquarters — Vayu Pride Residency, Raksha Vihar, Bhopal" 
              style="border-radius: var(--radius-xl); border: 1px solid var(--border-gold); box-shadow: var(--shadow-xl); width: 100%; object-fit: cover;" 
            />
          </div>
        </div>
      </div>
    </section>

    <!-- OUR FOUNDER -->
    ${founder ? `
    <section class="section section-sand">
      <div class="container">
        <div style="display: grid; grid-template-columns: 1fr 1.5fr; gap: 4rem; align-items: center;">
          <div style="text-align: center;">
            <div style="width: 280px; height: 280px; border-radius: 50%; overflow: hidden; margin: 0 auto 1.5rem; border: 4px solid var(--color-gold); box-shadow: var(--shadow-xl);">
              <img src="/icons/founder.jpeg" alt="${founder.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='/icons/nobg.png'"/>
            </div>
            <h3 style="font-family: var(--font-serif); font-size: 1.75rem; color: var(--color-obsidian); margin-bottom: 0.5rem;">${founder.name}</h3>
            <p style="color: var(--color-gold-dark); font-weight: 600; font-size: 1rem; text-transform: uppercase; letter-spacing: 0.08em;">${founder.role}</p>
          </div>

          <div>
            <span class="eyebrow">Our Founder</span>
            <h2 class="section-title">Inspired by Vision, Values & Entrepreneurial Spirit</h2>
            
            <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 2rem;">
              <div style="display: flex; align-items: start; gap: 1rem;">
                <div style="flex-shrink: 0; width: 40px; height: 40px; border-radius: 50%; background: var(--color-gold); display: flex; align-items: center; justify-content: center; color: white; font-weight: 700;">1</div>
                <div>
                  <h4 style="font-weight: 600; color: var(--color-obsidian); margin-bottom: 0.5rem;">Former Member – Indian Air Force Akash Ganga Team</h4>
                  <p style="color: var(--color-text-muted); line-height: 1.7;">His distinguished service in the Indian Air Force shaped his leadership philosophy around discipline, courage, precision, teamwork, responsibility, and commitment to excellence.</p>
                </div>
              </div>

              <div style="display: flex; align-items: start; gap: 1rem;">
                <div style="flex-shrink: 0; width: 40px; height: 40px; border-radius: 50%; background: var(--color-gold); display: flex; align-items: center; justify-content: center; color: white; font-weight: 700;">2</div>
                <div>
                  <h4 style="font-weight: 600; color: var(--color-obsidian); margin-bottom: 0.5rem;">Parachute Jump Instructor & Entrepreneur</h4>
                  <p style="color: var(--color-text-muted); line-height: 1.7;">After retirement, he entered entrepreneurship and played an active role in developing business ventures, particularly in the real estate sector.</p>
                </div>
              </div>

              <div style="display: flex; align-items: start; gap: 1rem;">
                <div style="flex-shrink: 0; width: 40px; height: 40px; border-radius: 50%; background: var(--color-gold); display: flex; align-items: center; justify-content: center; color: white; font-weight: 700;">3</div>
                <div>
                  <h4 style="font-weight: 600; color: var(--color-obsidian); margin-bottom: 0.5rem;">Spiritual Visionary</h4>
                  <p style="color: var(--color-text-muted); line-height: 1.7;">As founder of Vayu Holidays, he brings these principles into travel and tourism with a vision to make travel more than simply visiting a destination.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    ` : ''}

    <!-- VISION & MISSION -->
    <section class="section">
      <div class="container">
        <div class="section-header text-center">
          <span class="eyebrow">Our Purpose</span>
          <h2 class="section-title">Vision & Mission</h2>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin-top: 3rem;">
          <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 3rem; border-radius: var(--radius-xl); color: white; position: relative; overflow: hidden;">
            <div style="position: absolute; top: -50px; right: -50px; width: 150px; height: 150px; background: rgba(255,255,255,0.1); border-radius: 50%;"></div>
            <div style="position: relative; z-index: 1;">
              <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
                <div style="width: 60px; height: 60px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.75rem;">🎯</div>
                <h3 style="font-family: var(--font-serif); font-size: 2rem; color: white;">Vision</h3>
              </div>
              <p style="font-size: 1.05rem; line-height: 1.8; color: rgba(255,255,255,0.95);">
                To become a trusted and preferred travel partner for businesses and travellers by delivering well-planned, dependable and value-conscious travel experiences.
              </p>
            </div>
          </div>

          <div style="background: linear-gradient(135deg, #047857 0%, #10b981 100%); padding: 3rem; border-radius: var(--radius-xl); color: white; position: relative; overflow: hidden;">
            <div style="position: absolute; top: -50px; right: -50px; width: 150px; height: 150px; background: rgba(255,255,255,0.1); border-radius: 50%;"></div>
            <div style="position: relative; z-index: 1;">
              <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
                <div style="width: 60px; height: 60px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.75rem;">🚀</div>
                <h3 style="font-family: var(--font-serif); font-size: 2rem; color: white;">Mission</h3>
              </div>
              <p style="font-size: 1.05rem; line-height: 1.8; color: rgba(255,255,255,0.95);">
                To make corporate and leisure travel easier through end-to-end planning, transparent quotations and practical travel options, while building long-term client relationships through responsive service and creating meaningful corporate tours, incentive programmes and event experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- OUR SERVICES / BUSINESS VERTICALS -->
    <section class="section section-sand">
      <div class="container">
        <div class="section-header text-center">
          <span class="eyebrow">Our Business Verticals</span>
          <h2 class="section-title">Our Services</h2>
          <p class="section-desc">
            With a diverse portfolio across multiple industries, Vayu Group operates through strategic business verticals focused on creating sustainable value, delivering quality services, and building long-term relationships.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 2rem; margin-top: 3rem;">
          <div style="background: white; padding: 2rem; border-radius: var(--radius-lg); text-align: center; border: 1px solid var(--border-subtle); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-8px)'; this.style.boxShadow='var(--shadow-lg)'" onmouseout="this.style.transform=''; this.style.boxShadow=''">
            <div style="font-size: 3rem; margin-bottom: 1rem;">✈️</div>
            <h4 style="font-weight: 600; color: var(--color-obsidian); margin-bottom: 0.75rem;">Travel, Tourism & Adventure</h4>
            <p style="font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.6;">Curated travel experiences</p>
          </div>

          <div style="background: white; padding: 2rem; border-radius: var(--radius-lg); text-align: center; border: 1px solid var(--border-subtle); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-8px)'; this.style.boxShadow='var(--shadow-lg)'" onmouseout="this.style.transform=''; this.style.boxShadow=''">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🏢</div>
            <h4 style="font-weight: 600; color: var(--color-obsidian); margin-bottom: 0.75rem;">Real Estate & Infrastructure</h4>
            <p style="font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.6;">Property development</p>
          </div>

          <div style="background: white; padding: 2rem; border-radius: var(--radius-lg); text-align: center; border: 1px solid var(--border-subtle); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-8px)'; this.style.boxShadow='var(--shadow-lg)'" onmouseout="this.style.transform=''; this.style.boxShadow=''">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🏨</div>
            <h4 style="font-weight: 600; color: var(--color-obsidian); margin-bottom: 0.75rem;">Hospitality & Hotels</h4>
            <p style="font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.6;">Premium accommodations</p>
          </div>

          <div style="background: white; padding: 2rem; border-radius: var(--radius-lg); text-align: center; border: 1px solid var(--border-subtle); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-8px)'; this.style.boxShadow='var(--shadow-lg)'" onmouseout="this.style.transform=''; this.style.boxShadow=''">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🌾</div>
            <h4 style="font-weight: 600; color: var(--color-obsidian); margin-bottom: 0.75rem;">Agriculture & Agribusiness</h4>
            <p style="font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.6;">Sustainable farming</p>
          </div>

          <div style="background: white; padding: 2rem; border-radius: var(--radius-lg); text-align: center; border: 1px solid var(--border-subtle); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-8px)'; this.style.boxShadow='var(--shadow-lg)'" onmouseout="this.style.transform=''; this.style.boxShadow=''">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🙏</div>
            <h4 style="font-weight: 600; color: var(--color-obsidian); margin-bottom: 0.75rem;">Spiritual & Religious Events</h4>
            <p style="font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.6;">Pilgrimage & ceremonies</p>
          </div>
        </div>
      </div>
    </section>

    <!-- LEADERSHIP TEAM -->
    <section class="section">
      <div class="container">
        <div class="section-header text-center">
          <span class="eyebrow">Executive Stewardship</span>
          <h2 class="section-title">Our Best Team</h2>
          <p class="section-desc">
            At Vayu Holidays, our leadership team is committed to building a trusted travel brand driven by vision, expertise, innovation, and customer satisfaction. Together, we strive to create seamless, memorable, and exceptional travel experiences.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 3rem; margin-top: 3rem;">
          ${team.map(leader => {
            // Map leader names to their image files
            let leaderImage = '';
            if (leader.name.toLowerCase().includes('simran')) {
              leaderImage = '/icons/simran.jpeg';
            } else if (leader.name.toLowerCase().includes('shubham')) {
              leaderImage = '/icons/sub.jpeg';
            } else if (leader.name.toLowerCase().includes('neeraj')) {
              leaderImage = '/icons/neeraj.jpeg';
            }

            return `
            <div style="background: white; border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-md); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-8px)'; this.style.boxShadow='var(--shadow-xl)'" onmouseout="this.style.transform=''; this.style.boxShadow='var(--shadow-md)'">
              <div style="aspect-ratio: 1; overflow: hidden; background: var(--color-sand);">
                <img 
                  src="${leaderImage}" 
                  alt="${leader.name}" 
                  style="width: 100%; height: 100%; object-fit: cover;"
                  onerror="this.src='/icons/nobg.png'; this.style.objectFit='contain'; this.style.padding='2rem'"
                />
              </div>
              <div style="padding: 2rem;">
                <h3 style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--color-obsidian); margin-bottom: 0.5rem;">${leader.name}</h3>
                <div style="display: inline-block; background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; padding: 0.35rem 1rem; border-radius: var(--radius-full); font-size: 0.85rem; font-weight: 600; margin-bottom: 1rem;">${leader.role}</div>
                <p style="color: var(--color-text-muted); line-height: 1.7; font-size: 0.95rem;">${leader.bio}</p>
              </div>
            </div>
            `;
          }).join('')}
        </div>
      </div>
    </section>

    <!-- WHY VAYU HOLIDAYS -->
    <section class="section section-dark">
      <div class="container">
        <div class="section-header text-center">
          <span class="eyebrow" style="color: var(--color-gold-light);">Our Approach</span>
          <h2 class="section-title" style="color: white;">Why Vayu Holidays?</h2>
          <p class="section-desc" style="color: rgba(255,255,255,0.7);">
            At Vayu Holidays, we believe that a holiday is much more than a destination. It is an opportunity to discover, reconnect, celebrate, explore, and create memories that last a lifetime.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin-top: 3rem; align-items: center;">
          <div>
            <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80" alt="Luxury Travel" style="border-radius: var(--radius-xl); width: 100%;" />
          </div>
          <div style="color: white;">
            <p style="font-size: 1.05rem; line-height: 1.8; margin-bottom: 2rem; color: rgba(255,255,255,0.85);">
              Our approach combines the discipline and leadership values inspired by the founder's Indian Air Force background with professional hospitality expertise and a customer-focused approach.
            </p>
            <p style="font-size: 1.05rem; line-height: 1.8; color: rgba(255,255,255,0.85);">
              Whether the purpose is relaxation, adventure, family time, cultural exploration, corporate travel, or spiritual discovery, our goal is to provide travellers with carefully planned experiences and dependable support.
            </p>

            <div style="margin-top: 2.5rem;">
              <a href="/packages" class="btn btn-gold btn-lg">
                Explore Our Journeys ${ICONS.arrowRight}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT CTA -->
    <section class="section">
      <div class="container" style="text-align: center;">
        <h2 class="section-title">Get In Touch</h2>
        <p style="font-size: 1.1rem; color: var(--color-text-muted); margin-bottom: 2.5rem; max-width: 600px; margin-left: auto; margin-right: auto;">
          Discover the World, Experience the Difference
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; max-width: 900px; margin: 0 auto 3rem;">
          <div>
            <div style="color: var(--color-gold); font-size: 2rem; margin-bottom: 1rem;">${ICONS.phone}</div>
            <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Phone Number</h4>
            <a href="tel:+918889754969" style="color: var(--color-text-main);">+91 88897 54969</a><br/>
            <a href="tel:+918828352311" style="color: var(--color-text-main);">+91 88283 52311</a>
          </div>

          <div>
            <div style="color: var(--color-gold); font-size: 2rem; margin-bottom: 1rem;">${ICONS.mapPin}</div>
            <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Location</h4>
            <p style="color: var(--color-text-muted);">Vayu Pride Residency<br/>Raksha Vihar, Bhopal</p>
          </div>

          <div>
            <div style="color: var(--color-gold); font-size: 2rem; margin-bottom: 1rem;">✉️</div>
            <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Email Address</h4>
            <a href="mailto:info@vayuholidays.com" style="color: var(--color-text-main);">info@vayuholidays.com</a><br/>
            <a href="mailto:sales@vayuholidays.com" style="color: var(--color-text-main);">sales@vayuholidays.com</a>
          </div>
        </div>

        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <a href="/contact" class="btn btn-primary btn-lg">Contact Us</a>
          <a href="https://wa.me/${waNumber}" target="_blank" rel="noopener" class="btn btn-secondary btn-lg">
            ${ICONS.whatsapp} WhatsApp
          </a>
        </div>
      </div>
    </section>
  `;
}

// Export
if (typeof window !== 'undefined') {
  window.renderAboutView = renderAboutView;
}
