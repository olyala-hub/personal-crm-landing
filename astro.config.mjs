import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://tgfdh.xyz",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
