"use strict";var precacheConfig=[["/index.html","174606e891fa54b6d4543fd88c02484f"],["/static/css/main.8a8fbd62.css","8160ec4b31a316c23a48bea72e4e4d72"],["/static/js/main.f1fe51e0.js","cc97398d69f48a95c8a463e7b282c9ea"],["/static/media/MuseoSans_100.f685618a.otf","f685618a57314edf0b910a2a8a572cd7"],["/static/media/MuseoSans_300.bdb59b80.otf","bdb59b808cfc4fb88f3963fa06e6c79b"],["/static/media/MuseoSans_500.62c01351.otf","62c0135163427c652ae397f327f85010"],["/static/media/MuseoSans_900.f5d070fc.otf","f5d070fca3ddc0fce188de14f62bf795"],["/static/media/background.3ae485ea.jpg","3ae485ea1fa68ee144ab9f0ae31586ec"],["/static/media/dopeworm-joined.52334554.png","52334554b43dbdeba6fc21df1fc67066"],["/static/media/gidi-bg.1e94908e.png","1e94908ec5d406ae7da98cdd31f0e5b3"],["/static/media/linda-ikeji.6e3bf632.png","6e3bf632175e29c3be746a66d696e802"],["/static/media/makorina.aa3a2ccd.png","aa3a2ccdae674c449a371189eb606093"],["/static/media/me.272786ca.jpg","272786ca425bb55e07621866a1236eb8"],["/static/media/nest-bg.50e60820.png","50e6082012ad86fc20131f557481adc2"],["/static/media/nwt-bg.5cdb0474.png","5cdb0474ce068fc1ad5cfab086b9d40c"],["/static/media/tutors-bg.9c6fa05b.png","9c6fa05b4b2240e80bf391ced5f3500a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});