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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "00610c5360ec1d27ffa169f51fb09fe5"
  },
  {
    "url": "assets/css/0.styles.83e51879.css",
    "revision": "330e90f45cbd63ad243a90fc3b91b625"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2b8d9514.js",
    "revision": "188935b59721d67291af704266c62b79"
  },
  {
    "url": "assets/js/11.7c6e80d7.js",
    "revision": "a5b13f92d1145ad037fc4670c5aaedab"
  },
  {
    "url": "assets/js/2.bea9e773.js",
    "revision": "ac3c07dd1687b332f8d66d63c115fd6c"
  },
  {
    "url": "assets/js/3.dad9bf50.js",
    "revision": "79d535a9dd7f81156e73c93b63860feb"
  },
  {
    "url": "assets/js/4.7d4c2410.js",
    "revision": "946d0f7381a24b6ae6799b4a26e04b13"
  },
  {
    "url": "assets/js/5.44f944b9.js",
    "revision": "2eaf62174d6ec9a6c5ec0d7f2e42a13b"
  },
  {
    "url": "assets/js/6.b9c3d1cf.js",
    "revision": "ed81504314d4b05bb799f1ab575673a5"
  },
  {
    "url": "assets/js/7.6c867399.js",
    "revision": "08f5c1a1b75b89ab365de77768b0a0b2"
  },
  {
    "url": "assets/js/8.6599f802.js",
    "revision": "77ce0f7a970ef8c275907a077b5460e9"
  },
  {
    "url": "assets/js/9.28f48674.js",
    "revision": "d62007b6715820fba2d4b528f6240d53"
  },
  {
    "url": "assets/js/app.64994806.js",
    "revision": "f0d2c1ffd6df3052b9ffd5243a6a5584"
  },
  {
    "url": "config.html",
    "revision": "29dc32119420f8d2afb3e99328d54b18"
  },
  {
    "url": "guide/index.html",
    "revision": "5b265b6c90dc479b5a090861787d7bad"
  },
  {
    "url": "images/eg1.png",
    "revision": "b62c3b6bbd03f2c8ebe3bd14a50fe956"
  },
  {
    "url": "images/eg12.png",
    "revision": "716c3bede731ed6eecb026377f31aac1"
  },
  {
    "url": "images/eg13.png",
    "revision": "2a1e67d52cdc15dc20ac31853b4533de"
  },
  {
    "url": "images/eg14.png",
    "revision": "59e1708d73f15361af7806d73225b2f9"
  },
  {
    "url": "images/eg2.png",
    "revision": "f1e21cbe58ac77d47b577c720ac00eb2"
  },
  {
    "url": "images/eg3.png",
    "revision": "9a32d8d4fdc71874de4dd746a01f562d"
  },
  {
    "url": "images/eg4.png",
    "revision": "3a8c53ffdfeb1d4834618a22acae97bf"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/photo.jpg",
    "revision": "d4d77052d44bea42bbfc4dba196bde93"
  },
  {
    "url": "index.html",
    "revision": "94107bfc3f16ad63aee2ca13a62ce047"
  },
  {
    "url": "posts/about.html",
    "revision": "b0dd14ddf294e168366c46a954e43a1c"
  },
  {
    "url": "posts/accumulate.html",
    "revision": "bfe52a5da0ced6c230d901d10db9f3d3"
  },
  {
    "url": "posts/algorithm.html",
    "revision": "0c036b9c3eba2a3a36d21eef9b244c0d"
  },
  {
    "url": "posts/index.html",
    "revision": "82f0f09b69409b341f24c7475c4c4493"
  },
  {
    "url": "posts/others.html",
    "revision": "589ec5fabb7637861ed9f5b150ac877e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
