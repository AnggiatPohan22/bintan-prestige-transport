# Editorial Luxury Grand Plan

## Goal

Transform the current Astro taxi and tour website from dark luxury UI into an
Editorial Luxury / Premium Travel Magazine style while preserving routing,
Astro structure, local data flow, SEO, and static-first performance.

## Design System Direction

### Colors

- Dark editorial base: `#0B0C10`
- Soft dark surface: `#121212`
- Warm editorial page: `#FAF7F0`
- Warm secondary page: `#F5F0E8`
- Dark text: `#111827`
- Light text: `#F8FAFC`
- Muted light text: `#94A3B8`
- Muted dark text: `#6B7280`
- Gold accent: `#BFA46F`
- Brighter gold accent: `#D6B46A`
- Deep emerald: `#064E3B`
- Dark border: `rgba(255,255,255,0.10)`
- Warm border: `#E5E0D6`

### Typography

- Keep no-dependency approach for Phase A.
- Use system sans for body text initially.
- Introduce editorial heading stacks through CSS variables:
  `Georgia`, `Times New Roman`, and serif fallbacks.
- Later phase may add a proper font only if justified and performance-safe.

### Spacing Scale

- More whitespace than current dark UI.
- Sections should use larger vertical rhythm on desktop.
- Mobile spacing should stay compact but breathable.
- Reusable targets:
  - Small section: `3rem`
  - Standard section: `4rem-6rem`
  - Editorial feature section: `6rem-8rem`

### Border Radius

- Keep radius restrained.
- Cards and panels: 8px.
- Pills/buttons: full radius.
- Avoid overly rounded editorial cards.

### Button Style

- Primary: refined gold button, dark readable text, subtle inset highlight.
- Secondary: dark transparent editorial button with gold border.
- Avoid low-contrast white text on pale buttons.
- Buttons should be clear on mobile and not depend on hover.

### Card Style

- Cards should feel like premium editorial modules:
  - subtle border
  - restrained shadow
  - image-forward where useful
  - gold/silver accents used sparingly
  - no heavy glassmorphism

### Section Style

- Alternate dark editorial sections and warm magazine sections.
- Avoid too many consecutive dark card grids.
- Use large headings, narrower text measures, and image-led rhythm.

### Image Treatment

- Use real images as primary visual signal.
- Hero can use multi-image crossfade, but image count and size must be curated.
- Card images should use `cover`, consistent aspect ratios, and meaningful alt
  text or decorative handling.

### Icon Style

- Keep Lucide icons.
- Use icons as small functional accents, not large decorative illustrations.
- Prefer gold or muted silver icon color.

### Animation Policy

- Lightweight CSS transitions and opacity/transform only.
- Keep hero crossfade smooth but calm.
- Respect `prefers-reduced-motion`.
- Do not add heavy animation dependencies.

## Page-Level Direction

### Homepage

- Move toward a magazine-style opening with large editorial typography and
  image-led hero rhythm.
- Reorder or visually group sections so the page feels less like repeated
  feature cards.
- Make gallery and destination/fleet imagery stronger.
- Improve service storytelling with concise copy.

### Pick Up & Drop

- Keep transfer page practical and conversion-focused.
- Use editorial image hero and refined route/service cards.
- Make fleet fit and booking flow easier to scan on mobile.

### Island Tour

- Make this page more destination-led.
- Use larger image modules, stronger itinerary hierarchy, and more editorial
  package cards.

### About

- Shift from foundation wording to brand trust story.
- Add editorial story sections, proof points, and local expertise framing.

### Contact

- Keep WhatsApp-first.
- Make contact options elegant and simple.
- Avoid heavy form-like UI until backend exists.

## Component-Level Direction

### Header / Navbar

- Keep static-first native mobile menu.
- Refine logo sizing once final brand file is selected.
- Slightly reduce visual heaviness while keeping readability.

### Hero

- Continue using `HeroBackdrop`.
- Use page-specific multi-image arrays from `src/data/media.ts`.
- Keep overlays calm and text readable.

### Section Heading

- Add editorial heading utilities.
- Use larger, more elegant headings and narrower descriptions.

### CTA Button

- Standardize on editorial gold primary and dark/gold secondary.
- Ensure text contrast stays high.

### Editorial Card

- Create base classes for future editorial cards.
- Later phases can replace repeated card class strings gradually.

### Destination Card

- Image-first card with small category label and refined text.

### Service Card

- Stronger image treatment and clearer package CTA.

### Package Card

- More editorial spacing, better price/duration tags, and consistent CTA style.

### Testimonial Card

- Not currently implemented. Add later only if real testimonials exist.

### FAQ Accordion

- Keep lightweight.
- Make visual treatment calmer and less boxed in later phases.

### Footer

- Add editorial brand closing, real business data, and social links once final.

## Launch-First Priority

### Must-Have Before Launch

- Final domain and environment values.
- Correct WhatsApp, phone, email, address/service-area text.
- Real logo and OG image.
- Correct hero/package/gallery images and optimized file sizes.
- Build/check verification.
- Mobile menu and CTA QA.
- Sitemap and robots confirmed on production domain.

### Should-Have After Launch

- Full editorial homepage redesign.
- Better gallery curation and destination storytelling.
- Refined package/fleet card system.
- Warm editorial section variants.

### Nice-To-Have Later

- Testimonials if real.
- CMS-driven content.
- Advanced image optimization pipeline.
- More detailed destination pages.

## Implementation Phases

### Phase A: Design Tokens and Global Style Foundation

- Add editorial CSS variables.
- Add base editorial type utilities.
- Add editorial section/card/button utility classes.
- Keep existing UI intact except utilities becoming available.

### Phase B: Header, Footer, and Base Layout Polish

- Refine navbar spacing/logo treatment.
- Refine footer editorial layout.
- Improve floating CTA if needed.

### Phase C: Homepage Editorial Luxury Implementation

- Apply editorial typography and spacing.
- Restructure homepage visual rhythm in small changes.
- Improve hero, service, gallery, and CTA flow.

### Phase D: Cards and Reusable Sections

- Apply editorial card utilities to service/package/gallery/fleet cards.
- Reduce repeated styling.
- Improve image hierarchy.

### Phase E: Mobile, Accessibility, SEO, and Performance Cleanup

- Check all mobile breakpoints.
- Audit alt text and focus states.
- Optimize large images.
- Confirm metadata/schema/domain values.

### Phase F: Final Build Verification and Launch Checklist

- Run `npm run astro check`.
- Run `npm run build`.
- Run preview smoke tests.
- Update launch checklist and final report.

## Phase A Scope For This Session

Only implement global editorial foundation in `src/styles/global.css`, then
write `ai/reports/editorial-luxury-phase-a-report.md`.

Do not rewrite pages, components, routes, or data in Phase A.
