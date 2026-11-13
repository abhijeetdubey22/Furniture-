// Ekveera Furniture Admin Standalone Bundle (Supports file:/// desktop double-click)
(function() {
  if (window.__EKVEERA_ADMIN_INITIALIZED__) return;
  window.__EKVEERA_ADMIN_INITIALIZED__ = true;

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

  // Admin Controller
  /**
 * Ekveera Super Furniture & Interior — Master Admin Portal Controller
 * Handles owner authentication, product catalog CRUD, photo uploads, customer inquiries, and profile settings.
 */


const {
  getStoreData,
  addProduct,
  updateProduct,
  deleteProduct,
  updateInquiryStatus,
  deleteInquiry,
  updateStoreProfile,
  updateBanners,
  resetFurnitureStoreToDefaults,
  exportFurnitureDataJson,
  importFurnitureDataJson,
  checkAdminSession,
  setAdminSession,
  verifyAdminCredentials,
  saveStoreData
} = window.EkveeraStore;


if (!window.__EKVEERA_ADMIN_INITIALIZED__) {
  window.__EKVEERA_ADMIN_INITIALIZED__ = true;
  initEkveeraAdminPortal();
}

function initEkveeraAdminPortal() {
// ==========================================================================
// 1. App State & DOM Elements
// ==========================================================================
let currentStore = getStoreData();
let productFilterCategory = 'all';
let productSearchQuery = '';

// Auth Elements
const authOverlay = document.getElementById('adminAuthOverlay');
const loginForm = document.getElementById('adminLoginForm');
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const authErrorMsg = document.getElementById('authErrorMsg');
const quickDemoLoginBtn = document.getElementById('quickDemoLoginBtn');
const adminLogoutBtn = document.getElementById('adminLogoutBtn');

// Top Navbar
const topNavAppName = document.getElementById('topNavAppName');

// Sidebar Tabs
const sidebarTabs = document.querySelectorAll('.sidebar-nav-item');
const tabPanes = document.querySelectorAll('.tab-pane');

// Overview Elements
const metricTotalProducts = document.getElementById('metricTotalProducts');
const metricTotalInquiries = document.getElementById('metricTotalInquiries');
const overviewRefreshBtn = document.getElementById('overviewRefreshBtn');

// Product Catalog Elements
const adminProductsTableBody = document.getElementById('adminProductsTableBody');
const adminProductCategoryFilter = document.getElementById('adminProductCategoryFilter');
const adminProductSearchInput = document.getElementById('adminProductSearchInput');
const openAddProductModalBtn = document.getElementById('openAddProductModalBtn');
const productModal = document.getElementById('productModal');
const closeProductModalBtn = document.getElementById('closeProductModalBtn');
const cancelProductModalBtn = document.getElementById('cancelProductModalBtn');
const productModalForm = document.getElementById('productModalForm');
const productModalTitle = document.getElementById('productModalTitle');
const productEditId = document.getElementById('productEditId');
const prodTitle = document.getElementById('prodTitle');
const prodCategory = document.getElementById('prodCategory');
const prodPrice = document.getElementById('prodPrice');
const prodMrp = document.getElementById('prodMrp');
const prodMaterial = document.getElementById('prodMaterial');
const prodDimensions = document.getElementById('prodDimensions');
const prodImageUrl = document.getElementById('prodImageUrl');
const prodPhotoFileInput = document.getElementById('prodPhotoFileInput');
const triggerProdPhotoUploadBtn = document.getElementById('triggerProdPhotoUploadBtn');
const prodImagePreviewWrapper = document.getElementById('prodImagePreviewWrapper');
const prodImagePreview = document.getElementById('prodImagePreview');
const prodDescription = document.getElementById('prodDescription');
const prodStock = document.getElementById('prodStock');
const prodFeatured = document.getElementById('prodFeatured');

// Banners & Media Elements
const heroBannerDropzone = document.getElementById('heroBannerDropzone');
const heroBannerInput = document.getElementById('heroBannerInput');
const heroBannerPreviewImg = document.getElementById('heroBannerPreviewImg');
const heroBannerPlaceholder = document.getElementById('heroBannerPlaceholder');
const chooseHeroBannerBtn = document.getElementById('chooseHeroBannerBtn');
const resetHeroBannerBtn = document.getElementById('resetHeroBannerBtn');
const settingHeroHeadline = document.getElementById('settingHeroHeadline');
const settingHeroSubtitle = document.getElementById('settingHeroSubtitle');
const saveBannersBtn = document.getElementById('saveBannersBtn');

const showroomPhotoDropzone = document.getElementById('showroomPhotoDropzone');
const showroomPhotoInput = document.getElementById('showroomPhotoInput');
const showroomPhotoPreviewImg = document.getElementById('showroomPhotoPreviewImg');
const showroomPhotoPlaceholder = document.getElementById('showroomPhotoPlaceholder');
const chooseShowroomPhotoBtn = document.getElementById('chooseShowroomPhotoBtn');
const resetShowroomPhotoBtn = document.getElementById('resetShowroomPhotoBtn');

// Inquiries Elements
const adminInquiriesTableBody = document.getElementById('adminInquiriesTableBody');
const refreshInquiriesBtn = document.getElementById('refreshInquiriesBtn');

// Store Profile Elements
const storeProfileForm = document.getElementById('storeProfileForm');
const profileStoreName = document.getElementById('profileStoreName');
const profileOwnerName = document.getElementById('profileOwnerName');
const profilePhone = document.getElementById('profilePhone');
const profileWhatsapp = document.getElementById('profileWhatsapp');
const profileEmail = document.getElementById('profileEmail');
const profileHours = document.getElementById('profileHours');
const profileAddress = document.getElementById('profileAddress');
const saveStoreProfileBtn = document.getElementById('saveStoreProfileBtn');

// Security & Backup
const changePasswordForm = document.getElementById('changePasswordForm');
const settingAdminEmail = document.getElementById('settingAdminEmail');
const settingAdminPass = document.getElementById('settingAdminPass');
const exportBackupBtn = document.getElementById('exportBackupBtn');
const triggerImportBtn = document.getElementById('triggerImportBtn');
const importJsonFileInput = document.getElementById('importJsonFileInput');
const factoryResetBtn = document.getElementById('factoryResetBtn');

// ==========================================================================
// 2. Authentication
// ==========================================================================
function initAuth() {
  if (checkAdminSession()) {
    authOverlay.style.display = 'none';
  } else {
    authOverlay.style.display = 'flex';
  }

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginEmail.value;
    const pass = loginPassword.value;

    if (verifyAdminCredentials(email, pass)) {
      setAdminSession(true);
      authOverlay.style.display = 'none';
      authErrorMsg.style.display = 'none';
      showToast('Welcome to Ekveera Furniture Owner Portal!', 'success');
      refreshAllData();
    } else {
      authErrorMsg.style.display = 'block';
    }
  });

  quickDemoLoginBtn.addEventListener('click', () => {
    loginEmail.value = 'admin@ekveerafurniture.example.com';
    loginPassword.value = 'admin123';
    setAdminSession(true);
    authOverlay.style.display = 'none';
    authErrorMsg.style.display = 'none';
    showToast('Demo Owner Access Granted!', 'success');
    refreshAllData();
  });

  adminLogoutBtn.addEventListener('click', () => {
    setAdminSession(false);
    authOverlay.style.display = 'flex';
    showToast('Signed out from Owner Portal.', 'info');
  });
}

// ==========================================================================
// 3. Tab Navigation
// ==========================================================================
function initTabs() {
  sidebarTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-tab');
      sidebarTabs.forEach(t => t.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add('active');
    });
  });
}

// ==========================================================================
// 4. Image Compression & Base64 Helper
// ==========================================================================
function processImageFile(file, maxWidth = 1400, maxHeight = 900, quality = 0.85) {
  return new Promise((resolve, reject) => {
    if (!file || !file.type.startsWith('image/')) {
      return reject(new Error('Please select a valid image file.'));
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        if (width > maxWidth || height > maxHeight) {
          if (width / height > maxWidth / maxHeight) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          } else {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(dataUrl);
      };
      img.onerror = () => reject(new Error('Failed to parse image.'));
      img.src = e.target.result;
    };
    reader.onerror = () => reject(new Error('Failed to read file.'));
    reader.readAsDataURL(file);
  });
}

// ==========================================================================
// 5. Product Catalog Manager (CRUD)
// ==========================================================================
function initProductManager() {
  renderProductsTable();

  adminProductCategoryFilter?.addEventListener('change', (e) => {
    productFilterCategory = e.target.value;
    renderProductsTable();
  });

  adminProductSearchInput?.addEventListener('input', (e) => {
    productSearchQuery = e.target.value.trim().toLowerCase();
    renderProductsTable();
  });

  // Photo Upload Trigger for Product Modal
  triggerProdPhotoUploadBtn?.addEventListener('click', () => prodPhotoFileInput.click());
  prodPhotoFileInput?.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      showToast('Processing photo...', 'info');
      const base64 = await processImageFile(file, 800, 600, 0.85);
      prodImageUrl.value = base64;
      prodImagePreview.src = base64;
      prodImagePreviewWrapper.style.display = 'block';
      showToast('Product photo uploaded!', 'success');
    } catch (err) {
      showToast(err.message || 'Photo upload failed', 'error');
    }
  });

  prodImageUrl?.addEventListener('input', () => {
    if (prodImageUrl.value.trim()) {
      prodImagePreview.src = prodImageUrl.value.trim();
      prodImagePreviewWrapper.style.display = 'block';
    } else {
      prodImagePreviewWrapper.style.display = 'none';
    }
  });

  // Open Add Product Modal
  openAddProductModalBtn?.addEventListener('click', () => {
    productModalTitle.innerHTML = '<i class="ti ti-plus"></i> Add Furniture Piece';
    productEditId.value = '';
    productModalForm.reset();
    prodImagePreviewWrapper.style.display = 'none';
    prodStock.value = 'true';
    prodFeatured.value = 'true';
    productModal.classList.add('open');
  });

  closeProductModalBtn?.addEventListener('click', () => productModal.classList.remove('open'));
  cancelProductModalBtn?.addEventListener('click', () => productModal.classList.remove('open'));

  // Save / Update Product Form Submission
  productModalForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const editId = productEditId.value;
    const title = prodTitle.value.trim();
    const category = prodCategory.value;
    const price = Number(prodPrice.value);
    const mrp = Number(prodMrp.value) || Math.round(price * 1.35);
    const material = prodMaterial.value.trim();
    const dimensions = prodDimensions.value.trim() || 'Custom Showroom Specification';
    const image = prodImageUrl.value.trim() || 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80';
    const description = prodDescription.value.trim();
    const inStock = prodStock.value === 'true';
    const featured = prodFeatured.value === 'true';

    const categoryNames = {
      living: 'Living Room',
      bedroom: 'Bedroom',
      dining: 'Dining & Kitchen',
      office: 'Office & Decor'
    };

    const discountPercent = mrp > price ? `${Math.round(((mrp - price) / mrp) * 100)}% OFF` : '';

    const productPayload = {
      title,
      category,
      categoryName: categoryNames[category] || 'Custom Furniture',
      price,
      mrp,
      discount: discountPercent,
      material,
      dimensions,
      image,
      description,
      inStock,
      featured,
      warranty: '10 Years Structural Warranty'
    };

    if (editId) {
      currentStore = updateProduct(editId, productPayload);
      showToast('Furniture piece updated successfully!', 'success');
    } else {
      currentStore = addProduct(productPayload);
      showToast('New furniture piece added to showroom!', 'success');
    }

    productModal.classList.remove('open');
    renderProductsTable();
    updateMetrics();
  });
}

function renderProductsTable() {
  const products = currentStore.products || [];

  const filtered = products.filter(p => {
    const matchesCategory = productFilterCategory === 'all' || p.category === productFilterCategory;
    const matchesSearch = !productSearchQuery ||
      p.title.toLowerCase().includes(productSearchQuery) ||
      (p.sku && p.sku.toLowerCase().includes(productSearchQuery)) ||
      (p.material && p.material.toLowerCase().includes(productSearchQuery));

    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    adminProductsTableBody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; color: var(--text-muted); padding: 30px;">
          No furniture items match the filter. Click "Add Furniture Item" to add new pieces.
        </td>
      </tr>
    `;
    return;
  }

  adminProductsTableBody.innerHTML = filtered.map(p => {
    const formattedPrice = `₹${p.price.toLocaleString('en-IN')}`;
    const formattedMrp = p.mrp ? `₹${p.mrp.toLocaleString('en-IN')}` : '—';

    return `
      <tr>
        <td>
          <img src="${p.image}" alt="${p.title}" class="table-img-thumb" onerror="this.src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=100&q=80'" />
        </td>
        <td>
          <strong>${p.title}</strong>
          <div style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--gold-primary);">${p.sku || 'EK-PROD'}</div>
        </td>
        <td><span style="font-size: 0.76rem; color: var(--text-secondary);">${p.categoryName || p.category}</span></td>
        <td>
          <div style="font-weight: 700; color: var(--gold-light);">${formattedPrice}</div>
          <div style="font-size: 0.72rem; color: var(--text-muted); text-decoration: line-through;">${formattedMrp}</div>
        </td>
        <td>
          <div style="font-size: 0.75rem;">${p.material}</div>
          <div style="font-size: 0.7rem; color: var(--text-muted);">${p.dimensions || ''}</div>
        </td>
        <td>
          <button type="button" class="badge-status ${p.inStock ? 'instock' : 'outofstock'} toggle-stock-btn" data-id="${p.id}" style="border: none; cursor: pointer;">
            ${p.inStock ? 'In Showroom' : 'Made to Order'}
          </button>
        </td>
        <td style="text-align: right;">
          <button type="button" class="table-btn-icon edit-prod-btn" data-id="${p.id}" title="Edit Product">
            <i class="ti ti-edit"></i>
          </button>
          <button type="button" class="table-btn-icon delete delete-prod-btn" data-id="${p.id}" title="Delete Product">
            <i class="ti ti-trash"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');

  // Stock Toggle Listener
  adminProductsTableBody.querySelectorAll('.toggle-stock-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const item = products.find(p => p.id == id);
      if (item) {
        currentStore = updateProduct(id, { inStock: !item.inStock });
        renderProductsTable();
        showToast(`Updated stock status for ${item.title}`, 'info');
      }
    });
  });

  // Edit Listener
  adminProductsTableBody.querySelectorAll('.edit-prod-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const item = products.find(p => p.id == id);
      if (!item) return;

      productModalTitle.innerHTML = '<i class="ti ti-edit"></i> Edit Furniture Piece';
      productEditId.value = item.id;
      prodTitle.value = item.title;
      prodCategory.value = item.category;
      prodPrice.value = item.price;
      prodMrp.value = item.mrp || '';
      prodMaterial.value = item.material || '';
      prodDimensions.value = item.dimensions || '';
      prodImageUrl.value = item.image || '';
      prodDescription.value = item.description || '';
      prodStock.value = item.inStock ? 'true' : 'false';
      prodFeatured.value = item.featured ? 'true' : 'false';

      if (item.image) {
        prodImagePreview.src = item.image;
        prodImagePreviewWrapper.style.display = 'block';
      } else {
        prodImagePreviewWrapper.style.display = 'none';
      }

      productModal.classList.add('open');
    });
  });

  // Delete Listener
  adminProductsTableBody.querySelectorAll('.delete-prod-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      if (confirm('Are you sure you want to remove this furniture piece from the website catalog?')) {
        currentStore = deleteProduct(id);
        renderProductsTable();
        updateMetrics();
        showToast('Product removed from catalog.', 'info');
      }
    });
  });
}

// ==========================================================================
// 6. Banners & Media Manager
// ==========================================================================
function initBannersManager() {
  renderBannerPreviews();

  // Hero Banner Upload
  chooseHeroBannerBtn?.addEventListener('click', () => heroBannerInput.click());
  heroBannerDropzone?.addEventListener('click', (e) => {
    if (e.target !== chooseHeroBannerBtn && e.target !== resetHeroBannerBtn) {
      heroBannerInput.click();
    }
  });

  heroBannerInput?.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      showToast('Processing showcase banner...', 'info');
      const base64 = await processImageFile(file, 1600, 900, 0.85);
      currentStore = updateBanners({ heroBannerImg: base64 });
      renderBannerPreviews();
      showToast('Hero showcase banner updated!', 'success');
    } catch (err) {
      showToast(err.message || 'Upload failed', 'error');
    }
  });

  resetHeroBannerBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    currentStore = updateBanners({
      heroBannerImg: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80'
    });
    renderBannerPreviews();
    showToast('Reset hero banner to sample image.', 'info');
  });

  // Showroom Photo Upload
  chooseShowroomPhotoBtn?.addEventListener('click', () => showroomPhotoInput.click());
  showroomPhotoDropzone?.addEventListener('click', (e) => {
    if (e.target !== chooseShowroomPhotoBtn && e.target !== resetShowroomPhotoBtn) {
      showroomPhotoInput.click();
    }
  });

  showroomPhotoInput?.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      showToast('Processing showroom photo...', 'info');
      const base64 = await processImageFile(file, 1200, 800, 0.85);
      currentStore = updateBanners({ showroomExterior: base64 });
      renderBannerPreviews();
      showToast('Showroom photograph updated!', 'success');
    } catch (err) {
      showToast(err.message || 'Upload failed', 'error');
    }
  });

  resetShowroomPhotoBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    currentStore = updateBanners({
      showroomExterior: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80'
    });
    renderBannerPreviews();
    showToast('Reset showroom photo.', 'info');
  });

  // Save Headlines & Texts
  saveBannersBtn?.addEventListener('click', () => {
    const heroHeadline = settingHeroHeadline.value.trim();
    const heroSubtitle = settingHeroSubtitle.value.trim();
    currentStore = updateBanners({ heroHeadline, heroSubtitle });
    showToast('Showroom headlines saved & synced live!', 'success');
  });
}

function renderBannerPreviews() {
  const banners = currentStore.banners || {};

  if (banners.heroBannerImg) {
    heroBannerPreviewImg.src = banners.heroBannerImg;
    heroBannerPreviewImg.style.display = 'block';
    heroBannerPlaceholder.style.display = 'none';
  } else {
    heroBannerPreviewImg.style.display = 'none';
    heroBannerPlaceholder.style.display = 'flex';
  }

  if (banners.showroomExterior) {
    showroomPhotoPreviewImg.src = banners.showroomExterior;
    showroomPhotoPreviewImg.style.display = 'block';
    showroomPhotoPlaceholder.style.display = 'none';
  } else {
    showroomPhotoPreviewImg.style.display = 'none';
    showroomPhotoPlaceholder.style.display = 'flex';
  }

  if (settingHeroHeadline && banners.heroHeadline) settingHeroHeadline.value = banners.heroHeadline;
  if (settingHeroSubtitle && banners.heroSubtitle) settingHeroSubtitle.value = banners.heroSubtitle;
}

// ==========================================================================
// 7. Customer Inquiries & Quotes Inbox
// ==========================================================================
function initInquiriesManager() {
  renderInquiriesTable();

  refreshInquiriesBtn?.addEventListener('click', () => {
    currentStore = getStoreData();
    renderInquiriesTable();
    updateMetrics();
    showToast('Inquiries refreshed.', 'info');
  });
}

function renderInquiriesTable() {
  const inquiries = currentStore.inquiries || [];

  if (inquiries.length === 0) {
    adminInquiriesTableBody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; color: var(--text-muted); padding: 30px;">
          No customer inquiries received yet. When visitors fill the quote form on the website, they will appear here.
        </td>
      </tr>
    `;
    return;
  }

  adminInquiriesTableBody.innerHTML = inquiries.map(inq => {
    const rawPhone = inq.phone.replace(/[^0-9]/g, '');
    const cleanPhone = rawPhone.length === 10 ? `91${rawPhone}` : rawPhone;
    const waReplyText = encodeURIComponent(`Hello ${inq.name}, thank you for contacting Ekveera Super Furniture regarding "${inq.requirement}". We are pleased to assist you with a custom 3D design and quotation. When would you like to visit our showroom?`);
    const waUrl = `https://wa.me/${cleanPhone}?text=${waReplyText}`;

    return `
      <tr>
        <td style="font-size: 0.72rem; color: var(--text-muted);">${inq.date}</td>
        <td><strong>${inq.name}</strong></td>
        <td>
          <a href="tel:${inq.phone}" style="color: var(--gold-light); text-decoration: none;">${inq.phone}</a>
        </td>
        <td>
          <div style="font-weight: 600; color: #fff;">${inq.requirement}</div>
          <div style="font-size: 0.7rem; color: var(--text-secondary);">${inq.notes || ''}</div>
        </td>
        <td style="font-family: var(--font-mono); color: var(--emerald-success);">${inq.budget || 'Custom'}</td>
        <td>
          <select class="form-select inq-status-select" data-id="${inq.id}" style="padding: 4px 8px; font-size: 0.72rem; width: 110px;">
            <option value="New" ${inq.status === 'New' ? 'selected' : ''}>New</option>
            <option value="Followed Up" ${inq.status === 'Followed Up' ? 'selected' : ''}>Followed Up</option>
            <option value="Showroom Visit" ${inq.status === 'Showroom Visit' ? 'selected' : ''}>Showroom Visit</option>
            <option value="Closed / Ordered" ${inq.status === 'Closed / Ordered' ? 'selected' : ''}>Closed / Ordered</option>
          </select>
        </td>
        <td style="text-align: right;">
          <a href="${waUrl}" target="_blank" class="table-btn-icon whatsapp" title="Chat on WhatsApp">
            <i class="ti ti-brand-whatsapp"></i>
          </a>
          <button type="button" class="table-btn-icon delete delete-inquiry-btn" data-id="${inq.id}" title="Delete Inquiry">
            <i class="ti ti-trash"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');

  // Status Change Listener
  adminInquiriesTableBody.querySelectorAll('.inq-status-select').forEach(sel => {
    sel.addEventListener('change', (e) => {
      const id = sel.getAttribute('data-id');
      currentStore = updateInquiryStatus(id, e.target.value);
      showToast('Inquiry status updated.', 'info');
    });
  });

  // Delete Listener
  adminInquiriesTableBody.querySelectorAll('.delete-inquiry-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      if (confirm('Delete this customer inquiry record?')) {
        currentStore = deleteInquiry(id);
        renderInquiriesTable();
        updateMetrics();
        showToast('Inquiry deleted.', 'info');
      }
    });
  });
}

// ==========================================================================
// 8. Showroom Profile Settings
// ==========================================================================
function initProfileManager() {
  renderProfileForm();

  saveStoreProfileBtn?.addEventListener('click', () => {
    const name = profileStoreName.value.trim();
    const ownerName = profileOwnerName.value.trim();
    const phone = profilePhone.value.trim();
    const whatsappNumber = profileWhatsapp.value.trim();
    const email = profileEmail.value.trim();
    const workingHours = profileHours.value.trim();
    const address = profileAddress.value.trim();

    if (!name || !phone) {
      showToast('Showroom Name & Phone are required.', 'error');
      return;
    }

    currentStore = updateStoreProfile({
      name,
      ownerName,
      phone,
      whatsappNumber,
      email,
      workingHours,
      address
    });

    if (topNavAppName) topNavAppName.textContent = name;
    showToast('Showroom profile details updated & synced live!', 'success');
  });
}

function renderProfileForm() {
  const profile = currentStore.storeProfile || {};
  if (profileStoreName) profileStoreName.value = profile.name || '';
  if (profileOwnerName) profileOwnerName.value = profile.ownerName || '';
  if (profilePhone) profilePhone.value = profile.phone || '';
  if (profileWhatsapp) profileWhatsapp.value = profile.whatsappNumber || '';
  if (profileEmail) profileEmail.value = profile.email || '';
  if (profileHours) profileHours.value = profile.workingHours || '';
  if (profileAddress) profileAddress.value = profile.address || '';
  if (topNavAppName) topNavAppName.textContent = profile.name || 'Ekveera Super Furniture';
}

// ==========================================================================
// 9. Security & System Backup
// ==========================================================================
function initSecurityAndBackup() {
  // Password Update
  changePasswordForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = settingAdminEmail.value.trim();
    const newPass = settingAdminPass.value.trim();

    currentStore.adminAuth = currentStore.adminAuth || {};
    if (email) currentStore.adminAuth.email = email;
    if (newPass) {
      currentStore.adminAuth.password = newPass;
      showToast('Owner password changed successfully!', 'success');
      settingAdminPass.value = '';
    }
    saveStoreData(currentStore);
    showToast('Credentials saved.', 'success');
  });

  // Export Catalog JSON
  exportBackupBtn?.addEventListener('click', () => {
    const jsonStr = exportFurnitureDataJson();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ekveera_furniture_catalog_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Catalog backup JSON downloaded.', 'success');
  });

  // Import Catalog JSON
  triggerImportBtn?.addEventListener('click', () => importJsonFileInput.click());
  importJsonFileInput?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const success = importFurnitureDataJson(event.target.result);
      if (success) {
        currentStore = getStoreData();
        refreshAllData();
        showToast('Catalog imported & synced successfully!', 'success');
      } else {
        showToast('Failed to import JSON backup.', 'error');
      }
    };
    reader.readAsText(file);
    importJsonFileInput.value = '';
  });

  // Factory Reset
  factoryResetBtn?.addEventListener('click', () => {
    if (confirm('WARNING: This will reset all furniture products, showroom photos, and inquiries back to default factory collection. Continue?')) {
      currentStore = resetFurnitureStoreToDefaults();
      refreshAllData();
      showToast('Catalog restored to default showroom settings.', 'info');
    }
  });
}

// ==========================================================================
// 10. Metrics & Global Refresh
// ==========================================================================
function updateMetrics() {
  const products = currentStore.products || [];
  const inquiries = currentStore.inquiries || [];
  const profile = currentStore.storeProfile || {};

  if (metricTotalProducts) metricTotalProducts.textContent = products.length;
  if (metricTotalInquiries) metricTotalInquiries.textContent = inquiries.length;
  const welcomeOwner = document.getElementById('adminWelcomeOwner');
  if (welcomeOwner && profile.ownerName) {
    welcomeOwner.textContent = profile.ownerName;
  }
}

function refreshAllData() {
  currentStore = getStoreData();
  renderProductsTable();
  renderBannerPreviews();
  renderInquiriesTable();
  renderProfileForm();
  updateMetrics();
}

// ==========================================================================
// 11. Toast Notifications
// ==========================================================================
function showToast(message, type = 'info') {
  const shelf = document.getElementById('toastShelf');
  if (!shelf) return;

  const toast = document.createElement('div');
  toast.className = `admin-toast ${type}`;
  const icon = type === 'success' ? 'ti-circle-check' : type === 'error' ? 'ti-alert-circle' : 'ti-info-circle';
  toast.innerHTML = `<i class="ti ${icon}"></i> <span>${message}</span>`;
  shelf.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ==========================================================================
// 12. Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initAuth();
  initTabs();
  initProductManager();
  initBannersManager();
  initInquiriesManager();
  initProfileManager();
  initSecurityAndBackup();
  updateMetrics();

  overviewRefreshBtn?.addEventListener('click', () => {
    refreshAllData();
    showToast('Data refreshed.', 'info');
  });

  // Listen for storage changes across tabs
  window.addEventListener('storage', () => {
    refreshAllData();
  });
});
}


})();
