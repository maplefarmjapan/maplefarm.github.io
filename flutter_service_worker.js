'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "1159530a18481420d15f4a8ca657b488",
"index.html": "a2c8956b2234296370b25c4548b03309",
"/": "a2c8956b2234296370b25c4548b03309",
"main.dart.js": "b646203e4c1ce59ced2775e97c2b0af3",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "15f73b7e8a8209c2206210b3ac8dea1b",
"assets/images/c987c1a2-3a0c-4579-9779-10bca99b73cd.jpeg": "6269ef259e09a9583ff39140be91da39",
"assets/images/fd2f87ba-d790-4bdc-a419-ecbdc0b834e1.jpeg": "6f873a804bfc787c87d7bf7e6bec8ac9",
"assets/images/f6dd4f93-653c-44e5-babb-069daba5338e.jpg": "17f76db263f6f18ef8bc4f5dbad0a894",
"assets/images/f4c4b599-b5d0-45b8-8b64-a22decaceb63.jpg": "9fee0d9aa4ed292bc4f9b70dc5debf41",
"assets/images/e9c96d29-1c45-42b0-88df-579d4e42ed2e.webp": "b010162569f46e66017801675675f567",
"assets/images/c711eebc-da5d-4fe9-b4c9-f99f4089b6e3.webp": "03707edb4eb4192e835a130507244a6c",
"assets/images/5ffc134c-9331-4f56-bed3-ec2d2fa0b947.jpg": "0f85fd0be3524c67d4881abf89a52351",
"assets/images/bd2147c5-e080-4937-ab7e-bd0f4c8a9285.jpeg": "78c45073f79a1911a4aac5c108d0ba3b",
"assets/images/f11e08a0-e399-4910-9e33-f83c94175817.jpg": "6e9c129cc7b3117223c0fbead66b6309",
"assets/images/fe112dfc-7cf6-476f-b81a-2c6f9d828187.jpg": "815094fdc03c118757b23bcfdcfbae2b",
"assets/images/4de9cee8-c40b-4a5f-9d46-b37577e35123.jpg": "9db84a34c9903bee9b0b7925c4d9e19c",
"assets/images/20fbb077-b9b0-4c43-8669-3e2304e9ed74.webp": "118bafa6303f18b9e5938e701ee71657",
"assets/images/615ffaae-4423-44c5-84ab-84cd3ce304be.webp": "fde99476cd0e1086d0fcd42e6d21ebac",
"assets/images/0d8f78a8-cfb9-44a5-bf8a-d4be209156c4.jpg": "07ffeb3357075c19fc65600a7371baeb",
"assets/images/f0ea948a-9a9f-4ded-9319-9eb9cc57ec5d.webp": "8288ab3ef8d6f53db3fd2b5d3aa9ff20",
"assets/images/14460dcf-2c80-4a32-8422-6c39a00dfc01.webp": "fdb743524fd260ceeaea496891349b6a",
"assets/images/c5354c26-cd2d-4771-addf-e08492888c8d.jpeg": "d222b3ff1b4616c941ddd215d9badce6",
"assets/images/c1019eaa-b6eb-4940-9695-8d6005469621.jpg": "9251ebcaad8eb79f36709157805085ff",
"assets/images/33e051d0-bcf4-4ef4-90cf-2963c644c224.jpeg": "05d7536001208e93f89ed73288ba2c83",
"assets/images/96e4f073-cd33-4fce-9cc1-18acdecd1740.webp": "f0a3b5dc1e3e8a5ffd3c064d355d7825",
"assets/images/21f3671f-8664-4c16-beb9-c5d83b5ae309.jpeg": "7798af56e17e248e0bfb9e25a1321b67",
"assets/images/3eb5af66-1dc5-409a-ac07-70f8b0301078.jpeg": "6091fea0d462cfa4be676ee0a476ffce",
"assets/images/7d8c1d88-62b5-4d74-98eb-0487236a57b6.webp": "7a44d159253cf0798030c817e61c89e5",
"assets/images/c9b002ae-98d1-4aa5-b9ac-eaaace8c02a7.jpg": "7ce0411b9d61dec7bf6f45408ca2c9f5",
"assets/images/1121fd36-e3f8-49f0-997f-03619150fe52.jpg": "b48bb41e87e0243a9248309d45b51b9f",
"assets/images/646d122a-8fdc-413b-afa0-bb702a0347b1.jpg": "438b9606470790f249fbc7f052ce855c",
"assets/images/f12b06f2-e5a6-4c3d-8d16-c0b6cfd404cc.jpeg": "ca4329df6cc9222bb74e4ef2f95ea641",
"assets/images/ee45c22c-80f2-4803-bb48-6a02777a6050.jpg": "5926d350d90c9d168620a57809aa937c",
"assets/images/b180c8e1-19c0-48bc-8d56-871d592ce120.jpeg": "0f18a02e5ed47dfc22d1512e4a9b58fc",
"assets/images/187c229d-316d-4975-b55c-37172aa86e1a.jpeg": "309fc3b3bf31f36a43e80bb622a879a4",
"assets/images/91b6b434-865f-48da-9474-96569ccd2ecf.jpg": "57f721937a327cbdc913a94658bd0079",
"assets/images/d61a257b-d4d1-45e2-a6dd-2f24ac743b6b.webp": "b2629beecfeb43e1576110c25c270c94",
"assets/images/b8e5ae87-951f-46d5-9988-f5181e23fd42.jpeg": "7057792ca3565d60242d5303ebb64a84",
"assets/images/b1877c84-9eec-4ce4-a148-40db87e6e752.jpeg": "445e17d4198fb88e45298130a389f42d",
"assets/images/b8bb0358-6ada-44a5-bfe7-39fb176b0b6b.jpg": "400d312b2061880ee652e856b65d2292",
"assets/images/507f4067-1178-4637-b063-1c62677c48f3.jpeg": "27fc74458887c38b3f849ef6e06453e5",
"assets/images/c4b1984c-a288-478a-89bd-3a7c54054c78.jpg": "c6fa338600a40e281d756877bb5e5545",
"assets/images/5b96decf-7311-4375-97dc-8110cdf0d31f.webp": "f0ebc47597e07a1aa8e8398e9b68f73b",
"assets/images/8138667d-d01a-408e-8e51-bdcde503b582.jpg": "69665d36db64d56382520aeece56af8e",
"assets/images/3857d43f-206c-484c-8628-7c6b8f38e13d.webp": "5e731291e8bd019192fcc528e3778549",
"assets/images/cb80f5f5-1e13-4c38-9e13-44abc265056a.jpeg": "ec7554ee67d95b38535a49f6748416bd",
"assets/images/d52dec9c-f4f9-4572-b46e-c6baeda528ca.jpg": "17936502ac5dff339c61008ab32380d6",
"assets/images/d926f5e7-a1f6-4010-a82f-5ea8ecdbbf8f.jpeg": "ea8f52d4585287d789e0246e57b5e05b",
"assets/images/11dfea35-b25a-43e3-86ce-37048820c2b5.jpg": "a45408e9bd28192c3020999180489fab",
"assets/images/f5cffdce-f655-4048-9a44-252d77c3e6e3.jpg": "69c0f0f7481ed747cf94e71cd9ebbf75",
"assets/images/a78c4f38-b42b-4d74-8f37-8a452f743e61.webp": "387dd980eb06b1543a0529101aaf547c",
"assets/images/b5c00fd8-ca19-4bc5-8874-6be4d2b6f1cd.jpg": "bc981ebc98227575ac4ec759a11fdec7",
"assets/images/b230acf1-713e-4540-a1fc-7ef71a479f94.jpg": "c86c9fb3954ddb31b80632f2796eb547",
"assets/images/6c004ffa-2f09-4bf1-8213-f7f8efc175b7.jpg": "c9e99f288af8da01be1360e23ff513b7",
"assets/images/aef1b532-6473-4529-ac1d-d300e5ade52a.jpeg": "279ebd4dd30431ecc4bb2c348bfc4b85",
"assets/images/b8c78521-38cb-4737-86c7-9418a09e8872.webp": "57a1363dab05a74972fc9854be875eba",
"assets/images/3c05ec73-6f4c-49b2-a901-dd90ce9ce786.jpg": "3794cf710c9be5d9763a59f334b4daf2",
"assets/AssetManifest.json": "a36c486ae79cd8bd8c609f4dd00263c7",
"assets/NOTICES": "2456628373c07f96f25e07d5634a75d9",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/shaders/ink_sparkle.frag": "43a74f8c6a60608e02c90400b5219a91",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
