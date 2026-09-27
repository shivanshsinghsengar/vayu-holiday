/* ==========================================================================
   VAYU HOLIDAYS — HISTORY API ROUTER (Clean URLs)
   Uses window.history.pushState + popstate — no hash, Google-crawlable.
   Netlify _redirects + netlify.toml already handle /* → /index.html 200
   ========================================================================== */

const SITE = {
  url:         "https://www.vayuholidays.com",
  name:        "Vayu Holidays",
  phone:       "+91-755-492-8899",
  whatsapp:    "+91-98260-12345",
  address:     "Raksha Vihar, Vayu Residency, Airport Road, Bhopal, Madhya Pradesh 462030, India",
  logo:        "https://www.vayuholidays.com/icons/icon-512.png",
  defaultImg:  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
  rating:      4.9,
  reviewCount: 120
};

// ── Per-route SEO metadata ──────────────────────────────────────────────────
const ROUTE_META = {
  "/": {
    title:       "Vayu Holidays — Luxury Travel Agency & Tour Operator | Bhopal",
    description: "Vayu Holidays — Bhopal's most trusted luxury travel agency. Bespoke holiday packages to Kashmir, Kerala, Dubai, Bali, Switzerland & Maldives. 500+ trips. 4.9★ rated. 24/7 concierge.",
    image:       "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
  },
  "/packages": {
    title:       "Holiday Packages 2026 — Luxury Tours | Vayu Holidays Bhopal",
    description: "Explore 2026 luxury holiday packages — Kashmir, Kerala, Dubai, Bali, Switzerland, Maldives & Rajasthan. Transparent pricing, private chauffeurs, 4★ & 5★ hotels.",
    image:       "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
  },
  "/domestic": {
    title:       "Domestic India Tour Packages — Kashmir, Kerala, Rajasthan | Vayu Holidays",
    description: "Handcrafted domestic holiday packages from Bhopal. Kashmir valleys, Kerala backwaters, Rajasthan palaces. Private vehicles, verified stays, 24/7 support.",
    image:       "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80"
  },
  "/international": {
    title:       "International Tour Packages — Dubai, Bali, Switzerland | Vayu Holidays",
    description: "Luxury international holiday packages from Bhopal. Dubai, Bali, Switzerland, Maldives & Vietnam. Visa assistance, forex, private transfers included.",
    image:       "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80"
  },
  "/honeymoon": {
    title:       "Honeymoon Packages 2026 — Romantic Escapes | Vayu Holidays Bhopal",
    description: "Romantic honeymoon packages — Maldives overwater villas, Bali jungle retreats, Kashmir houseboats. Private, curated, unforgettable.",
    image:       "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80"
  },
  "/group-tours": {
    title:       "Guided Group Tours 2026 — Fixed Departures | Vayu Holidays",
    description: "Affordable guided group tours with fixed departures. Domestic & international destinations, senior-friendly, expert tour managers.",
    image:       "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
  },
  "/mice": {
    title:       "Corporate MICE & Offsite Travel | Vayu Holidays Bhopal",
    description: "End-to-end corporate MICE, incentive trips, dealer meets & leadership retreats. Chartered flights, luxury venues, on-ground management.",
    image:       "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80"
  },
  "/about": {
    title:       "About Vayu Holidays — Bhopal's Luxury Travel Agency",
    description: "Learn about Vayu Holidays — Bhopal-based luxury travel agency. 500+ trips, 4.9★, 8 years of excellence.",
    image:       "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
  },
  "/contact": {
    title:       "Contact Vayu Holidays — Bhopal Travel Agency | +91 755 492 8899",
    description: "Contact Vayu Holidays at our Airport Road Bhopal office. Call +91 755 492 8899 or WhatsApp +91 98260 12345. Mon–Sat 9:30 AM–7:30 PM.",
    image:       "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
  },
  "/blog": {
    title:       "Travel Journal — Destination Guides & Visa Tips | Vayu Holidays",
    description: "Expert travel guides, Schengen visa tips, destination essays curated by Vayu Holidays — Bhopal's luxury travel experts.",
    image:       "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
  },
  "/terms": {
    title:       "Terms & Booking Conditions | Vayu Holidays",
    description: "Complete terms, booking conditions, cancellation policy, and refund rules for Vayu Holidays.",
    image:       "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
  },
  "/privacy": {
    title:       "Privacy Policy — DPDP Act 2023 Compliant | Vayu Holidays",
    description: "Vayu Holidays privacy policy. How we collect, use, and protect your personal data. DPDP Act 2023 compliant.",
    image:       "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
  }
};

const SERVICE_META = {
  flights:   { title: "Flight Bookings & Charters | Vayu Holidays Bhopal",        description: "Domestic & international flight bookings from Bhopal. Best fares, group rates, IATA accredited." },
  hotels:    { title: "Luxury Hotel Bookings & Resorts | Vayu Holidays",           description: "Handpicked 4★ & 5★ hotel bookings worldwide. Heritage palaces, overwater villas — all verified." },
  visa:      { title: "Visa Assistance (50+ Countries) | Vayu Holidays Bhopal",    description: "Expert visa assistance for Schengen, UAE, Bali, UK, USA & 50+ countries. 99% first-time approval." },
  passport:  { title: "Passport Services — Fresh & Renewal | Vayu Holidays",       description: "Passport application, renewal, and Tatkaal assistance in Bhopal." },
  forex:     { title: "Forex & Multi-Currency Travel Cards | Vayu Holidays",       description: "Zero-markup foreign exchange and multi-currency travel cards. RBI-compliant. Doorstep delivery." },
  insurance: { title: "Travel Insurance — Cashless Global Cover | Vayu Holidays",  description: "Comprehensive travel insurance with cashless hospitalization. Schengen visa compliant." },
  bus:       { title: "Volvo Bus & Coach Bookings | Vayu Holidays Bhopal",         description: "Comfortable Volvo and luxury coach bookings from Bhopal. Group charters available." },
  train:     { title: "Train Ticketing & Rail Tours | Vayu Holidays",              description: "IRCTC assistance, Tatkal bookings, and luxury rail tours. Expert train travel desk in Bhopal." }
};

// ── Global navigate() — use this everywhere instead of location.hash ────────
window.navigate = function(path, replace = false) {
  if (replace) {
    window.history.replaceState({ path }, "", path);
  } else {
    window.history.pushState({ path }, "", path);
  }
  window.vayuRouter.handleRoute();
};

// ── Intercept all <a> clicks on internal links ───────────────────────────────
document.addEventListener("click", (e) => {
  const link = e.target.closest("a");
  if (!link) return;
  const href = link.getAttribute("href");
  if (!href) return;

  // Skip: external links, mailto, tel, target=_blank, admin
  if (
    href.startsWith("http") ||
    href.startsWith("mailto") ||
    href.startsWith("tel") ||
    href.startsWith("//") ||
    link.target === "_blank" ||
    link.rel === "noopener" ||
    href.startsWith("#") && !href.startsWith("#/") // pure anchor
  ) return;

  // Internal path navigation
  if (href.startsWith("/") || href.startsWith("#/")) {
    e.preventDefault();
    const cleanPath = href.startsWith("#/") ? href.slice(1) : href;
    window.navigate(cleanPath);
  }
});

// ── SEO Meta updater ─────────────────────────────────────────────────────────
function updatePageMeta({ title, description, image, canonical, type = "website" }) {
  document.title = title;

  const setMeta = (selector, attrPair, val) => {
    let el = document.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      const [k, v] = attrPair;
      el.setAttribute(k, v);
      document.head.appendChild(el);
    }
    el.setAttribute("content", val);
  };
  const setLink = (rel, href) => {
    let el = document.querySelector(`link[rel="${rel}"]`);
    if (!el) { el = document.createElement("link"); el.rel = rel; document.head.appendChild(el); }
    el.href = href;
  };

  const canonURL = canonical || (SITE.url + window.location.pathname);
  const img      = image || SITE.defaultImg;

  setMeta('meta[name="description"]',         ["name","description"],        description);
  setMeta('meta[name="robots"]',              ["name","robots"],             "index, follow, max-snippet:-1, max-image-preview:large");
  setLink("canonical", canonURL);

  setMeta('meta[property="og:title"]',        ["property","og:title"],       title);
  setMeta('meta[property="og:description"]',  ["property","og:description"], description);
  setMeta('meta[property="og:image"]',        ["property","og:image"],       img);
  setMeta('meta[property="og:image:width"]',  ["property","og:image:width"], "1200");
  setMeta('meta[property="og:image:height"]', ["property","og:image:height"],"630");
  setMeta('meta[property="og:url"]',          ["property","og:url"],         canonURL);
  setMeta('meta[property="og:type"]',         ["property","og:type"],        type);
  setMeta('meta[property="og:site_name"]',    ["property","og:site_name"],   SITE.name);

  setMeta('meta[name="twitter:card"]',        ["name","twitter:card"],       "summary_large_image");
  setMeta('meta[name="twitter:title"]',       ["name","twitter:title"],      title);
  setMeta('meta[name="twitter:description"]', ["name","twitter:description"],description);
  setMeta('meta[name="twitter:image"]',       ["name","twitter:image"],      img);
}

// ── JSON-LD injector ─────────────────────────────────────────────────────────
function injectJSONLD(schemas) {
  document.querySelectorAll('script[data-vayu-schema]').forEach(s => s.remove());
  schemas.filter(Boolean).forEach(schema => {
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.setAttribute("data-vayu-schema", "true");
    s.textContent = JSON.stringify(schema);
    document.head.appendChild(s);
  });
}

function schemaOrg() {
  return {
    "@context": "https://schema.org",
    "@type": ["TravelAgency","LocalBusiness"],
    "@id": `${SITE.url}/#organization`,
    "name": SITE.name,
    "url": SITE.url,
    "logo": SITE.logo,
    "telephone": SITE.phone,
    "email": "concierge@vayuholidays.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Raksha Vihar, Vayu Residency, Airport Road",
      "addressLocality": "Bhopal",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "462030",
      "addressCountry": "IN"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": "23.2599", "longitude": "77.4126" },
    "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "09:30", "closes": "19:30" }],
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": SITE.rating, "reviewCount": SITE.reviewCount, "bestRating": 5 }
  };
}

function schemaBreadcrumb(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({ "@type": "ListItem", "position": i + 1, "name": item.name, "item": item.url }))
  };
}

function schemaFAQ(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
  };
}

function schemaPackage(pkg) {
  if (!pkg) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": pkg.title,
    "description": pkg.overview,
    "image": pkg.image,
    "offers": { "@type": "Offer", "priceCurrency": "INR", "price": pkg.price, "availability": "https://schema.org/InStock", "seller": { "@type": "Organization", "name": SITE.name } },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": pkg.rating || SITE.rating, "reviewCount": pkg.reviewsCount || SITE.reviewCount, "bestRating": 5 }
  };
}

const HOME_FAQS = [
  { q: "What services does Vayu Holidays offer?",             a: "Bespoke holiday packages, flight bookings, hotel reservations, visa assistance for 50+ countries, forex, travel insurance, Volvo bus & train ticketing, and corporate MICE — all from our Bhopal office." },
  { q: "Where is Vayu Holidays located?",                     a: "Raksha Vihar, Vayu Residency, Airport Road, Bhopal, Madhya Pradesh, India — 462030." },
  { q: "How do I book a holiday package with Vayu Holidays?", a: "Submit an enquiry via our website, WhatsApp us on +91 98260 12345, or call +91 755 492 8899. Our travel manager shares an itemized quotation within 2 hours." },
  { q: "Do you offer customized honeymoon packages?",         a: "Yes. All itineraries including honeymoon packages are fully customizable — private villas, specific airlines, dietary preferences, celebration amenities." },
  { q: "Does Vayu Holidays assist with Schengen visa?",       a: "Yes. Our dedicated visa desk has a 99% first-time approval rate for Schengen, UAE, UK, USA, and 50+ other country visas." }
];

// ── MAIN ROUTER ──────────────────────────────────────────────────────────────
class VayuRouter {
  constructor() {
    // History API navigation
    window.addEventListener("popstate",        () => this.handleRoute());
    window.addEventListener("load",            () => this.handleRoute());
    window.addEventListener("currency-changed",() => this.handleRoute());
  }

  async handleRoute() {
    // Use pathname (clean URL) — strip trailing slash except root
    let path = window.location.pathname;
    if (path !== "/" && path.endsWith("/")) path = path.slice(0, -1);

    // Query string
    const qs = window.location.search;

    window.scrollTo({ top: 0, behavior: "smooth" });

    const app = document.getElementById("app");
    if (!app) return;
    app.innerHTML = this._loadingSkeleton();

    try {
      let pageContent = "";
      let schemas     = [schemaOrg()];

      // ─ ADMIN ──────────────────────────────────────────────────────────────
      if (path === "/admin") {
        updatePageMeta({ title: "Staff Portal — Vayu Holidays CMS", description: "Internal CMS. Authorized access only.", canonical: `${SITE.url}/admin` });
        document.querySelector('meta[name="robots"]')?.setAttribute("content", "noindex, nofollow");
        injectJSONLD([schemaOrg()]);
        app.innerHTML = await renderAdminView();
        return;
      }

      // ─ HOME ───────────────────────────────────────────────────────────────
      if (path === "/") {
        pageContent = await renderHomeView();
        updatePageMeta({ ...ROUTE_META["/"], canonical: SITE.url });
        schemas.push(schemaFAQ(HOME_FAQS));

      // ─ ABOUT ──────────────────────────────────────────────────────────────
      } else if (path === "/about") {
        pageContent = await renderAboutView();
        updatePageMeta({ ...ROUTE_META["/about"], canonical: `${SITE.url}/about` });
        schemas.push(schemaBreadcrumb([{ name:"Home", url:SITE.url },{ name:"About Us", url:`${SITE.url}/about` }]));

      // ─ PACKAGES ───────────────────────────────────────────────────────────
      } else if (path === "/packages") {
        pageContent = await renderPackagesView("all");
        updatePageMeta({ ...ROUTE_META["/packages"], canonical:`${SITE.url}/packages` });
        schemas.push(schemaBreadcrumb([{ name:"Home", url:SITE.url },{ name:"Holiday Packages", url:`${SITE.url}/packages` }]));

      } else if (path === "/domestic") {
        pageContent = await renderPackagesView("domestic");
        updatePageMeta({ ...ROUTE_META["/domestic"], canonical:`${SITE.url}/domestic` });
        schemas.push(schemaBreadcrumb([{ name:"Home", url:SITE.url },{ name:"Packages", url:`${SITE.url}/packages` },{ name:"Domestic Tours", url:`${SITE.url}/domestic` }]));

      } else if (path === "/international") {
        pageContent = await renderPackagesView("international");
        updatePageMeta({ ...ROUTE_META["/international"], canonical:`${SITE.url}/international` });
        schemas.push(schemaBreadcrumb([{ name:"Home", url:SITE.url },{ name:"Packages", url:`${SITE.url}/packages` },{ name:"International Tours", url:`${SITE.url}/international` }]));

      } else if (path === "/group-tours") {
        pageContent = await renderPackagesView("group");
        updatePageMeta({ ...ROUTE_META["/group-tours"], canonical:`${SITE.url}/group-tours` });

      } else if (path === "/honeymoon") {
        pageContent = await renderPackagesView("honeymoon");
        updatePageMeta({ ...ROUTE_META["/honeymoon"], canonical:`${SITE.url}/honeymoon` });

      } else if (path === "/mice") {
        pageContent = await renderServiceDetailView("mice");
        updatePageMeta({ ...ROUTE_META["/mice"], canonical:`${SITE.url}/mice` });

      // ─ PACKAGE DETAIL ─────────────────────────────────────────────────────
      } else if (path.startsWith("/package/")) {
        const packageId = path.replace("/package/", "");
        pageContent = await renderPackageDetailView(packageId);
        const pkg = await window.vayuStore.getPackageById(packageId);
        if (pkg) {
          updatePageMeta({
            title:       `${pkg.title} — ${pkg.durationDays}D/${pkg.durationNights}N | Vayu Holidays`,
            description: `${pkg.overview.slice(0, 155)}...`,
            image:       pkg.image,
            canonical:   `${SITE.url}/package/${packageId}`,
            type:        "product"
          });
          schemas.push(
            schemaPackage(pkg),
            schemaBreadcrumb([
              { name:"Home", url:SITE.url },
              { name:"Packages", url:`${SITE.url}/packages` },
              { name:pkg.destinationName, url:`${SITE.url}/packages?dest=${pkg.destinationId}` },
              { name:pkg.title, url:`${SITE.url}/package/${packageId}` }
            ])
          );
        } else {
          updatePageMeta({ title:"Package Not Found | Vayu Holidays", description:"The requested holiday itinerary could not be found.", canonical:SITE.url });
        }

      // ─ SERVICES ───────────────────────────────────────────────────────────
      } else if (path.startsWith("/services/")) {
        const slug = path.replace("/services/", "");
        pageContent = await renderServiceDetailView(slug);
        const sm = SERVICE_META[slug] || {};
        updatePageMeta({ title: sm.title || `${slug} Services | Vayu Holidays`, description: sm.description || `Professional ${slug} services from Vayu Holidays Bhopal.`, canonical:`${SITE.url}/services/${slug}` });
        schemas.push(schemaBreadcrumb([{ name:"Home", url:SITE.url },{ name:"Services", url:`${SITE.url}/services/flights` },{ name:sm.title?.split(" |")[0] || slug, url:`${SITE.url}/services/${slug}` }]));

      } else if (["/flights","/hotels","/bus","/train","/visa","/passport","/forex","/insurance"].includes(path)) {
        const slug = path.slice(1);
        pageContent = await renderServiceDetailView(slug);
        const sm = SERVICE_META[slug] || {};
        updatePageMeta({ title: sm.title || `${slug} | Vayu Holidays`, description: sm.description || "", canonical:`${SITE.url}/services/${slug}` });

      // ─ DESTINATIONS anchor ─────────────────────────────────────────────────
      } else if (path === "/destinations") {
        pageContent = await renderHomeView();
        updatePageMeta({ ...ROUTE_META["/"], canonical:SITE.url });
        setTimeout(() => document.getElementById("destinationsSection")?.scrollIntoView({ behavior:"smooth" }), 150);

      } else if (path === "/experiences") {
        pageContent = await renderHomeView();
        updatePageMeta({ ...ROUTE_META["/"], canonical:SITE.url });
        setTimeout(() => document.getElementById("packagesSection")?.scrollIntoView({ behavior:"smooth" }), 150);

      // ─ BLOG ───────────────────────────────────────────────────────────────
      } else if (path === "/blog") {
        pageContent = await renderBlogListView();
        updatePageMeta({ ...ROUTE_META["/blog"], canonical:`${SITE.url}/blog` });
        schemas.push(schemaBreadcrumb([{ name:"Home", url:SITE.url },{ name:"Travel Journal", url:`${SITE.url}/blog` }]));

      } else if (path.startsWith("/blog/")) {
        const slug = path.replace("/blog/", "");
        pageContent = await renderSingleBlogView(slug);
        const blog = await window.vayuStore.getBlogBySlug(slug);
        if (blog) {
          updatePageMeta({
            title:       `${blog.title} | Vayu Holidays Travel Journal`,
            description: blog.excerpt,
            image:       blog.image,
            canonical:   `${SITE.url}/blog/${slug}`,
            type:        "article"
          });
          schemas.push(
            { "@context":"https://schema.org", "@type":"Article", "headline":blog.title, "description":blog.excerpt, "image":blog.image, "datePublished":blog.date, "author":{ "@type":"Organization","name":SITE.name }, "publisher":{ "@type":"Organization","name":SITE.name,"logo":{ "@type":"ImageObject","url":SITE.logo } } },
            schemaBreadcrumb([{ name:"Home", url:SITE.url },{ name:"Travel Journal", url:`${SITE.url}/blog` },{ name:blog.title, url:`${SITE.url}/blog/${slug}` }])
          );
        }

      // ─ CONTACT ────────────────────────────────────────────────────────────
      } else if (path === "/contact") {
        pageContent = await renderContactView();
        updatePageMeta({ ...ROUTE_META["/contact"], canonical:`${SITE.url}/contact` });
        schemas.push(schemaBreadcrumb([{ name:"Home", url:SITE.url },{ name:"Contact", url:`${SITE.url}/contact` }]));

      // ─ LEGAL ──────────────────────────────────────────────────────────────
      } else if (path === "/terms") {
        pageContent = await renderTermsView();
        updatePageMeta({ ...ROUTE_META["/terms"], canonical:`${SITE.url}/terms` });

      } else if (path === "/privacy") {
        pageContent = await renderPrivacyView();
        updatePageMeta({ ...ROUTE_META["/privacy"], canonical:`${SITE.url}/privacy` });

      // ─ 404 ────────────────────────────────────────────────────────────────
      } else {
        pageContent = render404View();
        updatePageMeta({ title:"Page Not Found | Vayu Holidays", description:"The page you are looking for could not be found.", canonical:SITE.url });
        document.querySelector('meta[name="robots"]')?.setAttribute("content","noindex, nofollow");
      }

      injectJSONLD(schemas);

      const navbar = await renderNavbar();
      const footer = await renderFooter();
      app.innerHTML = `${navbar}<main id="mainContent" role="main">${pageContent}</main>${footer}`;

      this._updateActiveNavLink(path);
      if (typeof trackPageView === "function") trackPageView(path);

    } catch (err) {
      console.error("Router error:", err);
      app.innerHTML = `
        <div class="container" style="padding:6rem 1.5rem;text-align:center;">
          <h2 style="font-size:2rem;margin-bottom:1rem;color:#111;">Something went wrong</h2>
          <p style="color:#64748B;margin-bottom:2rem;">${err.message || "Please try again."}</p>
          <a href="/" class="btn btn-primary" onclick="event.preventDefault();window.navigate('/')">Return to Homepage</a>
        </div>
      `;
    }
  }

  _loadingSkeleton() {
    return `
      <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#F8F9FC;">
        <div style="text-align:center;">
          <div style="width:44px;height:44px;border-radius:50%;border:3px solid #E2E8F0;border-top-color:#111;animation:spin 0.75s linear infinite;margin:0 auto 1rem;"></div>
          <p style="font-family:'Poppins',sans-serif;font-size:0.95rem;color:#94A3B8;font-weight:500;">Loading…</p>
        </div>
      </div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
    `;
  }

  _updateActiveNavLink(path) {
    document.querySelectorAll(".nav-link").forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === path);
    });
  }
}

window.vayuRouter = new VayuRouter();
