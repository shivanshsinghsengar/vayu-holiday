/* ==========================================================================
   VAYU HOLIDAYS — ADMIN CMS DASHBOARD VIEW (Complete CRUD & CRM System)
   ========================================================================== */

let currentAdminTab = "dashboard";

async function renderAdminView() {
  const store = window.vayuStore;

  // 1. Check Authentication
  if (!store.isAdminLoggedIn()) {
    return renderAdminLogin();
  }

  // 2. Render Full Dashboard Layout
  const company      = await store.getCompany();
  const packages     = await store.getPackages();
  const enquiries    = await store.getEnquiries();
  const destinations = await store.getDestinations();
  const blogs        = await store.getBlogs();
  const testimonials = await store.getTestimonials();

  const newEnquiriesCount = enquiries.filter(e => e.status === "New").length;

  return `
    <div class="admin-layout">
      <!-- SIDEBAR -->
      <aside class="admin-sidebar">
        <div class="admin-brand">
          <div class="brand-emblem" style="width: 36px; height: 36px; font-size: 1.1rem;">V</div>
          <div class="brand-text">
            <span class="brand-name" style="font-size: 1.1rem; color: #fff;">Vayu Admin</span>
            <span class="brand-tagline">CMS & CRM • Bhopal</span>
          </div>
        </div>

        <nav class="admin-nav">
          <div class="admin-nav-item ${currentAdminTab === 'dashboard' ? 'active' : ''}" onclick="switchAdminTab('dashboard')">
            <span>${ICONS.sparkles}</span> Dashboard
          </div>

          <div class="admin-nav-item ${currentAdminTab === 'enquiries' ? 'active' : ''}" onclick="switchAdminTab('enquiries')">
            <span>${ICONS.shield}</span> Enquiries CRM
            ${newEnquiriesCount > 0 ? `<span class="admin-nav-badge">${newEnquiriesCount} New</span>` : ''}
          </div>

          <div class="admin-nav-item ${currentAdminTab === 'packages' ? 'active' : ''}" onclick="switchAdminTab('packages')">
            <span>${ICONS.plane}</span> Packages (${packages.length})
          </div>

          <div class="admin-nav-item ${currentAdminTab === 'destinations' ? 'active' : ''}" onclick="switchAdminTab('destinations')">
            <span>${ICONS.mapPin}</span> Destinations (${destinations.length})
          </div>

          <div class="admin-nav-item ${currentAdminTab === 'blogs' ? 'active' : ''}" onclick="switchAdminTab('blogs')">
            <span>${ICONS.calendar}</span> Travel Stories (${blogs.length})
          </div>

          <div class="admin-nav-item ${currentAdminTab === 'testimonials' ? 'active' : ''}" onclick="switchAdminTab('testimonials')">
            <span>${ICONS.star}</span> Reviews (${testimonials.length})
          </div>

          <div class="admin-nav-item ${currentAdminTab === 'offers' ? 'active' : ''}" onclick="switchAdminTab('offers')">
            <span>${ICONS.sparkles}</span> Offers & Banners (${window.vayuStore.getOffers().length})
          </div>

          <div class="admin-nav-item ${currentAdminTab === 'media' ? 'active' : ''}" onclick="switchAdminTab('media')">
            <span>${ICONS.plane}</span> Media Library (${window.vayuStore.getMedia().length})
          </div>

          <div class="admin-nav-item ${currentAdminTab === 'pages' ? 'active' : ''}" onclick="switchAdminTab('pages')">
            <span>${ICONS.calendar}</span> Pages & SEO
          </div>

          <div class="admin-nav-item ${currentAdminTab === 'settings' ? 'active' : ''}" onclick="switchAdminTab('settings')">
            <span>${ICONS.clock}</span> Office Settings
          </div>
        </nav>

        <div class="admin-sidebar-footer">
          <a href="#/" class="btn btn-secondary btn-sm" style="color: var(--color-ivory); border-color: var(--border-dark);">
            Live Site ↗
          </a>
          <button class="btn btn-secondary btn-sm" style="color: #f87171; border-color: rgba(239, 68, 68, 0.3);" onclick="handleAdminLogout()">
            Logout
          </button>
        </div>
      </aside>

      <!-- MAIN CONTENT -->
      <main class="admin-main">
        <header class="admin-header">
          <div class="admin-title-row">
            <h1 class="admin-page-title" id="adminHeaderTitle">
              ${getAdminTabTitle(currentAdminTab)}
            </h1>
          </div>

          <div class="admin-user-pill">
            <div class="admin-avatar">VH</div>
            <div>
              <div style="font-weight: 700; color: #fff;">Concierge Director</div>
              <div style="font-size: 0.75rem; color: var(--color-gold);">Bhopal HQ • Active</div>
            </div>
          </div>
        </header>

        <div class="admin-body">
          ${renderAdminTabContent(currentAdminTab)}
        </div>
      </main>
    </div>
  `;
}

function getAdminTabTitle(tab) {
  switch (tab) {
    case "dashboard": return "Performance & Live Inquiries";
    case "enquiries": return "Enquiries & Lead Management CRM";
    case "packages": return "Tour Packages & Itinerary Manager";
    case "destinations": return "Destinations Catalog Manager";
    case "blogs": return "Editorial Travel Stories Manager";
    case "testimonials": return "Client Testimonials & Ratings";
    case "offers": return "Special Offers & Campaign Banners";
    case "media": return "Curated Media & Photography Library";
    case "pages": return "Pages, Hero Headline & SEO Settings";
    case "settings": return "Bhopal Office Profile & Governance";
    default: return "Dashboard";
  }
}

async function switchAdminTab(tab) {
  currentAdminTab = tab;
  const appRoot = document.getElementById("app");
  if (appRoot) {
    appRoot.innerHTML = await renderAdminView();
  }
}

// --- Admin Sub-Panels ---
async function renderAdminTabContent(tab) {
  switch (tab) {
    case "dashboard":    return await renderAdminDashboardTab();
    case "enquiries":    return await renderAdminEnquiriesTab();
    case "packages":     return await renderAdminPackagesTab();
    case "destinations": return await renderAdminDestinationsTab();
    case "blogs":        return await renderAdminBlogsTab();
    case "testimonials": return await renderAdminTestimonialsTab();
    case "offers":       return await renderAdminOffersTab();
    case "media":        return await renderAdminMediaTab();
    case "pages":        return await renderAdminPagesTab();
    case "settings":     return await renderAdminSettingsTab();
    default:             return await renderAdminDashboardTab();
  }
}

// 1. Dashboard Tab
async function renderAdminDashboardTab() {
  const store = window.vayuStore;
  const packages     = await store.getPackages();
  const enquiries    = await store.getEnquiries();
  const destinations = await store.getDestinations();

  const totalValue = enquiries.length * 55000;

  return `
    <div class="admin-metrics-grid">
      <div class="metric-card">
        <div class="metric-header">
          <span class="metric-label">Total Inquiries</span>
          <span class="metric-icon">${ICONS.shield}</span>
        </div>
        <div class="metric-val">${enquiries.length}</div>
        <div class="metric-sub">↑ Active website leads in CRM</div>
      </div>

      <div class="metric-card">
        <div class="metric-header">
          <span class="metric-label">Tour Packages</span>
          <span class="metric-icon">${ICONS.plane}</span>
        </div>
        <div class="metric-val">${packages.length}</div>
        <div class="metric-sub">${packages.filter(p => p.category === 'domestic').length} Domestic • ${packages.filter(p => p.category === 'international').length} Intl</div>
      </div>

      <div class="metric-card">
        <div class="metric-header">
          <span class="metric-label">Destinations</span>
          <span class="metric-icon">${ICONS.mapPin}</span>
        </div>
        <div class="metric-val">${destinations.length}</div>
        <div class="metric-sub">India & Global Networks</div>
      </div>

      <div class="metric-card">
        <div class="metric-header">
          <span class="metric-label">Pipeline Value</span>
          <span class="metric-icon">${ICONS.sparkles}</span>
        </div>
        <div class="metric-val">${store.formatPrice(totalValue)}</div>
        <div class="metric-sub">Phase 1 Quoted Estimates</div>
      </div>
    </div>

    <!-- Recent Inquiries Card -->
    <div class="admin-card">
      <div class="admin-card-header">
        <h3 class="admin-card-title">Recent Inquiries Stream (Website Leads)</h3>
        <button class="btn btn-gold btn-sm" onclick="switchAdminTab('enquiries')">
          View All Enquiries ${ICONS.arrowRight}
        </button>
      </div>

      <div class="admin-table-wrap">
        <table class="admin-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Traveler</th>
              <th>Contact</th>
              <th>Destination / Request</th>
              <th>Month & Size</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${enquiries.slice(0, 5).map(e => `
              <tr>
                <td>${new Date(e.createdAt || Date.now()).toLocaleDateString()}</td>
                <td><strong>${e.name}</strong></td>
                <td>
                  <div>${e.phone}</div>
                  <div style="font-size: 0.75rem; color: var(--color-text-inverse-muted);">${e.email}</div>
                </td>
                <td>${e.destination}</td>
                <td>${e.travelMonth} (${e.travelers})</td>
                <td>
                  <span class="status-pill status-${e.status.toLowerCase()}">${e.status}</span>
                </td>
                <td>
                  <button class="btn-table-action" onclick="openAdminEnquiryModal('${e.id}')">Review</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// 2. Enquiries CRM Tab
async function renderAdminEnquiriesTab() {
  const enquiries = await window.vayuStore.getEnquiries();

  return `
    <div class="admin-card">
      <div class="admin-card-header">
        <div>
          <h3 class="admin-card-title">Customer Enquiries & Quotation Pipeline</h3>
          <p style="font-size: 0.82rem; color: var(--color-text-inverse-muted);">
            Manage traveler requests submitted via Smart Trip Planner, Package modals, and Contact desks.
          </p>
        </div>

        <div style="display: flex; gap: 0.5rem;">
          <input 
            type="text" 
            placeholder="Search leads by name, phone..." 
            class="form-control" 
            style="width: 240px; padding: 0.45rem 0.85rem; font-size: 0.85rem; background: #070A0F; color: #fff; border-color: var(--border-dark);" 
            oninput="searchEnquiriesTable(this.value)" 
          />
        </div>
      </div>

      <div class="admin-table-wrap">
        <table class="admin-table" id="adminEnquiriesTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Traveler</th>
              <th>Phone / WhatsApp</th>
              <th>Destination</th>
              <th>Travel Month</th>
              <th>Budget Tier</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${enquiries.map(e => `
              <tr data-enquiry-row="${e.name.toLowerCase()} ${e.phone} ${e.destination.toLowerCase()}">
                <td style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--color-gold);">${e.id}</td>
                <td>
                  <strong>${e.name}</strong>
                  <div style="font-size: 0.75rem; color: var(--color-text-inverse-muted);">${e.email}</div>
                </td>
                <td>
                  <a href="https://wa.me/${e.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello ${e.name}, this is the Concierge Desk from Vayu Holidays, Bhopal regarding your inquiry for ${e.destination}.`)}" target="_blank" rel="noopener" style="color: #25D366; font-weight: 600;">
                    ${e.phone}
                  </a>
                </td>
                <td>${e.destination}</td>
                <td>${e.travelMonth}</td>
                <td>${e.budgetPerPerson || 'Standard'}</td>
                <td>
                  <select 
                    style="background: #080C10; color: #fff; border: 1px solid var(--border-dark); border-radius: 4px; padding: 4px 8px; font-size: 0.78rem;" 
                    onchange="handleUpdateEnquiryStatus('${e.id}', this.value)"
                  >
                    <option value="New" ${e.status === 'New' ? 'selected' : ''}>New</option>
                    <option value="Contacted" ${e.status === 'Contacted' ? 'selected' : ''}>Contacted</option>
                    <option value="Quoted" ${e.status === 'Quoted' ? 'selected' : ''}>Quoted</option>
                    <option value="Booked" ${e.status === 'Booked' ? 'selected' : ''}>Booked</option>
                    <option value="Lost" ${e.status === 'Lost' ? 'selected' : ''}>Lost</option>
                  </select>
                </td>
                <td>
                  <div class="table-actions">
                    <button class="btn-table-action" onclick="openAdminEnquiryModal('${e.id}')">View</button>
                    <button class="btn-table-action" style="color: #f87171;" onclick="handleDeleteEnquiry('${e.id}')">Del</button>
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// 3. Packages Manager Tab
async function renderAdminPackagesTab() {
  const packages = await window.vayuStore.getPackages();

  return `
    <div class="admin-card">
      <div class="admin-card-header">
        <div>
          <h3 class="admin-card-title">Tour Packages Catalog</h3>
          <p style="font-size: 0.82rem; color: var(--color-text-inverse-muted);">
            Create, edit, and organize holiday packages, itineraries, pricing, and photo galleries.
          </p>
        </div>

        <button class="btn btn-gold btn-sm" onclick="openPackageEditorModal()">
          + Add New Package
        </button>
      </div>

      <div class="admin-table-wrap">
        <table class="admin-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title & Destination</th>
              <th>Category</th>
              <th>Duration</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${packages.map(p => `
              <tr>
                <td style="width: 60px;">
                  <img src="${p.image}" alt="" style="width: 50px; height: 38px; object-fit: cover; border-radius: 4px;" />
                </td>
                <td>
                  <strong>${p.title}</strong>
                  <div style="font-size: 0.78rem; color: var(--color-text-inverse-muted);">${p.destinationName}</div>
                </td>
                <td>
                  <span class="badge ${p.category === 'domestic' ? 'badge-emerald' : 'badge-gold'}" style="font-size: 0.65rem;">
                    ${p.category}
                  </span>
                </td>
                <td>${p.durationDays}D / ${p.durationNights}N</td>
                <td style="font-weight: 700; color: var(--color-gold);">${window.vayuStore.formatPrice(p.price)}</td>
                <td>★ ${p.rating}</td>
                <td>
                  <div class="table-actions">
                    <button class="btn-table-action" onclick="openPackageEditorModal('${p.id}')">Edit</button>
                    <a href="#/package/${p.id}" target="_blank" class="btn-table-action">View</a>
                    <button class="btn-table-action" style="color: #f87171;" onclick="handleDeletePackage('${p.id}')">Del</button>
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// 4. Destinations Tab
async function renderAdminDestinationsTab() {
  const destinations = await window.vayuStore.getDestinations();

  return `
    <div class="admin-card">
      <div class="admin-card-header">
        <h3 class="admin-card-title">Destinations Manager</h3>
        <button class="btn btn-gold btn-sm" onclick="openDestinationEditorModal()">+ Add Destination</button>
      </div>

      <div class="admin-table-wrap">
        <table class="admin-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Type</th>
              <th>Tagline</th>
              <th>Starting Price</th>
              <th>Packages</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${destinations.map(d => `
              <tr>
                <td><img src="${d.image}" style="width: 44px; height: 32px; object-fit: cover; border-radius: 4px;" /></td>
                <td><strong>${d.name}</strong></td>
                <td><span class="badge badge-dark">${d.type}</span></td>
                <td>${d.tagline}</td>
                <td>${window.vayuStore.formatPrice(d.startingPrice)}</td>
                <td>${d.packagesCount}</td>
                <td>
                  <div class="table-actions">
                    <button class="btn-table-action" onclick="openDestinationEditorModal('${d.id}')">Edit</button>
                    <button class="btn-table-action" style="color: #f87171;" onclick="handleDeleteDestination('${d.id}')">Del</button>
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// 5. Blogs Tab
async function renderAdminBlogsTab() {
  const blogs = await window.vayuStore.getBlogs();

  return `
    <div class="admin-card">
      <div class="admin-card-header">
        <h3 class="admin-card-title">Editorial Travel Stories & Articles</h3>
        <button class="btn btn-gold btn-sm" onclick="openBlogEditorModal()">+ Add New Story</button>
      </div>

      <div class="admin-table-wrap">
        <table class="admin-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Date</th>
              <th>Read Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${blogs.map(b => `
              <tr>
                <td><strong>${b.title}</strong></td>
                <td><span class="badge badge-dark">${b.category}</span></td>
                <td>${b.date}</td>
                <td>${b.readTime}</td>
                <td>
                  <div class="table-actions">
                    <button class="btn-table-action" onclick="openBlogEditorModal('${b.id}')">Edit</button>
                    <a href="#/blog/${b.slug}" target="_blank" class="btn-table-action">View</a>
                    <button class="btn-table-action" style="color: #f87171;" onclick="handleDeleteBlog('${b.id}')">Del</button>
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// 6. Testimonials Tab
async function renderAdminTestimonialsTab() {
  const testimonials = await window.vayuStore.getTestimonials();

  return `
    <div class="admin-card">
      <div class="admin-card-header">
        <h3 class="admin-card-title">Client Testimonials & Guest Reviews</h3>
        <button class="btn btn-gold btn-sm" onclick="openTestimonialEditorModal()">+ Add Review</button>
      </div>

      <div class="admin-table-wrap">
        <table class="admin-table">
          <thead>
            <tr>
              <th>Client Name</th>
              <th>Location</th>
              <th>Trip</th>
              <th>Rating</th>
              <th>Quote</th>
            </tr>
          </thead>
          <tbody>
            ${testimonials.map(t => `
              <tr>
                <td><strong>${t.name}</strong></td>
                <td>${t.location}</td>
                <td>${t.trip}</td>
                <td>★ ${t.rating}</td>
                <td style="font-size: 0.82rem; max-width: 320px; color: var(--color-text-inverse-muted);">${t.quote}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// 7. Settings Tab
async function renderAdminSettingsTab() {
  const company = await window.vayuStore.getCompany();

  return `
    <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 2rem;">
      <div class="admin-card">
        <div class="admin-card-header">
          <h3 class="admin-card-title">Company Profile & Bhopal Office Details</h3>
        </div>

        <form id="adminSettingsForm" onsubmit="handleSaveSettings(event)" style="padding: 1.75rem;">
          <div class="form-group">
            <label class="form-label" style="color: var(--color-ivory);">Brand Name</label>
            <input type="text" name="name" class="form-control" value="${company.name}" style="background: #080C10; color: #fff; border-color: var(--border-dark);" required />
          </div>

          <div class="form-group">
            <label class="form-label" style="color: var(--color-ivory);">Bhopal Head Office Address</label>
            <textarea name="office" class="form-control" style="background: #080C10; color: #fff; border-color: var(--border-dark); min-height: 70px;" required>${company.office}</textarea>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div class="form-group">
              <label class="form-label" style="color: var(--color-ivory);">Office Phone Number</label>
              <input type="text" name="phone" class="form-control" value="${company.phone}" style="background: #080C10; color: #fff; border-color: var(--border-dark);" required />
            </div>

            <div class="form-group">
              <label class="form-label" style="color: var(--color-ivory);">WhatsApp Concierge Number</label>
              <input type="text" name="whatsapp" class="form-control" value="${company.whatsapp}" style="background: #080C10; color: #fff; border-color: var(--border-dark);" required />
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div class="form-group">
              <label class="form-label" style="color: var(--color-ivory);">Primary Email</label>
              <input type="email" name="email" class="form-control" value="${company.email}" style="background: #080C10; color: #fff; border-color: var(--border-dark);" required />
            </div>

            <div class="form-group">
              <label class="form-label" style="color: var(--color-ivory);">Office Operating Hours</label>
              <input type="text" name="hours" class="form-control" value="${company.hours}" style="background: #080C10; color: #fff; border-color: var(--border-dark);" required />
            </div>
          </div>

          <button type="submit" class="btn btn-gold" style="margin-top: 1rem;">
            Save Profile Settings
          </button>
        </form>
      </div>

      <div>
        <div class="admin-card" style="padding: 1.75rem;">
          <h4 style="font-family: var(--font-serif); font-size: 1.25rem; margin-bottom: 0.5rem; color: #fff;">
            Reset & Maintenance
          </h4>
          <p style="font-size: 0.85rem; color: var(--color-text-inverse-muted); margin-bottom: 1.5rem;">
            Reset all packages, leads, destinations, and stories to clean 2026 default seed data.
          </p>

          <button class="btn btn-secondary btn-sm" style="color: #f87171; border-color: rgba(239, 68, 68, 0.4); width: 100%;" onclick="handleResetStore()">
            Reset All Store Data to Default
          </button>
        </div>

        <div class="admin-card" style="padding: 1.75rem;">
          <h4 style="font-family: var(--font-serif); font-size: 1.25rem; margin-bottom: 0.5rem; color: #fff;">
            Executive Governance
          </h4>
          <div style="font-size: 0.85rem; color: var(--color-text-inverse-muted); line-height: 1.6;">
            <strong>Chairman:</strong> Simran Singh Sengar<br/>
            <strong>MD & CEO:</strong> Shubham Vishwkarma<br/>
            <strong>Director:</strong> Hardik Singh Sengar
          </div>
        </div>
      </div>
    </div>
  `;
}

// --- Login Screen ---
function renderAdminLogin() {
  return `
    <div class="admin-login-screen">
      <div class="admin-login-card">
        <div class="admin-login-logo">
          <div class="brand-emblem" style="width: 54px; height: 54px; font-size: 1.5rem;">V</div>
        </div>

        <h2 class="admin-login-title">Vayu Staff Portal</h2>
        <p class="admin-login-sub">Internal Itinerary & Lead Management CMS</p>

        <form onsubmit="handleAdminLoginSubmit(event)">
          <div class="form-group" style="text-align: left;">
            <label class="form-label" style="color: var(--color-ivory);">Staff Email / ID</label>
            <input 
              type="text" 
              id="adminUsername" 
              class="form-control" 
              placeholder="admin@vayuholidays.com" 
              value="admin@vayuholidays.com" 
              style="background: #080C10; color: #fff; border-color: var(--border-dark);" 
              required 
            />
          </div>

          <div class="form-group" style="text-align: left;">
            <label class="form-label" style="color: var(--color-ivory);">Access PIN / Password</label>
            <input 
              type="password" 
              id="adminPassword" 
              class="form-control" 
              placeholder="••••••••" 
              value="vayu2026" 
              style="background: #080C10; color: #fff; border-color: var(--border-dark);" 
              required 
            />
          </div>

          <button type="submit" class="btn btn-gold btn-lg" style="width: 100%; margin-top: 1rem;">
            Authenticate & Enter Portal
          </button>
        </form>

        <div class="admin-login-hints">
          <strong>Demo Staff Credentials:</strong><br/>
          User: <code>admin@vayuholidays.com</code><br/>
          Pass: <code>vayu2026</code>
        </div>

        <div style="margin-top: 1.5rem;">
          <a href="#/" style="font-size: 0.85rem; color: var(--color-gold);">← Back to Public Website</a>
        </div>
      </div>
    </div>
  `;
}

// --- Admin Handlers ---
async function handleAdminLoginSubmit(e) {
  e.preventDefault();
  const u = document.getElementById("adminUsername")?.value;
  const p = document.getElementById("adminPassword")?.value;
  try {
    const success = await window.vayuStore.loginAdmin(u, p);
    if (success) {
      showToast("Access Granted", "Welcome to the Vayu Holidays Staff CMS.");
      await switchAdminTab("dashboard");
    } else {
      alert("Invalid credentials. Please check your email and password.");
    }
  } catch (err) {
    alert(err.message || "Login failed. Please try again.");
  }
}

async function handleAdminLogout() {
  await window.vayuStore.logoutAdmin();
  showToast("Logged Out", "Staff session ended.");
  window.location.hash = "#/";
}

async function handleUpdateEnquiryStatus(id, newStatus) {
  await window.vayuStore.updateEnquiryStatus(id, newStatus);
  showToast("Status Updated", `Enquiry ${id} set to ${newStatus}`);
}

async function handleDeleteEnquiry(id) {
  if (confirm(`Delete enquiry ${id}?`)) {
    await window.vayuStore.deleteEnquiry(id);
    await switchAdminTab("enquiries");
    showToast("Enquiry Deleted", id);
  }
}

async function handleDeletePackage(id) {
  if (confirm(`Are you sure you want to delete package ${id}?`)) {
    await window.vayuStore.deletePackage(id);
    await switchAdminTab("packages");
    showToast("Package Removed", id);
  }
}

async function handleDeleteDestination(id) {
  if (confirm(`Delete destination ${id}?`)) {
    await window.vayuStore.deleteDestination(id);
    await switchAdminTab("destinations");
    showToast("Destination Removed", id);
  }
}

async function handleDeleteBlog(id) {
  if (confirm(`Delete article ${id}?`)) {
    await window.vayuStore.deleteBlog(id);
    await switchAdminTab("blogs");
    showToast("Story Removed", id);
  }
}

async function handleSaveSettings(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  await window.vayuStore.updateCompany({
    name: formData.get("name"),
    office: formData.get("office"),
    phone: formData.get("phone"),
    whatsapp: formData.get("whatsapp"),
    email: formData.get("email"),
    hours: formData.get("hours")
  });

  showToast("Settings Saved", "Company profile and contact details updated.");
}

async function handleResetStore() {
  if (confirm("Reset all packages, leads, destinations, and settings to original defaults?")) {
    window.vayuStore.resetToDefault();
    await switchAdminTab("dashboard");
    showToast("Reset Complete", "All data restored to 2026 clean defaults.");
  }
}

function searchEnquiriesTable(term) {
  const query = term.toLowerCase().trim();
  const rows = document.querySelectorAll("#adminEnquiriesTable tbody tr");
  rows.forEach(r => {
    const val = r.getAttribute("data-enquiry-row") || "";
    if (val.includes(query)) r.style.display = "";
    else r.style.display = "none";
  });
}

// --- Admin Modals for Package Editing & Enquiry Viewing ---
function openPackageEditorModal(pkgId = null) {
  const pkg = pkgId ? window.vayuStore.getPackageById(pkgId) : {
    title: "",
    destinationName: "Kashmir, India",
    destinationId: "kashmir",
    category: "domestic",
    experienceType: "luxury",
    durationDays: 6,
    durationNights: 5,
    price: 35000,
    originalPrice: 40000,
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
    overview: "Original luxury itinerary crafted with private chauffeurs and handpicked verified stays.",
    highlights: ["Private transfers", "Luxury 4/5 star hotels", "Breakfast & Dinner included"],
    itinerary: [
      { day: 1, title: "Arrival & Welcome", description: "VIP reception and transfer to private luxury resort.", stay: "Luxury Resort", meals: "Dinner Included" }
    ],
    inclusions: ["Accommodation in handpicked properties", "Daily buffet breakfast", "Private AC vehicle"],
    exclusions: ["Airfare", "Personal expenses"]
  };

  const modalHtml = `
    <div class="modal-overlay open" id="pkgEditorModal">
      <div class="modal-dialog" style="max-width: 760px;">
        <div class="modal-header">
          <h3 class="modal-title">${pkgId ? 'Edit Holiday Package' : 'Create New Holiday Package'}</h3>
          <button class="modal-close-btn" onclick="document.getElementById('pkgEditorModal').remove()">${ICONS.x}</button>
        </div>

        <form onsubmit="handleSavePackageForm(event, '${pkgId || ''}')">
          <div class="modal-body">
            <div class="form-group">
              <label class="form-label">Package Title *</label>
              <input type="text" name="title" class="form-control" value="${pkg.title}" required />
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="form-group">
                <label class="form-label">Destination Name</label>
                <input type="text" name="destinationName" class="form-control" value="${pkg.destinationName}" required />
              </div>
              <div class="form-group">
                <label class="form-label">Category</label>
                <select name="category" class="form-control">
                  <option value="domestic" ${pkg.category === 'domestic' ? 'selected' : ''}>Domestic (India)</option>
                  <option value="international" ${pkg.category === 'international' ? 'selected' : ''}>International</option>
                  <option value="honeymoon" ${pkg.category === 'honeymoon' ? 'selected' : ''}>Honeymoon Special</option>
                  <option value="luxury" ${pkg.category === 'luxury' ? 'selected' : ''}>Ultra-Luxury</option>
                  <option value="group" ${pkg.category === 'group' ? 'selected' : ''}>Guided Group</option>
                  <option value="mice" ${pkg.category === 'mice' ? 'selected' : ''}>Corporate MICE</option>
                </select>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem;">
              <div class="form-group">
                <label class="form-label">Duration (Days)</label>
                <input type="number" name="durationDays" class="form-control" value="${pkg.durationDays}" required />
              </div>
              <div class="form-group">
                <label class="form-label">Duration (Nights)</label>
                <input type="number" name="durationNights" class="form-control" value="${pkg.durationNights}" required />
              </div>
              <div class="form-group">
                <label class="form-label">Price (INR) *</label>
                <input type="number" name="price" class="form-control" value="${pkg.price}" required />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Hero Cover Image URL</label>
              <input type="url" name="image" class="form-control" value="${pkg.image}" required />
            </div>

            <div class="form-group">
              <label class="form-label">Overview & Description</label>
              <textarea name="overview" class="form-control" required>${pkg.overview}</textarea>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" onclick="document.getElementById('pkgEditorModal').remove()">Cancel</button>
            <button type="submit" class="btn btn-gold">Save Package</button>
          </div>
        </form>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", modalHtml);
}

async function handleSavePackageForm(e, pkgId) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const pkgData = {
    title: formData.get("title"),
    destinationName: formData.get("destinationName"),
    destinationId: formData.get("destinationName").toLowerCase().split(' ')[0],
    category: formData.get("category"),
    durationDays: parseInt(formData.get("durationDays"), 10),
    durationNights: parseInt(formData.get("durationNights"), 10),
    price: parseInt(formData.get("price"), 10),
    image: formData.get("image"),
    overview: formData.get("overview"),
    rating: 4.95,
    reviewsCount: 42
  };
  if (pkgId) pkgData.id = pkgId;
  await window.vayuStore.savePackage(pkgData);
  document.getElementById("pkgEditorModal")?.remove();
  await switchAdminTab("packages");
  showToast("Package Saved", pkgData.title);
}

function openAdminEnquiryModal(enqId) {
  const list = window.vayuStore.getEnquiries();
  const enq = list.find(e => e.id === enqId);
  if (!enq) return;

  const modalHtml = `
    <div class="modal-overlay open" id="enqDetailModal">
      <div class="modal-dialog">
        <div class="modal-header">
          <div>
            <span class="eyebrow">${enq.id}</span>
            <h3 class="modal-title">Enquiry Details: ${enq.name}</h3>
          </div>
          <button class="modal-close-btn" onclick="document.getElementById('enqDetailModal').remove()">${ICONS.x}</button>
        </div>

        <div class="modal-body">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
            <div>
              <strong style="color: var(--color-gold-dark); font-size: 0.8rem; text-transform: uppercase;">Traveler Info:</strong>
              <div style="font-weight: 700; font-size: 1.1rem; margin-top: 2px;">${enq.name}</div>
              <div>Phone: <a href="tel:${enq.phone}">${enq.phone}</a></div>
              <div>Email: <a href="mailto:${enq.email}">${enq.email}</a></div>
              <div>Departure: ${enq.departureCity || 'Bhopal'}</div>
            </div>

            <div>
              <strong style="color: var(--color-gold-dark); font-size: 0.8rem; text-transform: uppercase;">Journey Details:</strong>
              <div style="font-weight: 700; font-size: 1.1rem; margin-top: 2px;">${enq.destination}</div>
              <div>Month: ${enq.travelMonth}</div>
              <div>Travelers: ${enq.travelers}</div>
              <div>Budget: ${enq.budgetPerPerson}</div>
            </div>
          </div>

          <div style="background: var(--color-sand); padding: 1.25rem; border-radius: var(--radius-md); margin-bottom: 1.5rem;">
            <strong style="color: var(--color-gold-dark); font-size: 0.8rem; text-transform: uppercase;">Customer Notes:</strong>
            <p style="margin-top: 0.5rem; font-size: 0.95rem; color: var(--color-obsidian);">${enq.notes || 'None'}</p>
          </div>

          <div class="form-group">
            <label class="form-label">Update Status</label>
            <select id="modalEnqStatus" class="form-control">
              <option value="New" ${enq.status === 'New' ? 'selected' : ''}>New</option>
              <option value="Contacted" ${enq.status === 'Contacted' ? 'selected' : ''}>Contacted</option>
              <option value="Quoted" ${enq.status === 'Quoted' ? 'selected' : ''}>Quoted</option>
              <option value="Booked" ${enq.status === 'Booked' ? 'selected' : ''}>Booked</option>
              <option value="Lost" ${enq.status === 'Lost' ? 'selected' : ''}>Lost</option>
            </select>
          </div>
        </div>

        <div class="modal-footer">
          <a 
            href="https://wa.me/${enq.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello ${enq.name}, this is Shubham Vishwkarma, MD & CEO from Vayu Holidays Bhopal. We have reviewed your request for ${enq.destination} (${enq.travelMonth}). I'd love to share our tailored proposal.`)}" 
            target="_blank" 
            rel="noopener" 
            class="btn btn-whatsapp"
          >
            ${ICONS.whatsapp} Open WhatsApp Chat
          </a>

          <button class="btn btn-gold" onclick="
            window.vayuStore.updateEnquiryStatus('${enq.id}', document.getElementById('modalEnqStatus').value).then(() => {
              document.getElementById('enqDetailModal').remove();
              switchAdminTab('enquiries');
              showToast('Updated', 'Enquiry status updated.');
            });
          ">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", modalHtml);
}

// --- Destination Editor Modal ---
function openDestinationEditorModal(destId = null) {
  const dest = destId ? window.vayuStore.getDestinations().find(d => d.id === destId) : {
    name: "",
    type: "domestic",
    tagline: "",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
    description: "",
    startingPrice: 35000,
    packagesCount: 3
  };

  const modalHtml = `
    <div class="modal-overlay open" id="destEditorModal">
      <div class="modal-dialog">
        <div class="modal-header">
          <h3 class="modal-title">${destId ? 'Edit Destination' : 'Add Destination'}</h3>
          <button class="modal-close-btn" onclick="document.getElementById('destEditorModal').remove()">${ICONS.x}</button>
        </div>
        <form onsubmit="handleSaveDestinationForm(event, '${destId || ''}')">
          <div class="modal-body">
            <div class="form-group">
              <label class="form-label">Destination Name *</label>
              <input type="text" name="name" class="form-control" value="${dest.name}" required />
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="form-group">
                <label class="form-label">Region Type</label>
                <select name="type" class="form-control">
                  <option value="domestic" ${dest.type === 'domestic' ? 'selected' : ''}>Domestic (India)</option>
                  <option value="international" ${dest.type === 'international' ? 'selected' : ''}>International</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Starting Price (INR)</label>
                <input type="number" name="startingPrice" class="form-control" value="${dest.startingPrice}" required />
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Tagline</label>
              <input type="text" name="tagline" class="form-control" value="${dest.tagline}" placeholder="e.g. Paradise in Bloom" required />
            </div>
            <div class="form-group">
              <label class="form-label">Hero Cover Image URL</label>
              <input type="url" name="image" class="form-control" value="${dest.image}" required />
            </div>
            <div class="form-group">
              <label class="form-label">Short Description</label>
              <textarea name="description" class="form-control" required>${dest.description}</textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" onclick="document.getElementById('destEditorModal').remove()">Cancel</button>
            <button type="submit" class="btn btn-gold">Save Destination</button>
          </div>
        </form>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", modalHtml);
}

async function handleSaveDestinationForm(e, destId) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const destData = {
    name: formData.get("name"), type: formData.get("type"),
    tagline: formData.get("tagline"), image: formData.get("image"),
    description: formData.get("description"),
    startingPrice: parseInt(formData.get("startingPrice"), 10) || 35000,
    packagesCount: 3
  };
  if (destId) destData.id = destId;
  await window.vayuStore.saveDestination(destData);
  document.getElementById("destEditorModal")?.remove();
  await switchAdminTab("destinations");
  showToast("Destination Saved", destData.name);
}

// --- Blog Editor Modal ---
function openBlogEditorModal(blogId = null) {
  const blog = blogId ? window.vayuStore.getBlogs().find(b => b.id === blogId) : {
    title: "",
    category: "Destination Guide",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
    excerpt: "",
    content: "Travel essay and advice from Vayu Holidays curators..."
  };

  const modalHtml = `
    <div class="modal-overlay open" id="blogEditorModal">
      <div class="modal-dialog" style="max-width: 720px;">
        <div class="modal-header">
          <h3 class="modal-title">${blogId ? 'Edit Travel Story' : 'Create New Travel Story'}</h3>
          <button class="modal-close-btn" onclick="document.getElementById('blogEditorModal').remove()">${ICONS.x}</button>
        </div>
        <form onsubmit="handleSaveBlogForm(event, '${blogId || ''}')">
          <div class="modal-body">
            <div class="form-group">
              <label class="form-label">Article Title *</label>
              <input type="text" name="title" class="form-control" value="${blog.title}" required />
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="form-group">
                <label class="form-label">Category</label>
                <select name="category" class="form-control">
                  <option value="Destination Guide" ${blog.category === 'Destination Guide' ? 'selected' : ''}>Destination Guide</option>
                  <option value="Visa & Tips" ${blog.category === 'Visa & Tips' ? 'selected' : ''}>Visa & Tips</option>
                  <option value="Luxury Travel" ${blog.category === 'Luxury Travel' ? 'selected' : ''}>Luxury Travel</option>
                  <option value="Honeymoon Secrets" ${blog.category === 'Honeymoon Secrets' ? 'selected' : ''}>Honeymoon Secrets</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Read Time</label>
                <input type="text" name="readTime" class="form-control" value="${blog.readTime}" required />
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Cover Image URL</label>
              <input type="url" name="image" class="form-control" value="${blog.image}" required />
            </div>
            <div class="form-group">
              <label class="form-label">Short Summary (Excerpt)</label>
              <textarea name="excerpt" class="form-control" style="min-height: 70px;" required>${blog.excerpt}</textarea>
            </div>
            <div class="form-group">
              <label class="form-label">Full Article Markdown Content</label>
              <textarea name="content" class="form-control" style="min-height: 140px;" required>${blog.content}</textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" onclick="document.getElementById('blogEditorModal').remove()">Cancel</button>
            <button type="submit" class="btn btn-gold">Publish Story</button>
          </div>
        </form>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", modalHtml);
}

async function handleSaveBlogForm(e, blogId) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const blogData = {
    title: formData.get("title"), category: formData.get("category"),
    readTime: formData.get("readTime"), image: formData.get("image"),
    excerpt: formData.get("excerpt"), content: formData.get("content")
  };
  if (blogId) blogData.id = blogId;
  await window.vayuStore.saveBlog(blogData);
  document.getElementById("blogEditorModal")?.remove();
  await switchAdminTab("blogs");
  showToast("Story Published", blogData.title);
}

// --- Testimonial Editor Modal ---
function openTestimonialEditorModal() {
  const modalHtml = `
    <div class="modal-overlay open" id="testEditorModal">
      <div class="modal-dialog">
        <div class="modal-header">
          <h3 class="modal-title">Add Client Review</h3>
          <button class="modal-close-btn" onclick="document.getElementById('testEditorModal').remove()">${ICONS.x}</button>
        </div>
        <form onsubmit="handleSaveTestimonialForm(event)">
          <div class="modal-body">
            <div class="form-group">
              <label class="form-label">Client Name *</label>
              <input type="text" name="name" class="form-control" placeholder="e.g. Dr. Rajesh Sharma" required />
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="form-group">
                <label class="form-label">Location</label>
                <input type="text" name="location" class="form-control" placeholder="Bhopal, MP" required />
              </div>
              <div class="form-group">
                <label class="form-label">Trip Taken</label>
                <input type="text" name="trip" class="form-control" placeholder="Kashmir 6D Tour" required />
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Review Quote *</label>
              <textarea name="quote" class="form-control" placeholder="Client feedback quote..." required></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" onclick="document.getElementById('testEditorModal').remove()">Cancel</button>
            <button type="submit" class="btn btn-gold">Save Review</button>
          </div>
        </form>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", modalHtml);
}

async function handleSaveTestimonialForm(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  await window.vayuStore.saveTestimonial({
    name: formData.get("name"), location: formData.get("location"),
    trip: formData.get("trip"), rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    quote: formData.get("quote")
  });
  document.getElementById("testEditorModal")?.remove();
  await switchAdminTab("testimonials");
  showToast("Review Added", "Client testimonial logged.");
}

// --- Offers & Campaign Banners Tab ---
function renderAdminOffersTab() {
  const offers = window.vayuStore.getOffers();

  return `
    <div class="admin-card">
      <div class="admin-card-header">
        <div>
          <h3 class="admin-card-title">Promotions, Special Offers & Banners</h3>
          <p style="font-size: 0.82rem; color: var(--color-text-inverse-muted);">
            Manage seasonal discounts, festival coupon codes, and privilege booking perks.
          </p>
        </div>
        <button class="btn btn-gold btn-sm" onclick="openOfferEditorModal()">+ Create New Offer</button>
      </div>

      <div class="admin-table-wrap">
        <table class="admin-table">
          <thead>
            <tr>
              <th>Offer Title</th>
              <th>Promo Code</th>
              <th>Discount / Privilege</th>
              <th>Validity</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${offers.map(o => `
              <tr>
                <td><strong>${o.title}</strong></td>
                <td><code style="background: rgba(197, 168, 128, 0.2); color: var(--color-gold); padding: 2px 8px; border-radius: 4px; font-weight: 700;">${o.code}</code></td>
                <td>${o.discount}</td>
                <td>${o.validity}</td>
                <td>
                  <span class="status-pill ${o.active ? 'status-booked' : 'status-lost'}">
                    ${o.active ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td>
                  <div class="table-actions">
                    <button class="btn-table-action" onclick="openOfferEditorModal('${o.id}')">Edit</button>
                    <button class="btn-table-action" style="color: #f87171;" onclick="handleDeleteOffer('${o.id}')">Del</button>
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function openOfferEditorModal(offerId = null) {
  const offer = offerId ? window.vayuStore.getOffers().find(o => o.id === offerId) : {
    title: "",
    code: "VAYU2026",
    discount: "Save ₹5,000 on International Bookings",
    validity: "Valid for bookings made 30 days prior to travel",
    active: true
  };

  const modalHtml = `
    <div class="modal-overlay open" id="offerEditorModal">
      <div class="modal-dialog">
        <div class="modal-header">
          <h3 class="modal-title">${offerId ? 'Edit Offer' : 'Create Special Offer'}</h3>
          <button class="modal-close-btn" onclick="document.getElementById('offerEditorModal').remove()">${ICONS.x}</button>
        </div>
        <form onsubmit="handleSaveOfferForm(event, '${offerId || ''}')">
          <div class="modal-body">
            <div class="form-group">
              <label class="form-label">Offer Title *</label>
              <input type="text" name="title" class="form-control" value="${offer.title}" placeholder="e.g. Early Bird Festive Privilege" required />
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="form-group">
                <label class="form-label">Coupon Code</label>
                <input type="text" name="code" class="form-control" value="${offer.code}" required />
              </div>
              <div class="form-group">
                <label class="form-label">Status</label>
                <select name="active" class="form-control">
                  <option value="true" ${offer.active ? 'selected' : ''}>Active</option>
                  <option value="false" ${!offer.active ? 'selected' : ''}>Paused / Inactive</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Discount & Benefits Description</label>
              <input type="text" name="discount" class="form-control" value="${offer.discount}" required />
            </div>
            <div class="form-group">
              <label class="form-label">Validity Terms</label>
              <input type="text" name="validity" class="form-control" value="${offer.validity}" required />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" onclick="document.getElementById('offerEditorModal').remove()">Cancel</button>
            <button type="submit" class="btn btn-gold">Save Offer</button>
          </div>
        </form>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", modalHtml);
}

async function handleSaveOfferForm(e, offerId) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const offerData = {
    title: formData.get("title"), code: formData.get("code"),
    discount: formData.get("discount"), validity: formData.get("validity"),
    active: formData.get("active") === "true"
  };
  if (offerId) offerData.id = offerId;
  await window.vayuStore.saveOffer(offerData);
  document.getElementById("offerEditorModal")?.remove();
  await switchAdminTab("offers");
  showToast("Offer Saved", offerData.title);
}

async function handleDeleteOffer(id) {
  if (confirm(`Delete offer ${id}?`)) {
    await window.vayuStore.deleteOffer(id);
    await switchAdminTab("offers");
    showToast("Offer Removed", id);
  }
}

// --- Media Library Tab ---
function renderAdminMediaTab() {
  const media = window.vayuStore.getMedia();

  return `
    <div class="admin-card">
      <div class="admin-card-header">
        <div>
          <h3 class="admin-card-title">Curated Media & Photography Library</h3>
          <p style="font-size: 0.82rem; color: var(--color-text-inverse-muted);">
            High-resolution destination media for packages, articles, and hero banners.
          </p>
        </div>
        <button class="btn btn-gold btn-sm" onclick="openMediaAddModal()">+ Add New Asset</button>
      </div>

      <div style="padding: 1.75rem;">
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1.5rem;">
          ${media.map(m => `
            <div style="background: #080C10; border: 1px solid var(--border-dark); border-radius: var(--radius-md); overflow: hidden; display: flex; flex-direction: column;">
              <img src="${m.url}" alt="${m.title}" style="width: 100%; aspect-ratio: 16 / 10; object-fit: cover;" />
              <div style="padding: 1rem; flex-grow: 1; display: flex; flex-direction: column;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
                  <span class="badge badge-dark" style="font-size: 0.65rem;">${m.tag}</span>
                  <button class="btn-table-action" style="color: #f87171; padding: 2px 6px;" onclick="handleDeleteMedia('${m.id}')">Del</button>
                </div>
                <div style="font-size: 0.85rem; font-weight: 600; color: #fff; margin-bottom: 0.75rem;">${m.title}</div>
                <button class="btn btn-secondary btn-sm" style="margin-top: auto; font-size: 0.75rem; width: 100%;" onclick="navigator.clipboard.writeText('${m.url}'); showToast('URL Copied', 'Asset link copied to clipboard.');">
                  Copy Image Link
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function openMediaAddModal() {
  const modalHtml = `
    <div class="modal-overlay open" id="mediaAddModal">
      <div class="modal-dialog">
        <div class="modal-header">
          <h3 class="modal-title">Add Photographic Asset</h3>
          <button class="modal-close-btn" onclick="document.getElementById('mediaAddModal').remove()">${ICONS.x}</button>
        </div>
        <form onsubmit="handleSaveMediaForm(event)">
          <div class="modal-body">
            <div class="form-group">
              <label class="form-label">Asset Title *</label>
              <input type="text" name="title" class="form-control" placeholder="e.g. Kashmir Dal Lake Sunrise" required />
            </div>
            <div class="form-group">
              <label class="form-label">Category / Tag</label>
              <select name="tag" class="form-control">
                <option value="Domestic">Domestic</option>
                <option value="International">International</option>
                <option value="Honeymoon">Honeymoon</option>
                <option value="Luxury">Luxury</option>
                <option value="MICE">Corporate MICE</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Image URL (High-Res Unsplash or Web) *</label>
              <input type="url" name="url" class="form-control" placeholder="https://images.unsplash.com/..." required />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" onclick="document.getElementById('mediaAddModal').remove()">Cancel</button>
            <button type="submit" class="btn btn-gold">Save Asset</button>
          </div>
        </form>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", modalHtml);
}

async function handleSaveMediaForm(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  await window.vayuStore.saveMedia({
    title: formData.get("title"), tag: formData.get("tag"), url: formData.get("url")
  });
  document.getElementById("mediaAddModal")?.remove();
  await switchAdminTab("media");
  showToast("Asset Saved", "Media added to library.");
}

async function handleDeleteMedia(id) {
  if (confirm(`Remove asset ${id}?`)) {
    await window.vayuStore.deleteMedia(id);
    await switchAdminTab("media");
    showToast("Asset Removed", id);
  }
}

// --- Pages & Hero Content Settings Tab ---
async function renderAdminPagesTab() {
  const pageSettings = await window.vayuStore.getPageSettings();

  return `
    <div class="admin-card">
      <div class="admin-card-header">
        <h3 class="admin-card-title">Homepage Hero & Global SEO Settings</h3>
      </div>

      <form onsubmit="handleSavePageSettingsForm(event)" style="padding: 2rem;">
        <div class="form-group">
          <label class="form-label" style="color: var(--color-ivory);">Top Announcement Bar Text</label>
          <input type="text" name="announcementText" class="form-control" value="${pageSettings.announcementText}" style="background: #080C10; color: #fff; border-color: var(--border-dark);" required />
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
          <div class="form-group">
            <label class="form-label" style="color: var(--color-ivory);">Homepage Main Headline</label>
            <input type="text" name="heroHeadline" class="form-control" value="${pageSettings.heroHeadline}" style="background: #080C10; color: #fff; border-color: var(--border-dark);" required />
          </div>

          <div class="form-group">
            <label class="form-label" style="color: var(--color-ivory);">SEO Meta Title (Browser & Search)</label>
            <input type="text" name="metaTitle" class="form-control" value="${pageSettings.metaTitle}" style="background: #080C10; color: #fff; border-color: var(--border-dark);" required />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" style="color: var(--color-ivory);">Homepage Hero Subtitle</label>
          <textarea name="heroSubtitle" class="form-control" style="background: #080C10; color: #fff; border-color: var(--border-dark); min-height: 80px;" required>${pageSettings.heroSubtitle}</textarea>
        </div>

        <div class="form-group">
          <label class="form-label" style="color: var(--color-ivory);">Global SEO Meta Description</label>
          <textarea name="metaDescription" class="form-control" style="background: #080C10; color: #fff; border-color: var(--border-dark); min-height: 70px;" required>${pageSettings.metaDescription}</textarea>
        </div>

        <button type="submit" class="btn btn-gold" style="margin-top: 1rem;">
          Save Hero & SEO Settings
        </button>
      </form>
    </div>
  `;
}

async function handleSavePageSettingsForm(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  await window.vayuStore.savePageSettings({
    announcementText: formData.get("announcementText"),
    heroHeadline:     formData.get("heroHeadline"),
    heroSubtitle:     formData.get("heroSubtitle"),
    metaTitle:        formData.get("metaTitle"),
    metaDescription:  formData.get("metaDescription")
  });

  showToast("SEO & Pages Updated", "Settings saved successfully.");
}

