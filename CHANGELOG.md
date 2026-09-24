# Changelog — Vayu Holidays Template

All notable changes to this project are documented here.  
Format: [Version] — Date — Changes

---

## [1.0.0] — September 2026 — Initial Release

### ✨ Features Added
- Complete 9-page public website SPA (Homepage, Packages, Package Detail, 8 Services, About, Blog, Contact, Terms, Privacy)
- Full Admin CMS dashboard with 10 management tabs
- 7 fully detailed holiday packages with day-wise itineraries (Kashmir, Kerala, Dubai, Bali, Switzerland, Maldives, Rajasthan)
- 8 destination cards with filtering
- 9 service pages (Flights, Hotels, Bus, Train, Visa, Passport, Forex, Insurance, MICE)
- 3 blog articles with markdown rendering
- Smart Trip Planner — 4-step interactive wizard
- Multi-filter package catalog (search, category, duration, sort)
- Sticky quote sidebar with WhatsApp, call, and print-to-PDF actions
- Multi-currency switcher (INR, USD, EUR, GBP, AED)
- Enquiry modal with full lead capture
- Admin CRM — enquiry status pipeline (New → Contacted → Quoted → Booked → Lost)
- localStorage CRUD store with reset-to-default
- Session-based admin authentication

### 🎨 Design System
- Minimal luxury design with Obsidian/Ivory/Gold palette
- Playfair Display + Cormorant Garamond + Plus Jakarta Sans typography
- Fully responsive — mobile-first, tested 320px to 4K
- Cinematic hero with Ken Burns parallax
- Custom CSS design tokens (variables.css)
- Print stylesheet for itinerary PDF export

### ⚡ Performance & SEO
- Full SEO meta tags, Open Graph, Twitter Card
- JSON-LD structured data (TravelAgency + LocalBusiness + WebSite)
- XML sitemap (24 URLs)
- robots.txt
- DNS prefetch + preconnect resource hints
- Native lazy loading on all images
- IntersectionObserver lazy images utility

### 🔌 Integrations
- EmailJS integration (enquiry notifications + customer auto-reply)
- Google Analytics 4 with page view + custom event tracking
- GDPR/DPDP compliant cookie consent banner

### 📲 PWA
- Web App Manifest with shortcuts
- Service Worker (cache-first for static assets, network-first for navigation)
- Offline fallback page
- "Add to Home Screen" support

### 🔒 Security
- Input sanitization (XSS prevention)
- Security headers via netlify.toml / vercel.json
- X-Frame-Options, X-Content-Type-Options, HSTS
- Admin credential console warning

### 🚀 Deployment
- netlify.toml — Netlify config with security headers + SPA redirect
- vercel.json — Vercel zero-config deploy
- .gitignore

### 📄 Documentation
- README.md — Full feature list, quick start, tech stack
- DOCUMENTATION.md — Developer guide, customization, Firebase upgrade path
- LICENSE.md — Commercial single-use license
- EMAILJS_SETUP.md — Step-by-step email setup
- DEPLOYMENT.md — Netlify, Vercel, GitHub Pages guide
- icons/README.md — Favicon/icon generation guide

---

## Future Roadmap (Planned for v1.1.0)

- [ ] Firebase Firestore backend option
- [ ] Firebase Authentication for admin
- [ ] WhatsApp Business API integration
- [ ] Tour booking inquiry calendar (date picker)
- [ ] Instagram feed widget integration
- [ ] More pre-built packages (Thailand, Singapore, Turkey, Egypt)
- [ ] Dark mode toggle
- [ ] Testimonials carousel
- [ ] Multi-language support (Hindi)

---

*Versioning follows [Semantic Versioning](https://semver.org/): MAJOR.MINOR.PATCH*
