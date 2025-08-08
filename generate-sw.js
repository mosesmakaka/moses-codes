const { generateSW } = require('workbox-build');

generateSW({
  globDirectory: 'dist',
  globPatterns: [
    '**/*.{html,js,css,png,jpg,svg,json}'
  ],
  swDest: 'dist/sw.js',
  clientsClaim: true,
  skipWaiting: true,
}).then(({ count, size }) => {
  console.log(`Generated service worker, which will precache ${count} files, totaling ${size} bytes.`);
}).catch(err => {
  console.error('Service worker generation failed:', err);
});
