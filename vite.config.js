import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,      // allow local network access
    port: 5173,
    open: false,

    // ⭐ PROXY FIX — CRITICAL FOR COOKIE TO WORK
    proxy: {
      "/api": {
        target: "http://localhost:5000", // your backend
        changeOrigin: true,
        secure: false,
      },
    },
  },

  preview: {
    host: true,
    port: 4173,
  },
});
