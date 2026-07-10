# Home Hero Mobile Bug Report

Date: 2026-07-09
Branch: `codex/fix-ui-content-improvements`

## Scope

Checked the mobile Home hero dark/blank-looking state reported after the latest card refinements.

## Files Modified

- `src/components/home/Hero.astro`
- `src/styles/global.css`

## Implementation Notes

- Follow-up mobile-only check found the visible oval was caused by the newly added home package dot pagination, not the hero content itself.
- `.home-package-dots .swipe-pagination-dot::after` used `position: absolute`, while `.swipe-pagination-dot` was not positioned.
- Because the pseudo-element had no local positioning context, its hitbox/paint layer could escape and cover the hero area on mobile.
- Replaced the inline hero shade with `.home-hero-shade` so mobile overlay strength can be controlled safely.
- Made the first hero slide visible immediately.
- Adjusted mobile hero shade to keep text readable without making the visual feel blank.
- Locked swipe pagination dots with `position: relative`, `overflow: hidden`, and an explicit mobile dot height so the pseudo-element remains inside the small dot button.

## Verification

- `npm.cmd run build` passed.
- Browser QA at 390px confirmed:
  - First hero slide opacity is `1`.
  - Hero heading opacity is `1`.
  - Hero shade uses the lighter mobile gradient.
  - No horizontal overflow.
- Follow-up browser hit-test QA at 390px confirmed:
  - `elementFromPoint()` on hero title, lede, and CTA now returns the expected hero elements.
  - It no longer returns `.swipe-pagination-dot` over the hero area.
  - Dot pagination hitbox is constrained to 41px by 15px in its own section.

## Known Issues

- Real-device visual check is still recommended because image brightness can vary by mobile display.
