# 🚀 Deployment Guide — Vayu Holidays

Three hosting options — all free, all work perfectly for this static SPA.

---

## Option A — Netlify (Recommended ⭐)

**Best for:** Beginners, fastest setup, free custom domain SSL  
**Time:** 5 minutes

### Method 1: Drag & Drop (No Account Needed)

1. Go to **[https://app.netlify.com/drop](https://app.netlify.com/drop)**
2. Drag the entire `vayu-holidays` folder onto the page
3. Netlify auto-deploys — you get a live URL like `https://random-name-123.netlify.app`
4. Done! ✅

### Method 2: Connect GitHub (Auto-Deploy on Changes)

1. Push your project to a **private** GitHub repository
2. Go to **[https://app.netlify.com](https://app.netlify.com)** → Sign up free
3. Click **Add New Site** → **Import from Git**
4. Select your GitHub repo
5. Settings:
   - Build Command: *(leave empty)*
   - Publish Directory: `.` (a single dot)
6. Click **Deploy Site**

### Add Custom Domain (Netlify)

1. In Netlify → Site Settings → **Domain Management**
2. Click **Add Custom Domain**
3. Enter `www.vayuholidays.com` (your domain)
4. Netlify shows you DNS records to add at your domain registrar (GoDaddy/Namecheap)
5. Add the records, wait 10–30 minutes for propagation
6. SSL certificate is auto-issued (free Let's Encrypt)

### The `netlify.toml` file (already included) handles:
- SPA redirect: all routes → `index.html`
- Security headers (X-Frame-Options, HSTS, etc.)
- Aggressive caching for CSS/JS/icons
- No-cache for service worker

---

## Option B — Vercel

**Best for:** Developers familiar with GitHub  
**Time:** 5 minutes

### Deploy via CLI

```bash
# Install Vercel CLI
npm install -g vercel

# In your project folder
cd vayu-holidays
vercel

# Follow prompts:
# - Set up project? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name: vayu-holidays
# - Which directory? ./ (current)
# - Override settings? No
```

### Deploy via Dashboard

1. Go to **[https://vercel.com](https://vercel.com)** → Sign up with GitHub
2. Click **Add New Project** → Import your GitHub repo
3. Framework Preset: **Other**
4. Root Directory: `.` (leave default)
5. Build Command: *(leave empty)*
6. Output Directory: `.` (a single dot)
7. Click **Deploy**

### Add Custom Domain (Vercel)

1. Vercel Dashboard → Project → **Settings** → **Domains**
2. Add `www.vayuholidays.com`
3. Follow DNS record instructions

The `vercel.json` file (already included) handles:
- SPA routing
- Security headers
- Asset caching

---

## Option C — GitHub Pages (Free, No Custom Domain SSL on Free Plan)

**Best for:** Open-source / free hosting with a GitHub account

### Setup

1. Create a **public** GitHub repository (or use Settings → Pages on private)
2. Push all project files to the `main` branch
3. Go to repo → **Settings** → **Pages**
4. Source: **Deploy from a branch**
5. Branch: `main` / folder: `/ (root)`
6. Click **Save**
7. Your site will be live at: `https://yourusername.github.io/vayu-holidays/`

### Important Note for GitHub Pages

Because GitHub Pages serves from a subfolder path, update `index.html`:
```html
<!-- Change base href if deploying to subfolder -->
<base href="/vayu-holidays/">
```

And update the `manifest.json` start_url:
```json
"start_url": "/vayu-holidays/"
```

---

## Post-Deployment Checklist

After going live, verify:

```
☐  Homepage loads correctly
☐  All nav links work (#/packages, #/about, etc.)
☐  Package detail pages open
☐  Enquiry modal submits successfully
☐  EmailJS sends admin notification email
☐  Admin CMS accessible at /admin (with login)
☐  Google Analytics receiving data (check Realtime report)
☐  Mobile layout looks correct (use Chrome DevTools)
☐  HTTPS padlock is green
☐  sitemap.xml accessible at yourdomain.com/sitemap.xml
☐  robots.txt accessible at yourdomain.com/robots.txt
☐  PWA "Add to Home Screen" prompt appears on mobile
☐  Offline page shows when internet is disconnected
```

---

## Submit to Google Search Console

After deploying with your custom domain:

1. Go to **[https://search.google.com/search-console](https://search.google.com/search-console)**
2. Add your property (URL prefix: `https://www.yourdomain.com`)
3. Verify ownership via HTML file or DNS record
4. Submit sitemap: `https://www.yourdomain.com/sitemap.xml`
5. Request indexing for the homepage

---

## Performance Tips

After deployment, test at:
- **[https://pagespeed.web.dev](https://pagespeed.web.dev)** — Core Web Vitals
- **[https://web.dev/measure](https://web.dev/measure)** — Lighthouse audit
- **[https://securityheaders.com](https://securityheaders.com)** — Security headers check

Expected scores:
- Performance: 85–95 (limited by Unsplash CDN images)
- Accessibility: 90+
- Best Practices: 95+
- SEO: 95+

---

## Updating Your Live Site

### Netlify Drop (simplest)
- Drag the updated folder to `app.netlify.com/drop` again

### Netlify/Vercel via GitHub
- `git push` to your repo → auto-deploys in ~30 seconds

### Manual FTP (shared hosting)
- Upload all files via FTP client (FileZilla)
- Overwrite existing files

---

*All three platforms offer free SSL certificates, CDN distribution, and reliable uptime.*
