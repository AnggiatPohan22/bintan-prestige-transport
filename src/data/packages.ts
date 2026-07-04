import { routes } from "./routes";
import { tours } from "./tours";

export const packages = [
  {
    title: "Pick Up & Drop",
    slug: "pick-up-drop",
    description:
      "Premium airport, ferry, hotel, and custom route transfer with private driver comfort.",
    image: "/images/cars/avanza.webp",
    alt: "Premium private taxi transfer service",
    priceFrom: "IDR 300K",
    duration: "Flexible",
    capacity: "1-8 passengers",
    category: "taxi",
    whatsappMessage: "Hello, I want to ask about Pick Up & Drop service.",
    items: routes,
  },
  {
    title: "Island Tour",
    slug: "island-tour",
    description:
      "Concierge-style private island tour for beaches, viewpoints, culture, and night routes.",
    image: "/images/tours/snorkeling.jpg",
    alt: "Luxury private island tour service",
    priceFrom: "IDR 750K",
    duration: "Half day or full day",
    capacity: "1-8 passengers",
    category: "tour",
    whatsappMessage: "Hello, I want to ask about Island Tour packages.",
    items: tours,
  },
];
