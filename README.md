# SmartChef PWA 👨‍🍳 

**SmartChef** is a Progressive Web Application (PWA) designed to help users find recipes based on the ingredients they have in their fridge. It focuses on performance, offline accessibility, and native mobile experience.

## 🛠 Tech Stack
- **Library:** React 18
- **Build Tool:** Vite
- **Routing:** React Router DOM
- **PWA Engine:** Vite PWA Plugin
- **Deployment:** Vercel (HTTPS)

## 📱 PWA Requirements Checklist

### 1. Installability (Manifest)
The application includes a comprehensive web manifest (configured in `vite.config.js`). It defines:
- **Icons:** Custom 192x192 and 512x512 icons for high-resolution displays.
- **Display:** `standalone` mode to provide a full-screen app experience without browser UI.

### 2. Native Capabilities
The app leverages two native device features:
- **Web Share API:** Integrated into the `RecipeDetail` page, allowing users to share recipes through the system's native sharing dialog.
- **Vibration API (Haptics):** Provides tactile feedback when users interact with ingredient buttons or save a recipe to favorites.

### 3. Offline Experience (Service Workers)
- **Service Worker:** Powered by Workbox (via `vite-plugin-pwa`), it caches core assets (HTML, CSS, JS) and recipe data.
- **Background Sync:** The app continues to function without an internet connection.
- **Offline Indicator:** A notification banner appears in the UI when the connection is lost (implemented in `App.jsx`).

### 4. Application Views
The app consists of 4 logically connected views:
- **Smart Chef:** Main ingredient-based search engine.
- **All Recipes:** Catalog with category filtering and search.
- **Recipe Detail:** Detailed instructions and ingredient amounts.
- **Favorites:** Personal collection of saved recipes stored in `LocalStorage`.

### 5. Responsiveness & Performance
- **Mobile First:** Optimized for one-handed use with a bottom navigation bar.
- **Desktop Support:** Grid layouts expand to multi-column views on larger screens.
- **Performance:** Minimal bundle size and optimized images for fast loading.

## 🚀 How to Run

1. **Clone the repository:**
   ```bash
   git clone "https://github.com/Karidze/PWA_smart-chef"