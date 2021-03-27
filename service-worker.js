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
    "revision": "b404a94f07a5ed2a84b1e142fbf659a3"
  },
  {
    "url": "assets/css/0.styles.4ed53ac9.css",
    "revision": "eb1ed4ffe3f842b4b1611bce83b2d135"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.5b84094c.js",
    "revision": "1e5f732925ebf63b7a483036d63d7de7"
  },
  {
    "url": "assets/js/10.528792bf.js",
    "revision": "1ff424bb1c669af54a86e88e92407e03"
  },
  {
    "url": "assets/js/11.46a96504.js",
    "revision": "3f3fdf600cd760ad93b01b4b287d966e"
  },
  {
    "url": "assets/js/12.c58f8a67.js",
    "revision": "d099f849f6304fcba0c23b28a115f039"
  },
  {
    "url": "assets/js/13.2fa6c95b.js",
    "revision": "1ff8faffc69d6b21155276c19387d80d"
  },
  {
    "url": "assets/js/14.f05e3867.js",
    "revision": "660c28e7d033348e0cf98cf6b3d1ffed"
  },
  {
    "url": "assets/js/15.5528bc30.js",
    "revision": "0b0c6c242bf878108fc40a1bef544ed4"
  },
  {
    "url": "assets/js/16.f93d145a.js",
    "revision": "0603553820e8e1889b82f5d8016e2de6"
  },
  {
    "url": "assets/js/17.85c19dde.js",
    "revision": "325ad3f811a05e85fe58b7083acbc573"
  },
  {
    "url": "assets/js/18.3133549c.js",
    "revision": "4d89f0e1c98fcd5cba707b55529deaee"
  },
  {
    "url": "assets/js/19.d838fc02.js",
    "revision": "c0d84025340e62222c9fad8a11ccd4a2"
  },
  {
    "url": "assets/js/20.b38b7194.js",
    "revision": "840517c76d94a68057891f132229fe0d"
  },
  {
    "url": "assets/js/21.05f264f2.js",
    "revision": "4d20f0828066974f22de4483083875cc"
  },
  {
    "url": "assets/js/22.1b8d2e8f.js",
    "revision": "f84aae2b61184c132ae91b931b5e13ce"
  },
  {
    "url": "assets/js/23.5a30cc45.js",
    "revision": "5192c4c25e8c465ab0c910f1c557b1db"
  },
  {
    "url": "assets/js/24.60c39f98.js",
    "revision": "b2829eaa220296e2e093f65fdb62e6b7"
  },
  {
    "url": "assets/js/25.6af0ef28.js",
    "revision": "6749e9da7f2a56f6ad53d93009924aea"
  },
  {
    "url": "assets/js/26.9d79e06e.js",
    "revision": "fe59c23084194973ec9ec8f41b6636b3"
  },
  {
    "url": "assets/js/27.94497a53.js",
    "revision": "3e673c701c39b133f580be9c4271b679"
  },
  {
    "url": "assets/js/28.7324bbc3.js",
    "revision": "9d74c51cc7e7605804c68678aef8dc6d"
  },
  {
    "url": "assets/js/29.810b3cf6.js",
    "revision": "30165fa7023e9aa50d165bbb42c3a9b9"
  },
  {
    "url": "assets/js/3.b1662000.js",
    "revision": "70b2ebf72f8b676fc3891d5e77b146ab"
  },
  {
    "url": "assets/js/30.31cda8c7.js",
    "revision": "99d46403c7d609a4c84d6fbc6c6b1a0d"
  },
  {
    "url": "assets/js/31.70c2ce2b.js",
    "revision": "b88bcf0bd2b6c2c54e22a8fe950e7e4d"
  },
  {
    "url": "assets/js/32.bcb28cda.js",
    "revision": "a39fefa81b0f658a2d83fe793a5100dd"
  },
  {
    "url": "assets/js/33.c9458705.js",
    "revision": "f4163755a467ef6e82dc149089391e81"
  },
  {
    "url": "assets/js/34.af038298.js",
    "revision": "9183f443bcdca5ce6b6d7aa35d403c94"
  },
  {
    "url": "assets/js/35.e99b6aa2.js",
    "revision": "7dd292dbe3e71adf2c56a29afb12bf81"
  },
  {
    "url": "assets/js/36.91643595.js",
    "revision": "26c0b0a051ad647fceb9a6414c7ec057"
  },
  {
    "url": "assets/js/37.b1c48240.js",
    "revision": "37b6fa0a53a555caa53e021df262593c"
  },
  {
    "url": "assets/js/38.710ae40c.js",
    "revision": "fbf48339885697980fb31d2ad720fb7a"
  },
  {
    "url": "assets/js/39.910f3c2c.js",
    "revision": "f186fc07b88e6d474c4fc5b38b57533f"
  },
  {
    "url": "assets/js/4.fc223c37.js",
    "revision": "9dc0e11ad9deaffa84a2da7b4dfaefef"
  },
  {
    "url": "assets/js/40.0b711c11.js",
    "revision": "e473b72d15d519fc5352fbfd68a46bb0"
  },
  {
    "url": "assets/js/41.c34234eb.js",
    "revision": "2a5ac6d64ceed6be42cb326a33805e5a"
  },
  {
    "url": "assets/js/42.29c5911d.js",
    "revision": "d3064859132ecdec23edb62cbe7948de"
  },
  {
    "url": "assets/js/43.370bfa61.js",
    "revision": "3ff088ae8c4a5d245d31d56aca8672a1"
  },
  {
    "url": "assets/js/44.a33c6dc2.js",
    "revision": "a16c5925be80d3fd088762a4f748c33a"
  },
  {
    "url": "assets/js/45.b8b96230.js",
    "revision": "cd2030bf07494ab611edf317d426ea86"
  },
  {
    "url": "assets/js/46.ae488c8f.js",
    "revision": "9efb1ca86dd235417e658a6ab54ce841"
  },
  {
    "url": "assets/js/47.0fd787d8.js",
    "revision": "3ae975317f16cedd2634041aa2e2b153"
  },
  {
    "url": "assets/js/48.69abf984.js",
    "revision": "fa569d5b25ffa9236c6efc23d2bca0fe"
  },
  {
    "url": "assets/js/49.b54aecb6.js",
    "revision": "a54005fcadee2ad2c2ee332c5f33c781"
  },
  {
    "url": "assets/js/5.eecffb5d.js",
    "revision": "ce9b587d51c25e114e1d906b0ea33e1a"
  },
  {
    "url": "assets/js/50.82d4a4c1.js",
    "revision": "18794ffe47d668bfe8019d399e0ad6a0"
  },
  {
    "url": "assets/js/51.32f95f2a.js",
    "revision": "f9f6866168b3075db9d3bef8e761441e"
  },
  {
    "url": "assets/js/52.a7970565.js",
    "revision": "b7091562c91fdb7dc074bb3ea411942f"
  },
  {
    "url": "assets/js/53.dc4e5985.js",
    "revision": "3c1edb29882f55b5086eba2863f074b0"
  },
  {
    "url": "assets/js/54.4f6b72d1.js",
    "revision": "62785e77834b9c15e445b97a77b1a0cf"
  },
  {
    "url": "assets/js/55.96c9ebd5.js",
    "revision": "5c13a44133684c57ac02a5396d0b14fe"
  },
  {
    "url": "assets/js/56.ff04fe60.js",
    "revision": "41901202ea8b8b4a80f6dd74e5102562"
  },
  {
    "url": "assets/js/57.bafbba7f.js",
    "revision": "268e0fd1e6b2c88ecf44db5800fe405e"
  },
  {
    "url": "assets/js/58.7ba66c01.js",
    "revision": "9008c0a10cbed5a3071ac3878b00e1f2"
  },
  {
    "url": "assets/js/59.76fc4bd1.js",
    "revision": "da66cb9dc533607e1c2b51115640ab61"
  },
  {
    "url": "assets/js/6.ce633957.js",
    "revision": "c4ac6ccdca5de1818758f8d2022322d2"
  },
  {
    "url": "assets/js/60.e0f89178.js",
    "revision": "2dcc1ec2bfb2ace14b04bd09686e3f6c"
  },
  {
    "url": "assets/js/61.64b0c5dd.js",
    "revision": "77da16e2abf22f669506213929103ca6"
  },
  {
    "url": "assets/js/62.470115e9.js",
    "revision": "d172dace376322c17d39617debc69220"
  },
  {
    "url": "assets/js/63.1c62d6ee.js",
    "revision": "3e72c9ae534cf4bf6a8678cf375c78b4"
  },
  {
    "url": "assets/js/64.b4d0acd6.js",
    "revision": "63c1621362631cba4dcef9b01a9e94b4"
  },
  {
    "url": "assets/js/65.812f14f3.js",
    "revision": "1581507c724d1587c9aaeaf392f010d9"
  },
  {
    "url": "assets/js/66.39533a73.js",
    "revision": "f57ea1c5c7d33367b7840e0dead066a9"
  },
  {
    "url": "assets/js/67.af806d14.js",
    "revision": "d2fa7ab78d434cc64a910615dcb7039a"
  },
  {
    "url": "assets/js/68.fc668e2f.js",
    "revision": "89661af526039e0f2a02adf0b6e5d67f"
  },
  {
    "url": "assets/js/69.797889f1.js",
    "revision": "352f44ab04e1766734e9d419ee3f4e9e"
  },
  {
    "url": "assets/js/7.5ca695d4.js",
    "revision": "a3ea5660c55dfdafcb87bd0d53dd74ef"
  },
  {
    "url": "assets/js/70.d471b841.js",
    "revision": "ff93abe651162cccfec30e748a940b83"
  },
  {
    "url": "assets/js/71.4027f353.js",
    "revision": "4d2207101af0350a6b0cd700c9fcceec"
  },
  {
    "url": "assets/js/72.2dcd0d8e.js",
    "revision": "49e89a6bfad0fdc6e0ed74d3b99a25c4"
  },
  {
    "url": "assets/js/73.58b3230e.js",
    "revision": "f5ad645e57ae425119c0997d5baae231"
  },
  {
    "url": "assets/js/74.ed9bda02.js",
    "revision": "48242c4e8d817c981975c9e42dc008d9"
  },
  {
    "url": "assets/js/75.c2d1c710.js",
    "revision": "55fde752906d06e2d8aee6e549248472"
  },
  {
    "url": "assets/js/8.83cd6535.js",
    "revision": "fd33bfbc1f53cf345ddeb4588ce1388d"
  },
  {
    "url": "assets/js/9.d5c3ced3.js",
    "revision": "a13f2ca4b7010fa785a1d11b501ccd61"
  },
  {
    "url": "assets/js/app.c6aeba8c.js",
    "revision": "75b264f82a10fdd11a6273296e86715b"
  },
  {
    "url": "de/index.html",
    "revision": "1e3f2ff0f703017333f50a6a93987bfd"
  },
  {
    "url": "de/user/HyperBian.html",
    "revision": "ee09c992dfc37dde5235d416a0a1cd00"
  },
  {
    "url": "de/user/index.html",
    "revision": "0788c48dc16005a896f2dab827da8a0e"
  },
  {
    "url": "de/user/Installation.html",
    "revision": "21997820a25c8a4970fe572b804453a7"
  },
  {
    "url": "de/user/Konfiguration.html",
    "revision": "788616aeb484b788ac31ed33857c1837"
  },
  {
    "url": "en/addons/API.html",
    "revision": "d992fdd744480cedcc3d5bd222d03326"
  },
  {
    "url": "en/addons/index.html",
    "revision": "870ab32f87d2ad4632a01593cee0325e"
  },
  {
    "url": "en/addons/OurFirstAddon.html",
    "revision": "f6ef25adf9258fbe9d54eb4f460fe4d2"
  },
  {
    "url": "en/api/Detect.html",
    "revision": "8ddd31ea468966a21570ac2645fec8cc"
  },
  {
    "url": "en/api/Guidelines.html",
    "revision": "e793e7843f7cfa0cf0d5983c63245b07"
  },
  {
    "url": "en/api/Ui.html",
    "revision": "ab723d273633c6b6ef083172d0b19a5b"
  },
  {
    "url": "en/effects/API.html",
    "revision": "8998c5b79e739f0d7c42ca3c1cc4794b"
  },
  {
    "url": "en/effects/index.html",
    "revision": "8fe05c3cd3fca138102bd3ff79df041b"
  },
  {
    "url": "en/effects/OurFirstEffect.html",
    "revision": "ab045228257061abbc6666310c90729e"
  },
  {
    "url": "en/json/Authorization.html",
    "revision": "c757256794cb39d3e5c7a172b7fe0095"
  },
  {
    "url": "en/json/Control.html",
    "revision": "651d7feab7eaae697b62c93db195a15d"
  },
  {
    "url": "en/json/index.html",
    "revision": "a83d53917a2a570f04633a83b91a1fc0"
  },
  {
    "url": "en/json/ServerInfo.html",
    "revision": "5f190390d4f950607da3e15b6552f422"
  },
  {
    "url": "en/json/Subscribe.html",
    "revision": "a3772d022b94920959d4e4f56d195084"
  },
  {
    "url": "en/user/advanced/Advanced.html",
    "revision": "a4d1494ba3e3243f16ea767d758d9046"
  },
  {
    "url": "en/user/advanced/Support.html",
    "revision": "4d6e54b2d71370f254f0102fbcf5d2f6"
  },
  {
    "url": "en/user/Configuration.html",
    "revision": "970d2455fc2ccef56a1a7f32dbc1a043"
  },
  {
    "url": "en/user/HyperBian.html",
    "revision": "32199de502e268d8bed51c5a1573b621"
  },
  {
    "url": "en/user/index.html",
    "revision": "863acec119fd6a5132143cf72b3d4b0e"
  },
  {
    "url": "en/user/Installation.html",
    "revision": "9be0eacabde3ba08317d641e00f3bd28"
  },
  {
    "url": "en/user/leddevices/gpio/piblaster.html",
    "revision": "e20579f3db7322a2850889595380566e"
  },
  {
    "url": "en/user/leddevices/index.html",
    "revision": "7df320732f12b62482ce625d8e8ad08d"
  },
  {
    "url": "en/user/leddevices/network/atmoorb.html",
    "revision": "388b506020d9ba6638c63f5ec5c4905f"
  },
  {
    "url": "en/user/leddevices/network/cololight.html",
    "revision": "80c3ce0c41eed5770c55a66a4758262d"
  },
  {
    "url": "en/user/leddevices/network/fadecandy.html",
    "revision": "e73ee7ecca2ef6fd73e7837b7343d25d"
  },
  {
    "url": "en/user/leddevices/network/nanoleaf.html",
    "revision": "a74632c9a8a512aedc9531aa515a74cd"
  },
  {
    "url": "en/user/leddevices/network/philipshue.html",
    "revision": "e4029975571e45967224155bcbab9d04"
  },
  {
    "url": "en/user/leddevices/network/tinkerforge.html",
    "revision": "90a14bca28f01850fb3258369ee457ef"
  },
  {
    "url": "en/user/leddevices/network/tpm2net.html",
    "revision": "9cbac85834d66d7782c58b5e984c73af"
  },
  {
    "url": "en/user/leddevices/network/udpartnet.html",
    "revision": "04ee015b540871b92bf69cb455ffe028"
  },
  {
    "url": "en/user/leddevices/network/udpe131.html",
    "revision": "7519acc9f6e35682bdc7b595898783ba"
  },
  {
    "url": "en/user/leddevices/network/udph801.html",
    "revision": "5844f67d2fb08edd6692decd6e06f9a0"
  },
  {
    "url": "en/user/leddevices/network/udpraw.html",
    "revision": "814da2f5a34619a672dc55357b07701b"
  },
  {
    "url": "en/user/leddevices/network/wled.html",
    "revision": "b1970fd23b23acb039dc01e1dd84d594"
  },
  {
    "url": "en/user/leddevices/network/yeelight.html",
    "revision": "c76204d9940b20283f431d5f01b58ec7"
  },
  {
    "url": "en/user/leddevices/others/debug.html",
    "revision": "ba8b9c7fc081b2d790e1834eca3f9538"
  },
  {
    "url": "en/user/leddevices/spi/apa102.html",
    "revision": "f0e29d6c9e203380cbaf2e62be673f30"
  },
  {
    "url": "en/user/leddevices/spi/apa104.html",
    "revision": "93133a989f22982bcd82da3553f94275"
  },
  {
    "url": "en/user/leddevices/spi/lpd6803.html",
    "revision": "c87a376ef418daffbe3e43d9bd0fda62"
  },
  {
    "url": "en/user/leddevices/spi/lpd8806.html",
    "revision": "6d3f62ee6a4593a6ab98e7f5ac8fa950"
  },
  {
    "url": "en/user/leddevices/spi/p9813.html",
    "revision": "111cf2423d0f3e632919de4c7848da84"
  },
  {
    "url": "en/user/leddevices/spi/sk6812.html",
    "revision": "7f76f8d1ac11af77d0eb77aa03f8e123"
  },
  {
    "url": "en/user/leddevices/spi/sk6822.html",
    "revision": "2c9e09abce1f77b61ad02693613902ad"
  },
  {
    "url": "en/user/leddevices/spi/sk9822.html",
    "revision": "b6765cdf50c96b03aba8f1e25538543c"
  },
  {
    "url": "en/user/leddevices/spi/ws2801.html",
    "revision": "5bfef845a2ad5fb994b6d85d64c0a53c"
  },
  {
    "url": "en/user/leddevices/spi/ws2812.html",
    "revision": "b8cbb0b0bd1ecfe5071556b6ac10e77b"
  },
  {
    "url": "en/user/leddevices/usb/adalight.html",
    "revision": "2d9ca77c899fcb346b47d19abc606e98"
  },
  {
    "url": "en/user/leddevices/usb/atmo.html",
    "revision": "264d10eb1a97f218367113f550a243a3"
  },
  {
    "url": "en/user/leddevices/usb/dmx.html",
    "revision": "679df5dd8ea887f702de9355be4872f0"
  },
  {
    "url": "en/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "7a1dfcc9d984597c17d41aaefd6cb122"
  },
  {
    "url": "en/user/leddevices/usb/karate.html",
    "revision": "b175a3f56d756cd4522bc6c43011522d"
  },
  {
    "url": "en/user/leddevices/usb/lightpack.html",
    "revision": "e2437fe951a896d689229d4883e45fb7"
  },
  {
    "url": "en/user/leddevices/usb/multilightpack.html",
    "revision": "3d8385b844c6f2add26936c700469f78"
  },
  {
    "url": "en/user/leddevices/usb/paintpack.html",
    "revision": "2a8f7d931664f3a2d9fc3020e6132765"
  },
  {
    "url": "en/user/leddevices/usb/rawhid.html",
    "revision": "84164b499c76f5e018ae709eb126bb5a"
  },
  {
    "url": "en/user/leddevices/usb/sedu.html",
    "revision": "54d0cf1a6f3dfc2fd781b0b5571a768f"
  },
  {
    "url": "en/user/leddevices/usb/tpm2.html",
    "revision": "66f0bbb18461cebe67356b6b1e2e2374"
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
    "revision": "76051c3fc9bb93eae3342a46c4237092"
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
