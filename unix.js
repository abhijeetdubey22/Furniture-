/**
 * UNIX Atelier — Haute Ébénisterie & Architecture
 * Interactive Client Experience Engine
 * Features:
 *  - 3D Canvas Orbit Visualizer (Multi-Model, Physically-Accurate Depth Sorting, Real-Time Directional Lighting)
 *  - Curated Masterpieces Catalog with Category Filters & Card Quick-Inspection
 *  - Tactile Material Lab with Sample Ordering
 *  - Space Investment & Architectural Estimator (Keyboard-Accessible, Add-to-Dossier Integration)
 *  - Slide-Over Client Dossier Drawer (Quantity Adjusters, WhatsApp VIP Concierge, Printable Specification Monograph)
 *  - Responsive Mobile Navigation Drawer
 *  - Private Appointment Scheduler with Date Guards & Session Storage
 *  - Nocturne Dark / Studio Light Atmosphere Modes
 */

// ==========================================================================
// 1. Master Data: Collections, Materials, 3D Models & Showrooms
// ==========================================================================
const UNIX_DATA = {
  curations: [
    {
      id: 'kyoto-monolith',
      category: 'seating',
      name: 'The Kyoto Monolith Lounger',
      subtitle: 'Sculptural Armchair with Ottoman',
      material: 'Smoked American Walnut, Bouclé Crème, Cast Champagne Bronze',
      dimensions: 'W 98cm × D 92cm × H 78cm (Seat H 41cm)',
      craftHours: '86 Hours Hand-Crafted',
      price: 248500,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80',
      description: 'Sculpted from a single block of kiln-dried Appalachian black walnut. Features organic cantilevered armrests, dual-density natural latex cushioning, and zero visible mechanical fasteners.'
    },
    {
      id: 'aethel-dining',
      category: 'tables',
      name: 'The Aethel Monolithic Dining Table',
      subtitle: 'Fluted Pedestal Oval Stone Table',
      material: 'Honed Roman Navona Travertine & Brushed Brass Spine',
      dimensions: 'L 280cm × W 115cm × H 75cm (Seats 10-12)',
      craftHours: '140 Hours Stonework',
      price: 580000,
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80',
      description: 'Quarried from the historic Roman foothills of Tivoli. Hand-chiseled fluted dual pedestals supporting an undulating 45mm honed travertine slab treated with invisible organic oleophobic sealant.'
    },
    {
      id: 'sylvan-sectional',
      category: 'seating',
      name: 'The Sylvan Architectural Sectional',
      subtitle: 'Modular Low-Slung Landscape Sofa',
      material: 'Solid Ash Frame, Washed Belgian Linen, Goose Down Layer',
      dimensions: 'L 360cm × D 110cm × H 68cm (Custom Modular)',
      craftHours: '115 Hours Atelier Craft',
      price: 690000,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80',
      description: 'Low-profile architectural lounging grounded in minimalist Japanese proportions. Configurable modules with integrated smoked oak side plinths and wireless charging inserts.'
    },
    {
      id: 'nocturne-bed',
      category: 'sanctuary',
      name: 'The Nocturne Cantilever Platform Bed',
      subtitle: 'Floating King Suite with Integrated Lighting',
      material: 'American Walnut, Full-Grain Tuscan Saddle Leather, Warm 2700K LED',
      dimensions: 'W 220cm × L 235cm × H 92cm (King Size)',
      craftHours: '98 Hours Woodworking',
      price: 445000,
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
      description: 'Engineered with hidden steel-reinforced cantilevers to impart an illusion of weightlessness. Hand-stitched saddle leather headboard wings with touch-dimming ambient brass lighting.'
    },
    {
      id: 'solstice-credenza',
      category: 'architectural',
      name: 'The Solstice Ribbed Tambour Credenza',
      subtitle: 'Four-Door Architectural Sideboard',
      material: 'Smoked Oak Tambour, Nero Marquina Marble Top, Brass Accents',
      dimensions: 'W 210cm × D 50cm × H 76cm',
      craftHours: '105 Hours Joinery',
      price: 385000,
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80',
      description: 'Features curved sliding tambour doors crafted from individual 12mm fluted oak battens. Interior fitted with velvet-lined audio drawers, cable routing, and acoustic fabric back panels.'
    },
    {
      id: 'vesper-lounger',
      category: 'seating',
      name: 'The Vesper Bentwood High-Back Chair',
      subtitle: 'Ergonomic Collector Reading Lounger',
      material: 'Molded French Walnut Veneer, Cognac Aniline Leather',
      dimensions: 'W 84cm × D 88cm × H 104cm',
      craftHours: '72 Hours Hand Finishing',
      price: 215000,
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80',
      description: 'A study in organic ergonomics. The double-curved timber shell cradles the spinal lumbar while maintaining a razor-thin silhouette inspired by mid-century Danish and Milanese modernism.'
    },
    {
      id: 'basalt-coffee-table',
      category: 'tables',
      name: 'The Basalt & Cast-Bronze Cocktail Table',
      subtitle: 'Sculptural Organic Centerpiece',
      material: 'Lost-Wax Cast Bronze Top, Chiseled Basalt Monolith Bases',
      dimensions: 'L 155cm × W 95cm × H 36cm',
      craftHours: '90 Hours Metal & Stone',
      price: 320000,
      image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=80',
      description: 'Lost-wax bronze pour with hand-patinated fire finish that reveals golden undertones under evening light. Rested upon twin volcanic basalt blocks split by hand with traditional wedges.'
    },
    {
      id: 'archetype-library',
      category: 'architectural',
      name: 'The Archetype Modular Wall Library',
      subtitle: 'Ceiling-Height Vitrine & Shelving System',
      material: 'Smoked Ash, Fluted Flou Glass, Micro-LED Channels, Champagne Brass',
      dimensions: 'W 320cm × H 280cm × D 42cm (Bespoke Sizing)',
      craftHours: '160 Hours Master Joinery',
      price: 980000,
      image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1000&q=80',
      description: 'Bespoke ceiling-anchored architectural millwork system. Features integrated concealed sliding ladders, climate-controlled collector vitrines, and custom flush-mount downlight channels.'
    }
  ],

  swatches: [
    { id: 'boucle', name: 'Bouclé Ivoire', color: '#EBE7DF', extraPrice: 0, previewShade: '#D8D2C5', type: 'fabric' },
    { id: 'leather', name: 'Tuscan Saddle Leather', color: '#8B4513', extraPrice: 28500, previewShade: '#5E2E0D', type: 'leather' },
    { id: 'walnut', name: 'Smoked American Walnut', color: '#3A271D', extraPrice: 18000, previewShade: '#241812', type: 'wood' },
    { id: 'white-oak', name: 'Nordic Bleached Oak', color: '#D8CBB5', extraPrice: 14500, previewShade: '#B8A890', type: 'wood' },
    { id: 'emerald', name: 'Imperial Emerald Velvet', color: '#1B382B', extraPrice: 22000, previewShade: '#10221A', type: 'fabric' },
    { id: 'travertine', name: 'Roman Travertine Stone', color: '#D9D0C1', extraPrice: 35000, previewShade: '#BDB19E', type: 'stone' },
    { id: 'charcoal', name: 'Carbon Smoked Ash', color: '#2A2A2A', extraPrice: 16500, previewShade: '#181818', type: 'wood' },
    { id: 'viola', name: 'Calacatta Viola Marble', color: '#6A4B54', extraPrice: 52000, previewShade: '#4A333A', type: 'stone' }
  ],

  models: {
    kyoto: {
      id: 'kyoto',
      name: 'The Kyoto Monolith',
      badge: 'Edition No. 01 • Master Sculptor Series',
      tagline: 'Curved timber spine with seamless mortise-and-tenon architecture. Double-curved ergonomic shell with hand-turned champagne bronze ferrules.',
      joinery: 'Concealed Japanese Mortise & Tenon',
      dimensions: 'W 98cm × D 92cm × H 78cm',
      leadTime: '6–8 Weeks Handcrafted',
      basePrice: 248500,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80',
      hotspots: [
        { x: 0, y: -70, z: -35, label: 'Hand-Carved Walnut Spine' },
        { x: 0, y: 20, z: 25, label: 'Dual-Density Cashmere Cushion' },
        { x: 80, y: 105, z: 55, label: 'Solid Champagne Bronze Ferrule' }
      ]
    },
    aethel: {
      id: 'aethel',
      name: 'The Aethel Monolith Table',
      badge: 'Edition No. 02 • Roman Monolith Series',
      tagline: 'Undulating 45mm natural stone slab supported by hand-chiseled fluted pedestals. Treated with an invisible oleophobic shield.',
      joinery: 'Internal Chiseled Stone Spline & Brass Tie',
      dimensions: 'L 280cm × W 115cm × H 75cm',
      leadTime: '8–10 Weeks Handcrafted',
      basePrice: 580000,
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=600&q=80',
      hotspots: [
        { x: 0, y: -45, z: 0, label: '45mm Honed Natural Stone Slab' },
        { x: -75, y: 35, z: 0, label: 'Fluted Architectural Pedestal' },
        { x: 0, y: -10, z: 0, label: 'Concealed Brushed Brass Beam' }
      ]
    },
    solstice: {
      id: 'solstice',
      name: 'The Solstice Tambour Credenza',
      badge: 'Edition No. 03 • Architectural Joinery Series',
      tagline: 'Sliding tambour doors composed of individually hand-milled 12mm oak flutes, crowned with a monolithic natural marble top.',
      joinery: 'Sliding Wooden Tambour Track & Mitred Plinth',
      dimensions: 'W 210cm × D 50cm × H 76cm',
      leadTime: '6–8 Weeks Handcrafted',
      basePrice: 385000,
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80',
      hotspots: [
        { x: 0, y: -50, z: 0, label: 'Beveled Natural Stone Plinth Top' },
        { x: 0, y: 0, z: 45, label: '12mm Hand-Milled Oak Tambour Slats' },
        { x: -90, y: 65, z: 0, label: 'Recessed Architectural Plinth Foot' }
      ]
    }
  }
};

// ==========================================================================
// 2. Client Dossier & Cart State Management
// ==========================================================================
class DossierManager {
  constructor() {
    this.storageKey = 'unix_atelier_dossier_v2';
    this.items = this.load();
    this.initListeners();
    this.render();
  }

  load() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  save() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.items));
    } catch (e) {
      console.warn('Storage failed', e);
    }
    this.render();
  }

  addItem(item) {
    const existingIndex = this.items.findIndex(i => i.id === item.id && i.material === item.material);
    if (existingIndex > -1) {
      this.items[existingIndex].qty = (this.items[existingIndex].qty || 1) + 1;
    } else {
      this.items.push({ ...item, qty: 1 });
    }
    this.save();
    showToast(`Added "${item.name}" to Private Dossier`);
  }

  incrementQty(index) {
    if (this.items[index]) {
      this.items[index].qty = (this.items[index].qty || 1) + 1;
      this.save();
    }
  }

  decrementQty(index) {
    if (this.items[index]) {
      if ((this.items[index].qty || 1) > 1) {
        this.items[index].qty -= 1;
      } else {
        this.items.splice(index, 1);
        showToast('Piece removed from Dossier');
      }
      this.save();
    }
  }

  removeItem(index) {
    if (this.items[index]) {
      this.items.splice(index, 1);
      this.save();
      showToast('Piece removed from Dossier');
    }
  }

  clear() {
    this.items = [];
    this.save();
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + (item.price * (item.qty || 1)), 0);
  }

  hasItem(id) {
    return this.items.some(i => i.id === id);
  }

  generatePrintableDossier() {
    const printContainer = document.getElementById('printableDossierDoc');
    if (!printContainer) return;

    const today = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    const refCode = 'UNIX-DOSSIER-' + Math.floor(100000 + Math.random() * 900000);

    printContainer.innerHTML = `
      <div class="print-header">
        <div>
          <div class="print-brand-title">UNIX</div>
          <div class="print-brand-subtitle">Haute Ébénisterie & Architecture • Milan • New York • London</div>
        </div>
        <div class="print-meta-block">
          <div><strong>Commission Dossier Ref:</strong> ${refCode}</div>
          <div><strong>Date:</strong> ${today}</div>
          <div><strong>Flagship Atelier:</strong> Suite 101, Luxury Design Boulevard, Mumbai • Milan • New Delhi</div>
          <div><strong>Concierge Direct:</strong> concierge@unixatelier.com • +91 98765 43210</div>
        </div>
      </div>

      <div class="print-section-title">Curated Commission Specification Monograph</div>

      <table class="print-items-table">
        <thead>
          <tr>
            <th style="width: 35%;">Piece / Architectural Scope</th>
            <th style="width: 35%;">Material Finish & Provenance</th>
            <th style="width: 15%;">Dimensions</th>
            <th style="width: 5%; text-align: center;">Qty</th>
            <th style="width: 10%; text-align: right;">Investment</th>
          </tr>
        </thead>
        <tbody>
          ${this.items.map(item => `
            <tr>
              <td><strong>${item.name}</strong></td>
              <td>${item.material}</td>
              <td>${item.dimensions || 'Bespoke Sizing'}</td>
              <td style="text-align: center;">${item.qty || 1}</td>
              <td style="text-align: right;">₹${(item.price * (item.qty || 1)).toLocaleString('en-IN')}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <div class="print-total-row">
        <span>Projected Atelier Investment (GST & White-Glove Installation Included):</span>
        <span class="print-total-figure">₹${this.getTotal().toLocaleString('en-IN')}</span>
      </div>

      <div class="print-footer-terms">
        <p><strong>Commission Terms & Heirloom Ethics:</strong> All timbers are harvested from certified regenerative forests and seasoned in solar kilns for eighteen months to a strict 7% moisture equilibrium. Monolithic stone is hand-honed in Tivoli, Italy with organic oleophobic sealants. Every commission is covered by our lifetime heirloom structural warranty.</p>
        <div style="margin-top: 2rem; display: flex; justify-content: space-between; border-top: 1px dashed #CCCCCC; padding-top: 1rem;">
          <span>Client Representative Signature: ___________________________</span>
          <span>Master Ébéniste Sign-off: UNIX Atelier</span>
        </div>
      </div>
    `;
  }

  render() {
    const counterBadge = document.getElementById('dossierCountBadge');
    if (counterBadge) {
      const totalCount = this.items.reduce((sum, item) => sum + (item.qty || 1), 0);
      counterBadge.textContent = totalCount;
      counterBadge.style.display = totalCount > 0 ? 'flex' : 'none';
    }

    const listContainer = document.getElementById('dossierItemsContainer');
    const totalAmountEl = document.getElementById('dossierTotalAmount');

    if (!listContainer) return;

    if (this.items.length === 0) {
      listContainer.innerHTML = `
        <div style="text-align: center; padding: 4rem 1.5rem; color: var(--text-muted);">
          <svg style="width: 48px; height: 48px; margin: 0 auto 1rem; color: var(--border-gold);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
          </svg>
          <p style="font-family: var(--font-serif); font-size: 1.3rem; color: var(--text-primary); margin-bottom: 0.5rem;">Your Dossier is Empty</p>
          <p style="font-size: 0.82rem; line-height: 1.6;">Configure your bespoke piece in the 3D Studio, explore curations, or plan a room investment to build your private dossier.</p>
        </div>
      `;
      if (totalAmountEl) totalAmountEl.textContent = '₹0';
      return;
    }

    listContainer.innerHTML = this.items.map((item, idx) => `
      <div class="dossier-item-card">
        <img class="dossier-item-thumb" src="${item.image}" alt="${item.name}" loading="lazy" />
        <div class="dossier-item-meta">
          <div class="dossier-item-name">${item.name}</div>
          <div class="dossier-item-spec">${item.material}</div>
          <div class="dossier-item-bottom">
            <div class="dossier-item-price">₹${(item.price * (item.qty || 1)).toLocaleString('en-IN')}</div>
            <div class="dossier-qty-controls">
              <button class="qty-btn" data-qty-dec="${idx}" aria-label="Decrease quantity">−</button>
              <span class="qty-val">${item.qty || 1}</span>
              <button class="qty-btn" data-qty-inc="${idx}" aria-label="Increase quantity">+</button>
            </div>
          </div>
        </div>
        <button class="dossier-item-remove" data-remove-index="${idx}" aria-label="Remove item" title="Remove piece">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    `).join('');

    if (totalAmountEl) {
      totalAmountEl.textContent = `₹${this.getTotal().toLocaleString('en-IN')}`;
    }

    // Sync wishlist buttons in catalog
    document.querySelectorAll('[data-wishlist-id]').forEach(btn => {
      const id = btn.getAttribute('data-wishlist-id');
      if (this.hasItem(id)) {
        btn.classList.add('active');
        btn.setAttribute('title', 'Saved in Dossier');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('title', 'Save to Dossier');
      }
    });
  }

  initListeners() {
    const listContainer = document.getElementById('dossierItemsContainer');
    if (listContainer) {
      listContainer.addEventListener('click', (e) => {
        // Remove button
        const removeBtn = e.target.closest('[data-remove-index]');
        if (removeBtn) {
          const idx = parseInt(removeBtn.getAttribute('data-remove-index'), 10);
          this.removeItem(idx);
          return;
        }

        // Increase quantity
        const incBtn = e.target.closest('[data-qty-inc]');
        if (incBtn) {
          const idx = parseInt(incBtn.getAttribute('data-qty-inc'), 10);
          this.incrementQty(idx);
          return;
        }

        // Decrease quantity
        const decBtn = e.target.closest('[data-qty-dec]');
        if (decBtn) {
          const idx = parseInt(decBtn.getAttribute('data-qty-dec'), 10);
          this.decrementQty(idx);
          return;
        }
      });
    }

    // WhatsApp Concierge integration
    const whatsappBtn = document.getElementById('dossierWhatsappBtn');
    if (whatsappBtn) {
      whatsappBtn.addEventListener('click', () => {
        if (this.items.length === 0) {
          showToast('Please add pieces to your dossier first');
          return;
        }
        let msg = `Greetings UNIX Atelier VIP Concierge,%0A%0AI would like to review my curated commission dossier:%0A`;
        this.items.forEach((item, idx) => {
          const qty = item.qty || 1;
          const subtotal = item.price * qty;
          msg += `%0A${idx + 1}. *${item.name}*`;
          if (qty > 1) msg += ` (${qty}×)`;
          msg += `%0A   Finish: ${item.material}%0A   Estimate: ₹${subtotal.toLocaleString('en-IN')}%0A`;
        });
        msg += `%0A*Total Projected Investment:* ₹${this.getTotal().toLocaleString('en-IN')}%0A%0APlease advise on fabrication schedule, lead times, and private viewing availability.`;
        window.open(`https://wa.me/919876543210?text=${msg}`, '_blank');
      });
    }

    // Export PDF / Specification Print
    const exportBtn = document.getElementById('dossierExportBtn');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        if (this.items.length === 0) {
          showToast('Please add items to your dossier before exporting');
          return;
        }
        this.generatePrintableDossier();
        window.print();
      });
    }
  }
}

// Global Dossier instance
let dossier;

// ==========================================================================
// 3. Procedural 3D Canvas Visualizer (Multi-Model, Depth Sorting, True Lighting)
// ==========================================================================
class FurnitureStudio3D {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');

    // 3D Orbit State
    this.rotX = 0.32; // Pitch
    this.rotY = -0.65; // Yaw
    this.zoom = 1.0;
    this.targetZoom = 1.0;
    this.isDragging = false;
    this.lastMouseX = 0;
    this.lastMouseY = 0;
    this.velX = 0;
    this.velY = 0;

    // Touch pinch state
    this.initialPinchDist = null;

    // Active Model & Materials
    this.activeModelKey = 'kyoto';
    this.currentSwatch = UNIX_DATA.swatches[0];
    this.lightingMode = 'morning'; // 'morning', 'dusk', 'gallery'

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());

    // Mouse Drag Orbit
    this.canvas.addEventListener('mousedown', (e) => {
      this.isDragging = true;
      this.lastMouseX = e.clientX;
      this.lastMouseY = e.clientY;
      this.velX = 0;
      this.velY = 0;
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;
      const dx = e.clientX - this.lastMouseX;
      const dy = e.clientY - this.lastMouseY;
      this.velY = dx * 0.0055;
      this.velX = dy * 0.0055;
      this.rotY += this.velY;
      this.rotX += this.velX;
      // Clamp pitch to prevent gimbal flipping
      this.rotX = Math.max(-0.6, Math.min(0.8, this.rotX));
      this.lastMouseX = e.clientX;
      this.lastMouseY = e.clientY;
    });

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    // Touch Support (Single-touch rotate + Pinch-to-zoom)
    this.canvas.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        this.isDragging = true;
        this.lastMouseX = e.touches[0].clientX;
        this.lastMouseY = e.touches[0].clientY;
        this.initialPinchDist = null;
      } else if (e.touches.length === 2) {
        this.isDragging = false;
        this.initialPinchDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
      }
    }, { passive: false });

    this.canvas.addEventListener('touchmove', (e) => {
      e.preventDefault(); // Prevent page scroll during canvas interaction
      if (e.touches.length === 1 && this.isDragging) {
        const dx = e.touches[0].clientX - this.lastMouseX;
        const dy = e.touches[0].clientY - this.lastMouseY;
        this.rotY += dx * 0.007;
        this.rotX += dy * 0.007;
        this.rotX = Math.max(-0.6, Math.min(0.8, this.rotX));
        this.lastMouseX = e.touches[0].clientX;
        this.lastMouseY = e.touches[0].clientY;
      } else if (e.touches.length === 2 && this.initialPinchDist) {
        const currentDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        const diff = (currentDist - this.initialPinchDist) * 0.005;
        this.targetZoom = Math.max(0.65, Math.min(1.4, this.targetZoom + diff));
        this.initialPinchDist = currentDist;
      }
    }, { passive: false });

    window.addEventListener('touchend', () => {
      this.isDragging = false;
      this.initialPinchDist = null;
    });

    // Wheel Zoom
    this.canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      this.targetZoom -= e.deltaY * 0.001;
      this.targetZoom = Math.max(0.65, Math.min(1.45, this.targetZoom));
    }, { passive: false });

    // Swatches UI
    this.renderSwatches();

    // Model Selector Tabs
    const pieceTabs = document.querySelectorAll('.piece-tab');
    pieceTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        pieceTabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        const modelKey = tab.getAttribute('data-model');
        this.setModel(modelKey);
      });
    });

    // Lighting Controls
    const lightingBtns = document.querySelectorAll('.lighting-btn');
    lightingBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        lightingBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.lightingMode = btn.getAttribute('data-light');
      });
    });

    // Add to Dossier button from 3D studio
    const addDossierBtn = document.getElementById('addConfiguredToDossierBtn');
    if (addDossierBtn) {
      addDossierBtn.addEventListener('click', () => {
        const model = UNIX_DATA.models[this.activeModelKey];
        dossier.addItem({
          id: `custom-${model.id}-${this.currentSwatch.id}`,
          name: `${model.name} (Bespoke Spec)`,
          material: `${this.currentSwatch.name} • ${model.joinery}`,
          dimensions: model.dimensions,
          price: model.basePrice + this.currentSwatch.extraPrice,
          image: model.image
        });
      });
    }

    // Start Animation Loop
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  setModel(modelKey) {
    if (!UNIX_DATA.models[modelKey]) return;
    this.activeModelKey = modelKey;
    const model = UNIX_DATA.models[modelKey];

    // Update DOM specs
    const nameEl = document.getElementById('studioPieceName');
    const badgeEl = document.getElementById('studioPieceBadge');
    const taglineEl = document.getElementById('studioPieceTagline');
    const joineryEl = document.getElementById('studioSpecJoinery');
    const dimensionsEl = document.getElementById('studioSpecDimensions');
    const leadTimeEl = document.getElementById('studioSpecLeadTime');

    if (nameEl) nameEl.textContent = model.name;
    if (badgeEl) badgeEl.textContent = model.badge;
    if (taglineEl) taglineEl.textContent = model.tagline;
    if (joineryEl) joineryEl.textContent = model.joinery;
    if (dimensionsEl) dimensionsEl.textContent = model.dimensions;
    if (leadTimeEl) leadTimeEl.textContent = model.leadTime;

    this.updatePriceDisplay();
  }

  updatePriceDisplay() {
    const model = UNIX_DATA.models[this.activeModelKey];
    const priceEl = document.getElementById('studioConfiguredPrice');
    if (priceEl && model) {
      const total = model.basePrice + this.currentSwatch.extraPrice;
      priceEl.textContent = `₹${total.toLocaleString('en-IN')}`;
    }
  }

  resize() {
    const rect = this.canvas.getBoundingClientRect();
    const parentRect = this.canvas.parentElement ? this.canvas.parentElement.getBoundingClientRect() : { width: 600, height: 500 };
    this.width = Math.max(300, rect.width || parentRect.width || 600);
    this.height = Math.max(300, rect.height || (parentRect.height - 65) || 480);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = Math.round(this.width * dpr);
    this.canvas.height = Math.round(this.height * dpr);
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  renderSwatches() {
    const swatchesContainer = document.getElementById('materialSwatchesGrid');
    if (!swatchesContainer) return;

    swatchesContainer.innerHTML = UNIX_DATA.swatches.slice(0, 8).map((swatch, idx) => `
      <button class="swatch-btn ${idx === 0 ? 'active' : ''}" data-swatch-id="${swatch.id}" aria-label="Select ${swatch.name}" aria-pressed="${idx === 0}">
        <span class="swatch-circle" style="background-color: ${swatch.color};"></span>
        <span class="swatch-title">${swatch.name}</span>
      </button>
    `).join('');

    swatchesContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.swatch-btn');
      if (!btn) return;
      const sId = btn.getAttribute('data-swatch-id');
      const found = UNIX_DATA.swatches.find(s => s.id === sId);
      if (found) {
        swatchesContainer.querySelectorAll('.swatch-btn').forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        this.currentSwatch = found;

        const nameEl = document.getElementById('selectedMaterialName');
        if (nameEl) nameEl.textContent = found.name;
        this.updatePriceDisplay();
      }
    });
  }

  project(p) {
    // 3D Rotation matrices
    const cosY = Math.cos(this.rotY);
    const sinY = Math.sin(this.rotY);
    const cosX = Math.cos(this.rotX);
    const sinX = Math.sin(this.rotX);

    // Rotate Y (Yaw)
    const x1 = p.x * cosY + p.z * sinY;
    const y1 = p.y;
    const z1 = -p.x * sinY + p.z * cosY;

    // Rotate X (Pitch)
    const x2 = x1;
    const y2 = y1 * cosX - z1 * sinX;
    const z2 = y1 * sinX + z1 * cosX;

    // Perspective projection
    const distance = 460;
    const fov = distance / (distance + z2 * 0.75);
    const scale = fov * this.zoom;

    return {
      x: this.width / 2 + x2 * scale,
      y: this.height / 2 + y2 * scale,
      scale: scale,
      z: z2,
      modelX: x2,
      modelY: y2
    };
  }

  animate() {
    // Inertia decay
    if (!this.isDragging) {
      this.rotY += this.velY;
      this.rotX += this.velX;
      this.velX *= 0.92;
      this.velY *= 0.92;
      // Gentle auto-rotation
      if (Math.abs(this.velY) < 0.0005) {
        this.rotY += 0.002;
      }
    }

    // Zoom interpolation
    this.zoom += (this.targetZoom - this.zoom) * 0.1;

    this.render();
    requestAnimationFrame(this.animate);
  }

  getPartsForActiveModel() {
    const swatchColor = this.currentSwatch.color;
    const previewShade = this.currentSwatch.previewShade;

    if (this.activeModelKey === 'aethel') {
      // 1. Monolithic Travertine Dining Table Model
      return [
        // Oval Stone Slab Top (multi-segment polygon)
        {
          poly: [
            { x: -130, y: -45, z: 0 },
            { x: -100, y: -45, z: 45 },
            { x: 0, y: -45, z: 65 },
            { x: 100, y: -45, z: 45 },
            { x: 130, y: -45, z: 0 },
            { x: 100, y: -45, z: -45 },
            { x: 0, y: -45, z: -65 },
            { x: -100, y: -45, z: -45 }
          ],
          fill: swatchColor,
          stroke: previewShade
        },
        // Stone Table Rim Apron
        {
          poly: [
            { x: -130, y: -30, z: 0 },
            { x: -100, y: -30, z: 45 },
            { x: 0, y: -30, z: 65 },
            { x: 100, y: -30, z: 45 },
            { x: 130, y: -30, z: 0 },
            { x: 100, y: -45, z: 45 },
            { x: 0, y: -45, z: 65 },
            { x: -100, y: -45, z: 45 }
          ],
          fill: previewShade,
          stroke: swatchColor
        },
        // Central Brass Under-Spine Beam
        {
          line: [{ x: -90, y: -20, z: 0 }, { x: 90, y: -20, z: 0 }],
          stroke: '#C5A880',
          width: 10
        },
        // Left Fluted Architectural Pedestal Column
        {
          poly: [
            { x: -80, y: -30, z: -25 },
            { x: -50, y: -30, z: -25 },
            { x: -50, y: 70, z: -25 },
            { x: -80, y: 70, z: -25 }
          ],
          fill: previewShade,
          stroke: swatchColor
        },
        {
          poly: [
            { x: -80, y: -30, z: 25 },
            { x: -50, y: -30, z: 25 },
            { x: -50, y: 70, z: 25 },
            { x: -80, y: 70, z: 25 }
          ],
          fill: swatchColor,
          stroke: previewShade
        },
        // Right Fluted Architectural Pedestal Column
        {
          poly: [
            { x: 50, y: -30, z: -25 },
            { x: 80, y: -30, z: -25 },
            { x: 80, y: 70, z: -25 },
            { x: 50, y: 70, z: -25 }
          ],
          fill: previewShade,
          stroke: swatchColor
        },
        {
          poly: [
            { x: 50, y: -30, z: 25 },
            { x: 80, y: -30, z: 25 },
            { x: 80, y: 70, z: 25 },
            { x: 50, y: 70, z: 25 }
          ],
          fill: swatchColor,
          stroke: previewShade
        }
      ];
    } else if (this.activeModelKey === 'solstice') {
      // 2. Ribbed Tambour Credenza Model
      return [
        // Marble Top Surface
        {
          poly: [
            { x: -120, y: -50, z: -35 },
            { x: 120, y: -50, z: -35 },
            { x: 120, y: -50, z: 35 },
            { x: -120, y: -50, z: 35 }
          ],
          fill: swatchColor,
          stroke: previewShade
        },
        // Front Fluted Tambour Facade
        {
          poly: [
            { x: -115, y: -50, z: 35 },
            { x: 115, y: -50, z: 35 },
            { x: 115, y: 45, z: 35 },
            { x: -115, y: 45, z: 35 }
          ],
          fill: previewShade,
          stroke: swatchColor
        },
        // Right Curved Tambour Flute
        {
          poly: [
            { x: 115, y: -50, z: 35 },
            { x: 125, y: -50, z: 0 },
            { x: 125, y: 45, z: 0 },
            { x: 115, y: 45, z: 35 }
          ],
          fill: '#241B15',
          stroke: '#3D2D23'
        },
        // Left Curved Tambour Flute
        {
          poly: [
            { x: -115, y: -50, z: 35 },
            { x: -125, y: -50, z: 0 },
            { x: -125, y: 45, z: 0 },
            { x: -115, y: 45, z: 35 }
          ],
          fill: '#241B15',
          stroke: '#3D2D23'
        },
        // Recessed Architectural Plinth Legs
        {
          line: [{ x: -95, y: 45, z: 20 }, { x: -95, y: 75, z: 20 }],
          stroke: '#C5A880',
          width: 8
        },
        {
          line: [{ x: 95, y: 45, z: 20 }, { x: 95, y: 75, z: 20 }],
          stroke: '#C5A880',
          width: 8
        },
        {
          line: [{ x: -95, y: 45, z: -20 }, { x: -95, y: 75, z: -20 }],
          stroke: '#9E825C',
          width: 8
        },
        {
          line: [{ x: 95, y: 45, z: -20 }, { x: 95, y: 75, z: -20 }],
          stroke: '#9E825C',
          width: 8
        }
      ];
    } else {
      // 3. The Kyoto Monolith Lounger Model (Default)
      return [
        // Backrest Frame Shell
        {
          poly: [
            { x: -75, y: -90, z: -40 },
            { x: 75, y: -90, z: -40 },
            { x: 85, y: 10, z: -10 },
            { x: -85, y: 10, z: -10 }
          ],
          fill: swatchColor,
          stroke: previewShade
        },
        // Deep Cushion Seat Block
        {
          poly: [
            { x: -85, y: 10, z: -10 },
            { x: 85, y: 10, z: -10 },
            { x: 95, y: 35, z: 70 },
            { x: -95, y: 35, z: 70 }
          ],
          fill: previewShade,
          stroke: swatchColor
        },
        // Seat Front Apron
        {
          poly: [
            { x: -95, y: 35, z: 70 },
            { x: 95, y: 35, z: 70 },
            { x: 90, y: 65, z: 65 },
            { x: -90, y: 65, z: 65 }
          ],
          fill: swatchColor,
          stroke: previewShade
        },
        // Left Architectural Armrest
        {
          poly: [
            { x: -95, y: -40, z: -25 },
            { x: -75, y: -45, z: -25 },
            { x: -85, y: 15, z: 75 },
            { x: -105, y: 15, z: 70 }
          ],
          fill: '#2A1C14',
          stroke: '#4A3426'
        },
        // Right Architectural Armrest
        {
          poly: [
            { x: 75, y: -45, z: -25 },
            { x: 95, y: -40, z: -25 },
            { x: 105, y: 15, z: 70 },
            { x: 85, y: 15, z: 75 }
          ],
          fill: '#2A1C14',
          stroke: '#4A3426'
        },
        // Solid Turned Champagne Bronze Legs
        {
          line: [{ x: -75, y: 65, z: 50 }, { x: -85, y: 110, z: 60 }],
          stroke: '#C5A880',
          width: 8
        },
        {
          line: [{ x: 75, y: 65, z: 50 }, { x: 85, y: 110, z: 60 }],
          stroke: '#C5A880',
          width: 8
        },
        {
          line: [{ x: -65, y: 55, z: -30 }, { x: -75, y: 105, z: -40 }],
          stroke: '#9E825C',
          width: 7
        },
        {
          line: [{ x: 65, y: 55, z: -30 }, { x: 75, y: 105, z: -40 }],
          stroke: '#9E825C',
          width: 7
        }
      ];
    }
  }

  render() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    // Light setups & Stage Atmosphere
    let shadowColor = 'rgba(18, 16, 14, 0.2)';
    let highlightGold = 'rgba(197, 168, 128, 0.45)';
    let lightDir = { x: -0.4, y: -0.8, z: 0.4 };

    if (this.lightingMode === 'dusk') {
      shadowColor = 'rgba(70, 25, 10, 0.32)';
      highlightGold = 'rgba(235, 145, 65, 0.6)';
      lightDir = { x: -0.7, y: -0.3, z: 0.6 };
    } else if (this.lightingMode === 'gallery') {
      shadowColor = 'rgba(0, 0, 0, 0.45)';
      highlightGold = 'rgba(255, 255, 255, 0.65)';
      lightDir = { x: 0.0, y: -1.0, z: 0.2 };
    }

    // Ground Shadow Pedestal
    const groundCenter = this.project({ x: 0, y: 105, z: 0 });
    ctx.save();
    ctx.beginPath();
    ctx.ellipse(groundCenter.x, groundCenter.y, 175 * groundCenter.scale, 80 * groundCenter.scale, 0, 0, Math.PI * 2);
    const shadowGrad = ctx.createRadialGradient(
      groundCenter.x, groundCenter.y, 10,
      groundCenter.x, groundCenter.y, 175 * groundCenter.scale
    );
    shadowGrad.addColorStop(0, shadowColor);
    shadowGrad.addColorStop(0.5, 'rgba(0, 0, 0, 0.06)');
    shadowGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = shadowGrad;
    ctx.fill();
    ctx.restore();

    // Get Active Model Geometry
    const parts = this.getPartsForActiveModel();

    // Transform all vertices to Camera Space FIRST for true 3D Painter's sorting
    const renderQueue = parts.map(part => {
      if (part.poly) {
        const projectedPts = part.poly.map(pt => this.project(pt));
        const avgZ = projectedPts.reduce((sum, pt) => sum + pt.z, 0) / projectedPts.length;
        return { ...part, projectedPts, avgZ };
      } else if (part.line) {
        const p1 = this.project(part.line[0]);
        const p2 = this.project(part.line[1]);
        const avgZ = (p1.z + p2.z) / 2;
        return { ...part, p1, p2, avgZ };
      }
      return { ...part, avgZ: 0 };
    });

    // Physically-Accurate Depth Sorting: Farther objects (larger Z) render first, closer objects render on top!
    renderQueue.sort((a, b) => b.avgZ - a.avgZ);

    // Draw Polygons & Beams
    renderQueue.forEach(item => {
      if (item.line) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(item.p1.x, item.p1.y);
        ctx.lineTo(item.p2.x, item.p2.y);
        ctx.lineWidth = item.width * item.p1.scale;
        ctx.strokeStyle = item.stroke;
        ctx.lineCap = 'round';
        ctx.stroke();
        ctx.restore();
      } else if (item.projectedPts) {
        const pts = item.projectedPts;
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length; i++) {
          ctx.lineTo(pts[i].x, pts[i].y);
        }
        ctx.closePath();

        // Directional shading gradient based on projected face orientation
        const pMid = pts[Math.floor(pts.length / 2)] || pts[0];
        const dist = Math.hypot(pMid.x - pts[0].x, pMid.y - pts[0].y);
        if (dist > 2) {
          const grad = ctx.createLinearGradient(pts[0].x, pts[0].y, pMid.x, pMid.y);
          grad.addColorStop(0, item.fill);
          grad.addColorStop(1, item.stroke || '#000000');
          ctx.fillStyle = grad;
        } else {
          ctx.fillStyle = item.fill;
        }

        ctx.fill();

        ctx.lineWidth = 1.2;
        ctx.strokeStyle = highlightGold;
        ctx.stroke();
        ctx.restore();
      }
    });

    // Draw Hotspot Pins for Active Model
    const model = UNIX_DATA.models[this.activeModelKey];
    if (model && model.hotspots) {
      model.hotspots.forEach(spot => {
        const p = this.project(spot);
        if (p.z < 180) { // Facing viewer
          ctx.save();
          ctx.beginPath();
          ctx.arc(p.x, p.y, 6 * p.scale, 0, Math.PI * 2);
          ctx.fillStyle = '#C5A880';
          ctx.fill();
          ctx.lineWidth = 2;
          ctx.strokeStyle = '#FFFFFF';
          ctx.stroke();

          // Subtle pulsating ring
          ctx.beginPath();
          ctx.arc(p.x, p.y, 12 * p.scale, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(197, 168, 128, 0.45)';
          ctx.stroke();
          ctx.restore();
        }
      });
    }
  }
}

// ==========================================================================
// 4. Interactive Space Investment & Curation Estimator
// ==========================================================================
class SpaceEstimator {
  constructor() {
    this.roomType = 'penthouse';
    this.sqft = 850;
    this.grade = 'bespoke'; // 'bespoke' (1.0), 'reserve' (1.25), 'collector' (1.55)
    this.addons = {
      lighting: true,
      whiteGlove: true,
      millwork: false
    };

    this.rates = {
      penthouse: { base: 185000, label: 'Penthouse Living Space', pieces: '6-8 Curated Works' },
      sanctuary: { base: 142000, label: 'Master Suite Sanctuary', pieces: '4-6 Curated Works' },
      villa: { base: 320000, label: 'Executive Villa Residence', pieces: '10-14 Curated Works' },
      hospitality: { base: 265000, label: 'Boutique Hospitality Suite', pieces: '8-12 Curated Works' }
    };

    this.gradeMultipliers = {
      bespoke: 1.0,
      reserve: 1.25,
      collector: 1.55
    };

    this.init();
  }

  init() {
    // Room Typology buttons (Keyboard accessible)
    const roomBtns = document.querySelectorAll('.room-radio-btn');
    roomBtns.forEach(btn => {
      const selectRoom = () => {
        roomBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-checked', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-checked', 'true');
        this.roomType = btn.getAttribute('data-room');
        this.calculate();
      };

      btn.addEventListener('click', selectRoom);
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectRoom();
        }
      });
    });

    // Sqft Range Slider
    const slider = document.getElementById('roomScaleSlider');
    const sqftValEl = document.getElementById('sliderSqftVal');
    if (slider) {
      slider.addEventListener('input', (e) => {
        this.sqft = parseInt(e.target.value, 10);
        if (sqftValEl) sqftValEl.textContent = `${this.sqft} sq.ft`;
        this.calculate();
      });
    }

    // Grade Buttons (Keyboard accessible)
    const gradeBtns = document.querySelectorAll('.grade-pill-btn');
    gradeBtns.forEach(btn => {
      const selectGrade = () => {
        gradeBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-checked', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-checked', 'true');
        this.grade = btn.getAttribute('data-grade');
        this.calculate();
      };

      btn.addEventListener('click', selectGrade);
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectGrade();
        }
      });
    });

    // Add-on Checkboxes
    const chkLighting = document.getElementById('addonLighting');
    const chkGlove = document.getElementById('addonWhiteGlove');
    const chkMillwork = document.getElementById('addonMillwork');

    if (chkLighting) chkLighting.addEventListener('change', (e) => { this.addons.lighting = e.target.checked; this.calculate(); });
    if (chkGlove) chkGlove.addEventListener('change', (e) => { this.addons.whiteGlove = e.target.checked; this.calculate(); });
    if (chkMillwork) chkMillwork.addEventListener('change', (e) => { this.addons.millwork = e.target.checked; this.calculate(); });

    // Consultation button from estimator
    const consultBtn = document.getElementById('estimatorBookConsultBtn');
    if (consultBtn) {
      consultBtn.addEventListener('click', () => {
        const roomInfo = this.rates[this.roomType] || this.rates.penthouse;
        openAppointmentModal(`Space Curation Estimate (${roomInfo.label}, ${this.sqft} sq.ft, ₹${this.calculate().toLocaleString('en-IN')})`);
      });
    }

    // Add configured space estimate to Dossier
    const addToDossierBtn = document.getElementById('estimatorAddToDossierBtn');
    if (addToDossierBtn) {
      addToDossierBtn.addEventListener('click', () => {
        this.addEstimateToDossier();
      });
    }

    this.calculate();
  }

  calculate() {
    const roomInfo = this.rates[this.roomType] || this.rates.penthouse;
    const baseVal = roomInfo.base;
    const sqftFactor = 1 + (this.sqft - 400) / 1200 * 0.45;
    const gradeMult = this.gradeMultipliers[this.grade] || 1.0;

    let subtotal = baseVal * sqftFactor * gradeMult;

    // Addons
    let addonTotal = 0;
    if (this.addons.lighting) addonTotal += 24000;
    if (this.addons.whiteGlove) addonTotal += 18500;
    if (this.addons.millwork) addonTotal += 58000;

    const totalEstimate = Math.round(subtotal + addonTotal);

    // Update DOM
    const roomTypeEl = document.getElementById('summarySelectedRoom');
    const piecesEl = document.getElementById('summaryEstimatedPieces');
    const totalEl = document.getElementById('summaryTotalEstimate');
    const leadTimeEl = document.getElementById('summaryLeadTime');

    if (roomTypeEl) roomTypeEl.textContent = roomInfo.label;
    if (piecesEl) piecesEl.textContent = roomInfo.pieces;
    if (totalEl) totalEl.textContent = `₹${totalEstimate.toLocaleString('en-IN')}`;
    if (leadTimeEl) {
      leadTimeEl.textContent = this.grade === 'collector' ? 'Estimated 10–14 Weeks Handcrafted' : 'Estimated 6–8 Weeks Handcrafted';
    }

    return totalEstimate;
  }

  addEstimateToDossier() {
    const total = this.calculate();
    const roomInfo = this.rates[this.roomType] || this.rates.penthouse;
    const gradeLabel = {
      bespoke: 'Atelier Bespoke (Solid Walnut & Bouclé)',
      reserve: 'Haute Reserve (Tuscan Leather & Travertine)',
      collector: "Collector's Grade (Calacatta Viola & Lost-Wax Bronze)"
    }[this.grade] || 'Atelier Bespoke';

    const inclusions = [];
    if (this.addons.lighting) inclusions.push('Concealed 2700K Architectural LED');
    if (this.addons.whiteGlove) inclusions.push('White-Glove Delivery & Installation');
    if (this.addons.millwork) inclusions.push('Custom Fluted Wall Paneling');

    dossier.addItem({
      id: `space-package-${this.roomType}-${this.grade}`,
      name: `${roomInfo.label} (Architectural Curation)`,
      material: `${gradeLabel} • ${inclusions.join(', ') || 'Core Curations'}`,
      dimensions: `${this.sqft} sq.ft Target Area`,
      price: total,
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80'
    });
  }
}

// ==========================================================================
// 5. Curated Catalog & Quick-View Inspection Modal
// ==========================================================================
function initCatalog() {
  const gridContainer = document.getElementById('catalogGridContainer');
  const filterTabs = document.querySelectorAll('.filter-tab');
  if (!gridContainer) return;

  function render(category = 'all') {
    const items = category === 'all'
      ? UNIX_DATA.curations
      : UNIX_DATA.curations.filter(item => item.category === category);

    gridContainer.innerHTML = items.map(item => `
      <article class="catalog-card" data-category="${item.category}" data-id="${item.id}">
        <div class="card-visual-link" data-inspect-id="${item.id}" role="button" tabindex="0" aria-label="Inspect ${item.name}">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
          <div class="card-top-badges">
            <span class="badge-craft-time">${item.craftHours}</span>
            <button class="btn-wishlist-card ${dossier && dossier.hasItem(item.id) ? 'active' : ''}" data-wishlist-id="${item.id}" aria-label="Save ${item.name} to dossier" title="Save to Dossier">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="card-content">
          <span class="card-category-sub">${item.subtitle}</span>
          <h3 class="card-piece-title" data-inspect-id="${item.id}" role="button" tabindex="0">${item.name}</h3>
          <p class="card-material-spec">${item.material}</p>
          <div class="card-footer">
            <span class="card-price-value">₹${item.price.toLocaleString('en-IN')}</span>
            <div class="card-actions-group">
              <button class="btn-quick-inspect" data-inspect-id="${item.id}">Inspect Piece</button>
            </div>
          </div>
        </div>
      </article>
    `).join('');
  }

  // Initial render
  render('all');

  // Filter tab interactions
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      const cat = tab.getAttribute('data-filter');
      render(cat);
    });
  });

  // Delegate click for Inspect & Wishlist
  gridContainer.addEventListener('click', (e) => {
    const wishlistBtn = e.target.closest('[data-wishlist-id]');
    if (wishlistBtn) {
      e.stopPropagation();
      const id = wishlistBtn.getAttribute('data-wishlist-id');
      const item = UNIX_DATA.curations.find(i => i.id === id);
      if (item) {
        if (dossier.hasItem(item.id)) {
          // Toggle off
          const itemIdx = dossier.items.findIndex(i => i.id === item.id);
          if (itemIdx > -1) dossier.removeItem(itemIdx);
        } else {
          dossier.addItem(item);
        }
      }
      return;
    }

    const inspectTarget = e.target.closest('[data-inspect-id]');
    if (inspectTarget) {
      const id = inspectTarget.getAttribute('data-inspect-id');
      openQuickView(id);
    }
  });

  // Keyboard accessibility for card inspection
  gridContainer.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const inspectTarget = e.target.closest('[data-inspect-id]');
      if (inspectTarget && !e.target.closest('[data-wishlist-id]')) {
        e.preventDefault();
        const id = inspectTarget.getAttribute('data-inspect-id');
        openQuickView(id);
      }
    }
  });
}

function openQuickView(pieceId) {
  const item = UNIX_DATA.curations.find(i => i.id === pieceId);
  if (!item) return;

  const modalOverlay = document.getElementById('quickViewModal');
  const contentContainer = document.getElementById('quickViewContent');
  if (!modalOverlay || !contentContainer) return;

  contentContainer.innerHTML = `
    <div class="quickview-grid">
      <div class="quickview-gallery">
        <img src="${item.image}" alt="${item.name}" />
      </div>
      <div class="quickview-info">
        <span class="piece-header-badge">${item.craftHours} • ATELIER MONOGRAPH</span>
        <h2 class="piece-name">${item.name}</h2>
        <p class="piece-tagline">${item.subtitle}</p>
        
        <p style="font-size: 0.85rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 1.5rem;">
          ${item.description}
        </p>

        <div class="spec-mini-table">
          <div class="spec-row">
            <span class="spec-key">Finishes:</span>
            <span class="spec-val">${item.material}</span>
          </div>
          <div class="spec-row">
            <span class="spec-key">Dimensions:</span>
            <span class="spec-val">${item.dimensions}</span>
          </div>
          <div class="spec-row">
            <span class="spec-key">Origin:</span>
            <span class="spec-val">UNIX Atelier, Milan, Italy</span>
          </div>
          <div class="spec-row">
            <span class="spec-key">Warranty:</span>
            <span class="spec-val">Lifetime Heirloom Guarantee</span>
          </div>
        </div>

        <div class="panel-pricing-action" style="margin-top: auto;">
          <div class="price-display-wrapper">
            <span class="price-label">Atelier Investment</span>
            <span class="price-figure">₹${item.price.toLocaleString('en-IN')}</span>
          </div>
          <div style="display: flex; gap: 0.75rem; margin-top: 1rem;">
            <button class="btn-gold" id="modalAddDossierBtn" style="flex-grow: 1;">
              Add Piece to Dossier
            </button>
            <button class="btn-outline" id="modalBookAppointmentBtn">
              Book Viewing
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Wire buttons inside modal
  const addBtn = document.getElementById('modalAddDossierBtn');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      dossier.addItem(item);
      closeModal('quickViewModal');
    });
  }

  const bookBtn = document.getElementById('modalBookAppointmentBtn');
  if (bookBtn) {
    bookBtn.addEventListener('click', () => {
      closeModal('quickViewModal');
      openAppointmentModal(`Private Viewing: ${item.name}`);
    });
  }
}

// ==========================================================================
// 6. Appointment & Private Commission Modal
// ==========================================================================
function openAppointmentModal(prefSubject = '') {
  const modal = document.getElementById('appointmentModal');
  if (!modal) return;

  const subjectInput = document.getElementById('appointmentNotes');
  if (subjectInput && prefSubject) {
    subjectInput.value = `Inquiry regarding: ${prefSubject}`;
  }

  // Ensure minimum date is today
  const dateInput = document.getElementById('appointmentDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
    if (!dateInput.value) {
      dateInput.value = today;
    }
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ==========================================================================
// 7. Toast Notification Utility
// ==========================================================================
let toastTimer;
function showToast(message) {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--accent-gold);">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
    <span>${message}</span>
  `;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// ==========================================================================
// 8. Global Initialization & Event Listeners
// ==========================================================================
function initUnixExperience() {
  if (window.__UNIX_INITIALIZED__) return;
  window.__UNIX_INITIALIZED__ = true;

  // 1. Initialize Client Dossier
  dossier = new DossierManager();

  // 2. Initialize 3D Studio Canvas Visualizer
  const studio3D = new FurnitureStudio3D('furnitureCanvas');

  // 3. Initialize Curated Collections Catalog
  initCatalog();

  // 4. Initialize Space Investment Estimator
  const estimator = new SpaceEstimator();

  // 5. Drawer & Modal Toggles
  const openDossierBtn = document.getElementById('openDossierBtn');
  const closeDossierBtn = document.getElementById('closeDossierBtn');
  const dossierDrawer = document.getElementById('dossierDrawer');

  if (openDossierBtn && dossierDrawer) {
    openDossierBtn.addEventListener('click', () => {
      dossierDrawer.classList.add('active');
    });
  }
  if (closeDossierBtn && dossierDrawer) {
    closeDossierBtn.addEventListener('click', () => {
      dossierDrawer.classList.remove('active');
    });
  }

  // 6. Mobile Navigation Drawer
  const mobileMenuTrigger = document.getElementById('mobileMenuTrigger');
  const closeMobileNavBtn = document.getElementById('closeMobileNavBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');

  function openMobileNav() {
    if (mobileNavDrawer && mobileMenuTrigger) {
      mobileNavDrawer.classList.add('active');
      mobileNavDrawer.setAttribute('aria-hidden', 'false');
      mobileMenuTrigger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileNav() {
    if (mobileNavDrawer && mobileMenuTrigger) {
      mobileNavDrawer.classList.remove('active');
      mobileNavDrawer.setAttribute('aria-hidden', 'true');
      mobileMenuTrigger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }

  if (mobileMenuTrigger) {
    mobileMenuTrigger.addEventListener('click', openMobileNav);
  }
  if (closeMobileNavBtn) {
    closeMobileNavBtn.addEventListener('click', closeMobileNav);
  }

  // Auto-close mobile drawer when any link is clicked
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  // 7. Appointment Triggers
  document.querySelectorAll('[data-open-appointment]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      closeMobileNav();
      const subject = btn.getAttribute('data-subject') || '';
      openAppointmentModal(subject);
    });
  });

  // Modal Closers
  document.querySelectorAll('.modal-close-btn, .modal-overlay').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target === el || e.target.closest('.modal-close-btn')) {
        const overlay = el.closest('.modal-overlay') || el;
        if (overlay) {
          overlay.classList.remove('active');
          document.body.style.overflow = '';
        }
      }
    });
  });

  // Escape key closes modals and drawers
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(m => m.classList.remove('active'));
      if (dossierDrawer) dossierDrawer.classList.remove('active');
      closeMobileNav();
      document.body.style.overflow = '';
    }
  });

  // Appointment Form Submission with Local Persistence
  const appointmentForm = document.getElementById('appointmentForm');
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('clientName').value;
      const showroom = document.getElementById('showroomSelect').value;
      const email = document.getElementById('clientEmail').value;
      const phone = document.getElementById('clientPhone').value;
      const date = document.getElementById('appointmentDate').value;
      const time = document.getElementById('appointmentTime').value;
      const notes = document.getElementById('appointmentNotes').value;
      const refCode = 'UNIX-' + Math.floor(100000 + Math.random() * 900000);

      // Save appointment
      try {
        const existing = JSON.parse(localStorage.getItem('unix_appointments') || '[]');
        existing.push({ refCode, name, email, phone, showroom, date, time, notes, timestamp: new Date().toISOString() });
        localStorage.setItem('unix_appointments', JSON.stringify(existing));
      } catch (err) {
        console.warn('Booking storage error', err);
      }

      closeModal('appointmentModal');
      showToast(`Appointment Confirmed for ${name} [Ref: ${refCode}] at ${showroom}. Confirmation dossier dispatched.`);
      appointmentForm.reset();
    });
  }

  // Newsletter Form
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thank you. You have been entered into the Private Atelier 2026 Registry.');
      newsletterForm.reset();
    });
  }

  // Ambient Nocturne / Studio Light Theme Toggle
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const currentTheme = localStorage.getItem('unix_theme') || 'light';
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const newTheme = isDark ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('unix_theme', newTheme);
      showToast(`Switched to ${newTheme === 'dark' ? 'Nocturne Evening' : 'Studio Day'} Atmosphere`);
    });
  }

  // Material Sample Order Triggers
  document.querySelectorAll('.btn-order-sample').forEach(btn => {
    btn.addEventListener('click', () => {
      const material = btn.getAttribute('data-material') || 'Material Swatch';
      showToast(`Complimentary ${material} Sample Box added to consultation inquiry.`);
      openAppointmentModal(`Material Sample Box: ${material}`);
    });
  });

  // Expose namespace for testing & iframe inspection
  window.UnixAtelier = {
    data: UNIX_DATA,
    getDossier: () => dossier,
    studio: studio3D,
    showToast,
    openAppointmentModal,
    closeModal
  };
}

// Universal boot trigger: executes whether DOM is loading or already parsed
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initUnixExperience);
} else {
  initUnixExperience();
}
