import fs from 'node:fs';

// Read data-store.js
let dataStoreCode = fs.readFileSync('./data-store.js', 'utf8');
// Strip export keywords
let cleanDataStore = dataStoreCode.replace(/^export\s+/gm, '');

// Create bundle for main.js
let mainCode = fs.readFileSync('./main.js', 'utf8');
let cleanMainCode = mainCode.replace(/import\s*\{[^}]*\}\s*from\s*['"]\.\/data-store\.js['"];?/, `
const { getStoreData, addCustomerInquiry } = window.EkveeraStore;
`);

const mainBundle = `// Ekveera Furniture Standalone Bundle (Supports file:/// desktop double-click)
(function() {
  if (window.__EKVEERA_MAIN_INITIALIZED__) return;
  window.__EKVEERA_MAIN_INITIALIZED__ = true;

  // Embedded Data Store
  const EkveeraStore = (function() {
    ${cleanDataStore}
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
  ${cleanMainCode}
})();
`;

fs.writeFileSync('./main.bundle.js', mainBundle, 'utf8');
console.log('✓ main.bundle.js created successfully');

// Create bundle for admin.js
let adminCode = fs.readFileSync('./admin.js', 'utf8');
let cleanAdminCode = adminCode.replace(/import\s*\{[^}]*\}\s*from\s*['"]\.\/data-store\.js['"];?/, `
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
`);

const adminBundle = `// Ekveera Furniture Admin Standalone Bundle (Supports file:/// desktop double-click)
(function() {
  if (window.__EKVEERA_ADMIN_INITIALIZED__) return;
  window.__EKVEERA_ADMIN_INITIALIZED__ = true;

  // Embedded Data Store
  const EkveeraStore = (function() {
    ${cleanDataStore}
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
  ${cleanAdminCode}
})();
`;

fs.writeFileSync('./admin.bundle.js', adminBundle, 'utf8');
console.log('✓ admin.bundle.js created successfully');
