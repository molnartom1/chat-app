// frontend/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.VITE_WS_URL': JSON.stringify('wss://chat.pages.dev/ws')
  },
  build: {
    target: 'esnext' // ✅ enables top-level await and modern JS syntax
  }
});
