/* ==========================================================================
   VAYU HOLIDAYS — ABOUT US VIEW (Based on Company Profile PDF)
   ========================================================================== */

async function renderAboutView() {
  const company      = await window.vayuStore.getCompany();
  const pageSettings = await window.vayuStore.getPageSettings();
  const leadership   = (company.leadership || []);
  const waNumber     = (company.whatsapp || "918889754969").replace(/[^0-9]/g, "");

  // Separate founder from team
  const founder = leadership.find(l => l.role === "Founder");
  const team = leadership.filter(l => l.role !== "Founder");
  
  // Find Neeraj for spotlight
  const neeraj = team.find(l => l.name.toLowerCase().includes('neeraj'));

  return `
    <!-- HEADER -->
    <div class="package-detail-header" style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);">
      <div class="container">
        <div class="breadcrumbs" style="color: rgba(255,255,255,0.8);">
          <a href="/" style="color: rgba(255,255,255,0.8);">Home</a>
          <span class="breadcrumb-separator" style="color: rgba(255,255,255,0.5);">/</span>
          <span style="color: white; font-weight: 600;">About Us</span>
        </div>

        <div class="package-detail-title-wrap">
          <div style="text-align: center;">
            <img src="/icons/nobg.png" alt="Vayu Holidays" style="width: 180px; height: auto; margin: 0 auto 2rem; filter: brightness(0) invert(1);" />
            <h1 class="package-detail-title" style="color: white; font-size: 3.5rem; margin-bottom: 1rem;">Vayu Holidays</h1>
            <p style="font-size: 1.25rem; color: rgba(255,255,255,0.9); margin-bottom: 0.75rem; font-weight: 500;">
              Domestic & International Travel | Corporate Tours | MICE | Group Travel
            </p>
            <p style="font-size: 1rem; color: rgba(255,255,255,0.7);">
              A Division of Vayu Build well Private Limited
            </p>
            <div style="margin-top: 2rem; display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
              <a href="tel:+918889754969" style="color: white; display: inline-flex; align-items: center; gap: 0.5rem;">
                ${ICONS.phone} +91 88897 54969
              </a>
              <a href="tel:+918828352311" style="color: white; display: inline-flex; align-items: center; gap: 0.5rem;">
                ${ICONS.phone} +91 88283 52311
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- WELCOME MESSAGE -->
    <section class="section">
      <div class="container">
        <div style="max-width: 900px; margin: 0 auto; text-align: center;">
          <h2 style="font-family: var(--font-serif); font-size: 3rem; color: #1e3a8a; margin-bottom: 2rem;">Welcome<br/><span style="color: #3b82f6;">Message</span></h2>
          
          <p style="font-size: 1.1rem; line-height: 1.9; color: var(--color-text-main); margin-bottom: 1.5rem; text-align: left;">
            At Vayu Holidays, we believe that every business journey is an opportunity to build relationships, exchange ideas and move organisations forward. Corporate travel is more than arranging tickets and hotel rooms—it requires careful planning, clear communication, dependable coordination and attention to every detail.
          </p>
          
          <p style="font-size: 1.1rem; line-height: 1.9; color: var(--color-text-main); margin-bottom: 2.5rem; text-align: left;">
            Our aim is to make travel and event management simpler for organisations by bringing flights, accommodation, transfers, group movements, meetings, incentive programmes and event requirements together through one coordinated service. We work to understand each client's objectives, timelines, traveller preferences and budget before recommending a suitable solution.
          </p>

          <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; padding: 2.5rem; border-radius: 20px; text-align: left; position: relative; overflow: hidden;">
            <div style="position: absolute; top: -50px; right: -50px; width: 200px; height: 200px; background: rgba(255,255,255,0.1); border-radius: 50%;"></div>
            <div style="position: absolute; bottom: -30px; left: -30px; width: 150px; height: 150px; background: rgba(255,255,255,0.08); border-radius: 50%;"></div>
            <p style="font-size: 1.2rem; line-height: 1.8; font-style: italic; position: relative; z-index: 1; margin: 0;">
              "A personal commitment to thoughtful planning, reliable coordination and professional service."
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- OUR FOUNDER -->
    ${founder ? `
    <section class="section" style="background: var(--color-sand);">
      <div class="container">
        <div style="text-align: center; margin-bottom: 3rem;">
          <h2 style="font-family: var(--font-serif); font-size: 3rem; color: var(--color-obsidian); margin-bottom: 0.5rem;">Our<br/><span style="color: #3b82f6;">Founder</span></h2>
        </div>

        <div style="display: grid; grid-template-columns: 380px 1fr; gap: 4rem; align-items: start; max-width: 1100px; margin: 0 auto;">
          <!-- Founder Image -->
          <div style="text-align: center;">
            <div style="width: 100%; aspect-ratio: 1; border-radius: 50%; overflow: hidden; margin-bottom: 2rem; border: 6px solid #3b82f6; box-shadow: 0 20px 60px rgba(30, 58, 138, 0.3);">
              <img 
                src="${founder.image || '/icons/nobg.png'}" 
                alt="${founder.name}" 
                style="width: 100%; height: 100%; object-fit: cover;"
                onerror="this.src='/icons/nobg.png'; this.style.objectFit='contain'; this.style.padding='3rem'"
              />
            </div>
          </div>

          <!-- Founder Details -->
          <div>
            <h3 style="font-family: var(--font-serif); font-size: 2rem; color: var(--color-obsidian); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: -0.02em;">${founder.name}</h3>
            
            <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; padding: 1rem 1.5rem; border-radius: 12px; margin-bottom: 2rem; font-size: 0.95rem; line-height: 1.6; font-weight: 500;">
              ${founder.title}
            </div>

            <p style="font-size: 1.05rem; line-height: 1.8; color: var(--color-text-main); margin-bottom: 2rem;">
              ${founder.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
    ` : ''}

    <!-- VISION & MISSION -->
    <section class="section">
      <div class="container">
        <div style="text-align: center; margin-bottom: 3rem;">
          <h2 style="font-family: var(--font-serif); font-size: 3rem; color: var(--color-obsidian); margin-bottom: 0.5rem;">Vision<br/><span style="color: #3b82f6;">& Mission</span></h2>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; max-width: 1200px; margin: 0 auto;">
          <!-- Vision -->
          <div style="position: relative;">
            <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 3.5rem; border-radius: 24px; height: 100%; display: flex; flex-direction: column;">
              <div style="position: absolute; top: -20px; right: -20px; width: 120px; height: 120px; background: rgba(255,255,255,0.15); border-radius: 50%;"></div>
              
              <div style="background: rgba(255,255,255,0.2); width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 2rem; font-size: 2.5rem;">
                🔍
              </div>
              
              <h3 style="font-family: var(--font-serif); font-size: 2.5rem; color: white; margin-bottom: 2rem; position: relative; z-index: 1;">Vision</h3>
              
              <div style="background: white; padding: 2rem; border-radius: 16px; flex: 1;">
                <p style="font-size: 1.05rem; line-height: 1.8; color: var(--color-text-main); margin: 0;">
                  To become a trusted and preferred travel partner for businesses and travellers by delivering well-planned, dependable and value-conscious travel experiences.
                </p>
              </div>
            </div>
          </div>

          <!-- Mission -->
          <div style="position: relative;">
            <div style="background: linear-gradient(135deg, #047857 0%, #10b981 100%); padding: 3.5rem; border-radius: 24px; height: 100%; display: flex; flex-direction: column;">
              <div style="position: absolute; top: -20px; right: -20px; width: 120px; height: 120px; background: rgba(255,255,255,0.15); border-radius: 50%;"></div>
              
              <div style="background: rgba(255,255,255,0.2); width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 2rem; font-size: 2.5rem;">
                🚀
              </div>
              
              <h3 style="font-family: var(--font-serif); font-size: 2.5rem; color: white; margin-bottom: 2rem; position: relative; z-index: 1;">Mission</h3>
              
              <div style="background: white; padding: 2rem; border-radius: 16px; flex: 1;">
                <p style="font-size: 1.05rem; line-height: 1.8; color: var(--color-text-main); margin: 0;">
                  To make corporate and leisure travel easier through end-to-end planning, transparent quotations and practical travel options, while building long-term client relationships through responsive service and creating meaningful corporate tours, incentive programmes and event experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- OUR SERVICES -->
    <section class="section" style="background: var(--color-sand);">
      <div class="container">
        <div style="text-align: center; margin-bottom: 3rem;">
          <h2 style="font-family: var(--font-serif); font-size: 3rem; color: var(--color-obsidian); margin-bottom: 1rem;">Our<br/><span style="color: #3b82f6;">Services</span></h2>
          <p style="font-size: 1.1rem; color: var(--color-text-muted); max-width: 700px; margin: 0 auto;">
            Our Business Verticals: With a diverse portfolio across multiple industries, Vayu Group operates through strategic business verticals focused on creating sustainable value, delivering quality services, and building long-term relationships.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 2rem; margin-bottom: 3rem;">
          <div style="background: #1e3a8a; color: white; padding: 2.5rem 1.5rem; border-radius: 16px; text-align: center; transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform=''">
            <div style="font-size: 3.5rem; margin-bottom: 1.5rem;">✈️</div>
            <h4 style="font-size: 1rem; font-weight: 700; line-height: 1.4; color: white;">Travel,<br/>Tourism &<br/>Adventure</h4>
          </div>

          <div style="background: #3b82f6; color: white; padding: 2.5rem 1.5rem; border-radius: 16px; text-align: center; transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform=''">
            <div style="font-size: 3.5rem; margin-bottom: 1.5rem;">🏢</div>
            <h4 style="font-size: 1rem; font-weight: 700; line-height: 1.4; color: white;">Real Estate &<br/>Infrastructure</h4>
          </div>

          <div style="background: #1e3a8a; color: white; padding: 2.5rem 1.5rem; border-radius: 16px; text-align: center; transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform=''">
            <div style="font-size: 3.5rem; margin-bottom: 1.5rem;">🏨</div>
            <h4 style="font-size: 1rem; font-weight: 700; line-height: 1.4; color: white;">Hospitality &<br/>Hotels</h4>
          </div>

          <div style="background: #3b82f6; color: white; padding: 2.5rem 1.5rem; border-radius: 16px; text-align: center; transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform=''">
            <div style="font-size: 3.5rem; margin-bottom: 1.5rem;">🌾</div>
            <h4 style="font-size: 1rem; font-weight: 700; line-height: 1.4; color: white;">Agriculture &<br/>Agribusiness</h4>
          </div>

          <div style="background: #1e3a8a; color: white; padding: 2.5rem 1.5rem; border-radius: 16px; text-align: center; transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-10px)'" onmouseout="this.style.transform=''">
            <div style="font-size: 3.5rem; margin-bottom: 1.5rem;">🙏</div>
            <h4 style="font-size: 1rem; font-weight: 700; line-height: 1.4; color: white;">Spiritual &<br/>Religious<br/>Events</h4>
          </div>
        </div>

        <p style="text-align: center; font-size: 1.05rem; line-height: 1.8; color: var(--color-text-main); max-width: 800px; margin: 0 auto;">
          Our services span across Real Estate & Infrastructure, Hospitality & Hotels, Agriculture & Agribusiness, Spiritual & Religious Events, and Travel, Tourism & Adventure.<br/><br/>
          We are committed to delivering quality, reliable, and professional solutions across diverse sectors. Our focus is on creating value-driven services and memorable experiences for our clients and partners.
        </p>
      </div>
    </section>

    <!-- OUR BEST TEAM -->
    <section class="section">
      <div class="container">
        <div style="text-align: center; margin-bottom: 3rem;">
          <h2 style="font-family: var(--font-serif); font-size: 3rem; color: var(--color-obsidian); margin-bottom: 1rem;">Our<br/><span style="color: #3b82f6;">Best Team</span></h2>
          <p style="font-size: 1.1rem; color: var(--color-text-muted); max-width: 700px; margin: 0 auto;">
            At Vayu Holidays, our leadership team is committed to building a trusted travel brand driven by vision, expertise, innovation, and customer satisfaction. Together, we strive to create seamless, memorable, and exceptional travel experiences while continuously growing with our partners, clients, and team.
          </p>
        </div>

        <!-- Timeline Style Leadership -->
        <div style="max-width: 1000px; margin: 0 auto; position: relative;">
          <div style="position: absolute; left: 50%; top: 0; bottom: 0; width: 4px; background: linear-gradient(180deg, #3b82f6 0%, #1e3a8a 100%); transform: translateX(-50%);"></div>
          
          ${team.map((leader, index) => `
            <div style="display: grid; grid-template-columns: ${index % 2 === 0 ? '1fr 60px 1fr' : '1fr 60px 1fr'}; gap: 2rem; margin-bottom: 4rem; position: relative;">
              ${index % 2 === 0 ? `
                <!-- Left Side: Content -->
                <div style="text-align: right; padding-right: 2rem;">
                  <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 10px 40px rgba(30, 58, 138, 0.15); border: 2px solid #3b82f6;">
                    <h3 style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--color-obsidian); margin-bottom: 0.5rem;">${leader.name}</h3>
                    <div style="display: inline-block; background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; padding: 0.4rem 1.2rem; border-radius: 20px; font-size: 0.85rem; font-weight: 700; margin-bottom: 1rem;">${leader.role}</div>
                    <p style="font-size: 0.95rem; line-height: 1.7; color: var(--color-text-muted);">${leader.bio}</p>
                  </div>
                </div>

                <!-- Center: Circle -->
                <div style="display: flex; align-items: center; justify-content: center; position: relative; z-index: 2;">
                  <div style="width: 60px; height: 60px; border-radius: 50%; background: white; border: 4px solid #3b82f6; box-shadow: 0 4px 16px rgba(59, 130, 246, 0.4);"></div>
                </div>

                <!-- Right Side: Image -->
                <div style="padding-left: 2rem; display: flex; align-items: center;">
                  <div style="width: 200px; height: 200px; border-radius: 50%; overflow: hidden; border: 4px solid #3b82f6; box-shadow: 0 10px 40px rgba(30, 58, 138, 0.3);">
                    <img src="${leader.image || '/icons/nobg.png'}" alt="${leader.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='/icons/nobg.png'; this.style.objectFit='contain'; this.style.padding='2rem'"/>
                  </div>
                </div>
              ` : `
                <!-- Left Side: Image -->
                <div style="padding-right: 2rem; display: flex; align-items: center; justify-content: flex-end;">
                  <div style="width: 200px; height: 200px; border-radius: 50%; overflow: hidden; border: 4px solid #3b82f6; box-shadow: 0 10px 40px rgba(30, 58, 138, 0.3);">
                    <img src="${leader.image || '/icons/nobg.png'}" alt="${leader.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='/icons/nobg.png'; this.style.objectFit='contain'; this.style.padding='2rem'"/>
                  </div>
                </div>

                <!-- Center: Circle -->
                <div style="display: flex; align-items: center; justify-content: center; position: relative; z-index: 2;">
                  <div style="width: 60px; height: 60px; border-radius: 50%; background: white; border: 4px solid #3b82f6; box-shadow: 0 4px 16px rgba(59, 130, 246, 0.4);"></div>
                </div>

                <!-- Right Side: Content -->
                <div style="padding-left: 2rem;">
                  <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 10px 40px rgba(30, 58, 138, 0.15); border: 2px solid #3b82f6;">
                    <h3 style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--color-obsidian); margin-bottom: 0.5rem;">${leader.name}</h3>
                    <div style="display: inline-block; background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; padding: 0.4rem 1.2rem; border-radius: 20px; font-size: 0.85rem; font-weight: 700; margin-bottom: 1rem;">${leader.role}</div>
                    <p style="font-size: 0.95rem; line-height: 1.7; color: var(--color-text-muted);">${leader.bio}</p>
                  </div>
                </div>
              `}
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- NEERAJ SINGH NAYAL SPOTLIGHT -->
    ${neeraj ? `
    <section class="section" style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white;">
      <div class="container">
        <div style="max-width: 900px; margin: 0 auto;">
          <div style="text-align: center; margin-bottom: 3rem;">
            <h2 style="font-family: var(--font-serif); font-size: 3rem; color: white; margin-bottom: 0.5rem;">Leadership<br/><span style="opacity: 0.9;">Spotlight</span></h2>
          </div>

          <div style="display: grid; grid-template-columns: 300px 1fr; gap: 3rem; align-items: center;">
            <div>
              <div style="width: 100%; aspect-ratio: 1; border-radius: 20px; overflow: hidden; border: 4px solid white; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);">
                <img src="${neeraj.image || '/icons/nobg.png'}" alt="${neeraj.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='/icons/nobg.png'; this.style.objectFit='contain'; this.style.padding='2rem'"/>
              </div>
            </div>

            <div>
              <div style="background: rgba(255,255,255,0.15); backdrop-filter: blur(10px); padding: 2rem; border-radius: 16px; border: 2px solid rgba(255,255,255,0.3);">
                <h3 style="font-family: var(--font-serif); font-size: 2rem; color: white; margin-bottom: 1rem;">${neeraj.name}</h3>
                <p style="font-size: 1.05rem; line-height: 1.8; color: rgba(255,255,255,0.95);">
                  ${neeraj.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    ` : ''}

    <!-- WHY VAYU HOLIDAYS -->
    <section class="section">
      <div class="container">
        <div style="text-align: center; margin-bottom: 3rem;">
          <h2 style="font-family: var(--font-serif); font-size: 3rem; color: var(--color-obsidian); margin-bottom: 1rem;">Why<br/><span style="color: #3b82f6;">Vayu Holidays?</span></h2>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; max-width: 1100px; margin: 0 auto;">
          <div>
            <img src="/icons/headquator.png" alt="Vayu Holidays Office" style="border-radius: 20px; width: 100%; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);" />
          </div>

          <div>
            <p style="font-size: 1.1rem; line-height: 1.9; color: var(--color-text-main); margin-bottom: 1.5rem;">
              At Vayu Holidays, we believe that a holiday is much more than a destination. It is an opportunity to discover, reconnect, celebrate, explore, and create memories that last a lifetime.
            </p>

            <p style="font-size: 1.1rem; line-height: 1.9; color: var(--color-text-main); margin-bottom: 1.5rem;">
              Our approach combines the discipline and leadership values inspired by the founder's Indian Air Force background with professional hospitality expertise and a customer-focused approach.
            </p>

            <p style="font-size: 1.1rem; line-height: 1.9; color: var(--color-text-main); margin-bottom: 2.5rem;">
              Whether the purpose is relaxation, adventure, family time, cultural exploration, corporate travel, or spiritual discovery, our goal is to provide travellers with carefully planned experiences and dependable support.
            </p>

            <a href="/packages" class="btn btn-primary btn-lg">
              Explore Our Journeys ${ICONS.arrowRight}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- THANK YOU / GET IN TOUCH -->
    <section class="section" style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; text-align: center;">
      <div class="container">
        <h2 style="font-family: var(--font-serif); font-size: 4rem; color: white; margin-bottom: 1rem;">Thank<br/>You</h2>
        <h3 style="font-size: 2rem; color: rgba(255,255,255,0.95); margin-bottom: 1rem;">For Your Attention</h3>
        <p style="font-size: 1.3rem; color: rgba(255,255,255,0.9); margin-bottom: 3rem; font-style: italic;">
          Discover the World, Experience the Difference
        </p>

        <div style="background: rgba(255,255,255,0.15); backdrop-filter: blur(10px); padding: 3rem; border-radius: 24px; max-width: 800px; margin: 0 auto; border: 2px solid rgba(255,255,255,0.3);">
          <h4 style="font-size: 1.8rem; color: white; margin-bottom: 2rem;">Get In Touch</h4>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; text-align: left;">
            <div>
              <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                <div style="width: 50px; height: 50px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">📞</div>
                <div>
                  <div style="font-weight: 700; margin-bottom: 0.25rem;">Phone Number:</div>
                  <a href="tel:+918889754969" style="color: white; display: block;">+91 88897 54969</a>
                  <a href="tel:+918828352311" style="color: white; display: block;">+91 88283 52311</a>
                </div>
              </div>
            </div>

            <div>
              <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                <div style="width: 50px; height: 50px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">✉️</div>
                <div>
                  <div style="font-weight: 700; margin-bottom: 0.25rem;">Email Address:</div>
                  <a href="mailto:info@vayuholidays.com" style="color: white; display: block;">Info@vayuholidays.com</a>
                  <a href="mailto:sales@vayuholidays.com" style="color: white; display: block;">sales@vayuholidays.com</a>
                </div>
              </div>
            </div>

            <div style="grid-column: 1 / -1;">
              <div style="display: flex; align-items: center; gap: 1rem;">
                <div style="width: 50px; height: 50px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">📍</div>
                <div>
                  <div style="font-weight: 700; margin-bottom: 0.25rem;">Location:</div>
                  <div>Vayu Pride Residency Raksha Vihar, Bhopal</div>
                </div>
              </div>
            </div>

            <div style="grid-column: 1 / -1;">
              <div style="display: flex; align-items: center; gap: 1rem;">
                <div style="width: 50px; height: 50px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">🌐</div>
                <div>
                  <div style="font-weight: 700; margin-bottom: 0.25rem;">Website:</div>
                  <a href="https://www.vayuholidays.com" target="_blank" style="color: white;">Vayuholidays.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style="margin-top: 3rem; display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <a href="/contact" class="btn btn-white btn-lg">Contact Us</a>
          <a href="https://wa.me/${waNumber}" target="_blank" rel="noopener" class="btn" style="background: rgba(255,255,255,0.2); color: white; border: 2px solid white;" onmouseover="this.style.background='white'; this.style.color='#3b82f6'" onmouseout="this.style.background='rgba(255,255,255,0.2)'; this.style.color='white'">
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
