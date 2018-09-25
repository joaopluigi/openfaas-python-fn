module.exports = {
  "globDirectory": ".",
  "globPatterns": [
    "**/*.{css,png,html,json,js}"
  ],
  "swDest": "sw.js",
  // Define runtime caching rules.
  runtimeCaching: [
    {
      // Match any request ends with .png, .jpg, .jpeg or .svg.
      urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

      // Apply a cache-first strategy.
      handler: 'cacheFirst',

      options: {
        // Use a custom cache name.
        cacheName: 'images',

        // Only cache 10 images.
        expiration: {
          maxEntries: 10,
        },
      },
    },
    {
      // Match any request ends with .js
      urlPattern: /\.(?:js|css)$/,

      // Apply a cache-first strategy.
      handler: 'staleWhileRevalidate',

      options: {
        // Use a custom cache name.
        cacheName: 'static-resources'
      },
    },
    {
      // Match any request ends with .png, .jpg, .jpeg or .svg.
      urlPattern: /^https:\/\/fonts\.googleapis\.com/,

      // Apply a staleWhileRevalidate strategy.
      handler: 'staleWhileRevalidate',

      options: {
        // Use a custom cache name.
        cacheName: 'google-fonts-stylesheets'
      },
    },
    {
      // Match any request ends with .png, .jpg, .jpeg or .svg.
      urlPattern: /^https:\/\/fonts\.gstatic\.com/,

      // Apply a cacheFirst strategy.
      handler: 'cacheFirst',

      options: {

        // Use a custom cache name.
        cacheName: 'google-fonts-webfonts',

        // Only cache 10 images.
        expiration: {
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30
        },
      },
    },
  ],
};