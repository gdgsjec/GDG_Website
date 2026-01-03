// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

import AstroPWA from "@vite-pwa/astro";
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(),
  AstroPWA({
    mode: 'production',
    registerType: 'autoUpdate',
    manifest: {
      name: 'GDG on Campus SJEC',
      short_name: 'GDG SJEC',
      start_url: '/',
      display: 'standalone',
      theme_color: '#ffffff',
      icons: [
        {
          src: '/icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      globDirectory: './dist',
      globPatterns: ['**/*.{js,css,html,ico,png,jpg,webp,svg}'],
      navigateFallback: '/',
    }
  })
  ],
});