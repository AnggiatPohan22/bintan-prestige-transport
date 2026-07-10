# Home Responsive Cards Concierge Polish Report

## Summary
- Fixed Home `Signature services` and `Featured Routes` image frames so the media fills the full card width across desktop, tablet, and mobile.
- Fixed tablet layout for `Concierge details` so the cards render as a clean two-column grid instead of inheriting the horizontal swipe behavior.
- Kept the changes scoped to Home presentation only. No data, form logic, WhatsApp logic, routes, or package content were changed.

## Files Modified
- `src/components/home/BentoShowcase.astro`
- `src/styles/global.css`

## What Changed
- Added `home-bento-grid` class to `BentoShowcase.astro` so Concierge details can receive tablet-specific layout rules.
- Reworked Home service/route image frame CSS from fixed height behavior to full-width `aspect-ratio` behavior.
- Set Home Signature Services image frames to a wide editorial ratio and Featured Routes to a proportionate route-card ratio on desktop.
- Added tablet override for Concierge details to render a normal two-column grid between 768px and 1023px.
- Kept mobile package cards as full-card swipe items.

## Browser Audit
- Desktop 1280px:
  - Signature Services media frame now follows the card width, around 607px wide instead of 320px.
  - Featured Routes media frame now follows the card width, around 295px wide instead of a fixed square frame.
- Tablet 768px:
  - Signature Services cards remain in two columns with full-width media.
  - Concierge details no longer creates collapsed/awkward columns and renders as a two-column grid.
- Mobile 390px:
  - Signature Services and Featured Routes remain one full card per swipe.
  - Media frame fills the visible card width.

## Verification
- Browser layout inspection at 1280px, 768px, and 390px.
- `git diff --check -- src/styles/global.css src/components/home/BentoShowcase.astro`
- `npm.cmd run build`

## Known Issues
- An Astro dev server was already running before this pass at `http://127.0.0.1:4321`; this pass reused it for browser inspection.
