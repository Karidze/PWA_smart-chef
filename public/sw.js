const CACHE_NAME = 'smartchef-cache-v2';

// Ресурсы, которые кэшируем сразу (Pre-caching)
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/pwa-192x192.png',
  '/pwa-512x512.png',
  '/screenshot-mobile.jpg', 
  '/screenshot-desktop.png' 
];

// 1. Жизненный цикл: INSTALL
// Происходит при первой загрузке или обновлении файла sw.js
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Pre-caching basic assets');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting(); // Принудительно активируем новый SW
});

// 2. Жизненный цикл: ACTIVATE
// Происходит после установки. Идеально для очистки старого кэша.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Removing old cache', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  return self.clients.claim(); // Берем под контроль все вкладки немедленно
});

// 3. Жизненный цикл: FETCH + Стратегия Network First
// Перехватываем все сетевые запросы приложения
self.addEventListener('fetch', (event) => {
  // Добавляем проверку: игнорируем всё, кроме http и https
  
  if (!(event.request.url.indexOf('http') === 0)) return;

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        return caches.open(CACHE_NAME).then((cache) => {
          // Кэшируем только если запрос успешный
          if (networkResponse.status === 200) {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        });
      })
      .catch(() => {
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) return cachedResponse;
          return caches.match('/index.html');
        });
      })
  );
});