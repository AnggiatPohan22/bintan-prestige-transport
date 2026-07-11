# Astro Pre-Launch Audit Report

## 1. Executive Summary

- Audit date: 2026-07-11
- Active branch: `codex/ui-feature-upgrades`
- Latest commit: `8fd3443 Merge about contact upgrade`
- Astro version: `7.0.3` from `package-lock.json`
- Node version: `v22.20.0`
- Package manager: npm, lockfile version 3
- Deployment model: Astro static output, no adapter configured
- Overall readiness score: 58 / 100
- Overall launch decision: NOT READY FOR LAUNCH
- Blocker count: 3
- High issue count: 6
- Medium issue count: 9
- Low issue count: 5

The project architecture is suitable for static hosting, and the source code contains a solid SEO component, sitemap, robots endpoint, schema helpers, local content data, and static-first UI patterns. However, this exact workspace is not launch-ready because dependency verification is currently broken after `npm ci` failed, the working tree is not in a release-safe state, production env values still contain placeholders, and several customer trust/legal/SEO deployment items remain unfinished.

## 2. Project Architecture Summary

- Rendering model: Static Site Generation.
- Astro output mode: default static output. No `output: "server"` and no adapter in `astro.config.mjs`.
- Adapter: none.
- Build command: `npm.cmd run build`.
- Output directory: `dist`.
- Runtime requirement: no Node.js runtime required after build; Node.js is required only for install/build.
- CMS/API integration: none currently. Content is local TypeScript data under `src/data`.
- API routes: `src/pages/sitemap.xml.ts` and `src/pages/robots.txt.ts` generate static text/XML responses at build time.
- Middleware/sessions/authenticated areas: none found.
- Astro Actions/server islands: none found.
- Important dependencies: Astro, React integration, Tailwind CSS Vite plugin, Lucide React, Motion, TypeScript.
- Important structure:
  - `src/pages`: public route files and dynamic static paths.
  - `src/layouts/BaseLayout.astro`: shared page layout with SEO, JSON-LD, nav, footer, and floating WhatsApp.
  - `src/components`: shared UI, homepage sections, package sections, contact planner, blog components.
  - `src/data`: local content, SEO route list, schema, site/env values, packages, tours, transfer routes, FAQs.
  - `public/images`: static media assets.
  - `vercel.json` and `public/_headers`: hosting headers and caching.

## 3. Commands and Verification Results

| Command | Result | Status | Launch Impact |
|---|---|---|---|
| `git status --short --branch` | Branch is `codex/ui-feature-upgrades`; many modified/deleted/untracked files, including application files and image asset replacements | FAIL | BLOCKER: not release-safe until committed/merged from correct branch |
| `git branch --show-current` | `codex/ui-feature-upgrades` | PASS WITH WARNING | AGENTS says development should happen on `develop`; current branch is a feature branch |
| `git log --oneline -10` | Latest commit is `8fd3443 Merge about contact upgrade` | PASS | Useful release baseline, but does not include current working tree |
| `node --version` | `v22.20.0` | PASS | Works locally, but `package.json` has no `engines` field |
| `npm --version` | Failed because PowerShell blocked `npm.ps1` execution policy | FAIL | Use `npm.cmd` on Windows or set shell policy; document for local QA |
| `npm.cmd --version` | Command started but was interrupted by parallel dependency operations; npm version later shown in npm log as `10.9.3` | PASS WITH WARNING | Use `npm.cmd` explicitly in Windows docs |
| `npm.cmd ci` | Failed with `EPERM unlink ... lightningcss.win32-x64-msvc.node` and left `node_modules` incomplete | FAIL | BLOCKER for reproducible install verification in this workspace |
| `npm.cmd install` | Failed with `EPERM` reading npm cache under `AppData` | FAIL | Environment/cache access issue prevents dependency recovery |
| `npm.cmd install --cache .npm-cache --prefer-offline` | Failed with npm internal `Exit handler never called`; log shows registry requests blocked with `EACCES` | FAIL | Dependency install cannot currently be verified in this sandbox |
| `npm.cmd run build` after failed `npm ci` | Failed: `astro` is not recognized or module missing because local install is incomplete | FAIL | BLOCKER in current workspace verification state |
| `npm.cmd run check` after failed `npm ci` | Failed: `astro` is not recognized or module missing because local install is incomplete | FAIL | BLOCKER in current workspace verification state |
| `npx.cmd astro check` | Failed with `EACCES` fetching `https://registry.npmjs.org/astro` | FAIL | Network/registry restriction prevents fallback verification |
| `npm.cmd audit --cache .npm-cache` | Failed because npm audit endpoint could not be reached | UNKNOWN | Security dependency audit not verified |
| `npm.cmd outdated --cache .npm-cache` | Failed with `EACCES` fetching registry package metadata | UNKNOWN | Dependency freshness not verified |
| `npm.cmd run test` | Skipped: no `test` script in `package.json` | SKIPPED | Medium QA gap |
| `npm.cmd run lint` | Skipped: no `lint` script in `package.json` | SKIPPED | Medium QA gap |

Note: earlier before this audit task, `npm.cmd run check` and `npm.cmd run build` passed after the image/path cleanup work. During the required audit command sequence, `npm.cmd ci` failed and left local `node_modules` incomplete, so current verification status must be treated as failed until dependencies are restored cleanly.

## 4. Route Inventory

| Route | Type | Data Source | Build Status | SEO Status | Notes |
|---|---|---|---|---|---|
| `/` | Static page | Local components and `homeSchema` | Previously passed, currently blocked by dependency install | Has title, description, canonical, JSON-LD | Homepage is conversion-heavy with WhatsApp CTAs and FAQ |
| `/about` | Static page | Local components and breadcrumb schema | Previously passed, currently blocked | Has title, description, canonical, JSON-LD | Brand/trust content exists |
| `/contact` | Static page | Local components and contact planner script | Previously passed, currently blocked | Has title, description, canonical, JSON-LD | WhatsApp planner builds encoded message |
| `/blog` | Static page | `blogArticles` | Previously passed, currently blocked | Has title, description, canonical, OG from featured article | Includes client-side category/filter pagination logic |
| `/blog/[slug]` | Static dynamic pages, 6 slugs | `src/data/blog.ts` | Previously passed, currently blocked | Per-article title, description, canonical, OG image | WhatsApp CTA uses a hardcoded phone in article CTA |
| `/packages/pick-up-drop` | Static page | `routes`, package components | Previously passed, currently blocked | Has title, description, canonical, package schema | Transfer overview page |
| `/packages/pick-up-drop/[slug]` | Static dynamic pages, 3 slugs from `routes` | `src/data/routes.ts` | Previously passed, currently blocked | Per-route title, description, canonical, OG image | Booking form WhatsApp generation exists |
| `/packages/activities-packages` | Static page | `tours`, package components | Previously passed, currently blocked | Has title, description, canonical, package schema | Main activities page |
| `/packages/activities-packages/[slug]` | Static dynamic pages, 10 slugs from `tours` | `src/data/tours.ts` | Previously passed, currently blocked | Per-tour title, description, canonical, OG image | TouristTrip schema generated |
| `/packages/island-tour` | Static alias page | `tours`, package components | Previously passed, currently blocked | Canonical points to `/packages/activities-packages` | Potential duplicate/legacy alias |
| `/packages/island-tour/[slug]` | Static dynamic alias pages, 10 slugs | `tours` | Previously passed, currently blocked | Canonical and schema URL point to `/packages/activities-packages/[slug]` | Potential SEO duplicate and breadcrumb mismatch |
| `/sitemap.xml` | Static APIRoute | `seoPages`, `site.url` | Previously passed, currently blocked | Depends on final `PUBLIC_SITE_URL` | Uses current date for every `lastmod` |
| `/robots.txt` | Static APIRoute | `site.url` | Previously passed, currently blocked | Depends on final `PUBLIC_SITE_URL` | Allows all and links sitemap |
| `/404` | Missing | N/A | Not present | Missing | Custom 404 page should be added before production |
| `/privacy`, `/terms`, `/cancellation`, `/refund` | Missing legal pages | N/A | Not present | Missing | Customer trust/legal gap |

## 5. Environment Variable Inventory

| Variable Name | Public or Private | Used In | Production Required | Risk |
|---|---|---|---|---|
| `PUBLIC_SITE_URL` | Public | `astro.config.mjs`, `src/data/site.ts`, SEO/sitemap/robots/schema | Yes | Placeholder or missing value creates wrong canonical, sitemap, robots, OG URLs |
| `PUBLIC_SITE_NAME` | Public | `src/data/site.ts`, schema/footer/meta | Yes | Current fallback is generic `Travel Agent Private Taxi & Tour` |
| `PUBLIC_SITE_SHORT_NAME` | Public | title suffix, logo alt, footer | Yes | Current fallback is generic `Travel Agent` |
| `PUBLIC_SITE_TAGLINE` | Public | `src/data/site.ts` | Recommended | Generic fallback |
| `PUBLIC_SITE_DEFAULT_TITLE` | Public | `SEO.astro` via `site.ts` | Yes | Needs owner-approved production title |
| `PUBLIC_SITE_DESCRIPTION` | Public | meta/schema/footer | Yes | Needs final brand/service wording |
| `PUBLIC_LOGO_IMAGE` | Public | nav/footer via `site.logoImage` | Recommended | `.env.example` points to a missing file path |
| `PUBLIC_DEFAULT_OG_IMAGE` | Public | `SEO.astro` | Yes | `.env.example` points to a missing placeholder path |
| `PUBLIC_WHATSAPP_NUMBER` | Public | all WhatsApp CTAs/forms | Yes | Must be digits-only for `wa.me` |
| `PUBLIC_WHATSAPP_MESSAGE` | Public | nav/footer/floating/home WhatsApp defaults | Yes | Owner should approve message |
| `PUBLIC_CONTACT_EMAIL` | Public | footer/contact/schema | Yes | `.env.example` and fallback contain `hello@example.com` |
| `PUBLIC_CONTACT_PHONE` | Public | tel links/schema/contact | Yes | Must be owner verified |
| `PUBLIC_RESPONSE_WINDOW` | Public | footer/mobile menu/contact | Recommended | Must reflect actual service hours |
| `PUBLIC_BUSINESS_ADDRESS` | Public | schema/footer/contact | Yes | Owner should verify address/service-area wording |
| `PUBLIC_ADDRESS_LOCALITY` | Public | schema | Yes | Owner should verify |
| `PUBLIC_ADDRESS_REGION` | Public | schema | Yes | Owner should verify |
| `PUBLIC_ADDRESS_COUNTRY` | Public | schema | Yes | Owner should verify |
| `PUBLIC_GOOGLE_MAPS_URL` | Public | schema/contact | Recommended | Empty by default |
| `PUBLIC_SOCIAL_LINKS` | Public | schema/footer future support | Optional | Empty by default |
| `PUBLIC_HERO_IMAGE` | Public | `src/data/media.ts` | Optional | `.env.example` points to a placeholder file path |
| `PUBLIC_HERO_IMAGES` | Public | homepage hero slideshow | Optional | `.env.example` points to old/missing JPG/PNG paths |
| `PUBLIC_HERO_VIDEO` | Public | homepage `HeroBackdrop` video | Optional | Default points to `/videos/hero-luxury-drive.mp4`, but no public video was found |

## 6. Findings Summary

| ID | Severity | Area | Finding | Impact | Recommended Action |
|---|---|---|---|---|---|
| BUILD-001 | BLOCKER | Build | `npm ci` failed and current `node_modules` is incomplete, so build/check fail in this workspace | Cannot prove current source builds from a clean install | Restore dependencies in a clean shell/CI, rerun `npm ci`, `npm run check`, and `npm run build` |
| RELEASE-001 | BLOCKER | Release | Working tree is dirty with many modified/deleted/untracked app and image files on `codex/ui-feature-upgrades` | Deploying current branch would be uncontrolled and not aligned with AGENTS `develop` rule | Commit approved changes, merge to `develop`, verify clean status |
| CONFIG-001 | BLOCKER | Environment | Production domain and `.env.example` values still contain placeholders/missing asset paths | Wrong canonical/sitemap/robots/OG/contact data in production | Replace final env values and update `.env.example` to valid Bintan Prestige defaults |
| CONFIG-002 | HIGH | Environment | `.env` exists locally but cannot be inspected for launch values; `.env.example` is stale | Local build may differ from production values | Verify env values privately and update example without secrets |
| ROUTE-001 | MEDIUM | Routes | No custom 404 route exists | Poor UX and SEO for broken URLs | Add `src/pages/404.astro` |
| ROUTE-002 | HIGH | Routes/SEO | `/packages/island-tour` exists but canonical/schema/breadcrumbs point to `/packages/activities-packages` | Duplicate or confusing route behavior | Choose one canonical route or redirect alias |
| CONTENT-001 | HIGH | Content | Several owner-specific items are placeholders or need verification | Booking trust and customer clarity risk | Verify phone, email, address, pricing, inclusions, exclusions, policies |
| CONTENT-002 | MEDIUM | Content | Gallery alt text still says visual placeholder | Looks unfinished to auditors and assistive tech | Replace placeholder alt wording with real image descriptions |
| SEO-001 | HIGH | SEO | Production URL fallback is `example.com` and `.env.example` is `your-domain.com` | Search engines may index wrong URLs if env missing | Enforce required `PUBLIC_SITE_URL` before production |
| SEO-002 | MEDIUM | SEO | Sitemap `lastmod` uses build time for all pages | Less accurate search signals | Track content-specific last modified dates later |
| SEO-003 | MEDIUM | SEO | No favicon, web manifest, or app icons found in `public` | Weak brand/search/social polish | Add favicon/icon assets and head links |
| PERF-001 | MEDIUM | Performance | Hero and large visuals use CSS `background-image` without responsive srcset/preload/fetchpriority | LCP may suffer on mobile | Use image component/picture or preload critical hero image |
| PERF-002 | MEDIUM | Performance | Several WebP images remain 500 KB to 1.15 MB | Mobile bandwidth and LCP risk | Further compress hero/logo/gallery images |
| PERF-003 | HIGH | Performance | Default hero video path points to missing `/videos/hero-luxury-drive.mp4` | Browser may request a 404 video if env not overridden | Add video asset or default `PUBLIC_HERO_VIDEO` to empty |
| A11Y-001 | MEDIUM | Accessibility | Gallery lightbox has Escape close but no focus trap or focus return | Keyboard users may lose context | Add focus management for modal |
| A11Y-002 | MEDIUM | Accessibility | Some image assets are decorative backgrounds with role/aria labels but no true responsive image semantics | Screen reader and LCP tradeoff | Keep decorative only when appropriate; use real `img` for content images |
| SECURITY-001 | MEDIUM | Security | Basic headers exist, but no CSP or HSTS configuration | Hardening incomplete | Add CSP/HSTS after production domain and third-party needs are known |
| SECURITY-002 | LOW | Security | Dependency security audit could not run due registry/network errors | Vulnerability status unknown | Run `npm audit` in CI or machine with registry access |
| ANALYTICS-001 | MEDIUM | Analytics | No analytics, Search Console verification, or conversion tracking found | Cannot measure WhatsApp conversions or SEO performance | Add privacy-conscious analytics and click events |
| LEGAL-001 | HIGH | Legal/Trust | No Privacy Policy, Terms, Cancellation, Refund, or Cookie pages | Customer trust and compliance gap | Add owner-approved policy pages or footer links |
| QA-001 | MEDIUM | QA | No test or lint scripts exist | Regression detection is limited | Add lint/check/test scripts appropriate for Astro |
| DEPLOY-001 | MEDIUM | Hosting | No Node `engines` field or documented Node version in package | Host build version may drift | Pin recommended Node major version |
| CMS-001 | INFORMATIONAL | CMS/API | No CMS/API integration exists yet | Static rebuild only; no runtime content publishing | Future Laravel CMS should use build-time fetch and deploy webhooks |

## 7. Detailed Findings

### [BUILD-001] Clean install and verification currently fail

- Severity: BLOCKER
- Area: Build
- Evidence: `npm.cmd ci` failed with `EPERM unlink ... lightningcss.win32-x64-msvc.node`; follow-up build/check failed because `astro` was missing; `npx.cmd astro check` failed with registry `EACCES`.
- Files involved: `package.json`, `package-lock.json`, `node_modules` local state.
- Current behavior: current local dependency tree is incomplete after the failed install.
- Production risk: build reproducibility is not proven for this exact workspace.
- Recommended fix: restore dependencies in a clean terminal or CI environment; run `npm.cmd ci --cache .npm-cache` or a clean `npm.cmd ci` with sufficient permissions; rerun `npm.cmd run check` and `npm.cmd run build`.
- Verification method: clean `npm ci`, `npm run check`, `npm run build`, `npm audit`.
- Launch blocker: Yes.

### [RELEASE-001] Working tree is not release-safe

- Severity: BLOCKER
- Area: Release
- Evidence: `git status --short --branch` shows branch `codex/ui-feature-upgrades`, many modified source files, deleted old images, and new untracked WebP images. AGENTS says development must happen on `develop`.
- Files involved: many files under `src`, `public/images`, and `src/styles/global.css`.
- Current behavior: current deployable state is not committed and not on `develop`.
- Production risk: deployment could omit untracked images or include unintended changes.
- Recommended fix: review all changes, stage intentionally, commit after approval, merge to `develop`, and verify local/remote parity.
- Verification method: `git status --short --branch`, `git rev-list --left-right --count develop origin/develop`.
- Launch blocker: Yes.

### [CONFIG-001] Production environment placeholders remain

- Severity: BLOCKER
- Area: Environment/SEO
- Evidence: `astro.config.mjs:5` fallback is `https://example.com`; `.env.example:2` uses `https://your-domain.com`; `.env.example:8-9` point to missing image paths; `.env.example:14` uses `hello@example.com`; `src/data/site.ts:25` falls back to `https://example.com`.
- Files involved: `astro.config.mjs`, `.env.example`, `src/data/site.ts`.
- Current behavior: missing or stale production env creates placeholder URLs/contact data.
- Production risk: canonical, sitemap, robots, schema, OG, footer, and contact links can be wrong.
- Recommended fix: require final production env values before deploy and update `.env.example` to current valid paths.
- Verification method: build with final `PUBLIC_SITE_URL`, inspect `dist/sitemap.xml`, `dist/robots.txt`, page canonical and OG tags.
- Launch blocker: Yes.

### [ROUTE-002] Island tour alias has mismatched canonical and schema URLs

- Severity: HIGH
- Area: Routes/SEO
- Evidence: `src/pages/packages/island-tour.astro:28` uses canonical `/packages/activities-packages`; `src/pages/packages/island-tour/[slug].astro` sets breadcrumbs and schema URL to `/packages/activities-packages/[slug]`.
- Files involved: `src/pages/packages/island-tour.astro`, `src/pages/packages/island-tour/[slug].astro`.
- Current behavior: island-tour URLs build as separate pages but canonicalize to activities URLs.
- Production risk: duplicate content, confusing navigation, and inaccurate route identity.
- Recommended fix: either redirect `/packages/island-tour` to `/packages/activities-packages` or make island-tour canonical/schema/breadcrumbs consistent.
- Verification method: inspect built HTML canonical and sitemap after route decision.
- Launch blocker: No, but should be resolved before public SEO indexing.

### [PERF-003] Default hero video path is missing

- Severity: HIGH
- Area: Performance
- Evidence: `src/data/site.ts:48` default is `/videos/hero-luxury-drive.mp4`; `src/components/home/Hero.astro:9` passes `site.heroVideo`; `src/components/common/HeroBackdrop.astro:31-34` renders a video when a video value exists; no `public/videos` file was found.
- Files involved: `src/data/site.ts`, `src/components/home/Hero.astro`, `src/components/common/HeroBackdrop.astro`, `public/videos`.
- Current behavior: if env does not override `PUBLIC_HERO_VIDEO`, the homepage can request a missing video.
- Production risk: unnecessary 404 request and performance noise.
- Recommended fix: set fallback to empty, add the actual video, or make video rendering require an existing configured asset.
- Verification method: browser network panel or static asset scan.
- Launch blocker: No, but high priority.

### [CONTENT-001] Business data and policy content need owner verification

- Severity: HIGH
- Area: Content
- Evidence: `.env.example` has placeholder email/domain/logo/OG values; pricing and package terms are local data; no legal pages found.
- Files involved: `.env.example`, `src/data/site.ts`, `src/data/routes.ts`, `src/data/tours.ts`, `src/data/faqs.ts`.
- Current behavior: customer-facing data exists but still requires owner approval.
- Production risk: booking disputes, trust loss, wrong contact channels.
- Recommended fix: owner verifies all prices, inclusions, exclusions, pickup zones, phone/email, address, response hours, and legal policy language.
- Verification method: signed-off content checklist before deploy.
- Launch blocker: No, but high risk.

### [LEGAL-001] Legal and trust pages are missing

- Severity: HIGH
- Area: Legal/Trust
- Evidence: no `src/pages/privacy.astro`, `terms.astro`, `cancellation.astro`, `refund.astro`, or cookie policy route found.
- Files involved: `src/pages`, footer/contact navigation.
- Current behavior: customer has no formal policy pages.
- Production risk: lower customer trust and potential compliance gap.
- Recommended fix: add owner-approved legal/trust pages and footer links.
- Verification method: route and footer link smoke tests.
- Launch blocker: No, but strongly recommended before public launch.

### [PERF-001] Hero images are CSS backgrounds without responsive image controls

- Severity: MEDIUM
- Area: Performance
- Evidence: `src/components/common/HeroBackdrop.astro:24` renders slideshow images through inline CSS `background-image`.
- Files involved: `HeroBackdrop.astro`, hero components.
- Current behavior: browser cannot use `srcset`, `sizes`, `fetchpriority`, or intrinsic dimensions for hero backgrounds.
- Production risk: LCP is harder to optimize.
- Recommended fix: convert the first hero image to an actual `img`/`picture` or Astro image pipeline later; keep decorative layers as backgrounds.
- Verification method: Lighthouse or WebPageTest after deployment.
- Launch blocker: No.

### [A11Y-001] Gallery modal lacks full focus management

- Severity: MEDIUM
- Area: Accessibility
- Evidence: `src/components/common/GalleryGrid.astro` handles Escape and close buttons but does not trap focus or restore focus to trigger.
- Files involved: `GalleryGrid.astro`.
- Current behavior: keyboard users can open/close but focus behavior is incomplete.
- Production risk: accessibility friction.
- Recommended fix: store the opener, focus dialog on open, trap Tab, restore focus on close.
- Verification method: keyboard-only modal test.
- Launch blocker: No.

### [ANALYTICS-001] No analytics or conversion tracking

- Severity: MEDIUM
- Area: Analytics
- Evidence: no analytics scripts or event tracking found; WhatsApp links are present across components.
- Files involved: `BaseLayout.astro`, WhatsApp/contact components.
- Current behavior: business cannot measure WhatsApp clicks, phone clicks, package views, or conversion funnels.
- Production risk: poor post-launch visibility.
- Recommended fix: add privacy-conscious analytics and explicit click events after owner approval.
- Verification method: analytics debug view and network inspection.
- Launch blocker: No.

### [SECURITY-001] Security headers are partial

- Severity: MEDIUM
- Area: Security
- Evidence: `public/_headers` and `vercel.json` include `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, and `Permissions-Policy`; no CSP or HSTS.
- Files involved: `public/_headers`, `vercel.json`.
- Current behavior: basic headers exist but hardening is incomplete.
- Production risk: avoidable security exposure.
- Recommended fix: add CSP and HSTS after confirming domain and third-party assets.
- Verification method: securityheaders.com or curl headers.
- Launch blocker: No.

## 8. What Is Already Production-Ready

- Static-first architecture is appropriate for the current site.
- `BaseLayout` includes SEO, JSON-LD, navigation, footer, and floating WhatsApp.
- Sitemap and robots routes exist.
- Security/cache headers exist for Vercel and generic static `_headers` hosts.
- Local content structure is simple and does not require runtime CMS/API.
- WhatsApp URLs use `encodeURIComponent` in most CTA/form flows.
- Contact planner and booking forms generate structured WhatsApp messages.
- `target="_blank"` links reviewed generally include `rel="noreferrer"`.
- Images have been converted toward WebP in current working tree and source references resolve to existing files.
- Reduced-motion CSS exists globally.

## 9. Missing Items Before Launch

### Must Fix Before Launch

- Restore clean dependency install and successful current `npm ci`, `npm run check`, `npm run build`.
- Resolve dirty working tree and release from `develop`.
- Replace placeholder production env values and verify canonical/sitemap/robots/OG output.

### Strongly Recommended Before Launch

- Resolve `/packages/island-tour` alias/canonical strategy.
- Add custom 404 page.
- Add Privacy Policy, Terms, Cancellation/Refund, and customer policy links.
- Fix missing default hero video or disable default video.
- Add favicon and social sharing assets.
- Verify all prices, inclusions, exclusions, pickup zones, and activity conditions.
- Add analytics and Search Console setup.

### Can Be Completed After Launch

- Improve responsive hero image strategy with `picture`/srcset.
- Add lint/test scripts.
- Add CSP/HSTS hardening.
- Add CMS webhook flow when Laravel CMS integration exists.

## 10. Recommended Hosting and Deployment Model

- Recommended hosting type: static hosting with CI build.
- Recommended provider: Cloudflare Pages or Vercel.
- Why: project is static SSG, no adapter, no runtime server, existing `vercel.json` and `_headers` already map well to static/CDN deployment.
- Build command: `npm.cmd run build` locally on Windows; `npm run build` in Linux CI.
- Install command: `npm ci`.
- Output directory: `dist`.
- Node version: use a pinned Node 22 major or a known Astro-supported LTS in hosting settings.
- Adapter requirement: none.
- Required env: all `PUBLIC_*` values listed in section 5.
- Domain setup: set final non-placeholder production domain in `PUBLIC_SITE_URL`.
- SSL: required; use provider-managed SSL.
- Redirects: configure HTTP to HTTPS and choose www or non-www canonical.
- Headers: keep immutable cache for `/_astro`, medium cache for `/images`, security headers; add CSP/HSTS after domain finalization.
- CMS rebuild flow: not required now because no CMS/API exists. Future Laravel CMS should publish content, trigger static rebuild through deploy webhook, and promote the new static build.
- Rollback method: provider deployment rollback plus Git tag before launch.

## 11. Step-by-Step Online Deployment Guide

### Step 1 - Prepare the Git Branch

Review current changes, commit approved work, merge into `develop`, and verify `git status --short --branch` is clean.

### Step 2 - Create a Production Backup or Tag

Create a Git tag such as `pre-launch-YYYY-MM-DD` before deployment.

### Step 3 - Configure Production Environment Variables

Set final values for `PUBLIC_SITE_URL`, brand name, WhatsApp, phone, email, address, response window, social links, map URL, logo, OG image, hero images, and optional video.

### Step 4 - Run the Final Local Production Build

Run `npm ci`, `npm run check`, `npm run build`, and inspect `dist`.

### Step 5 - Configure the Hosting Project

Use static output. Build command: `npm run build`. Output directory: `dist`.

### Step 6 - Configure Domain and DNS

Point the chosen domain to the hosting provider. Decide `www` versus non-`www`.

### Step 7 - Enable SSL and Redirects

Enable provider SSL. Force HTTP to HTTPS. Add canonical domain redirects.

### Step 8 - Configure CMS or API Integration

No CMS/API exists now. Future CMS flow should be build-time fetch plus deploy webhook, not runtime request dependency, unless architecture changes.

### Step 9 - Configure Sitemap, robots.txt, and Search Console

After deployment, verify `/sitemap.xml` and `/robots.txt` use the final domain, then submit sitemap in Google Search Console.

### Step 10 - Deploy

Deploy from `develop` or a production release branch after all blockers pass.

### Step 11 - Run Post-Deployment Smoke Tests

Test routes, nav, images, WhatsApp links, contact form/planner, sitemap, robots, canonical, mobile layout, and browser console.

### Step 12 - Configure Analytics and Monitoring

Add privacy-conscious analytics, WhatsApp click tracking, Search Console, uptime monitoring, and error monitoring if desired.

### Step 13 - Verify Rollback Procedure

Confirm previous deployment can be restored from the hosting dashboard and Git tag.

## 12. Post-Launch Smoke Test Checklist

- [ ] Homepage
- [ ] All navigation
- [ ] Mobile menu
- [ ] Every public route
- [ ] Dynamic pages
- [ ] Images
- [ ] CMS content, when CMS exists
- [ ] WhatsApp links
- [ ] Booking form
- [ ] Phone link
- [ ] Email link
- [ ] Contact form/planner
- [ ] 404 page
- [ ] Sitemap
- [ ] Robots.txt
- [ ] Canonical URL
- [ ] Open Graph
- [ ] HTTPS
- [ ] Redirects
- [ ] Analytics
- [ ] Mobile layout
- [ ] Browser console
- [ ] API network errors
- [ ] Core Web Vitals
- [ ] Search Console submission

## 13. Recommended Remediation Roadmap

### STEP 1 - Launch Blockers

- Objective: make release state buildable and clean.
- Findings covered: BUILD-001, RELEASE-001, CONFIG-001.
- Files likely involved: package files, env configuration, current changed files.
- Expected result: clean branch, clean install, check/build pass.
- Commands: `npm ci`, `npm run check`, `npm run build`, `git status`.
- Dependency: none.

### STEP 2 - Functional and Content Readiness

- Objective: verify business data, routes, pricing, policies.
- Findings covered: CONTENT-001, ROUTE-001, ROUTE-002, LEGAL-001.
- Files likely involved: `src/data`, `src/pages`, footer/nav components.
- Expected result: no placeholder or owner-unverified launch content.
- Commands: `rg placeholder`, route smoke test.
- Dependency: STEP 1.

### STEP 3 - SEO and Accessibility

- Objective: correct canonical strategy, add favicon, improve modal accessibility.
- Findings covered: SEO-001, SEO-002, SEO-003, A11Y-001, A11Y-002.
- Files likely involved: SEO, sitemap, island-tour pages, GalleryGrid.
- Expected result: cleaner indexing and keyboard support.
- Commands: build, inspect dist HTML, keyboard test.
- Dependency: STEP 2.

### STEP 4 - Performance and Animation

- Objective: improve LCP and remove missing video request.
- Findings covered: PERF-001, PERF-002, PERF-003.
- Files likely involved: HeroBackdrop, media data, public assets, global CSS.
- Expected result: lower LCP risk and no missing media requests.
- Commands: build, Lighthouse/WebPageTest after deploy.
- Dependency: STEP 3.

### STEP 5 - Security and Environment

- Objective: harden headers and dependency audit.
- Findings covered: SECURITY-001, SECURITY-002, CONFIG-002.
- Files likely involved: `vercel.json`, `public/_headers`, CI env.
- Expected result: verified dependency audit and stronger headers.
- Commands: `npm audit`, header scan.
- Dependency: STEP 1.

### STEP 6 - Hosting and Deployment

- Objective: deploy static build with final env and domain.
- Findings covered: DEPLOY-001.
- Files likely involved: hosting config, env dashboard, DNS.
- Expected result: stable static deployment.
- Commands: provider build, smoke tests.
- Dependency: STEPS 1-5.

### STEP 7 - Post-Launch Verification

- Objective: monitor real production.
- Findings covered: ANALYTICS-001, CMS-001.
- Files likely involved: analytics integration, Search Console.
- Expected result: owner can observe traffic and conversion behavior.
- Commands: analytics debug, Search Console URL inspection.
- Dependency: STEP 6.

## 14. Final Launch Checklist

### Build

- [ ] Clean `npm ci`
- [ ] Clean `npm run check`
- [ ] Clean `npm run build`
- [ ] Clean Git status on release branch

### Content

- [ ] Final brand name
- [ ] Final phone/WhatsApp/email
- [ ] Final address/service area
- [ ] Verified prices
- [ ] Verified inclusions/exclusions

### UI/UX

- [ ] Mobile nav tested
- [ ] Forms tested
- [ ] Gallery tested
- [ ] Floating WhatsApp tested

### SEO

- [ ] Final domain in canonical
- [ ] Sitemap final URL
- [ ] Robots final URL
- [ ] Favicon/icons
- [ ] OG image

### Accessibility

- [ ] Keyboard navigation
- [ ] Modal focus
- [ ] Form labels
- [ ] Image alt text
- [ ] Reduced motion

### Performance

- [ ] Hero LCP checked
- [ ] Images compressed
- [ ] Missing video fixed
- [ ] Bundle sizes checked

### Security

- [ ] Security headers
- [ ] Dependency audit
- [ ] No secrets tracked
- [ ] External links safe

### CMS/API

- [ ] Not applicable for current static site
- [ ] Future CMS webhook plan documented

### Hosting

- [ ] Static host configured
- [ ] Build command set
- [ ] Output directory set
- [ ] Node version set

### Domain

- [ ] DNS configured
- [ ] SSL active
- [ ] Redirects active

### Analytics

- [ ] Search Console
- [ ] WhatsApp click tracking
- [ ] Phone/email click tracking

### Legal

- [ ] Privacy Policy
- [ ] Terms
- [ ] Cancellation/Refund
- [ ] Customer-facing booking policies

### Post-launch verification

- [ ] Smoke test complete
- [ ] Rollback verified
- [ ] Core Web Vitals monitored

## 15. Final Recommendation

The project should not be launched now from this workspace. The safest next task is to restore a clean dependency installation and verify `npm ci`, `npm run check`, and `npm run build` on a clean release branch, then finalize production environment values and commit/merge the current approved changes into `develop`.

Recommended hosting approach: static hosting on Cloudflare Pages or Vercel, using `npm ci`, `npm run build`, and output directory `dist`. Hostinger static hosting can work if `dist` is uploaded, but Cloudflare Pages/Vercel better match the existing static build plus preview/rollback workflow.
