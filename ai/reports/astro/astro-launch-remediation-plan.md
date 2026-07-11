# Astro Launch Remediation Plan

## Current Launch Status

Current status: NOT READY FOR LAUNCH.

The project is architecturally suitable for static deployment, but the current workspace has release blockers: dependency install/build verification is broken after `npm ci` failed, the working tree is dirty on `codex/ui-feature-upgrades`, production env placeholders remain, and owner-verified launch content/legal items are incomplete.

## Prioritized Findings

1. BUILD-001 - Clean install/build/check currently fail in this workspace.
2. RELEASE-001 - Dirty working tree and feature branch are not release-safe.
3. CONFIG-001 - Production env placeholders can generate wrong canonical, sitemap, robots, OG, and contact data.
4. ROUTE-002 - Island tour alias/canonical strategy is inconsistent.
5. PERF-003 - Default hero video path points to a missing asset.
6. CONTENT-001 and LEGAL-001 - Business data and policy pages need owner verification.
7. A11Y-001 and PERF-001 - Gallery modal and hero image strategy need post-blocker polish.

## STEP 1 - Critical Launch Blockers

- Scope: restore clean dependency install, build verification, and release-safe Git state.
- Exact findings covered: BUILD-001, RELEASE-001.
- Files expected to be reviewed or changed:
  - `package.json`
  - `package-lock.json`
  - current modified files under `src`
  - current deleted/untracked files under `public/images`
- Guardrails:
  - Do not deploy from dirty working tree.
  - Do not run dependency upgrades.
  - Do not use `npm audit fix`.
  - Do not commit until owner approves the staged scope.
- Test commands:
  - `npm.cmd ci`
  - `npm.cmd run check`
  - `npm.cmd run build`
  - `git status --short --branch`
- Acceptance criteria:
  - Clean install succeeds.
  - Check/build pass.
  - All intended image replacements are tracked.
  - Release branch is clean and based on `develop`.
- Rollback considerations:
  - If dependency install remains broken locally, use a fresh clone or CI runner.
  - Preserve current work before cleanup by committing only after owner approval or creating a local backup branch.

## STEP 2 - Production Configuration

- Scope: finalize production identity and environment configuration.
- Exact findings covered: CONFIG-001, CONFIG-002, SEO-001, DEPLOY-001.
- Files expected to be reviewed or changed:
  - `.env.example`
  - `astro.config.mjs`
  - `src/data/site.ts`
  - hosting provider env dashboard
- Guardrails:
  - Do not expose secret values.
  - Keep only `PUBLIC_` values for data that is safe in browser HTML.
  - Use final owner-provided production domain.
- Test commands:
  - `npm.cmd run build`
  - inspect `dist/sitemap.xml`
  - inspect `dist/robots.txt`
  - inspect built page canonical and OG tags
- Acceptance criteria:
  - No `example.com`, `your-domain.com`, missing logo path, or `hello@example.com` appears in production output.
  - Sitemap and robots use final production domain.
  - `.env.example` documents valid variable names and safe placeholders only.
- Rollback considerations:
  - Keep previous env values in hosting dashboard history if provider supports it.

## STEP 3 - Functional and Content Fixes

- Scope: resolve route duplication, customer content, and legal/trust readiness.
- Exact findings covered: ROUTE-001, ROUTE-002, CONTENT-001, CONTENT-002, LEGAL-001.
- Files expected to be reviewed or changed:
  - `src/pages/packages/island-tour.astro`
  - `src/pages/packages/island-tour/[slug].astro`
  - `src/pages/404.astro`
  - `src/pages/privacy.astro`
  - `src/pages/terms.astro`
  - `src/data/routes.ts`
  - `src/data/tours.ts`
  - `src/data/gallery.ts`
  - footer/navigation components
- Guardrails:
  - Do not invent legal or business claims.
  - Owner must verify prices, inclusions, exclusions, pickup zones, cancellation/refund terms, and contact details.
  - Choose one canonical route strategy for island tour/activities.
- Test commands:
  - `npm.cmd run check`
  - `npm.cmd run build`
  - route smoke test in preview
  - `rg "placeholder|example.com|your-domain|hello@example" src .env.example`
- Acceptance criteria:
  - 404 route exists.
  - Legal/trust pages exist or owner-approved footer policy links exist.
  - Island tour canonical strategy is consistent.
  - No unfinished placeholder copy remains in customer-facing content.
- Rollback considerations:
  - Legal pages can be added as simple static pages and removed safely if owner changes wording.

## STEP 4 - SEO and Accessibility

- Scope: tighten indexability, brand assets, structured data, and keyboard behavior.
- Exact findings covered: SEO-002, SEO-003, A11Y-001, A11Y-002.
- Files expected to be reviewed or changed:
  - `src/components/common/SEO.astro`
  - `src/pages/sitemap.xml.ts`
  - `src/components/common/GalleryGrid.astro`
  - `src/layouts/BaseLayout.astro`
  - `public/favicon*`
  - `public/site.webmanifest`
- Guardrails:
  - Do not add fake ratings/reviews.
  - Keep schema claims supported by actual content.
  - Keep modal keyboard behavior simple and robust.
- Test commands:
  - `npm.cmd run check`
  - `npm.cmd run build`
  - keyboard-only test for gallery
  - inspect built head tags
- Acceptance criteria:
  - Favicon/icons exist and are linked.
  - Gallery modal traps/restores focus.
  - Sitemap/canonical/schema are consistent.
  - No unsupported schema claims.
- Rollback considerations:
  - Keep accessibility changes isolated to gallery/lightbox if possible.

## STEP 5 - Performance and Animation

- Scope: reduce LCP/media risk before adding more animation.
- Exact findings covered: PERF-001, PERF-002, PERF-003, ANIM-related source risks.
- Files expected to be reviewed or changed:
  - `src/components/common/HeroBackdrop.astro`
  - `src/components/home/Hero.astro`
  - `src/data/media.ts`
  - `src/data/site.ts`
  - `public/images`
  - `public/videos`
  - `src/styles/global.css`
- Guardrails:
  - Animate only `opacity`, `transform`, `scale`, `x`, or `y`.
  - Respect reduced motion.
  - Do not add heavy animation libraries.
  - Avoid adding React hydration for purely decorative motion.
- Test commands:
  - `npm.cmd run build`
  - inspect generated `_astro` assets
  - Lighthouse/WebPageTest after deployment
  - browser network panel for missing media
- Acceptance criteria:
  - No missing video/image requests.
  - Hero media is compressed and LCP-conscious.
  - Bundle size remains within current range unless intentionally justified.
- Rollback considerations:
  - Keep image/hero changes scoped and reversible.

## STEP 6 - Security and Hosting Configuration

- Scope: harden static hosting and verify dependency security.
- Exact findings covered: SECURITY-001, SECURITY-002, DEPLOY-001.
- Files expected to be reviewed or changed:
  - `vercel.json`
  - `public/_headers`
  - `package.json`
  - hosting project settings
- Guardrails:
  - Do not add CSP until third-party script/image needs are known.
  - Do not run automatic audit fixes.
  - Keep static hosting unless architecture changes.
- Test commands:
  - `npm.cmd audit`
  - `npm.cmd outdated`
  - provider preview deploy
  - header inspection with curl or browser devtools
- Acceptance criteria:
  - Dependency audit result is known.
  - Security headers are present in production.
  - Node version is documented/pinned in hosting.
- Rollback considerations:
  - CSP/HSTS should be introduced cautiously, ideally in preview first.

## STEP 7 - Deployment and Post-Launch Verification

- Scope: deploy static build and verify real production behavior.
- Exact findings covered: ANALYTICS-001, CMS-001, remaining deployment checklist.
- Files expected to be reviewed or changed:
  - hosting env settings
  - Search Console
  - analytics integration files if added
  - `ai/deployment/production-launch-checklist.md`
- Guardrails:
  - Deploy only from approved branch.
  - Do not deploy with placeholder env values.
  - Do not enable analytics without owner approval.
- Test commands:
  - provider production build
  - post-deployment smoke checklist
  - Search Console URL inspection
  - analytics debug view
- Acceptance criteria:
  - Homepage and all public routes return 200.
  - 404 route works.
  - WhatsApp/phone/email links work.
  - Sitemap submitted.
  - Rollback path verified.
- Rollback considerations:
  - Use provider deployment rollback plus Git tag.
