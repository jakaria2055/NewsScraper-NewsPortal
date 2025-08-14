import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
    server: {
    proxy: {
      '/api/': {
        target: "https://news-scraper-news-portal.vercel.app",
        changeOrigin:true,
        secure:true,
      },
    },
  },
})
