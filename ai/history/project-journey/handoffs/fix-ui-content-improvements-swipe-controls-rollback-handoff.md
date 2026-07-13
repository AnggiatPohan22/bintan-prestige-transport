# Swipe Controls Rollback Handoff

Date: 2026-07-07
Branch: `codex/fix-ui-content-improvements`

## Summary

The expanded swipe controls were rolled back from the sections that could conflict with existing responsive behavior. Gallery controls were removed completely per request.

## Current Active Swipe Control Scope

Only Taxi Transfer package detail cards still use the reusable swipe indicator:

- `src/components/packages/PackageDetailContent.astro`
- `src/pages/packages/pick-up-drop/[slug].astro`
- `src/components/common/SwipeControls.astro`
- `src/styles/global.css`

## Removed From These Sections

- `src/components/common/GalleryGrid.astro`
  - Removed `SwipeControls` import.
  - Removed `data-swipe-carousel`, `data-swipe-track`, and `data-swipe-item`.
  - Gallery keeps its original gallery drag/lightbox behavior only.

- `src/components/home/ServiceCards.astro`
  - Removed `SwipeControls` import and wrapper.
  - Removed `data-swipe-*` markers.

- `src/components/home/RouteHighlights.astro`
  - Removed `SwipeControls` import and wrapper.
  - Removed `data-swipe-*` markers.

- `src/components/blog/BlogCard.astro`
  - Removed generic `data-swipe-item` marker.

- `src/pages/blog.astro`
  - Removed `SwipeControls` import and Latest Guides wrapper.
  - Removed `swipe-carousel:update` dispatch.

## Verification Done

- `npm.cmd run build` passed.
- `git diff --check` passed.
- `rg` check confirms only package detail still has `data-swipe-carousel` usage.

## Manual Check Paths

- `http://127.0.0.1:4321/`
- `http://127.0.0.1:4321/blog/`
- `http://127.0.0.1:4321/packages/pick-up-drop/package-transfer-avanza-innova/`
- `http://127.0.0.1:4321/packages/pick-up-drop/package-transfer-hiace/`
- `http://127.0.0.1:4321/packages/pick-up-drop/package-transfer-alphard/`
- `http://127.0.0.1:4321/packages/pick-up-drop/package-transfer-luxury-sedan/`

## Notes

- Do not reapply `SwipeControls` to gallery without a dedicated visual audit, because the gallery already has custom drag, active-card, and lightbox behavior.
- If future sections need indicators, audit each section first and avoid applying generic controls to sections with existing carousel/drag logic.
