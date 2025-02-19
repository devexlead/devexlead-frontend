import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 52100,
    host: true, // Binds to 0.0.0.0 for external access
    allowedHosts: ['app.devexlead.local'], // Allow custom domain
  },
});
