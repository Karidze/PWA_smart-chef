import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Исправленный импорт
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: { enabled: true },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'SmartChef: AI Recipe Finder',
        short_name: 'SmartChef',
        description: 'Cook with what’s in your fridge!',
        theme_color: '#ff4757', // Цвет шапки (твой основной красный)
        background_color: '#ffffff', // Цвет сплэш-скрина при запуске
        start_url: '/',
        display: 'standalone',
        orientation: 'portrait', // Фиксируем ориентацию для удобства
        categories: ['food', 'lifestyle'],
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable' // Позволяет иконке адаптироваться под форму кнопок в Android
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})