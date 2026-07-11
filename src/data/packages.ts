import { routes } from "./routes";
import { tours } from "./tours";

export const packages = [
  {
    title: "Taxy Transfer",
    slug: "taxi-transfer",
    description:
      "More options for private taxi transfer with premium sedan, luxury MPV, or executive van. Flexible timing and multi-stop routes available.",
    image: "/images/cars/toyota-avanza.webp",
    alt: "Premium private taxi transfer service",
    priceFrom: "IDR 300K",
    duration: "Flexible",
    capacity: "1-8 passengers",
    category: "taxi",
    whatsappMessage: "Hello, I want to ask about Taxi Transfer service.",
    items: routes,
  },
  {
    title: "Activities Packages",
    slug: "activities-packages",
    description:
      "Choose private Bintan activities with comfortable transport, flexible timing, and clear WhatsApp-first coordination.",
    image: "/images/tours/snorkeling.webp",
    alt: "Private Bintan activities package service",
    priceFrom: "IDR 350K",
    duration: "Flexible",
    capacity: "1-8 passengers",
    category: "tour",
    whatsappMessage: "Hello, I want to ask about Activities Packages.",
    items: tours,
  },
];
