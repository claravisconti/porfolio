import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // 1. Dividimos el código en trozos más pequeños (Chunks)
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Si el código viene de node_modules, lo ponemos en un archivo llamado 'vendor'
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
    // 2. Subimos un poco el límite de advertencia para ser realistas con React
    chunkSizeWarningLimit: 600,
  },
})