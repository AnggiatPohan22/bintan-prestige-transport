# Transfer Detail Hero Slideshow Report

Date: 2026-07-07
Branch: `codex/fix-ui-content-improvements`

## Scope

Updated all Taxi Transfer package detail heroes so the hero section is full-height, uses a lighter dark overlay, and supports multiple background images with smooth crossfade animation.

## Files Modified

- `src/components/packages/PackageDetailHero.astro`
- `src/data/routes.ts`
- `src/styles/global.css`

## Implementation Notes

- `PackageDetailHero.astro` now uses the shared `HeroBackdrop` slideshow component.
- Each Taxi Transfer route in `src/data/routes.ts` now has a `heroImages` array.
- If `heroImages` is empty or missing, the hero falls back to the existing `image` field.
- Taxi Transfer detail pages still hide the right-side summary card through `showSummaryCard={false}`.
- Hero overlay is lighter than before so vehicle background images remain visible.
- Hero section uses `100svh` so the first section feels full on desktop and mobile.
- Existing `prefers-reduced-motion` handling still applies through the shared `.hero-slide` CSS.

## Where To Add Images

- Add image files under `public/images/cars/`.
- Register them per package in `src/data/routes.ts` using the `heroImages` array.

Example:

```ts
heroImages: [
  "/images/cars/example-1.jpg",
  "/images/cars/example-2.jpg",
  "/images/cars/example-3.jpg",
],
```

## Current Taxi Hero Images

- Avanza/Innova:
  - `/images/cars/toyota-avanza.png`
  - `/images/cars/innova 2.jpg`
  - `/images/cars/Toyota-Innova_7.png`
- Hiace:
  - `/images/cars/toyota-hiace2.jpg`
  - `/images/cars/toyota-hiace.jpg`
  - `/images/cars/executive-van.jpg`
- Alphard:
  - `/images/cars/luxury-mpv2.jpg`
  - `/images/cars/luxury-mpv.jpg`
  - `/images/cars/toyota-alparhd.jpg`
- Luxury Sedan:
  - `/images/cars/premium-sedan2.jpg`
  - `/images/cars/premium-sedan.jpg`
  - `/images/cars/luxury-mpv2.jpg`

## Verification

- `npm run build` passed.
- Browser check on `/packages/pick-up-drop/package-transfer-avanza-innova`:
  - Desktop 1280x900 hero height: `900px`.
  - Mobile 390x844 hero height: `844px`.
  - Hero had 3 slideshow background images.
  - Taxi Transfer hero summary box count remained `0`.
  - No horizontal overflow found.

## Known Issues

- Browser visual QA was focused on the Avanza/Innova package as the representative Taxi Transfer detail hero.

## Next Step

Review all four Taxi Transfer detail pages visually and replace any placeholder vehicle image choices in `src/data/routes.ts` when final photo assets are available.
