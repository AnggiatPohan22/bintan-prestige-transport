# Fix UI Content Improvements Hero Spacing Report

Date: 2026-07-05
Branch: `codex/fix-ui-content-improvements`

## Summary

Refined the shared hero spacing system so all page heroes sit below the fixed transparent navbar with a calmer vertical rhythm. Homepage hero spacing now separates headline/CTA from the floating booking form more naturally, while page heroes use a shared responsive min-height strategy that avoids overly tall mobile hero blocks.

## Files Created

- `ai/reports/fix-ui-content-improvements-hero-spacing-report.md`
- `ai/handoffs/fix-ui-content-improvements-hero-spacing-handoff.md`

## Files Modified

- `src/components/about/AboutHero.astro`
- `src/components/contact/ContactHero.astro`
- `src/components/home/Hero.astro`
- `src/components/packages/PackageDetailHero.astro`
- `src/components/packages/TourHero.astro`
- `src/components/packages/TransferHero.astro`
- `src/styles/global.css`

## Implementation Notes

- Kept the fixed transparent navbar behavior unchanged.
- Added a reusable bottom spacing variable to `.site-hero-inner`.
- Added `.site-home-hero-inner` for homepage hero height rhythm.
- Added `.site-page-hero-inner` for reusable page hero height rhythm.
- Reduced the aggressive negative overlap on `.booking-float-shell`.
- Increased booking form bottom padding so the next section has more breathing room.
- Reduced gallery bleed at desktop breakpoints after responsive verification showed it could widen the document at 1280px.
- Lowered the mobile floating WhatsApp layer below the homepage booking form layer so it does not cover the form.
- Left routing, data, and content sources unchanged.

## Verification

- `cmd /c npm run build` passed.
- `git diff --check` passed for the scoped hero spacing files.
- Browser preview verification passed at:
  - Mobile: 375x812
  - Mobile: 390x844
  - Tablet: 768x900
  - Desktop: 1280x800
  - Desktop: 1440x900
- Verified:
  - Home hero heading clears the fixed navbar on mobile, tablet, and desktop.
  - Package hero heading clears the fixed navbar on mobile and desktop.
  - Home hero inner padding resolves to `140px` top / `56px` bottom on 375px mobile.
  - Home hero inner padding resolves to `148px` top / `96px` bottom on 1280px desktop.
  - Booking form remains within the page width and sits below the hero with a softer overlap.
  - Booking form layer resolves above the floating WhatsApp button on mobile.
  - No horizontal overflow at 375px, 390px, 768px, 1280px, or 1440px.

## Known Issues

- Existing unstaged changes outside this hero spacing scope were not modified.
