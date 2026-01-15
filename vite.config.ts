import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // CRITICAL: This ensures assets load correctly on GitHub Pages/subdirectories
  define: {
    // This allows the app to access process.env.API_KEY without crashing in the browser
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || '')
  }
});