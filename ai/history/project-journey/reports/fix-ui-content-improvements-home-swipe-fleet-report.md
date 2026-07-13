# Home Mobile Swipe And Fleet Selector Report

Date: 2026-07-09
Branch: `codex/fix-ui-content-improvements`

## Scope

Refined homepage mobile behavior for the `Concierge details` and `Why us` sections, and fixed the `Fleet` selector so vehicle image/button interaction works reliably without React hydration.

## Files Created

- `src/components/home/PremiumCarSelector.astro`
- `ai/reports/fix-ui-content-improvements-home-swipe-fleet-report.md`
- `ai/handoffs/fix-ui-content-improvements-home-swipe-fleet-handoff.md`

## Files Modified

- `src/pages/index.astro`
- `src/components/home/BentoShowcase.astro`
- `src/components/home/WhyChooseUs.astro`
- `src/styles/global.css`

## Implementation Notes

- Applied the existing `home-scroll-row` pattern to `BentoShowcase.astro` so `Concierge details` becomes a horizontal swipe row on mobile/tablet and returns to grid on desktop.
- Applied the same mobile swipe pattern to `WhyChooseUs.astro`.
- Replaced the homepage fleet usage with a static-first Astro selector and a small inline script.
- Kept the fleet visual language consistent with the existing luxury dark surface.
- Switched fleet imagery from background-only rendering to a real `<img>` inside a stable frame so images load and crop more reliably.
- Added working previous/next buttons, dot buttons, active-state updates, image updates, copy updates, feature pill updates, and WhatsApp link updates.
- Refined the fleet image frame to a stable 16:9 ratio with `object-fit: cover`, so mixed vehicle image dimensions align visually inside one consistent frame.
- Reworked the vehicle selector into a compact seamless dot control with no visible vehicle names, plus a smooth active-pill transition.
- Strengthened the fleet WhatsApp CTA text/icon color so the button reads like a normal high-contrast button.
- Added mobile-only compact fleet spacing so `Capacity` and `Luggage` sit side-by-side, feature pills tighten, and the carousel controls stay in one row.
- Did not add dependencies, backend logic, database logic, or admin features.

## Verification

- `npm.cmd run build` passed.
- `git diff --check -- src/pages/index.astro src/components/home/BentoShowcase.astro src/components/home/WhyChooseUs.astro src/components/home/PremiumCarSelector.astro src/styles/global.css` passed with only existing line-ending warnings.
- Browser QA at 390px confirmed:
  - `Concierge details` has 6 swipe cards and horizontal scroll.
  - `Why us` has 3 swipe cards and horizontal scroll.
  - No horizontal page overflow.
  - Fleet has no React `astro-island` dependency.
  - `Next vehicle` changes `Luxury Sedan` to `Confortable Alphard`.
  - Fleet image changes to `/images/cars/toyota-alparhd.jpg`.
  - Fleet WhatsApp link updates to the active vehicle.
- Follow-up browser QA at 390px and 1280px confirmed:
  - Fleet frame uses 16:9 ratio.
  - Fleet image uses `object-fit: cover`.
  - Next button changes `Luxury Sedan` to `Confortable Alphard`.
  - CTA text color computes as dark `rgb(8, 7, 5)`.
  - No horizontal overflow.
- Latest mobile-first browser QA at 390px and 1280px confirmed:
  - Dot controls have no visible text.
  - Active dot is a compact 41px pill.
  - Dot group is only 97px wide and does not get clipped on mobile.
  - Next button still changes `Luxury Sedan` to `Confortable Alphard`.
- Compact mobile fleet QA at 360px and 390px confirmed:
  - `Capacity` and `Luggage` render in two columns.
  - Spec cards stay readable at 132px wide on 360px.
  - Fleet controls remain in one row.
  - CTA remains 46px tall and comfortable to tap.
  - No horizontal page overflow.
  - Next button still updates the active vehicle and WhatsApp link.
- Browser QA at 768px and 1280px confirmed no horizontal page overflow, fleet image loaded, fleet buttons exist, and desktop returns to normal grid layout.

## Known Issues

- Older browser logs in the in-app browser still contain previous React hydration errors from before the static-first replacement. The current homepage render has `astro-island` count `0` for the fleet selector.
- `npm.cmd run check` was not rerun in this step. Earlier work found an existing unrelated type issue in `src/components/packages/PackageDetailContent.astro` line 51.

## Next Step

Perform a manual touch-device check for swipe feel on a real phone, especially the floating WhatsApp overlap while swiping home cards.
