import { faqs } from "./faqs";
import { navigation } from "./navigation";
import { packages } from "./packages";
import { routes } from "./routes";
import { site } from "./site";
import { tours } from "./tours";
import { transportRoutes } from "./transportRoutes";
import { absoluteUrl } from "./seo";

const sameAs = site.socialLinks;
const transferCatalogRoutes = [...routes, ...transportRoutes];

type OfferSchemaInput = {
  name: string;
  description?: string;
  priceFrom?: string;
  url?: string;
};

export const parseIdrPrice = (priceFrom?: string) => {
  const match = priceFrom?.match(/(?:idr|rp)\s*([\d.,]+)\s*(k)?/i);

  if (!match) {
    return undefined;
  }

  const baseValue = Number.parseInt(match[1].replace(/[.,]/g, ""), 10);

  if (!Number.isFinite(baseValue)) {
    return undefined;
  }

  return String(match[2] ? baseValue * 1000 : baseValue);
};

export const createOfferSchema = ({ name, description, priceFrom, url }: OfferSchemaInput) => {
  const price = parseIdrPrice(priceFrom);
  const offerDescription = [description, !price && priceFrom ? `Quoted as ${priceFrom}.` : ""]
    .filter(Boolean)
    .join(" ");

  return {
    "@type": "Offer",
    name,
    description: offerDescription || undefined,
    url: url ? absoluteUrl(url) : undefined,
    availability: "https://schema.org/InStock",
    ...(price
      ? {
          priceCurrency: "IDR",
          price,
        }
      : {}),
  };
};

export const organizationSchema = {
  "@type": "TravelAgency",
  "@id": `${absoluteUrl("/")}#organization`,
  name: site.name,
  url: absoluteUrl("/"),
  telephone: site.phone,
  email: site.email,
  areaServed: site.address,
  description: site.defaultDescription,
  sameAs,
};

export const localBusinessSchema = {
  "@type": "LocalBusiness",
  "@id": `${absoluteUrl("/")}#localbusiness`,
  name: site.name,
  url: absoluteUrl("/"),
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressLocality: site.addressLocality,
    addressRegion: site.addressRegion,
    addressCountry: site.addressCountry,
  },
  hasMap: site.googleMapsUrl || undefined,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "22:00",
  },
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": `${absoluteUrl("/")}#website`,
  name: site.name,
  url: absoluteUrl("/"),
  publisher: {
    "@id": organizationSchema["@id"],
  },
};

export const navigationSchema = {
  "@type": "SiteNavigationElement",
  name: navigation.map((item) => item.label),
  url: navigation.map((item) => absoluteUrl(item.href)),
};

export const serviceSchemas = [
  {
    "@type": "Service",
    "@id": `${absoluteUrl("/packages/pick-up-drop")}#service`,
    name: "Premium Pick Up & Drop Transfer",
    serviceType: "Private taxi transfer",
    provider: { "@id": organizationSchema["@id"] },
    areaServed: site.address,
    url: absoluteUrl("/packages/pick-up-drop"),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Transfer routes",
      itemListElement: transferCatalogRoutes.map((route) => ({
        ...createOfferSchema({
          name: route.title,
          description: route.description,
          priceFrom: route.priceFrom,
          url: `/packages/pick-up-drop/${route.slug}`,
        }),
        name: route.title,
      })),
    },
  },
  {
    "@type": "Service",
    "@id": `${absoluteUrl("/packages/activities-packages")}#service`,
    name: "Premium Private Activities Packages",
    serviceType: "Private Bintan activities",
    provider: { "@id": organizationSchema["@id"] },
    areaServed: site.address,
    url: absoluteUrl("/packages/activities-packages"),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Activities packages",
      itemListElement: tours.map((tour) => ({
        ...createOfferSchema({
          name: tour.title,
          description: tour.description,
          priceFrom: tour.priceFrom,
          url: `/packages/activities-packages/${tour.slug}`,
        }),
        name: tour.title,
      })),
    },
  },
];

export const faqSchema = {
  "@type": "FAQPage",
  "@id": `${absoluteUrl("/")}#faq`,
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const breadcrumbSchema = (items: Array<{ label: string; href: string }>) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.label,
    item: absoluteUrl(item.href),
  })),
});

export const homeSchema = [
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
  navigationSchema,
  ...serviceSchemas,
  faqSchema,
];

export const packageSchema = (type: "transfer" | "tour") => {
  const service = type === "transfer" ? serviceSchemas[0] : serviceSchemas[1];

  return [organizationSchema, localBusinessSchema, service];
};

export const packagesOverviewSchema = {
  "@type": "ItemList",
  itemListElement: packages.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.title,
    url: absoluteUrl(`/packages/${item.slug}`),
  })),
};
