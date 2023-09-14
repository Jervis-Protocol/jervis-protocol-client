import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '',
  server: {
    proxy: {
        '/api': {
            target: 'http://localhost:3585/api',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ''),
            secure: false,
            ws: true
        },
        '/images': {
            target: 'http://localhost:3585/images',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/images/, ''),
            secure: false,
            ws: true
        }
    }
  }
})
