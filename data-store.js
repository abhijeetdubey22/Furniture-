/**
 * Ekveera Super Furniture & Interior — Central Data Store & Synchronization Engine
 * Handles persistent catalog, furniture media, customer inquiries, and showroom configurations.
 */

const STORAGE_KEY = 'ekveera_furniture_master_v3';
const LEGACY_STORAGE_KEY = 'ekveera_furniture_master_v2';
const AUTH_KEY = 'ekveera_admin_auth_session';

export const DEFAULT_FURNITURE_DATA = {
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
export function getStoreData() {
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
export function saveStoreData(data) {
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
export function addProduct(newProduct) {
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

export function updateProduct(id, updates) {
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

export function deleteProduct(id) {
  const current = getStoreData();
  current.products = current.products.filter(p => p.id != id);
  saveStoreData(current);
  return current;
}

/**
 * Customer Inquiries Operations
 */
export function addCustomerInquiry(inquiry) {
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

export function updateInquiryStatus(id, newStatus, notes = '') {
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

export function deleteInquiry(id) {
  const current = getStoreData();
  current.inquiries = current.inquiries.filter(i => i.id != id);
  saveStoreData(current);
  return current;
}

/**
 * Showroom Profile & Banners Operations
 */
export function updateStoreProfile(updates) {
  const current = getStoreData();
  current.storeProfile = { ...current.storeProfile, ...updates };
  saveStoreData(current);
  return current;
}

export function updateBanners(updates) {
  const current = getStoreData();
  current.banners = { ...current.banners, ...updates };
  saveStoreData(current);
  return current;
}

/**
 * Backup and Reset
 */
export function resetFurnitureStoreToDefaults() {
  localStorage.removeItem(STORAGE_KEY);
  saveStoreData(DEFAULT_FURNITURE_DATA);
  return JSON.parse(JSON.stringify(DEFAULT_FURNITURE_DATA));
}

export function exportFurnitureDataJson() {
  const data = getStoreData();
  return JSON.stringify(data, null, 2);
}

export function importFurnitureDataJson(jsonStr) {
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
export function checkAdminSession() {
  try {
    return sessionStorage.getItem(AUTH_KEY) === 'authenticated';
  } catch (e) {
    return false;
  }
}

export function setAdminSession(isAuth) {
  try {
    if (isAuth) {
      sessionStorage.setItem(AUTH_KEY, 'authenticated');
    } else {
      sessionStorage.removeItem(AUTH_KEY);
    }
  } catch (e) {}
}

export function verifyAdminCredentials(email, password) {
  const data = getStoreData();
  const auth = data.adminAuth || DEFAULT_FURNITURE_DATA.adminAuth;
  return (
    email.trim().toLowerCase() === auth.email.toLowerCase() &&
    password.trim() === auth.password
  );
}
