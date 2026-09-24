/* ==========================================================================
   VAYU HOLIDAYS — LEGAL PAGES: Terms & Conditions + Privacy Policy + 404
   ========================================================================== */

// ============================================================
// TERMS & CONDITIONS
// ============================================================
function renderTermsView() {
  const company = window.vayuStore.getCompany();

  return `
    <div class="package-detail-header">
      <div class="container">
        <div class="breadcrumbs">
          <a href="#/">Home</a>
          <span class="breadcrumb-separator">/</span>
          <span style="color: var(--color-obsidian); font-weight: 600;">Terms & Conditions</span>
        </div>
        <div class="package-detail-title-wrap">
          <div>
            <span class="eyebrow">Legal & Booking Governance</span>
            <h1 class="package-detail-title">Terms & Booking Conditions</h1>
            <p style="font-size: 1rem; color: var(--color-text-muted);">
              Last updated: September 2026 &nbsp;|&nbsp; Effective for all bookings from September 2026 onwards
            </p>
          </div>
        </div>
      </div>
    </div>

    <section class="section" style="padding-top: 3rem; padding-bottom: 5rem;">
      <div class="container-narrow">
        <div style="background: var(--color-cream); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 3rem 3.5rem; line-height: 1.85;">

          <div style="background: var(--color-sand); border: 1px solid var(--border-gold); border-radius: var(--radius-md); padding: 1.25rem 1.75rem; margin-bottom: 2.5rem; font-size: 0.92rem; color: var(--color-slate-medium);">
            <strong>Important Notice:</strong> By submitting an enquiry, making a payment, or confirming a booking with Vayu Holidays, you agree to be bound by the terms and conditions listed below. Please read them carefully.
          </div>

          <h2 style="font-family: var(--font-serif); font-size: 1.65rem; margin-bottom: 1rem; color: var(--color-obsidian);">1. Company Information</h2>
          <p style="color: var(--color-text-muted); margin-bottom: 2rem;">
            <strong>Vayu Holidays</strong> (hereafter referred to as "the Company," "we," "us," or "our") is a licensed travel agency and tour operator headquartered at ${company.office}. We operate as a travel planning, booking facilitation, and concierge service provider for domestic and international holiday packages, flight ticketing, hotel reservations, visa assistance, forex, and corporate MICE services.
          </p>

          <h2 style="font-family: var(--font-serif); font-size: 1.65rem; margin-bottom: 1rem; color: var(--color-obsidian);">2. Bookings & Confirmation</h2>
          <ul style="color: var(--color-text-muted); margin-bottom: 2rem; list-style: disc; padding-left: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem;">
            <li>All package prices shown on this website are indicative starting prices based on double-occupancy and standard departure conditions.</li>
            <li>Final confirmed pricing is provided only via an itemized, written quotation issued directly by Vayu Holidays after reviewing live hotel availability and flight inventory.</li>
            <li>A booking is considered confirmed only upon receipt of the specified advance deposit (minimum 25% of total package cost) and issuance of a formal booking confirmation reference by Vayu Holidays.</li>
            <li>Online enquiry submissions do not constitute a confirmed booking. They are Phase 1 consultation requests.</li>
          </ul>

          <h2 style="font-family: var(--font-serif); font-size: 1.65rem; margin-bottom: 1rem; color: var(--color-obsidian);">3. Payment Terms</h2>
          <ul style="color: var(--color-text-muted); margin-bottom: 2rem; list-style: disc; padding-left: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem;">
            <li>Payments are accepted via bank NEFT/RTGS, UPI to verified corporate Vayu Holidays accounts, and major credit/debit cards with formal GST tax invoicing.</li>
            <li>Advance deposit of 25–50% is required at the time of booking confirmation.</li>
            <li>Full payment is required at least 21 days before departure for international packages and 14 days for domestic packages.</li>
            <li>GST (Goods and Services Tax) as applicable under Indian tax law will be added to all quoted fares and clearly stated in the invoice.</li>
          </ul>

          <h2 style="font-family: var(--font-serif); font-size: 1.65rem; margin-bottom: 1rem; color: var(--color-obsidian);">4. Cancellation & Refund Policy</h2>
          <div style="color: var(--color-text-muted); margin-bottom: 2rem;">
            <p style="margin-bottom: 1rem;">The following cancellation charges apply as a percentage of total package cost:</p>
            <div style="overflow-x: auto;">
              <table style="width: 100%; border-collapse: collapse; font-size: 0.92rem;">
                <thead>
                  <tr style="background: var(--color-sand);">
                    <th style="padding: 0.75rem 1rem; text-align: left; border: 1px solid var(--border-subtle);">Days Before Departure</th>
                    <th style="padding: 0.75rem 1rem; text-align: left; border: 1px solid var(--border-subtle);">Cancellation Charge</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="padding: 0.75rem 1rem; border: 1px solid var(--border-subtle);">30+ days</td>
                    <td style="padding: 0.75rem 1rem; border: 1px solid var(--border-subtle);">10% of total cost</td>
                  </tr>
                  <tr style="background: var(--color-sand);">
                    <td style="padding: 0.75rem 1rem; border: 1px solid var(--border-subtle);">15–29 days</td>
                    <td style="padding: 0.75rem 1rem; border: 1px solid var(--border-subtle);">25% of total cost</td>
                  </tr>
                  <tr>
                    <td style="padding: 0.75rem 1rem; border: 1px solid var(--border-subtle);">7–14 days</td>
                    <td style="padding: 0.75rem 1rem; border: 1px solid var(--border-subtle);">50% of total cost</td>
                  </tr>
                  <tr style="background: var(--color-sand);">
                    <td style="padding: 0.75rem 1rem; border: 1px solid var(--border-subtle);">0–6 days (No-show)</td>
                    <td style="padding: 0.75rem 1rem; border: 1px solid var(--border-subtle);">100% of total cost (non-refundable)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style="margin-top: 1rem;">Refunds (where applicable) will be processed within 7–14 working days to the original mode of payment. Non-refundable components such as airlines, pre-booked train tickets, or third-party vendor costs will be deducted from any refund.</p>
          </div>

          <h2 style="font-family: var(--font-serif); font-size: 1.65rem; margin-bottom: 1rem; color: var(--color-obsidian);">5. Passports, Visas & Travel Documents</h2>
          <ul style="color: var(--color-text-muted); margin-bottom: 2rem; list-style: disc; padding-left: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem;">
            <li>It is the sole responsibility of the traveler to ensure their passport is valid for at least 6 months beyond the return travel date.</li>
            <li>Vayu Holidays provides visa assistance as a facilitation service. Visa approvals are at the absolute discretion of the respective foreign embassies/consulates, and the Company cannot be held responsible for visa denials.</li>
            <li>Travelers are advised to verify all entry requirements, health advisories, and vaccination certificates required for their destination country.</li>
          </ul>

          <h2 style="font-family: var(--font-serif); font-size: 1.65rem; margin-bottom: 1rem; color: var(--color-obsidian);">6. Liability & Force Majeure</h2>
          <p style="color: var(--color-text-muted); margin-bottom: 2rem;">
            Vayu Holidays acts as an agent for hotels, airlines, transport operators, and other service providers. While we take every measure to ensure quality, we are not liable for any loss, injury, damage, delays, or changes caused by circumstances beyond our reasonable control, including but not limited to natural disasters, pandemics, government orders, civil unrest, airline cancellations, or political disruptions (Force Majeure events). We strongly recommend comprehensive travel insurance to protect against such contingencies.
          </p>

          <h2 style="font-family: var(--font-serif); font-size: 1.65rem; margin-bottom: 1rem; color: var(--color-obsidian);">7. Changes to Itinerary</h2>
          <p style="color: var(--color-text-muted); margin-bottom: 2rem;">
            Vayu Holidays reserves the right to make minor modifications to itineraries due to local conditions, hotel availability, or airline schedule changes. In such cases, suitable alternative arrangements of equal or higher value will be provided without additional cost. Major changes will be communicated in advance and consent will be sought from the traveler.
          </p>

          <h2 style="font-family: var(--font-serif); font-size: 1.65rem; margin-bottom: 1rem; color: var(--color-obsidian);">8. Governing Law</h2>
          <p style="color: var(--color-text-muted); margin-bottom: 2rem;">
            These Terms & Conditions are governed by the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts of Bhopal, Madhya Pradesh.
          </p>

          <h2 style="font-family: var(--font-serif); font-size: 1.65rem; margin-bottom: 1rem; color: var(--color-obsidian);">9. Contact for Legal Queries</h2>
          <p style="color: var(--color-text-muted); margin-bottom: 2rem;">
            For any queries regarding these terms, please contact us at:<br/>
            <strong>${company.name}</strong><br/>
            ${company.office}<br/>
            Email: <a href="mailto:${company.email}" style="color: var(--color-gold-dark);">${company.email}</a><br/>
            Phone: <a href="tel:${company.phone}" style="color: var(--color-gold-dark);">${company.phone}</a>
          </p>

          <div style="padding-top: 2rem; border-top: 1px solid var(--border-subtle); text-align: center;">
            <a href="#/" class="btn btn-secondary">← Return to Homepage</a>
            <a href="#/contact" class="btn btn-gold" style="margin-left: 1rem;">Contact Our Team</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ============================================================
// PRIVACY POLICY
// ============================================================
function renderPrivacyView() {
  const company = window.vayuStore.getCompany();

  return `
    <div class="package-detail-header">
      <div class="container">
        <div class="breadcrumbs">
          <a href="#/">Home</a>
          <span class="breadcrumb-separator">/</span>
          <span style="color: var(--color-obsidian); font-weight: 600;">Privacy Policy</span>
        </div>
        <div class="package-detail-title-wrap">
          <div>
            <span class="eyebrow">Data Protection & Privacy</span>
            <h1 class="package-detail-title">Privacy Policy</h1>
            <p style="font-size: 1rem; color: var(--color-text-muted);">
              Last updated: September 2026 &nbsp;|&nbsp; Compliant with Indian IT Act & DPDP Act 2023
            </p>
          </div>
        </div>
      </div>
    </div>

    <section class="section" style="padding-top: 3rem; padding-bottom: 5rem;">
      <div class="container-narrow">
        <div style="background: var(--color-cream); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 3rem 3.5rem; line-height: 1.85;">

          <div style="background: var(--color-sand); border: 1px solid var(--border-gold); border-radius: var(--radius-md); padding: 1.25rem 1.75rem; margin-bottom: 2.5rem; font-size: 0.92rem; color: var(--color-slate-medium);">
            Your privacy matters deeply to us. Vayu Holidays collects only the personal information necessary to provide you with our travel planning services, and we never sell your data to third parties.
          </div>

          <h2 style="font-family: var(--font-serif); font-size: 1.65rem; margin-bottom: 1rem; color: var(--color-obsidian);">1. Information We Collect</h2>
          <p style="color: var(--color-text-muted); margin-bottom: 1rem;">We collect the following categories of personal information:</p>
          <ul style="color: var(--color-text-muted); margin-bottom: 2rem; list-style: disc; padding-left: 1.5rem; display: flex; flex-direction: column; gap: 0.65rem;">
            <li><strong>Identity Data:</strong> Full name, passport number, date of birth (for visa applications).</li>
            <li><strong>Contact Data:</strong> Email address, phone number, WhatsApp number, residential address.</li>
            <li><strong>Travel Data:</strong> Destination preferences, travel dates, group size, dietary/health requirements, and special requests.</li>
            <li><strong>Financial Data:</strong> Bank account details, UPI IDs, or card information strictly for processing confirmed bookings. We do not store card data on our servers.</li>
            <li><strong>Technical Data:</strong> IP address, browser type, device type, pages visited, and session duration collected via Google Analytics (only with your cookie consent).</li>
            <li><strong>Communications Data:</strong> Records of phone calls, WhatsApp messages, emails, and web form submissions.</li>
          </ul>

          <h2 style="font-family: var(--font-serif); font-size: 1.65rem; margin-bottom: 1rem; color: var(--color-obsidian);">2. How We Use Your Information</h2>
          <ul style="color: var(--color-text-muted); margin-bottom: 2rem; list-style: disc; padding-left: 1.5rem; display: flex; flex-direction: column; gap: 0.65rem;">
            <li>To prepare and deliver personalized holiday quotations and itineraries.</li>
            <li>To process hotel reservations, flight bookings, visa applications, and other travel services.</li>
            <li>To communicate booking confirmations, updates, travel advisories, and vouchers.</li>
            <li>To send occasional curated travel offers and newsletters (only with your explicit consent — you may unsubscribe at any time).</li>
            <li>To improve our website and services through aggregated, anonymized usage analytics.</li>
            <li>To comply with legal obligations under Indian law.</li>
          </ul>

          <h2 style="font-family: var(--font-serif); font-size: 1.65rem; margin-bottom: 1rem; color: var(--color-obsidian);">3. Data Sharing & Third Parties</h2>
          <p style="color: var(--color-text-muted); margin-bottom: 1rem;">We share your personal data only with:</p>
          <ul style="color: var(--color-text-muted); margin-bottom: 2rem; list-style: disc; padding-left: 1.5rem; display: flex; flex-direction: column; gap: 0.65rem;">
            <li><strong>Hotels & Resorts:</strong> For confirmed reservation creation and special request communication.</li>
            <li><strong>Airlines & Transport Operators:</strong> To issue your tickets and arrange transfers.</li>
            <li><strong>Visa Processing Authorities:</strong> Embassies, consulates, and VFS/TLS centers as required by your visa application.</li>
            <li><strong>Insurance Providers:</strong> For policy issuance when you opt for travel insurance.</li>
            <li><strong>EmailJS:</strong> Our email delivery platform for sending enquiry notifications. Data processed under their GDPR-compliant policies.</li>
            <li><strong>Google Analytics:</strong> Anonymized usage data for website analytics (only when cookie consent is granted).</li>
          </ul>
          <p style="color: var(--color-text-muted); margin-bottom: 2rem;">
            <strong>We never sell, rent, or trade your personal information to any third party for marketing purposes.</strong>
          </p>

          <h2 style="font-family: var(--font-serif); font-size: 1.65rem; margin-bottom: 1rem; color: var(--color-obsidian);">4. Data Storage & Security</h2>
          <ul style="color: var(--color-text-muted); margin-bottom: 2rem; list-style: disc; padding-left: 1.5rem; display: flex; flex-direction: column; gap: 0.65rem;">
            <li>Website enquiry data is stored in your browser's localStorage until it is synced with our CRM system.</li>
            <li>Our office systems follow restricted access policies — only authorized travel managers can access customer data.</li>
            <li>We implement industry-standard security measures including HTTPS, access controls, and regular security audits.</li>
            <li>We retain your personal data for up to 3 years after your last interaction with us, after which it is securely deleted, unless legal obligations require longer retention.</li>
          </ul>

          <h2 style="font-family: var(--font-serif); font-size: 1.65rem; margin-bottom: 1rem; color: var(--color-obsidian);">5. Cookies</h2>
          <p style="color: var(--color-text-muted); margin-bottom: 2rem;">
            This website uses cookies to enhance user experience and analyze traffic. Specifically:
          </p>
          <ul style="color: var(--color-text-muted); margin-bottom: 2rem; list-style: disc; padding-left: 1.5rem; display: flex; flex-direction: column; gap: 0.65rem;">
            <li><strong>Essential Cookies:</strong> Required for basic website functionality (e.g., your currency preference, enquiry data). These cannot be disabled.</li>
            <li><strong>Analytics Cookies (Google Analytics 4):</strong> Used only when you click "Accept All" on our cookie consent banner. These track anonymous usage patterns to help us improve the website.</li>
          </ul>
          <p style="color: var(--color-text-muted); margin-bottom: 2rem;">
            You can withdraw your analytics cookie consent at any time by clearing your browser's localStorage or by using your browser's cookie management settings.
          </p>

          <h2 style="font-family: var(--font-serif); font-size: 1.65rem; margin-bottom: 1rem; color: var(--color-obsidian);">6. Your Rights (DPDP Act 2023)</h2>
          <p style="color: var(--color-text-muted); margin-bottom: 1rem;">Under the Digital Personal Data Protection Act, 2023, you have the right to:</p>
          <ul style="color: var(--color-text-muted); margin-bottom: 2rem; list-style: disc; padding-left: 1.5rem; display: flex; flex-direction: column; gap: 0.65rem;">
            <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
            <li><strong>Correction:</strong> Request correction of any inaccurate or incomplete data.</li>
            <li><strong>Erasure:</strong> Request deletion of your personal data, subject to legal retention requirements.</li>
            <li><strong>Nomination:</strong> Nominate another individual to exercise your rights on your behalf.</li>
            <li><strong>Grievance Redressal:</strong> File a complaint with us if you believe your data rights have been violated.</li>
          </ul>
          <p style="color: var(--color-text-muted); margin-bottom: 2rem;">
            To exercise any of these rights, email us at <a href="mailto:${company.email}" style="color: var(--color-gold-dark);">${company.email}</a> with the subject line "Data Privacy Request." We will respond within 30 days.
          </p>

          <h2 style="font-family: var(--font-serif); font-size: 1.65rem; margin-bottom: 1rem; color: var(--color-obsidian);">7. Children's Privacy</h2>
          <p style="color: var(--color-text-muted); margin-bottom: 2rem;">
            Our services are not directed to children under 18. We do not knowingly collect personal data from children. If you believe a child has submitted personal data through our website, please contact us immediately for removal.
          </p>

          <h2 style="font-family: var(--font-serif); font-size: 1.65rem; margin-bottom: 1rem; color: var(--color-obsidian);">8. Changes to This Policy</h2>
          <p style="color: var(--color-text-muted); margin-bottom: 2rem;">
            We may update this Privacy Policy periodically. Material changes will be communicated via a notice on the website homepage. Continued use of our services after changes constitutes acceptance of the updated policy.
          </p>

          <h2 style="font-family: var(--font-serif); font-size: 1.65rem; margin-bottom: 1rem; color: var(--color-obsidian);">9. Contact — Data Protection</h2>
          <p style="color: var(--color-text-muted); margin-bottom: 2rem;">
            <strong>${company.name}</strong><br/>
            ${company.office}<br/>
            Email: <a href="mailto:${company.email}" style="color: var(--color-gold-dark);">${company.email}</a><br/>
            Phone: <a href="tel:${company.phone}" style="color: var(--color-gold-dark);">${company.phone}</a>
          </p>

          <div style="padding-top: 2rem; border-top: 1px solid var(--border-subtle); text-align: center;">
            <a href="#/" class="btn btn-secondary">← Return to Homepage</a>
            <a href="#/terms" class="btn btn-gold" style="margin-left: 1rem;">View Terms & Conditions</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ============================================================
// 404 — PAGE NOT FOUND
// ============================================================
function render404View() {
  return `
    <div style="min-height: 80vh; display: flex; align-items: center; justify-content: center; padding: 4rem 1.5rem;">
      <div style="text-align: center; max-width: 560px;">
        <div style="font-family: var(--font-serif); font-size: clamp(5rem, 15vw, 9rem); font-weight: 400; color: var(--color-gold); line-height: 1; margin-bottom: 1rem; opacity: 0.6;">
          404
        </div>

        <span class="eyebrow">Page Not Found</span>

        <h2 style="font-family: var(--font-serif); font-size: clamp(1.75rem, 3vw, 2.5rem); margin: 0.75rem 0 1.25rem; color: var(--color-obsidian);">
          This Destination Doesn't Exist
        </h2>

        <p style="font-size: 1.05rem; color: var(--color-text-muted); line-height: 1.7; margin-bottom: 2.5rem;">
          The page or itinerary you're looking for could not be found. It may have been moved, renamed, or is still being curated for 2026.
        </p>

        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <a href="#/" class="btn btn-primary btn-lg">
            ← Return to Homepage
          </a>
          <a href="#/packages" class="btn btn-gold btn-lg">
            ${ICONS.plane} Explore Packages
          </a>
        </div>

        <div style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--border-subtle);">
          <p style="font-size: 0.88rem; color: var(--color-text-muted); margin-bottom: 1rem;">
            Looking for something specific? Our concierge is ready to help.
          </p>
          <button class="btn btn-secondary" onclick="openEnquiryModal({ title: 'General Inquiry' })">
            ${ICONS.sparkles} Contact Concierge
          </button>
        </div>
      </div>
    </div>
  `;
}
