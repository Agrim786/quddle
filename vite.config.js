import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,      // 👈 allows access from your local IP (0.0.0.0)
    port: 5173,      // 👈 optional: default Vite port
    open: false,     // 👈 prevents auto-opening browser (optional)
  },
  preview: {
    host: true,      // 👈 same for `vite preview`
    port: 4173,      // 👈 default preview port
  },
});
