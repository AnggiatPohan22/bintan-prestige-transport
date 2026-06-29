# Travel Agent Website Grand Plan

## Project Name

**travel-agent**

## Project Purpose

Project ini adalah website frontend untuk bisnis **Taxi & Tour / Travel Agent** yang fokus pada:

- SEO-friendly public website.
- Loading cepat walaupun banyak animasi.
- Ringan untuk hosting biasa yang belum menggunakan CDN.
- Scalable untuk disambungkan ke Laravel CMS di masa depan.
- Booking awal melalui WhatsApp, bukan online payment.
- Struktur data dan halaman yang siap dikembangkan menjadi multi-package travel website.

Website ini akan dibangun terlebih dahulu sebagai frontend standalone. Setelah CMS Laravel selesai, website ini dapat disambungkan ke API CMS agar data service, harga, gambar, FAQ, itinerary, dan SEO metadata bisa dikelola dari admin panel.

---

## Recommended Tech Stack

### Main Framework

**Astro**

Astro dipilih sebagai framework utama karena sangat cocok untuk website marketing, travel, tour, taxi, company profile, landing page, dan SEO-driven website. Astro dapat menghasilkan HTML statis yang ringan, cepat, dan mudah di-index oleh search engine.

### Interactive UI Layer

**React**

React digunakan hanya untuk komponen yang membutuhkan interaksi, seperti:

- FAQ accordion.
- Package filter.
- Tabs untuk Half Day / Full Day tour.
- Interactive booking form.
- Animated cards.
- Modal gallery.

React tidak digunakan untuk seluruh halaman agar ukuran JavaScript tetap ringan.

### Animation Library

**Motion**

Motion digunakan untuk animasi modern dan halus, seperti:

- Fade up section.
- Card hover animation.
- Button micro-interaction.
- FAQ accordion transition.
- Gallery transition.
- Scroll reveal.

Animasi harus tetap ringan dan tidak mengorbankan Core Web Vitals.

### Styling

**Tailwind CSS**

Tailwind digunakan untuk membangun UI yang clean, modern, luxury, responsive, dan konsisten.

### Icons

**Lucide React**

Lucide dipakai untuk icon yang ringan, modern, dan mudah dikontrol styling-nya.

### Data Layer Awal

**Local TypeScript Data / Astro Content Collections**

Pada tahap awal, data package disimpan secara lokal di folder `src/data` atau `src/content`. Ini membuat website cepat dibangun dan mudah diubah.

Nanti setelah CMS Laravel selesai, data lokal ini bisa diganti dengan API dari Laravel CMS.

---

## Why Not React SPA Only?

React SPA biasa tidak direkomendasikan sebagai public website utama karena:

- SEO tidak sekuat static-rendered website.
- Konten banyak bergantung pada JavaScript di browser.
- Initial load bisa lebih berat.
- Kurang ideal untuk hosting sederhana jika tidak dioptimasi dengan SSR/SSG.

React tetap digunakan, tetapi hanya sebagai island component di dalam Astro.

---

## Why Not Node.js Express First?

Node.js Express lebih cocok untuk backend API atau custom server. Untuk website Taxi & Tour tahap awal, Express tidak diperlukan karena:

- Belum membutuhkan backend custom.
- Booking masih via WhatsApp.
- Data bisa disimpan lokal terlebih dahulu.
- SEO dan performance lebih mudah dicapai dengan static site.

Backend utama nanti akan menggunakan Laravel CMS yang sudah dibangun terpisah.

---

## Why Astro + React + Motion?

Kombinasi ini dipilih karena memberikan keseimbangan terbaik antara:

- SEO kuat.
- Performa cepat.
- JavaScript minimal.
- Animasi modern.
- Struktur scalable.
- Mudah dihosting.
- Mudah disambungkan ke Laravel CMS API nanti.

Final recommendation:

```txt
Astro + React + Tailwind CSS + Motion + Lucide React
```

---

## Initial Website Pages

Website tahap awal terdiri dari 5 halaman utama:

```txt
/
Home

/about
About Us

/contact
Contact

/packages/pick-up-drop
Pick Up & Drop

/packages/island-tour
Tour Island
```

---

## Initial Services

### 1. Pick Up & Drop

Service ini digunakan untuk kebutuhan transportasi seperti airport transfer, hotel transfer, harbour transfer, private driver, dan drop-off antar lokasi.

#### Content Structure

- Hero section.
- Service overview.
- Car type options.
- Popular transfer routes.
- Price from section.
- Why book this service.
- FAQ.
- WhatsApp CTA.

#### Example Car Types

- Standard Car.
- Premium Car.
- Family Car.
- Hiace / Van.

#### Data Structure Example

```ts
{
  name: 'Standard Car',
  slug: 'standard-car',
  capacity: '1-4 passengers',
  luggage: '2-3 bags',
  image: '/images/cars/standard-car.webp',
  shortDescription: 'Comfortable private transfer for small groups.',
  priceFrom: 250000,
  currency: 'IDR',
  routes: ['Airport to Hotel', 'Hotel to Harbour'],
  whatsappMessage: 'Hi, I want to book Standard Car Pick Up & Drop.'
}
```

---

### 2. Tour Island

Service ini digunakan untuk paket tour pulau, baik half day maupun full day.

#### Content Structure

- Hero section.
- Half Day / Full Day package option.
- Tour highlights.
- Destination highlights.
- Itinerary.
- Include / exclude.
- Gallery.
- FAQ.
- WhatsApp CTA.

#### Data Structure Example

```ts
{
  name: 'Bintan Island Full Day Tour',
  slug: 'bintan-island-full-day-tour',
  type: 'full-day',
  duration: '8 hours',
  destinations: ['Blue Lake', 'Sand Dunes', 'Local Beach'],
  priceFrom: 750000,
  currency: 'IDR',
  description: 'Private full day island tour experience.',
  itinerary: [
    {
      time: '09:00',
      title: 'Hotel Pick Up',
      description: 'Driver picks up guests at hotel lobby.'
    }
  ],
  image: '/images/tours/island-tour.webp',
  gallery: [],
  faq: []
}
```

---

## Page-by-Page Plan

## Home Page

Home adalah landing page utama yang harus langsung menjelaskan service, trust, dan CTA.

### Sections

1. Navbar.
2. Hero luxury taxi & tour.
3. Quick WhatsApp booking CTA.
4. Main services:
   - Pick Up & Drop.
   - Tour Island.
5. Why Choose Us.
6. Featured packages.
7. Popular routes / destinations.
8. Guest experience / testimonials placeholder.
9. FAQ preview.
10. Final CTA.
11. Footer.

### SEO Target

- Taxi and tour service.
- Private transfer.
- Island tour.
- Travel agent local service.

---

## Pick Up & Drop Page

### Main Goal

Menghasilkan halaman SEO-ready untuk pencarian taxi, airport transfer, private driver, dan drop service.

### Sections

1. Hero.
2. Service overview.
3. Car type cards.
4. Popular routes.
5. Benefit section.
6. Price note.
7. FAQ.
8. WhatsApp booking CTA.

### Target Keywords

- Bintan taxi service.
- Bintan airport transfer.
- Private driver Bintan.
- Pick up and drop service Bintan.
- Hotel transfer Bintan.

### Heading Structure

```txt
H1: Private Pick Up & Drop Service
H2: Choose Your Car Type
H2: Popular Transfer Routes
H2: Why Book With Us
H2: Frequently Asked Questions
```

---

## Tour Island Page

### Main Goal

Menghasilkan halaman SEO-ready untuk paket tour half day dan full day.

### Sections

1. Hero.
2. Tour package overview.
3. Half Day / Full Day options.
4. Tour highlights.
5. Sample itinerary.
6. Include / exclude.
7. Gallery.
8. FAQ.
9. WhatsApp CTA.

### Target Keywords

- Bintan island tour.
- Bintan half day tour.
- Bintan full day tour.
- Private island tour Bintan.
- Bintan tour package.

### Heading Structure

```txt
H1: Bintan Island Tour Packages
H2: Half Day and Full Day Tour Options
H2: Tour Highlights
H2: Sample Itinerary
H2: What’s Included
H2: Frequently Asked Questions
```

---

## About Page

### Main Goal

Membangun trust dan menunjukkan brand value.

### Sections

1. Hero.
2. Brand story.
3. Local expertise.
4. Safety and comfort.
5. Fleet quality.
6. Service area.
7. CTA.

---

## Contact Page

### Main Goal

Memudahkan visitor menghubungi bisnis.

### Sections

1. Hero.
2. WhatsApp button.
3. Phone.
4. Email.
5. Operating hours.
6. Service area.
7. Google Maps link.
8. Simple inquiry form optional.
9. FAQ mini section.

### Performance Note

Jangan langsung embed Google Maps berat pada initial build. Gunakan static map image atau button `Open in Google Maps`.

---

## SEO Foundation

Setiap halaman wajib memiliki:

- Unique title.
- Unique meta description.
- Canonical URL.
- Open Graph title.
- Open Graph description.
- Open Graph image.
- One H1 only.
- Structured H2/H3.
- Image alt text.
- Internal linking.
- Breadcrumb.
- Sitemap.xml.
- Robots.txt.

### Recommended Schema

- LocalBusiness.
- TravelAgency.
- TaxiService.
- Service.
- TouristTrip.
- FAQPage.
- BreadcrumbList.

---

## Performance Rules

Agar website tetap cepat:

- Gunakan Astro static rendering sebanyak mungkin.
- React hanya untuk komponen interaktif.
- Jangan semua section dibuat React.
- Optimasi gambar ke WebP / AVIF.
- Lazy load gambar di bawah fold.
- Hero image harus ringan dan diprioritaskan.
- Gunakan maksimal 2 font family.
- Hindari video background berat.
- Hindari animasi scroll berlebihan.
- Gunakan transform dan opacity untuk animasi.
- Jangan animate width, height, top, atau left.
- Jangan terlalu banyak parallax.
- Hindari library slider berat jika tidak diperlukan.

---

## Animation Rules

Animasi harus memberi kesan premium, bukan ramai.

### Safe Motion Properties

- opacity.
- x.
- y.
- scale.
- small rotate.

### Avoid

- blur animation berat.
- box-shadow animation besar.
- parallax di banyak section.
- animasi pada ratusan element sekaligus.
- infinite animation yang tidak penting.

### Recommended Animations

#### Home

- Hero text fade-up.
- Hero image reveal.
- Service card hover lift.
- Destination image subtle zoom.
- CTA micro interaction.

#### Pick Up & Drop

- Car card hover.
- Route list reveal.
- Price card fade-up.
- WhatsApp button subtle pulse.

#### Tour Island

- Itinerary timeline reveal.
- Gallery hover.
- Half Day / Full Day tab transition.
- FAQ accordion animation.

### Accessibility Requirement

Support reduced motion. Jika user mengaktifkan reduced motion pada device/browser, animasi harus dikurangi atau dimatikan.

---

## Recommended Folder Structure

```txt
src/
  components/
    common/
      Navbar.astro
      Footer.astro
      SectionHeader.astro
      WhatsAppCTA.astro
      SEO.astro
      Breadcrumb.astro

    home/
      Hero.astro
      ServiceCards.astro
      WhyChooseUs.astro
      FeaturedPackages.astro
      PopularRoutes.astro
      FAQPreview.astro

    packages/
      PackageCard.astro
      CarTypeCard.astro
      TourItinerary.astro
      RouteList.astro
      IncludeExclude.astro
      FAQAccordion.tsx

    animations/
      Reveal.tsx
      MotionButton.tsx

  data/
    site.ts
    navigation.ts
    carTypes.ts
    routes.ts
    faqs.ts
    tours.ts
    packages.ts

  layouts/
    BaseLayout.astro

  pages/
    index.astro
    about.astro
    contact.astro
    packages/
      pick-up-drop.astro
      island-tour.astro

  styles/
    global.css

public/
  images/
    hero/
    cars/
    tours/
    brand/
```

---

## Data Strategy

### Initial Stage

Gunakan file lokal:

```txt
src/data/site.ts
src/data/packages.ts
src/data/carTypes.ts
src/data/tours.ts
src/data/faqs.ts
```

Keuntungannya:

- Cepat dibuat.
- Tidak perlu backend.
- Mudah diubah.
- Build static sangat ringan.

### Future Stage

Setelah Laravel CMS selesai:

```txt
Astro Frontend
↓
Laravel CMS API
↓
Package / Price / Gallery / FAQ / SEO Metadata
↓
Rendered into public website
```

Data lokal dapat diganti menjadi fetch dari Laravel API.

---

## Future CMS Integration Plan

Ketika Laravel CMS siap, frontend ini harus mudah disambungkan ke API.

### CMS Data Candidates

- Services.
- Packages.
- Car types.
- Prices.
- Routes.
- Destinations.
- Itinerary.
- Gallery.
- FAQ.
- SEO metadata.
- Testimonials.
- WhatsApp number.

### API Direction

Example future endpoints:

```txt
GET /api/site-settings
GET /api/services
GET /api/packages
GET /api/packages/{slug}
GET /api/faqs
GET /api/testimonials
GET /api/seo/{pageKey}
```

### Rendering Strategy Later

Recommended:

- Static generation for stable pages.
- Rebuild when CMS data changes.
- Optional SSR only if highly dynamic content is needed.

---

## Development Roadmap

## Phase 0 — Project Setup

### Goals

- Setup Astro project.
- Install React integration.
- Install Tailwind CSS.
- Install Motion.
- Install Lucide React.
- Setup base folder structure.
- Setup BaseLayout.
- Setup global style.
- Setup SEO component.
- Setup placeholder data.

### Output

- Project running locally.
- Base layout ready.
- Routing ready.
- Foundation ready for page development.

---

## Phase 1 — Home Page

### Goals

- Build home page layout.
- Build navbar and footer.
- Build hero.
- Build service cards.
- Build why choose us.
- Build featured packages.
- Build CTA.

### Output

- Home page ready as main landing page.

---

## Phase 2 — Service Pages

### Goals

- Build Pick Up & Drop page.
- Build Tour Island page.
- Build reusable service components.
- Build FAQ accordion.
- Build WhatsApp CTA.

### Output

- Two main service pages ready and SEO structured.

---

## Phase 3 — About & Contact

### Goals

- Build About page.
- Build Contact page.
- Add business information.
- Add WhatsApp booking button.
- Add operating hours.

### Output

- Website ready for basic launch.

---

## Phase 4 — Animation & Interaction

### Goals

- Add Motion animation components.
- Add reveal animation.
- Add card hover animation.
- Add FAQ animation.
- Add reduced motion support.

### Output

- Website feels interactive but remains lightweight.

---

## Phase 5 — SEO & Structured Data

### Goals

- Add metadata per page.
- Add schema markup.
- Add sitemap.
- Add robots.txt.
- Add breadcrumb.
- Add Open Graph data.

### Output

- Website SEO foundation ready.

---

## Phase 6 — Performance Audit

### Goals

- Optimize images.
- Check JavaScript bundle.
- Check Core Web Vitals.
- Check Lighthouse.
- Remove unused code.
- Confirm responsive quality.

### Target Score

```txt
Performance: 90+
SEO: 95+
Accessibility: 90+
Best Practices: 90+
```

---

## Phase 7 — Laravel CMS API Integration

### Goals

- Replace local data with CMS API.
- Fetch services from Laravel CMS.
- Fetch package prices.
- Fetch FAQ.
- Fetch SEO metadata.
- Keep frontend rendering fast.

### Output

- Frontend becomes reusable and CMS-driven.

---

## Development Principles

1. Build static-first.
2. Keep JavaScript minimal.
3. Use React only when needed.
4. Prioritize SEO from the beginning.
5. Prioritize performance from the beginning.
6. Build reusable components.
7. Keep page structure clean.
8. Avoid overengineering early.
9. Prepare data structure for CMS integration.
10. Use elegant animation, not excessive animation.

---

## Initial Build Priority

Recommended first development order:

```txt
STEP 0 — Astro Project Setup & Foundation
STEP 1 — Base Layout, Navbar, Footer, SEO Component
STEP 2 — Local Data Structure
STEP 3 — Home Page
STEP 4 — Pick Up & Drop Page
STEP 5 — Tour Island Page
STEP 6 — About Page
STEP 7 — Contact Page
STEP 8 — Motion Animation Layer
STEP 9 — SEO Schema, Sitemap, Robots
STEP 10 — Performance & Responsive Audit
```

---

## Final Architecture

### Current Stage

```txt
Astro Static Frontend
↓
Local TypeScript Data
↓
React Islands
↓
Motion Animation
↓
WhatsApp Booking
```

### Future Stage

```txt
Astro Public Frontend
↓
Laravel CMS API
↓
Admin-managed content
↓
SEO-ready static/public pages
↓
WhatsApp booking or future booking engine
```

---

## Final Decision

This project should use:

```txt
Astro + React + Tailwind CSS + Motion + Lucide React
```

This is the best fit because the project needs:

- Fast loading.
- Strong SEO.
- Lightweight frontend.
- Animation support.
- Easy deployment.
- Future Laravel CMS integration.
- Scalable content structure.

