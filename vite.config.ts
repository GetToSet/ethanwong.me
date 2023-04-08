import path from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), cssInjectedByJsPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "~": path.resolve(__dirname, "./node_modules"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
        additionalData: '@import "@/scss/theme.scss";',
      },
    },
  },
});
