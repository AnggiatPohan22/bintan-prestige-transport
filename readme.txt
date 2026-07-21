Bintan Prestige Transport - Website Frontend
Version: 1.0.0

Bintan Prestige Transport is a production-ready static frontend for a premium private taxi, transfer, and Bintan activity package website. The project is built to present the business clearly on desktop and mobile, support SEO-focused public pages, and guide visitors into a WhatsApp-first booking flow without requiring a backend booking engine.

This repository contains the public website foundation for Bintan Prestige Transport. It is not an admin dashboard, database application, or full React single-page app. The current release focuses on a fast, static-first customer-facing experience that can be deployed to Cloudflare Pages or another static hosting platform.

Project Goals

- Present Bintan Prestige Transport as a premium private transport and activity concierge brand.
- Provide clear public pages for taxi transfer packages, activity packages, blog articles, company information, and contact details.
- Keep the site fast, SEO-friendly, mobile-first, and simple to maintain.
- Use structured local data now, while keeping the project ready for a future Laravel CMS API integration.
- Keep booking lightweight by generating WhatsApp messages from package, route, and contact forms.

Main Features

1. Homepage

- Editorial luxury homepage for private taxi, transfers, and activity planning.
- Hero section with strong brand positioning and direct WhatsApp CTA.
- Signature service cards for taxi transfer and activities.
- Featured Routes section showing a rotating mix of taxi and activity packages.
- Concierge flow, gallery, trust/why-choose-us content, FAQ, and final WhatsApp CTA.

2. Taxi Transfer Packages

- Taxi overview page at /packages/pick-up-drop.
- Static detail pages for transfer packages and transfer route offers.
- Current taxi package examples include:
  - Package Transfer with Avanza and Innova.
  - Package Transfer with Hiace.
  - Package Transfer with Alphard.
- Each detail page supports hero imagery, package highlights, package details, itinerary, booking notes, related links, schema data, and WhatsApp booking form.

3. Activity Packages

- Activities overview page at /packages/activities-packages.
- Static detail pages for activity packages.
- Current activity examples include:
  - Shooting Experience Package.
  - Mangrove Discovery Tour.
  - Fireflies Night Tour.
  - Snorkeling Adventure.
  - Fishing Trip.
  - Golf Transfer.
  - Shopping Tour.
  - Spa and Wellness Experience.
  - Beach Hopping Tour.
  - Customized Tour.
- Activity pages include visual galleries, package information, booking guidance, and WhatsApp CTAs.

4. Blog and SEO Content

- Blog index page at /blog.
- Static blog detail pages for Bintan travel, private taxi, harbour pickup, airport pickup, hotel transfer, mangrove, snorkeling, and destination guide topics.
- Blog filtering and pagination behavior for browsing articles.
- Related service links that connect content pages back to package and contact pages.

5. Contact and WhatsApp Booking Flow

- Contact page with business information and a WhatsApp planning component.
- Floating WhatsApp assistant available across the site.
- Package booking forms generate structured WhatsApp messages with package type, date, pickup point, guest count, and notes.
- WhatsApp-first flow avoids a heavy backend while still giving visitors a guided booking path.

6. SEO and Discoverability

- Every public page uses BaseLayout and the shared SEO component.
- SEO support includes title, description, canonical URL, Open Graph image, and noindex support where needed.
- JSON-LD structured data is included for organization, local business, service, tourist trip, blog, FAQ, and breadcrumb use cases.
- Sitemap and robots routes are generated for search engine discovery.
- Canonical paths are maintained for the main package routes.

7. Performance and Hosting Readiness

- Astro static output for fast page delivery.
- React is used only where interactive islands are useful.
- Local structured data is used instead of runtime database calls.
- Public assets are organized under public/images.
- Cloudflare-friendly headers and redirects are available through public/_headers and public/_redirects.
- Designed for deployment on Cloudflare Pages with environment-based public site configuration.

Technology Stack

- Astro
- TypeScript
- Tailwind CSS
- React integration for interactive islands
- Lucide React icons
- Motion for light animation islands
- Static local data files
- Cloudflare Pages compatible static output

Repository Structure

- src/components/core
  Reusable UI primitives such as buttons, breadcrumbs, section headers, WhatsApp CTA, and swipe controls.

- src/components/site
  Site shell components such as header, footer, SEO, mobile navigation, and floating WhatsApp assistant.

- src/components/features
  Domain-specific features for booking, package cards, blog cards, WhatsApp planner, galleries, and route lists.

- src/components/sections
  Page sections for homepage, about, contact, package pages, and other public layouts.

- src/data
  Local structured data for site config, navigation, routes, packages, tours, blog articles, schema, SEO pages, FAQs, gallery, media, and assets.

- src/layouts
  Shared page layouts. BaseLayout is the main wrapper for public pages.

- src/pages
  Astro routes for homepage, package overview/detail pages, blog overview/detail pages, about, contact, policy pages, sitemap, robots, and 404.

- src/styles
  Global style manifest and style partials for tokens, typography, utilities, components, sections, and themes.

- public
  Static images, brand assets, icons, manifest, Cloudflare headers, and redirects.

Important Public Routes

- /                                      Homepage
- /packages/pick-up-drop                Taxi transfer overview
- /packages/pick-up-drop/[slug]         Taxi transfer package detail
- /packages/activities-packages         Activity package overview
- /packages/activities-packages/[slug]  Activity package detail
- /blog                                 Blog index
- /blog/[slug]                          Blog article detail
- /about                                About page
- /contact                              Contact and WhatsApp planning page
- /terms                                Terms and conditions
- /privacy                              Privacy policy
- /cancellation                         Cancellation policy
- /refund                               Refund information
- /sitemap.xml                          Sitemap
- /robots.txt                           Robots file

Environment Configuration

The project uses public environment variables for production branding and contact details. See .env.example for the supported keys.

Important variables include:

- PUBLIC_SITE_URL
- PUBLIC_SITE_NAME
- PUBLIC_SITE_SHORT_NAME
- PUBLIC_SITE_TAGLINE
- PUBLIC_SITE_DESCRIPTION
- PUBLIC_LOGO_IMAGE
- PUBLIC_DEFAULT_OG_IMAGE
- PUBLIC_WHATSAPP_NUMBER
- PUBLIC_WHATSAPP_MESSAGE
- PUBLIC_CONTACT_EMAIL
- PUBLIC_CONTACT_PHONE
- PUBLIC_BUSINESS_ADDRESS
- PUBLIC_GOOGLE_MAPS_URL
- PUBLIC_SOCIAL_LINKS

Development

Install dependencies:

  npm install

Run the local development server:

  npm run dev

Build the static site:

  npm run build

Run Astro checks:

  npm run astro check

Audit distribution size:

  npm run audit:dist

Deployment Notes

The project is intended to deploy as a static Astro site. Cloudflare Pages can build the site with:

  npm run build

The generated output directory is:

  dist

Before production launch, confirm:

- Production domain is set in PUBLIC_SITE_URL.
- WhatsApp number, contact email, phone, and business details are correct.
- Logo and Open Graph image paths are valid.
- Sitemap and robots routes are accessible.
- Cloudflare environment variables match the production brand configuration.
- The final package and activity links resolve correctly.

Current Release Scope

Version 1.0.0 includes the public static website foundation for Bintan Prestige Transport:

- Premium homepage.
- Taxi transfer overview and detail pages.
- Activity package overview and detail pages.
- Blog index and article pages.
- About and contact pages.
- WhatsApp-first booking and planning flow.
- Floating WhatsApp assistant.
- SEO metadata and structured data.
- Sitemap and robots support.
- Static deployment readiness for Cloudflare Pages.

Future Enhancements

Planned future improvements may include:

- Laravel CMS API integration.
- Admin-managed package and blog content.
- Real booking analytics or package popularity ranking.
- Search Console and analytics tracking.
- More production imagery and destination-specific landing pages.
- Automated ranking for frequently booked packages once real booking data is available.

License and Ownership

This project is owned and maintained for Bintan Prestige Transport. Public reuse, redistribution, or resale should only be done with permission from the project owner.
