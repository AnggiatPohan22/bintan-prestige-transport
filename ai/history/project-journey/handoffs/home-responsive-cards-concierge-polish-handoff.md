# Handoff: Home Responsive Cards Concierge Polish

## Current State
- Home `Signature services` and `Featured Routes` image frames now fill the card width with aspect-ratio based sizing.
- Home `Concierge details` has a dedicated `home-bento-grid` class and tablet override so it stays as a clean grid on tablet.
- Mobile card swipe behavior remains intact for Home package cards.

## Modified Files
- `src/components/home/BentoShowcase.astro`
- `src/styles/global.css`

## Verification
- Browser inspected at 1280px, 768px, and 390px.
- `git diff --check -- src/styles/global.css src/components/home/BentoShowcase.astro` completed successfully.
- `npm.cmd run build` completed successfully.

## Notes For Next Session
- If the taxi PNG still feels too cropped after visual review, adjust only the taxi-specific Home image transform in `global.css`.
- If the user wants Concierge mobile to show full-card swipe like package cards, add a dedicated dot control rather than changing the shared `.home-scroll-row` rules globally.
