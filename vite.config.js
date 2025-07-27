import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allows access via local IP (e.g. 192.168.1.X)
    port: 5173,       // Optional, defaults to 5173
  }
});
