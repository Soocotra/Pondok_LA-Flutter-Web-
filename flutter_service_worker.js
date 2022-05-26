'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "aedb31ddcb28a697ccf6548a2be27db9",
".git/config": "70091c48b7771e47d051db8bcc973eed",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "56f486c7f679e5da4233adb44775011e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d8eead381599a1858269600cb18532b6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "81d3deec3a156817a62aa5d778facfd5",
".git/logs/refs/heads/main": "09f372cbde6e8ef83b7f8234cd8280bc",
".git/logs/refs/remotes/origin/main": "a84626ae1c70f550279d8ef95ae8c24b",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/0a/beee56f5852b5d71d8ed4c6657025108d5fd7c": "978f2e3a423821bb25d3cfaa743491ac",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/16/e04c88c3adf085b880ace9db0771d8c31b9035": "53d288ff9b1a74e5dcfa00c185e5c4ae",
".git/objects/17/8f5ba9cf3efaf30be1015079b9b37bfa5ec496": "c958d8d10702d6be6e41c27ca94ef451",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/29c036f97dfa5ee1e38bd5ef734baf504331b4": "7362f59551a27e165af32d7450468ef9",
".git/objects/27/24bbf7fb4a3c687796b24dfcbc80436cdaa4e7": "94e6ed1a0adfa02f1014a7dfb466b13e",
".git/objects/2a/3196b164ff702bc2f1c281ce0b3196b72b305a": "dcbf090977dc2bb8da33474506df6dc0",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/44/4a8e73701ed073f8ae6b7d7fc314ff6c7e583b": "91305055dedee1fe9720427f91b5e50b",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/58/43c3d0d84126a147d7e675bcf93fc5ae0a4146": "c4f82326a4fa0f1372b92734731d1b7e",
".git/objects/66/ccafc7310c766f6dfb4b3ff5eee3a23cae9487": "c6caaa43b0caaec12a29d4cedaab8696",
".git/objects/67/c9c89bb8c1f1050020de37a639ebd6f6c91651": "87fac7f6df49b0882baa38e1a1e0f595",
".git/objects/68/c904a36fc39d3c6ef06bc78a8d8585127e6a7c": "82d1a4adc1fc632e7c184a2df4562b0e",
".git/objects/73/ed8a99ece3e0ccb5d6bdb4f7bfd9234fda74a6": "163663417bc08663c1c578606ae30633",
".git/objects/75/9ce388753a436f40b75f574d1377077a7a40ec": "22405202bcf8e16da18d3b49990c9820",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/ab70e198dfef588160e107af1bf8cb2ad7d1f5": "1170449b510fe3f11582a5e88cd20953",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/1d4dc1d26f0262dd3c022ea408649fe3c40582": "bedebfdc11cdaf7dbda3135ba963f78e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/eb655a0f57186a3b866a6558d6b4dea7c4b6c8": "4264dd471c6c9476e7596d2087cb3f7d",
".git/objects/8f/9dc63071214202e7009d3e0ea4ebe1791c5988": "2f859cf4c99cf2f88167454e7e998a56",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b1/c11e972f4943d54267a128ed9d2bc062fea35f": "1628bc97a26ab2854b2a435ccbbad146",
".git/objects/b6/a8924eeb35e59b1243fbba35bc954cc02a2aeb": "676c17daea968c0021a4452f7f6d3293",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/bec0919f83650ab1736638f3ae8428d5df39f6": "ffaacc0750854b0ecf913594c17bc283",
".git/objects/c3/b67b0e395e675c0f270774b3a0ec134a072cfe": "f24a5b57a28a5857423b1784a51de0c9",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cf/79f1a97257490ccb418b7ec2b63f1ba8a4b5bf": "720450f01c77bb2db0d5667c5aedb6f1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/d7d380b6574338acfda53ad9163cbc13e1f04b": "1bf9e5e26736d8d0662597a5b3830a49",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e3/83cebf6129f485a992249a14d0b52d8b8205c5": "353bcf9ec259de020428bb205fa542c1",
".git/objects/e4/efc65ee0c5a14c311ae99ead8fa64e70a67750": "ae583e3b5b6bd14471f97de1d6e74d33",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/3c6521d40e33e2a5d5800fab6810df9a59beaa": "7537549d624699cb1d2948061b97d39b",
".git/objects/f8/77e326d5aa44032732162b1daa7132e045c9b7": "bb9c64f05e35e2e464f861519cb244e9",
".git/refs/heads/main": "31b9bfe4c9c0db9c7f40e5e11d950d8e",
".git/refs/remotes/origin/main": "31b9bfe4c9c0db9c7f40e5e11d950d8e",
"assets/AssetManifest.json": "693f717648597acb326dda563df23cb6",
"assets/assets/fonts/PlayfairDisplay-Regular.ttf": "b1fa8227521c931b34a1e7e14fe6d6ec",
"assets/assets/img/galeri_baris1_kolom1.jpg": "bf8c4af419424b2ed6d1ceda9ae0f293",
"assets/assets/img/galeri_baris1_kolom2.jpg": "2e2262cd04b1427d969bd9a6dc714ba3",
"assets/assets/img/galeri_baris2_kolom1.jpg": "8b9e98dfbb607520ce2d88199610f402",
"assets/assets/img/galeri_baris2_kolom2.jpg": "964ab689ac3fb2b0fcacdd36c577101a",
"assets/assets/img/galeri_baris3_kolom1.jpg": "9897ad20ef3258b3ffa84a5e444ef10a",
"assets/assets/img/galeri_baris4_kolom1.jpg": "29ee10599d50df0e1151010467c1cf88",
"assets/assets/img/gerbang.jpeg": "017004c845e1fad4f4d7bdd9a5ddf978",
"assets/assets/img/karaoke.jpeg": "80864be0fd521d40d50968a1a0284794",
"assets/assets/img/pool.jpeg": "368cc3f081b71eb8615a05e3c2fc6f5e",
"assets/FontManifest.json": "67d29ccd9e39f9dd48a675e5912194a7",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "bd1b293449e6a68feac1336a8d0cf34d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6dc6d2c955a3783eb6b2c04d0120c474",
"/": "6dc6d2c955a3783eb6b2c04d0120c474",
"main.dart.js": "8ebfb6b298ad14d194120c7f04a4dd74",
"manifest.json": "56c79a1d1cebc368cfb11c7dac8b6067",
"README.md": "265ad6c2a43b9ff0d5cafe35d7545331",
"version.json": "85a05d2cf13fdb83cbb0197e2b05abb4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
