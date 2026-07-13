# Package Offer Cards Visual Refinement Handoff

Date: 2026-07-09
Branch: `codex/fix-ui-content-improvements`

## Summary

The package cards on `/packages/pick-up-drop`, `/packages/island-tour`, and the homepage service/featured route sections now use a shared premium card format. The image area is larger, price/category badges sit cleanly on the image, title/description/highlights have stable visual slots, and the action row uses `Read more` beside `Ask availability`.

Latest update: homepage `Signature services` and `Featured routes` now show one full card per mobile swipe, with dot-only pagination styled to match the Fleet selector dots.

Follow-up update: taxi/product images now get category-specific scaling so loose vehicle assets fill the card frame more proportionally.

Latest image-fit tweak: Home service cards now use a slightly stronger zoom than route cards, so the taxi PNG no longer reads as small inside its frame on either mobile or desktop.

## Read Order For Next Session

1. `ai/reports/fix-ui-content-improvements-package-offer-cards-report.md`
2. `src/components/packages/RouteList.astro`
3. `src/components/packages/TourPackageGrid.astro`
4. `src/components/home/ServiceCards.astro`
5. `src/components/home/RouteHighlights.astro`
6. `src/styles/global.css`

## Files Changed

- Updated `src/components/packages/RouteList.astro`
- Updated `src/components/packages/TourPackageGrid.astro`
- Updated `src/components/home/ServiceCards.astro`
- Updated `src/components/home/RouteHighlights.astro`
- Updated `src/styles/global.css`
- Added this handoff and the matching report.

## Behavior Preserved

- Site remains static-first Astro.
- Transfer card data still comes from `src/data/routes.ts`.
- Tour card data still comes from `src/data/tours.ts`.
- WhatsApp number still comes from `src/data/site.ts`.
- Existing detail page URLs remain unchanged.
- Homepage Taxi Transfer `Read more` now points to the existing `/packages/pick-up-drop` page.
- No backend, database, admin dashboard, or dependency was added.

## Verification Done

- `npm.cmd run build`
- Browser QA at 1280px:
  - Transfer cards show 4 aligned columns.
  - Island tour first row shows 4 aligned columns.
  - Action rows align across each row.
  - Image frames are larger than before.
  - No horizontal overflow.
- Browser QA at 390px:
  - Transfer and island tour cards stack as 1 column.
  - `Read more` and `Ask availability` remain side-by-side.
  - Buttons are 42px tall.
  - No horizontal overflow.
- Homepage browser QA before final image-height tune:
  - `Signature services` and `Featured routes` used the shared card format.
  - `Read more` and `Ask availability` remained side-by-side.
  - No horizontal overflow at 390px and 1280px.
- Final post-tune checks:
  - `npm.cmd run build`
  - `git diff --check -- src/components/home/ServiceCards.astro src/components/home/RouteHighlights.astro src/styles/global.css`
  - Browser measurement timed out after the final home image-height tune, so final visual feel should be rechecked in browser or on a real device.
- Mobile full-card swipe QA at 390px:
  - Service and featured route card width equals the mobile track width.
  - Service row has 2 dots; featured route row has 4 dots.
  - Dot arrows are hidden.
  - Clicking the second featured route dot updates the active dot and scrolls to the next card.
  - No horizontal overflow.
- Card image QA at 390px:
  - Taxi image uses `object-fit: cover`.
  - Taxi image uses `object-position: center bottom`.
  - Taxi image transform is `scale(1.16)`, so it fills the frame better.
- Final home image-fit QA:
  - Mobile service image transform is `scale(1.24)`.
  - Mobile route image transform is `scale(1.14)`.
  - Desktop service image transform is `scale(1.27)`.
  - Desktop route image transform is `scale(1.16)`.

## Remaining QA

- Check real-device mobile scrolling and tap feel.
- Confirm final image crops feel right for every package image.
- Recheck homepage `Signature services` and `Featured routes` on a real mobile device for native swipe feel.
- Existing unrelated `astro check` issue remains in `src/components/packages/PackageDetailContent.astro` line 51.
