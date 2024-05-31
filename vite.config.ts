import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

import { resolve } from "path";

export default defineConfig({
  plugins: [svelte()],
  base: "/id-2223-s2/techkeuzetool/",
  root: "./",
  publicDir: "public",
  server: {
    host: "0.0.0.0",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
