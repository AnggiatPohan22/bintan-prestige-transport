export type HeroImageAsset = {
  src: string;
  mobile: string;
  tablet: string;
  desktop: string;
};

const heroImage = (page: string, file: string) => `/images/hero/${page}/${file}`;
const responsiveHeroImage = (page: string, file: string): HeroImageAsset => {
  const baseName = file.replace(/\.[^.]+$/, "");

  return {
    src: heroImage(page, file),
    mobile: `/images/hero/${page}/responsive/${baseName}-mobile.webp`,
    tablet: `/images/hero/${page}/responsive/${baseName}-tablet.webp`,
    desktop: `/images/hero/${page}/responsive/${baseName}-desktop.webp`,
  };
};

export const carImage = (file: string) => `/images/cars/${file}`;
export const tourImage = (file: string) => `/images/tours/${file}`;
export const galleryImage = (folder: string, file: string) => `/images/gallery/${folder}/${file}`;
export const rootGalleryImage = (file: string) => `/images/gallery/${file}`;

export const responsiveHeroSource = (src: string): HeroImageAsset | string => {
  const match = src.match(/^\/images\/hero\/([^/]+)\/([^/]+)$/);

  return match ? responsiveHeroImage(match[1], match[2]) : src;
};

type GalleryAsset = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

type ActivityPackageAsset = {
  folder: string;
  card: string;
  hero: string[];
  gallery: GalleryAsset[];
};

export const brandAssets = {
  logoGold: "/images/brand/bintan-prestige-gold-logo.png",
  logoWhite: "/images/brand/bintan-prestige-white-logo.png",
  favicon: "/images/brand/icons/bintan-prestige-icon-32.png",
  appleTouchIcon: "/images/brand/icons/bintan-prestige-icon-180.png",
  manifestIcon192: "/images/brand/icons/bintan-prestige-icon-192.png",
  manifestIcon512: "/images/brand/icons/bintan-prestige-icon-512.png",
} as const;

export const pageHeroAssets = {
  home: [
    responsiveHeroImage("home", "blue-lake-2.webp"),
    responsiveHeroImage("home", "mangrove-2.webp"),
    responsiveHeroImage("home", "mangrove.webp"),
    responsiveHeroImage("home", "snorkeling.webp"),
    responsiveHeroImage("home", "spa-3.webp"),
  ],
  taxy: [
    responsiveHeroImage("taxy", "toyota-innova.webp"),
    responsiveHeroImage("taxy", "toyota-innova-2.webp"),
    responsiveHeroImage("taxy", "hiace-car-4.webp"),
    responsiveHeroImage("taxy", "toyota-hiace.webp"),
    responsiveHeroImage("taxy", "luxury-mpv2.webp"),
  ],
  activity: [
    responsiveHeroImage("activity", "beach-hopping-tour-2.webp"),
    responsiveHeroImage("activity", "fireflies-4.webp"),
    responsiveHeroImage("activity", "fishing-trip-3.webp"),
    responsiveHeroImage("activity", "golf-tour-3.webp"),
  ],
  blog: [
    responsiveHeroImage("blog", "atv-5.webp"),
    responsiveHeroImage("blog", "jetski-3.webp"),
    responsiveHeroImage("blog", "mangrove-2.webp"),
    responsiveHeroImage("blog", "snorkeling-2.webp"),
    responsiveHeroImage("blog", "spa-2.webp"),
  ],
  about: [
    responsiveHeroImage("about", "destinasi-tanjungpinang-1.webp"),
    responsiveHeroImage("about", "destinasi-tanjungpinang-2.webp"),
    responsiveHeroImage("about", "destinasi-tanjungpinang-3.webp"),
  ],
  contact: [
    responsiveHeroImage("contact", "beach-hopping-tour-3.webp"),
    responsiveHeroImage("contact", "beach-hopping-tour-4.webp"),
    responsiveHeroImage("contact", "blue-lake.webp"),
  ],
};

export const iconAssets = {
  // Add public icon files here when the site starts using custom bitmap icons.
} as const;

export const activityPackageAssets: Record<string, ActivityPackageAsset> = {
  "shooting-experience-package": {
    folder: "Shooting-Experience-Package",
    card: galleryImage("Shooting-Experience-Package", "real-gun-bintan-1.webp"),
    hero: [
      galleryImage("Shooting-Experience-Package", "real-gun-bintan-1.webp"),
      galleryImage("Shooting-Experience-Package", "shooting-1.webp"),
      galleryImage("Shooting-Experience-Package", "shooting-2.webp"),
      galleryImage("Shooting-Experience-Package", "shooting-3.webp"),
    ],
    gallery: [
      {
        title: "Certified shooting range",
        description: "A visual reference for the supervised target shooting experience in Bintan.",
        image: galleryImage("Shooting-Experience-Package", "real-gun-bintan-1.webp"),
        alt: "Certified target shooting range activity in Bintan",
      },
      {
        title: "Range activity moment",
        description: "Guests can review the activity mood before confirming the selected package.",
        image: galleryImage("Shooting-Experience-Package", "shooting-1.webp"),
        alt: "Guest joining a target shooting activity in Bintan",
      },
      {
        title: "Private activity support",
        description: "The experience can be paired with private pickup and return transfer.",
        image: galleryImage("Shooting-Experience-Package", "shooting-2.webp"),
        alt: "Bintan shooting package private activity support",
      },
      {
        title: "Flexible package planning",
        description: "Share timing and guest count so the team can recommend the best activity flow.",
        image: galleryImage("Shooting-Experience-Package", "shooting-3.webp"),
        alt: "Bintan shooting experience package planning",
      },
    ],
  },
  "mangrove-discovery-tour": {
    folder: "mangrove-discory-tour",
    card: galleryImage("mangrove-discory-tour", "mangrove-2.webp"),
    hero: [
      galleryImage("mangrove-discory-tour", "mangrove-2.webp"),
      galleryImage("mangrove-discory-tour", "mangrove-4.webp"),
      galleryImage("mangrove-discory-tour", "mangrove-3.webp"),
      galleryImage("mangrove-discory-tour", "mangrove-5.webp"),
    ],
    gallery: [
      {
        title: "Quiet mangrove route",
        description: "A calm boat route through Bintan's mangrove forest with local nature scenery.",
        image: galleryImage("mangrove-discory-tour", "mangrove-2.webp"),
        alt: "Mangrove river route in Bintan",
      },
      {
        title: "Nature boat experience",
        description: "Guests can enjoy a slower soft-adventure activity with guide and wildlife viewing.",
        image: galleryImage("mangrove-discory-tour", "mangrove-4.webp"),
        alt: "Mangrove boat tour scenery in Bintan",
      },
      {
        title: "Private transfer support",
        description: "Pickup and return timing can be arranged around the selected mangrove schedule.",
        image: galleryImage("mangrove-discory-tour", "mangrove-5.webp"),
        alt: "Private Bintan nature route for mangrove tour planning",
      },
    ],
  },
  "fireflies-night-tour": {
    folder: "fireflies-night-tour",
    card: galleryImage("fireflies-night-tour", "fireflies-4.webp"),
    hero: [
      galleryImage("fireflies-night-tour", "fireflies-4.webp"),
      galleryImage("fireflies-night-tour", "fireflies-3.webp"),
      galleryImage("fireflies-night-tour", "fireflies-2.webp"),
      galleryImage("fireflies-night-tour", "fireflies-1.webp"),
    ],
    gallery: [
      {
        title: "Evening mangrove setting",
        description: "A quiet river atmosphere prepared for the fireflies night activity after sunset.",
        image: galleryImage("fireflies-night-tour", "fireflies-4.webp"),
        alt: "Evening mangrove area for fireflies night tour in Bintan",
      },
      {
        title: "Night nature route",
        description: "The experience is arranged as a short evening plan with private return transport.",
        image: galleryImage("fireflies-night-tour", "fireflies-3.webp"),
        alt: "Mangrove nature scenery for Bintan fireflies tour",
      },
      {
        title: "Easy hotel return",
        description: "Private pickup and drop-off keep the night activity simple for resort guests.",
        image: galleryImage("fireflies-night-tour", "fireflies-2.webp"),
        alt: "Bintan fireflies route with private transfer support",
      },
    ],
  },
  "snorkeling-adventure": {
    folder: "snorkeling-adventure",
    card: galleryImage("snorkeling-adventure", "snorkeling-4.webp"),
    hero: [
      galleryImage("snorkeling-adventure", "snorkeling-4.webp"),
      galleryImage("snorkeling-adventure", "snorkeling-3.webp"),
      galleryImage("snorkeling-adventure", "snorkeling-2.webp"),
      galleryImage("snorkeling-adventure", "snorkeling-1.webp"),
    ],
    gallery: [
      {
        title: "Clear water activity",
        description: "A visual reference for relaxed snorkeling days around Bintan's coastal areas.",
        image: galleryImage("snorkeling-adventure", "snorkeling-4.webp"),
        alt: "Snorkeling activity in clear Bintan water",
      },
      {
        title: "Marine soft adventure",
        description: "Snorkeling can be arranged with optional equipment, boat, and guide support.",
        image: galleryImage("snorkeling-adventure", "snorkeling-2.webp"),
        alt: "Private snorkeling island experience in Bintan",
      },
      {
        title: "Beach day pacing",
        description: "The route can include beach rest time after the snorkeling session.",
        image: galleryImage("snorkeling-adventure", "snorkeling-1.webp"),
        alt: "Bintan beach and snorkeling route scenery",
      },
    ],
  },
  "fishing-trip": {
    folder: "fishing-trip",
    card: galleryImage("fishing-trip", "fishing-trip-1.webp"),
    hero: [
      galleryImage("fishing-trip", "fishing-trip-1.webp"),
      galleryImage("fishing-trip", "fishing-trip-2.webp"),
      galleryImage("fishing-trip", "fishing-trip-3.webp"),
      galleryImage("fishing-trip", "fishing-trip-.webp"),
    ],
    gallery: [
      {
        title: "Bintan coastal route",
        description: "A relaxed sea-route reference for guests planning a half-day fishing trip.",
        image: galleryImage("fishing-trip", "fishing-trip-1.webp"),
        alt: "Bintan coastline for fishing trip planning",
      },
      {
        title: "Local sea experience",
        description: "Fishing is coordinated with local operator timing, tide, and weather conditions.",
        image: galleryImage("fishing-trip", "fishing-trip-2.webp"),
        alt: "Local fishing trip activity in Bintan",
      },
      {
        title: "Private pickup flow",
        description: "Land transport can be arranged to the boat departure point and back.",
        image: galleryImage("fishing-trip", "fishing-trip-3.webp"),
        alt: "Private Bintan route scenery for fishing activity transfer",
      },
    ],
  },
  "golf-transfer": {
    folder: "golf-transfer",
    card: galleryImage("golf-transfer", "golf-tour-2.webp"),
    hero: [
      galleryImage("golf-transfer", "golf-tour-2.webp"),
      galleryImage("golf-transfer", "golf-tour-1.webp"),
      galleryImage("golf-transfer", "golf-tour-3.webp"),
      galleryImage("golf-transfer", "golf-tour-4.webp"),
    ],
    gallery: [
      {
        title: "Golf day transfer",
        description: "Private transfer can be shaped around tee time, resort location, and return plan.",
        image: galleryImage("golf-transfer", "golf-tour-2.webp"),
        alt: "Bintan golf transfer route for private guests",
      },
      {
        title: "Flexible resort pickup",
        description: "The route can support golf guests moving between resorts and course areas.",
        image: galleryImage("golf-transfer", "golf-tour-1.webp"),
        alt: "Private pickup support for Bintan golf transfer",
      },
      {
        title: "Route add-on option",
        description: "Simple local stops can be coordinated if timing allows after the golf schedule.",
        image: galleryImage("golf-transfer", "golf-tour-3.webp"),
        alt: "Bintan route stop scenery for golf transfer add-on",
      },
    ],
  },
  "shopping-tour": {
    folder: "shopping-tour",
    card: galleryImage("shopping-tour", "shopping-1.webp"),
    hero: [
      galleryImage("shopping-tour", "shopping-1.webp"),
      galleryImage("shopping-tour", "shopping-2.webp"),
      galleryImage("shopping-tour", "shopping-4.webp"),
      galleryImage("shopping-tour", "shopping-3.webp"),
    ],
    gallery: [
      {
        title: "Local shopping route",
        description: "A flexible private route for souvenir stops, local browsing, and easy return timing.",
        image: galleryImage("shopping-tour", "shopping-1.webp"),
        alt: "Local shopping and food area in Tanjungpinang Bintan",
      },
      {
        title: "Oleh-oleh stop",
        description: "Shopping routes can include local snack, souvenir, or market stops by request.",
        image: galleryImage("shopping-tour", "shopping-2.webp"),
        alt: "Local Bintan shopping stop for private tour guests",
      },
      {
        title: "Private city transfer",
        description: "Driver support keeps the city route comfortable between shopping locations.",
        image: galleryImage("shopping-tour", "shopping-4.webp"),
        alt: "Tanjungpinang city route for private shopping tour",
      },
    ],
  },
  "spa-wellness-experience": {
    folder: "spa",
    card: galleryImage("spa", "spa-3.webp"),
    hero: [
      galleryImage("spa", "spa-3.webp"),
      galleryImage("spa", "spa-2.webp"),
      galleryImage("spa", "spa-1.webp"),
      galleryImage("spa", "spa-4.webp"),
      galleryImage("spa", "spa-5.webp"),
    ],
    gallery: [
      {
        title: "Wellness day mood",
        description: "A calm visual reference for spa, massage, and slow travel planning in Bintan.",
        image: galleryImage("spa", "spa-3.webp"),
        alt: "Spa and wellness setting in Bintan",
      },
      {
        title: "Treatment coordination",
        description: "Spa timing and private transport can be coordinated around the selected treatment.",
        image: galleryImage("spa", "spa-2.webp"),
        alt: "Spa treatment reference for Bintan wellness experience",
      },
      {
        title: "Relaxed private return",
        description: "Optional transport helps guests keep the wellness day easy from pickup to return.",
        image: galleryImage("spa", "spa-1.webp"),
        alt: "Relaxed spa and wellness activity in Bintan",
      },
    ],
  },
  "beach-hopping-tour": {
    folder: "beach-hopping-tour",
    card: galleryImage("beach-hopping-tour", "beach-hopping-tour-4.webp"),
    hero: [
      galleryImage("beach-hopping-tour", "beach-hopping-tour-4.webp"),
      galleryImage("beach-hopping-tour", "beach-hopping-tour-3.webp"),
      galleryImage("beach-hopping-tour", "beach-hopping-tour-2.webp"),
      galleryImage("beach-hopping-tour", "beach-hopping-tour-1.webp"),
    ],
    gallery: [
      {
        title: "Trikora beach route",
        description: "Beach hopping can be planned around swimming, photography, and relaxed island pacing.",
        image: galleryImage("beach-hopping-tour", "beach-hopping-tour-4.webp"),
        alt: "Trikora Beach route for Bintan beach hopping tour",
      },
      {
        title: "Coastal photo stops",
        description: "The route can move between beach stops with private driver timing.",
        image: galleryImage("beach-hopping-tour", "beach-hopping-tour-3.webp"),
        alt: "Bintan beach scenery for coastal photo stop",
      },
      {
        title: "Optional route pairing",
        description: "Beach routes can be paired with resort areas or simple destination add-ons by request.",
        image: galleryImage("beach-hopping-tour", "beach-hopping-tour-2.webp"),
        alt: "Bintan resort and beach area for private route planning",
      },
    ],
  },
  "customized-tour": {
    folder: "custome",
    card: galleryImage("custome", "destinasi-tanjungpinang-2.webp"),
    hero: [
      galleryImage("custome", "destinasi-tanjungpinang-2.webp"),
      galleryImage("custome", "destinasi-tanjungpinang-1.webp"),
      galleryImage("custome", "destinasi-tanjungpinang-3.webp"),
    ],
    gallery: [
      {
        title: "Custom private route",
        description: "Guests can shape the route around timing, group style, and preferred destinations.",
        image: galleryImage("custome", "destinasi-tanjungpinang-2.webp"),
        alt: "Custom private itinerary route in Bintan",
      },
      {
        title: "Destination add-ons",
        description: "Flexible stops can include photo spots, local food, beaches, or cultural places.",
        image: galleryImage("custome", "destinasi-tanjungpinang-1.webp"),
        alt: "Destination stop for custom Bintan tour",
      },
      {
        title: "Personal itinerary flow",
        description: "The tour can be arranged as a calm private day instead of a fixed public schedule.",
        image: galleryImage("custome", "destinasi-tanjungpinang-3.webp"),
        alt: "Tanjungpinang route option for custom Bintan tour",
      },
    ],
  },
};
