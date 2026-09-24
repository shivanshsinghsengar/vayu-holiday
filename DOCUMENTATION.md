# 📖 Vayu Holidays — Developer Documentation

Complete guide for customizing, extending, and maintaining the Vayu Holidays website template.

---

## Table of Contents

1. [Architecture Overview](#1-architecture-overview)
2. [Data Layer — Customizing Content](#2-data-layer--customizing-content)
3. [Design System — Colors, Fonts, Spacing](#3-design-system--colors-fonts-spacing)
4. [Adding New Pages](#4-adding-new-pages)
5. [Adding New Packages & Destinations](#5-adding-new-packages--destinations)
6. [Admin Credentials — How to Change](#6-admin-credentials--how-to-change)
7. [Rebranding the Website](#7-rebranding-the-website)
8. [Upgrading from localStorage to Firebase](#8-upgrading-from-localstorage-to-firebase)
9. [Common Customizations](#9-common-customizations)
10. [Browser Support](#10-browser-support)

---

## 1. Architecture Overview

This is a **client-side Single Page Application (SPA)** with no build process.

```
Browser loads index.html
  ↓
Loads CSS (variables → main → components → sections → package-detail → admin)
  ↓
Loads JS (data → store → components → views → router → app)
  ↓
VayuRouter listens to window.onhashchange
  ↓
On navigation: renders Navbar + View + Footer into #app div
```

### Core Objects (Global Scope)

| Object | File | Purpose |
|---|---|---|
| `INITIAL_DATA` | `js/data.js` | Seed data for all content |
| `window.vayuStore` | `js/store.js` | `VayuStore` instance — all CRUD operations |
| `window.vayuRouter` | `js/router.js` | `VayuRouter` instance — navigation |
| `ICONS` | `js/components.js` | SVG icon strings |

---

## 2. Data Layer — Customizing Content

### Company Information
**File:** `js/data.js`

```javascript
company: {
  name: "Your Agency Name",
  tagline: "Your Tagline Here.",
  type: "Travel Agency & Tour Operator",
  office: "Full office address",
  phone: "+91 XXXXX XXXXX",
  whatsapp: "+91 XXXXX XXXXX",
  whatsappMessage: "Hello! I'd like to inquire about planning a holiday.",
  email: "contact@yourdomain.com",
  supportEmail: "support@yourdomain.com",
  hours: "Mon - Sat: 9:30 AM – 7:30 PM",
  leadership: [
    { name: "Name", role: "Chairman", bio: "Bio..." },
    { name: "Name", role: "CEO", bio: "Bio..." },
    { name: "Name", role: "Director", bio: "Bio..." }
  ]
}
```

### WhatsApp Number
The WhatsApp number appears in many places. Change it in:
1. `js/data.js` → `company.whatsapp`
2. `js/views/packageDetail.js` → hardcoded `wa.me/919826012345` instances
3. `js/views/contact.js` → WhatsApp link
4. `js/views/about.js` → WhatsApp button

> **Tip:** Search all files for `919826012345` and replace with your number (country code + number, no spaces or +).

---

## 3. Design System — Colors, Fonts, Spacing

**File:** `css/variables.css`

### Color Palette
```css
/* Primary accent — Gold tones */
--color-gold:       #C5A880;  /* Main gold accent */
--color-gold-light: #DFCAAB;  /* Lighter gold */
--color-gold-dark:  #A5865E;  /* Darker gold (links, labels) */

/* Dark backgrounds */
--color-obsidian:   #090D12;  /* Darkest — hero overlays, admin bg */
--color-slate-dark: #19222D;  /* Dark sections */

/* Light backgrounds */
--color-ivory:      #FCFBF7;  /* Body background */
--color-sand:       #F7F4EE;  /* Section alternates */
--color-cream:      #FFFDF9;  /* Cards, modals */
```

### To Change the Accent Color (e.g., Blue instead of Gold):
```css
/* css/variables.css */
--color-gold:       #3B82F6;  /* Blue */
--color-gold-light: #93C5FD;
--color-gold-dark:  #1D4ED8;
--border-gold:      rgba(59, 130, 246, 0.4);
```

### Typography
```css
--font-serif: 'Playfair Display', 'Cormorant Garamond', Georgia, serif;
--font-sans:  'Plus Jakarta Sans', -apple-system, sans-serif;
```

To use different fonts, replace the Google Fonts `<link>` in `index.html` and update these variables.

---

## 4. Adding New Pages

**Step 1:** Create view file `js/views/yourpage.js`
```javascript
function renderYourPageView() {
  return `
    <div class="package-detail-header">
      <div class="container">
        <h1 class="package-detail-title">Your Page Title</h1>
      </div>
    </div>
    <section class="section">
      <div class="container">
        <!-- Your content -->
      </div>
    </section>
  `;
}
```

**Step 2:** Add `<script>` tag to `index.html`
```html
<script src="js/views/yourpage.js"></script>
```
*(Add before `<script src="js/router.js">` line)*

**Step 3:** Add route to `js/router.js`
```javascript
} else if (path === "#/your-page") {
  pageContent = renderYourPageView();
```

**Step 4:** Add link to navbar in `js/components.js` → `renderNavbar()` function.

---

## 5. Adding New Packages & Destinations

### Via Admin Panel (No Code)
1. Go to `yoursite.com/#/admin`
2. Login with credentials
3. Packages tab → "+ Add New Package"
4. Fill in title, destination, price, image URL, overview
5. Save — appears live immediately on the public site

### Via Code (Persistent Seed Data)
Add to `js/data.js` → `INITIAL_DATA.packages` array:

```javascript
{
  id: "pkg-thailand-01",
  title: "Golden Temples & Turquoise Bays: Thailand",
  slug: "thailand-golden-temples",
  destinationId: "thailand",
  destinationName: "Thailand",
  category: "international",        // domestic | international | honeymoon | luxury | group | mice
  experienceType: "luxury",
  durationDays: 7,
  durationNights: 6,
  price: 65000,                     // INR per person
  originalPrice: 75000,             // null if no strikethrough price
  rating: 4.95,
  reviewsCount: 60,
  image: "https://images.unsplash.com/...",
  gallery: ["url1", "url2", "url3", "url4"],
  tag: "Popular",
  highlights: ["Private villa", "Temple tours", "Island hopping"],
  overview: "Detailed overview paragraph...",
  itinerary: [
    {
      day: 1,
      title: "Arrival in Bangkok",
      description: "Day description...",
      meals: "Dinner Included",
      stay: "5-Star Hotel, Bangkok"
    }
    // ... more days
  ],
  inclusions: ["Accommodation", "Breakfast", "Transfers"],
  exclusions: ["Flights", "Visa"],
  hotelInfo: "Property details...",
  bestTime: "November to April"
}
```

> **Important:** After editing `data.js`, open browser DevTools → Application → LocalStorage → delete keys starting with `vayu_` to reload fresh seed data.

---

## 6. Admin Credentials — How to Change

**File:** `js/store.js` → `loginAdmin()` method:

```javascript
loginAdmin(username, password) {
  if (
    (username === "admin@yourdomain.com" || username === "admin") &&
    password === "YourSecurePassword2026"
  ) {
    sessionStorage.setItem(STORAGE_KEYS.AUTH, "true");
    return true;
  }
  return false;
}
```

Also update the hint shown on the login screen in `js/views/admin.js` → `renderAdminLogin()`:
```javascript
// Change or remove this hint box for production:
<div class="admin-login-hints">
  ...remove or replace with your own hint...
</div>
```

**For production-grade auth, upgrade to Firebase Authentication** (see Section 8).

---

## 7. Rebranding the Website

Complete rebranding checklist:

| Item | Where to Change |
|---|---|
| Agency name | `js/data.js` → `company.name` |
| Tagline | `js/data.js` → `company.tagline` |
| Phone / WhatsApp | `js/data.js` → `company.phone` / `company.whatsapp` (+ search replace `919826012345`) |
| Email | `js/data.js` → `company.email` |
| Office address | `js/data.js` → `company.office` |
| Leadership team | `js/data.js` → `company.leadership` array |
| SEO page title | `index.html` `<title>` tag + `og:title` meta |
| SEO description | `index.html` `<meta name="description">` |
| JSON-LD schema | `index.html` → `<script type="application/ld+json">` |
| Canonical URL | `index.html` → `<link rel="canonical">` |
| OG image | `index.html` → `og:image` meta (upload your hero image) |
| GA4 ID | `js/app.js` → `GA4_MEASUREMENT_ID` |
| EmailJS keys | `js/app.js` → `EMAILJS_CONFIG` |
| Hero image | `js/views/home.js` → first `<img src="...">` in `renderHomeView()` |
| Sitemap URLs | `sitemap.xml` → replace all `vayuholidays.com` with your domain |
| robots.txt | `robots.txt` → replace `vayuholidays.com` with your domain |
| Favicon/icons | Place PNG files in `icons/` folder (see `icons/README.md`) |

---

## 8. Upgrading from localStorage to Firebase

For a real multi-user backend, follow this upgrade path:

### Step 1 — Add Firebase SDK
```html
<!-- index.html — before </body> -->
<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.x.x/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.x.x/firebase-firestore.js";
  
  const firebaseConfig = {
    apiKey: "...", authDomain: "...", projectId: "...",
    storageBucket: "...", messagingSenderId: "...", appId: "..."
  };
  
  window.firebaseApp = initializeApp(firebaseConfig);
  window.db = getFirestore(window.firebaseApp);
</script>
```

### Step 2 — Replace store methods
In `js/store.js`, replace `localStorage.setItem/getItem` calls with Firestore reads/writes:

```javascript
// Example: Replace getPackages()
async getPackages() {
  const snapshot = await getDocs(collection(window.db, "packages"));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}
```

### Step 3 — Replace admin auth
```javascript
// store.js — loginAdmin()
import { signInWithEmailAndPassword } from "firebase/auth";
async loginAdmin(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch { return false; }
}
```

### Step 4 — Set Firestore security rules
```javascript
// firestore.rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /packages/{doc}   { allow read: if true; allow write: if request.auth != null; }
    match /enquiries/{doc}  { allow create: if true; allow read, write: if request.auth != null; }
    match /destinations/{doc} { allow read: if true; allow write: if request.auth != null; }
  }
}
```

---

## 9. Common Customizations

### Change Currency Default
`js/store.js` → `initStore()`:
```javascript
if (!localStorage.getItem(STORAGE_KEYS.CURRENCY)) {
  localStorage.setItem(STORAGE_KEYS.CURRENCY, "USD"); // Change default here
}
```

### Add New Currency
`js/store.js` → `CURRENCY_RATES` object:
```javascript
const CURRENCY_RATES = {
  // Add your currency:
  SGD: { symbol: "S$", rate: 0.016, name: "SGD (S$)" },
  ...
};
```
Then add `<option>` to currency selector in `js/components.js` → `renderNavbar()`.

### Change Hero Background Image
`js/views/home.js` → `renderHomeView()`:
```javascript
<img 
  src="YOUR_IMAGE_URL_HERE"   // ← Change this
  alt="Your Alt Text"
  class="hero-bg-media"
/>
```

### Change WhatsApp Number Globally
Search & replace `919826012345` across all JS files with your number.

### Remove Admin Portal Link from Footer/Topbar
`js/components.js` → `renderNavbar()` — remove or comment out:
```javascript
// Top bar admin link — remove for production
<a href="#/admin" class="top-bar-item">Staff Portal</a>
```

### Disable Cookie Banner (if not using Analytics)
`js/app.js` → `showCookieBanner()` function — add early return:
```javascript
function showCookieBanner() {
  return; // Disabled
}
```

---

## 10. Browser Support

| Browser | Support |
|---|---|
| Chrome 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |
| Opera 76+ | ✅ Full |
| IE 11 | ❌ Not supported (ES6+ required) |
| iOS Safari 14+ | ✅ Full |
| Android Chrome | ✅ Full |

---

*For support, refer to the purchase platform or contact details provided at time of sale.*
