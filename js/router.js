/* ==========================================================================
   VAYU HOLIDAYS — ASYNC CLIENT ROUTER (Firebase-compatible)
   All view render functions that call store are awaited properly.
   ========================================================================== */

class VayuRouter {
  constructor() {
    window.addEventListener("hashchange", () => this.handleRoute());
    window.addEventListener("load",       () => this.handleRoute());
    window.addEventListener("currency-changed", () => this.handleRoute());
  }

  async handleRoute() {
    const hash = window.location.hash || "#/";
    const [pathWithHash] = hash.split("?");
    const path = pathWithHash || "#/";

    window.scrollTo({ top: 0, behavior: "smooth" });

    const app = document.getElementById("app");
    if (!app) return;

    // Show loading skeleton while async data loads
    app.innerHTML = this._loadingSkeleton();

    try {
      // ── Admin (full page, no navbar/footer) ──────────────────────────────
      if (path === "#/admin") {
        app.innerHTML = await renderAdminView();
        return;
      }

      // ── Resolve page content ──────────────────────────────────────────────
      let pageContent = "";

      if (path === "#/" || path === "#" || path === "") {
        pageContent = await renderHomeView();

      } else if (path === "#/about") {
        pageContent = await renderAboutView();

      } else if (path === "#/packages") {
        pageContent = await renderPackagesView("all");

      } else if (path === "#/domestic") {
        pageContent = await renderPackagesView("domestic");

      } else if (path === "#/international") {
        pageContent = await renderPackagesView("international");

      } else if (path === "#/group-tours") {
        pageContent = await renderPackagesView("group");

      } else if (path === "#/honeymoon") {
        pageContent = await renderPackagesView("honeymoon");

      } else if (path === "#/mice") {
        pageContent = await renderServiceDetailView("mice");

      } else if (path.startsWith("#/package/")) {
        const packageId = path.replace("#/package/", "");
        pageContent = await renderPackageDetailView(packageId);

      } else if (path.startsWith("#/services/")) {
        const serviceSlug = path.replace("#/services/", "");
        pageContent = await renderServiceDetailView(serviceSlug);

      } else if (["#/flights","#/hotels","#/bus","#/train","#/visa","#/passport","#/forex","#/insurance"].includes(path)) {
        pageContent = await renderServiceDetailView(path.replace("#/", ""));

      } else if (path === "#/destinations") {
        pageContent = await renderHomeView();
        setTimeout(() => document.getElementById("destinationsSection")?.scrollIntoView({ behavior: "smooth" }), 150);

      } else if (path === "#/experiences") {
        pageContent = await renderHomeView();
        setTimeout(() => document.getElementById("packagesSection")?.scrollIntoView({ behavior: "smooth" }), 150);

      } else if (path === "#/blog") {
        pageContent = await renderBlogListView();

      } else if (path.startsWith("#/blog/")) {
        pageContent = await renderSingleBlogView(path.replace("#/blog/", ""));

      } else if (path === "#/contact") {
        pageContent = await renderContactView();

      } else if (path === "#/terms") {
        pageContent = await renderTermsView();

      } else if (path === "#/privacy") {
        pageContent = await renderPrivacyView();

      } else {
        pageContent = render404View();
      }

      // ── Inject navbar + content + footer ─────────────────────────────────
      const navbar  = await renderNavbar();
      const footer  = await renderFooter();

      app.innerHTML = `
        ${navbar}
        <main id="mainContent">
          ${pageContent}
        </main>
        ${footer}
      `;

      this._updateActiveNavLink(path);
      if (typeof trackPageView === "function") trackPageView(path);

    } catch (err) {
      console.error("Router error:", err);
      app.innerHTML = `
        <div class="container" style="padding:6rem 1.5rem;text-align:center;">
          <h2 style="font-family:var(--font-serif);font-size:2rem;margin-bottom:1rem;">Something went wrong</h2>
          <p style="color:var(--color-text-muted);margin-bottom:2rem;">${err.message || "Please try again."}</p>
          <a href="#/" class="btn btn-primary">Return to Homepage</a>
        </div>
      `;
    }
  }

  /** Minimal loading skeleton shown while async data fetches */
  _loadingSkeleton() {
    return `
      <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:var(--color-ivory);">
        <div style="text-align:center;">
          <div style="
            width:48px;height:48px;border-radius:50%;
            border:3px solid var(--color-sand-dark);
            border-top-color:var(--color-gold);
            animation:spin 0.8s linear infinite;
            margin:0 auto 1.25rem;
          "></div>
          <p style="font-family:var(--font-serif);font-size:1.1rem;color:var(--color-text-muted);">Loading…</p>
        </div>
      </div>
      <style>
        @keyframes spin { to { transform: rotate(360deg); } }
      </style>
    `;
  }

  _updateActiveNavLink(path) {
    document.querySelectorAll(".nav-link").forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === path);
    });
  }
}

window.vayuRouter = new VayuRouter();
