/* ==========================================================================
   VAYU HOLIDAYS — PACKAGES CATALOG VIEW (Multi-facet Filters & Search)
   ========================================================================== */

async function renderPackagesView(filterType = "all") {
  const packages = await window.vayuStore.getPackages();

  // Read URL query params if any
  const hash = window.location.hash;
  const urlParams = new URLSearchParams(hash.includes("?") ? hash.split("?")[1] : "");
  const queryDest = urlParams.get("dest") || "";
  const queryTheme = urlParams.get("theme") || "";

  let initialCategory = filterType !== "all" ? filterType : "all";
  if (queryTheme) initialCategory = queryTheme;

  return `
    <div class="package-detail-header">
      <div class="container">
        <div class="breadcrumbs">
          <a href="#/">Home</a>
          <span class="breadcrumb-separator">/</span>
          <span style="color: var(--color-obsidian); font-weight: 600;">Holiday Packages</span>
        </div>

        <div class="package-detail-title-wrap">
          <div>
            <span class="eyebrow">2026 Curated Catalog</span>
            <h1 class="package-detail-title">
              ${getHeaderTitleForCategory(filterType)}
            </h1>
            <p style="font-size: 1.05rem; max-width: 680px; color: var(--color-text-muted);">
              Explore private, chauffeured holiday itineraries with handpicked 4★ & 5★ luxury stays, confirmed sightseeing, and 24/7 concierge support.
            </p>
          </div>

          <button class="btn btn-gold" onclick="openEnquiryModal({ title: 'Custom Itinerary Inquiry' })">
            ${ICONS.sparkles} Request Custom Itinerary
          </button>
        </div>
      </div>
    </div>

    <section class="section" style="padding-top: 3rem;">
      <div class="container">
        <!-- FILTER & SEARCH BAR -->
        <div style="background: var(--color-cream); border: 1px solid var(--border-gold); border-radius: var(--radius-lg); padding: 1.5rem 1.75rem; box-shadow: var(--shadow-sm); margin-bottom: 2.5rem; display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr; gap: 1rem; align-items: flex-end;">
          <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label">${ICONS.sparkles} Search by Keyword</label>
            <input 
              type="text" 
              id="pkgSearchInput" 
              class="form-control" 
              placeholder="Search destination, resort, city..." 
              value="${queryDest}" 
              oninput="filterPackagesCatalog()" 
            />
          </div>

          <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label">Category / Theme</label>
            <select id="pkgCategoryFilter" class="form-control" onchange="filterPackagesCatalog()">
              <option value="all" ${initialCategory === 'all' ? 'selected' : ''}>All Categories</option>
              <option value="domestic" ${initialCategory === 'domestic' ? 'selected' : ''}>Domestic (Incredible India)</option>
              <option value="international" ${initialCategory === 'international' ? 'selected' : ''}>International Escapes</option>
              <option value="honeymoon" ${initialCategory === 'honeymoon' ? 'selected' : ''}>Honeymoon Specials</option>
              <option value="luxury" ${initialCategory === 'luxury' ? 'selected' : ''}>Ultra-Luxury</option>
              <option value="group" ${initialCategory === 'group' ? 'selected' : ''}>Guided Groups</option>
              <option value="mice" ${initialCategory === 'mice' ? 'selected' : ''}>Corporate MICE</option>
            </select>
          </div>

          <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label">Trip Duration</label>
            <select id="pkgDurationFilter" class="form-control" onchange="filterPackagesCatalog()">
              <option value="all">Any Duration</option>
              <option value="short">4 - 5 Days</option>
              <option value="medium">6 - 7 Days</option>
              <option value="long">8+ Days</option>
            </select>
          </div>

          <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label">Sort Order</label>
            <select id="pkgSortFilter" class="form-control" onchange="filterPackagesCatalog()">
              <option value="recommended">Vayu Recommended</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated (Guest Reviews)</option>
            </select>
          </div>
        </div>

        <!-- PACKAGES GRID -->
        <div class="packages-grid" id="packagesCatalogGrid">
          ${packages.map(p => renderPackageCard(p)).join('')}
        </div>

        <!-- NO RESULTS MESSAGE -->
        <div id="noPackagesMsg" style="display: none; text-align: center; padding: 4rem 2rem; background: var(--color-sand); border-radius: var(--radius-lg); margin-top: 2rem;">
          <h3 style="font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: 0.75rem;">No matching journeys found</h3>
          <p style="color: var(--color-text-muted); margin-bottom: 1.5rem;">
            Try adjusting your search filters or ask our Bhopal concierge to craft a custom itinerary for any destination.
          </p>
          <button class="btn btn-gold" onclick="openEnquiryModal({ title: 'Custom Travel Consultation' })">
            ${ICONS.sparkles} Request Custom Route
          </button>
        </div>

        <!-- CUSTOM TRIP CALLOUT BANNER -->
        <div style="margin-top: 4.5rem; background: var(--color-sand); border: 1px solid var(--border-gold); border-radius: var(--radius-xl); padding: 3rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 2rem;">
          <div style="max-width: 650px;">
            <span class="eyebrow">Bespoke Travel Solutions</span>
            <h3 style="font-family: var(--font-serif); font-size: 1.75rem; margin-bottom: 0.5rem;">Can't find your exact dates or destination?</h3>
            <p style="font-size: 0.95rem; color: var(--color-text-muted);">
              We specialize in custom tailor-made journeys. Tell us your ideal destinations, preferred hotel tier, and group configuration — our Bhopal office will draft your proposal.
            </p>
          </div>

          <button class="btn btn-primary btn-lg" onclick="openEnquiryModal({ title: 'Tailor-Made Custom Journey' })">
            ${ICONS.sparkles} Design Custom Trip
          </button>
        </div>
      </div>
    </section>
  `;
}

function getHeaderTitleForCategory(filterType) {
  switch (filterType) {
    case "domestic": return "Domestic India Tours & Retreats";
    case "international": return "International Luxury Escapes";
    case "group-tours":
    case "group": return "Guided Group Expeditions 2026";
    case "honeymoon": return "Romantic Honeymoon Sanctuaries";
    case "mice": return "Corporate MICE & Executive Offsites";
    default: return "2026 Holiday Packages & Tours";
  }
}

async function filterPackagesCatalog() {
  const query = (document.getElementById("pkgSearchInput")?.value || "").toLowerCase().trim();
  const category = document.getElementById("pkgCategoryFilter")?.value || "all";
  const duration = document.getElementById("pkgDurationFilter")?.value || "all";
  const sort = document.getElementById("pkgSortFilter")?.value || "recommended";

  let list = await window.vayuStore.getPackages();

  // Keyword filter
  if (query) {
    list = list.filter(p =>
      p.title.toLowerCase().includes(query) ||
      p.destinationName.toLowerCase().includes(query) ||
      p.overview.toLowerCase().includes(query) ||
      p.destinationId.toLowerCase().includes(query)
    );
  }

  // Category filter
  if (category !== "all") {
    list = list.filter(p => p.category === category || p.experienceType === category);
  }

  // Duration filter
  if (duration === "short") {
    list = list.filter(p => p.durationDays <= 5);
  } else if (duration === "medium") {
    list = list.filter(p => p.durationDays >= 6 && p.durationDays <= 7);
  } else if (duration === "long") {
    list = list.filter(p => p.durationDays >= 8);
  }

  // Sorting
  if (sort === "price-asc") {
    list.sort((a, b) => a.price - b.price);
  } else if (sort === "price-desc") {
    list.sort((a, b) => b.price - a.price);
  } else if (sort === "rating") {
    list.sort((a, b) => b.rating - a.rating);
  }

  const grid = document.getElementById("packagesCatalogGrid");
  const noMsg = document.getElementById("noPackagesMsg");

  if (grid) {
    if (list.length === 0) {
      grid.innerHTML = "";
      if (noMsg) noMsg.style.display = "block";
    } else {
      if (noMsg) noMsg.style.display = "none";
      grid.innerHTML = list.map(p => renderPackageCard(p)).join('');
    }
  }
}
