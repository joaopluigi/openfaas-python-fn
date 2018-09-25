/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/icon/icon-192x192.png",
    "revision": "91c11b968779e952ace8bf95759d34fe"
  },
  {
    "url": "assets/icon/icon-48x48.png",
    "revision": "91c11b968779e952ace8bf95759d34fe"
  },
  {
    "url": "assets/icon/icon-96x96.png",
    "revision": "91c11b968779e952ace8bf95759d34fe"
  },
  {
    "url": "index.html",
    "revision": "83c90a9a6faea405dbcd47ed1fc5e91c"
  },
  {
    "url": "manifest.json",
    "revision": "1f1232b578cb125bc22a55493dbfd7a4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, workbox.strategies.cacheFirst({ "cacheName":"images", plugins: [new workbox.expiration.Plugin({"maxEntries":10,"purgeOnQuotaError":false})] }), 'GET');
workbox.routing.registerRoute(/\.(?:js|css)$/, workbox.strategies.staleWhileRevalidate({ "cacheName":"static-resources", plugins: [] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/, workbox.strategies.staleWhileRevalidate({ "cacheName":"google-fonts-stylesheets", plugins: [] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/, workbox.strategies.cacheFirst({ "cacheName":"google-fonts-webfonts", plugins: [new workbox.expiration.Plugin({"maxAgeSeconds":31536000,"maxEntries":30,"purgeOnQuotaError":false})] }), 'GET');
