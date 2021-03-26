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
    "revision": "84d472e609db459b00c6a5d1d474e588"
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
    "url": "assets/js/14.5a2528c3.js",
    "revision": "0fc4d19256e538f622f15b1fe8096e03"
  },
  {
    "url": "assets/js/15.69b0269f.js",
    "revision": "aa6bdeb3b6ed95fb7bc88b80a73be419"
  },
  {
    "url": "assets/js/16.f21e8924.js",
    "revision": "c61c41975f0dfacb9153776a4e4c9a4f"
  },
  {
    "url": "assets/js/17.e73ec869.js",
    "revision": "a5854892a9422ce3a53aa4ce249da1f5"
  },
  {
    "url": "assets/js/18.1191a2ac.js",
    "revision": "95f0cfaff38a08ad6c75ab89b2bb5988"
  },
  {
    "url": "assets/js/19.d1141dd4.js",
    "revision": "d2bcfd001ed01d3794d07fb701e53134"
  },
  {
    "url": "assets/js/20.453b670d.js",
    "revision": "5bfa2f4324c877e7599d48d016cf7e43"
  },
  {
    "url": "assets/js/21.23dc571a.js",
    "revision": "e3a42bbe09fb91b5c4ca0aeb2b6d3d08"
  },
  {
    "url": "assets/js/22.3fe86df7.js",
    "revision": "ff6e005f53bdba7328cbc4a0023d77cd"
  },
  {
    "url": "assets/js/23.7b576aa9.js",
    "revision": "8cee55af1ac2b898601e7a3647d49fc6"
  },
  {
    "url": "assets/js/24.ca901d7b.js",
    "revision": "3e40533fe9e6591f1776f4da6f48f8b5"
  },
  {
    "url": "assets/js/25.984b408e.js",
    "revision": "7d98dd05bc9a3a3bc6686cb68776a1d6"
  },
  {
    "url": "assets/js/26.c77376a3.js",
    "revision": "806f7510221c80b49085cb2662dadb8f"
  },
  {
    "url": "assets/js/27.11e6e95c.js",
    "revision": "b6a113a15ae2c7bb846ef81e0c108be4"
  },
  {
    "url": "assets/js/28.730db7eb.js",
    "revision": "9b9f33d05f06798d7ffb897e20951600"
  },
  {
    "url": "assets/js/29.8e124efb.js",
    "revision": "e496143788680dfc91c005218b8bd323"
  },
  {
    "url": "assets/js/3.b1662000.js",
    "revision": "70b2ebf72f8b676fc3891d5e77b146ab"
  },
  {
    "url": "assets/js/30.991567b1.js",
    "revision": "7bcc656bc714addf06e432220c98d7df"
  },
  {
    "url": "assets/js/31.e2b532f0.js",
    "revision": "76219536a0f75adbf3e85caee0eb96a0"
  },
  {
    "url": "assets/js/32.12c2a57e.js",
    "revision": "9a148e7e20f0b819f6c7ca56508e22ee"
  },
  {
    "url": "assets/js/33.1c4399f1.js",
    "revision": "b0045895c9a4e1723e5c34c902b0ab0e"
  },
  {
    "url": "assets/js/34.5af8ead3.js",
    "revision": "6d55a3cd142b340ef44af209de095bf5"
  },
  {
    "url": "assets/js/35.8f3e2d61.js",
    "revision": "a38917e5c64bbd2e4c77960652f2d2f2"
  },
  {
    "url": "assets/js/36.415511ab.js",
    "revision": "de59dadf5139c7255c51febdff8ee7c3"
  },
  {
    "url": "assets/js/37.5cba6dfc.js",
    "revision": "fc163a3c9c4bfcf8ef6d8f02738788ea"
  },
  {
    "url": "assets/js/38.43a7c3c4.js",
    "revision": "8ce9e0e0e9e5af6d9a60c6d12aa82b69"
  },
  {
    "url": "assets/js/39.beb9c393.js",
    "revision": "65cfe3008a4c633f8faacac2410611f2"
  },
  {
    "url": "assets/js/4.fc223c37.js",
    "revision": "9dc0e11ad9deaffa84a2da7b4dfaefef"
  },
  {
    "url": "assets/js/40.cb3c5c57.js",
    "revision": "d56688a8eb3f4af0c77a528685a77f84"
  },
  {
    "url": "assets/js/41.b1f0edeb.js",
    "revision": "1aac81f48102f043746cff935a17f501"
  },
  {
    "url": "assets/js/42.2230aa34.js",
    "revision": "301b609f668a673f8ca1c76553b9abc5"
  },
  {
    "url": "assets/js/43.5e61b9f0.js",
    "revision": "c205f569161d5b59b9635629882af521"
  },
  {
    "url": "assets/js/44.1d307fe2.js",
    "revision": "3296d30cbe22d429eb2ce8edd1df2d35"
  },
  {
    "url": "assets/js/45.ac022e3b.js",
    "revision": "44c297d7b18e7264db5839a8097541e6"
  },
  {
    "url": "assets/js/46.929dc7a7.js",
    "revision": "0cf5ec1161a5346739020c1892449b7c"
  },
  {
    "url": "assets/js/47.2778c4aa.js",
    "revision": "b9c0e1135ea2f0bb4fb6324c86021bcd"
  },
  {
    "url": "assets/js/48.15891ba7.js",
    "revision": "1ef2262b454e5cc4bf596e88cdf9b056"
  },
  {
    "url": "assets/js/49.ca88b060.js",
    "revision": "706b5477243f4b3390cc6b2e5e3216f3"
  },
  {
    "url": "assets/js/5.eecffb5d.js",
    "revision": "ce9b587d51c25e114e1d906b0ea33e1a"
  },
  {
    "url": "assets/js/50.e4d95c45.js",
    "revision": "f2284490e950c745104951284cbb9b18"
  },
  {
    "url": "assets/js/51.73931ad5.js",
    "revision": "6512d9c01cead1e6f3848aacbde0ac8f"
  },
  {
    "url": "assets/js/52.83d44e7a.js",
    "revision": "e42c4fe299fa8d449347a1ba293f9e08"
  },
  {
    "url": "assets/js/53.e6c8521f.js",
    "revision": "25e4a1d2ee330958fc7f7605eba65de7"
  },
  {
    "url": "assets/js/54.00979ad8.js",
    "revision": "8ea7544cd4b4a0bc742fcdd6848c4a34"
  },
  {
    "url": "assets/js/55.15d2e9ac.js",
    "revision": "40a6acd2728061afb8543b8776712f91"
  },
  {
    "url": "assets/js/56.4b1076b8.js",
    "revision": "f9089cc91cf34db7429d39e5bf3ff4f8"
  },
  {
    "url": "assets/js/57.1a1f28ad.js",
    "revision": "01c50cc9c7006b8031da89bfb44eee3f"
  },
  {
    "url": "assets/js/58.0966be0c.js",
    "revision": "9c6aa4d4eda96cc3a06b503d4388b603"
  },
  {
    "url": "assets/js/59.33452875.js",
    "revision": "877373f79cf2656511c215e4de866ec7"
  },
  {
    "url": "assets/js/6.ce633957.js",
    "revision": "c4ac6ccdca5de1818758f8d2022322d2"
  },
  {
    "url": "assets/js/60.7f9a999b.js",
    "revision": "9aa78aa140ae75cbdb926568922c4870"
  },
  {
    "url": "assets/js/61.43e6231c.js",
    "revision": "0b6d759a12491b2feb223eeb9fdf0095"
  },
  {
    "url": "assets/js/62.55cb7a10.js",
    "revision": "a09db577538b2b087955de4a09c34066"
  },
  {
    "url": "assets/js/63.bb85aeef.js",
    "revision": "775fe6b9a399c2dafa3e2ac813374f6b"
  },
  {
    "url": "assets/js/64.776c99b8.js",
    "revision": "6d70a34593ce1b91c51ec85606f9f810"
  },
  {
    "url": "assets/js/65.d481acec.js",
    "revision": "3963d8cdce54b1428afe46ddb35da662"
  },
  {
    "url": "assets/js/66.7c289eb9.js",
    "revision": "3dfc8512e5823efdcf46db770b242bde"
  },
  {
    "url": "assets/js/67.bd9d9d06.js",
    "revision": "111d63959c155e36896d6d3082b75e27"
  },
  {
    "url": "assets/js/68.a559025b.js",
    "revision": "1e8bede2235838987b97c07d0c358bee"
  },
  {
    "url": "assets/js/69.0934a5b0.js",
    "revision": "7450d722ea4676605b27bf140953e0a4"
  },
  {
    "url": "assets/js/7.d6676741.js",
    "revision": "6b1138d78c279e8f75107c2440cdb803"
  },
  {
    "url": "assets/js/70.21f6b53e.js",
    "revision": "daeb7b9df78cca23cd533cbde6d87b72"
  },
  {
    "url": "assets/js/71.8880dfe2.js",
    "revision": "f49ae5d0e4ecfb72e2940d458a48e99c"
  },
  {
    "url": "assets/js/72.c20564ab.js",
    "revision": "8c8fa348860533687e28fb4451f8237e"
  },
  {
    "url": "assets/js/73.ee10b350.js",
    "revision": "59aa84ca44dbb395db27c89e509914f7"
  },
  {
    "url": "assets/js/74.597797c1.js",
    "revision": "edca96cba759f3576f57552001fc509b"
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
    "url": "assets/js/app.c90187bb.js",
    "revision": "bc2a1469cf7d603632ec1c0c4f0344b4"
  },
  {
    "url": "de/index.html",
    "revision": "e6e139c9da7631e31ad6770fdc9214df"
  },
  {
    "url": "de/user/index.html",
    "revision": "71b176929f137b500c7b2d7c454e9c75"
  },
  {
    "url": "de/user/Installation.html",
    "revision": "08b624e52e2c006076619194ea1ff1dc"
  },
  {
    "url": "de/user/Konfiguration.html",
    "revision": "524f724c64c9b7a7787d09833b731866"
  },
  {
    "url": "en/addons/API.html",
    "revision": "6a35b29bedc704fa35777b70e2cc21c1"
  },
  {
    "url": "en/addons/index.html",
    "revision": "b3c012ca60a3b6cf7968cfe8bb3be761"
  },
  {
    "url": "en/addons/OurFirstAddon.html",
    "revision": "2769b8538bd5079f87e50144b05f2d81"
  },
  {
    "url": "en/api/Detect.html",
    "revision": "499706b068e22d38ab33f454e58c0a5f"
  },
  {
    "url": "en/api/Guidelines.html",
    "revision": "ab673c57307536665a68feab540a42e3"
  },
  {
    "url": "en/api/Ui.html",
    "revision": "5257786fe3a7fda648a68de8fb149380"
  },
  {
    "url": "en/effects/API.html",
    "revision": "3e63ab3ef775be38d1c8b444f5c05f1d"
  },
  {
    "url": "en/effects/index.html",
    "revision": "d37d825472cea7f602d3503683f9791d"
  },
  {
    "url": "en/effects/OurFirstEffect.html",
    "revision": "65155dc7cbe9f4f3bee13be304c43a6f"
  },
  {
    "url": "en/json/Authorization.html",
    "revision": "76ed5dcbb08cfd45b4206e0e11745a4e"
  },
  {
    "url": "en/json/Control.html",
    "revision": "e273df9318d02de4d73de706612e1578"
  },
  {
    "url": "en/json/index.html",
    "revision": "757e311b39b0ad083c02feb81b6834e0"
  },
  {
    "url": "en/json/ServerInfo.html",
    "revision": "92bf807795681238677e98ed93acb499"
  },
  {
    "url": "en/json/Subscribe.html",
    "revision": "a3b5a48742c8e9035332cc197c9e4647"
  },
  {
    "url": "en/user/advanced/Advanced.html",
    "revision": "97d10506c3e84312b2d418ba2fdcd35c"
  },
  {
    "url": "en/user/advanced/Support.html",
    "revision": "6be0765e467d9e180e6079b0f9259142"
  },
  {
    "url": "en/user/Configuration.html",
    "revision": "87629263256ce693fabbc76b97c87ab7"
  },
  {
    "url": "en/user/HyperBian.html",
    "revision": "1ac121f165ce1e51c3b0f34de299c63b"
  },
  {
    "url": "en/user/index.html",
    "revision": "f8abdd0697851068727ba5c0975fe582"
  },
  {
    "url": "en/user/Installation.html",
    "revision": "2211b25dbf37c5057333ad5f293fe0f8"
  },
  {
    "url": "en/user/leddevices/gpio/piblaster.html",
    "revision": "6cde8567c5682e8015047e44a06a4f3f"
  },
  {
    "url": "en/user/leddevices/index.html",
    "revision": "16fa2fbaf2e39d079425c66abd7e8d7f"
  },
  {
    "url": "en/user/leddevices/network/atmoorb.html",
    "revision": "b40ba0523288572de1197ea05ebcb0c4"
  },
  {
    "url": "en/user/leddevices/network/cololight.html",
    "revision": "590679adb6a1a4c59b1f4c9e4efb6e31"
  },
  {
    "url": "en/user/leddevices/network/fadecandy.html",
    "revision": "0ce73e81baa984561fb01db3e2167094"
  },
  {
    "url": "en/user/leddevices/network/nanoleaf.html",
    "revision": "e1e8aa5ccdc70a89e23046207ef5e5f0"
  },
  {
    "url": "en/user/leddevices/network/philipshue.html",
    "revision": "4f5a502f9ceb0a0ab04b107c1c9e8c29"
  },
  {
    "url": "en/user/leddevices/network/tinkerforge.html",
    "revision": "8297371adfd29cff6ff2c0cbdad33c24"
  },
  {
    "url": "en/user/leddevices/network/tpm2net.html",
    "revision": "c93561194f7c23f200ae9291a68b3492"
  },
  {
    "url": "en/user/leddevices/network/udpartnet.html",
    "revision": "6f98b978b855fe9aa0091af7e45c2ffb"
  },
  {
    "url": "en/user/leddevices/network/udpe131.html",
    "revision": "e506bdccf343e2fbbc2ae4ea75ae62b7"
  },
  {
    "url": "en/user/leddevices/network/udph801.html",
    "revision": "f641afb3af228c979cbda54674c568df"
  },
  {
    "url": "en/user/leddevices/network/udpraw.html",
    "revision": "dea9ab358b63198b932cdb73685292bd"
  },
  {
    "url": "en/user/leddevices/network/wled.html",
    "revision": "8aa4de84c9a7fa0e3078dd8475443757"
  },
  {
    "url": "en/user/leddevices/network/yeelight.html",
    "revision": "10adfbb6239890e5039937ac610648c4"
  },
  {
    "url": "en/user/leddevices/others/debug.html",
    "revision": "045d040e66566e0628b2bae9da361d50"
  },
  {
    "url": "en/user/leddevices/spi/apa102.html",
    "revision": "beaead8aa519867ebe70c3e289b5ddd7"
  },
  {
    "url": "en/user/leddevices/spi/apa104.html",
    "revision": "97b78e14dc03ce6f989832b81ccbf2b3"
  },
  {
    "url": "en/user/leddevices/spi/lpd6803.html",
    "revision": "a36338174580a29ad8a886530e84e177"
  },
  {
    "url": "en/user/leddevices/spi/lpd8806.html",
    "revision": "5f3c6d252e77dab84ef57ca3112501b3"
  },
  {
    "url": "en/user/leddevices/spi/p9813.html",
    "revision": "0cd6a8b3eb612d8ff2959baca1d36b96"
  },
  {
    "url": "en/user/leddevices/spi/sk6812.html",
    "revision": "eb41162889e3a585a7dbc91986e85582"
  },
  {
    "url": "en/user/leddevices/spi/sk6822.html",
    "revision": "a2e0f23a12debdf1b4e5be276199ae82"
  },
  {
    "url": "en/user/leddevices/spi/sk9822.html",
    "revision": "3691ecc4bf98de64deac786018fffb78"
  },
  {
    "url": "en/user/leddevices/spi/ws2801.html",
    "revision": "f8a2544d4a41398f750092280dd82bc4"
  },
  {
    "url": "en/user/leddevices/spi/ws2812.html",
    "revision": "484cfe0cff6b8737e6343f5606a69f58"
  },
  {
    "url": "en/user/leddevices/usb/adalight.html",
    "revision": "e852cf673d3cb4ee0700b9aba6f50778"
  },
  {
    "url": "en/user/leddevices/usb/atmo.html",
    "revision": "e198ab331fc2ed3cc1099126ea4c4ad8"
  },
  {
    "url": "en/user/leddevices/usb/dmx.html",
    "revision": "90b99819b63fdc8da552d095e1235fe4"
  },
  {
    "url": "en/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "b0432d59f3cb5a8a4cc5e76287b847fd"
  },
  {
    "url": "en/user/leddevices/usb/karate.html",
    "revision": "71d1f91d5bc6b249d75956b470427246"
  },
  {
    "url": "en/user/leddevices/usb/lightpack.html",
    "revision": "b1c0722a89f4eafc5acd3036cfd763c2"
  },
  {
    "url": "en/user/leddevices/usb/multilightpack.html",
    "revision": "7174b2176c7dea1093f57a7ed2ec1b48"
  },
  {
    "url": "en/user/leddevices/usb/paintpack.html",
    "revision": "c0015351544bb75bf82b4799ef37206f"
  },
  {
    "url": "en/user/leddevices/usb/rawhid.html",
    "revision": "4923656bd8da2ff741e87fe3ec25e5cd"
  },
  {
    "url": "en/user/leddevices/usb/sedu.html",
    "revision": "7080ff0a25613a8bd59d0b176efbd3c8"
  },
  {
    "url": "en/user/leddevices/usb/tpm2.html",
    "revision": "10e504125328b1f09388677021252474"
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
    "revision": "4ad1b19fb17702260ca5aeea59c8ba45"
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
