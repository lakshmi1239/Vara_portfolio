import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Vara_portfolio/',  // This must match your repo name with slashes
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
