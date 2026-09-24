# 📧 EmailJS Setup Guide — Vayu Holidays

This guide configures real email delivery for enquiry form submissions.  
**Free plan:** 200 emails/month — perfect for a travel agency getting started.

---

## What Happens When Someone Submits an Enquiry?

1. Customer fills the enquiry modal / trip planner / contact form
2. Lead is saved to localStorage (appears in Admin CRM immediately)
3. **Admin receives an email notification** with full lead details + WhatsApp link
4. **Customer receives an auto-reply** confirming their enquiry with your contact info

---

## Step 1 — Create an EmailJS Account

1. Go to **[https://www.emailjs.com](https://www.emailjs.com)**
2. Click **Sign Up Free**
3. Verify your email address

---

## Step 2 — Add an Email Service

1. In the EmailJS dashboard, click **Email Services** → **Add New Service**
2. Choose **Gmail** (recommended) or another provider
3. Click **Connect Account** and authorize your Gmail
4. Give it the Service ID: `service_vayuholidays`  
   *(or any ID — just note it down)*
5. Click **Add Service**

---

## Step 3 — Create Template 1: Admin Notification

1. Click **Email Templates** → **Create New Template**
2. Set Template ID: `template_enquiry_notify`
3. Set **To Email:** `your-admin-email@gmail.com`
4. Set **Subject:**
```
New Travel Enquiry — {{from_name}} | {{destination}}
```
5. Set **Body** (HTML or plain text):
```
New enquiry received on your website.

Enquiry ID: {{enquiry_id}}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TRAVELER DETAILS
Name:    {{from_name}}
Phone:   {{from_phone}}
Email:   {{from_email}}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
JOURNEY DETAILS
Destination:    {{destination}}
Travel Month:   {{travel_month}}
Travelers:      {{travelers}}
Budget:         {{budget}}
Departure City: {{departure_city}}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CUSTOMER NOTES
{{notes}}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
QUICK ACTIONS
→ WhatsApp: {{whatsapp_link}}
→ Reply to: {{reply_to}}
```
6. Click **Save**

---

## Step 4 — Create Template 2: Customer Auto-Reply

1. Click **Email Templates** → **Create New Template**
2. Set Template ID: `template_enquiry_autoreply`
3. Set **To Email:** `{{to_email}}` ← (dynamic — sends to customer)
4. Set **Subject:**
```
Your Travel Inquiry Received — {{destination}} | Vayu Holidays
```
5. Set **Body:**
```
Dear {{to_name}},

Thank you for reaching out to Vayu Holidays!

We have received your inquiry for {{destination}} ({{travel_month}}, {{travelers}}).

Your Reference ID: {{enquiry_id}}

Our senior travel specialist will contact you within 2 hours with a 
personalized, itemized quotation tailored to your preferences.

For immediate assistance:
📞 Call Us: {{office_phone}}
💬 WhatsApp: {{whatsapp}}

We look forward to planning your perfect journey.

Warm Regards,
Team Vayu Holidays
Raksha Vihar, Airport Road, Bhopal
```
6. Click **Save**

---

## Step 5 — Get Your Public Key

1. In EmailJS dashboard, click your **Account name (top right)** → **Account**
2. Copy your **Public Key** (looks like: `abc123XYZ_something`)

---

## Step 6 — Configure js/app.js

Open `js/app.js` and update:

```javascript
const EMAILJS_CONFIG = {
  publicKey:       "abc123XYZ_something",     // ← Your Public Key (Step 5)
  serviceId:       "service_vayuholidays",    // ← Your Service ID (Step 2)
  templateEnquiry: "template_enquiry_notify", // ← Admin template ID (Step 3)
  templateAutoReply: "template_enquiry_autoreply" // ← Auto-reply ID (Step 4)
};
```

---

## Step 7 — Test It

1. Open your website
2. Click any **"Get Quote"** or **"Plan My Trip"** button
3. Fill the form and submit
4. Check: your Gmail inbox should receive the admin notification
5. Check: the email address you entered should receive the auto-reply

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Emails not arriving | Check spam/junk folder; verify Service is connected in EmailJS dashboard |
| "EmailJS not loaded" in console | Check internet connection; the CDN script may be blocked |
| Template variable missing | Ensure template variable names exactly match the ones in `app.js` `templateParams` |
| 200/month limit hit | Upgrade EmailJS plan ($9/month for 1000 emails) or switch to Nodemailer with a backend |

---

## Alternative: Formspree (No-Code Option)

If you don't want to configure EmailJS, [Formspree](https://formspree.io) is simpler:

1. Sign up at formspree.io
2. Create a form, get the endpoint URL
3. In `js/app.js` → `sendEnquiryEmail()`, replace the emailjs.send call with:
```javascript
await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(templateParams)
});
```

---

## Alternative: EmailJS React/Backend Upgrade

For higher volume (1000+ leads/month), use a Node.js backend with Nodemailer + Gmail:
- See `DOCUMENTATION.md` → Firebase upgrade section
- Or contact support for a custom backend integration quote

---

*EmailJS free plan: 200 emails/month, no credit card required.*
