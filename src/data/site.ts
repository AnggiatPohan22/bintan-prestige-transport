const envValue = (value: string | undefined, fallback: string) => {
  const trimmed = value?.trim();

  return trimmed && trimmed.length > 0 ? trimmed : fallback;
};

const normalizeSiteUrl = (value: string) => {
  try {
    return new URL(value).origin;
  } catch {
    return "https://example.com";
  }
};

const csvList = (value: string | undefined) =>
  value
    ?.split(",")
    .map((item) => item.trim())
    .filter(Boolean) ?? [];

export const site = {
  name: envValue(import.meta.env.PUBLIC_SITE_NAME, "Travel Agent Private Taxi & Tour"),
  shortName: envValue(import.meta.env.PUBLIC_SITE_SHORT_NAME, "Travel Agent"),
  tagline: envValue(import.meta.env.PUBLIC_SITE_TAGLINE, "Private luxury taxi and island tour concierge"),
  url: normalizeSiteUrl(envValue(import.meta.env.PUBLIC_SITE_URL, "https://example.com")),
  defaultTitle: envValue(import.meta.env.PUBLIC_SITE_DEFAULT_TITLE, "Premium Private Taxi & Island Tour Experience"),
  defaultDescription:
    envValue(
      import.meta.env.PUBLIC_SITE_DESCRIPTION,
      "Premium private taxi, airport transfer, VIP driver, and island tour experience with WhatsApp-first reservations.",
    ),
  logoImage: envValue(import.meta.env.PUBLIC_LOGO_IMAGE, ""),
  defaultOgImage: envValue(import.meta.env.PUBLIC_DEFAULT_OG_IMAGE, "/images/brand/og-placeholder.jpg"),
  whatsappNumber: envValue(import.meta.env.PUBLIC_WHATSAPP_NUMBER, "6281234567890"),
  whatsappMessage: envValue(
    import.meta.env.PUBLIC_WHATSAPP_MESSAGE,
    "Hello, I want to check availability for a premium taxi or island tour service.",
  ),
  email: envValue(import.meta.env.PUBLIC_CONTACT_EMAIL, "hello@example.com"),
  phone: envValue(import.meta.env.PUBLIC_CONTACT_PHONE, "+62 812-3456-7890"),
  address: envValue(import.meta.env.PUBLIC_BUSINESS_ADDRESS, "Bintan, Riau Islands, Indonesia"),
  addressLocality: envValue(import.meta.env.PUBLIC_ADDRESS_LOCALITY, "Bintan"),
  addressRegion: envValue(import.meta.env.PUBLIC_ADDRESS_REGION, "Riau Islands"),
  addressCountry: envValue(import.meta.env.PUBLIC_ADDRESS_COUNTRY, "ID"),
  responseWindow: envValue(import.meta.env.PUBLIC_RESPONSE_WINDOW, "Daily, 08:00 - 22:00"),
  heroImage: envValue(import.meta.env.PUBLIC_HERO_IMAGE, ""),
  heroImages: csvList(import.meta.env.PUBLIC_HERO_IMAGES),
  heroVideo: envValue(import.meta.env.PUBLIC_HERO_VIDEO, "/videos/hero-luxury-drive.mp4"),
  googleMapsUrl: envValue(import.meta.env.PUBLIC_GOOGLE_MAPS_URL, ""),
  socialLinks: csvList(import.meta.env.PUBLIC_SOCIAL_LINKS),
};
