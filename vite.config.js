import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5175,
    allowedHosts:
    
      [
        'intellectual-forget-bought-shade.trycloudflare.com',
        'ranging-ultimately-stripes-recordings.trycloudflare.com',
        'finder-namespace-wish-moms.trycloudflare.com',
        'terrain-drilling-discussion-kept.trycloudflare.com',
        'all',
        '9cda9c74acc140fd-103-183-83-151.serveousercontent.com',
        '.serveousercontent.com',
        'language-secretariat-contribute-cam.trycloudflare.com'
      ]
  },
})
