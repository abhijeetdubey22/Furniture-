// Ekveera Furniture Standalone Bundle (Supports file:/// desktop double-click)
(function() {
  if (window.__EKVEERA_MAIN_INITIALIZED__) return;
  window.__EKVEERA_MAIN_INITIALIZED__ = true;

  // Embedded Data Store
  const EkveeraStore = (function() {
    /**
 * Ekveera Super Furniture & Interior — Central Data Store & Synchronization Engine
 * Handles persistent catalog, furniture media, customer inquiries, and showroom configurations.
 */

const STORAGE_KEY = 'ekveera_furniture_master_v3';
const LEGACY_STORAGE_KEY = 'ekveera_furniture_master_v2';
const AUTH_KEY = 'ekveera_admin_auth_session';

const DEFAULT_FURNITURE_DATA = {
  adminAuth: {
    email: 'admin@ekveerafurniture.example.com',
    password: 'admin123',
    role: 'Showroom Owner'
  },
  storeProfile: {
    name: 'Ekveera Super Furniture & Interior',
    tagline: 'Handcrafted Luxury Furniture & Bespoke Modular Interiors',
    ownerName: 'Aarav Sharma',
    phone: '+91 98765 43210',
    whatsappNumber: '919876543210',
    email: 'contact@ekveerafurniture.example.com',
    address: 'Suite 101, Luxury Design Boulevard, Studio Arcade, Mumbai, MH 400001',
    googleMapsUrl: 'https://maps.google.com/?q=Luxury+Furniture+Studio',
    workingHours: 'Mon – Sun: 10:00 AM – 09:00 PM',
    experienceYears: '25+',
    completedHomes: '5,200+'
  },
  banners: {
    heroBannerImg: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
    heroTag: 'Crafted with 100% Solid Teak & Sheesham Wood',
    heroHeadline: 'Transform Your Home with Timeless Luxury Furniture',
    heroSubtitle: 'Direct manufacturer pricing on premium living room sets, royal bedroom suites, Italian marble dining, and custom modular kitchens with 10-year warranty.',
    showroomExterior: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    brandLogo: ''
  },
  products: [
    {
      id: 1,
      sku: 'EK-SOF-01',
      title: 'Royal Chesterfield Velvet 7-Seater Sofa Set',
      category: 'living',
      categoryName: 'Living Room',
      price: 68500,
      mrp: 95000,
      discount: '28% OFF',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
      material: 'Solid Sal Wood Frame & Premium Deep Blue Velvet',
      dimensions: '3-Seater: 84"W x 36"D | 2-Seater: 62"W x 36"D | 2 Single Chairs',
      warranty: '10 Years Structural Warranty',
      inStock: true,
      featured: true,
      description: 'Handcrafted deep-button tufting with high-density 40-density foam for unmatched ergonomic comfort and royal living room presence.'
    },
    {
      id: 2,
      sku: 'EK-SOF-02',
      title: 'Modern Scandinavian L-Shape Sectional with Recliner',
      category: 'living',
      categoryName: 'Living Room',
      price: 54900,
      mrp: 74000,
      discount: '26% OFF',
      image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80',
      material: 'Imported Water-Repellent Fabric & Teak Legs',
      dimensions: '108"L x 68"W x 34"H (Left/Right Configurable)',
      warranty: '7 Years Warranty',
      inStock: true,
      featured: true,
      description: 'Contemporary minimalist modular sectional with adjustable headrests, USB charging ports, and concealed cup-holder console.'
    },
    {
      id: 3,
      sku: 'EK-BED-01',
      title: 'Imperial Teak Wood King Size Bed with Hydraulic Storage',
      category: 'bedroom',
      categoryName: 'Bedroom',
      price: 58000,
      mrp: 82000,
      discount: '29% OFF',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
      material: '100% Grade-A CP Teak Wood & Natural Walnut Polish',
      dimensions: 'King Size: 78"L x 72"W x 48" Headboard Height',
      warranty: '15 Years Anti-Termite & Structural Guarantee',
      inStock: true,
      featured: true,
      description: 'Hand-carved premium teak headboard with heavy-duty German hydraulic lift mechanism and 850-liter dust-proof storage chamber.'
    },
    {
      id: 4,
      sku: 'EK-BED-02',
      title: 'Regal Plush Upholstered Queen Bed with Floating Nightstands',
      category: 'bedroom',
      categoryName: 'Bedroom',
      price: 42500,
      mrp: 58000,
      discount: '27% OFF',
      image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4550?auto=format&fit=crop&w=800&q=80',
      material: 'Engineered BWP Marine Ply & Champagne Gold Suede',
      dimensions: 'Queen Size: 78"L x 60"W with Integrated LED Backlit Headboard',
      warranty: '10 Years Warranty',
      inStock: true,
      featured: false,
      description: 'Luxury hotel-style bedroom suite with cushioned geometric acoustic headboard and twin floating cantilevered bedside drawer units.'
    },
    {
      id: 5,
      sku: 'EK-DIN-01',
      title: 'Italian Statuario Marble 6-Seater Dining Table Set',
      category: 'dining',
      categoryName: 'Dining & Kitchen',
      price: 76000,
      mrp: 110000,
      discount: '31% OFF',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80',
      material: 'Natural Italian White Marble & PVD Brass Gold Stainless Base',
      dimensions: 'Table: 72"L x 36"W x 30"H + 6 Ergonomic Leatherette Chairs',
      warranty: '10 Years Warranty',
      inStock: true,
      featured: true,
      description: 'High-gloss nano-coated stain-resistant Italian marble top supported by an architectural geometric gold PVD coated heavy steel pedestal.'
    },
    {
      id: 6,
      sku: 'EK-DIN-02',
      title: 'Solid Sheesham Wood 6-Seater Dining Table with Bench',
      category: 'dining',
      categoryName: 'Dining & Kitchen',
      price: 38900,
      mrp: 52000,
      discount: '25% OFF',
      image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=800&q=80',
      material: 'Solid Indian Rosewood (Sheesham) with Honey Finish',
      dimensions: 'Table: 60"L x 36"W x 30"H | 4 Cushioned Chairs | 1 Bench',
      warranty: '10 Years Termite Guarantee',
      inStock: true,
      featured: false,
      description: 'Natural grain rustic honey finish Sheesham wood construction built for lifetime daily family gatherings with space-saving slide-in bench.'
    },
    {
      id: 7,
      sku: 'EK-KIT-01',
      title: 'Custom High-Gloss Acrylic Modular Kitchen Setup',
      category: 'kitchen',
      categoryName: 'Dining & Kitchen',
      price: 185000,
      mrp: 245000,
      discount: '24% OFF',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
      material: 'Action TESA BWP HDHMR Board & Blum Soft-Close Hardware',
      dimensions: 'Custom Fit: L-Shape / U-Shape / Island Configured to Floor Plan',
      warranty: '12 Years Waterproof & Hardware Warranty',
      inStock: true,
      featured: true,
      description: 'Zero-maintenance scratch-resistant acrylic shutters, quartz stone countertop, built-in tandem pantry, and automated cutlery organizers.'
    },
    {
      id: 8,
      sku: 'EK-WAR-01',
      title: 'Floor-to-Ceiling 3-Door Sliding Lacquered Glass Wardrobe',
      category: 'bedroom',
      categoryName: 'Bedroom',
      price: 64000,
      mrp: 88000,
      discount: '27% OFF',
      image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=800&q=80',
      material: 'Toughened Tinted Glass, Champagne Aluminum Profiles & Marine Ply',
      dimensions: '8 Ft Height x 7 Ft Width x 24 Inch Depth',
      warranty: '10 Years Hardware Warranty',
      inStock: true,
      featured: true,
      description: 'Integrated motion-sensor LED lighting rods, velvet-lined jewelry drawers, hidden security locker compartment, and silent soft-closing sliders.'
    },
    {
      id: 9,
      sku: 'EK-OFF-01',
      title: 'Executive Director Teak Desk with Leatherette Inlay',
      category: 'office',
      categoryName: 'Office & Decor',
      price: 34500,
      mrp: 46000,
      discount: '25% OFF',
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
      material: 'Solid Teak Veneer, Matte Brass Handles & Wireless Charging Pad',
      dimensions: '60"L x 30"D x 30"H with Lockable Side Credenza',
      warranty: '5 Years Warranty',
      inStock: true,
      featured: false,
      description: 'Commanding executive workspace table with concealed cable management, dual file cabinets, and hand-stitched leatherette writing mat.'
    }
  ],
  interiorProjects: [
    {
      id: 1,
      title: 'Luxury 4BHK Penthouse Turnkey Interior',
      location: 'Green Valley Enclave',
      scope: 'Full Living, 4 Bedrooms, Modular Kitchen & False Ceiling',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Modern Minimalist Villa Modular Living',
      location: 'Palm Residency',
      scope: 'Custom Teak Paneling, Fluted TV Console & Bar Unit',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Contemporary Luxury Kitchen & Dining Lounge',
      location: 'Imperial Heights',
      scope: 'Quartz Island Kitchen with Smart Sensor Lighting',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    }
  ],
  inquiries: [
    {
      id: 101,
      date: '2026-10-14 15:30',
      name: 'Vikram Singhania',
      phone: '+91 98765 11001',
      email: 'vikram.s@example.com',
      requirement: 'Complete 3BHK Modular Furniture & Kitchen',
      budget: '₹3 Lakhs – ₹5 Lakhs',
      status: 'New',
      notes: 'Wants to visit showroom on Saturday morning for wood selection.'
    },
    {
      id: 102,
      date: '2026-10-12 11:15',
      name: 'Priya Malhotra',
      phone: '+91 98765 11002',
      email: 'priya.m@example.com',
      requirement: 'Royal Chesterfield 7-Seater Sofa (Custom Velvet)',
      budget: '₹70,000',
      status: 'Followed Up',
      notes: 'Sent fabric swatch photos on WhatsApp.'
    }
  ]
};

/**
 * Fetch latest furniture store data from localStorage with fallback to defaults
 */
function getStoreData() {
  try {
    // Purge legacy storage key if exists
    try {
      localStorage.removeItem(LEGACY_STORAGE_KEY);
    } catch (_) {}

    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      saveStoreData(DEFAULT_FURNITURE_DATA);
      return JSON.parse(JSON.stringify(DEFAULT_FURNITURE_DATA));
    }
    const parsed = JSON.parse(raw);

    // Auto-sanitize if old legacy details exist in stored object
    if (parsed.storeProfile) {
      if (!parsed.storeProfile.phone || parsed.storeProfile.phone.includes('98220')) {
        parsed.storeProfile.phone = DEFAULT_FURNITURE_DATA.storeProfile.phone;
      }
      if (!parsed.storeProfile.whatsappNumber || parsed.storeProfile.whatsappNumber.includes('98220')) {
        parsed.storeProfile.whatsappNumber = DEFAULT_FURNITURE_DATA.storeProfile.whatsappNumber;
      }
      if (!parsed.storeProfile.ownerName || parsed.storeProfile.ownerName.includes('Vijay Mul')) {
        parsed.storeProfile.ownerName = DEFAULT_FURNITURE_DATA.storeProfile.ownerName;
      }
      if (!parsed.storeProfile.email || parsed.storeProfile.email.includes('ekveerasuperfurniture.com')) {
        parsed.storeProfile.email = DEFAULT_FURNITURE_DATA.storeProfile.email;
      }
      if (!parsed.storeProfile.address || parsed.storeProfile.address.includes('Plot No. 42')) {
        parsed.storeProfile.address = DEFAULT_FURNITURE_DATA.storeProfile.address;
      }
    }

    if (parsed.adminAuth) {
      if (!parsed.adminAuth.email || parsed.adminAuth.email.includes('@ekveera.com')) {
        parsed.adminAuth.email = DEFAULT_FURNITURE_DATA.adminAuth.email;
      }
    }

    return {
      ...DEFAULT_FURNITURE_DATA,
      ...parsed,
      adminAuth: { ...DEFAULT_FURNITURE_DATA.adminAuth, ...(parsed.adminAuth || {}) },
      storeProfile: { ...DEFAULT_FURNITURE_DATA.storeProfile, ...(parsed.storeProfile || {}) },
      banners: { ...DEFAULT_FURNITURE_DATA.banners, ...(parsed.banners || {}) },
      products: parsed.products && parsed.products.length > 0 ? parsed.products : DEFAULT_FURNITURE_DATA.products,
      interiorProjects: parsed.interiorProjects || DEFAULT_FURNITURE_DATA.interiorProjects,
      inquiries: parsed.inquiries || DEFAULT_FURNITURE_DATA.inquiries
    };
  } catch (err) {
    console.error('[FurnitureStore] Error reading local storage:', err);
    return JSON.parse(JSON.stringify(DEFAULT_FURNITURE_DATA));
  }
}

/**
 * Persist furniture store data to localStorage and broadcast change event
 */
function saveStoreData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new CustomEvent('ekveera:datachange', { detail: data }));
  } catch (err) {
    console.error('[FurnitureStore] Error saving to local storage:', err);
  }
}

/**
 * Product CRUD Operations
 */
function addProduct(newProduct) {
  const current = getStoreData();
  const nextId = current.products.length > 0 ? Math.max(...current.products.map(p => p.id)) + 1 : 1;
  const productWithId = {
    id: nextId,
    sku: newProduct.sku || `EK-PROD-${String(nextId).padStart(2, '0')}`,
    ...newProduct
  };
  current.products.unshift(productWithId);
  saveStoreData(current);
  return current;
}

function updateProduct(id, updates) {
  const current = getStoreData();
  current.products = current.products.map(p => {
    if (p.id == id) {
      return { ...p, ...updates };
    }
    return p;
  });
  saveStoreData(current);
  return current;
}

function deleteProduct(id) {
  const current = getStoreData();
  current.products = current.products.filter(p => p.id != id);
  saveStoreData(current);
  return current;
}

/**
 * Customer Inquiries Operations
 */
function addCustomerInquiry(inquiry) {
  const current = getStoreData();
  const nextId = current.inquiries.length > 0 ? Math.max(...current.inquiries.map(i => i.id)) + 1 : 101;
  const newRecord = {
    id: nextId,
    date: new Date().toLocaleString(),
    status: 'New',
    ...inquiry
  };
  current.inquiries.unshift(newRecord);
  saveStoreData(current);
  return current;
}

function updateInquiryStatus(id, newStatus, notes = '') {
  const current = getStoreData();
  current.inquiries = current.inquiries.map(i => {
    if (i.id == id) {
      return { ...i, status: newStatus, notes: notes || i.notes };
    }
    return i;
  });
  saveStoreData(current);
  return current;
}

function deleteInquiry(id) {
  const current = getStoreData();
  current.inquiries = current.inquiries.filter(i => i.id != id);
  saveStoreData(current);
  return current;
}

/**
 * Showroom Profile & Banners Operations
 */
function updateStoreProfile(updates) {
  const current = getStoreData();
  current.storeProfile = { ...current.storeProfile, ...updates };
  saveStoreData(current);
  return current;
}

function updateBanners(updates) {
  const current = getStoreData();
  current.banners = { ...current.banners, ...updates };
  saveStoreData(current);
  return current;
}

/**
 * Backup and Reset
 */
function resetFurnitureStoreToDefaults() {
  localStorage.removeItem(STORAGE_KEY);
  saveStoreData(DEFAULT_FURNITURE_DATA);
  return JSON.parse(JSON.stringify(DEFAULT_FURNITURE_DATA));
}

function exportFurnitureDataJson() {
  const data = getStoreData();
  return JSON.stringify(data, null, 2);
}

function importFurnitureDataJson(jsonStr) {
  try {
    const parsed = JSON.parse(jsonStr);
    if (!parsed || typeof parsed !== 'object') throw new Error('Invalid JSON format');
    saveStoreData(parsed);
    return true;
  } catch (e) {
    console.error('[FurnitureStore] Import failed:', e);
    return false;
  }
}

/**
 * Authentication Helpers
 */
function checkAdminSession() {
  try {
    return sessionStorage.getItem(AUTH_KEY) === 'authenticated';
  } catch (e) {
    return false;
  }
}

function setAdminSession(isAuth) {
  try {
    if (isAuth) {
      sessionStorage.setItem(AUTH_KEY, 'authenticated');
    } else {
      sessionStorage.removeItem(AUTH_KEY);
    }
  } catch (e) {}
}

function verifyAdminCredentials(email, password) {
  const data = getStoreData();
  const auth = data.adminAuth || DEFAULT_FURNITURE_DATA.adminAuth;
  return (
    email.trim().toLowerCase() === auth.email.toLowerCase() &&
    password.trim() === auth.password
  );
}

    return {
      DEFAULT_FURNITURE_DATA,
      getStoreData,
      saveStoreData,
      addProduct,
      updateProduct,
      deleteProduct,
      addCustomerInquiry,
      updateInquiryStatus,
      deleteInquiry,
      updateStoreProfile,
      updateBanners,
      resetFurnitureStoreToDefaults,
      exportFurnitureDataJson,
      importFurnitureDataJson,
      checkAdminSession,
      setAdminSession,
      verifyAdminCredentials
    };
  })();
  window.EkveeraStore = EkveeraStore;

  // Main Application
  /**
 * Ekveera Super Furniture & Interior — Public Web Storefront Engine
 * Phone-First Responsive Architecture, Dynamic Catalog, 3D Cost Estimator, Mobile Drawer, and WhatsApp Ordering.
 */


const { getStoreData, addCustomerInquiry } = window.EkveeraStore;


if (!window.__EKVEERA_MAIN_INITIALIZED__) {
  window.__EKVEERA_MAIN_INITIALIZED__ = true;
  initEkveeraStorefront();
}

function initEkveeraStorefront() {
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
}

})();
