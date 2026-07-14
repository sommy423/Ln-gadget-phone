// ============================================================
// LN Gadget and Phone — Products page logic
// Renders category pills + product cards from products-data.js,
// and filters them live by category and search text.
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  const grid = document.getElementById('productGrid');
  const pillRow = document.getElementById('pillRow');
  const searchInput = document.getElementById('searchInput');
  const resultsCount = document.getElementById('resultsCount');
  const noResults = document.getElementById('noResults');

  // Only run on pages that actually have the product grid
  if (!grid || typeof PRODUCTS === 'undefined') return;

  let activeCategory = 'all';
  let searchTerm = '';

  // CUSTOMIZE: this is the store's WhatsApp number used for "Buy Now"
  const WHATSAPP_NUMBER = '2340000000000';

  const formatNaira = (amount) =>
    '\u20A6' + amount.toLocaleString('en-NG');

  const buyNowLink = (product) => {
    const message = `Hello LN Gadget and Phone, I'd like to buy the ${product.name} (${formatNaira(product.price)}). Is it available?`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  // ---- Render category pills ----
  function renderPills() {
    pillRow.innerHTML = CATEGORIES.map(cat => `
      <button
        class="pill${cat.slug === activeCategory ? ' active' : ''}"
        data-category="${cat.slug}"
        role="tab"
        aria-selected="${cat.slug === activeCategory}"
      >${cat.label}</button>
    `).join('');

    pillRow.querySelectorAll('.pill').forEach(btn => {
      btn.addEventListener('click', () => {
        activeCategory = btn.dataset.category;
        renderPills();
        renderProducts();
      });
    });
  }

  // ---- Render product cards ----
  function renderProducts() {
    const term = searchTerm.trim().toLowerCase();

    const filtered = PRODUCTS.filter(p => {
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      const matchesSearch = !term || p.name.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });

    resultsCount.textContent = `${filtered.length} product${filtered.length === 1 ? '' : 's'}`;

    if (filtered.length === 0) {
      grid.innerHTML = '';
      noResults.hidden = false;
      return;
    }

    noResults.hidden = true;

    grid.innerHTML = filtered.map(p => `
      <div class="product-card">
        <div class="product-img">
          ${p.image
            ? `<img src="${p.image}" alt="${p.name}" loading="lazy">`
            : `<span class="img-note">Product photo goes here</span>`}
        </div>
        <div class="product-body">
          <h3 class="product-name">${p.name}</h3>
          <p class="product-price">${formatNaira(p.price)}</p>
          <a href="${buyNowLink(p)}" target="_blank" rel="noopener" class="btn btn-primary btn-buy">Buy Now</a>
        </div>
      </div>
    `).join('');
  }

  // ---- Search input ----
  searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value;
    renderProducts();
  });

  renderPills();
  renderProducts();

});