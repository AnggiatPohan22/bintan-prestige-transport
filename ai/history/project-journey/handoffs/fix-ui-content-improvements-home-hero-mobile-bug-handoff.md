# Home Hero Mobile Bug Handoff

Date: 2026-07-09
Branch: `codex/fix-ui-content-improvements`

## Summary

The Home hero mobile oval overlay was checked and fixed. The root cause was the new home package dot pagination: its pseudo-element was absolutely positioned without a local positioning context, so it could escape its dot button and cover the hero area on mobile.

## Read Order For Next Session

1. `ai/reports/fix-ui-content-improvements-home-hero-mobile-bug-report.md`
2. `src/components/home/Hero.astro`
3. `src/styles/global.css`

## Files Changed

- Updated `src/components/home/Hero.astro`
- Updated `src/styles/global.css`
- Added this handoff and the matching report.

## Verification Done

- `npm.cmd run build`
- Browser QA at 390px:
  - First hero slide opacity is `1`.
  - Hero heading opacity is `1`.
  - Hero mobile shade is lighter.
  - No horizontal overflow.
- Follow-up mobile hit-test QA at 390px:
  - Hero points now resolve to the expected hero elements, including `H1`, lede, and `Book via WhatsApp`.
  - They no longer resolve to `.swipe-pagination-dot`.
  - Dot hitbox is constrained to 41px by 15px in the card section.

## Remaining QA

- Check the first load on a real mobile device.
- Confirm the hero image/text balance feels premium under real screen brightness.
