# ✈️ Vayu Holidays — Luxury Travel Agency Website Template

**A complete, production-ready SPA (Single Page Application) for a luxury travel agency & tour operator.**  
Built with pure HTML, CSS, and Vanilla JavaScript — zero dependencies, zero build tools, instant deployment.

---

## 🔴 Live Demo
> **[▶ View Live Demo →](https://vayu-holidays-demo.netlify.app)**  
> Admin Portal: `admin@vayuholidays.com` / `vayu2026`

---

## 🖼️ Preview

| Homepage | Package Detail | Admin CMS |
|---|---|---|
| Cinematic hero, trip planner, destinations grid | Full itinerary, gallery, sticky quote card | Dark luxury dashboard, CRM, CRUD |

---

## 💼 What You Get

This is a **complete, white-label travel agency website** ready to be deployed and rebranded for any travel business. Everything is included:

### 🌐 Public Website (9 Pages)
| Page | Route | Description |
|---|---|---|
| **Homepage** | `#/` | Cinematic hero, trip planner wizard, destinations, packages, experiences, testimonials, blog preview, CTA |
| **Holiday Packages** | `#/packages` | Filterable catalog with search, category, duration & sort filters |
| **Package Detail** | `#/package/:id` | Full day-wise itinerary accordion, gallery grid, sticky booking card |
| **Services** | `#/services/:slug` | Individual pages for Flights, Hotels, Bus, Train, Visa, Passport, Forex, Insurance, MICE |
| **About Us** | `#/about` | Company story, leadership team, core values, office location |
| **Travel Blog** | `#/blog` | Article listing + full article reader with markdown rendering |
| **Contact** | `#/contact` | Enquiry form + Bhopal office info + Google Maps link |
| **Terms & Conditions** | `#/terms` | Full legal T&C with cancellation policy table |
| **Privacy Policy** | `#/privacy` | DPDP Act 2023 compliant privacy policy |

### 🔐 Admin CMS Dashboard (10 Tabs)
| Tab | What You Can Do |
|---|---|
| **Dashboard** | Live metrics, pipeline value, recent enquiry stream |
| **Enquiries CRM** | View, search, update status (New/Contacted/Quoted/Booked/Lost), delete leads |
| **Packages Manager** | Full CRUD — create, edit, delete holiday packages with cover image, pricing, overview |
| **Destinations Manager** | Add/edit/delete destinations with image, tagline, pricing |
| **Travel Stories** | Blog post CRUD — title, category, cover image, excerpt, full markdown content |
| **Testimonials** | Add and manage client reviews |
| **Offers & Banners** | Create, activate/pause promo codes and seasonal offers |
| **Media Library** | Photo asset library with copy-URL functionality |
| **Pages & SEO** | Edit hero headline, announcement bar, meta title & description |
| **Office Settings** | Edit company name, address, phone, WhatsApp, email, hours |

---

## ⚡ Key Features

### Frontend
- 🎨 **Minimal Luxury Design System** — Obsidian, Ivory, Gold palette with Playfair Display + Plus Jakarta Sans typography
- 📱 **Fully Responsive** — Mobile-first, tested across 320px to 4K
- 🌗 **Cinematic Hero** — Ken Burns parallax image with animated overlay
- 🔍 **Smart Trip Planner** — 4-step interactive wizard collecting destination, dates, preferences, and contact details
- 🗂️ **Multi-Filter Package Catalog** — Search by keyword, category, duration, sort by price/rating
- 📅 **Day-wise Itinerary Accordion** — Expandable timeline with stay & meal info
- 💳 **Sticky Quote Sidebar** — Price card with WhatsApp, call, and print-to-PDF actions
- 💬 **Enquiry Modal** — Full lead capture form on any page
- 🧭 **Hash-based Router** — Clean SPA navigation without any framework
- 🔔 **Toast Notification System** — Animated, auto-dismiss notifications
- 🌍 **Multi-Currency Switcher** — INR, USD, EUR, GBP, AED with live conversion
- 🖨️ **Print/PDF Export** — Styled print stylesheet for itinerary brochures
- ♿ **Accessibility** — Skip-to-content link, ARIA roles, keyboard navigation
- 🍪 **Cookie Consent Banner** — GDPR/DPDP compliant with accept/decline

### Backend (Client-Side)
- 💾 **localStorage CRUD Store** — Full data persistence in browser
- 🔐 **Admin Authentication** — Session-based login/logout
- 🔄 **Real-time Filtering & Sorting** — Client-side, zero server calls
- 📧 **EmailJS Integration** — Real email delivery on enquiry submission (free 200/month)
- 📊 **Google Analytics 4** — Page views + custom event tracking (with consent)

### Performance & SEO
- ⚡ **Zero Build Tools** — Open `index.html`, it works
- 🔎 **Full SEO** — Meta tags, OG, Twitter Card, canonical URL
- 📋 **JSON-LD Schema** — TravelAgency + LocalBusiness structured data
- 🗺️ **XML Sitemap** — 24 URLs pre-configured
- 🤖 **robots.txt** — Search engine rules
- 📲 **PWA Ready** — manifest.json + Service Worker + offline fallback page
- 🚀 **Performance** — DNS prefetch, preconnect, lazy loading, debounced inputs

### Deployment
- 🟢 **Netlify** — Drop folder, instant live (`netlify.toml` included)
- 🔺 **Vercel** — Zero-config deploy (`vercel.json` included)
- 📄 **GitHub Pages** — Static hosting compatible
- 🔒 **Security Headers** — X-Frame-Options, CSP, HSTS via Netlify/Vercel config

---

## 🗂️ File Structure

```
vayu-holidays/
├── index.html              # App shell — all scripts & styles loaded here
├── manifest.json           # PWA manifest
├── sw.js                   # Service Worker (offline support)
├── offline.html            # Offline fallback page
├── robots.txt              # SEO crawling rules
├── sitemap.xml             # 24-URL XML sitemap
├── netlify.toml            # Netlify deploy + security headers
├── vercel.json             # Vercel deploy config
├── .gitignore
│
├── css/
│   ├── variables.css       # Design tokens (colors, fonts, shadows, radii)
│   ├── main.css            # Reset, typography, navbar, footer, layout
│   ├── components.css      # Buttons, cards, badges, forms, modals, toasts
│   ├── sections.css        # Hero, planner, grids, testimonials, CTA
│   ├── package-detail.css  # Itinerary, gallery, sticky sidebar
│   └── admin.css           # Dark CMS dashboard styles
│
└── js/
    ├── data.js             # Seed data (packages, destinations, blogs, services)
    ├── store.js            # VayuStore — localStorage CRUD engine
    ├── components.js       # Navbar, footer, cards, modals, toast, icons
    ├── router.js           # VayuRouter — hash-based SPA navigation
    ├── app.js              # Init, EmailJS, GA4, cookie consent, security
    └── views/
        ├── home.js         # Homepage (all sections)
        ├── packages.js     # Package catalog + filter logic
        ├── packageDetail.js# Full itinerary detail page
        ├── services.js     # Service detail pages
        ├── about.js        # About us page
        ├── blog.js         # Blog list + single article view
        ├── contact.js      # Contact form page
        ├── admin.js        # Full CMS dashboard (10 tabs + all modals)
        └── legal.js        # Terms, Privacy Policy, 404 page
```

---

## 🚀 Quick Start (3 Steps)

### 1. Download & Open
```bash
# Just open in browser — no npm install, no build step
open index.html
```

### 2. Customize Brand
Edit `js/data.js` → `INITIAL_DATA.company` object:
```javascript
company: {
  name: "Your Agency Name",
  office: "Your Office Address",
  phone: "+91 XXXXX XXXXX",
  whatsapp: "+91 XXXXX XXXXX",
  email: "your@email.com",
  ...
}
```

### 3. Deploy
```bash
# Netlify (recommended — free)
# Drag & drop the folder at netlify.com/drop
```

See `DEPLOYMENT.md` for detailed instructions.

---

## 📧 EmailJS Setup (Real Email Delivery)

See `EMAILJS_SETUP.md` for complete step-by-step guide.

Quick config in `js/app.js`:
```javascript
const EMAILJS_CONFIG = {
  publicKey:       "your_public_key",
  serviceId:       "service_vayuholidays",
  templateEnquiry: "template_enquiry_notify",
  templateAutoReply: "template_enquiry_autoreply"
};
```

---

## 📊 Google Analytics Setup

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create a new GA4 property
3. Copy your Measurement ID (e.g. `G-ABC123DEF4`)
4. Replace in `js/app.js`:
```javascript
const GA4_MEASUREMENT_ID = "G-ABC123DEF4";
```

---

## 🎨 Customization

### Change Colors
Edit `css/variables.css`:
```css
--color-gold: #C5A880;       /* Primary accent */
--color-obsidian: #090D12;   /* Dark backgrounds */
--color-ivory: #FCFBF7;      /* Light backgrounds */
```

### Change Fonts
Replace the Google Fonts link in `index.html` and update variables:
```css
--font-serif: 'Your Serif Font', Georgia, serif;
--font-sans:  'Your Sans Font', sans-serif;
```

### Add/Edit Packages
Via Admin CMS: `#/admin` → Packages → Add New Package  
Or directly in `js/data.js` → `INITIAL_DATA.packages` array.

---

## 🔐 Admin Access

| Field | Default |
|---|---|
| URL | `yoursite.com/#/admin` |
| Email | `admin@vayuholidays.com` |
| Password | `vayu2026` |

⚠️ **Change before going live.** See `DOCUMENTATION.md` for how to update credentials.

---

## 🌍 Included Destination & Package Data

**Destinations (8):** Kashmir & Ladakh, Kerala Backwaters, Royal Rajasthan, Dubai & Abu Dhabi, Bali & Nusa Penida, Swiss Alps, The Maldives, Vietnam & Indochina

**Packages (7, fully detailed):**
- Kashmir 6D/5N (₹36,500) — Full day-wise itinerary
- Kerala 5D/4N (₹29,500) — Houseboat + Munnar
- Dubai 5D/4N (₹59,900) — Desert safari + Burj Khalifa
- Bali 7D/6N (₹52,500) — Ubud villas + Nusa Penida
- Switzerland 7D/6N (₹1,75,000) — Swiss Travel Pass + Jungfraujoch
- Maldives 5D/4N (₹1,18,000) — Overwater villa + seaplane
- Rajasthan 7D/6N (₹44,000) — Heritage palaces

**Services (9):** Flights, Hotels, Bus, Train, Visa, Passport, Forex, Insurance, MICE

**Blog Articles (3):** Kashmir guide, Schengen visa tips, Bali honeymoon guide

**Testimonials (3):** Pre-loaded authentic-style reviews

---

## 📦 What's NOT Included

- Backend server / database (uses localStorage; Firebase upgrade guide in DOCUMENTATION.md)
- Real payment gateway (quotation-only flow by design)
- Actual photography (all images via Unsplash CDN — properly attributed)
- Logo/favicon image files (generation guide in `icons/README.md`)

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| UI | Vanilla HTML5, CSS3 (custom design system) |
| Logic | Vanilla JavaScript ES6+ (no frameworks) |
| Routing | Custom hash-based SPA router |
| State | Browser localStorage |
| Typography | Playfair Display, Cormorant Garamond, Plus Jakarta Sans (Google Fonts) |
| Icons | Inline SVG |
| Email | EmailJS SDK |
| Analytics | Google Analytics 4 |
| PWA | Web App Manifest + Service Worker |
| Hosting | Netlify / Vercel / GitHub Pages |

---

## 📄 License

This is a **commercial single-use license**. See `LICENSE.md` for full terms.

---

## 📞 Support

Included with purchase: **30 days post-sale setup support** via email/WhatsApp.

---

*Built with precision. Designed for luxury. Ready to deploy.*
