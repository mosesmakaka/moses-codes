module.exports = {
  globDirectory: 'dist/',
  globPatterns: [
    '**/*.{js,css,html,png,svg,ico,json}'
  ],
  swDest: 'dist/service-worker.js',
  runtimeCaching: [
    {
      urlPattern: /https:\/\/api\.github\.com\//,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'github-api-cache',
        networkTimeoutSeconds: 10,
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
    {
      urlPattern: /https:\/\/fonts\.googleapis\.com\//,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'google-fonts-stylesheets',
      },
    },
    {
      urlPattern: /https:\/\/fonts\.gstatic\.com\//,
      handler: 'CacheFirst',
      options: {
        cacheName: 'google-fonts-webfonts',
        expiration: {
          maxEntries: 30,
          maxAgeSeconds: 60 * 60 * 24 * 365,
        },
      },
    },
  ],
}
