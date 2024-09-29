import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Set the output directory to 'build'
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          // Add more chunks as needed
        }
      }
    },
    // chunkSizeWarningLimit: 1000 // Increase the limit to 1000 kB
  }
});
