# Handoff: Global CSS Developer Map Comments

## Current State
- `src/styles/global.css` now contains a detailed section map and inline comments to help future developers find styling for cards, images, gallery, forms, booking, fleet, blog, FAQ, responsive rules, and mobile menu.
- No CSS property values were intentionally changed.

## Modified File
- `src/styles/global.css`

## Verification
- `git diff --check -- src/styles/global.css` completed successfully.
- `npm.cmd run build` completed successfully.

## Next Notes
- For future style work, use the section comments in `global.css` before adding new selectors.
- Prefer adding new comments near new CSS blocks so the file remains easy to navigate.
