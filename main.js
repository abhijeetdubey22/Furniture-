/**
 * Ekveera Super Furniture & Interior — Public Web Storefront Engine
 * Phone-First Responsive Architecture, Dynamic Catalog, 3D Cost Estimator, Mobile Drawer, and WhatsApp Ordering.
 */

import { getStoreData, addCustomerInquiry } from './data-store.js';

// ==========================================================================
// 1. Application State
// ==========================================================================
let currentStore = getStoreData();
let activeCategory = 'all';
let searchQuery = '';
let sortBy = 'featured';

// DOM Elements
const productsGrid = document.getElementById('productsGridContainer');
const categoryButtons = document.querySelectorAll('.category-tab-btn');
const searchInput = document.getElementById('catalogSearchInput');
const sortSelect = document.getElementById('catalogSortSelect');
const countAllSpan = document.getElementById('countAll');
const interiorProjectsContainer = document.getElementById('interiorProjectsContainer');
const publicInquiryForm = document.getElementById('publicInquiryForm');

// Quick View Modal Elements
const quickViewModal = document.getElementById('quickViewModal');
const closeQuickViewBtn = document.getElementById('closeQuickViewBtn');
const modalProductImg = document.getElementById('modalProductImg');
const modalProductCategory = document.getElementById('modalProductCategory');
const modalProductDiscount = document.getElementById('modalProductDiscount');
const modalProductTitle = document.getElementById('modalProductTitle');
const modalProductSku = document.getElementById('modalProductSku');
const modalProductDesc = document.getElementById('modalProductDesc');
const modalProductMaterial = document.getElementById('modalProductMaterial');
const modalProductDimensions = document.getElementById('modalProductDimensions');
const modalProductWarranty = document.getElementById('modalProductWarranty');
const modalProductPrice = document.getElementById('modalProductPrice');
const modalProductMrp = document.getElementById('modalProductMrp');
const modalWhatsappOrderBtn = document.getElementById('modalWhatsappOrderBtn');

// Branding & Profile Elements
const headerBrandName = document.getElementById('headerBrandName');
const headerBrandTag = document.getElementById('headerBrandTag');
const topPhoneNumber = document.getElementById('topPhoneNumber');
const topPhoneLink = document.getElementById('topPhoneLink');
const headerWhatsappBtn = document.getElementById('headerWhatsappBtn');
const heroWhatsappBtn = document.getElementById('heroWhatsappBtn');
const floatingWhatsappBtn = document.getElementById('floatingWhatsappBtn');
const heroBgLayer = document.getElementById('heroBgLayer');
const heroHeadline = document.getElementById('heroHeadline');
const heroSubtitle = document.getElementById('heroSubtitle');
const footerAddress = document.getElementById('footerAddress');
const footerPhone = document.getElementById('footerPhone');
const footerHours = document.getElementById('footerHours');
const mobileBottomCall = document.getElementById('mobileBottomCall');
const mobileBottomWa = document.getElementById('mobileBottomWa');

// ==========================================================================
// 2. Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  renderStoreBranding();
  renderProducts();
  renderInteriorProjects();
  initCategoryFilters();
  initSearchAndSort();
  initQuickViewModal();
  initInquiryForm();
  initMobileDrawer();
  initCostEstimator();
  initBackToTop();

  // Listen for real-time changes from Admin Dashboard
  window.addEventListener('storage', () => {
    currentStore = getStoreData();
    renderStoreBranding();
    renderProducts();
  });

  window.addEventListener('ekveera:datachange', () => {
    currentStore = getStoreData();
    renderStoreBranding();
    renderProducts();
  });
});

// ==========================================================================
// 3. Store Branding & Profile Synchronization
// ==========================================================================
function renderStoreBranding() {
  const profile = currentStore.storeProfile || {};
  const banners = currentStore.banners || {};
  const whatsappNum = profile.whatsappNumber || '919876543210';
  const displayPhone = profile.phone || '+91 98765 43210';
  const ownerName = profile.ownerName || 'Studio Director';

  if (headerBrandName && profile.name) headerBrandName.textContent = profile.name;
  if (topPhoneNumber) topPhoneNumber.textContent = displayPhone;
  if (topPhoneLink) topPhoneLink.href = `tel:${displayPhone.replace(/\s+/g, '')}`;
  if (footerAddress && profile.address) footerAddress.textContent = profile.address;
  if (footerPhone) footerPhone.textContent = `${displayPhone} (${ownerName})`;
  if (footerHours && profile.workingHours) footerHours.textContent = `Open 7 Days: ${profile.workingHours}`;

  if (mobileBottomCall) mobileBottomCall.href = `tel:${displayPhone.replace(/\s+/g, '')}`;

  if (banners.heroBannerImg && heroBgLayer) {
    heroBgLayer.style.backgroundImage = `url('${banners.heroBannerImg}')`;
  }
  if (banners.heroHeadline && heroHeadline) {
    heroHeadline.innerHTML = banners.heroHeadline.includes('Luxury')
      ? banners.heroHeadline.replace('Luxury Furniture', '<span class="gold-gradient-text">Luxury Furniture</span>')
      : banners.heroHeadline;
  }
  if (banners.heroSubtitle && heroSubtitle) {
    heroSubtitle.textContent = banners.heroSubtitle;
  }

  // Update WhatsApp Links
  const waBase = `https://wa.me/${whatsappNum}`;
  if (headerWhatsappBtn) headerWhatsappBtn.href = `${waBase}?text=${encodeURIComponent('Hello Ekveera Furniture, I am interested in your luxury furniture catalog.')}`;
  if (heroWhatsappBtn) heroWhatsappBtn.href = `${waBase}?text=${encodeURIComponent('Hello Ekveera Furniture, please share your product catalog and showroom location.')}`;
  if (floatingWhatsappBtn) floatingWhatsappBtn.href = `${waBase}?text=${encodeURIComponent('Hi Ekveera Furniture, I need assistance regarding custom furniture.')}`;
  if (mobileBottomWa) mobileBottomWa.href = `${waBase}?text=${encodeURIComponent('Hi Ekveera Furniture, I would like to explore custom furniture designs.')}`;
}

// ==========================================================================
// 4. Product Catalog Renderer
// ==========================================================================
function renderProducts() {
  const products = currentStore.products || [];
  if (countAllSpan) countAllSpan.textContent = products.length;

  let filtered = products.filter(p => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const query = searchQuery.toLowerCase();
    const matchesSearch = !query || 
      p.title.toLowerCase().includes(query) ||
      p.material.toLowerCase().includes(query) ||
      p.categoryName.toLowerCase().includes(query) ||
      (p.sku && p.sku.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  // Sorting
  if (sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'name') {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    // Featured first
    filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }

  if (filtered.length === 0) {
    productsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: rgba(22, 19, 16, 0.4); border: 1px dashed var(--border-subtle); border-radius: var(--radius-lg);">
        <i class="ti ti-sofa" style="font-size: 3rem; color: var(--gold-primary); opacity: 0.7; margin-bottom: 12px; display: inline-block;"></i>
        <h4 style="font-family: var(--font-serif); font-size: 1.3rem; color: #fff; margin-bottom: 6px;">No Furniture Pieces Found</h4>
        <p style="font-size: 0.85rem; color: var(--text-secondary); max-width: 450px; margin: 0 auto 18px;">
          We couldn't find any products matching your search criteria. Try a different category or search term.
        </p>
        <button class="btn-card-quickview" style="display: inline-flex; width: auto; padding: 8px 20px;" onclick="document.getElementById('catalogSearchInput').value=''; window.resetCatalogFilter();">
          <i class="ti ti-refresh"></i> Clear Filters
        </button>
      </div>
    `;
    return;
  }

  const whatsappNum = currentStore.storeProfile.whatsappNumber || '919876543210';

  productsGrid.innerHTML = filtered.map(p => {
    const formattedPrice = `₹${p.price.toLocaleString('en-IN')}`;
    const formattedMrp = p.mrp ? `₹${p.mrp.toLocaleString('en-IN')}` : '';
    const waText = encodeURIComponent(`Hello Ekveera Furniture, I am interested in ordering: "${p.title}" (${p.sku || ''}) priced at ${formattedPrice}. Please confirm showroom availability and delivery schedule.`);
    const waUrl = `https://wa.me/${whatsappNum}?text=${waText}`;

    return `
      <div class="product-card" data-id="${p.id}">
        
        <div class="product-media-wrapper">
          <img src="${p.image}" alt="${p.title}" class="product-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80'" />
          
          <div class="product-badges-row">
            ${p.discount ? `<span class="badge-discount">${p.discount}</span>` : '<span></span>'}
            <span class="badge-stock ${p.inStock ? '' : 'out-of-stock'}">
              ${p.inStock ? '● In Showroom' : '● Made to Order'}
            </span>
          </div>
        </div>

        <div class="product-body">
          <span class="product-category-tag">${p.categoryName || p.category}</span>
          <h4 class="product-title">${p.title}</h4>
          <div class="product-material-pill" title="${p.material}"><i class="ti ti-check" style="color: var(--gold-primary);"></i> ${p.material}</div>
          
          <div class="product-price-row">
            <span class="price-offer">${formattedPrice}</span>
            ${formattedMrp ? `<span class="price-mrp">${formattedMrp}</span>` : ''}
          </div>

          <div class="product-actions-row">
            <button type="button" class="btn-card-quickview view-product-btn" data-id="${p.id}">
              <i class="ti ti-eye"></i> Quick View
            </button>
            <a href="${waUrl}" target="_blank" class="btn-card-whatsapp" title="Instant Inquiry on WhatsApp">
              <i class="ti ti-brand-whatsapp"></i> WhatsApp
            </a>
          </div>
        </div>

      </div>
    `;
  }).join('');

  // Attach Quick View Click Handlers
  productsGrid.querySelectorAll('.view-product-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const product = products.find(p => p.id == id);
      if (product) openQuickView(product);
    });
  });
}

window.resetCatalogFilter = function() {
  activeCategory = 'all';
  searchQuery = '';
  categoryButtons.forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-category') === 'all'));
  renderProducts();
};

// ==========================================================================
// 5. Category Tabs & Search Engine
// ==========================================================================
function initCategoryFilters() {
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-category');
      renderProducts();
    });
  });
}

function initSearchAndSort() {
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      renderProducts();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      sortBy = e.target.value;
      renderProducts();
    });
  }
}

// ==========================================================================
// 6. Quick View Modal (Phone-Friendly Modal & Sheet)
// ==========================================================================
function initQuickViewModal() {
  if (!quickViewModal) return;

  closeQuickViewBtn?.addEventListener('click', () => {
    quickViewModal.classList.remove('open');
    document.body.style.overflow = '';
  });

  quickViewModal.addEventListener('click', (e) => {
    if (e.target === quickViewModal) {
      quickViewModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && quickViewModal.classList.contains('open')) {
      quickViewModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

function openQuickView(product) {
  const whatsappNum = currentStore.storeProfile.whatsappNumber || '919876543210';
  const formattedPrice = `₹${product.price.toLocaleString('en-IN')}`;
  const formattedMrp = product.mrp ? `₹${product.mrp.toLocaleString('en-IN')}` : '';

  modalProductImg.src = product.image;
  modalProductCategory.textContent = product.categoryName || product.category;
  modalProductDiscount.textContent = product.discount || 'Special Offer';
  modalProductTitle.textContent = product.title;
  modalProductSku.textContent = `SKU: ${product.sku || 'EK-SHOWROOM'}`;
  modalProductDesc.textContent = product.description || 'Handcrafted solid timber furniture built for supreme comfort and enduring durability.';
  modalProductMaterial.textContent = product.material || 'Solid Teak Wood';
  modalProductDimensions.textContent = product.dimensions || 'Standard Showroom Size';
  modalProductWarranty.textContent = product.warranty || '10 Years Structural Warranty';
  modalProductPrice.textContent = formattedPrice;
  modalProductMrp.textContent = formattedMrp;

  const waText = encodeURIComponent(`Hi Ekveera Furniture, I am inquiring about the ${product.title} (${product.sku}) priced at ${formattedPrice}. Could you share detailed specifications and showroom viewing hours?`);
  modalWhatsappOrderBtn.href = `https://wa.me/${whatsappNum}?text=${waText}`;

  quickViewModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

// ==========================================================================
// 7. Interior Design Projects Showcase
// ==========================================================================
function renderInteriorProjects() {
  const projects = currentStore.interiorProjects || [];
  if (!interiorProjectsContainer) return;

  interiorProjectsContainer.innerHTML = projects.map(proj => {
    return `
      <div class="interior-card">
        <img src="${proj.image}" alt="${proj.title}" loading="lazy" />
        <div class="interior-card-overlay">
          <div class="interior-card-sub"><i class="ti ti-map-pin"></i> ${proj.location}</div>
          <h4 class="interior-card-title">${proj.title}</h4>
          <p class="interior-card-desc">${proj.scope}</p>
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================================================
// 8. Free Quote & Consultation Form
// ==========================================================================
function initInquiryForm() {
  if (!publicInquiryForm) return;

  publicInquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('inqName').value.trim();
    const phone = document.getElementById('inqPhone').value.trim();
    const requirement = document.getElementById('inqCategory').value;
    const budget = document.getElementById('inqBudget').value;
    const notes = document.getElementById('inqNotes').value.trim();

    if (!name || !phone) {
      showToast('Please enter your name and contact phone number.', 'error');
      return;
    }

    // Save into central data store so Owner sees it in Admin Portal
    currentStore = addCustomerInquiry({
      name,
      phone,
      requirement,
      budget,
      notes: notes || 'Submitted via Phone/Web Quote Form'
    });

    // Build WhatsApp Direct Message with dummy phone
    const whatsappNum = currentStore.storeProfile.whatsappNumber || '919876543210';
    const waText = encodeURIComponent(
      `*New Furniture & Interior Quote Request*\n\n` +
      `👤 *Name:* ${name}\n` +
      `📞 *Phone:* ${phone}\n` +
      `🛋️ *Requirement:* ${requirement}\n` +
      `💰 *Budget Range:* ${budget}\n` +
      `📝 *Notes:* ${notes || 'Looking for 3D design estimate.'}\n\n` +
      `_Sent via Ekveera Super Furniture Website_`
    );
    const waUrl = `https://wa.me/${whatsappNum}?text=${waText}`;

    showToast('Quote request saved! Opening WhatsApp for instant estimate...', 'success');
    publicInquiryForm.reset();

    // Open WhatsApp in a new tab
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 600);
  });
}

// ==========================================================================
// 9. Mobile Navigation Drawer (Phone-First)
// ==========================================================================
function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('mobileDrawerOverlay');
  const closeBtn = document.getElementById('closeMobileDrawerBtn');
  const navLinks = document.querySelectorAll('.drawer-nav-link');

  if (!toggleBtn || !drawer || !overlay) return;

  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  navLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

// ==========================================================================
// 10. Interactive 3D & Furniture Cost Estimator
// ==========================================================================
function initCostEstimator() {
  const spaceBtns = document.querySelectorAll('#calcSpaceGroup .estimator-pill-btn');
  const woodBtns = document.querySelectorAll('#calcWoodGroup .estimator-pill-btn');
  const tierBtns = document.querySelectorAll('#calcTierGroup .estimator-pill-btn');
  const displayPrice = document.getElementById('calcDisplayPrice');
  const displayBreakdown = document.getElementById('calcDisplayBreakdown');
  const sendWaBtn = document.getElementById('calcSendWaBtn');

  if (!displayPrice || !sendWaBtn) return;

  let selectedSpace = { name: 'Living Room', base: 65000 };
  let selectedWood = { name: '100% Grade-A CP Teak', multiplier: 1.25 };
  let selectedTier = { name: 'Premium Showroom Standard', add: 0 };

  function calculate() {
    const rawPrice = Math.round(selectedSpace.base * selectedWood.multiplier + selectedTier.add);
    const low = Math.round(rawPrice * 0.95 / 500) * 500;
    const high = Math.round(rawPrice * 1.15 / 500) * 500;

    displayPrice.textContent = `₹${low.toLocaleString('en-IN')} – ₹${high.toLocaleString('en-IN')}`;
    displayBreakdown.textContent = `Includes ${selectedSpace.name} with ${selectedWood.name}, ${selectedTier.name}, 10-Year Structural Warranty & Showroom Delivery.`;

    const whatsappNum = currentStore.storeProfile.whatsappNumber || '919876543210';
    const waText = encodeURIComponent(
      `*Custom Furniture Cost Estimate Request*\n\n` +
      `🛋️ *Space Type:* ${selectedSpace.name}\n` +
      `🌲 *Timber/Material:* ${selectedWood.name}\n` +
      `✨ *Hardware Tier:* ${selectedTier.name}\n` +
      `💰 *Estimated Range:* ₹${low.toLocaleString('en-IN')} – ₹${high.toLocaleString('en-IN')}\n\n` +
      `Please confirm earliest showroom visit and material sample demonstration.`
    );
    sendWaBtn.onclick = () => {
      window.open(`https://wa.me/${whatsappNum}?text=${waText}`, '_blank');
    };
  }

  function setupGroup(buttons, onSelect) {
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        onSelect(btn);
        calculate();
      });
    });
  }

  setupGroup(spaceBtns, (btn) => {
    selectedSpace = {
      name: btn.textContent.trim(),
      base: parseFloat(btn.dataset.base || '65000')
    };
  });

  setupGroup(woodBtns, (btn) => {
    selectedWood = {
      name: btn.textContent.trim(),
      multiplier: parseFloat(btn.dataset.multiplier || '1.25')
    };
  });

  setupGroup(tierBtns, (btn) => {
    selectedTier = {
      name: btn.textContent.trim(),
      add: parseFloat(btn.dataset.add || '0')
    };
  });

  calculate();
}

// ==========================================================================
// 11. Back to Top Floating Button
// ==========================================================================
function initBackToTop() {
  const btn = document.getElementById('backToTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ==========================================================================
// 12. Toast Notification Helper
// ==========================================================================
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  if (type === 'error') toast.style.borderLeftColor = 'var(--rose-danger)';
  if (type === 'success') toast.style.borderLeftColor = 'var(--emerald-success)';

  toast.innerHTML = `<i class="ti ${type === 'success' ? 'ti-check' : type === 'error' ? 'ti-alert-circle' : 'ti-info-circle'}" style="margin-right: 6px; color: var(--gold-primary);"></i> ${message}`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}