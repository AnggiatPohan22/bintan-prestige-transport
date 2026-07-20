import { carImage } from "./assets";

export const routes = [
  {
    title: "Package Transfer with Avanza & Innova",
    slug: "package-transfer-avanza-innova",
    description: "Avanza or Innova 7 seater private transfer with one way, half-day, and full-day package options.",
    overview:
      "A premium private taxi transfer service for airport, ferry, or hotel pickup and drop-off. Guests can also choose half-day or full-day island tour packages to explore the island's attractions with a private driver.",
    image: carImage("toyota-innova-2.webp"),
    heroImages: [carImage("toyota-avanza.webp"), carImage("toyota-innova-2.webp"), carImage("toyota-innova.webp")],
    alt: "package transfer with avanza and innova for private taxi service",
    priceFrom: "Capacity : 7 Seater",
    duration: "Depending on route",
    capacity: "7 Seater",
    category: "taxy",
    mood: "One way transfer or rent for half-day or full-day island tour",
    goodFor: ["Airport arrival", "Hotel check-in", "Couples", "Business guests", "Harbor transfer", "Ferry terminal transfer", "Half-day island tour", "Full-day island tour"],
    highlights: [
      "One way transfer: IDR 350.000",
      "Half day (5 hours): IDR 500.000",
      "Full day (8 hours): IDR 800.000",
      "Optional multi-stop arrangements for sightseeing",
      "Luggage-friendly coordination for guests",
    ],
    packageDetails: [
      {
        title: "One Way Transfer",
        value: "IDR 350.000",
        description:
          "A direct private transfer for airport, ferry terminal, hotel, or resort movement with clear pickup timing and luggage-friendly coordination.",
      },
      {
        title: "Round Trip",
        value: "IDR 700.000",
        description:
          "A round-trip private transfer for airport, ferry terminal, hotel, or resort movement with clear pickup timing and luggage-friendly coordination.",
      },
      {
        title: "Half Day (5 hours)",
        value: "IDR 500.000",
        description:
          "A flexible short route for guests who want relaxed island movement, lunch stops, or several nearby destinations with a private driver.",
      },
      {
        title: "Full Day (8 hours)",
        value: "IDR 800.000",
        description:
          "A full-day private car package for guests who want more stops, easier pacing, and a comfortable return to hotel after exploring Bintan.",
      },
    ],
    itinerary: [
      "Share pickup point, drop-off point, and travel date",
      "Confirm guest count, luggage, and preferred vehicle",
      "Driver pickup at the agreed location",
      "Private transfer or island tour with optional stops",
      "Drop-off and optional next booking support",
    ],
    includes: ["Private taxi", "Route confirmation", "Luggage planning", "WhatsApp concierge"],
    bookingNotes: [
      "Share full pickup and drop-off locations for accurate quote.",
      "Multi-stop routes should be confirmed before booking.",
      "Vehicle availability may depend on date and group size.",
    ],
    relatedLinks: [
      {
        label: "Airport pickup guide",
        href: "/blog/bintan-airport-pickup-private-transfer-guide",
        description: "Read arrival timing and luggage planning tips before booking.",
      },
      {
        label: "Hotel transfer guide",
        href: "/blog/hotel-to-hotel-private-taxi-bintan",
        description: "Useful for resort, dinner, and point-to-point movement.",
      },
      {
        label: "Hiace group transfer",
        href: "/packages/pick-up-drop/package-transfer-hiace",
        description: "Compare this option if your group needs more seats.",
      },
    ],
    whatsappMessage: "Hello, I want to book a package transfer with Avanza or Innova.",
  },
  {
    title: "Package Transfer with Hiace",
    slug: "package-transfer-hiace",
    description: "Hiace 14 seater private transfer for larger groups with one way, half-day, and full-day package options.",
    overview:
      "A premium private taxi transfer service using Hiace for larger groups or families. Guests can enjoy a comfortable ride from the airport, ferry, or hotel to their destination with a private driver.",
    image: carImage("toyota-hiace-3.webp"),
    heroImages: [carImage("toyota-hiace-3.webp"), carImage("toyota-hiace.webp"), carImage("executive-van.webp")],
    alt: "Private car drop to ferry terminal",
    priceFrom: "Capacity : 14 Seater",
    duration: "Depending on route",
    capacity: "14 Seater",
    category: "taxy",
    mood: "Package transfer for larger groups or families",
    goodFor: ["Ferry departure", "Hotel checkout", "Families", "Large groups", "Harbor transfer", "Ferry terminal transfer"],
    highlights: [
      "One way transfer: IDR 700.000",
      "Half day (5 hours): IDR 1.000.000",
      "Full day (8 hours): IDR 1.200.000",
      "Optional multi-stop arrangements for sightseeing",
    ],
    packageDetails: [
      {
        title: "One Way Transfer",
        value: "IDR 700.000",
        description:
          "A private Hiace transfer for groups or families moving between airport, ferry terminal, hotel, resort, or selected Bintan areas.",
      },
      {
        title: "Round Trip",
        value: "IDR 1.400.000",
        description:
          "A round-trip private transfer for airport, ferry terminal, hotel, or resort movement with clear pickup timing and luggage-friendly coordination.",
      },
      {
        title: "Half Day (5 hours)",
        value: "IDR 1.000.000",
        description:
          "A comfortable half-day group route for several stops, family plans, or compact island movement without splitting vehicles.",
      },
      {
        title: "Full Day (8 hours)",
        value: "IDR 1.200.000",
        description:
          "A full-day Hiace package for larger groups who need space, steady timing, and a private driver for a complete Bintan route.",
      },
    ],
    itinerary: [
      "Share pickup point, drop-off point, and travel date",
      "Confirm guest count, luggage, and preferred vehicle",
      "Driver pickup at the agreed location",
      "Private transfer with optional stops",
      "Drop-off and optional next booking support",
    ],
    includes: ["Private taxi", "Pickup timing guidance", "Route confirmation", "WhatsApp concierge"],
    bookingNotes: [
      "Share full pickup and drop-off locations for accurate quote.",
      "Multi-stop routes should be confirmed before booking.",
      "Hiace availability may depend on date and group size.",
    ],
    relatedLinks: [
      {
        label: "Harbour pickup guide",
        href: "/blog/bintan-harbour-pickup-ferry-transfer-guide",
        description: "Plan ferry arrival, terminal pickup, and resort transfer details.",
      },
      {
        label: "Avanza or Innova transfer",
        href: "/packages/pick-up-drop/package-transfer-avanza-innova",
        description: "Compare a smaller vehicle option for lighter groups.",
      },
      {
        label: "Alphard premium transfer",
        href: "/packages/pick-up-drop/package-transfer-alphard",
        description: "Review premium cabin support for VIP movement.",
      },
    ],
    whatsappMessage: "Hello, I want to book a package transfer with Hiace.",
  },
  {
    title: "Package Transfer with Alphard",
    slug: "package-transfer-alphard",
    description: "Alphard 4 seater premium private transfer with one way, half-day, and full-day arrangements by request.",
    overview:
      "A private luxury transfer service using Alphard for VIP guests. Enjoy a premium taxi experience with a private driver from the airport, ferry, or hotel to your destination.",
    image: carImage("toyota-alphard-2.webp"),
    heroImages: [carImage("toyota-alphard-2.webp"), carImage("alphard-car.webp"), carImage("luxury-mpv.webp")],
    alt: "Luxury private taxi transfer with Alphard",
    priceFrom: "Capacity : 4 Seater",
    duration: "Flexible evening or day timing",
    capacity: "4 Seater",
    category: "taxy",
    mood: "Luxury transfer for VIP guests",
    goodFor: ["Dinner transfer", "Resort movement", "Couples", "Night route", "VIP guests", "Evening transfer", "Private dining experience"],
    highlights: [
      "One way transfer: By request",
      "Half day: By request",
      "Full day: IDR 4.500.000",
      "Optional multi-stop arrangements for sightseeing or dining",
    ],
    packageDetails: [
      {
        title: "Island Full Day Tour",
        value: "IDR 4.500.000",
        description:
          "A refined Alphard option for premium island movement, resort transfers, dining plans, and calm day routes with elevated comfort.",
      },
      {
        title: "Customizable Itineraries",
        value: "Private Plan",
        description:
          "Route timing, destination stops, dining plans, and return flow can be shaped around the guest schedule before confirmation.",
      },
      {
        title: "Dedicated Local Guide Chauffeur",
        value: "Concierge Ride",
        description:
          "A dedicated local chauffeur supports timing, route flow, and practical recommendations so the experience feels smooth and personal.",
      },
    ],
    itinerary: [
      "Share pickup point, drop-off point, and travel date",
      "Confirm guest count, luggage, and preferred vehicle",
      "Driver pickup at the agreed location",
      "Private transfer with optional stops for dining or sightseeing",
      "Drop-off and optional next booking support",
    ],
    includes: ["Private taxi", "Evening timing support", "Route planning", "WhatsApp concierge"],
    bookingNotes: [
      "Share full pickup and drop-off locations for accurate quote.",
      "Multi-stop routes should be confirmed before booking.",
      "Alphard availability may depend on date and group size.",
    ],
    relatedLinks: [
      {
        label: "Hotel transfer guide",
        href: "/blog/hotel-to-hotel-private-taxi-bintan",
        description: "Read when to book ahead for resort and dinner transfers.",
      },
      {
        label: "Avanza or Innova transfer",
        href: "/packages/pick-up-drop/package-transfer-avanza-innova",
        description: "Compare a practical transfer option for simple movement.",
      },
      {
        label: "Contact concierge",
        href: "/contact",
        description: "Confirm premium availability and timing before booking.",
      },
    ],
    whatsappMessage: "Hello, I want to book a luxury transfer with Alphard.",
  },
];
