'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "da703605e06d52307095caaa9e722d1d",
".git/config": "59b34aa3301828d083323ca3cb16ce68",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "51fe5d38308d841d5333eb10eee171d9",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "fb7113bf7b2f485db6c0440afd6b6ad6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c4e0f4339a8ffbce575fdaa648fb3b71",
".git/logs/refs/heads/master": "c4e0f4339a8ffbce575fdaa648fb3b71",
".git/logs/refs/remotes/origin/master": "11467dfe8c65968d7d6c20a743d41efb",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0f/bde152bb7e8ddec5a5a01a8d987d0b4d797db6": "c1421bdab35ee9a5903ef4cd987d6839",
".git/objects/1b/0ea9f94ead1db5d244242fa7708944945a694d": "4d2cc196bda1915879d05fc98d80f00a",
".git/objects/1c/40f7f28dda8b9bf437ed588e8a0ea03d3214ca": "8c269b968e7a73c0978699fee47356b1",
".git/objects/1d/36ae14c0c3e56ccb90b2b2740d3ee12057b8c2": "b90ad60f405fcbbb24af46f263b84dc4",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/1f/93194a775bdfd5fcca4de5007cfc170bdcefc7": "82d154beaef54bd22c8d45a3796aa1bd",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/22/48c1473bd803ebe6ac85d8a0d07aec4fd72e63": "eca8b036350fc9ab67af15a4fba6485c",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/2f/804ca3167546f337d5e8665cd5359149a531d6": "37cf727f2856691f4b78fa961232a121",
".git/objects/33/79ae9fa87e24b80c0c69fa369d277f06c9da46": "2a13b6e2c0b12d98472b615e4dcb4b86",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/38/08365585d8eeb6882d192f77fd932f8cdbc4bb": "1a1638a3d1eba21128a89c0ef2738f6a",
".git/objects/3d/d0324626bb489ef5238a2618e5421e403d11a3": "fdcbcfd2c55e640869fcc54dfcfab5c9",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/e4691524b225af3dacfdc66d0a816abb103be5": "b143cc4f189e318d3646b686da41c5d0",
".git/objects/49/163cc37e275359f91dd50857797960ccf40861": "abebcd484f83862209f60bbfb0fdc8ae",
".git/objects/49/23887fdd8f92e5f3b494867a4d4b88b634b310": "6fb0746f8546ce35b0cf78172bf30457",
".git/objects/49/53ca108758f9283afe1ee3748482021ca2ac2c": "de5b7afb2c46ecab331c4674187b9de1",
".git/objects/4a/4b3dab90472e181d98e28c693aeb6570a2c356": "6098e60e62d0b7726e13ea15654c6a1a",
".git/objects/4d/a00a39e628afb11afebee9e8b500c78308a920": "54ea7615913fd1881e2cda11416b4aef",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/cdbacb96ebfbe47002e488fc4cc84a1689470a": "288894e93b2429963915beb2b91b044c",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/6c4273573c83f3c95f35784db052071bb5da85": "48f6ad2184b9017dc186cb093493737f",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/6b/390cf12c9e68db411b4977c33d8295aa508e6d": "b3979b8fbafb64a95e64cb5326dc4351",
".git/objects/6b/b0fc71b27b05ffec1676867b42c42d288711c0": "ecf5786a813527b1c2d93a031916c2c6",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/71/b52cae579c6dc483bbe8234cec4406ddf9c8d9": "a4efe9be4a60a57fc1dfadb8149ffe1b",
".git/objects/75/3881268cb8f87fbb2edee51953349c17256c81": "34b0864f4d9e50389db8f68bdc0dc14f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/86/dabba242479543f3be155194f581ade5f08f44": "5e2f372b9ac461234bb88a0ca231fd7e",
".git/objects/87/b61691f2d9aabf7e2d1d27847d7d397537531a": "ec7397e631e3e7b71ca3958d5cc0c08c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/9c/e9be0850d811c6bcb4548053d89807942a5b8d": "95b0bdc5e71a2ee735bab1ddb5ecd9a9",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/3e97957e67270481de38774c429efcda0e408c": "f13c621bb49ab9d6a55bfcdd655aff33",
".git/objects/a4/f3dc8d1f628a7c92c02b91bf878b0e22467bb7": "762a004d735a58052ed8d848c2a84550",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/b98b3b0d996bc4613e5c1115ad2ba1ed3559e0": "c38ad94a73a251c471d532c09b241c9d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/6f494ae974195743f7337872edfa93aa89bdfa": "e791f8311da0eeab5918db3738bca326",
".git/objects/be/71bf7bdb27d2050207a205f050091574d1b278": "cf415d4e3986f9d65862011079560557",
".git/objects/c3/1041a30f5ed50024f197f2b5dafc50702d0f16": "f2e785c4b3e52964cfe255b3d699a7f4",
".git/objects/c3/2159e76bd3ac1ea78094a424a76d9a3749c6cb": "23385466aaae9560d527f81a41ecb8db",
".git/objects/c8/1606b8be976d37ff7c23177fd46c791cebabac": "e6434f21c44d8ccb4dadfa72ca45e105",
".git/objects/ca/3b990c1beba04c2798ec17fdaf2b8cd40ca52e": "92ec138b1aefa468bc8166f5b55da5a9",
".git/objects/cc/088702dbc0279ce6733d340d49be0b8c1580a1": "55f6cdd16719cbc00b9eea3c580bc085",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/bd471499e1f9add66c6f829b6b32a6e6e5ae1c": "0eec2c63ac0c7d3f7f5e4629cb33ccaa",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/034d364f6791dab6201f6cdf90119b038f2d89": "ba5bac7b3902767d5011f1c181b57ac8",
".git/objects/f2/a054c4eb9c075bd028c58ed4d4ecfbdb6903b4": "75e6098f0a2e6bac55f6fe34d776b677",
".git/objects/f3/aabc21f8d11024620bf9ccc8f143f5150c9bbe": "8c31aa85b057092397ff0adf6f44a861",
".git/objects/f8/46bb38bdf2a5a4b55108389fb039dba9ded629": "6969c1493e8384781c579e5d5c1c85c5",
".git/objects/fa/db7cf91504c08aadefb2702636b0143b0b9528": "e90c0e82bd2956e62231cc2f1cc4fb16",
".git/objects/fd/efb2768887a7e4142ff1e013ce665cdaf779c7": "c65c9248257ee04dc179c6f7a7a9e27b",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/master": "80936e679d21f5ca191b824014ee97f5",
".git/refs/remotes/origin/master": "80936e679d21f5ca191b824014ee97f5",
"assets/AssetManifest.bin": "a3e8b0ca6e9016c8272b870cc8569421",
"assets/AssetManifest.json": "145ac9cbae6e2db2000ce50ef04840db",
"assets/assets/fonts/NotoSansGeorgian-Black.ttf": "244e1081736b7db7a0b53dcf95c44a6d",
"assets/assets/fonts/NotoSansGeorgian-Bold.ttf": "368e73994f9eca893858839380e5c93b",
"assets/assets/fonts/NotoSansGeorgian-ExtraBold.ttf": "4e2fb97be51886de11e4c71286178372",
"assets/assets/fonts/NotoSansGeorgian-ExtraLight.ttf": "494d037712d8c8252be60c2564494a9a",
"assets/assets/fonts/NotoSansGeorgian-Light.ttf": "c01464401c0771aa7d76a5d7844a4abe",
"assets/assets/fonts/NotoSansGeorgian-Medium.ttf": "1c1c543e866f48d359927607ade892b7",
"assets/assets/fonts/NotoSansGeorgian-Regular.ttf": "48dc127ccfa014fdfe1a952f4e4de59c",
"assets/assets/fonts/NotoSansGeorgian-SemiBold.ttf": "8253db73a6f33368416d23a00fa52679",
"assets/assets/fonts/NotoSansGeorgian-Thin.ttf": "fb3712a80d8f4aef8872b4ea37c9bee9",
"assets/assets/images/background.jpg": "6fd3d0fc9168e92b411f629e7fee9663",
"assets/assets/images/behance-163-svgrepo-com.svg": "e5acf275a42889749e4b1548af6313b0",
"assets/assets/images/gitlab-logo-700.png": "513aa6a07eb4d714048b0b3f94ff75ec",
"assets/assets/images/gitlab-svgrepo-com.svg": "55f85cba6ef6468db316e360bd631e22",
"assets/assets/images/linkedin-161-svgrepo-com.svg": "19835fb49a24d3126ad4a459967ae8ba",
"assets/assets/images/linkedin.png": "898c0407d74c75fa110de76293d96ddd",
"assets/assets/images/profile.jpg": "9576494083ed28124b0d1b099f9fdba7",
"assets/assets/images/whatsapp-128-svgrepo-com.svg": "049ca7fa6c76ca6c55db47b2c4b3f6da",
"assets/assets/images/whatsapp.png": "19455d676899e370bd5cc0bab6b41c6f",
"assets/assets/projects/Alex_express.png": "1216bea9808241d8abdd4db4060b6133",
"assets/assets/projects/exp.png": "8ec667e137e9872de83ed6fd4fa66939",
"assets/FontManifest.json": "c1d7db161efa2b29ad201c28d6f6f1cd",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "03a15bb45d2f7601d7d787157b08244c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "db9e034fdeb68771cb51e2702cad423c",
"/": "db9e034fdeb68771cb51e2702cad423c",
"main.dart.js": "d9f79822def9f5e57546471e6d979c00",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
