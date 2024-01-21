import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteTailwindPlugin from 'vite-plugin-tailwindcss';
import WindiCSSPlugin from 'vite-plugin-windicss';

export default defineConfig({
  plugins: [
    ViteTailwindPlugin(),
    WindiCSSPlugin(),
    react(),
  ],
  esbuild: {
    jsxFactory: 'React.createElement',
    include: /\.(tsx?|jsx?)$/,
    exclude: [],
    loader: 'jsx'
  },
});
