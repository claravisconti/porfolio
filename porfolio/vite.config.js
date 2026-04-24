import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // ← Verifica que diga @vitejs/ y no @react-dev/
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})