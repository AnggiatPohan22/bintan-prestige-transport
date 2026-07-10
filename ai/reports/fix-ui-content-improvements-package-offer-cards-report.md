# Package Offer Cards Visual Refinement Report

Date: 2026-07-09
Branch: `codex/fix-ui-content-improvements`

## Scope

Refined the package cards used on `/packages/pick-up-drop`, `/packages/island-tour`, and the matching homepage service/featured route sections so image, title, description, highlights, and action buttons align consistently across desktop and mobile.

## Files Modified

- `src/components/packages/RouteList.astro`
- `src/components/packages/TourPackageGrid.astro`
- `src/components/home/ServiceCards.astro`
- `src/components/home/RouteHighlights.astro`
- `src/styles/global.css`

## Files Created

- `ai/reports/fix-ui-content-improvements-package-offer-cards-report.md`
- `ai/handoffs/fix-ui-content-improvements-package-offer-cards-handoff.md`

## Implementation Notes

- Replaced uneven per-card markup with a shared `.package-offer-card` presentation for transfer and island tour cards.
- Moved price into a compact image badge so long `Start From` text no longer behaves like a large action button.
- Added a larger image frame for desktop/tablet, while keeping mobile image height compact.
- Added clamped title and description areas so long copy does not push buttons out of alignment.
- Added highlight lists from existing package data and limited them visually for consistent card height.
- Replaced the old single/detail action with a two-button action row: `Read more` and `Ask availability`.
- Kept detail links, WhatsApp links, route/tour data, and static-first Astro structure intact.
- Applied the same card system to homepage `Signature services` and `Featured routes`.
- Corrected the homepage Taxi Transfer `Read more` target to the existing `/packages/pick-up-drop` page.
- Kept homepage service/route image frames tuned separately so they remain premium without making mobile cards too tall.
- Updated homepage package card rows to use a full-card mobile swipe pattern, so one card fills the track instead of showing a cut-off neighboring card.
- Added dot-only pagination to homepage package card rows, styled to match the Fleet selector dots.
- Added category-specific card image scaling so taxi images with transparent/loose composition fill the card frame more proportionally.
- Tightened Home-only image framing further so taxi assets fill their frame on both mobile and desktop, while route cards keep a slightly lighter zoom.
- Did not add dependencies or change backend, database, admin, or form flow logic.

## Verification

- `npm.cmd run build` passed.
- Browser QA at 1280px confirmed:
  - Transfer cards render in 4 equal columns.
  - Island tour cards render in 4 equal columns on the first row.
  - Card action rows share the same vertical position across the row.
  - Image frames are larger and visually dominant.
  - No horizontal page overflow.
- Browser QA at 390px confirmed:
  - Transfer and island tour cards render in 1 column.
  - `Read more` and `Ask availability` stay side-by-side.
  - Buttons remain comfortable at 42px tall.
  - No horizontal page overflow.
- Follow-up homepage browser QA before the final image-height tune confirmed:
  - `Signature services` and `Featured routes` render with the shared card format.
  - Homepage service and route cards keep `Read more` and `Ask availability` side-by-side.
  - Homepage Taxi Transfer `Read more` points to `/packages/pick-up-drop`.
  - No horizontal overflow at 390px and 1280px.
- Final post-tune verification:
  - `npm.cmd run build` passed.
  - `git diff --check -- src/components/home/ServiceCards.astro src/components/home/RouteHighlights.astro src/styles/global.css` passed with only line-ending warnings.
  - Browser measurement was retried after the final home image-height tune but timed out in the browser session; real-device or browser recheck is recommended for final visual feel.
- Mobile full-card swipe verification at 390px confirmed:
  - Homepage service and featured route card width matches the 343px track width.
  - Track uses full-card flex swipe behavior on mobile.
  - Service dots show 2 items; featured route dots show 4 items.
  - Dot arrows are hidden.
  - Clicking the second featured route dot updates active dot index to 1 and scrolls the track.
  - No horizontal page overflow.
- Follow-up card image QA at 390px confirmed:
  - Taxi card image uses `object-fit: cover`.
  - Taxi card image uses `object-position: center bottom`.
  - Taxi card image scales to `1.16`, making it larger than the frame instead of visually undersized.
- Final home image-fit QA:
  - Mobile service card image transform is `scale(1.24)` with `object-position: center bottom`.
  - Mobile route card image transform is `scale(1.14)` with `object-position: center bottom`.
  - Desktop service card image transform is `scale(1.27)`.
  - Desktop route card image transform is `scale(1.16)`.

## Known Issues

- `npm.cmd run check` was not rerun for this card-only pass. Earlier work found an existing unrelated type issue in `src/components/packages/PackageDetailContent.astro` line 51.
- Real-device QA is still recommended for final touch feel and fixed WhatsApp overlap.

## Next Step

Review `/packages/pick-up-drop` and `/packages/island-tour` on a real mobile device to confirm card rhythm, image crop, and action tap comfort with natural scrolling.
