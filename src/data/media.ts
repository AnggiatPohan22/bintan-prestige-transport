import { site } from "./site";

const configuredHomeImages = site.heroImages.length > 0 ? site.heroImages : site.heroImage ? [site.heroImage] : [];

export const heroSlides = {
  home:
    configuredHomeImages.length > 0
      ? configuredHomeImages
      : ["/images/tours/atv.webp", "/images/hero/blue-lake-2.webp", "/images/hero/jetski-4.webp", "/images/hero/mangrove-2.webp", "/images/hero/snorkeling-1.webp", "/images/hero/spa-1.webp"],
  transfer: ["/images/cars/toyota-innova.webp", "/images/cars/hiace-car-3.webp", "/images/cars/luxury-mpv2.webp"],
  islandTour: ["/images/tours/atv.webp", "/images/tours/mangrove.webp", "/images/tours/snorkeling.webp"],
  about: ["/images/gallery/spa-3.webp", "/images/gallery/snorkeling-3.webp", "/images/gallery/mangrove-4.webp"],
  contact: ["/images/gallery/jetski-1.webp", "/images/gallery/blue-lake-2.webp", "/images/gallery/spa-3.webp"],
};
