import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' 
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: { enabled: true },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        id: '/', 
        name: 'SmartChef: AI Recipe Finder',
        short_name: 'SmartChef',
        description: 'Cook with what’s in your fridge!',
        theme_color: '#ff4757', 
        background_color: '#ffffff', 
        start_url: '/',
        display: 'standalone',
        orientation: 'portrait', 
        categories: ['food', 'lifestyle'],
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any' 
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable' 
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          }
        ],
        screenshots: [
          {
            src: 'screenshot-mobile.jpg', 
            sizes: '623x1280',
            type: 'image/jpeg', 
            form_factor: 'narrow',
            label: 'SmartChef Home Screen'
          },
          {
            src: 'screenshot-desktop.png',
            sizes: '1786x949', 
            type: 'image/png',
            form_factor: 'wide',
            label: 'SmartChef Desktop View'
          }
        ]
      }
    })
  ]
})