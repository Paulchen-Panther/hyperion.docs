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
    "revision": "cc7255ff01cedd1a4ce4ae5f27b7750c"
  },
  {
    "url": "assets/css/0.styles.f6a64547.css",
    "revision": "2a77e8ad900fb0b7a83919122a146f65"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.7c50355c.js",
    "revision": "558dcd4b9e5c38adf181936dc205b87a"
  },
  {
    "url": "assets/js/10.dc9ebdf4.js",
    "revision": "7bbb33fe920e74e10a6f76b28f41655f"
  },
  {
    "url": "assets/js/11.1e9baeec.js",
    "revision": "4ac2b74b9e1ada28717c4a51789fc257"
  },
  {
    "url": "assets/js/12.798aa546.js",
    "revision": "d7f18dabe85be59641c02c2a9361d87d"
  },
  {
    "url": "assets/js/13.5343d555.js",
    "revision": "cf787cd40ca5e1d6f85eca0cb42368e1"
  },
  {
    "url": "assets/js/14.472398fd.js",
    "revision": "3d4499694e78295babda6965a3e61ef0"
  },
  {
    "url": "assets/js/15.77a24fb6.js",
    "revision": "9b38671b95cc6d9ab1628c3e33dbbe33"
  },
  {
    "url": "assets/js/16.cf0c9434.js",
    "revision": "6492d0dcfc9239d945b76d44bf73fbb7"
  },
  {
    "url": "assets/js/17.ec641df6.js",
    "revision": "446076857b62cfc7badb2414d5cb0daf"
  },
  {
    "url": "assets/js/18.a5da8b3b.js",
    "revision": "c2d973ece5e88e5f6040037d49067c67"
  },
  {
    "url": "assets/js/19.673eee29.js",
    "revision": "6372f5fefd86ad6df95d350e0e8f6661"
  },
  {
    "url": "assets/js/20.0c14f8bd.js",
    "revision": "8e3201319e8c911ddc87daa4e532a8ac"
  },
  {
    "url": "assets/js/21.b6be38b7.js",
    "revision": "991014923c9b243a86320f993038623b"
  },
  {
    "url": "assets/js/22.1d3593f5.js",
    "revision": "9aed7ac4e8c8faede9ccb382bcf3b609"
  },
  {
    "url": "assets/js/23.33d5c22c.js",
    "revision": "16c4190a43bb9c98286a637bea7eac8e"
  },
  {
    "url": "assets/js/24.c5b5b1a6.js",
    "revision": "916afbd15456911775752b17ee7f4917"
  },
  {
    "url": "assets/js/25.bdafe54d.js",
    "revision": "ccdef5efe8aac441cf336740db008bc5"
  },
  {
    "url": "assets/js/26.445d795d.js",
    "revision": "eb070e0bbbb3d8a1da730cf403bc0bdb"
  },
  {
    "url": "assets/js/27.143f5543.js",
    "revision": "2bf1d22e1027642ecad7b87cc54604d0"
  },
  {
    "url": "assets/js/28.db9d3bb1.js",
    "revision": "94b5e1916f6b76a715edcfad20e13551"
  },
  {
    "url": "assets/js/29.3a0ebdd9.js",
    "revision": "849a6ea03dd87e91aa6baec946df5f9a"
  },
  {
    "url": "assets/js/3.8f9aa60a.js",
    "revision": "6a74fb1edde5354c091ef20ff877e831"
  },
  {
    "url": "assets/js/30.9d92a63f.js",
    "revision": "3e260b57ba6daf156f4c67e40b9e8b21"
  },
  {
    "url": "assets/js/31.477f768c.js",
    "revision": "b5ba751b45be96263922c4298ce2f3ca"
  },
  {
    "url": "assets/js/32.0d7d3b18.js",
    "revision": "54ae85d136e963ceb148f43b56ac5996"
  },
  {
    "url": "assets/js/33.5b9a9de8.js",
    "revision": "576e17fdb8896b32112fae5c8cb6da33"
  },
  {
    "url": "assets/js/34.7905a6d6.js",
    "revision": "2b90c6a1901efcabe8b3068af60731bc"
  },
  {
    "url": "assets/js/35.243046dd.js",
    "revision": "872c03c4ed9a2000c99e9de639a08d85"
  },
  {
    "url": "assets/js/36.67d68faf.js",
    "revision": "b1967d4c82eca4ed7f1f3cff0ec184b4"
  },
  {
    "url": "assets/js/37.498ee1b9.js",
    "revision": "314a368a8377bbc4a0751c6236fdc840"
  },
  {
    "url": "assets/js/38.f08e0b85.js",
    "revision": "541373231c62b2f491cd017441d63f26"
  },
  {
    "url": "assets/js/39.ba29c142.js",
    "revision": "04cabcb01580e234654d78d4eefe64fe"
  },
  {
    "url": "assets/js/4.bdb1a614.js",
    "revision": "6c5f372cf6bb2be47260e7551132555e"
  },
  {
    "url": "assets/js/40.7ff9d1c7.js",
    "revision": "6da3d345b7d7c5851128261d4e722e4d"
  },
  {
    "url": "assets/js/41.350fa89c.js",
    "revision": "708ca8d490f689f5825da81e530f0448"
  },
  {
    "url": "assets/js/42.918b94ed.js",
    "revision": "bced920d694f861cf1d0a0df7543379d"
  },
  {
    "url": "assets/js/43.95e61bf9.js",
    "revision": "616845d5d7848e4637d1f36aba5bc04e"
  },
  {
    "url": "assets/js/44.a8bf0138.js",
    "revision": "0879bd8d1ad1c20a59343670572f10f8"
  },
  {
    "url": "assets/js/45.7089e27c.js",
    "revision": "5f93c0c5f88dd27bb78c218cf66bb459"
  },
  {
    "url": "assets/js/46.5f0c8097.js",
    "revision": "52be375ef0d21f963270696e8e8d90c1"
  },
  {
    "url": "assets/js/47.28ed6711.js",
    "revision": "9f96f58a1cdb2e8c8001b2ce15d79184"
  },
  {
    "url": "assets/js/48.93582bc5.js",
    "revision": "56723844b8c130a634a0ac7e0f38ba3c"
  },
  {
    "url": "assets/js/49.cb5a6070.js",
    "revision": "4cf1006219657677455986165ceba419"
  },
  {
    "url": "assets/js/5.fcf6c644.js",
    "revision": "282fcec672061eadc6896c0ffa309c27"
  },
  {
    "url": "assets/js/50.51d0357c.js",
    "revision": "9de6013df1dbbec5ced5dcf3ee0d1d62"
  },
  {
    "url": "assets/js/51.d18db8ab.js",
    "revision": "03a4f89069049ef67d82dd4246aecbcd"
  },
  {
    "url": "assets/js/52.44ebcbe6.js",
    "revision": "ab9ae36f2b5c987dd5f7c21a19295914"
  },
  {
    "url": "assets/js/53.97d97e1a.js",
    "revision": "ba8be057e39472b2a70f8db92f20118a"
  },
  {
    "url": "assets/js/54.5c99af1c.js",
    "revision": "6fc088bd1874dd464adf8d334d60600d"
  },
  {
    "url": "assets/js/55.4929e57d.js",
    "revision": "f4dfba1c42665552732b32084a266543"
  },
  {
    "url": "assets/js/56.79c246e5.js",
    "revision": "0946102d9f274097a2723fe48c33dfbe"
  },
  {
    "url": "assets/js/57.53b53fb4.js",
    "revision": "32d190dec380feb0f1b559a3f6964c0b"
  },
  {
    "url": "assets/js/58.f45f33ae.js",
    "revision": "d06bf202146ac0251ddcb1ff48787fa1"
  },
  {
    "url": "assets/js/59.199da854.js",
    "revision": "632154a7b7f892f979ab8c099a39126f"
  },
  {
    "url": "assets/js/6.837ff430.js",
    "revision": "e28d19ac1cdbfa36cdac705c33734945"
  },
  {
    "url": "assets/js/60.1c69a711.js",
    "revision": "6d236f31b0be4877d13dddc7766cfb05"
  },
  {
    "url": "assets/js/61.98672b5c.js",
    "revision": "a18454cb64eda33510cb45268966d46d"
  },
  {
    "url": "assets/js/62.5c74a795.js",
    "revision": "b5654a3aac9660385c7c2c4573bd2ed8"
  },
  {
    "url": "assets/js/63.3dc7ea82.js",
    "revision": "5040d16879c76d51dcb65d6a54b25474"
  },
  {
    "url": "assets/js/64.b78d655b.js",
    "revision": "81c5464c701281715e6cbe56a9eb9b62"
  },
  {
    "url": "assets/js/65.9e77b691.js",
    "revision": "4aa7d7864d3d6e849959a28848eb9053"
  },
  {
    "url": "assets/js/66.c650eb1e.js",
    "revision": "6a44b6d41651453301e923456763d442"
  },
  {
    "url": "assets/js/67.d58a04f8.js",
    "revision": "ef46c7f0d5860ab2093e6dc7ba9d3246"
  },
  {
    "url": "assets/js/68.768f0387.js",
    "revision": "f71d9ca96a16d6512cde92f089273e2f"
  },
  {
    "url": "assets/js/69.5a3540a6.js",
    "revision": "ac9c264e45d586e73771f0567131c9f1"
  },
  {
    "url": "assets/js/7.3932be54.js",
    "revision": "80ec4294fdb1e4db0ea813667e44e122"
  },
  {
    "url": "assets/js/70.73370963.js",
    "revision": "d2997ece59f0d6714b9901f4069ec85c"
  },
  {
    "url": "assets/js/71.f0e0e1ba.js",
    "revision": "18ed847efdfb77621ac8690aea31bbce"
  },
  {
    "url": "assets/js/72.01562028.js",
    "revision": "15189c963543c721d3bd06e10e523309"
  },
  {
    "url": "assets/js/73.e17873cd.js",
    "revision": "6ecc9d3d5c1f827c0619ff6990b303fb"
  },
  {
    "url": "assets/js/74.f89ca16c.js",
    "revision": "5c66525ec2c1654df15c665c492d9834"
  },
  {
    "url": "assets/js/75.c9039e91.js",
    "revision": "2d189a6adcadca3b93146a687961e696"
  },
  {
    "url": "assets/js/8.5b619967.js",
    "revision": "6f4c6d83e5b993e6fb35b9f65bc45a4b"
  },
  {
    "url": "assets/js/9.4904e1d9.js",
    "revision": "3d60a2bc853b5acd813e90fdecc8b3ad"
  },
  {
    "url": "assets/js/app.64ce8c36.js",
    "revision": "b438c1c120f0b01f158e697b56d968f2"
  },
  {
    "url": "de/index.html",
    "revision": "65741049835ab62764455553ae2a6a67"
  },
  {
    "url": "de/user/HyperBian.html",
    "revision": "3eabbb2d451b4294fbb39df722519d57"
  },
  {
    "url": "de/user/index.html",
    "revision": "05a028e1e8507e270445c575f3004160"
  },
  {
    "url": "de/user/Installation.html",
    "revision": "689d603465c5d4d91c0ad373574ea858"
  },
  {
    "url": "de/user/Konfiguration.html",
    "revision": "93d8998f154b7ee87899b4989f26e1a7"
  },
  {
    "url": "en/addons/API.html",
    "revision": "f71656fcec269b1153cf802eb7ae603b"
  },
  {
    "url": "en/addons/index.html",
    "revision": "38015a0808b68fe5cee4155940ab3838"
  },
  {
    "url": "en/addons/OurFirstAddon.html",
    "revision": "76ba113e49d3632c32f61692bdc53c20"
  },
  {
    "url": "en/api/Detect.html",
    "revision": "871827189ff0be3d20a3fa2b6d0b0bb3"
  },
  {
    "url": "en/api/Guidelines.html",
    "revision": "d7343ea8e65866835999e0e00f098c99"
  },
  {
    "url": "en/api/Ui.html",
    "revision": "77f29a2f6f534ed7acbea8ef7a62ee03"
  },
  {
    "url": "en/effects/API.html",
    "revision": "86624fb34cd4c08dab7203e2c7a3d223"
  },
  {
    "url": "en/effects/index.html",
    "revision": "238b39de4ddad7061ccf0a1d736e19e3"
  },
  {
    "url": "en/effects/OurFirstEffect.html",
    "revision": "a70df75b37f66f588babfadd609f5b99"
  },
  {
    "url": "en/json/Authorization.html",
    "revision": "0e8e80039b7549f808578dff52ae81cb"
  },
  {
    "url": "en/json/Control.html",
    "revision": "393021fbf335bad4d157203dea0898c4"
  },
  {
    "url": "en/json/index.html",
    "revision": "dd80c5cf3910caff3f8a9712d8932b7b"
  },
  {
    "url": "en/json/ServerInfo.html",
    "revision": "42617fc855a72a56305db46ab4c70f22"
  },
  {
    "url": "en/json/Subscribe.html",
    "revision": "5131a2922408e1c808f62f0514d6da32"
  },
  {
    "url": "en/user/advanced/Advanced.html",
    "revision": "f97af5277a633247a2d3d2aa007a541e"
  },
  {
    "url": "en/user/advanced/Support.html",
    "revision": "d35d8c1fa111f977c8500e0ee83c5429"
  },
  {
    "url": "en/user/Configuration.html",
    "revision": "2bbc770d0a56e6aee08d5082d69ee6c7"
  },
  {
    "url": "en/user/HyperBian.html",
    "revision": "909919b2646819dc3536a0a244b303d2"
  },
  {
    "url": "en/user/index.html",
    "revision": "4946724d04cd1c61ac084717d16cea3b"
  },
  {
    "url": "en/user/Installation.html",
    "revision": "f69741f168ee77866e6ae998513739a8"
  },
  {
    "url": "en/user/leddevices/gpio/piblaster.html",
    "revision": "9583f75f88461bacd665dabdf4078884"
  },
  {
    "url": "en/user/leddevices/index.html",
    "revision": "aaf1c386de12093576cc15cd3f8d7ac3"
  },
  {
    "url": "en/user/leddevices/network/atmoorb.html",
    "revision": "9055d664abc7a20a84137646fd4dcbb7"
  },
  {
    "url": "en/user/leddevices/network/cololight.html",
    "revision": "c0ec2767eb99eed857e4393af5294f55"
  },
  {
    "url": "en/user/leddevices/network/fadecandy.html",
    "revision": "eac2694b97f2c7e80e7a43496490b189"
  },
  {
    "url": "en/user/leddevices/network/nanoleaf.html",
    "revision": "664ce6a70cf5c383d530166e9dc9fa1b"
  },
  {
    "url": "en/user/leddevices/network/philipshue.html",
    "revision": "f0cdc950df59e9470be6b754159c354e"
  },
  {
    "url": "en/user/leddevices/network/tinkerforge.html",
    "revision": "d46b0f30b57aa0f384e9f31409d6bb1c"
  },
  {
    "url": "en/user/leddevices/network/tpm2net.html",
    "revision": "39db6df4999eb0f6340cd919ea396407"
  },
  {
    "url": "en/user/leddevices/network/udpartnet.html",
    "revision": "80457708621dfc0b65ec40bb6a336378"
  },
  {
    "url": "en/user/leddevices/network/udpe131.html",
    "revision": "4c8a17d655a6129cf6b75f6f93956870"
  },
  {
    "url": "en/user/leddevices/network/udph801.html",
    "revision": "fb9aa33b6ae069b07434edd6afe6c533"
  },
  {
    "url": "en/user/leddevices/network/udpraw.html",
    "revision": "94f0a96e1f95a81529a58a3302e83ba3"
  },
  {
    "url": "en/user/leddevices/network/wled.html",
    "revision": "3052fb5c9fb6fb995681d82dc0c34792"
  },
  {
    "url": "en/user/leddevices/network/yeelight.html",
    "revision": "bc2d1c3dc1471d205c7d1ad65bd46afd"
  },
  {
    "url": "en/user/leddevices/others/debug.html",
    "revision": "3e042874455757f69b30a5b93c5e0757"
  },
  {
    "url": "en/user/leddevices/spi/apa102.html",
    "revision": "9fe34ea16e32698ef91c0e008f8e282b"
  },
  {
    "url": "en/user/leddevices/spi/apa104.html",
    "revision": "49be53fce8d223b73bf7a2136ee55c26"
  },
  {
    "url": "en/user/leddevices/spi/lpd6803.html",
    "revision": "cbfd6cb6e3c83fb1a2e89639aa8e5073"
  },
  {
    "url": "en/user/leddevices/spi/lpd8806.html",
    "revision": "1f01201a999c4d3648eb27c1cdda0138"
  },
  {
    "url": "en/user/leddevices/spi/p9813.html",
    "revision": "c86a04c61634019be1317237b20c525e"
  },
  {
    "url": "en/user/leddevices/spi/sk6812.html",
    "revision": "0ca9d87d8b62197c6343b194ae3a0114"
  },
  {
    "url": "en/user/leddevices/spi/sk6822.html",
    "revision": "7980f0a5d06f2f483cabf19dada4238e"
  },
  {
    "url": "en/user/leddevices/spi/sk9822.html",
    "revision": "6498a5af95803bafe0b13020c92a11a0"
  },
  {
    "url": "en/user/leddevices/spi/ws2801.html",
    "revision": "58e1d2f1766c1e6ba17f425e443dc3c9"
  },
  {
    "url": "en/user/leddevices/spi/ws2812.html",
    "revision": "794212bc8abac2d51d0f3f795fa5d395"
  },
  {
    "url": "en/user/leddevices/usb/adalight.html",
    "revision": "65ef38b6983b1c437024f79ed30e4579"
  },
  {
    "url": "en/user/leddevices/usb/atmo.html",
    "revision": "1d06d3f04577c068f8cb00a06f4830dc"
  },
  {
    "url": "en/user/leddevices/usb/dmx.html",
    "revision": "1b85b51bf7f887466b91cb38e8cb1610"
  },
  {
    "url": "en/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "7214d48124653cc361614642d5ca61b0"
  },
  {
    "url": "en/user/leddevices/usb/karate.html",
    "revision": "068ceaa251e2cdd4949ad78e3b25c26d"
  },
  {
    "url": "en/user/leddevices/usb/lightpack.html",
    "revision": "ef120044987e7a99c3f56a9e74673ad2"
  },
  {
    "url": "en/user/leddevices/usb/multilightpack.html",
    "revision": "c258d9da12a5098770aebf02ce89414c"
  },
  {
    "url": "en/user/leddevices/usb/paintpack.html",
    "revision": "2f7431c829761449faae1031daaa6e86"
  },
  {
    "url": "en/user/leddevices/usb/rawhid.html",
    "revision": "35f68aaf1d34174642b2d8526ef14885"
  },
  {
    "url": "en/user/leddevices/usb/sedu.html",
    "revision": "3077993686cb50ef36b78b2587ec6dfc"
  },
  {
    "url": "en/user/leddevices/usb/tpm2.html",
    "revision": "0d2e723a2da6522468dfc29c50c838db"
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
    "revision": "e199bb6347c9bad8a3e489a2afe8f894"
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
