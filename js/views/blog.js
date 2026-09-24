/* ==========================================================================
   VAYU HOLIDAYS — TRAVEL STORIES & EDITORIAL BLOG VIEW
   ========================================================================== */

async function renderBlogListView() {
  const blogs = await window.vayuStore.getBlogs();

  return `
    <div class="package-detail-header">
      <div class="container">
        <div class="breadcrumbs">
          <a href="#/">Home</a>
          <span class="breadcrumb-separator">/</span>
          <span style="color: var(--color-obsidian); font-weight: 600;">Travel Stories</span>
        </div>

        <div class="package-detail-title-wrap">
          <div>
            <span class="eyebrow">The Vayu Journal</span>
            <h1 class="package-detail-title">Stories From The Road</h1>
            <p style="font-size: 1.15rem; max-width: 720px; color: var(--color-text-muted); line-height: 1.7;">
              Destination essays, packing guides, visa checklists, and cultural insights curated by our luxury travel architects in Bhopal.
            </p>
          </div>
        </div>
      </div>
    </div>

    <section class="section" style="padding-top: 3.5rem;">
      <div class="container">
        <div class="blog-grid">
          ${blogs.map(b => `
            <div class="blog-card" onclick="window.location.hash='#/blog/${b.slug}'">
              <img src="${b.image}" alt="${b.title}" class="blog-card-img" loading="lazy" />
              <div class="blog-card-body">
                <div class="blog-card-date">${b.category} • ${b.date} • ${b.readTime}</div>
                <h3 class="blog-card-title">${b.title}</h3>
                <p style="font-size: 0.95rem; color: var(--color-text-muted); margin-bottom: 1.5rem; line-height: 1.6;">
                  ${b.excerpt}
                </p>
                <div style="display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.88rem; font-weight: 700; color: var(--color-gold-dark);">
                  Read Complete Story ${ICONS.arrowRight}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

async function renderSingleBlogView(slug) {
  const blog = await window.vayuStore.getBlogBySlug(slug);

  if (!blog) {
    return `
      <div class="container" style="padding: 6rem 1.5rem; text-align: center;">
        <h2 style="font-family: var(--font-serif); font-size: 2.2rem; margin-bottom: 1rem;">Article Not Found</h2>
        <p style="color: var(--color-text-muted); margin-bottom: 2rem;">The requested travel story could not be found.</p>
        <a href="#/blog" class="btn btn-primary">Back to Travel Journal</a>
      </div>
    `;
  }

  // Convert basic markdown formatting to HTML
  const formattedContent = blog.content
    .split('\n\n')
    .map(para => {
      if (para.startsWith('### ')) {
        return `<h3 style="font-family: var(--font-serif); font-size: 1.6rem; margin: 2rem 0 0.85rem; color: var(--color-obsidian);">${para.replace('### ', '')}</h3>`;
      }
      if (para.startsWith('- ')) {
        const items = para.split('\n').map(li => `<li>${li.replace('- ', '')}</li>`).join('');
        return `<ul style="margin: 1rem 0 1.5rem 1.5rem; list-style: disc; color: var(--color-text-main);">${items}</ul>`;
      }
      return `<p style="font-size: 1.12rem; line-height: 1.85; color: var(--color-text-main); margin-bottom: 1.5rem;">${para}</p>`;
    })
    .join('');

  return `
    <article>
      <div class="package-detail-header">
        <div class="container-narrow">
          <div class="breadcrumbs">
            <a href="#/">Home</a>
            <span class="breadcrumb-separator">/</span>
            <a href="#/blog">Travel Stories</a>
            <span class="breadcrumb-separator">/</span>
            <span style="color: var(--color-obsidian); font-weight: 600;">${blog.category}</span>
          </div>

          <span class="eyebrow">${blog.category} • ${blog.date} • ${blog.readTime}</span>
          <h1 style="font-size: clamp(2.2rem, 4vw, 3.2rem); margin: 0.75rem 0 1.5rem; line-height: 1.2;">
            ${blog.title}
          </h1>
        </div>
      </div>

      <div class="container-narrow" style="padding-top: 2.5rem; padding-bottom: 5rem;">
        <img 
          src="${blog.image}" 
          alt="${blog.title}" 
          style="width: 100%; aspect-ratio: 16 / 9; object-fit: cover; border-radius: var(--radius-xl); margin-bottom: 3rem; border: 1px solid var(--border-gold);" 
        />

        <div style="font-size: 1.15rem; line-height: 1.85; color: var(--color-text-main); border-bottom: 1px solid var(--border-subtle); padding-bottom: 3rem; margin-bottom: 3rem;">
          ${formattedContent}
        </div>

        <!-- Callout Banner -->
        <div style="background: var(--color-sand); border: 1px solid var(--border-gold); border-radius: var(--radius-lg); padding: 2.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1.5rem;">
          <div>
            <h4 style="font-family: var(--font-serif); font-size: 1.4rem; margin-bottom: 0.35rem;">Inspired to experience this journey?</h4>
            <p style="font-size: 0.95rem; color: var(--color-text-muted);">
              Let our travel architects curate this exact route with verified luxury stays and private chauffeured transfers.
            </p>
          </div>

          <button class="btn btn-gold" onclick="openEnquiryModal({ title: 'Plan Trip Inspired by Journal' })">
            ${ICONS.sparkles} Plan This Journey
          </button>
        </div>

        <div style="margin-top: 3rem;">
          <a href="#/blog" class="btn btn-secondary">
            ← Return to All Travel Stories
          </a>
        </div>
      </div>
    </article>
  `;
}
