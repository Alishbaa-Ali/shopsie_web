'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b0bdef299918078321d6fd9dc5ea5b64",
"assets/AssetManifest.json": "e1c5d40d52d1fa0ca693c8bcf76eb2ce",
"assets/assets/fonts/Agbalumo.ttf": "27cd170665cbb75101c35073b6e642ca",
"assets/assets/fonts/DancingScript.ttf": "d58bb592345e95e81157b07c2db7bc00",
"assets/assets/fonts/DMSans.ttf": "a40265e20189d6b500bcebf33efe110b",
"assets/assets/fonts/GlassAntiqua.ttf": "77637724d6e3e1bbfa7053cdeb8179fc",
"assets/assets/fonts/Kanit.ttf": "ba95370355da928d1c09da6a0a49a1d6",
"assets/assets/fonts/Pacifico.ttf": "85bb2d0ec4a0da159de42e89089ccc0b",
"assets/assets/fonts/PlayFair.ttf": "9262890da570b6e8d1741d0e88138b9c",
"assets/assets/fonts/PTSans.ttf": "5b127e9e1cedad57860a5bb8b2cc9d61",
"assets/assets/images/1.jpeg": "a2d743cdf1c8d483b0b29dbd662c98bc",
"assets/assets/images/15.jpeg": "fb8fb293cd13c73caf49931c45f5fde4",
"assets/assets/images/16.jpeg": "dc7f4c28590d852f24036090113357e1",
"assets/assets/images/17.jpeg": "e28019072d438481ee9c2a90c8b38938",
"assets/assets/images/18.jpeg": "50e3200276bf01b9754b97f4e0d6d209",
"assets/assets/images/19.jpeg": "aa3f507c8a73f613f416597e8e9a99b9",
"assets/assets/images/2.jpeg": "4f07226060e3676bc750156934c631ab",
"assets/assets/images/20.jpeg": "8e746cae8a04ccd7696bd1e9eecf4a5d",
"assets/assets/images/21.jpeg": "589412501269751589485391f6eb4d8f",
"assets/assets/images/22.jpeg": "4c203eaf582edb774bbe7558d0b3a542",
"assets/assets/images/23.jpeg": "0e72ca8994f2feccbe021d2f9b98f7c5",
"assets/assets/images/3.jpeg": "64ee09912c1244646184d22f496e4dc7",
"assets/assets/images/4.jpeg": "fceca56b8b06e9c5e79b672ade916b3e",
"assets/assets/images/5.jpeg": "e425332c59ecb4b345cff47b9cb4d4bb",
"assets/assets/images/6.jpeg": "1800cec3ad3b303053385a7bcfad358d",
"assets/assets/images/7.jpeg": "acb53d65900ca1ae041cb2f2ed3cb0c4",
"assets/assets/images/8.jpeg": "48ed0ad2c691386cf9b6a980bc7e7091",
"assets/assets/images/Accessories%2520(1).jpeg": "65526d20b19837fc54abf4b30325230f",
"assets/assets/images/Accessories%2520(2).jpeg": "f94b6a56915504ed24bf2cbf94535af0",
"assets/assets/images/Accessories%2520(3).jpeg": "301d092994e4b2c9af575b3f2a485d93",
"assets/assets/images/Accessories%2520(4).jpeg": "a0cf5d171ee9ffb00ba4ba4377653830",
"assets/assets/images/Accessories%2520(5).jpeg": "bffab669017f239ded1cbeb47cd528c0",
"assets/assets/images/Accessories%2520(6).jpeg": "3a49e119d363fb2c380ddb3d40457a50",
"assets/assets/images/Bottoms%2520(1).jpeg": "9f71ba3e9bfe0f5700fa18f8b346bc79",
"assets/assets/images/Bottoms%2520(2).jpeg": "238460c88f4b38e2ad72d868a9ece793",
"assets/assets/images/Bottoms%2520(3).jpeg": "c2b0b51fb3d5b0672b74f748434fdebb",
"assets/assets/images/Bottoms%2520(4).jpeg": "991ba5736462010d0c9f0074866ba172",
"assets/assets/images/Bottoms%2520(5).jpeg": "973eae40497752ace6c5aa1207932f55",
"assets/assets/images/Bottoms%2520(6).jpeg": "26c484fd6d26a8a09271c4421224735b",
"assets/assets/images/bottoms.png": "8a58f886ab12a0c1b3e48c1d34684430",
"assets/assets/images/brands.png": "b6decb1b836a0227ca772040a1d04b0d",
"assets/assets/images/dress.png": "0b48abad2d940c3fa6d9ed0d1132f439",
"assets/assets/images/facebook.png": "c514091ebce6ddcc5c629eac2de760f4",
"assets/assets/images/google.png": "876611ac2782c3006740745b8c305005",
"assets/assets/images/Heels%2520(1).jpeg": "bb7a52c4c098b6c39bb50769811c0b1e",
"assets/assets/images/Heels%2520(2).jpeg": "123cef0ee8c70a60f4432b150bd37eb2",
"assets/assets/images/Heels%2520(3).jpeg": "5b68e2da9ccc4298cae660c819aa1e86",
"assets/assets/images/Heels%2520(4).jpeg": "43b50aec7552738bbc6efa5e48c054c9",
"assets/assets/images/Heels%2520(5).jpeg": "8e3c55d19ec07d26aedeff65eb1dd8ac",
"assets/assets/images/heels.png": "72e13d7a30eb5ae2e3b528930d533828",
"assets/assets/images/profile.jpeg": "52b67d78509ff20a611eeb86e2f282a7",
"assets/assets/images/shirt.png": "a8ce11fda89fa9fc7ed32cf65f48b22c",
"assets/assets/images/Shirts%2520(1).jpeg": "ab18383664e4144b162d6a5d1d7aa024",
"assets/assets/images/Shirts%2520(2).jpeg": "2d1847e5c0537c5e87928da6e0c1fd39",
"assets/assets/images/Shirts%2520(3).jpeg": "5a305c8959eb5cff28c8f4c986bcddf0",
"assets/assets/images/Shirts%2520(4).jpeg": "02c2d973d7ba5ad37655ef8b23ca1942",
"assets/assets/images/Shirts%2520(5).jpeg": "1c0373e1e56d80ffb978e4ffbdaadad0",
"assets/assets/images/Shirts%2520(6).jpeg": "a30766f538ebecafdfde8efd0f367892",
"assets/assets/images/watch.png": "72a8542512468c0a73582050e5c3ded3",
"assets/FontManifest.json": "e20b42fbcbc43063b7e80941ed3eca03",
"assets/fonts/MaterialIcons-Regular.otf": "466f6d1e1327331429554ab6f0b1ef11",
"assets/NOTICES": "dc54efecfaef8b079e042dd439f8c2ef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f8a74f28edbeb90b2264de7dc18f6eb8",
"/": "f8a74f28edbeb90b2264de7dc18f6eb8",
"main.dart.js": "6d88d16406169c3d7afb3d8901cf5f47",
"manifest.json": "b75bb1c61dec45000379ade6ea5bcb5c",
"version.json": "b08830a808a4212bc2be3ab520eb3874"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
