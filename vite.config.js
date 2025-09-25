import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const isDev = process.env.NODE_ENV === "development"; // <-- define isDev

export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ['@react-pdf/renderer']
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    // Use environment variable for base URL
    "import.meta.env.VITE_BASE_URL": JSON.stringify(
      isDev ? "/api" : "https://api.boiaro.com"
    ),
  },
  server: {
    proxy: isDev
      ? {
          "/api": {
            target: "https://api.boiaro.com",
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ""),
          },
        }
      : undefined,
  },
});
