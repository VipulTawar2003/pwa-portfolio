if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,a)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const n=e=>i(e,t),o={module:{uri:t},exports:c,require:n};s[t]=Promise.all(r.map((e=>o[e]||n(e)))).then((e=>(a(...e),c)))}}define(["./workbox-b3f8ee23"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/images/camera 1.png",revision:"d5c0d5d9f605f375ab2e0bf5e1847a57"},{url:"assets/images/camera reset.png",revision:"08dfa2949a5d03e447b75c71107f0193"},{url:"assets/images/camera2.png",revision:"df1c5886cee82b89351341f217d033b0"},{url:"assets/images/me.jpg",revision:"8c6dd41a99485b79d756c730aab83801"},{url:"assets/js/app.js",revision:"7c192cd42a2026dd7e89caba8a57eb39"},{url:"assets/js/constant.js",revision:"9f3acf99d00c4007cafc3b574919905b"},{url:"index.html",revision:"a598c86a2bc23299cfb3058154aea824"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
