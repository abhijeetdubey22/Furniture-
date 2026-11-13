# Requirements: Ekveera Super Furniture & Interior — Perfection & Anonymization

## 1. Goal
Refactor, elevate, and perfect the Ekveera Super Furniture & Interior website:
1. **Privacy & Anonymization**: Completely remove any actual personal, owner, or business contact information and replace with realistic, polished dummy numbers, dummy emails, dummy owner name, dummy addresses, and dummy customer inquiries across the entire application (storefront, data store, and admin portal).
2. **Design Perfection (/ui-styling)**:
   - Enhance aesthetics with high-end luxury furniture studio feel: warm walnut, dark espresso, obsidian glassmorphism, gold accents.
   - Introduce responsive mobile navigation drawer with accessible hamburger menu so mobile users can navigate smoothly.
   - Add a 4-Step Craftsmanship & Customization process section (Design & 3D Planning -> Kiln-Dried Timber Selection -> Master Joinery & Carving -> White-Glove Installation).
   - Add an Interactive Furniture & Interior Cost Estimator allowing users to calculate approximate budgets and get custom quotes directly sent to WhatsApp.
   - Add a verified Client Reviews / Testimonials showcase.
   - Enhance the Quick View Modal with detailed craftsmanship specifications (solid wood grade, joinery, finish, warranty).
   - Ensure the Back-to-Top button and smooth scrolling work flawlessly.
   - Maintain full real-time synchronization between the public storefront and the Owner Admin portal.

## 2. Information Sanitization Matrix
| Field | Previous / Actual Value | New Realistic Dummy Value |
|---|---|---|
| Phone Number | +91 98220 12345 | +91 98765 43210 |
| WhatsApp Link | 919822012345 | 919876543210 |
| Owner Name | Vijay Mul | Aarav Sharma (Studio Director) |
| Business Email | contact@ekveerasuperfurniture.com | contact@ekveerafurniture.example.com |
| Admin Email | admin@ekveera.com | admin@ekveerafurniture.example.com |
| Admin Password | admin123 | admin123 (Demo password) |
| Showroom Address | Plot No. 42, Super Furniture Complex, Near Highway Bypass, Industrial Area, Maharashtra 411001 | Suite 101, Luxury Design Boulevard, Studio Arcade, Mumbai, MH 400001 |
| Google Maps Link | maps.google.com/?q=Ekveera+Furniture | maps.google.com/?q=Luxury+Furniture+Studio |
| Customer Inquiries | Rajesh Kulkarni (+91 98901 23456)<br>Sunita Deshpande (+91 97654 89123) | Vikram Singhania (+91 98765 11001)<br>Priya Malhotra (+91 98765 11002) |
| LocalStorage Key | ekveera_furniture_master_v2 | ekveera_furniture_master_v3 (with auto-migration to purge legacy cached numbers) |

## 3. Technical Constraints
- Vanilla ES Modules + CSS3 (No broken external bundle dependencies required).
- Tabler icons webfont and Google Fonts (Playfair Display, Outfit).
- Responsive on all devices (360px mobile to 4K displays).

