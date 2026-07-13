# Swipe Controls Handoff

Date: 2026-07-07
Branch: `codex/fix-ui-content-improvements`

## What Changed

Added reusable swipe pagination controls for card sections that already scroll horizontally on mobile or tablet. The UI follows the requested reference: active gold pill dot, muted inactive dots, and circular previous/next buttons.

## Main File To Check

- `src/components/common/SwipeControls.astro`

This is the reusable component for dots/arrows and the shared JavaScript behavior. It looks for:

- `data-swipe-carousel`
- `data-swipe-track`
- `data-swipe-item`
- `data-swipe-controls`

## Applied Locations

- `src/components/home/ServiceCards.astro`
  - Section: Home `Signature services`
  - Controls: tablet/mobile

- `src/components/home/RouteHighlights.astro`
  - Section: Home `Featured routes`
  - Controls: tablet/mobile

- `src/components/common/GalleryGrid.astro`
  - Section: Home gallery
  - Controls: tablet/mobile
  - Uses `data-swipe-align="center"` because gallery cards snap around the center.

- `src/pages/blog.astro`
  - Section: Blog `Latest guides`
  - Controls: mobile only
  - Sends `swipe-carousel:update` after filter/pagination changes.

- `src/components/blog/BlogCard.astro`
  - Adds `data-swipe-item` for non-featured blog cards.

- `src/components/packages/PackageDetailContent.astro`
  - Section: Taxi transfer package detail cards
  - Controls: mobile only
  - Controlled by prop `enableMobileSwipeControls`.

- `src/pages/packages/pick-up-drop/[slug].astro`
  - Enables `enableMobileSwipeControls` for the 4 taxi transfer package pages.

- `src/styles/global.css`
  - Styles for `.swipe-pagination-*`
  - Breakpoints:
    - `data-swipe-breakpoint="tablet"` visible at `max-width: 1023px`
    - `data-swipe-breakpoint="mobile"` visible at `max-width: 767px`

## Manual QA Paths

- `http://127.0.0.1:4321/`
- `http://127.0.0.1:4321/blog/`
- `http://127.0.0.1:4321/packages/pick-up-drop/package-transfer-avanza-innova/`
- `http://127.0.0.1:4321/packages/pick-up-drop/package-transfer-hiace/`
- `http://127.0.0.1:4321/packages/pick-up-drop/package-transfer-alphard/`
- `http://127.0.0.1:4321/packages/pick-up-drop/package-transfer-luxury-sedan/`

## Verification Done

- `npm.cmd run build` passed.
- `git diff --check` passed for the updated files.
- Static build contains the expected swipe markup on home, blog, and taxi transfer package detail pages.

## Notes For Next Session

- If another section later becomes horizontal-scroll on mobile/tablet, wrap the card row with `data-swipe-carousel`, mark the row with `data-swipe-track`, mark each card with `data-swipe-item`, then render `SwipeControls`.
- Do not add controls to desktop-only grids unless the section is intentionally swipeable.
- Browser visual QA should still be done manually because the in-app browser blocked local/file navigation during this run.
