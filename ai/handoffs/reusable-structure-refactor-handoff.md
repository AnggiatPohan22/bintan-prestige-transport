# Reusable Structure Refactor Handoff

## Current State

The project has been reorganized locally on `develop` into a reusable frontend base-template structure. No remote push or Cloudflare deployment has been performed.

## Read Order For Next Session

1. `AGENTS.md`
2. `ai/reports/reusable-structure-refactor-report.md`
3. `ai/handoffs/reusable-structure-refactor-handoff.md`
4. `src/styles/global.css`
5. `tsconfig.json`

## Rollback Reference

- Safe rollback tag: `rollback/pre-structure-refactor-20260712`
- Safe rollback branch: `backup/pre-structure-refactor-20260712`
- Safe rollback commit: `09b07f2`

Use these only if the structure refactor is rejected or causes severe local breakage. Review newer local work before resetting or switching.

## New Source Layout

```txt
src/
├── components/
│   ├── core/
│   ├── site/
│   ├── features/
│   │   ├── animations/
│   │   ├── blog/
│   │   ├── booking/
│   │   ├── packages/
│   │   └── whatsapp/
│   └── sections/
│       ├── about/
│       ├── contact/
│       ├── home/
│       └── packages/
├── data/
├── layouts/
├── pages/
└── styles/
    ├── global.css
    ├── tokens.css
    ├── typography.css
    ├── utilities.css
    ├── components.css
    ├── sections.css
    └── themes/
```

## Import Convention

Prefer aliases for future work:

- `@components/...`
- `@data/...`
- `@layouts/...`
- `@styles/...`

Avoid adding new deep relative imports such as `../../../components/...`.

## Verification Completed

- `npm.cmd run check`
- `npm.cmd run build`

Both passed locally after the CSS split and import rewrite.

## Next Step

Review the folder structure and diff locally. If accepted, commit the structure refactor on `develop`. Keep it local until a separate decision is made to push or deploy.
