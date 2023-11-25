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
    "revision": "b2065d9d24f67a9ae7990674ab11fcc8"
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
    "url": "assets/js/1.fa9079a8.js",
    "revision": "8adaddb981f84907ba7cae9e31fa59a0"
  },
  {
    "url": "assets/js/100.d8993c85.js",
    "revision": "85b8d9b7c612d79cf1b501a5b0b88675"
  },
  {
    "url": "assets/js/101.0477a630.js",
    "revision": "68bbc20a828146d88feefd54255c50cb"
  },
  {
    "url": "assets/js/102.531e2760.js",
    "revision": "02a17c3180113300f5ea19c6fe456670"
  },
  {
    "url": "assets/js/103.22628983.js",
    "revision": "6025440f25bad28a58d7b278eb050826"
  },
  {
    "url": "assets/js/104.eaba3516.js",
    "revision": "b5d0807be79b40698e5236108588746a"
  },
  {
    "url": "assets/js/105.5e503717.js",
    "revision": "e05eff2d3a1388f34c73c85354133515"
  },
  {
    "url": "assets/js/106.664b35aa.js",
    "revision": "46df59a4c1b10177425434be65c30227"
  },
  {
    "url": "assets/js/107.fef5268a.js",
    "revision": "49e63c769496474fab37ea80c9b5e620"
  },
  {
    "url": "assets/js/108.f6c103c7.js",
    "revision": "b2b9ff9e91bb3df10d60f9b100ec4659"
  },
  {
    "url": "assets/js/109.c7412b44.js",
    "revision": "0dc0458d3b6d50f1e8ce15a0cde22e67"
  },
  {
    "url": "assets/js/11.90c25509.js",
    "revision": "cea704f93886bf5b9f1bb83ce9be92fc"
  },
  {
    "url": "assets/js/110.73f285c3.js",
    "revision": "5fe77c72d1058621e5bf8c794db324af"
  },
  {
    "url": "assets/js/111.861388f3.js",
    "revision": "059617ecddbef799c2b49c43ea585116"
  },
  {
    "url": "assets/js/112.32e56e1b.js",
    "revision": "a660f8ace37c5a535cf94b990994297c"
  },
  {
    "url": "assets/js/113.93a83603.js",
    "revision": "2703d210d1383978c53b2ae72c1824c2"
  },
  {
    "url": "assets/js/114.e465e64c.js",
    "revision": "b395fe58021906e234ddf4abdf4b17a1"
  },
  {
    "url": "assets/js/115.2480dd50.js",
    "revision": "2be5700090dd6ae7e64b689ec06d64b5"
  },
  {
    "url": "assets/js/116.d611bd40.js",
    "revision": "ea921dce28f2377cf01fddb8fcc96331"
  },
  {
    "url": "assets/js/117.a528cd3f.js",
    "revision": "9b014b2bdc6a99ec5719d55960e1eaa3"
  },
  {
    "url": "assets/js/118.12a74c8b.js",
    "revision": "b7fe77d166c0725d27bda5ea257d8220"
  },
  {
    "url": "assets/js/119.faaa6336.js",
    "revision": "2b761cddb3cf14c1b2fe5b7ff441eb93"
  },
  {
    "url": "assets/js/12.a1977597.js",
    "revision": "78ea8fea2bec953b25f7fbe76667473f"
  },
  {
    "url": "assets/js/120.499cacf4.js",
    "revision": "007904fe59f2666636d3f1efe1fe8b4d"
  },
  {
    "url": "assets/js/121.f119d917.js",
    "revision": "5f8039bf959dd050514bd1a54f639072"
  },
  {
    "url": "assets/js/122.95941e18.js",
    "revision": "bdba0417f44e7156a23383a2ef91de4e"
  },
  {
    "url": "assets/js/123.cec04655.js",
    "revision": "3f43c5b4a727d7f80c522a7bd33a3637"
  },
  {
    "url": "assets/js/124.dc501f77.js",
    "revision": "1338f0d0cb1e0b6afb213c7dd29a65e8"
  },
  {
    "url": "assets/js/125.558a7a59.js",
    "revision": "ff70dd68099f2ecfc222d1210ef3c824"
  },
  {
    "url": "assets/js/126.3c959c2c.js",
    "revision": "0ea48a91668c2232baab705ee0f419fc"
  },
  {
    "url": "assets/js/127.38be77bd.js",
    "revision": "084812f4973aa65fe11d76ded409bf05"
  },
  {
    "url": "assets/js/128.0f2bb9d3.js",
    "revision": "aeebe7daf4ad7b4045f35aba797d1d18"
  },
  {
    "url": "assets/js/129.644edb2d.js",
    "revision": "3c546b3cd48a399e4947072c881d87b2"
  },
  {
    "url": "assets/js/13.96c43c95.js",
    "revision": "7983f447f886c23405cbf4a43e52ed41"
  },
  {
    "url": "assets/js/130.dfbbf6ac.js",
    "revision": "6ee8b5154141a52b16aa00b5bf51050f"
  },
  {
    "url": "assets/js/131.b8910f04.js",
    "revision": "de7bf6bb8b3cc8a633b62c2865b629d0"
  },
  {
    "url": "assets/js/132.21743126.js",
    "revision": "a4aadbb7d5257e1550e2fafe8de0cbf8"
  },
  {
    "url": "assets/js/133.724b98af.js",
    "revision": "32b143ddd29b8590a89ca2e6fbfdd336"
  },
  {
    "url": "assets/js/134.9ef0b17b.js",
    "revision": "5e568d7190219cd983a1a042113fea45"
  },
  {
    "url": "assets/js/135.057b1c45.js",
    "revision": "98f5920b71014aef3bf214dfc5c0dd9c"
  },
  {
    "url": "assets/js/136.5098c2f1.js",
    "revision": "e6f133738f2283f63052b024309a62ed"
  },
  {
    "url": "assets/js/137.d0e51897.js",
    "revision": "7b26c84f4ed051645cd2f46661936607"
  },
  {
    "url": "assets/js/138.8074d205.js",
    "revision": "b1feece61af954d9e6e81fac51a76961"
  },
  {
    "url": "assets/js/139.6055b517.js",
    "revision": "b56ddfab76b4311ace025759bf505ebf"
  },
  {
    "url": "assets/js/14.8598a265.js",
    "revision": "e80d0d3abef4e2192e0b448042c7a6b8"
  },
  {
    "url": "assets/js/140.e121669d.js",
    "revision": "24f0097094f3f91109a2c9f6b7a88ecf"
  },
  {
    "url": "assets/js/141.fe9581e1.js",
    "revision": "be45c13b29666235502183ba9f602488"
  },
  {
    "url": "assets/js/142.ed6f5f0c.js",
    "revision": "d04f21b88472e774cc3e094f3ff3c106"
  },
  {
    "url": "assets/js/143.ca6df839.js",
    "revision": "a1eceeeb23fd7094040e5a5f22ed296d"
  },
  {
    "url": "assets/js/144.7599212f.js",
    "revision": "2d576ac14a3740af9a72749a7c78c5a6"
  },
  {
    "url": "assets/js/145.162f3ea3.js",
    "revision": "dce400792260ff8ffdc5984023939067"
  },
  {
    "url": "assets/js/146.bf97fe43.js",
    "revision": "e9bd7abde9787367604b50b17fb9dcec"
  },
  {
    "url": "assets/js/147.ec43a175.js",
    "revision": "bdda07a84c7bccf339eadf2f20ac9bc6"
  },
  {
    "url": "assets/js/15.45748da4.js",
    "revision": "f6829b6fd58d4b6b4581f13a08057c15"
  },
  {
    "url": "assets/js/16.d689d1cb.js",
    "revision": "4e86f262e5fc39ded341cc2cb0378a88"
  },
  {
    "url": "assets/js/17.1585a892.js",
    "revision": "64dfde339d397b30ff80d8dfa66d65d8"
  },
  {
    "url": "assets/js/18.1b7d39e8.js",
    "revision": "df5e1375744bca02742f8415b8b71adf"
  },
  {
    "url": "assets/js/19.5e582e22.js",
    "revision": "8b7dd96433627c339d96b70e2cd43cb3"
  },
  {
    "url": "assets/js/2.8409073c.js",
    "revision": "02b302a91a1d3aa289616fc5235ccf1a"
  },
  {
    "url": "assets/js/20.8788c91c.js",
    "revision": "6cff35e907109f3521737af4c94431bb"
  },
  {
    "url": "assets/js/21.34c2a8af.js",
    "revision": "f31a14e0ad3d1b889ed29bb4b4c634b5"
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
    "url": "assets/js/28.602c2299.js",
    "revision": "95187dc12011fe2f103671a02d868b05"
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
    "url": "assets/js/31.4957c686.js",
    "revision": "ccc36f74415f88805edd33aa08d16b47"
  },
  {
    "url": "assets/js/32.a52bb94d.js",
    "revision": "9d91d6f8483a543c91dd6fd4c1c49eee"
  },
  {
    "url": "assets/js/33.5c5b45dc.js",
    "revision": "7e0e80816dd524cf1168c160ca0eee00"
  },
  {
    "url": "assets/js/34.c3381bbf.js",
    "revision": "1037914e415d905c2f62e3ddc1b78812"
  },
  {
    "url": "assets/js/35.c43a4cf4.js",
    "revision": "e93f3bf29a30e25374396d6929916c38"
  },
  {
    "url": "assets/js/36.53a553c6.js",
    "revision": "1a3d4c451794b16f5623c9d3d35e29a3"
  },
  {
    "url": "assets/js/37.411390b6.js",
    "revision": "97d2321ae6d7fbd8a1ebe71985dcfa78"
  },
  {
    "url": "assets/js/38.7287fbc6.js",
    "revision": "a126189eb421cbc42ba880affcbd29fd"
  },
  {
    "url": "assets/js/39.4f663b93.js",
    "revision": "e1261ed93fc92de3ba179b77ee217fec"
  },
  {
    "url": "assets/js/4.0892267b.js",
    "revision": "63d69ef3205ae4b9a56a5298d97c85d4"
  },
  {
    "url": "assets/js/40.6130ef93.js",
    "revision": "e21163c75711965ad01aaab3024576dd"
  },
  {
    "url": "assets/js/41.8a798639.js",
    "revision": "5867de2da2a2bf9cfdbb7b3aaf1e5128"
  },
  {
    "url": "assets/js/42.54b64194.js",
    "revision": "a0bf13acceeb1aabf71d18d458a01f03"
  },
  {
    "url": "assets/js/43.5bbeae75.js",
    "revision": "0bb2d0a7e1f21a76abbffcb0fbdf13fa"
  },
  {
    "url": "assets/js/44.3657e0f0.js",
    "revision": "0df1bd9f295559d16b152a899bb443ef"
  },
  {
    "url": "assets/js/45.9d591a9d.js",
    "revision": "3e3a9e1d30dd08c95b4d9aaa965a6f41"
  },
  {
    "url": "assets/js/46.a5089001.js",
    "revision": "1e8a4361fa5af9f46ed3fa9cea6d7555"
  },
  {
    "url": "assets/js/47.f15e549b.js",
    "revision": "ff38771b99089f926f3211fcc3f08cad"
  },
  {
    "url": "assets/js/48.b926c920.js",
    "revision": "eb9d120f18c524f7a8ecbc9c46684c82"
  },
  {
    "url": "assets/js/49.67e7fb71.js",
    "revision": "a47c86ceb0977ca46657fe477612232b"
  },
  {
    "url": "assets/js/5.15da87b6.js",
    "revision": "5a70f64b1be40d698b75b73c322455f8"
  },
  {
    "url": "assets/js/50.23aebe8f.js",
    "revision": "3efab6a47dddb7994cfa571b8db9b33b"
  },
  {
    "url": "assets/js/51.47263347.js",
    "revision": "736d04353ac9df0a2da9229ace088d8a"
  },
  {
    "url": "assets/js/52.87bcf4d2.js",
    "revision": "294003a395ff57f54df95fa746a46c7d"
  },
  {
    "url": "assets/js/53.58d58032.js",
    "revision": "9b439bbb051fb9abc1069f2d6fe1362d"
  },
  {
    "url": "assets/js/54.bbd8b488.js",
    "revision": "49634f70fc79d740846a02859bd8e00e"
  },
  {
    "url": "assets/js/55.cffc546e.js",
    "revision": "3eb7975a521a62386081a256bcbb0f98"
  },
  {
    "url": "assets/js/56.40dc9c59.js",
    "revision": "12642fa52832438f2631b621d1f8dcce"
  },
  {
    "url": "assets/js/57.4202d7a9.js",
    "revision": "467ffd30d56542bab158c2e867779589"
  },
  {
    "url": "assets/js/58.71ae5d77.js",
    "revision": "44f1fc5237011c9a4c2bd51b4d72139c"
  },
  {
    "url": "assets/js/59.453ea88f.js",
    "revision": "70278d0d58e9ebec1de18c6346faa75c"
  },
  {
    "url": "assets/js/6.f1fe53c9.js",
    "revision": "7ac5f95d9ae03e6169216c178496ab92"
  },
  {
    "url": "assets/js/60.3dfb5a31.js",
    "revision": "e00f9f1556e2fdc64d918215deb5b43e"
  },
  {
    "url": "assets/js/61.78610fce.js",
    "revision": "183274c3e67b9024066ee86552d79ee4"
  },
  {
    "url": "assets/js/62.290278a6.js",
    "revision": "597a948e2d1e019c20484414289a8c6c"
  },
  {
    "url": "assets/js/63.fd462922.js",
    "revision": "b63f4211b0f4ce008169b27250a75c43"
  },
  {
    "url": "assets/js/64.a92dd8f2.js",
    "revision": "8d1a9be1112adbaf246f04624e7cb34b"
  },
  {
    "url": "assets/js/65.4b2b853a.js",
    "revision": "814cc61e0a33879299048ae74977862d"
  },
  {
    "url": "assets/js/66.ce208e0f.js",
    "revision": "0fa8bcd63388ec38b4511cb21a88f41c"
  },
  {
    "url": "assets/js/67.5ec9fae3.js",
    "revision": "262ebf57ec9b242d8a0e0c018cd6badc"
  },
  {
    "url": "assets/js/68.94c6d92b.js",
    "revision": "43fb38402ffda4ac06320f26205f47c8"
  },
  {
    "url": "assets/js/69.6ff43b79.js",
    "revision": "2acb2562684291b95344fbd4060daca4"
  },
  {
    "url": "assets/js/7.561e4e5b.js",
    "revision": "ae0cc3284283658bcf538f97fe923664"
  },
  {
    "url": "assets/js/70.5839f8e3.js",
    "revision": "c25f7b6739ef950929ca4fc86f96beab"
  },
  {
    "url": "assets/js/71.e2197679.js",
    "revision": "afc96f7bd2d79b8cafc0ab6c316b01b9"
  },
  {
    "url": "assets/js/72.d47c5b60.js",
    "revision": "d4c7972cb03f26b16e074c0345e19448"
  },
  {
    "url": "assets/js/73.afbf8e82.js",
    "revision": "ac01d9929fe765f4f3efba818b8e4745"
  },
  {
    "url": "assets/js/74.dbd0995c.js",
    "revision": "c0863d9769f014a874a4ad2711fdb959"
  },
  {
    "url": "assets/js/75.75f7e72b.js",
    "revision": "50998964a4a4c103d40734b63531831e"
  },
  {
    "url": "assets/js/76.db9dd105.js",
    "revision": "97eed3a9f1735ee4aa1ce41f05c97d78"
  },
  {
    "url": "assets/js/77.8a7b9e15.js",
    "revision": "f497a8730a215853d40ecbf493930808"
  },
  {
    "url": "assets/js/78.aba1a528.js",
    "revision": "420d70e5eb1943294398420aa3bcb7f0"
  },
  {
    "url": "assets/js/79.1af4b7cd.js",
    "revision": "cd2df621b872b3d40471e3560d19d00f"
  },
  {
    "url": "assets/js/8.c5bd91eb.js",
    "revision": "fdd7fb1776ff7617a01b08b024a1878f"
  },
  {
    "url": "assets/js/80.ccd7c990.js",
    "revision": "f6a4aa69d4bc1512d201ee015ecf394e"
  },
  {
    "url": "assets/js/81.f85a0341.js",
    "revision": "0ffd856f03fdd9647fb4ab9ceea572b4"
  },
  {
    "url": "assets/js/82.2b7d39cd.js",
    "revision": "736f3c613c435d153a02c308e5c1d538"
  },
  {
    "url": "assets/js/83.ab189789.js",
    "revision": "af7e4868a886423bfe2fc16cdb9a7529"
  },
  {
    "url": "assets/js/84.c37b65d7.js",
    "revision": "5f7540a3a987cf4e69a9b85d9f2d1a4e"
  },
  {
    "url": "assets/js/85.103377fc.js",
    "revision": "a48d582616c2326bb0fbccb8a6daa7bd"
  },
  {
    "url": "assets/js/86.c92e3a23.js",
    "revision": "1de6d0a46620d439dafc1cd6ff631753"
  },
  {
    "url": "assets/js/87.9a2f94d6.js",
    "revision": "9cc984011d093f2afb6e741760a9a5af"
  },
  {
    "url": "assets/js/88.d98cb509.js",
    "revision": "80ae8d7a7065e9431d6a180d10627a3a"
  },
  {
    "url": "assets/js/89.f3ec3592.js",
    "revision": "2ca63db7e40489a221062fbd6c6cdd3f"
  },
  {
    "url": "assets/js/90.45e3376f.js",
    "revision": "baff42985040c5210d38db779cc63941"
  },
  {
    "url": "assets/js/91.a833bff8.js",
    "revision": "fe5e088e0c1679abc4406f5397c02f5c"
  },
  {
    "url": "assets/js/92.3f4cbac7.js",
    "revision": "3cda01bc2c64087dfa8bba3c3bc2f669"
  },
  {
    "url": "assets/js/93.3ec5ed0f.js",
    "revision": "0d2e82778c7283950c229657e3357bf5"
  },
  {
    "url": "assets/js/94.1e15c3b2.js",
    "revision": "a281814262b0296c058089d25da809db"
  },
  {
    "url": "assets/js/95.03f8f036.js",
    "revision": "5d903a00fd10f5ea30ada4635e0fa3cc"
  },
  {
    "url": "assets/js/96.6b547598.js",
    "revision": "1e7d144237500c6dc65ef57257ef3b26"
  },
  {
    "url": "assets/js/97.c9db7e24.js",
    "revision": "fd34b73df8e04ec9a6d23030df763742"
  },
  {
    "url": "assets/js/98.a977cfea.js",
    "revision": "5e996e8147ab79d9578bd26b99bbf2fb"
  },
  {
    "url": "assets/js/99.7a369825.js",
    "revision": "661a2a24cbc2ce24d552f0fca950bde5"
  },
  {
    "url": "assets/js/app.015d5648.js",
    "revision": "1447ef6469b48b8887f3ec7a225bf811"
  },
  {
    "url": "assets/js/vendors~docsearch.d4d0a48a.js",
    "revision": "4cc0bd32b1bb6eaa9c9f3420bd6aba55"
  },
  {
    "url": "de/api/Detect.html",
    "revision": "dcdba18170e6b16b1ad00b7ae102d070"
  },
  {
    "url": "de/api/Guidelines.html",
    "revision": "c2284ab494c14617a492700dc892cfea"
  },
  {
    "url": "de/api/Ui.html",
    "revision": "ce5a4c36deb0a3fcf32c87b18ced4583"
  },
  {
    "url": "de/effects/API.html",
    "revision": "ada7534c5ccce585dd507206d2c77f57"
  },
  {
    "url": "de/effects/index.html",
    "revision": "868d8994a3db79f639887aeb5aa0e69a"
  },
  {
    "url": "de/effects/OurFirstEffect.html",
    "revision": "66173da77c778fc3d3b52602a51f8fb4"
  },
  {
    "url": "de/index.html",
    "revision": "6d07ea300f03a4da808f2ac8d3b9368b"
  },
  {
    "url": "de/json/Authorization.html",
    "revision": "ebed689c101c84f824d8fc2a6e086239"
  },
  {
    "url": "de/json/Control.html",
    "revision": "c9823d95c8208bd2cd5cf6e12ecb8994"
  },
  {
    "url": "de/json/index.html",
    "revision": "726c746da31a893c31ebe03e4bd0edc5"
  },
  {
    "url": "de/json/ServerInfo.html",
    "revision": "763591aa04626a6544195acd68a59e4e"
  },
  {
    "url": "de/json/Subscribe.html",
    "revision": "211439a7731f82ecfae64e8f61db28bb"
  },
  {
    "url": "de/user/advanced/Advanced.html",
    "revision": "2dba6ab834fd7579e1e3575f3c2d4e5e"
  },
  {
    "url": "de/user/advanced/Support.html",
    "revision": "97424de39dcee5447f18191916c10ca7"
  },
  {
    "url": "de/user/HyperBian.html",
    "revision": "5f311fe0ccd105331124fe8ed53372b5"
  },
  {
    "url": "de/user/index.html",
    "revision": "ca69dc25bf62e3b70f2b9eaeea933786"
  },
  {
    "url": "de/user/Installation.html",
    "revision": "15c91c576033bd2894eb3300877f095c"
  },
  {
    "url": "de/user/Konfiguration.html",
    "revision": "fb7f601949a9506680d0531948c74088"
  },
  {
    "url": "de/user/leddevices/index.html",
    "revision": "0e1ab3eb1d3a3be3f389de0efc128f3e"
  },
  {
    "url": "de/user/leddevices/network/atmoorb.html",
    "revision": "8808c9f383e07c5e0ac1ac2a8983744d"
  },
  {
    "url": "de/user/leddevices/network/cololight.html",
    "revision": "da6445e9dca65d77a63c5eb38b6d47cb"
  },
  {
    "url": "de/user/leddevices/network/fadecandy.html",
    "revision": "48058c624c107e411b8652fdf241d981"
  },
  {
    "url": "de/user/leddevices/network/nanoleaf.html",
    "revision": "86e7f4ea658bc6b6a3e6763f8aa1e4df"
  },
  {
    "url": "de/user/leddevices/network/philipshue.html",
    "revision": "f598a2fc11b70064aba099d61ff52147"
  },
  {
    "url": "de/user/leddevices/network/tinkerforge.html",
    "revision": "dcd2fe0d7f26c76a31c5bf23e11c29c9"
  },
  {
    "url": "de/user/leddevices/network/tpm2net.html",
    "revision": "aa3886c5549230bacdeeeb11c29df017"
  },
  {
    "url": "de/user/leddevices/network/udpartnet.html",
    "revision": "cad92dac5bad3bdc187c281534262d4a"
  },
  {
    "url": "de/user/leddevices/network/udpddp.html",
    "revision": "77adeace0d149a10184aea19921b008e"
  },
  {
    "url": "de/user/leddevices/network/udpe131.html",
    "revision": "9f4155e592313d4f940c0b1bde0b5548"
  },
  {
    "url": "de/user/leddevices/network/udph801.html",
    "revision": "f4e61c759901e88935b3f5a82b25d7e7"
  },
  {
    "url": "de/user/leddevices/network/udpraw.html",
    "revision": "afa87e8541c679bfc9d02076200e01cd"
  },
  {
    "url": "de/user/leddevices/network/wled.html",
    "revision": "1ead51fcb70ba8c5a0e35a2963e644d0"
  },
  {
    "url": "de/user/leddevices/network/yeelight.html",
    "revision": "43bcac19913c4662c3fb08129561fea0"
  },
  {
    "url": "de/user/leddevices/others/debug.html",
    "revision": "6d7004bc92986e6195f7a5c89ef6dde9"
  },
  {
    "url": "de/user/leddevices/spi_pwm/apa102.html",
    "revision": "ce4707f87b591d8cb72bf64d3c4cd3b0"
  },
  {
    "url": "de/user/leddevices/spi_pwm/apa104.html",
    "revision": "59e035b884da6b388581dd9241c344a4"
  },
  {
    "url": "de/user/leddevices/spi_pwm/lpd6803.html",
    "revision": "565a40ca3a5001684915f8938ef852af"
  },
  {
    "url": "de/user/leddevices/spi_pwm/lpd8806.html",
    "revision": "a411c562c1a2a9da168f9265709e2708"
  },
  {
    "url": "de/user/leddevices/spi_pwm/p9813.html",
    "revision": "20fcc9b82fc3327d0ac980db1d35bddb"
  },
  {
    "url": "de/user/leddevices/spi_pwm/piblaster.html",
    "revision": "a1bb9ae154e66b87f06b5c9d1f93288e"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk6812.html",
    "revision": "81cd298ab8ea17cbea9435577c6c0c33"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk6822.html",
    "revision": "c7f8f08d11fbf2e8f2768500c1e38a50"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk9822.html",
    "revision": "16b85cbdb0e79b90e823762f3508daac"
  },
  {
    "url": "de/user/leddevices/spi_pwm/ws2801.html",
    "revision": "373ded95848f404b9554d059742f169a"
  },
  {
    "url": "de/user/leddevices/spi_pwm/ws2812.html",
    "revision": "f5e4e2dfe8f28567c440139d271be4a0"
  },
  {
    "url": "de/user/leddevices/usb/adalight.html",
    "revision": "bc7cd6c99e3af580370600ab01318767"
  },
  {
    "url": "de/user/leddevices/usb/atmo.html",
    "revision": "ef64206044c6078744ff7bc551ced5c7"
  },
  {
    "url": "de/user/leddevices/usb/dmx.html",
    "revision": "ecdbd1011054a5a6eb27ab340947d787"
  },
  {
    "url": "de/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "66aee55ea2916cc19262b66536acd98d"
  },
  {
    "url": "de/user/leddevices/usb/karate.html",
    "revision": "6ce82f93b95c7e8302373c6b262db798"
  },
  {
    "url": "de/user/leddevices/usb/lightpack.html",
    "revision": "a3c0d771b66eecfed65dc1315e2d99b0"
  },
  {
    "url": "de/user/leddevices/usb/multilightpack.html",
    "revision": "50325f1efde93387a17896862d89972a"
  },
  {
    "url": "de/user/leddevices/usb/paintpack.html",
    "revision": "60e697d7221e2f6949670779bfa2c7cc"
  },
  {
    "url": "de/user/leddevices/usb/rawhid.html",
    "revision": "2652dd2508f1bf6bfeac3b9e917016e2"
  },
  {
    "url": "de/user/leddevices/usb/sedu.html",
    "revision": "7bb7c1772069e281fd6182332d7a4b88"
  },
  {
    "url": "de/user/leddevices/usb/tpm2.html",
    "revision": "4d6bb8842aeb8cb9e461de1c9ad648c8"
  },
  {
    "url": "en/addons/API.html",
    "revision": "de16d0d184a3c50bc04ac2e96cd56919"
  },
  {
    "url": "en/addons/index.html",
    "revision": "11e7364546a8a8b173a0a7ee7f870734"
  },
  {
    "url": "en/addons/OurFirstAddon.html",
    "revision": "5f2875f4e81fde916663b04d2492cdeb"
  },
  {
    "url": "en/api/Detect.html",
    "revision": "bd4b95208bebc86165ec28aa025c0876"
  },
  {
    "url": "en/api/Guidelines.html",
    "revision": "ac56ce22c24459196f30a21e1ebab3de"
  },
  {
    "url": "en/api/Ui.html",
    "revision": "192bb9816601c9b7e6f061a4519a542e"
  },
  {
    "url": "en/effects/API.html",
    "revision": "9537790f00297f5c9e89777577a7a2c4"
  },
  {
    "url": "en/effects/index.html",
    "revision": "1e4625b08146be6736f823c34e1091c9"
  },
  {
    "url": "en/effects/OurFirstEffect.html",
    "revision": "3721750619b0bf76b94c10e8b2187274"
  },
  {
    "url": "en/json/Authorization.html",
    "revision": "673ca24ca074cc8112c1d015cecb031d"
  },
  {
    "url": "en/json/Control.html",
    "revision": "8dbc03209ca613c0c4b0b00c94d9d1ce"
  },
  {
    "url": "en/json/index.html",
    "revision": "c69067f02d7f153a680adf2e09fd7e4e"
  },
  {
    "url": "en/json/ServerInfo.html",
    "revision": "57391f132d9c24e749476fef6c0c0dde"
  },
  {
    "url": "en/json/Subscribe.html",
    "revision": "5ec1f02e109749ddcacce88a189a9d14"
  },
  {
    "url": "en/user/advanced/Advanced.html",
    "revision": "b3ff2623ac7e633acdcc9f2690af6ddd"
  },
  {
    "url": "en/user/advanced/Support.html",
    "revision": "92e51a4ee8b5004ee8655e649c140061"
  },
  {
    "url": "en/user/Configuration.html",
    "revision": "c80fd2f9a84273b2bf1bc5341ed5ce43"
  },
  {
    "url": "en/user/HyperBian.html",
    "revision": "c6fa322ad4db3dada2cf5abe39b2c719"
  },
  {
    "url": "en/user/index.html",
    "revision": "d179b0424b51adab4e87b92f8fa98700"
  },
  {
    "url": "en/user/Installation.html",
    "revision": "5f52243cf8d9fc987c7922bedd57fbdc"
  },
  {
    "url": "en/user/leddevices/index.html",
    "revision": "7521155be310c190f88cd2415a895de5"
  },
  {
    "url": "en/user/leddevices/network/atmoorb.html",
    "revision": "ec4c129cabdb0031cdceec9befd83469"
  },
  {
    "url": "en/user/leddevices/network/cololight.html",
    "revision": "1c043d15129c3e6a078e0afd2a80bd2b"
  },
  {
    "url": "en/user/leddevices/network/fadecandy.html",
    "revision": "910ef41261359f1b4d143f3b0a3ce672"
  },
  {
    "url": "en/user/leddevices/network/nanoleaf.html",
    "revision": "2b3badb2a90f0d27afa50137ca4a54d5"
  },
  {
    "url": "en/user/leddevices/network/philipshue.html",
    "revision": "1fe2721514c974564bdcca6b0c06ee02"
  },
  {
    "url": "en/user/leddevices/network/razer.html",
    "revision": "6058c0db75c43b05f4f1fc1bae532e7c"
  },
  {
    "url": "en/user/leddevices/network/tinkerforge.html",
    "revision": "816a2e4b0b2a59dbd1f0d6031be2ca57"
  },
  {
    "url": "en/user/leddevices/network/tpm2net.html",
    "revision": "2a8b67e07d81c8b150125b3e4796026a"
  },
  {
    "url": "en/user/leddevices/network/udpartnet.html",
    "revision": "c61d0bd99859247e19f8b1bef6988c10"
  },
  {
    "url": "en/user/leddevices/network/udpddp.html",
    "revision": "0f2f4148db223bd61dc890648af69ef1"
  },
  {
    "url": "en/user/leddevices/network/udpe131.html",
    "revision": "a5b476d1c04709c9468478e2525ec7f3"
  },
  {
    "url": "en/user/leddevices/network/udph801.html",
    "revision": "032a56f2116bcc14a40755bbf7d79344"
  },
  {
    "url": "en/user/leddevices/network/udpraw.html",
    "revision": "996ccd86e778cac32aa8c4a61a72a2d2"
  },
  {
    "url": "en/user/leddevices/network/wled.html",
    "revision": "9a742892147e052ee44625289bc58dbc"
  },
  {
    "url": "en/user/leddevices/network/yeelight.html",
    "revision": "336cff7ce628c661d4788a013e42f21d"
  },
  {
    "url": "en/user/leddevices/others/debug.html",
    "revision": "4ce7e2f0375edf20b889c0abf4b2ae8f"
  },
  {
    "url": "en/user/leddevices/spi_pwm/apa102.html",
    "revision": "538902c8d6963ac21c1b75d35f9c667a"
  },
  {
    "url": "en/user/leddevices/spi_pwm/apa104.html",
    "revision": "27530e7326af511d6b228a07ce314da0"
  },
  {
    "url": "en/user/leddevices/spi_pwm/lpd6803.html",
    "revision": "32770f5a185c4a806e06b8ba1d52d222"
  },
  {
    "url": "en/user/leddevices/spi_pwm/lpd8806.html",
    "revision": "a68b4949cd506721c0e5ca397db2945f"
  },
  {
    "url": "en/user/leddevices/spi_pwm/p9813.html",
    "revision": "ebec7473425bd8070220a400a6f01d62"
  },
  {
    "url": "en/user/leddevices/spi_pwm/piblaster.html",
    "revision": "9c230484100bed2fc41ba95067144917"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk6812.html",
    "revision": "5b7706ced35ec52155b7ae6b9310fff1"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk6822.html",
    "revision": "6d23d4463dcefecea65e611133a10b46"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk9822.html",
    "revision": "b498287fd43dcb96d65cb2b27b586876"
  },
  {
    "url": "en/user/leddevices/spi_pwm/ws2801.html",
    "revision": "e318e378a4c5d869694abe6665f87e87"
  },
  {
    "url": "en/user/leddevices/spi_pwm/ws2812.html",
    "revision": "8d0c7ab8b49c791706076e79edeede57"
  },
  {
    "url": "en/user/leddevices/usb/adalight.html",
    "revision": "bfbc5a9a726ee6b2ca92181f51000d97"
  },
  {
    "url": "en/user/leddevices/usb/atmo.html",
    "revision": "51c69ff6f14dc34e8d5746220115a36b"
  },
  {
    "url": "en/user/leddevices/usb/dmx.html",
    "revision": "73d841b0d075eb37de0f452c3ef85f04"
  },
  {
    "url": "en/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "7d425a459669b2bf4a507b0574c2addf"
  },
  {
    "url": "en/user/leddevices/usb/karate.html",
    "revision": "e61529a301487f01db68df288d20cf2c"
  },
  {
    "url": "en/user/leddevices/usb/lightpack.html",
    "revision": "5c2fc450d9766529d456c1fe197b468c"
  },
  {
    "url": "en/user/leddevices/usb/multilightpack.html",
    "revision": "fb0b5b29a7022a54e82aef442e437d60"
  },
  {
    "url": "en/user/leddevices/usb/paintpack.html",
    "revision": "c3ff16f3fbe558f56631e3d5e804408e"
  },
  {
    "url": "en/user/leddevices/usb/rawhid.html",
    "revision": "7999371f9be12838366ba0dcad27642a"
  },
  {
    "url": "en/user/leddevices/usb/sedu.html",
    "revision": "33e15706149801e345ab435de30cb62b"
  },
  {
    "url": "en/user/leddevices/usb/tpm2.html",
    "revision": "3f82aae7bc697cef3f805731101a502a"
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
    "revision": "033a1eff30e5858afef9138a2e1ae132"
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
    "revision": "bf3c9d053cc73ced25d09920e3ad1f1b"
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
    "revision": "32e04b8348431aa2c828ed15886980f1"
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
