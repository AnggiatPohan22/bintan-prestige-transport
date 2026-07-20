import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

const fallbackSiteUrl = "https://bintanprestigetransport.com";

const normalizeSiteUrl = (value) => {
  try {
    return new URL(value || fallbackSiteUrl).origin;
  } catch {
    return fallbackSiteUrl;
  }
};

export default defineConfig({
  site: normalizeSiteUrl(process.env.PUBLIC_SITE_URL),
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
