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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "bf27f20e9dec268fca09adba2054e402"
  },
  {
    "url": "assets/css/0.styles.a7880592.css",
    "revision": "5bde3b3b162fee7d8aecf564f799cab8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.cf2cfa44.js",
    "revision": "69a4b5a3ef216254c657b86fe1fbfb42"
  },
  {
    "url": "assets/js/10.0277ffd4.js",
    "revision": "e8904011a5b2482470f942ab17891ed3"
  },
  {
    "url": "assets/js/11.d4d2d97c.js",
    "revision": "f5a8003c2a6bb60faa4e7a267877170c"
  },
  {
    "url": "assets/js/12.f04acebe.js",
    "revision": "90251245b979056700e635137c1b5176"
  },
  {
    "url": "assets/js/13.b4935de5.js",
    "revision": "90fd55f7cb1e5909bafbbef7cbf0386d"
  },
  {
    "url": "assets/js/14.f4d402c1.js",
    "revision": "ea9fc76a90fab61c438024ff707a0973"
  },
  {
    "url": "assets/js/15.c256a134.js",
    "revision": "f05a7adf666a73482772029acf0006fa"
  },
  {
    "url": "assets/js/16.083e59e8.js",
    "revision": "1495d5edd6e0fd283c93906fff5672ad"
  },
  {
    "url": "assets/js/17.37212025.js",
    "revision": "c49b24b9196841c6b011467806ccf139"
  },
  {
    "url": "assets/js/18.ffd73e3e.js",
    "revision": "88d82cc213a74e11c4fc26f401058ab7"
  },
  {
    "url": "assets/js/19.ec19da25.js",
    "revision": "5da08ba0e6480f1369f72090173138fc"
  },
  {
    "url": "assets/js/20.9b72d435.js",
    "revision": "d443b161cfbb4bd385640bfd978aad34"
  },
  {
    "url": "assets/js/21.e5784c0b.js",
    "revision": "8c971691796ae83ef09d706e67736e0d"
  },
  {
    "url": "assets/js/22.b9a3cb8c.js",
    "revision": "75c2be25e65f70f8914dd49b6feb046d"
  },
  {
    "url": "assets/js/23.870b2564.js",
    "revision": "27ec2e8b4082ba7368a42b2f371411a9"
  },
  {
    "url": "assets/js/24.1f08511a.js",
    "revision": "3b438d0199694f67ecbf246e88cc5d45"
  },
  {
    "url": "assets/js/25.fa621244.js",
    "revision": "9d086e1adbca58abc511d1479b59d225"
  },
  {
    "url": "assets/js/26.2cb24418.js",
    "revision": "a799af527fa0610e22eeaff834940852"
  },
  {
    "url": "assets/js/27.c323a700.js",
    "revision": "3091007e44cf15cdeb517c45c463e3c0"
  },
  {
    "url": "assets/js/28.af9aa3b1.js",
    "revision": "4eb0ab0e8c198ce7d6cd30c32b731d24"
  },
  {
    "url": "assets/js/29.111a6565.js",
    "revision": "e1c9a5e4215928b1600973ff45369a0c"
  },
  {
    "url": "assets/js/3.b8e8312a.js",
    "revision": "7b783085c30ae1013d07ff60c07afa8e"
  },
  {
    "url": "assets/js/30.3c4abd75.js",
    "revision": "5daba226b122b9874186c7aff8879d26"
  },
  {
    "url": "assets/js/31.9e64e783.js",
    "revision": "1f9f7a2cc1453af8b81d202118151b40"
  },
  {
    "url": "assets/js/32.ef94575e.js",
    "revision": "79ac6fc452a84c214b233e524cfbf012"
  },
  {
    "url": "assets/js/33.eb667471.js",
    "revision": "65288f396b500d17e240443c0ad1ceca"
  },
  {
    "url": "assets/js/34.981a3789.js",
    "revision": "a9516cd234c597b96628aa75ab6b55ef"
  },
  {
    "url": "assets/js/35.d1a5ad68.js",
    "revision": "2658ed9b6e90b9059a231ffb56ec2cb5"
  },
  {
    "url": "assets/js/36.ac148827.js",
    "revision": "00cd225c1cb670676e9cbfa46a05284d"
  },
  {
    "url": "assets/js/37.d61d00fd.js",
    "revision": "bcb110ccfab19761d233dbcb4b9198d5"
  },
  {
    "url": "assets/js/38.fe00e1a5.js",
    "revision": "dd90e20f07539f6f49387104059983ec"
  },
  {
    "url": "assets/js/39.315641cb.js",
    "revision": "5e05716fbd376039bbe79d6b33004f28"
  },
  {
    "url": "assets/js/4.21b6e6f3.js",
    "revision": "db46cf49dbdb4ab474f5a632bacb4942"
  },
  {
    "url": "assets/js/40.d9832f91.js",
    "revision": "973ea32c9207278e97bc56d2cbb29efa"
  },
  {
    "url": "assets/js/41.05b07572.js",
    "revision": "665aa640a96aa2b59a239750c6bdb101"
  },
  {
    "url": "assets/js/42.8c724794.js",
    "revision": "99a5b65d767acc96a045356f847e81f3"
  },
  {
    "url": "assets/js/43.c67f1d72.js",
    "revision": "a527e49fe7eb5135d93e60f08a554fba"
  },
  {
    "url": "assets/js/44.a14f98a0.js",
    "revision": "e0802207bf2a75f944a7621ac2b1f187"
  },
  {
    "url": "assets/js/45.bd54e3fd.js",
    "revision": "c2b41262ed830560c4e064fa99fa40db"
  },
  {
    "url": "assets/js/46.c983e2ca.js",
    "revision": "938907872136d450906e7e74da14863e"
  },
  {
    "url": "assets/js/47.788e0815.js",
    "revision": "167916ca8e545fac96e60ff7529e3350"
  },
  {
    "url": "assets/js/48.a768bbac.js",
    "revision": "1a80bdf6901c37bea943835e703733af"
  },
  {
    "url": "assets/js/49.ad2f8362.js",
    "revision": "70a6ede026e58d4dbb4c3a43afdb90e8"
  },
  {
    "url": "assets/js/5.9bdec314.js",
    "revision": "435f915ccdfd0c7159ead4816b932292"
  },
  {
    "url": "assets/js/50.3cb50e8f.js",
    "revision": "45b6693c82186a5ca67b78a073eae82e"
  },
  {
    "url": "assets/js/51.eae1ce07.js",
    "revision": "41c227b1c758ae0eb4af76e890034cd8"
  },
  {
    "url": "assets/js/52.35a3434e.js",
    "revision": "47ed4ddc4f0ba18bd6f64a27a5a8796d"
  },
  {
    "url": "assets/js/53.8ee5e97c.js",
    "revision": "5657adac2e06dc2f82821a30e6633b6e"
  },
  {
    "url": "assets/js/54.d5a1e259.js",
    "revision": "689fa406a38a1ddc2c1b3d96f31a3cff"
  },
  {
    "url": "assets/js/55.9ff64a0c.js",
    "revision": "49d1501cc68a9a545968eeec581969bb"
  },
  {
    "url": "assets/js/56.1083a926.js",
    "revision": "695815a5ec0024dd1e91a87107eccb31"
  },
  {
    "url": "assets/js/57.8c6fde13.js",
    "revision": "be06ff1b8be1551f3d48701c61db5770"
  },
  {
    "url": "assets/js/58.b95841cc.js",
    "revision": "2f99eb5e35da5452ddaeba3286ceebcc"
  },
  {
    "url": "assets/js/59.b220a3b4.js",
    "revision": "1eb34b6b23ae0cb2d0d2ce6b9a4b8f42"
  },
  {
    "url": "assets/js/6.e2f6bf4c.js",
    "revision": "c7a4d7a2dfd3cf4efe864d99a7feb9b1"
  },
  {
    "url": "assets/js/60.4d2c39f8.js",
    "revision": "600fb58d8ea6bcb04aefd16cede25198"
  },
  {
    "url": "assets/js/61.e73480a6.js",
    "revision": "87d7612a5c9fd76d70796b851b662271"
  },
  {
    "url": "assets/js/62.65b527e9.js",
    "revision": "5b3b2b59fb81a1a88b5750aca22644a4"
  },
  {
    "url": "assets/js/63.98e3e4a1.js",
    "revision": "3a8bd89cd3a95a30dc1173b3fa563784"
  },
  {
    "url": "assets/js/64.e26e823e.js",
    "revision": "d15c93b1951f95fa910dc5768c7c7953"
  },
  {
    "url": "assets/js/65.090a2efd.js",
    "revision": "ad321ded1aec981e6df885f3e2bfac1c"
  },
  {
    "url": "assets/js/66.c517e1ed.js",
    "revision": "17cfc89f59c230facf7d5a6db1ea486f"
  },
  {
    "url": "assets/js/67.3f8da61b.js",
    "revision": "dbd7e9f807d52e880f0c17e8e9df3756"
  },
  {
    "url": "assets/js/68.f90ba29f.js",
    "revision": "7ba67929890d5d7bd59cc71de3835900"
  },
  {
    "url": "assets/js/69.9bbbaa0e.js",
    "revision": "1b11fad631161cae261b9ec7a3ed0220"
  },
  {
    "url": "assets/js/7.f88b8472.js",
    "revision": "fb0b62669b8f82e77f0cbcdeb5815f14"
  },
  {
    "url": "assets/js/70.14226d4b.js",
    "revision": "4f2cc19c7e704c888e043b2c26640a31"
  },
  {
    "url": "assets/js/71.263a703f.js",
    "revision": "a190589853fc570a1bf82e45f124569b"
  },
  {
    "url": "assets/js/72.0451b1c1.js",
    "revision": "b6f46bbdf69767b7e7c28f0de91f3dbb"
  },
  {
    "url": "assets/js/73.6bf791c2.js",
    "revision": "ed66a7774a81d1caab4f8a07de3768b1"
  },
  {
    "url": "assets/js/74.47a3a80f.js",
    "revision": "38ce47cba155446dbb6e9c7a432953c5"
  },
  {
    "url": "assets/js/75.33017680.js",
    "revision": "6ee71701185c29f67e50de41b6946fce"
  },
  {
    "url": "assets/js/8.d5feeda5.js",
    "revision": "648b88bac27d55a7883596a8ea9a7dbc"
  },
  {
    "url": "assets/js/9.129d32eb.js",
    "revision": "65a9632301b87595a17cd46d45bc42c5"
  },
  {
    "url": "assets/js/app.28f027e7.js",
    "revision": "7de2d04385ce8125ae1fa3fc76ff0893"
  },
  {
    "url": "de/index.html",
    "revision": "2f20e50ad33d87a911be0870a6bf57e7"
  },
  {
    "url": "de/user/HyperBian.html",
    "revision": "d8e514d0236df63521fbf1286f876eef"
  },
  {
    "url": "de/user/index.html",
    "revision": "db9015a3a216c0b257fdb0b86662209d"
  },
  {
    "url": "de/user/Installation.html",
    "revision": "b91a09ff3e1458bb36a9a556be5ac19d"
  },
  {
    "url": "de/user/Konfiguration.html",
    "revision": "cd4a1d2b2de4558d0bcd4023cabdf448"
  },
  {
    "url": "en/addons/API.html",
    "revision": "21f91752badd9dbb745635a03097ec43"
  },
  {
    "url": "en/addons/index.html",
    "revision": "a0a1710baa553aad0e3beb2a656a224d"
  },
  {
    "url": "en/addons/OurFirstAddon.html",
    "revision": "da11125c537b588b662047f9a3a9efaa"
  },
  {
    "url": "en/api/Detect.html",
    "revision": "79cbd275314a7a0745adb956d5c94c4d"
  },
  {
    "url": "en/api/Guidelines.html",
    "revision": "e1bf6184b37ec02fe6e5db03a05eddd2"
  },
  {
    "url": "en/api/Ui.html",
    "revision": "e61733218799a5370187db2168e06d11"
  },
  {
    "url": "en/effects/API.html",
    "revision": "8b8de7c6528394f6ce8c1ec1c02f57fc"
  },
  {
    "url": "en/effects/index.html",
    "revision": "64ee943e70e55255004c21b955171cab"
  },
  {
    "url": "en/effects/OurFirstEffect.html",
    "revision": "d192b1dfc64e78faa081089d4ed97aa5"
  },
  {
    "url": "en/json/Authorization.html",
    "revision": "210af1c1d336064357515e77035844cf"
  },
  {
    "url": "en/json/Control.html",
    "revision": "c23195f1c0ab5983370cdef5300db93b"
  },
  {
    "url": "en/json/index.html",
    "revision": "39f2415f1506fae6375888aea897bf8e"
  },
  {
    "url": "en/json/ServerInfo.html",
    "revision": "f77e959968f02303c777c824eeca0f3b"
  },
  {
    "url": "en/json/Subscribe.html",
    "revision": "db7bba1b3cc648d972000b4d943ccce9"
  },
  {
    "url": "en/user/advanced/Advanced.html",
    "revision": "292a8bda3f17e7719d55256022cbb506"
  },
  {
    "url": "en/user/advanced/Support.html",
    "revision": "e0d2f4ae1fa010cb0fb8ed592089bcec"
  },
  {
    "url": "en/user/Configuration.html",
    "revision": "8460eed22a6a41aacac5000e394ec27e"
  },
  {
    "url": "en/user/HyperBian.html",
    "revision": "28249db25e113dfa7efa6ca34ac24aee"
  },
  {
    "url": "en/user/index.html",
    "revision": "2ea039eb32751000dcb2e8259e4d36d2"
  },
  {
    "url": "en/user/Installation.html",
    "revision": "752f0da3d58e14a9bb52f3964f4e5b78"
  },
  {
    "url": "en/user/leddevices/gpio/piblaster.html",
    "revision": "2f56d02722012b3b8e561c9c9fd6cee7"
  },
  {
    "url": "en/user/leddevices/index.html",
    "revision": "72a3da4f07e923c8be78257332abbf47"
  },
  {
    "url": "en/user/leddevices/network/atmoorb.html",
    "revision": "10eec9bf9d339d13520aa85edb26716e"
  },
  {
    "url": "en/user/leddevices/network/cololight.html",
    "revision": "b522d3ac60bbf09f519af89a2e576503"
  },
  {
    "url": "en/user/leddevices/network/fadecandy.html",
    "revision": "02ae62e8a937a3e77a5db72b69fac54b"
  },
  {
    "url": "en/user/leddevices/network/nanoleaf.html",
    "revision": "dd10fe5979d6c52471b646635255a242"
  },
  {
    "url": "en/user/leddevices/network/philipshue.html",
    "revision": "4a0b002ef00465f6e5f2d5afc2ef2360"
  },
  {
    "url": "en/user/leddevices/network/tinkerforge.html",
    "revision": "9b71cf2d60abb01dbfcbe8f76401c0ac"
  },
  {
    "url": "en/user/leddevices/network/tpm2net.html",
    "revision": "0d5864290e4004c113af54d1d0aca276"
  },
  {
    "url": "en/user/leddevices/network/udpartnet.html",
    "revision": "fb9bd89ce9e59819f0bdecdb01b0c1c2"
  },
  {
    "url": "en/user/leddevices/network/udpe131.html",
    "revision": "1a9235df70bfd1f2ce23e2ca2d4386f6"
  },
  {
    "url": "en/user/leddevices/network/udph801.html",
    "revision": "78ab4a26532d6f9b36c2542cdb47e7f3"
  },
  {
    "url": "en/user/leddevices/network/udpraw.html",
    "revision": "0be4a8928adc552de70d09dc4035c98a"
  },
  {
    "url": "en/user/leddevices/network/wled.html",
    "revision": "f30001d8de9ead439dfdadb4aa163d36"
  },
  {
    "url": "en/user/leddevices/network/yeelight.html",
    "revision": "f8289ead74bb5b2bbd6cc783ded8ed31"
  },
  {
    "url": "en/user/leddevices/others/debug.html",
    "revision": "565f6fbf7aedc5277c156c22b455b128"
  },
  {
    "url": "en/user/leddevices/spi/apa102.html",
    "revision": "ec395281a71416cf34d31ece04e78b7c"
  },
  {
    "url": "en/user/leddevices/spi/apa104.html",
    "revision": "dcd5b6e138a40e4bff93ef27d245c487"
  },
  {
    "url": "en/user/leddevices/spi/lpd6803.html",
    "revision": "6b79aea79650611e54a3dca24eb9e7ee"
  },
  {
    "url": "en/user/leddevices/spi/lpd8806.html",
    "revision": "0fb826714ce8ca633b034faaa3871ced"
  },
  {
    "url": "en/user/leddevices/spi/p9813.html",
    "revision": "62bed9b055070de9fa67d00f0289a565"
  },
  {
    "url": "en/user/leddevices/spi/sk6812.html",
    "revision": "42a6128b19437616aac07227962f9d3e"
  },
  {
    "url": "en/user/leddevices/spi/sk6822.html",
    "revision": "c5f07ed86725bca58cad568e6f854c11"
  },
  {
    "url": "en/user/leddevices/spi/sk9822.html",
    "revision": "f3cec8c777a444b856ffb6b33b2efb09"
  },
  {
    "url": "en/user/leddevices/spi/ws2801.html",
    "revision": "478f58d939ba6c00152837b284eba80c"
  },
  {
    "url": "en/user/leddevices/spi/ws2812.html",
    "revision": "6cf37e5000a9a8108b3049d3f6aa7883"
  },
  {
    "url": "en/user/leddevices/usb/adalight.html",
    "revision": "a3dd56a4c936f2ce86eed2128d8c7151"
  },
  {
    "url": "en/user/leddevices/usb/atmo.html",
    "revision": "d240e1e4fbdb155ee8874e90ab5e2a68"
  },
  {
    "url": "en/user/leddevices/usb/dmx.html",
    "revision": "72853a6275b86c661774d4da4b8f5a72"
  },
  {
    "url": "en/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "9f3200a184d215960e0cce504761319f"
  },
  {
    "url": "en/user/leddevices/usb/karate.html",
    "revision": "2302736c4e83f1eb7b0f5c417e1402f0"
  },
  {
    "url": "en/user/leddevices/usb/lightpack.html",
    "revision": "bd3a3c3fa407d9acf65876059def4bd5"
  },
  {
    "url": "en/user/leddevices/usb/multilightpack.html",
    "revision": "a31814d16a575c00293f0c6edff5240e"
  },
  {
    "url": "en/user/leddevices/usb/paintpack.html",
    "revision": "b4767e2c4ad0cc9da5807110a4ab5bcf"
  },
  {
    "url": "en/user/leddevices/usb/rawhid.html",
    "revision": "a6a09c769a3be133d866497d8067b92f"
  },
  {
    "url": "en/user/leddevices/usb/sedu.html",
    "revision": "9ccad6e7d89374d50419b6eaab3b6bf7"
  },
  {
    "url": "en/user/leddevices/usb/tpm2.html",
    "revision": "731a97d658c53c7a5ccdf3ea174bb4a3"
  },
  {
    "url": "hyperion_logo_dark.png",
    "revision": "002fd7f8af81855feddb69dc92febb0c"
  },
  {
    "url": "hyperion_logo_light.png",
    "revision": "2812c09870a7a84dea88b57776bdfa70"
  },
  {
    "url": "icons/apple-icon-120x120.png",
    "revision": "5e1e9bb3baacce6670406f1d42bb7177"
  },
  {
    "url": "icons/apple-icon-152x152.png",
    "revision": "2a78e0cc6a0296e2f453358d2c4d86ca"
  },
  {
    "url": "icons/apple-icon-167x167.png",
    "revision": "4537db323d098e6ec9186345c62bc594"
  },
  {
    "url": "icons/apple-icon-180x180.png",
    "revision": "65e328eb3ac563c40fff352eac1ebe31"
  },
  {
    "url": "icons/apple-launch-1125x2436.png",
    "revision": "7c76bb2da1bf063068e4c73459b614cd"
  },
  {
    "url": "icons/apple-launch-1242x2208.png",
    "revision": "61d0bb9cde264e1b1dd963971df55bd2"
  },
  {
    "url": "icons/apple-launch-1242x2688.png",
    "revision": "a4415665e9bd2bfef4c81a56f7253e9b"
  },
  {
    "url": "icons/apple-launch-1536x2048.png",
    "revision": "e5f187adff88099d65cda39d4d370d6c"
  },
  {
    "url": "icons/apple-launch-1668x2224.png",
    "revision": "98e31d8ccaab2bd0376f9e66dd0c781b"
  },
  {
    "url": "icons/apple-launch-1668x2388.png",
    "revision": "62f2562ec45458d562cfbdc7ce49b83b"
  },
  {
    "url": "icons/apple-launch-2048x2732.png",
    "revision": "59cf420a057b00ffbc4299c902e30297"
  },
  {
    "url": "icons/apple-launch-640x1136.png",
    "revision": "06935b9d3118d6a165bee1b28b3e9944"
  },
  {
    "url": "icons/apple-launch-750x1334.png",
    "revision": "65ddce5962aebe47ff1fafabced21b4e"
  },
  {
    "url": "icons/apple-launch-828x1792.png",
    "revision": "fd9d1e7433a0d6a243504f84bf528760"
  },
  {
    "url": "icons/favicon-128x128.png",
    "revision": "1f67931e9f8f5859f0a326de9695f996"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "41d819752d98a5e8f8ca8a79a20ea095"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "a0d026eea3e0e0236872028561624c86"
  },
  {
    "url": "icons/favicon-96x96.png",
    "revision": "e85956a895cea454c0361a867df96b2a"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "d024af605d3ba562f86c5c6c29720a4d"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "4310df837ffb78ac982eb4151309d70a"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "c8e09f3c73e3a914bae1a3d00ad2c090"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "203f32e2af95629ffe0e4afb07638326"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "43cb3b7a8ba9e081827c249e969692f0"
  },
  {
    "url": "icons/ms-icon-144x144.png",
    "revision": "cffb030240897a3ffe9df38694205c23"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "a87900de9189b99f164b409015f24d05"
  },
  {
    "url": "images/de/user_config_access.png",
    "revision": "b7d15b87a18e88ef43b37d95bd499e3a"
  },
  {
    "url": "images/de/user_config_dash.png",
    "revision": "a7a06a394f91d302733135d15eaf69d3"
  },
  {
    "url": "images/de/user_config_lang.png",
    "revision": "fe2d68fa190a603bfa51c0b337ba4a74"
  },
  {
    "url": "images/de/user_hyperbian_new_text_file.png",
    "revision": "4e52ac429ed7637e17d677090e0e76a1"
  },
  {
    "url": "images/de/user_hyperbian_rename_to_wpa_supplicant.png",
    "revision": "c8149ed94b1dad896d56f42423d13753"
  },
  {
    "url": "images/de/user_hyperbian_ssh_file.png",
    "revision": "1ffe78064787a7c8837d7ae9047f420e"
  },
  {
    "url": "images/de/user_hyperbian_wpa_supplicant_content.png",
    "revision": "2cd80d00ffba45334089956da663c74e"
  },
  {
    "url": "images/en/avahi-browse.jpg",
    "revision": "17a5d14a7fdc7ac22f0d0932763b1ecc"
  },
  {
    "url": "images/en/http_jsonrpc.jpg",
    "revision": "62d9e3005e7459a2ec04cb21d8b53b78"
  },
  {
    "url": "images/en/owneff_1.jpg",
    "revision": "42df0877dec353c8928386585e8b29b5"
  },
  {
    "url": "images/en/owneff_2.jpg",
    "revision": "95b8085101c2786b888e4ed29482dac5"
  },
  {
    "url": "images/en/owneff_3.gif",
    "revision": "94cd6cf07479827a49482b8c66fb66d8"
  },
  {
    "url": "images/en/owneff_4.gif",
    "revision": "86b86b1d3c2fb754c6c9b2ead9ea43a0"
  },
  {
    "url": "images/en/user_bbmodes.jpg",
    "revision": "e9c2447c1192cb239ba701ae90144624"
  },
  {
    "url": "images/en/user_config_access.png",
    "revision": "277bdad757e277cb3d4eff789e6cf4bf"
  },
  {
    "url": "images/en/user_config_dash.png",
    "revision": "3fb0621492ef0a608122d95ddf0c9d7b"
  },
  {
    "url": "images/en/user_config_lang.png",
    "revision": "c0a82b37d3d40f422acf51dc0700aa33"
  },
  {
    "url": "images/en/user_gammacurve.png",
    "revision": "1bc6325ef5dd3cafa09d40d0e4f65d8b"
  },
  {
    "url": "images/en/user_hyperbian_ssh.jpg",
    "revision": "294a39092c04a7880011cfd796e3b194"
  },
  {
    "url": "images/en/user_hyperbian_wpa_suppli1.jpg",
    "revision": "0c8f576283244a8e8eb5ec01d9b4c3ae"
  },
  {
    "url": "images/en/user_hyperbian_wpa_suppli2.jpg",
    "revision": "928f049e2b9e69a159be4a9bd54d4bc4"
  },
  {
    "url": "images/en/user_hyperbian_wpa_suppli3.jpg",
    "revision": "4dfa192aac47e5fc899d5b47434ed036"
  },
  {
    "url": "images/en/user_ledlayout.jpg",
    "revision": "2815e5ab254a09a7c24af33d169c0e66"
  },
  {
    "url": "images/en/user_ledlayout1.jpg",
    "revision": "6da17c4ff33ca70b66709f4d924ae865"
  },
  {
    "url": "images/en/user_ledlayout2.jpg",
    "revision": "fa9d66601d016ac2ed520b93eff35bee"
  },
  {
    "url": "images/en/user_ledlayout3.jpg",
    "revision": "dcbaae37bc6bf1c23cf57a43d3bef19c"
  },
  {
    "url": "index.html",
    "revision": "2dbddb261fa2e2d37339131df1e3b416"
  },
  {
    "url": "not_found_dark.png",
    "revision": "b3c830790f3ca0106f3abf45ce34f5bb"
  },
  {
    "url": "not_found_light.png",
    "revision": "b7ff198048be214b3c0dcc864a215ebd"
  }
].concat(self.__precacheManifest || []);
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
