# 🔥 Firebase Setup Guide — Vayu Holidays

Complete step-by-step guide to connect Firebase Firestore + Auth.

---

## Step 1 — Create Firebase Project

1. Go to **[https://console.firebase.google.com](https://console.firebase.google.com)**
2. Click **"Add project"**
3. Name it: `vayu-holidays`
4. Disable Google Analytics (optional, you have GA4 separately)
5. Click **"Create project"**

---

## Step 2 — Add a Web App

1. In your project dashboard, click the **`</>`** (Web) icon
2. App nickname: `vayu-holidays-web`
3. **Do NOT** check "Firebase Hosting" (we use Netlify)
4. Click **"Register app"**
5. Copy the `firebaseConfig` object — looks like:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "vayu-holidays.firebaseapp.com",
  projectId: "vayu-holidays",
  storageBucket: "vayu-holidays.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

6. Open `js/firebase.js` and **replace the FIREBASE_CONFIG object** with your values

---

## Step 3 — Enable Firestore Database

1. Left sidebar → **"Build"** → **"Firestore Database"**
2. Click **"Create database"**
3. Choose **"Start in test mode"** (we'll add proper rules after)
4. Select a region closest to India: `asia-south1 (Mumbai)` ← recommended
5. Click **"Enable"**

---

## Step 4 — Deploy Security Rules

1. In Firestore → **"Rules"** tab
2. Delete the existing rules
3. Copy and paste the contents of `firestore.rules` from this project
4. Click **"Publish"**

The rules allow:
- Public read for packages, destinations, blogs, testimonials, offers
- Anyone can submit enquiries (website leads)
- Only logged-in admin can read/modify enquiries and write to all collections

---

## Step 5 — Enable Authentication

1. Left sidebar → **"Build"** → **"Authentication"**
2. Click **"Get started"**
3. Click **"Email/Password"** provider → **Enable** → Save

### Create Admin User
1. In Authentication → **"Users"** tab
2. Click **"Add user"**
3. Email: `admin@vayuholidays.com`
4. Password: **Choose a strong password** (min 8 chars)
5. Click **"Add user"**

> ⚠️ This replaces the old hardcoded `vayu2026` password. Use something secure.

---

## Step 6 — Seed Initial Data

After deploying the site with your Firebase config:

1. Open your website in browser
2. Open DevTools Console (F12)
3. Run:
```javascript
seedFirestoreIfEmpty()
```
4. You'll see: `✅ Firestore seeded successfully!`
5. Check Firebase Console → Firestore → you should see all collections populated

**Only run this once.** The function checks if data already exists before seeding.

---

## Step 7 — Test Everything

1. Open your website
2. Submit an enquiry form
3. Go to Firebase Console → Firestore → `enquiries` collection
4. Your lead should appear there in real-time ✅

5. Go to `yoursite.com/#/admin`
6. Login with `admin@vayuholidays.com` + your new password
7. Admin should load and show the enquiry ✅

---

## Step 8 — Before Going Live (Security)

In Firebase Console → Firestore → **Rules** — change test mode expiry:

```javascript
// Change this line in rules:
allow read, write: if request.time < timestamp.date(2025, 1, 1);
// To use our proper rules (already done in Step 4)
```

Also in Firebase Console → **Authentication** → **Settings** → **Authorized domains**:
- Add your custom domain: `www.vayuholidays.com`

---

## Firestore Collections Structure

```
firestore/
├── packages/           {id} → package object
├── destinations/       {id} → destination object  
├── enquiries/          {id} → enquiry + status
├── blogs/              {id} → blog post
├── testimonials/       {id} → review
├── offers/             {id} → promo code
├── media/              {id} → photo asset
└── settings/
    ├── company         → company profile object
    └── pageSettings    → hero/SEO settings
```

---

## Fallback Behavior

If Firebase is not configured (FIREBASE_CONFIG still has `YOUR_API_KEY`):
- The site works normally using `localStorage`
- All data is stored in browser only
- Admin login uses the legacy `vayu2026` password
- No data is lost — you can configure Firebase anytime and seed it

---

## Free Tier Limits (More than enough for a travel agency)

| Resource | Free Limit |
|---|---|
| Firestore reads | 50,000/day |
| Firestore writes | 20,000/day |
| Firestore storage | 1 GB |
| Auth users | Unlimited |
| Hosting bandwidth | 10 GB/month |

A travel agency with 100 daily visitors will use roughly 500 reads/day — well within free limits.
