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
    "url": "assets/css/amp.css",
    "revision": "f4789bca3d164e8224c7c4474d3a046e"
  },
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
    "url": "assets/json/app-data.json",
    "revision": "30f393453825ea753c40abdb52b0c40e"
  },
  {
    "url": "index.html",
    "revision": "56926757946e7befe6e8b83eb22b1873"
  },
  {
    "url": "manifest.json",
    "revision": "9ee8357d51bdc1bf87a29c51a156854f"
  },
  {
    "url": "workbox-config.js",
    "revision": "1569e6de4afc607b8a9534e5bbc52bf1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, workbox.strategies.cacheFirst({ "cacheName":"images", plugins: [new workbox.expiration.Plugin({"maxEntries":10,"purgeOnQuotaError":false})] }), 'GET');
workbox.routing.registerRoute(/\.(?:js|css)$/, workbox.strategies.staleWhileRevalidate({ "cacheName":"static-resources", plugins: [] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/, workbox.strategies.staleWhileRevalidate({ "cacheName":"google-fonts-stylesheets", plugins: [] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/, workbox.strategies.cacheFirst({ "cacheName":"google-fonts-webfonts", plugins: [new workbox.expiration.Plugin({"maxAgeSeconds":31536000,"maxEntries":30,"purgeOnQuotaError":false})] }), 'GET');
