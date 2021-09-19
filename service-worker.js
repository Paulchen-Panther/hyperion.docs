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
    "revision": "c2787d7f646def0811e2f38c7802ebee"
  },
  {
    "url": "assets/css/0.styles.d344bc5f.css",
    "revision": "d5ed60473868fa97630b333cdb592a07"
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
    "url": "assets/js/10.d1b4ec40.js",
    "revision": "4e0ffc6a54afdff082b7532f9e7a83ec"
  },
  {
    "url": "assets/js/100.8acf16f5.js",
    "revision": "6ef4f479532dcadc34ddb07e031dab07"
  },
  {
    "url": "assets/js/101.f1c0c2f0.js",
    "revision": "93cf4a6c12d581025b4a9404287088b2"
  },
  {
    "url": "assets/js/102.a5c8f8d6.js",
    "revision": "b8a3775533a13eafc2bfbd07ebce7278"
  },
  {
    "url": "assets/js/103.fd7579fb.js",
    "revision": "1012b9e464e9584c24dfea9626eb3495"
  },
  {
    "url": "assets/js/104.67f4cc23.js",
    "revision": "1f19f335b5df42601a3cb0b4b2143d8c"
  },
  {
    "url": "assets/js/105.a92b6d8a.js",
    "revision": "717b9edd2403f7da1c2f76c0b0617163"
  },
  {
    "url": "assets/js/106.484a5ee7.js",
    "revision": "2afc53dfbd3d7983ebf0e7496ae30673"
  },
  {
    "url": "assets/js/107.60ff1ecc.js",
    "revision": "ba0307e60b44da984aca3acd1c9d40e9"
  },
  {
    "url": "assets/js/108.96b8f399.js",
    "revision": "c4e3045c7917924e73b08a6815c7eec8"
  },
  {
    "url": "assets/js/109.20b02303.js",
    "revision": "26d64bf31e0ecdd321906abdda05461d"
  },
  {
    "url": "assets/js/11.96460a75.js",
    "revision": "7acd606d5b138ede6bd8995740cc8ff0"
  },
  {
    "url": "assets/js/110.677e9766.js",
    "revision": "79878d83fdc57a668601811f4c659564"
  },
  {
    "url": "assets/js/111.612dbffd.js",
    "revision": "c35952af45720cd87088b74531289e2a"
  },
  {
    "url": "assets/js/112.c0504179.js",
    "revision": "6cac3bd77706191256300244a2d813f8"
  },
  {
    "url": "assets/js/113.963f386a.js",
    "revision": "747f2d200d93cd41465fcffd2dd5fd05"
  },
  {
    "url": "assets/js/114.27389a5a.js",
    "revision": "31175cf5e1003f40424429e884c9150a"
  },
  {
    "url": "assets/js/115.a2726fa5.js",
    "revision": "60c06dfd5f6254b05cb9c0f96f191629"
  },
  {
    "url": "assets/js/116.0236954c.js",
    "revision": "d016d9fd7077c12952d8d97636029317"
  },
  {
    "url": "assets/js/117.ae0e55ef.js",
    "revision": "7c4b079289468fc5fca70db3664f77f2"
  },
  {
    "url": "assets/js/118.9a5169d5.js",
    "revision": "e17f99f5f4c15ba2f00ec70ea9d89a99"
  },
  {
    "url": "assets/js/119.e1d422a5.js",
    "revision": "6ee3b3fffeba7300d06f76d3db43eee8"
  },
  {
    "url": "assets/js/12.0c6a787a.js",
    "revision": "b33f1f69ff68d54cc118a36955865e46"
  },
  {
    "url": "assets/js/120.d0a30a5a.js",
    "revision": "eac3786ca38155403ca2abd91dfeda2c"
  },
  {
    "url": "assets/js/121.f51292ca.js",
    "revision": "4b4ae3eab389194d87df495e4fc40b2d"
  },
  {
    "url": "assets/js/122.6f747b5f.js",
    "revision": "c7695e2a548a3c86a9f281a65af1c7e2"
  },
  {
    "url": "assets/js/123.ce75973d.js",
    "revision": "e6ddc1ff8e9b17534bed86e524cfefa0"
  },
  {
    "url": "assets/js/124.9be19df3.js",
    "revision": "4cf8e365e39d93144cbc51fef728f8b6"
  },
  {
    "url": "assets/js/125.ef9fe330.js",
    "revision": "f87a9f0ffb7a3d383f81c7041712db9a"
  },
  {
    "url": "assets/js/126.58119339.js",
    "revision": "7a8fbe4458be8c45791f5a3645b7fecb"
  },
  {
    "url": "assets/js/13.98d2b54d.js",
    "revision": "3e132dfec9e772536dd0c3a64497a863"
  },
  {
    "url": "assets/js/14.eae276b3.js",
    "revision": "ce3f59e0b1eff87b50153bc8d0dd087d"
  },
  {
    "url": "assets/js/15.e651da13.js",
    "revision": "efc8c0596099b8ab76138c7487fa3fcc"
  },
  {
    "url": "assets/js/16.668b0a46.js",
    "revision": "8cd99ea74e45ff9a9e7e0810472aeedb"
  },
  {
    "url": "assets/js/17.f1fe7a19.js",
    "revision": "7989a1ec3040f65e4988562bc60a4151"
  },
  {
    "url": "assets/js/18.b6d4f54a.js",
    "revision": "f144af30f13447909ce73b257d68325a"
  },
  {
    "url": "assets/js/19.569d54d6.js",
    "revision": "373009520f36595321c361a7158ad34d"
  },
  {
    "url": "assets/js/20.745b68e9.js",
    "revision": "430441952c13ebe376b2ab856406f225"
  },
  {
    "url": "assets/js/21.3057ba6c.js",
    "revision": "0c195fe9c76e7c1dc9206110729951eb"
  },
  {
    "url": "assets/js/22.742c859b.js",
    "revision": "a8a7172934d26719c0fe7d4aebe5d14e"
  },
  {
    "url": "assets/js/23.d3c70ac6.js",
    "revision": "a6f33ce5c57c2fb6b5b7d5d84bb44e62"
  },
  {
    "url": "assets/js/24.4900486d.js",
    "revision": "2e051f2a70a11c3bcfec9c6c58089eb0"
  },
  {
    "url": "assets/js/25.8adfba91.js",
    "revision": "f324f016909b3880cfa49bf3763e1fb1"
  },
  {
    "url": "assets/js/26.6f8ad90a.js",
    "revision": "5d3cc08fa5ade10e8b6dcf6c23348090"
  },
  {
    "url": "assets/js/27.22564dea.js",
    "revision": "212bfdfd22609f1b991c3cfed679c93c"
  },
  {
    "url": "assets/js/28.958acd70.js",
    "revision": "490e0093fabfd7488895844dda179e7c"
  },
  {
    "url": "assets/js/29.149e4358.js",
    "revision": "f077e9cd398774c1aa8a0cb0c927aa2a"
  },
  {
    "url": "assets/js/3.9e3f8a03.js",
    "revision": "121e617983b5e9fb647ae182b77c59ac"
  },
  {
    "url": "assets/js/30.d95da59c.js",
    "revision": "4a041fae89e9e8792f1d5acaa6c21440"
  },
  {
    "url": "assets/js/31.f303259a.js",
    "revision": "29327adc94c3f141f038deee7921aa7d"
  },
  {
    "url": "assets/js/32.64e2e55c.js",
    "revision": "35114003b36d2c8aaba1c99af06f0783"
  },
  {
    "url": "assets/js/33.82340cb3.js",
    "revision": "bf355e3416fb06f4ac9459639245cb0e"
  },
  {
    "url": "assets/js/34.5f53e034.js",
    "revision": "c7f27a4e5b74e15f0673ecfd2274cc5f"
  },
  {
    "url": "assets/js/35.837845d1.js",
    "revision": "eaee43eaa1134ae48769d292b3e49b0f"
  },
  {
    "url": "assets/js/36.6d7383b3.js",
    "revision": "9d1c71958f736fd456684b0ed8796c4b"
  },
  {
    "url": "assets/js/37.ba3e6c0c.js",
    "revision": "dad597a28fce8c314b4c17e9c83614ee"
  },
  {
    "url": "assets/js/38.c7cf75d4.js",
    "revision": "cf70a424331fb02c2908a2c58c63ac75"
  },
  {
    "url": "assets/js/39.3cbcd54b.js",
    "revision": "72616859361690e764c2ce10b3a5c7f4"
  },
  {
    "url": "assets/js/4.c6fede29.js",
    "revision": "eb03b23e670e3dbd2deca33f521b8fa4"
  },
  {
    "url": "assets/js/40.29f556c1.js",
    "revision": "58867af7cf3bbea9ef04f1361b30c174"
  },
  {
    "url": "assets/js/41.6b19cebe.js",
    "revision": "65fc8c36f8c50dd76dcdf381096df1d9"
  },
  {
    "url": "assets/js/42.a8861550.js",
    "revision": "e14330018c16c0cd746d8e2b781eea27"
  },
  {
    "url": "assets/js/43.f624b609.js",
    "revision": "042efe06fd754664749f3dfc8eb11e45"
  },
  {
    "url": "assets/js/44.dcf18fbd.js",
    "revision": "79b948ee6d3c577bae09f4fb5aa75f24"
  },
  {
    "url": "assets/js/45.91db682c.js",
    "revision": "95a837795b4d28639152f2fd8fa3adfc"
  },
  {
    "url": "assets/js/46.05926b30.js",
    "revision": "b98f217577c3a5ba153ff985810ee900"
  },
  {
    "url": "assets/js/47.a16d9ce7.js",
    "revision": "37494abe409c0d7adce33770b72cb76d"
  },
  {
    "url": "assets/js/48.77216f71.js",
    "revision": "881bdf0b01bbe6bce704b7b80309e6dd"
  },
  {
    "url": "assets/js/49.3aa9a27b.js",
    "revision": "c7aeb9e71d2f0bf4f1f63cfc29a90a9c"
  },
  {
    "url": "assets/js/5.ca43668d.js",
    "revision": "def00f6fd90c28c4cc6121f9ceb3f990"
  },
  {
    "url": "assets/js/50.be90d66d.js",
    "revision": "e11aad7439fd821627dc652edbaea795"
  },
  {
    "url": "assets/js/51.a074d933.js",
    "revision": "33b335c50327c39c07f42a92c9ae33ef"
  },
  {
    "url": "assets/js/52.d7d214b4.js",
    "revision": "4f90a0a5d4664562c25517b7c078c408"
  },
  {
    "url": "assets/js/53.2868cca4.js",
    "revision": "dd48e17340a44ed245197e5e7952a340"
  },
  {
    "url": "assets/js/54.390d0b12.js",
    "revision": "674feff79c99f9242fcad6179434301f"
  },
  {
    "url": "assets/js/55.8e2b92b7.js",
    "revision": "b3b3df6b6928134d4c67b3f47608e677"
  },
  {
    "url": "assets/js/56.974b2aa3.js",
    "revision": "75cca3ebf33679eda1da4e0b3ec2b2aa"
  },
  {
    "url": "assets/js/57.d44f5815.js",
    "revision": "3b841dcf95ebf99cc464dc736ca202d4"
  },
  {
    "url": "assets/js/58.cc7eaa70.js",
    "revision": "f5d02e0b5f03625ead8a66c618668454"
  },
  {
    "url": "assets/js/59.754567c8.js",
    "revision": "01230e4f5c6a4c341387763edd92feff"
  },
  {
    "url": "assets/js/6.9533f68a.js",
    "revision": "ee0df390b169f414cd5aca994507c7f3"
  },
  {
    "url": "assets/js/60.0c2d81e0.js",
    "revision": "b45003ca4cf6dd167a869322c33bf228"
  },
  {
    "url": "assets/js/61.8b38697e.js",
    "revision": "37803b6908f3d0315586e5d267b5cd7c"
  },
  {
    "url": "assets/js/62.60d77761.js",
    "revision": "370afb53b6d21a7f54e9cfeb2acd47af"
  },
  {
    "url": "assets/js/63.3cfd5f05.js",
    "revision": "41530ff34c12b674de44bc851bf02933"
  },
  {
    "url": "assets/js/64.58c87bd6.js",
    "revision": "1faef45425031fa513e88ec5c442b6cc"
  },
  {
    "url": "assets/js/65.a9621c03.js",
    "revision": "fb917b8fc994cddc5013ee6a7d639672"
  },
  {
    "url": "assets/js/66.726a84f9.js",
    "revision": "09e4cab24c1861ed408d2053ee631a5e"
  },
  {
    "url": "assets/js/67.05a71d87.js",
    "revision": "5e602f1f149b0736a23f805dfdbe5bb3"
  },
  {
    "url": "assets/js/68.3dd4aed0.js",
    "revision": "d6e5c6200f4264346adf1a527d5be390"
  },
  {
    "url": "assets/js/69.1c0a6b69.js",
    "revision": "3f6dab00e22802e4b2dd77fa0d9533d3"
  },
  {
    "url": "assets/js/7.0592d7c8.js",
    "revision": "f2182d5819125a7cb8f3bf0e3bc2e5ac"
  },
  {
    "url": "assets/js/70.c359df4e.js",
    "revision": "bfd5c2bbbae1ccd9c01e91b664119ac1"
  },
  {
    "url": "assets/js/71.9e962e40.js",
    "revision": "2bd81c37998e03bf8d8b38d576670481"
  },
  {
    "url": "assets/js/72.99671044.js",
    "revision": "b990623c51ef1297cb43d08c12547f9d"
  },
  {
    "url": "assets/js/73.cf40c4f9.js",
    "revision": "79378370de70696f4f3a2ae35db60e83"
  },
  {
    "url": "assets/js/74.281bca61.js",
    "revision": "318b01d7eb95f81d5c39c5ed213aa46d"
  },
  {
    "url": "assets/js/75.1df6307c.js",
    "revision": "8df90b3cf01edb3859f72a970aed6a17"
  },
  {
    "url": "assets/js/76.87c59293.js",
    "revision": "7372572a8702e59be0e3ce6e5be505c1"
  },
  {
    "url": "assets/js/77.23484f75.js",
    "revision": "0b59c7b5339fb1044a7731ef08ed511f"
  },
  {
    "url": "assets/js/78.7f6ee3e5.js",
    "revision": "73bbb0c17cbdf11bf53d45d7d7c38dd9"
  },
  {
    "url": "assets/js/79.5067b881.js",
    "revision": "3eb690a3b8198f3b2002ce89ae926943"
  },
  {
    "url": "assets/js/8.502455a4.js",
    "revision": "cb8469e7ed338f58104d85703a6e386e"
  },
  {
    "url": "assets/js/80.ea48d64e.js",
    "revision": "10d5750db70b857b0c36f6299f8ae518"
  },
  {
    "url": "assets/js/81.5555a146.js",
    "revision": "fc448380b7a1bdc6d29229bb5a7b967c"
  },
  {
    "url": "assets/js/82.6139b055.js",
    "revision": "ea095d6aeb1bd57d07c94b0cd93997ca"
  },
  {
    "url": "assets/js/83.d0df7530.js",
    "revision": "a7369b25b957a51af3899dbd81f3e210"
  },
  {
    "url": "assets/js/84.9f7fe12a.js",
    "revision": "ee46f4bade70205c22fceb71dab3bb30"
  },
  {
    "url": "assets/js/85.4620c308.js",
    "revision": "c3756a5173ccb66de2cbbec8941a8673"
  },
  {
    "url": "assets/js/86.ff355880.js",
    "revision": "653263e4666348933b9469666232b3e1"
  },
  {
    "url": "assets/js/87.69aa696e.js",
    "revision": "b75109a6b15a4abd26c33a3fd0e77fd0"
  },
  {
    "url": "assets/js/88.cf699189.js",
    "revision": "994de95f680a699de126862c1f0e0204"
  },
  {
    "url": "assets/js/89.686751a9.js",
    "revision": "e089d94d3066b89003cab7fa00507121"
  },
  {
    "url": "assets/js/9.da32c103.js",
    "revision": "d9a0d0a170200759578917f5c55b1e15"
  },
  {
    "url": "assets/js/90.e1ca375a.js",
    "revision": "2dd072f365a55175b594ad0bc26ea595"
  },
  {
    "url": "assets/js/91.decec9c9.js",
    "revision": "dcccc60dc3f39a4a5da1323be7e0c4af"
  },
  {
    "url": "assets/js/92.ccdae856.js",
    "revision": "90ba645a3a519622a006858e5c3aa84b"
  },
  {
    "url": "assets/js/93.b411f081.js",
    "revision": "bee54c0f28cc671a74b138df48c0a33d"
  },
  {
    "url": "assets/js/94.db1878ce.js",
    "revision": "ed72cbcff31bcfa6f0a72ce56f70d652"
  },
  {
    "url": "assets/js/95.31d511a7.js",
    "revision": "d667025e69fe56db6c9730b48dc0663a"
  },
  {
    "url": "assets/js/96.057e62b3.js",
    "revision": "3dbb50edd9fa74a15a4788f00e53dcb3"
  },
  {
    "url": "assets/js/97.f8beb2ea.js",
    "revision": "3f55c3c0f303d459f240b96c05933e60"
  },
  {
    "url": "assets/js/98.3917990e.js",
    "revision": "9462751ea1b0f514d6560538de6a7d55"
  },
  {
    "url": "assets/js/99.60d74d2f.js",
    "revision": "b0e9f394df4671c438808420ca5b0139"
  },
  {
    "url": "assets/js/app.3aba4ad2.js",
    "revision": "18b45ea832430a126853652570c6119a"
  },
  {
    "url": "de/api/Detect.html",
    "revision": "3bcbfbf182a26be6025cb2f3c776cea8"
  },
  {
    "url": "de/api/Guidelines.html",
    "revision": "a28421a458c0b77fcc0e6745fa400733"
  },
  {
    "url": "de/api/Ui.html",
    "revision": "ed8b78c309874d6417f107c26cd5631c"
  },
  {
    "url": "de/effects/API.html",
    "revision": "c8c2dfa9006b73ff8aa50ddc959212b0"
  },
  {
    "url": "de/effects/index.html",
    "revision": "198d634f204781ce01a55620091d1c06"
  },
  {
    "url": "de/effects/OurFirstEffect.html",
    "revision": "2f30337a792c1810f1ab7d3918bfdb92"
  },
  {
    "url": "de/index.html",
    "revision": "b9041baf1b971d0178a7ee8f7b9b8915"
  },
  {
    "url": "de/json/Authorization.html",
    "revision": "f7375492e7bb2aef3c0f18246ffc12ae"
  },
  {
    "url": "de/json/Control.html",
    "revision": "9b47bf4b32fe2a5fa178143508e375f9"
  },
  {
    "url": "de/json/index.html",
    "revision": "d87ee403b77fb0fd6d05c8905669da46"
  },
  {
    "url": "de/json/ServerInfo.html",
    "revision": "15a8a90757efef113cd3d98b197dbace"
  },
  {
    "url": "de/json/Subscribe.html",
    "revision": "650e60b7e4892e08164ccdc3f7dc7d94"
  },
  {
    "url": "de/user/advanced/Advanced.html",
    "revision": "5f7a0287799eff6354c7ee127dd43385"
  },
  {
    "url": "de/user/advanced/Support.html",
    "revision": "815c9d975dbbe6db7c2af21ab33339bd"
  },
  {
    "url": "de/user/HyperBian.html",
    "revision": "e00a2885e1b242f6fe21473138d340db"
  },
  {
    "url": "de/user/index.html",
    "revision": "ca9cff12b7734ec95fbb90e047c08c18"
  },
  {
    "url": "de/user/Installation.html",
    "revision": "8148848a30b8d356e32329f78d4d0933"
  },
  {
    "url": "de/user/Konfiguration.html",
    "revision": "48bd08ac42842f9ff741f4a2da2c3d60"
  },
  {
    "url": "de/user/leddevices/gpio/piblaster.html",
    "revision": "1358865bb14085ec4e16a9cb211f79a7"
  },
  {
    "url": "de/user/leddevices/index.html",
    "revision": "d84053a839cf8640cda8624686a70c04"
  },
  {
    "url": "de/user/leddevices/network/atmoorb.html",
    "revision": "bb939a06b0f8070bb661f08ad1994067"
  },
  {
    "url": "de/user/leddevices/network/cololight.html",
    "revision": "401097adc9ae2245fb36fe2a20e0975b"
  },
  {
    "url": "de/user/leddevices/network/fadecandy.html",
    "revision": "2a659d97e31f4f667df91a214f25a0d2"
  },
  {
    "url": "de/user/leddevices/network/nanoleaf.html",
    "revision": "3e4bd9e3389d0a184a56ffde1e2d995b"
  },
  {
    "url": "de/user/leddevices/network/philipshue.html",
    "revision": "230aba3379b705c0207263885792db37"
  },
  {
    "url": "de/user/leddevices/network/tinkerforge.html",
    "revision": "6cb84ed33b74378603621ec631b20869"
  },
  {
    "url": "de/user/leddevices/network/tpm2net.html",
    "revision": "1414347c51a78913dae3313f187d4205"
  },
  {
    "url": "de/user/leddevices/network/udpartnet.html",
    "revision": "0924f677fc8ee16ecb422a93c37eeb83"
  },
  {
    "url": "de/user/leddevices/network/udpe131.html",
    "revision": "992647f89fb281a42917d1ee4fefe1a1"
  },
  {
    "url": "de/user/leddevices/network/udph801.html",
    "revision": "a90710a2a79698f10f4534d7e5f8873d"
  },
  {
    "url": "de/user/leddevices/network/udpraw.html",
    "revision": "47ed34a55a6031b4a5c91069c75ade79"
  },
  {
    "url": "de/user/leddevices/network/wled.html",
    "revision": "975ab33a24c12699951116da6e1a73fc"
  },
  {
    "url": "de/user/leddevices/network/yeelight.html",
    "revision": "6beab62ee498e7affb1ef56355c40825"
  },
  {
    "url": "de/user/leddevices/others/debug.html",
    "revision": "be3edabad9e1cfe28dba20a5ddf62d45"
  },
  {
    "url": "de/user/leddevices/spi/apa102.html",
    "revision": "dee747efcd50e02d87ec7083a6bb886f"
  },
  {
    "url": "de/user/leddevices/spi/apa104.html",
    "revision": "82d6895f1a560877cf3c6b6a70ff1237"
  },
  {
    "url": "de/user/leddevices/spi/lpd6803.html",
    "revision": "a5ee5e70009001f5630728657c800170"
  },
  {
    "url": "de/user/leddevices/spi/lpd8806.html",
    "revision": "13ef03f973a1e4ecdfaef7b578e5bde5"
  },
  {
    "url": "de/user/leddevices/spi/p9813.html",
    "revision": "bfc7e71dcbf973b7dfb56d335083e3d6"
  },
  {
    "url": "de/user/leddevices/spi/sk6812.html",
    "revision": "de50a29ee713e83db13a2ce5049b86a9"
  },
  {
    "url": "de/user/leddevices/spi/sk6822.html",
    "revision": "9d6c464d74073dc81da32f0da5992a2e"
  },
  {
    "url": "de/user/leddevices/spi/sk9822.html",
    "revision": "9ed21dad67146285fc6b4ed12b02cfd2"
  },
  {
    "url": "de/user/leddevices/spi/ws2801.html",
    "revision": "5d869623a8b5b35860f95a6c57337e63"
  },
  {
    "url": "de/user/leddevices/spi/ws2812.html",
    "revision": "e8c7655cf4676b67eedc9492c62a92e7"
  },
  {
    "url": "de/user/leddevices/usb/adalight.html",
    "revision": "89bcbee26b56aa2a3cbd03e2ce0c90d1"
  },
  {
    "url": "de/user/leddevices/usb/atmo.html",
    "revision": "409b21425bc1ee7438e59e37e40499f1"
  },
  {
    "url": "de/user/leddevices/usb/dmx.html",
    "revision": "bd2108ab713aed1f7943a05959478c5a"
  },
  {
    "url": "de/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "100a1c68c537806246dcbf4c731b5066"
  },
  {
    "url": "de/user/leddevices/usb/karate.html",
    "revision": "3fe126510aa28aa78b8da6bf2b92bd72"
  },
  {
    "url": "de/user/leddevices/usb/lightpack.html",
    "revision": "fc931142f4e8e08ed36c56ac58f787a9"
  },
  {
    "url": "de/user/leddevices/usb/multilightpack.html",
    "revision": "fc4d431346c0f5a2274d43ed96e1198b"
  },
  {
    "url": "de/user/leddevices/usb/paintpack.html",
    "revision": "1cbe5685051ac4802b922322135f2c8f"
  },
  {
    "url": "de/user/leddevices/usb/rawhid.html",
    "revision": "09c4a9b8d85b957a3e41bb90316e63f3"
  },
  {
    "url": "de/user/leddevices/usb/sedu.html",
    "revision": "0dcfb094ebdfefed6e2e9a976bf8d78b"
  },
  {
    "url": "de/user/leddevices/usb/tpm2.html",
    "revision": "4db55da418adb4581d1d0cf4fee2fd2c"
  },
  {
    "url": "en/addons/API.html",
    "revision": "f8f9abc9a7d0f9fc26682c20aca73214"
  },
  {
    "url": "en/addons/index.html",
    "revision": "f3ba9933389215e8461505b74dc5bd47"
  },
  {
    "url": "en/addons/OurFirstAddon.html",
    "revision": "4bd66902aeceb1f34e83006fad665bc2"
  },
  {
    "url": "en/api/Detect.html",
    "revision": "7d97dbb49dd43a2bd4033f74150c3d8c"
  },
  {
    "url": "en/api/Guidelines.html",
    "revision": "2c712e938f17846a5a9551fc5db1f58b"
  },
  {
    "url": "en/api/Ui.html",
    "revision": "e5437303098895e20a3d7a87d4567fab"
  },
  {
    "url": "en/effects/API.html",
    "revision": "01b07447eb028a96aec863ec0c03342b"
  },
  {
    "url": "en/effects/index.html",
    "revision": "3ab88bf1e7942fd2e4a04051a8a72ad7"
  },
  {
    "url": "en/effects/OurFirstEffect.html",
    "revision": "6caf489dd3f396c6896526d8ae408c98"
  },
  {
    "url": "en/json/Authorization.html",
    "revision": "a5b94945f35de3be7495dc18ec2e8eae"
  },
  {
    "url": "en/json/Control.html",
    "revision": "0609e7a351558e40b43402bb83d20cb9"
  },
  {
    "url": "en/json/index.html",
    "revision": "ecd354489bd5d3af304ab2d692e55e94"
  },
  {
    "url": "en/json/ServerInfo.html",
    "revision": "3aa22031b5e298058cc3ec584d31b03d"
  },
  {
    "url": "en/json/Subscribe.html",
    "revision": "cdaec87826998faae9d35a3f4b64d6a7"
  },
  {
    "url": "en/user/advanced/Advanced.html",
    "revision": "ba56b6daed33e09cc3bd29648f0ceefb"
  },
  {
    "url": "en/user/advanced/Support.html",
    "revision": "a03649e099e6a5b98b8ef5a16591bb25"
  },
  {
    "url": "en/user/Configuration.html",
    "revision": "c60081cbd8363e8c42f5632c058d9929"
  },
  {
    "url": "en/user/HyperBian.html",
    "revision": "0598f1f43f1e4eceaac74f2f30dd918e"
  },
  {
    "url": "en/user/index.html",
    "revision": "aa51370bf8f6b4838c4025d43dfd3727"
  },
  {
    "url": "en/user/Installation.html",
    "revision": "24e0d6173ec9f5556655f0983832c59e"
  },
  {
    "url": "en/user/leddevices/gpio/piblaster.html",
    "revision": "212d3c735992a72ffa927bfababea678"
  },
  {
    "url": "en/user/leddevices/index.html",
    "revision": "3d99fb3c5fde86b78930fdb948d8c739"
  },
  {
    "url": "en/user/leddevices/network/atmoorb.html",
    "revision": "2447497bcf0610b707fc030537527aca"
  },
  {
    "url": "en/user/leddevices/network/cololight.html",
    "revision": "5c39b486e1c2c0d1392b1f4712ff8bad"
  },
  {
    "url": "en/user/leddevices/network/fadecandy.html",
    "revision": "67d8c1482bb11e38964b8a3f24c06ec4"
  },
  {
    "url": "en/user/leddevices/network/nanoleaf.html",
    "revision": "fd2b57c7e2b431676754943a7235ecb6"
  },
  {
    "url": "en/user/leddevices/network/philipshue.html",
    "revision": "8c6a4023718d4a85a5976140935deb71"
  },
  {
    "url": "en/user/leddevices/network/tinkerforge.html",
    "revision": "c6d09c06dc96227537e2722303c10f0f"
  },
  {
    "url": "en/user/leddevices/network/tpm2net.html",
    "revision": "b4aea684cd75942bcec9e35124b7420f"
  },
  {
    "url": "en/user/leddevices/network/udpartnet.html",
    "revision": "2972c181033226c83433d5597d9e4e3f"
  },
  {
    "url": "en/user/leddevices/network/udpe131.html",
    "revision": "1d32d6667533d737272fdfe961e3e9a8"
  },
  {
    "url": "en/user/leddevices/network/udph801.html",
    "revision": "6b2fc3d13edd4a328c804088782d7aa8"
  },
  {
    "url": "en/user/leddevices/network/udpraw.html",
    "revision": "939e962eb38047111c4023dffcf6d535"
  },
  {
    "url": "en/user/leddevices/network/wled.html",
    "revision": "cc048145f51dd0d8f1a50975a0ad4223"
  },
  {
    "url": "en/user/leddevices/network/yeelight.html",
    "revision": "00f111a82ae461c7316c05b5a4ae59e9"
  },
  {
    "url": "en/user/leddevices/others/debug.html",
    "revision": "c4253bfec103f88d1ef2aa8e0c74cbc2"
  },
  {
    "url": "en/user/leddevices/spi/apa102.html",
    "revision": "6e8845d3356dd054a2c7f8271722397e"
  },
  {
    "url": "en/user/leddevices/spi/apa104.html",
    "revision": "1aaa381d16859111b50b278f0986e078"
  },
  {
    "url": "en/user/leddevices/spi/lpd6803.html",
    "revision": "85b7243de0d96cad948cd9e6f9736d8f"
  },
  {
    "url": "en/user/leddevices/spi/lpd8806.html",
    "revision": "7a9bb0f41de5f48b3d92ff53874ffcfd"
  },
  {
    "url": "en/user/leddevices/spi/p9813.html",
    "revision": "1223b4840e560e67a4ea0d2a19f90ef7"
  },
  {
    "url": "en/user/leddevices/spi/sk6812.html",
    "revision": "195514f140967ff5c8474fe092ea7349"
  },
  {
    "url": "en/user/leddevices/spi/sk6822.html",
    "revision": "a39febd686e0566683070347664cb44a"
  },
  {
    "url": "en/user/leddevices/spi/sk9822.html",
    "revision": "dfe1c952316da374755f3f5d0a50c74f"
  },
  {
    "url": "en/user/leddevices/spi/ws2801.html",
    "revision": "2f5e6c10f38c0b6ea196032d024ebdfd"
  },
  {
    "url": "en/user/leddevices/spi/ws2812.html",
    "revision": "509e3def68bbe0dfd034c15294b8a249"
  },
  {
    "url": "en/user/leddevices/usb/adalight.html",
    "revision": "13061df4e892ed322bc74aa372e2a75f"
  },
  {
    "url": "en/user/leddevices/usb/atmo.html",
    "revision": "29ae0f5eb9f157b80ed46e53121cb406"
  },
  {
    "url": "en/user/leddevices/usb/dmx.html",
    "revision": "4b277bc096394a0f38ad089aab9d4acf"
  },
  {
    "url": "en/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "d16f7136f78d26d2174913bae4277a29"
  },
  {
    "url": "en/user/leddevices/usb/karate.html",
    "revision": "a5883e9091870330beb17519ccf03aa9"
  },
  {
    "url": "en/user/leddevices/usb/lightpack.html",
    "revision": "59a1889106e1f492361088f2eee275ef"
  },
  {
    "url": "en/user/leddevices/usb/multilightpack.html",
    "revision": "63cb661aea1b216abc27de22fb11d5f3"
  },
  {
    "url": "en/user/leddevices/usb/paintpack.html",
    "revision": "d377523ef45562f24ec29353c12d7883"
  },
  {
    "url": "en/user/leddevices/usb/rawhid.html",
    "revision": "41e95de2e8989b3d7211aded1b4ed03b"
  },
  {
    "url": "en/user/leddevices/usb/sedu.html",
    "revision": "256fd945ec2793c9b885f70a6d2d89d4"
  },
  {
    "url": "en/user/leddevices/usb/tpm2.html",
    "revision": "b255282acbe01e93a1a0e58f9852140c"
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
    "revision": "468c185add1eb90989e1f749009b5be5"
  },
  {
    "url": "images/de/user_config_lang.jpg",
    "revision": "e96abe0016d26e8c156969a5161b57fa"
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
    "url": "images/de/user_ledlayout3.jpg",
    "revision": "74ed7256f5679c12c068ff5135758bf0"
  },
  {
    "url": "images/en/avahi-browse.jpg",
    "revision": "17a5d14a7fdc7ac22f0d0932763b1ecc"
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
    "revision": "a7cc7eab24985ec1ff9eed4039e7d7c0"
  },
  {
    "url": "images/en/user_config_lang.jpg",
    "revision": "a2e03ebed148ab935371059e38925326"
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
    "revision": "c5f22ed1186b14a06b3aa1ce17420f86"
  },
  {
    "url": "index.html",
    "revision": "8b1e51b2e65e01b85f2091862437bd79"
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
