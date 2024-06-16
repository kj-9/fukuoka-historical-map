import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte()],
  // for github pages
  site: "https://kj-9.github.io",
  base: "/fukuoka-historical-map",
});
