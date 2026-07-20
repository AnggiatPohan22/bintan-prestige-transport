import { carImage } from "./assets";

export const carTypes = [
  {
    name: "One Way Transfer",
    title: "one-way-transfer",
    slug: "one-way-transfer",
    type: "Luxury private transfer",
    shortDescription:
      "A premium private taxi transfer service for airport, ferry, or hotel pickup and drop-off.",
    description:
      "A premium private taxi transfer service for airport, ferry, or hotel pickup and drop-off.",
    image: carImage("toyota-innova.webp"),
    alt: "luxury sedan for private airport transfer",
    capacity: "4 passengers",
    luggage: "2 suitcases",
    priceFrom: "IDR 1.000K",
    features: ["Free Wi-Fi", "Premium Mineral Water", "Private Driver"],
    category: "executive",
  },
  {
    name: "Confortable Alphard",
    title: "Confortable Alphard",
    slug: "comfortable-alphard",
    type: "Private family comfort",
    shortDescription:
      "Spacious premium cabin for resort transfers, flexible island routes, and private families.",
    description:
      "Spacious premium cabin for resort transfers, flexible island routes, and private families.",
    image: carImage("toyota-alparhd.webp"),
    alt: "Luxury MPV for private island transfer",
    capacity: "6 passengers",
    luggage: "4 suitcases",
    priceFrom: "IDR 1.000K",
    features: ["Free Wi-Fi", "Premium Mineral Water", "Private Driver"],
    category: "premium",
  },
  {
    name: "Executive Van",
    title: "Executive Van",
    slug: "executive-van",
    type: "Group concierge vehicle",
    shortDescription:
      "A calm and capable option for tour groups, luggage-heavy arrivals, and longer itineraries.",
    description:
      "A calm and capable option for tour groups, luggage-heavy arrivals, and longer itineraries.",
    image: carImage("toyota-hiace.webp"),
    alt: "Executive van for VIP tour group",
    capacity: "8 passengers",
    luggage: "6 suitcases",
    priceFrom: "IDR 750K",
    features: ["Free Wi-Fi", "Premium Mineral Water", "Private Driver"],
    category: "concierge",
  },
];
