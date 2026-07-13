# Global CSS Developer Map Comments Report

## Summary
- Added detailed developer-facing comments directly inside `src/styles/global.css`.
- The comments map major CSS areas such as tokens, editorial layout, package cards, image fitting, gallery, fleet selector, booking forms, blog UI, FAQ, mobile menu, and responsive overrides.
- No visual CSS values or component logic were intentionally changed.

## Files Modified
- `src/styles/global.css`

## Documentation Added
- Top-level CSS map explaining the main sections of the file.
- Section comments for:
  - Design tokens and global reset
  - Shared editorial layout
  - Luxury surface utilities
  - Package detail hero and transfer cards
  - Package offer cards
  - Swipe controls
  - Hero animation and Home booking mini form
  - Floating WhatsApp assistant
  - Booking Information form
  - Blog UI
  - Home cards, image fit, swipe, and dots
  - Client gallery and lightbox
  - Fleet selector
  - FAQ, CTA, trusted frames
  - Responsive overrides
  - Mobile menu, skip link, and reduced motion

## Verification
- `git diff --check -- src/styles/global.css`
- `npm.cmd run build`

## Known Issues
- No known functional or visual issue. This pass only adds comments/documentation.
