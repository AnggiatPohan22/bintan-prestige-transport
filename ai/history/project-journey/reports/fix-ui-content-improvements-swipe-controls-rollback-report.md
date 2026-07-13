# Swipe Controls Rollback Report

Date: 2026-07-07
Branch: `codex/fix-ui-content-improvements`

## Scope

Rolled back the expanded swipe controls that were added to other sections after the initial Taxi Transfer package detail implementation. This keeps the page from having conflicting swipe behavior and removes the added controls from the gallery as requested.

## Rolled Back From

- Home gallery in `src/components/common/GalleryGrid.astro`
- Home Signature Services cards in `src/components/home/ServiceCards.astro`
- Home Featured Routes cards in `src/components/home/RouteHighlights.astro`
- Blog Latest Guides cards in `src/pages/blog.astro`
- Generic blog card marker in `src/components/blog/BlogCard.astro`

## Still Active

- Taxi Transfer package detail cards only:
  - `src/components/packages/PackageDetailContent.astro`
  - Enabled from `src/pages/packages/pick-up-drop/[slug].astro`
  - Uses `src/components/common/SwipeControls.astro`

## Files Modified In This Rollback

- `src/components/common/GalleryGrid.astro`
- `src/components/home/ServiceCards.astro`
- `src/components/home/RouteHighlights.astro`
- `src/components/blog/BlogCard.astro`
- `src/pages/blog.astro`

## Verification

- `npm.cmd run build` passed.
- `git diff --check` passed for the relevant files.
- Search verification confirms `data-swipe-carousel` remains only in:
  - `src/components/packages/PackageDetailContent.astro`
  - `src/components/common/SwipeControls.astro`

## Manual QA Checklist

- Home `/`
  - Gallery should not show added dots/arrows.
  - Signature Services should not show added dots/arrows.
  - Featured Routes should not show added dots/arrows.

- Blog `/blog`
  - Latest Guides should not show added dots/arrows from `SwipeControls`.
  - Existing article filter and pagination should still work.

- Taxi Transfer detail pages
  - Package detail cards can still show mobile dots/arrows where there are multiple package detail cards.
  - Luxury Sedan still has one package detail card, so controls should remain hidden.
