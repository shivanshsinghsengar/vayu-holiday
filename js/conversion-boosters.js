/* ==========================================================================
   VAYU HOLIDAYS — CONVERSION PSYCHOLOGY BOOSTERS
   Exit Intent Popup, Live Activity Ticker, Enhanced WhatsApp Widget
   ========================================================================== */

// ═══════════════════════════════════════════════════════════════════════════
// 1. EXIT INTENT POPUP
// ═══════════════════════════════════════════════════════════════════════════

let exitIntentShown = false;

function initExitIntent() {
  // Only show once per session
  if (sessionStorage.getItem('vayu_exit_shown') === 'true') return;
  
  document.addEventListener('mouseleave', (e) => {
    // Only trigger if mouse leaves from top of page
    if (e.clientY <= 0 && !exitIntentShown) {
      exitIntentShown = true;
      sessionStorage.setItem('vayu_exit_shown', 'true');
      showExitPopup();
    }
  });
}

function showExitPopup() {
  const overlay = document.createElement('div');
  overlay.id = 'exitIntentOverlay';
  overlay.innerHTML = `
    <div class="exit-popup">
      <button class="exit-close" onclick="closeExitPopup()" aria-label="Close">✕</button>
      
      <div class="exit-content">
        <div class="exit-icon">⏳</div>
        <h2 class="exit-title">WAIT! Before You Go...</h2>
        <p class="exit-subtitle">Get Your <strong>FREE Customized Itinerary</strong> in Just 5 Minutes!</p>
        
        <form class="exit-form" onsubmit="handleExitFormSubmit(event)">
          <input 
            type="tel" 
            id="exitPhone" 
            class="exit-input" 
            placeholder="📱 Enter your WhatsApp number" 
            required 
            pattern="[0-9]{10}"
          />
          <button type="submit" class="exit-btn">
            Get My Free Plan →
          </button>
        </form>
        
        <div class="exit-trust">
          <div class="exit-trust-item">✅ No spam calls, we promise</div>
          <div class="exit-trust-item">✅ 2,450+ families trusted us</div>
          <div class="exit-trust-item">✅ Reply in under 5 minutes</div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  
  // Animate in
  setTimeout(() => overlay.classList.add('show'), 10);
}

function closeExitPopup() {
  const overlay = document.getElementById('exitIntentOverlay');
  if (overlay) {
    overlay.classList.remove('show');
    setTimeout(() => overlay.remove(), 300);
  }
}

async function handleExitFormSubmit(e) {
  e.preventDefault();
  const phone = document.getElementById('exitPhone').value;
  
  // Save enquiry
  await window.vayuStore.addEnquiry({
    name: "Exit Intent Lead",
    phone: phone,
    email: "",
    destination: "Not specified",
    source: "Exit Intent Popup"
  });
  
  // Redirect to WhatsApp
  const waNumber = "918889754969";
  const message = encodeURIComponent(`Hi! I'd like to get a customized itinerary. My number: ${phone}`);
  window.open(`https://wa.me/${waNumber}?text=${message}`, '_blank');
  
  closeExitPopup();
  showToast("Success!", "Redirecting to WhatsApp... We'll reply in 5 minutes!");
}

// ═══════════════════════════════════════════════════════════════════════════
// 2. LIVE ACTIVITY TICKER
// ═══════════════════════════════════════════════════════════════════════════

const activityMessages = [
  { text: "Priya M. from Bhopal just booked Dubai Package", icon: "✓", type: "booking" },
  { text: "Rahul S. viewed Kashmir Package 2 mins ago", icon: "👁️", type: "view" },
  { text: "Sharma Family requested quote for Maldives", icon: "💬", type: "enquiry" },
  { text: "24 people viewing packages right now", icon: "🔴", type: "live" },
  { text: "Anjali R. from Indore booked Kerala Backwaters", icon: "✓", type: "booking" },
  { text: "247 packages booked this month", icon: "🔥", type: "stat" },
  { text: "Vikram P. just inquired about Bali", icon: "💬", type: "enquiry" },
  { text: "Last booking: 8 minutes ago", icon: "⚡", type: "recent" },
  { text: "Mehta Family planning Switzerland trip", icon: "👨‍👩‍👧", type: "planning" },
  { text: "Only 3 slots left for March departures", icon: "⏰", type: "urgency" }
];

let currentActivityIndex = 0;

function initLiveActivityTicker() {
  const ticker = document.createElement('div');
  ticker.id = 'liveActivityTicker';
  ticker.className = 'live-ticker';
  ticker.innerHTML = `
    <div class="live-ticker-content">
      <span class="live-ticker-icon"></span>
      <span class="live-ticker-text"></span>
    </div>
  `;
  document.body.appendChild(ticker);
  
  // Show first message after 3 seconds
  setTimeout(() => showNextActivity(), 3000);
}

function showNextActivity() {
  const ticker = document.getElementById('liveActivityTicker');
  if (!ticker) return;
  
  const activity = activityMessages[currentActivityIndex];
  const iconEl = ticker.querySelector('.live-ticker-icon');
  const textEl = ticker.querySelector('.live-ticker-text');
  
  // Update content
  iconEl.textContent = activity.icon;
  textEl.textContent = activity.text;
  
  // Add type class for styling
  ticker.className = 'live-ticker live-ticker-' + activity.type;
  
  // Show ticker
  ticker.classList.add('show');
  
  // Hide after 5 seconds
  setTimeout(() => {
    ticker.classList.remove('show');
    
    // Move to next message
    currentActivityIndex = (currentActivityIndex + 1) % activityMessages.length;
    
    // Show next after 8 seconds
    setTimeout(() => showNextActivity(), 8000);
  }, 5000);
}

// ═══════════════════════════════════════════════════════════════════════════
// 3. ENHANCED WHATSAPP WIDGET WITH PHOTO
// ═══════════════════════════════════════════════════════════════════════════

function initEnhancedWhatsApp() {
  const widget = document.createElement('div');
  widget.id = 'enhancedWhatsApp';
  widget.className = 'wa-widget';
  
  const waNumber = "918889754969";
  const message = encodeURIComponent("Hi! I'm planning a trip and need help with the itinerary.");
  
  widget.innerHTML = `
    <a href="https://wa.me/${waNumber}?text=${message}" 
       target="_blank" 
       rel="noopener" 
       class="wa-widget-btn">
      
      <div class="wa-widget-content">
        <div class="wa-widget-avatar">
          <img src="/icons/sub.jpeg" alt="Shubham" onerror="this.style.display='none'" />
          <span class="wa-widget-status"></span>
        </div>
        
        <div class="wa-widget-text">
          <div class="wa-widget-name">Hi! I'm Shubham 👋</div>
          <div class="wa-widget-msg">Need help planning?</div>
          <div class="wa-widget-reply">💬 Reply in 2 mins</div>
        </div>
      </div>
      
      <div class="wa-widget-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43l-.48-.01c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/>
        </svg>
      </div>
    </a>
  `;
  
  document.body.appendChild(widget);
  
  // Show after 2 seconds
  setTimeout(() => widget.classList.add('show'), 2000);
  
  // Pulse animation every 10 seconds
  setInterval(() => {
    widget.classList.add('pulse');
    setTimeout(() => widget.classList.remove('pulse'), 1000);
  }, 10000);
}

// ═══════════════════════════════════════════════════════════════════════════
// INITIALIZE ALL
// ═══════════════════════════════════════════════════════════════════════════

function initConversionBoosters() {
  // Wait for page to load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initExitIntent();
      initLiveActivityTicker();
      initEnhancedWhatsApp();
    });
  } else {
    initExitIntent();
    initLiveActivityTicker();
    initEnhancedWhatsApp();
  }
}

// Auto-initialize
initConversionBoosters();

// Make functions globally accessible
window.closeExitPopup = closeExitPopup;
window.handleExitFormSubmit = handleExitFormSubmit;
