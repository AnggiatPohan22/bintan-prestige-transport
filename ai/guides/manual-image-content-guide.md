# Manual Image & Content Guide

## Folder Gambar

Simpan gambar di dalam folder `public/images`.

- Logo: `public/images/brand`
- Hero background: `public/images/hero`
- Mobil/fleet: `public/images/cars`
- Tour/destinasi: `public/images/tours`
- Gallery umum: `public/images/gallery`

Gunakan format `.webp` jika bisa. Nama file sebaiknya huruf kecil, tanpa spasi.

Contoh:

```txt
public/images/hero/home-1.webp
public/images/cars/innova-reborn.webp
public/images/tours/mangrove-tour.webp
public/images/gallery/blue-lake.webp
```

Path yang dipakai di code selalu dimulai dari `/images`.

Contoh:

```txt
/images/hero/home-1.webp
/images/cars/innova-reborn.webp
```

## Logo Navbar

File yang dibuka:

- `.env`
- `.env.example`
- `src/data/site.ts`

Isi di `.env`:

```env
PUBLIC_LOGO_IMAGE=/images/brand/bintan-prestige-logo.png
```

Jika `PUBLIC_LOGO_IMAGE` kosong, navbar akan kembali menampilkan teks `Travel Agent`.

## Hero Gambar Banyak Per Halaman

File utama:

- `src/data/media.ts`

Bagian yang bisa diedit:

```ts
export const heroSlides = {
  home: ["/images/hero/home-1.webp", "/images/hero/home-2.webp"],
  transfer: ["/images/hero/transfer-1.webp", "/images/hero/transfer-2.webp"],
  islandTour: ["/images/hero/tour-1.webp", "/images/hero/tour-2.webp"],
  about: ["/images/hero/about-1.webp", "/images/hero/about-2.webp"],
  contact: ["/images/hero/contact-1.webp", "/images/hero/contact-2.webp"],
};
```

Hero akan otomatis crossfade halus antar gambar. Jika hanya satu gambar, animasi dimatikan otomatis.

Alternatif khusus homepage:

```env
PUBLIC_HERO_IMAGES=/images/hero/home-1.webp,/images/hero/home-2.webp,/images/hero/home-3.webp
```

## Gambar Card Paket Home

File yang dibuka:

- `src/data/packages.ts`

Field yang diganti:

```ts
image: "/images/cars/innova-reborn.webp",
alt: "Private taxi transfer in Bintan",
```

## Gambar Mobil / Fleet

File yang dibuka:

- `src/data/carTypes.ts`

Field yang diganti:

```ts
image: "/images/cars/innova-reborn.webp",
alt: "Toyota Innova private transfer car",
```

## Gambar Route Transfer

File yang dibuka:

- `src/data/routes.ts`

Field yang diganti:

```ts
image: "/images/cars/premium-transfer.webp",
alt: "Airport transfer private car",
```

## Gambar Tour Package

File yang dibuka:

- `src/data/tours.ts`

Field yang diganti:

```ts
image: "/images/tours/mangrove-tour.webp",
alt: "Private mangrove tour in Bintan",
```

## Gallery Detail Activity Package

Gallery yang muncul di halaman detail activity package diatur dari:

- Data utama: `src/data/tours.ts`
- Komponen tampilan: `src/components/features/packages/ActivityPackageGallery.astro`
- Layout detail package: `src/components/features/packages/PackageDetailContent.astro`
- Folder gambar yang disarankan: `public/images/gallery` atau subfolder seperti `public/images/gallery/shooting`

Halaman yang memakai data ini:

- `/packages/activities-packages/{slug}`
- `/packages/island-tour/{slug}` sebagai fallback route lama

Untuk menambah atau mengganti foto gallery pada salah satu activity package, cari object package di `src/data/tours.ts` berdasarkan `slug`, lalu update field `gallery`.

Contoh:

```ts
{
  title: "Mangrove Discovery Tour",
  slug: "mangrove-discovery-tour",
  image: "/images/tours/mangrove.webp",
  heroImages: [
    "/images/tours/mangrove.webp",
    "/images/gallery/mangrove-2.webp",
    "/images/gallery/mangrove-5.webp",
  ],
  gallery: [
    {
      title: "Quiet mangrove route",
      description: "A calm boat route through Bintan's mangrove forest with local nature scenery.",
      image: "/images/tours/mangrove.webp",
      alt: "Mangrove river route in Bintan",
    },
    {
      title: "Nature boat experience",
      description: "Guests can enjoy a slower soft-adventure activity with guide and wildlife viewing.",
      image: "/images/gallery/mangrove-2.webp",
      alt: "Mangrove boat tour scenery in Bintan",
    },
  ],
}
```

Catatan update:

- `image` di level package adalah thumbnail utama card dan hero fallback.
- `heroImages` adalah slideshow hero detail.
- `gallery` adalah section gallery yang muncul di atas itinerary.
- Setiap item `gallery` wajib punya `title`, `image`, dan `alt`.
- `description` boleh dikosongkan jika tidak diperlukan.
- Jika ingin menambah lebih dari 3 foto, cukup tambah object baru di array `gallery`; lightbox sudah bisa pindah foto kanan/kiri tanpa menutup preview.
- Path gambar di code selalu dimulai dari `/images`, bukan `public/images`.

## Gambar Gallery

File yang dibuka:

- `src/data/gallery.ts`

Field yang diganti atau ditambah:

```ts
{
  title: "Blue Lake",
  slug: "blue-lake",
  description: "Scenic private tour stop in Bintan.",
  image: "/images/gallery/blue-lake.webp",
  alt: "Blue Lake Bintan tour destination",
  category: "tour",
}
```

## File Komponen Jika Perlu Edit Lanjutan

- Home hero: `src/components/home/Hero.astro`
- Transfer hero: `src/components/packages/TransferHero.astro`
- Island Tour hero: `src/components/packages/TourHero.astro`
- About hero: `src/components/about/AboutHero.astro`
- Contact hero: `src/components/contact/ContactHero.astro`
- Backdrop animasi hero: `src/components/common/HeroBackdrop.astro`
- Style animasi dan luxury gold/silver: `src/styles/global.css`

## Jalankan Setelah Ganti Gambar

```powershell
npm.cmd run dev
```

Buka:

```txt
http://127.0.0.1:4321
```

Untuk cek production:

```powershell
npm.cmd run astro check
npm.cmd run build
npm.cmd run preview
```
