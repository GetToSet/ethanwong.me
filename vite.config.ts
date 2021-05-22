import path from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "~": path.resolve(__dirname, "./node_modules"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/scss/theme.scss";',
      },
    },
  },
});
