!function(){"use strict";const e=1603166893165,t="cache"+e,c=["/client/client.859ac31a.js","/client/inject_styles.5607aec6.js","/client/index.467aae3e.js","/client/Button.fb6fa7ab.js","/client/lodash.5d5a6b59.js","/client/[page].f0264abd.js","/client/Account.deb8460f.js","/client/Input.3cb705ed.js","/client/account.99773faf.js","/client/logout.a0a509b5.js","/client/index.d48f2691.js","/client/password.315eafe4.js","/client/email.508c0155.js","/client/role.e4e1c192.js","/client/about.fc52ac93.js","/client/login.21c6d0b5.js","/client/index.0ec8353c.js","/client/[slug].c391481d.js"].concat(["/service-worker-index.html","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/manifest.json","/successkid.jpg","/tailwind.css"]),s=new Set(c);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(c))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const c of e)c!==t&&await caches.delete(c);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const c=new URL(t.request.url);c.protocol.startsWith("http")&&(c.hostname===self.location.hostname&&c.port!==self.location.port||(c.host===self.location.host&&s.has(c.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline"+e).then((async e=>{try{const c=await fetch(t.request);return e.put(t.request,c.clone()),c}catch(c){const s=await e.match(t.request);if(s)return s;throw c}})))))}))}();
