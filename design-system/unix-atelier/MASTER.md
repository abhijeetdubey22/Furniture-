# Design System: UNIX Atelier (Haute Ébénisterie & Architecture)

## 1. Overview & Concept
UNIX is an avant-garde luxury furniture studio and architectural interior atelier.
The brand embraces Exaggerated Minimalism, Liquid Glass accents, and Swiss Architectural Editorial grids.

## 2. Color Palette & Semantic Tokens
```css
:root {
  --color-primary: #1C1917;         /* Deep Stone Espresso */
  --color-on-primary: #FFFFFF;
  --color-secondary: #44403C;       /* Warm Taupe Slate */
  --color-on-secondary: #FFFFFF;
  --color-accent: #C5A880;          /* Champagne Gold */
  --color-accent-hover: #B39268;
  --color-accent-deep: #8C6D46;
  --color-background: #FAFAF9;      /* Pure Warm Alabaster */
  --color-foreground: #0C0A09;      /* Obsidian Black */
  --color-card: #FFFFFF;
  --color-card-foreground: #0C0A09;
  --color-muted: #F2EFEB;           /* Sandstone Muted */
  --color-muted-foreground: #57534E;
  --color-border: #E7E5E4;          /* Architectural Hairline */
  --color-border-subtle: #F0EEE9;
  --color-destructive: #DC2626;
  --color-on-destructive: #FFFFFF;
  --color-ring: #C5A880;
  
  /* Mood Mode: Dark Atelier Overrides */
  --color-dark-bg: #0C0A09;
  --color-dark-surface: #141210;
  --color-dark-card: #1C1917;
  --color-dark-text: #F5F5F4;
  --color-dark-border: #292524;
}
```

## 3. Typography
- **Headings & Display**: Cormorant Garamond & Cormorant (`font-serif`) — refined luxury, high contrast, sculptural serif.
- **Body & Controls**: Montserrat & Plus Jakarta Sans (`font-sans`) — crisp, modern, ultra-legible Swiss precision.
- Google Fonts:
  `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Montserrat:wght@300;400;500;600;700&display=swap`

## 4. UI/UX Rules & Polish
- **Icons**: Inline SVG only with precise 1.5px/1.75px stroke widths. Zero emojis.
- **Touch Targets**: Minimum 44×44px for all buttons and interactive controls.
- **Transitions**: 200–350ms cubic-bezier(0.16, 1, 0.3, 1) ease transitions.
- **Contrast**: WCAG AAA/AA 4.5:1+ contrast on all text elements.
- **Sound & Motion**: Respects `prefers-reduced-motion: reduce`.
- **Micro-interactions**: Interactive 3D Canvas / 360 viewer, real-time material switcher, space quotation calculator, quick-look drawer, and private appointment scheduler.
