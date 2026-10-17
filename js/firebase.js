/* ==========================================================================
   VAYU HOLIDAYS — FIREBASE CONFIGURATION & INITIALIZATION
   
   SETUP STEPS (see FIREBASE_SETUP.md for full guide):
   1. Go to https://console.firebase.google.com
   2. Create project "vayu-holidays"
   3. Add a Web App → copy config values below
   4. Enable Firestore Database (test mode first)
   5. Enable Authentication → Email/Password provider
   ========================================================================== */

// ─── YOUR FIREBASE CONFIG ────────────────────────────────────────────────────
// Replace ALL values below with your actual Firebase project config.
// Get these from: Firebase Console → Project Settings → Your Apps → SDK setup
const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyCbQ2j87mCTilxpmoUdqzHN13qx3hxhz7E",
  authDomain:        "vayu-holidays.firebaseapp.com",
  projectId:         "vayu-holidays",
  storageBucket:     "vayu-holidays.firebasestorage.app",
  messagingSenderId: "571347400827",
  appId:             "1:571347400827:web:9ffd202c08da92dfd34ade",
  measurementId:     "G-JQ6P0LC90W"
};
// ─────────────────────────────────────────────────────────────────────────────

// Collection names in Firestore
const COLLECTIONS = {
  PACKAGES:      "packages",
  DESTINATIONS:  "destinations",
  ENQUIRIES:     "enquiries",
  BLOGS:         "blogs",
  TESTIMONIALS:  "testimonials",
  OFFERS:        "offers",
  COMPANY:       "settings",   // single doc: "company"
  MEDIA:         "media",
  PAGE_SETTINGS: "settings"    // single doc: "pageSettings"
};

// ─── FIREBASE INIT ───────────────────────────────────────────────────────────
let _db      = null;
let _auth    = null;
let _storage = null;
let _firebaseReady = false;

function initFirebase() {
  try {
    if (typeof firebase === "undefined") {
      console.error("❌ Firebase SDK not loaded. Check index.html script tags.");
      return false;
    }
    if (firebase.apps.length === 0) {
      firebase.initializeApp(FIREBASE_CONFIG);
    }
    _db      = firebase.firestore();
    _auth    = firebase.auth();
    _storage = firebase.storage();
    _firebaseReady = true;

    _db.enablePersistence({ synchronizeTabs: false })
      .then(() => console.log("✅ Firestore offline persistence enabled"))
      .catch(err => {
        if (err.code === "failed-precondition") {
          console.warn("⚠️ Multiple tabs open — persistence only in one tab.");
        } else if (err.code === "unimplemented") {
          console.warn("⚠️ Browser does not support offline persistence.");
        }
      });

    console.log("✅ Firebase initialized — Project:", FIREBASE_CONFIG.projectId);
    return true;

  } catch (err) {
    console.error("❌ Firebase init failed:", err.message);
    return false;
  }
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────

/** Get Firestore instance (safe) */
function getDB() {
  if (!_db) throw new Error("Firestore not initialized. Call initFirebase() first.");
  return _db;
}

/** Get Auth instance (safe) */
function getAuth() {
  if (!_auth) throw new Error("Firebase Auth not initialized.");
  return _auth;
}

/** Get Storage instance (safe) */
function getStorage() {
  if (!_storage) throw new Error("Firebase Storage not initialized.");
  return _storage;
}

/**
 * Upload an image file to Firebase Storage.
 * @param {File}   file      - The File object from <input type="file">
 * @param {string} folder    - Storage folder: "packages", "destinations", "media"
 * @param {string} fileName  - Desired filename (e.g. "pkg-dubai-01-hero.jpg")
 * @param {Function} onProgress - optional callback(percent 0-100)
 * @returns {Promise<string>} Permanent download URL
 */
async function uploadImageToStorage(file, folder = "images", fileName = null, onProgress = null) {
  if (!isFirebaseConfigured()) throw new Error("Firebase not configured.");
  const storage = getStorage();
  const safeName = fileName || `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
  const storageRef = storage.ref(`${folder}/${safeName}`);

  return new Promise((resolve, reject) => {
    const uploadTask = storageRef.put(file, { contentType: file.type });

    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        if (onProgress) {
          const pct = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          onProgress(pct);
        }
      },
      (error) => reject(error),
      async () => {
        try {
          const url = await uploadTask.snapshot.ref.getDownloadURL();
          resolve(url);
        } catch (e) { reject(e); }
      }
    );
  });
}

/** Check if Firebase config has been filled in */
function isFirebaseConfigured() {
  return FIREBASE_CONFIG.apiKey !== "YOUR_API_KEY" && _firebaseReady;
}

/** Convert Firestore doc snapshot → plain object with id */
function docToObj(doc) {
  if (!doc.exists) return null;
  return { id: doc.id, ...doc.data() };
}

/** Convert Firestore query snapshot → array of plain objects */
function snapshotToArray(snapshot) {
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

/** Generate a slug from a string */
function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

// ─── SEED FIRESTORE WITH INITIAL DATA ────────────────────────────────────────
/**
 * Seeds Firestore with INITIAL_DATA from data.js
 * Only runs once — checks if packages collection already has data.
 * Call from admin panel or run once manually.
 */
async function seedFirestoreIfEmpty() {
  if (!isFirebaseConfigured()) return;
  const db = getDB();

  try {
    const pkgSnap = await db.collection(COLLECTIONS.PACKAGES).limit(1).get();
    if (!pkgSnap.empty) {
      console.log("ℹ️ Firestore already has data — skipping seed.");
      return;
    }

    console.log("🌱 Seeding Firestore with initial data...");
    const batch = db.batch();

    // Packages
    INITIAL_DATA.packages.forEach(pkg => {
      const ref = db.collection(COLLECTIONS.PACKAGES).doc(pkg.id);
      batch.set(ref, pkg);
    });

    // Destinations
    INITIAL_DATA.destinations.forEach(dest => {
      const ref = db.collection(COLLECTIONS.DESTINATIONS).doc(dest.id);
      batch.set(ref, dest);
    });

    // Blogs
    INITIAL_DATA.blogs.forEach(blog => {
      const ref = db.collection(COLLECTIONS.BLOGS).doc(blog.id);
      batch.set(ref, blog);
    });

    // Testimonials
    INITIAL_DATA.testimonials.forEach(t => {
      const ref = db.collection(COLLECTIONS.TESTIMONIALS).doc(t.id);
      batch.set(ref, t);
    });

    // Offers
    INITIAL_DATA.offers.forEach(o => {
      const ref = db.collection(COLLECTIONS.OFFERS).doc(o.id);
      batch.set(ref, o);
    });

    // Company settings
    const companyRef = db.collection(COLLECTIONS.COMPANY).doc("company");
    batch.set(companyRef, INITIAL_DATA.company);

    // Enquiries
    INITIAL_DATA.enquiries.forEach(e => {
      const ref = db.collection(COLLECTIONS.ENQUIRIES).doc(e.id);
      batch.set(ref, e);
    });

    await batch.commit();
    console.log("✅ Firestore seeded successfully!");
    showToast("Database Seeded", "All initial data loaded into Firestore.");

  } catch (err) {
    console.error("❌ Seed failed:", err.message);
  }
}

// Initialize on script load
initFirebase();
