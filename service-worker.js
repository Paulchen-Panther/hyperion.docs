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
    "revision": "3f81f4bce51e299542cdec287f7b2478"
  },
  {
    "url": "assets/css/0.styles.dc8d652a.css",
    "revision": "413f24e6128c52e6cb5d20b4e9e400cc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.0d3d5260.js",
    "revision": "bda9049b5237f6f27680829aab6485fd"
  },
  {
    "url": "assets/js/100.add34758.js",
    "revision": "fb6eb7cba80076b5c87205896bcdb602"
  },
  {
    "url": "assets/js/101.735db2a0.js",
    "revision": "cdc43e46b3e1c4991101391c52fa935f"
  },
  {
    "url": "assets/js/102.d4b6b2c7.js",
    "revision": "fabd572d94c9608062500b6f9e9908c7"
  },
  {
    "url": "assets/js/103.94243800.js",
    "revision": "3cf33bb83f090e92c846b7de3d835769"
  },
  {
    "url": "assets/js/104.af746b6e.js",
    "revision": "1160b094d93c13aa1eb216116bfdda18"
  },
  {
    "url": "assets/js/105.a6f1748a.js",
    "revision": "3d2e629cd1876309e78f68b7d7f8367f"
  },
  {
    "url": "assets/js/106.bb9d6d0b.js",
    "revision": "029cfc7d42f3b388f96950ff7fcdf4da"
  },
  {
    "url": "assets/js/107.304e1798.js",
    "revision": "66f5b06b79c5768027bbb60e0dc86106"
  },
  {
    "url": "assets/js/108.d974b850.js",
    "revision": "2a70f7b62af1062153377b12cedb100f"
  },
  {
    "url": "assets/js/109.e439cccc.js",
    "revision": "487d210b85b1e9c8c882c6cd78338d51"
  },
  {
    "url": "assets/js/11.f7d259a7.js",
    "revision": "d328fd8604187bded640989913379265"
  },
  {
    "url": "assets/js/110.e749435b.js",
    "revision": "82f8e5d3f451708ff4c7d1c22a439518"
  },
  {
    "url": "assets/js/111.d977ab32.js",
    "revision": "a04c423ac6d1dc4e3ff22ded2cc363f1"
  },
  {
    "url": "assets/js/112.45275985.js",
    "revision": "cb8da9cc62d7496c96749221af29915c"
  },
  {
    "url": "assets/js/113.230593c3.js",
    "revision": "3e6b29ed8333ce5527896508137a5b2b"
  },
  {
    "url": "assets/js/114.b82454b1.js",
    "revision": "7486deb89b58cb628800d05a185164b4"
  },
  {
    "url": "assets/js/115.03f218d5.js",
    "revision": "b937c31aa90be2307c6a9512c5c71b61"
  },
  {
    "url": "assets/js/116.d511c33b.js",
    "revision": "01d5de705d16e4379c081852ac2813b6"
  },
  {
    "url": "assets/js/117.972f3b17.js",
    "revision": "0545dbe0111667c1fba6763ee46ad6d7"
  },
  {
    "url": "assets/js/118.0ea3aa33.js",
    "revision": "74d54d862f464bcab4494428242fabc0"
  },
  {
    "url": "assets/js/119.7d95253b.js",
    "revision": "86062d1b8cdb98af4a0e6537f91d49e2"
  },
  {
    "url": "assets/js/12.a1977597.js",
    "revision": "78ea8fea2bec953b25f7fbe76667473f"
  },
  {
    "url": "assets/js/120.18d7618b.js",
    "revision": "28bb7f74d1dfad3a74f508bad8fe372c"
  },
  {
    "url": "assets/js/121.423996f3.js",
    "revision": "1a6cb40478702f40bb0b67656edd1e43"
  },
  {
    "url": "assets/js/122.0d655c4c.js",
    "revision": "a052667f4a25ca418841650675bd705d"
  },
  {
    "url": "assets/js/123.792f8b61.js",
    "revision": "74c68844818005d7d5b7b9a4c35def27"
  },
  {
    "url": "assets/js/124.4f85e892.js",
    "revision": "81a3354aadae98548cd05aaf4ff1a762"
  },
  {
    "url": "assets/js/125.96ac93a8.js",
    "revision": "4471a94df799bdac6d6d670dae74877e"
  },
  {
    "url": "assets/js/126.e56b3577.js",
    "revision": "da46e8b30c11bd7c945c69eb48b3e9d9"
  },
  {
    "url": "assets/js/127.724282bd.js",
    "revision": "82e10ac70b9d700d8458d9384b278822"
  },
  {
    "url": "assets/js/128.79198460.js",
    "revision": "cf2f4815d364247d6be220d1783be65f"
  },
  {
    "url": "assets/js/129.ae63a8e3.js",
    "revision": "3f8af4a70729a07e4158956c859f6f61"
  },
  {
    "url": "assets/js/13.2259ff62.js",
    "revision": "4aad864c6585c5a46e80a809b4e2718c"
  },
  {
    "url": "assets/js/130.bd636956.js",
    "revision": "08df4a14571e1706c043615485c879d8"
  },
  {
    "url": "assets/js/131.9d0fa68c.js",
    "revision": "2456449827060a502ebca35856bdfe5f"
  },
  {
    "url": "assets/js/132.a85f9426.js",
    "revision": "07064546435cadefabdd397fa9214e32"
  },
  {
    "url": "assets/js/133.dd046c89.js",
    "revision": "a04b9993edf438cc81179c8bd8054004"
  },
  {
    "url": "assets/js/134.4b3ccde0.js",
    "revision": "82bfca1b60595b240bce402fd11f4b46"
  },
  {
    "url": "assets/js/135.6f01b3ab.js",
    "revision": "c31dafe6d1cf5814212b9b21b1b0aca7"
  },
  {
    "url": "assets/js/136.7d936f07.js",
    "revision": "545edb3836741efef5873e0f88d81e53"
  },
  {
    "url": "assets/js/137.36a8bc68.js",
    "revision": "17811d16ba0623d3aebce2d72e66c20e"
  },
  {
    "url": "assets/js/138.71a26cae.js",
    "revision": "208bac5d75c7801fcaa4928452a0214d"
  },
  {
    "url": "assets/js/139.c159563f.js",
    "revision": "b2205d1a0254a443026a61eeddae08e2"
  },
  {
    "url": "assets/js/14.b4f779f1.js",
    "revision": "864ffac0141aede7fe81cdf7b01dcd63"
  },
  {
    "url": "assets/js/140.15df38ac.js",
    "revision": "3dd6edf06846ff397934d9b7aedd5cc8"
  },
  {
    "url": "assets/js/141.8d68db16.js",
    "revision": "231e8216370ba68fc86f3f679b27a06a"
  },
  {
    "url": "assets/js/142.079a9f16.js",
    "revision": "8677b8132912af3711500d725dd2f2df"
  },
  {
    "url": "assets/js/143.a9b5ceb5.js",
    "revision": "fbfe253feba2ad022bf37afa7f9149e8"
  },
  {
    "url": "assets/js/144.8b7fedb8.js",
    "revision": "aa242f2d45d0b86bed7d3a40f6e8d0a8"
  },
  {
    "url": "assets/js/145.fea98978.js",
    "revision": "0c7bac9a4c5f4d84c7b0d444d8a0eee8"
  },
  {
    "url": "assets/js/146.01e8bb7f.js",
    "revision": "aec3fdf4be9368a17c6f8423349ea0a1"
  },
  {
    "url": "assets/js/147.621e9232.js",
    "revision": "713ff403c0a232b013683a63d6333741"
  },
  {
    "url": "assets/js/148.90c1d38c.js",
    "revision": "b63b5a87871e12488d1b158d195189fa"
  },
  {
    "url": "assets/js/149.5107b5d2.js",
    "revision": "7573d1c88d424d4ff83994321a8b8490"
  },
  {
    "url": "assets/js/15.78b0158a.js",
    "revision": "0e209a38a007fa0e21a66d23dacb9627"
  },
  {
    "url": "assets/js/150.8d615ed0.js",
    "revision": "615cedd42090d9951c9b681c4540e8c5"
  },
  {
    "url": "assets/js/151.fa49e9b5.js",
    "revision": "7cc1e211ba9ab3baa011958e81d2b10c"
  },
  {
    "url": "assets/js/152.2409840a.js",
    "revision": "d598b6924fa05f47f2bb4a408dd06d53"
  },
  {
    "url": "assets/js/16.d689d1cb.js",
    "revision": "4e86f262e5fc39ded341cc2cb0378a88"
  },
  {
    "url": "assets/js/17.454e9eb6.js",
    "revision": "b33f02408d4d88dbbc861273a7374892"
  },
  {
    "url": "assets/js/18.6eb75d69.js",
    "revision": "175a508f8e06f3cbb9c0432a470d46f6"
  },
  {
    "url": "assets/js/19.535f1364.js",
    "revision": "aef9ec991977f0bca74565fb9af55a90"
  },
  {
    "url": "assets/js/2.891cdfc8.js",
    "revision": "5a79306a00f6ca5ca89a01aa3fd20e25"
  },
  {
    "url": "assets/js/20.8788c91c.js",
    "revision": "6cff35e907109f3521737af4c94431bb"
  },
  {
    "url": "assets/js/21.b5d953da.js",
    "revision": "25634b02eae0dd123d18c58151a202d3"
  },
  {
    "url": "assets/js/22.2011f33a.js",
    "revision": "fc44d1bcc9da025f3d9f57cdc948137b"
  },
  {
    "url": "assets/js/23.c7b9dc15.js",
    "revision": "d3bbc7749c4d0a8debb40baa0ae56ec7"
  },
  {
    "url": "assets/js/24.a3adf2bb.js",
    "revision": "a31b765dff7392fe65d6f234a1954d01"
  },
  {
    "url": "assets/js/25.d5aae36b.js",
    "revision": "5bed89367233b7aaf0cc78f1d9eff06b"
  },
  {
    "url": "assets/js/26.633988bf.js",
    "revision": "47a76888d627d9281e40b77782bcb790"
  },
  {
    "url": "assets/js/27.3abe878d.js",
    "revision": "b8ef80513f0cdf53f8099d34e6c77a5a"
  },
  {
    "url": "assets/js/28.434a15a9.js",
    "revision": "837272e4be072b367c882fbeeefd4bd1"
  },
  {
    "url": "assets/js/29.e038ad80.js",
    "revision": "6735aae932896bba168fc6f0e7df2ee1"
  },
  {
    "url": "assets/js/3.2e6760cf.js",
    "revision": "33046f8a23f72d55f6176f6c5a0ea2cb"
  },
  {
    "url": "assets/js/30.d59b8d76.js",
    "revision": "347542cfe826ed473dc84ce1b20d6e63"
  },
  {
    "url": "assets/js/31.c0691bc0.js",
    "revision": "19b49cc9fafc82b8733843ff2ce65db9"
  },
  {
    "url": "assets/js/32.e2551a54.js",
    "revision": "61d9bf339e601e26a435d2ca21666383"
  },
  {
    "url": "assets/js/33.972f4958.js",
    "revision": "d27a194124767a5fad35fa507602cac5"
  },
  {
    "url": "assets/js/34.9c516721.js",
    "revision": "84cd8d657b6db4df3226543f9037ce89"
  },
  {
    "url": "assets/js/35.c43a4cf4.js",
    "revision": "e93f3bf29a30e25374396d6929916c38"
  },
  {
    "url": "assets/js/36.0b1d7308.js",
    "revision": "b077445bf456bfd3a424e74510b28d56"
  },
  {
    "url": "assets/js/37.411390b6.js",
    "revision": "97d2321ae6d7fbd8a1ebe71985dcfa78"
  },
  {
    "url": "assets/js/38.965fd0cc.js",
    "revision": "e5d953bd971027ee2dfde3bc6120664d"
  },
  {
    "url": "assets/js/39.53f53ea6.js",
    "revision": "3cf5db8b97a1e67452da6a79f44745fd"
  },
  {
    "url": "assets/js/4.0892267b.js",
    "revision": "63d69ef3205ae4b9a56a5298d97c85d4"
  },
  {
    "url": "assets/js/40.7901af8e.js",
    "revision": "df72f19f5ed7a15d01b381667381f17d"
  },
  {
    "url": "assets/js/41.196ba948.js",
    "revision": "95763fed78257afc010def58868f3a75"
  },
  {
    "url": "assets/js/42.c0002978.js",
    "revision": "9b81626481ca02e1ef4bcd8ab95c1b58"
  },
  {
    "url": "assets/js/43.ad75de41.js",
    "revision": "32ae34062d88d6fb8ee76e4b808f7829"
  },
  {
    "url": "assets/js/44.ae2adafe.js",
    "revision": "e150828c408294c3c448338eeb163d42"
  },
  {
    "url": "assets/js/45.4621a08d.js",
    "revision": "f7aa15a2cd440b9077b139c7ff706dfe"
  },
  {
    "url": "assets/js/46.fef05857.js",
    "revision": "ce47f639846eed9f7107bdcf3f5b0fc7"
  },
  {
    "url": "assets/js/47.56d1a295.js",
    "revision": "a49f715a5048f606b6580e0e800688fe"
  },
  {
    "url": "assets/js/48.56ea8974.js",
    "revision": "84b426a1275c57595a4b4f274fbbb76c"
  },
  {
    "url": "assets/js/49.3270d92c.js",
    "revision": "3e4f9f14878a8dfb65167be0356d8b6b"
  },
  {
    "url": "assets/js/5.c5dd80f4.js",
    "revision": "984ac949fd48b7c93ad012b421291789"
  },
  {
    "url": "assets/js/50.22388880.js",
    "revision": "fe84823483ea10cb7310d46b745395ba"
  },
  {
    "url": "assets/js/51.02733a98.js",
    "revision": "521be22f7ad0672d7cca2d02d4e3afdb"
  },
  {
    "url": "assets/js/52.40c83d66.js",
    "revision": "662186e049bf8c1f1084cd6011d3e92e"
  },
  {
    "url": "assets/js/53.b2fd88ab.js",
    "revision": "1005a04bb614600ffc3d79369878ffc3"
  },
  {
    "url": "assets/js/54.cfa4279e.js",
    "revision": "79046ff5f4bc0d126444d4eebc7c10af"
  },
  {
    "url": "assets/js/55.4ad5c2a4.js",
    "revision": "bb33180860c0a72023f39bb44c33b4ed"
  },
  {
    "url": "assets/js/56.d03d2b20.js",
    "revision": "825d69e912908afed562573e533d645f"
  },
  {
    "url": "assets/js/57.de9cffe3.js",
    "revision": "9789e675a68a0fead68eedccda5d1376"
  },
  {
    "url": "assets/js/58.1bb61ce1.js",
    "revision": "c26ee830a11fe7658b2953682b20dc31"
  },
  {
    "url": "assets/js/59.3ea8b86f.js",
    "revision": "ee819cd07d83a7bf28e3fba753023ffc"
  },
  {
    "url": "assets/js/6.f1fe53c9.js",
    "revision": "7ac5f95d9ae03e6169216c178496ab92"
  },
  {
    "url": "assets/js/60.45bc8f2f.js",
    "revision": "d9cc6b6070280b8a25b2c1d4f80b5f86"
  },
  {
    "url": "assets/js/61.fef26baf.js",
    "revision": "d3a3b335039b0e3755f1fbb9c7428eff"
  },
  {
    "url": "assets/js/62.8e9cfd8d.js",
    "revision": "3f913fe876f6de77aa777289d045006f"
  },
  {
    "url": "assets/js/63.5c396cfb.js",
    "revision": "0ac321342257aa8b90f2ca744d988717"
  },
  {
    "url": "assets/js/64.58f0ccf1.js",
    "revision": "ad440f61d96b6380f3ef3ac77b5d45e5"
  },
  {
    "url": "assets/js/65.d115b53e.js",
    "revision": "783aca350c31ca0d3b950f38e8c3466d"
  },
  {
    "url": "assets/js/66.6f685412.js",
    "revision": "9daccc8fc003dba0607a2ebf1d925333"
  },
  {
    "url": "assets/js/67.b1349e61.js",
    "revision": "04ea72293b923204aa025f6376169756"
  },
  {
    "url": "assets/js/68.8f207a3f.js",
    "revision": "cb2746c52405f804c7e93e828adff01e"
  },
  {
    "url": "assets/js/69.0174bc15.js",
    "revision": "d88e94ee6f5e300401a968a14f8ab7a4"
  },
  {
    "url": "assets/js/7.561e4e5b.js",
    "revision": "ae0cc3284283658bcf538f97fe923664"
  },
  {
    "url": "assets/js/70.2e18f000.js",
    "revision": "899e511750332d8a89c6a71209fc0806"
  },
  {
    "url": "assets/js/71.657336e4.js",
    "revision": "8ac612a510a4b0e19b1627593c856ab9"
  },
  {
    "url": "assets/js/72.48bdb34f.js",
    "revision": "6966b94b606d703107c5e0b75309bfff"
  },
  {
    "url": "assets/js/73.1dab4b69.js",
    "revision": "4368c99659f2d2a2c26f5951e0be7429"
  },
  {
    "url": "assets/js/74.466a4abd.js",
    "revision": "ddb193d269c6fd12b36e571c9641203f"
  },
  {
    "url": "assets/js/75.a8205c9c.js",
    "revision": "7504af051319f5a410be6d651713bf68"
  },
  {
    "url": "assets/js/76.beb1ca7f.js",
    "revision": "b834b1604a0d4bff28fe16173057c5e4"
  },
  {
    "url": "assets/js/77.d868215b.js",
    "revision": "7a443a95600e8a8046267b240ef11303"
  },
  {
    "url": "assets/js/78.93d53d6b.js",
    "revision": "2be77b51b1f26c113b5cc9ce9c0d4199"
  },
  {
    "url": "assets/js/79.d3f71ba4.js",
    "revision": "55ed93a57859c1cb2439f1167be2d2c0"
  },
  {
    "url": "assets/js/8.c5bd91eb.js",
    "revision": "fdd7fb1776ff7617a01b08b024a1878f"
  },
  {
    "url": "assets/js/80.2ef41c26.js",
    "revision": "03051f038386a02f1b94a0c4e65dd81d"
  },
  {
    "url": "assets/js/81.fac646e0.js",
    "revision": "14fbaeee1fc57b77fa77f03f5a7f46e4"
  },
  {
    "url": "assets/js/82.e4ee8418.js",
    "revision": "3934279e6215b8e4b42058437ae6d777"
  },
  {
    "url": "assets/js/83.7fb0b303.js",
    "revision": "af23861ca4fc864291c9fe8120abca44"
  },
  {
    "url": "assets/js/84.ac8d1baf.js",
    "revision": "294a14557da6497dbe3c43d3fa47ccf5"
  },
  {
    "url": "assets/js/85.6e3db31e.js",
    "revision": "628dc6362abe69056247f520768ba8a6"
  },
  {
    "url": "assets/js/86.88912ed0.js",
    "revision": "9147ece570afce4e93cdfae449df075d"
  },
  {
    "url": "assets/js/87.2aaed9d0.js",
    "revision": "08c59fdb6b7361b56129240a708a08e2"
  },
  {
    "url": "assets/js/88.ab9b531c.js",
    "revision": "a5edcb563ba86b57e92d5abcf0844124"
  },
  {
    "url": "assets/js/89.e5127931.js",
    "revision": "e398bd683468f0128bf35bd79c248e4a"
  },
  {
    "url": "assets/js/90.2b4aad28.js",
    "revision": "d2ab0571fc744d273a27ce203379360b"
  },
  {
    "url": "assets/js/91.cb94b16d.js",
    "revision": "8b1a0ad3f511655a69f3fd6c9d429c2f"
  },
  {
    "url": "assets/js/92.5f0e20ea.js",
    "revision": "1e21fd728df1a2386c3b2d34122962c2"
  },
  {
    "url": "assets/js/93.4ec384a5.js",
    "revision": "e09bcf03ca49e347ab03b0c6ddab426b"
  },
  {
    "url": "assets/js/94.6252ca25.js",
    "revision": "906241861fc7e92d71476c13f395aa0d"
  },
  {
    "url": "assets/js/95.c7cb1509.js",
    "revision": "2c713b3f49ab91bcf26b990300e60608"
  },
  {
    "url": "assets/js/96.4b48bffa.js",
    "revision": "6da4d62f146730b5167234dd5efbd69f"
  },
  {
    "url": "assets/js/97.05b912d4.js",
    "revision": "b3bbb7fdf976a6da393ba0596b145afd"
  },
  {
    "url": "assets/js/98.d7e17cc7.js",
    "revision": "15c8d5c4fb8c036d99ffea7a6b64e7e6"
  },
  {
    "url": "assets/js/99.3f704aba.js",
    "revision": "60944e1ef122af9818b194626bea6446"
  },
  {
    "url": "assets/js/app.319ccdda.js",
    "revision": "715ff06555d54f433c84d053a1cdfe34"
  },
  {
    "url": "assets/js/vendors~docsearch.d4d0a48a.js",
    "revision": "4cc0bd32b1bb6eaa9c9f3420bd6aba55"
  },
  {
    "url": "de/api/Detect.html",
    "revision": "3a2f3bce91a6e7ed67df94df947040cc"
  },
  {
    "url": "de/api/Guidelines.html",
    "revision": "816b9ff0965b14c2ed7a0f8de4de956c"
  },
  {
    "url": "de/api/Ui.html",
    "revision": "c33b424a16e59a1d58d83f0063d1e88a"
  },
  {
    "url": "de/effects/API.html",
    "revision": "3f89c97a66c153ebcaaeb1cc15efbffc"
  },
  {
    "url": "de/effects/index.html",
    "revision": "96380d0b4447f78d51456d2bb0d0f390"
  },
  {
    "url": "de/effects/OurFirstEffect.html",
    "revision": "a110e8afad76e736b9e21bae821e0999"
  },
  {
    "url": "de/index.html",
    "revision": "81b2a89c749d5573cb06f73710dba3a6"
  },
  {
    "url": "de/json/Authentication.html",
    "revision": "a2309dc7498db4356b63489c7f3975e6"
  },
  {
    "url": "de/json/Control.html",
    "revision": "7b8b7f70bd12ba08333929c527135d3d"
  },
  {
    "url": "de/json/index.html",
    "revision": "26e9045ac536d5911a79bdcf23a1c665"
  },
  {
    "url": "de/json/ServerInfo.html",
    "revision": "e53cda6f76b7fa34d5ce8b3979c9c9a8"
  },
  {
    "url": "de/json/Subscribe.html",
    "revision": "361bfaeb65c7c75934060113c3d673c9"
  },
  {
    "url": "de/user/advanced/Advanced.html",
    "revision": "22a0c74c18aa6d29e728b9ebba4c0cce"
  },
  {
    "url": "de/user/advanced/CLI.html",
    "revision": "8c84ba5c12fd07564ec63c9e54664c1d"
  },
  {
    "url": "de/user/advanced/Support.html",
    "revision": "ba24fbbc79d3b6c4d0f2813adb10d7f3"
  },
  {
    "url": "de/user/advanced/Testing.html",
    "revision": "2d499521323a07f762a15783b4425305"
  },
  {
    "url": "de/user/HyperBian.html",
    "revision": "ed145b998b726e662b00e9aedd334929"
  },
  {
    "url": "de/user/index.html",
    "revision": "bb062789a2e66ceec1e57020d8f1defc"
  },
  {
    "url": "de/user/Installation.html",
    "revision": "733ffb4fa107dd3181550aeee5ff00a4"
  },
  {
    "url": "de/user/Konfiguration.html",
    "revision": "b808dba17d6ae13fffdfdd3bfbecb18b"
  },
  {
    "url": "de/user/leddevices/index.html",
    "revision": "6d67d11523f24f11b654f178d2d17aea"
  },
  {
    "url": "de/user/leddevices/network/atmoorb.html",
    "revision": "ddcd7443eef171bbb5f91de16d18cf7e"
  },
  {
    "url": "de/user/leddevices/network/cololight.html",
    "revision": "52325f820e95a2e509e32a9e13bd2129"
  },
  {
    "url": "de/user/leddevices/network/fadecandy.html",
    "revision": "6d23d232283814085e2dca18469a8ce6"
  },
  {
    "url": "de/user/leddevices/network/nanoleaf.html",
    "revision": "3332153f15760acc97d50451a83e377d"
  },
  {
    "url": "de/user/leddevices/network/philipshue.html",
    "revision": "913a76db39c9d559026433bd9114e103"
  },
  {
    "url": "de/user/leddevices/network/razer.html",
    "revision": "7f47ba72993bd65f10685e402ebef6bb"
  },
  {
    "url": "de/user/leddevices/network/tinkerforge.html",
    "revision": "fc7e930ef4c79afc65745741256659af"
  },
  {
    "url": "de/user/leddevices/network/tpm2net.html",
    "revision": "06b97bbadd19b3337dff27afec6b3f0a"
  },
  {
    "url": "de/user/leddevices/network/udpartnet.html",
    "revision": "1e9f46ec0537295edba8f11b7e7b680b"
  },
  {
    "url": "de/user/leddevices/network/udpddp.html",
    "revision": "8a72a782b18144454f34a62678b91bb3"
  },
  {
    "url": "de/user/leddevices/network/udpe131.html",
    "revision": "b3510f2dd8345fe13023f6e1812f35bd"
  },
  {
    "url": "de/user/leddevices/network/udph801.html",
    "revision": "9d989bd0006964f89190e56bb1c7ce33"
  },
  {
    "url": "de/user/leddevices/network/udpraw.html",
    "revision": "b4c6a11da98f4c0a62071fb836b1d818"
  },
  {
    "url": "de/user/leddevices/network/wled.html",
    "revision": "34af12b5cf3e339cc3b1538b54cb9d60"
  },
  {
    "url": "de/user/leddevices/network/yeelight.html",
    "revision": "0ef1a4ecb0857ae4bee7c543259d03ba"
  },
  {
    "url": "de/user/leddevices/others/debug.html",
    "revision": "3edebd229b51413f80cbc452d98b8c6a"
  },
  {
    "url": "de/user/leddevices/spi_pwm/apa102.html",
    "revision": "821960e0c7fecb6d0398771f152add49"
  },
  {
    "url": "de/user/leddevices/spi_pwm/apa104.html",
    "revision": "143bd1c9f6797fa47ddb444d0678d640"
  },
  {
    "url": "de/user/leddevices/spi_pwm/lpd6803.html",
    "revision": "ddffc7e7094af9333482456b2f2702d4"
  },
  {
    "url": "de/user/leddevices/spi_pwm/lpd8806.html",
    "revision": "0acdfe02f53fde6ad613255e1e94b2d7"
  },
  {
    "url": "de/user/leddevices/spi_pwm/p9813.html",
    "revision": "2c41c7019c4fe1083ab177c7b6377930"
  },
  {
    "url": "de/user/leddevices/spi_pwm/piblaster.html",
    "revision": "4efd4abd0a968806006190dd74f02804"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk6812.html",
    "revision": "74788ad4e1c8db6f2451c78cb0c74be0"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk6822.html",
    "revision": "7181c1c2e39436e282e13fffca9f38a1"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk9822.html",
    "revision": "c4e40adae2fb81fa719a4862c2ea61ba"
  },
  {
    "url": "de/user/leddevices/spi_pwm/ws2801.html",
    "revision": "5f339c9e56b8fcc650f82732875bba51"
  },
  {
    "url": "de/user/leddevices/spi_pwm/ws2812.html",
    "revision": "30123bbae557f2dcb3edd18245e0a8cc"
  },
  {
    "url": "de/user/leddevices/usb/adalight.html",
    "revision": "d4aa63e90acf078bfa9943ee31754f33"
  },
  {
    "url": "de/user/leddevices/usb/atmo.html",
    "revision": "76b9d32b0a34f0171a4d9961bdf32a56"
  },
  {
    "url": "de/user/leddevices/usb/dmx.html",
    "revision": "29521d8ea233fcf1924d427d9f0aba35"
  },
  {
    "url": "de/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "39ac699985393276f53edec9a17fd8f8"
  },
  {
    "url": "de/user/leddevices/usb/karate.html",
    "revision": "2d9f16604decef11341f77562071b468"
  },
  {
    "url": "de/user/leddevices/usb/lightpack.html",
    "revision": "58ce0a81a2b15663d093bf705675a7ea"
  },
  {
    "url": "de/user/leddevices/usb/multilightpack.html",
    "revision": "8dc2cfb9b5dcec94d01a79489fd3bc8f"
  },
  {
    "url": "de/user/leddevices/usb/paintpack.html",
    "revision": "06a07e20f3017af91b76b2f4c28dc5df"
  },
  {
    "url": "de/user/leddevices/usb/rawhid.html",
    "revision": "7986c0ea1c2ad28506d7a9832c5c0c7f"
  },
  {
    "url": "de/user/leddevices/usb/sedu.html",
    "revision": "af4b65b50d0503dbf214f5ced1944a97"
  },
  {
    "url": "de/user/leddevices/usb/tpm2.html",
    "revision": "1ef90813ada27ad8ca64155b1d0b78fc"
  },
  {
    "url": "en/addons/API.html",
    "revision": "f2565d570790b4d317a7ceb364054577"
  },
  {
    "url": "en/addons/index.html",
    "revision": "292ab05afb35777590f66520819fc500"
  },
  {
    "url": "en/addons/OurFirstAddon.html",
    "revision": "78a6de2d98b28f7566eaf5e9edfcc574"
  },
  {
    "url": "en/api/Detect.html",
    "revision": "8d4307ee33d836520ffb7d70218115ff"
  },
  {
    "url": "en/api/Guidelines.html",
    "revision": "087353d7b083553270635bc0e15bf986"
  },
  {
    "url": "en/api/Ui.html",
    "revision": "7e275fa2cf769043ef10ffda2baf544c"
  },
  {
    "url": "en/effects/API.html",
    "revision": "87d0d42f513f96bd2d8d8f8d0258dbfd"
  },
  {
    "url": "en/effects/index.html",
    "revision": "f7c143a1e0127802481e1125fddb5513"
  },
  {
    "url": "en/effects/OurFirstEffect.html",
    "revision": "e6dc9ab33a4909026c5608bc2915c25a"
  },
  {
    "url": "en/json/Authentication.html",
    "revision": "9ef7b19c37c0a766f5a2206cdd7d24d1"
  },
  {
    "url": "en/json/Control.html",
    "revision": "7bb8cbbe8990b8bb6a983c503f824ff1"
  },
  {
    "url": "en/json/index.html",
    "revision": "464e470698f153172d9b271de134b0fb"
  },
  {
    "url": "en/json/ServerInfo.html",
    "revision": "33281e4e0123d8d0fc57ad3e27b8a783"
  },
  {
    "url": "en/json/Subscribe.html",
    "revision": "580e20cb6420d18fa27fcb7ad74305e9"
  },
  {
    "url": "en/user/advanced/Advanced.html",
    "revision": "dbaa78ddbf32e7aa8287dd7b56133f0e"
  },
  {
    "url": "en/user/advanced/CLI.html",
    "revision": "1c4565447ee5c3bdae255e726a2a4b68"
  },
  {
    "url": "en/user/advanced/Support.html",
    "revision": "5ffe3793ebd2fd94bbaa407c075ad64b"
  },
  {
    "url": "en/user/advanced/Testing.html",
    "revision": "b392445979e8c2865b096f2fa3b4f554"
  },
  {
    "url": "en/user/Configuration.html",
    "revision": "27362b77590c2be24ae08c59e4abfddd"
  },
  {
    "url": "en/user/HyperBian.html",
    "revision": "0bfc94fde31347eebbabf1cc69e4f98f"
  },
  {
    "url": "en/user/index.html",
    "revision": "8c2c67ec58d6325fe04da54130fd8e37"
  },
  {
    "url": "en/user/Installation.html",
    "revision": "10d806a3a558d9ad490609f090dcbbbc"
  },
  {
    "url": "en/user/leddevices/index.html",
    "revision": "266e5077a3da95531cac36a8f62de6d9"
  },
  {
    "url": "en/user/leddevices/network/atmoorb.html",
    "revision": "c39127b2d99416a32b692e177734f32d"
  },
  {
    "url": "en/user/leddevices/network/cololight.html",
    "revision": "fb641405430f8355cfab59bb5acbc006"
  },
  {
    "url": "en/user/leddevices/network/fadecandy.html",
    "revision": "f0926a9dcbe9289ed24b9b1dce562d79"
  },
  {
    "url": "en/user/leddevices/network/nanoleaf.html",
    "revision": "4ad12d182146c34b3511ae128c4c8e7d"
  },
  {
    "url": "en/user/leddevices/network/philipshue.html",
    "revision": "2753579bd7d2f338fc95ddbb49ee5a8c"
  },
  {
    "url": "en/user/leddevices/network/razer.html",
    "revision": "7c66e3b1d8209c3ff2b993bf4194382f"
  },
  {
    "url": "en/user/leddevices/network/tinkerforge.html",
    "revision": "67d2ce30d4d3ac7bb8cb77d0680e61b3"
  },
  {
    "url": "en/user/leddevices/network/tpm2net.html",
    "revision": "7d6027e3e4bce6b1daff11215f501f99"
  },
  {
    "url": "en/user/leddevices/network/udpartnet.html",
    "revision": "7a89a9b04ba66a442570d368f74917f0"
  },
  {
    "url": "en/user/leddevices/network/udpddp.html",
    "revision": "78f43033dae209d35a01b62b4603653b"
  },
  {
    "url": "en/user/leddevices/network/udpe131.html",
    "revision": "55ac5311fdda3cc6309e1c6046b45063"
  },
  {
    "url": "en/user/leddevices/network/udph801.html",
    "revision": "52daf3b1abb8ad16780e0a592905d991"
  },
  {
    "url": "en/user/leddevices/network/udpraw.html",
    "revision": "e495e50e45371da64269563dd3219456"
  },
  {
    "url": "en/user/leddevices/network/wled.html",
    "revision": "da296b1188d5414eff62ff3ebc654b1e"
  },
  {
    "url": "en/user/leddevices/network/yeelight.html",
    "revision": "876b5757fc90f003e66df82ca5952035"
  },
  {
    "url": "en/user/leddevices/others/debug.html",
    "revision": "7961cc5ce0434ddc2e67454bff8bba7a"
  },
  {
    "url": "en/user/leddevices/spi_pwm/apa102.html",
    "revision": "c327cbf61746dae06a017f5a674144d2"
  },
  {
    "url": "en/user/leddevices/spi_pwm/apa104.html",
    "revision": "447d4b46493b35cd6a274b32fee86644"
  },
  {
    "url": "en/user/leddevices/spi_pwm/lpd6803.html",
    "revision": "15525da4ace1af50329f19a34181bcdd"
  },
  {
    "url": "en/user/leddevices/spi_pwm/lpd8806.html",
    "revision": "5ee0e790ebc815f865cfce7000fca296"
  },
  {
    "url": "en/user/leddevices/spi_pwm/p9813.html",
    "revision": "352ce23ee70e5e20203f37f7a32c6b6d"
  },
  {
    "url": "en/user/leddevices/spi_pwm/piblaster.html",
    "revision": "3c1c34cb4c82c46debe1d72ef314d3f8"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk6812.html",
    "revision": "2e88c20f862c3bb5fdd981623d50ac0e"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk6822.html",
    "revision": "2c24de047801d4295e456964fa5f20cd"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk9822.html",
    "revision": "7b8448c593e90ba021ae3069b53320b8"
  },
  {
    "url": "en/user/leddevices/spi_pwm/ws2801.html",
    "revision": "e46af1ae931c8e20d51cd60b8051502c"
  },
  {
    "url": "en/user/leddevices/spi_pwm/ws2812.html",
    "revision": "54787056d352af73530511faaf3299d2"
  },
  {
    "url": "en/user/leddevices/usb/adalight.html",
    "revision": "757959faaf8bc96370806debc2cd5cd1"
  },
  {
    "url": "en/user/leddevices/usb/atmo.html",
    "revision": "1e7db6eccf44785d8559328c35e7cabd"
  },
  {
    "url": "en/user/leddevices/usb/dmx.html",
    "revision": "96f37e38d084401b8af1427e73c1d5f5"
  },
  {
    "url": "en/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "d8832647154936a8fe2219fd18fbdff7"
  },
  {
    "url": "en/user/leddevices/usb/karate.html",
    "revision": "313a7a2b27fe92552a6fbea76f1370de"
  },
  {
    "url": "en/user/leddevices/usb/lightpack.html",
    "revision": "a8cac00ab4396e43920872f23009247a"
  },
  {
    "url": "en/user/leddevices/usb/multilightpack.html",
    "revision": "cb5b47b2e80b53ba7d68332e4c8a414c"
  },
  {
    "url": "en/user/leddevices/usb/paintpack.html",
    "revision": "d1eba1593423d193a3e6840653b1fdfd"
  },
  {
    "url": "en/user/leddevices/usb/rawhid.html",
    "revision": "ffaef15c622fd2bda26c211071640fd3"
  },
  {
    "url": "en/user/leddevices/usb/sedu.html",
    "revision": "52b0051d678c209477b1a685c5cde4fa"
  },
  {
    "url": "en/user/leddevices/usb/tpm2.html",
    "revision": "6c5363c13a43bd06fcd77adc76e98e39"
  },
  {
    "url": "hyperion_logo_dark_dynamic.png",
    "revision": "5144c189e57bc6ebcc2e9c242a6d88cd"
  },
  {
    "url": "hyperion_logo_dark_static.png",
    "revision": "002fd7f8af81855feddb69dc92febb0c"
  },
  {
    "url": "hyperion_logo_light_dynamic.png",
    "revision": "a1d006af8975d2f83de583d8f779b34d"
  },
  {
    "url": "hyperion_logo_light_static.png",
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
    "url": "images/de/http_jsonrpc.jpg",
    "revision": "2d708be5aad53591bc698927dc05b07f"
  },
  {
    "url": "images/de/user_config_access.jpg",
    "revision": "27c7d7dba632794776545806cf9d7e9b"
  },
  {
    "url": "images/de/user_config_dash.jpg",
    "revision": "059ac4a0371f77c252c24f55f150f647"
  },
  {
    "url": "images/de/user_config_lang.jpg",
    "revision": "e96abe0016d26e8c156969a5161b57fa"
  },
  {
    "url": "images/de/user_events_cec.png",
    "revision": "ef45e959a80f8eec10cbb006b2234376"
  },
  {
    "url": "images/de/user_events_scheduled.png",
    "revision": "c01f385004e90630ee18a734d943e544"
  },
  {
    "url": "images/de/user_ledlayout3.jpg",
    "revision": "74ed7256f5679c12c068ff5135758bf0"
  },
  {
    "url": "images/en/avahi-browse.jpg",
    "revision": "92014da9d4fb709b5f0b619127260f50"
  },
  {
    "url": "images/en/http_jsonrpc.jpg",
    "revision": "7cf6e7293af8779f6bcf12f86e34bb6b"
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
    "url": "images/en/user_config_access.jpg",
    "revision": "97deff23547985f04788bb02002ff21c"
  },
  {
    "url": "images/en/user_config_dash.jpg",
    "revision": "040c1fa6da9d630755663abeeb67e96c"
  },
  {
    "url": "images/en/user_config_lang.jpg",
    "revision": "a2e03ebed148ab935371059e38925326"
  },
  {
    "url": "images/en/user_events_cec.png",
    "revision": "13f81bcbb18d0b5220ab7325b2b19a05"
  },
  {
    "url": "images/en/user_events_scheduled.png",
    "revision": "dceff86ef3509fc2af3f4b330b802cef"
  },
  {
    "url": "images/en/user_gammacurve.png",
    "revision": "1bc6325ef5dd3cafa09d40d0e4f65d8b"
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
    "revision": "c5f22ed1186b14a06b3aa1ce17420f86"
  },
  {
    "url": "index.html",
    "revision": "0a9f828bae02c5825c7e4f34484bbc9b"
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
