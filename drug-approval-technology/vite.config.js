import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteTailwindPlugin from 'vite-plugin-tailwindcss';
import WindiCSSPlugin from 'vite-plugin-windicss';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ViteTailwindPlugin(),
    WindiCSSPlugin(),
    react(),
  ]
})
