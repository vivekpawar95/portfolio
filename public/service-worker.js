if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let s={};const r=e=>a(e,n),o={module:{uri:n},exports:s,require:r};i[n]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(t(...e),s)))}}define(["./workbox-1bb06f5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/LICENSE.md",revision:"2f86c7d91ffde0842ed44327c687c367"},{url:"/README.md",revision:"0ba27cae09ee77cd00479c96c748709f"},{url:"/_next/static/ZV_0jGREwsfB-P6xHXnnT/_buildManifest.js",revision:"e4ba5ab806db57579665ea39bee7e1e3"},{url:"/_next/static/ZV_0jGREwsfB-P6xHXnnT/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/109.f6639656586e9068.js",revision:"f6639656586e9068"},{url:"/_next/static/chunks/193.7a8847125c8f3504.js",revision:"7a8847125c8f3504"},{url:"/_next/static/chunks/23.50cfa323274016a3.js",revision:"50cfa323274016a3"},{url:"/_next/static/chunks/295.4ea78dcd57d03f79.js",revision:"4ea78dcd57d03f79"},{url:"/_next/static/chunks/321.0b372f1d7fee7b29.js",revision:"0b372f1d7fee7b29"},{url:"/_next/static/chunks/340.2fe00e3fd5269976.js",revision:"2fe00e3fd5269976"},{url:"/_next/static/chunks/367.d9ce22ff4909b850.js",revision:"d9ce22ff4909b850"},{url:"/_next/static/chunks/379.aec749c25279c28a.js",revision:"aec749c25279c28a"},{url:"/_next/static/chunks/426.c939952333c2e044.js",revision:"c939952333c2e044"},{url:"/_next/static/chunks/455.d9fb7e40d79088dc.js",revision:"d9fb7e40d79088dc"},{url:"/_next/static/chunks/478.4df9e27434dd652c.js",revision:"4df9e27434dd652c"},{url:"/_next/static/chunks/54.ec40352a9c9d937e.js",revision:"ec40352a9c9d937e"},{url:"/_next/static/chunks/653.7211dad9cdaab36d.js",revision:"7211dad9cdaab36d"},{url:"/_next/static/chunks/66.e38be21b27d27980.js",revision:"e38be21b27d27980"},{url:"/_next/static/chunks/690.e228db5dae6d84a6.js",revision:"e228db5dae6d84a6"},{url:"/_next/static/chunks/781.d2a4c8fc3a71bcc1.js",revision:"d2a4c8fc3a71bcc1"},{url:"/_next/static/chunks/818.8266b1f8deed5e4b.js",revision:"8266b1f8deed5e4b"},{url:"/_next/static/chunks/851.9fbaece469b2184e.js",revision:"9fbaece469b2184e"},{url:"/_next/static/chunks/928.224be9c8104fa043.js",revision:"224be9c8104fa043"},{url:"/_next/static/chunks/95.03af41bfb926d88f.js",revision:"03af41bfb926d88f"},{url:"/_next/static/chunks/987.d004f3a0e63d5616.js",revision:"d004f3a0e63d5616"},{url:"/_next/static/chunks/c16184b3.c53d38dcb6743935.js",revision:"c53d38dcb6743935"},{url:"/_next/static/chunks/framework-ecc4130bc7a58a64.js",revision:"ecc4130bc7a58a64"},{url:"/_next/static/chunks/main-083270ca265b619a.js",revision:"083270ca265b619a"},{url:"/_next/static/chunks/pages/404-f13ae235acdbf6ab.js",revision:"f13ae235acdbf6ab"},{url:"/_next/static/chunks/pages/500-b3f404bd809cdc8d.js",revision:"b3f404bd809cdc8d"},{url:"/_next/static/chunks/pages/_app-60a140c5eff4c727.js",revision:"60a140c5eff4c727"},{url:"/_next/static/chunks/pages/_error-77823ddac6993d35.js",revision:"77823ddac6993d35"},{url:"/_next/static/chunks/pages/articles-1bc0524c8a7ed180.js",revision:"1bc0524c8a7ed180"},{url:"/_next/static/chunks/pages/articles/title.articles-30ccac408f2c4599.js",revision:"30ccac408f2c4599"},{url:"/_next/static/chunks/pages/docs-d445436b42b097b7.js",revision:"d445436b42b097b7"},{url:"/_next/static/chunks/pages/docs/title.docs-727c28241ae68835.js",revision:"727c28241ae68835"},{url:"/_next/static/chunks/pages/icons-643d4a577cee6d15.js",revision:"643d4a577cee6d15"},{url:"/_next/static/chunks/pages/index-f2b577b826e6df14.js",revision:"f2b577b826e6df14"},{url:"/_next/static/chunks/pages/projects-16a347609882dc8b.js",revision:"16a347609882dc8b"},{url:"/_next/static/chunks/pages/projects/title.projects-e5cf5689387c4090.js",revision:"e5cf5689387c4090"},{url:"/_next/static/chunks/pages/signin-0347bdcfde99a0d4.js",revision:"0347bdcfde99a0d4"},{url:"/_next/static/chunks/pages/signin/title.signin-1bb720975f7c9e2d.js",revision:"1bb720975f7c9e2d"},{url:"/_next/static/chunks/pages/title.404-40db0c59035e8cc1.js",revision:"40db0c59035e8cc1"},{url:"/_next/static/chunks/pages/title.500-3e5b83ecd8c7f5aa.js",revision:"3e5b83ecd8c7f5aa"},{url:"/_next/static/chunks/pages/title.index-3f75b3ee6e527973.js",revision:"3f75b3ee6e527973"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-a855b73adca2a5dd.js",revision:"a855b73adca2a5dd"},{url:"/_next/static/css/4a8988cdf3686715.css",revision:"4a8988cdf3686715"},{url:"/_next/static/css/5904b61b3dfb4a22.css",revision:"5904b61b3dfb4a22"},{url:"/_next/static/css/6cb0fa1007dbce98.css",revision:"6cb0fa1007dbce98"},{url:"/_next/static/css/767b75a71a854fdc.css",revision:"767b75a71a854fdc"},{url:"/_next/static/css/7ea173c722e54563.css",revision:"7ea173c722e54563"},{url:"/_next/static/css/8578d5a9580f17da.css",revision:"8578d5a9580f17da"},{url:"/_next/static/css/e3cfccb987724df7.css",revision:"e3cfccb987724df7"},{url:"/_next/static/media/devicon.0f1d8fef.ttf",revision:"0f1d8fef"},{url:"/_next/static/media/devicon.5abb2ba1.woff",revision:"5abb2ba1"},{url:"/_next/static/media/fira-code-cyrillic-400-normal.36d8edd9.woff",revision:"36d8edd9"},{url:"/_next/static/media/fira-code-cyrillic-400-normal.c881c663.woff2",revision:"c881c663"},{url:"/_next/static/media/fira-code-cyrillic-600-normal.45c9fe13.woff2",revision:"45c9fe13"},{url:"/_next/static/media/fira-code-cyrillic-600-normal.870e14e1.woff",revision:"870e14e1"},{url:"/_next/static/media/fira-code-cyrillic-ext-400-normal.c2183700.woff",revision:"c2183700"},{url:"/_next/static/media/fira-code-cyrillic-ext-400-normal.e5a8ef2a.woff2",revision:"e5a8ef2a"},{url:"/_next/static/media/fira-code-cyrillic-ext-600-normal.1a97ce01.woff2",revision:"1a97ce01"},{url:"/_next/static/media/fira-code-cyrillic-ext-600-normal.e2757607.woff",revision:"e2757607"},{url:"/_next/static/media/fira-code-greek-400-normal.4f6a87a1.woff2",revision:"4f6a87a1"},{url:"/_next/static/media/fira-code-greek-400-normal.8b459d24.woff",revision:"8b459d24"},{url:"/_next/static/media/fira-code-greek-600-normal.0879a252.woff2",revision:"0879a252"},{url:"/_next/static/media/fira-code-greek-600-normal.5485349a.woff",revision:"5485349a"},{url:"/_next/static/media/fira-code-greek-ext-400-normal.2aa615ac.woff",revision:"2aa615ac"},{url:"/_next/static/media/fira-code-greek-ext-400-normal.8e5150da.woff2",revision:"8e5150da"},{url:"/_next/static/media/fira-code-greek-ext-600-normal.946360ec.woff2",revision:"946360ec"},{url:"/_next/static/media/fira-code-greek-ext-600-normal.ef22da54.woff",revision:"ef22da54"},{url:"/_next/static/media/fira-code-latin-400-normal.8110c638.woff2",revision:"8110c638"},{url:"/_next/static/media/fira-code-latin-400-normal.abe1cdfb.woff",revision:"abe1cdfb"},{url:"/_next/static/media/fira-code-latin-600-normal.79f162a8.woff2",revision:"79f162a8"},{url:"/_next/static/media/fira-code-latin-600-normal.e21d9605.woff",revision:"e21d9605"},{url:"/_next/static/media/fira-code-latin-ext-400-normal.7aa022bb.woff2",revision:"7aa022bb"},{url:"/_next/static/media/fira-code-latin-ext-400-normal.8965b2d2.woff",revision:"8965b2d2"},{url:"/_next/static/media/fira-code-latin-ext-600-normal.1f3547ce.woff2",revision:"1f3547ce"},{url:"/_next/static/media/fira-code-latin-ext-600-normal.27cc0001.woff",revision:"27cc0001"},{url:"/_next/static/media/inter-cyrillic-400-normal.5156ecf9.woff2",revision:"5156ecf9"},{url:"/_next/static/media/inter-cyrillic-400-normal.a1abbbeb.woff",revision:"a1abbbeb"},{url:"/_next/static/media/inter-cyrillic-700-normal.1f104cec.woff",revision:"1f104cec"},{url:"/_next/static/media/inter-cyrillic-700-normal.f005fff5.woff2",revision:"f005fff5"},{url:"/_next/static/media/inter-cyrillic-800-normal.2ab892f6.woff",revision:"2ab892f6"},{url:"/_next/static/media/inter-cyrillic-800-normal.e12b115f.woff2",revision:"e12b115f"},{url:"/_next/static/media/inter-cyrillic-ext-400-normal.4879ddc8.woff2",revision:"4879ddc8"},{url:"/_next/static/media/inter-cyrillic-ext-400-normal.a4fe2f88.woff",revision:"a4fe2f88"},{url:"/_next/static/media/inter-cyrillic-ext-700-normal.925ff1c6.woff2",revision:"925ff1c6"},{url:"/_next/static/media/inter-cyrillic-ext-700-normal.e3c37258.woff",revision:"e3c37258"},{url:"/_next/static/media/inter-cyrillic-ext-800-normal.635988ed.woff",revision:"635988ed"},{url:"/_next/static/media/inter-cyrillic-ext-800-normal.c396a18b.woff2",revision:"c396a18b"},{url:"/_next/static/media/inter-greek-400-normal.0c589a4f.woff2",revision:"0c589a4f"},{url:"/_next/static/media/inter-greek-400-normal.fe3df9bb.woff",revision:"fe3df9bb"},{url:"/_next/static/media/inter-greek-700-normal.7135e036.woff",revision:"7135e036"},{url:"/_next/static/media/inter-greek-700-normal.eb758e2b.woff2",revision:"eb758e2b"},{url:"/_next/static/media/inter-greek-800-normal.3ae4b10a.woff",revision:"3ae4b10a"},{url:"/_next/static/media/inter-greek-800-normal.aa3c4563.woff2",revision:"aa3c4563"},{url:"/_next/static/media/inter-greek-ext-400-normal.8225c735.woff2",revision:"8225c735"},{url:"/_next/static/media/inter-greek-ext-400-normal.e1f02a99.woff",revision:"e1f02a99"},{url:"/_next/static/media/inter-greek-ext-700-normal.28c94827.woff",revision:"28c94827"},{url:"/_next/static/media/inter-greek-ext-700-normal.5d97dee4.woff2",revision:"5d97dee4"},{url:"/_next/static/media/inter-greek-ext-800-normal.aaf8c68e.woff",revision:"aaf8c68e"},{url:"/_next/static/media/inter-greek-ext-800-normal.c1dbd103.woff2",revision:"c1dbd103"},{url:"/_next/static/media/inter-latin-400-normal.779487c6.woff",revision:"779487c6"},{url:"/_next/static/media/inter-latin-400-normal.ac374088.woff2",revision:"ac374088"},{url:"/_next/static/media/inter-latin-700-normal.cc2a1044.woff",revision:"cc2a1044"},{url:"/_next/static/media/inter-latin-700-normal.eb892c4c.woff2",revision:"eb892c4c"},{url:"/_next/static/media/inter-latin-800-normal.7da978cc.woff",revision:"7da978cc"},{url:"/_next/static/media/inter-latin-800-normal.f15de3ac.woff2",revision:"f15de3ac"},{url:"/_next/static/media/inter-latin-ext-400-normal.0cc0c669.woff2",revision:"0cc0c669"},{url:"/_next/static/media/inter-latin-ext-400-normal.c500b98e.woff",revision:"c500b98e"},{url:"/_next/static/media/inter-latin-ext-700-normal.bc11109e.woff",revision:"bc11109e"},{url:"/_next/static/media/inter-latin-ext-700-normal.d446f0d4.woff2",revision:"d446f0d4"},{url:"/_next/static/media/inter-latin-ext-800-normal.04eca372.woff2",revision:"04eca372"},{url:"/_next/static/media/inter-latin-ext-800-normal.2dc591bf.woff",revision:"2dc591bf"},{url:"/_next/static/media/inter-vietnamese-400-normal.51fad319.woff2",revision:"51fad319"},{url:"/_next/static/media/inter-vietnamese-400-normal.feb85dd6.woff",revision:"feb85dd6"},{url:"/_next/static/media/inter-vietnamese-700-normal.73666dc9.woff",revision:"73666dc9"},{url:"/_next/static/media/inter-vietnamese-700-normal.9ead7545.woff2",revision:"9ead7545"},{url:"/_next/static/media/inter-vietnamese-800-normal.850d1593.woff",revision:"850d1593"},{url:"/_next/static/media/inter-vietnamese-800-normal.e9acfdc6.woff2",revision:"e9acfdc6"},{url:"/favicon/browserconfig.xml",revision:"dfc9f2d6e601de313c8c0e67308d42d4"},{url:"/favicon/favicon-dark.ico",revision:"03b74dcf9474f60133a98263ae3e72bc"},{url:"/favicon/favicon-light.ico",revision:"3e198315b10a8e17f585ccca8126fd2a"},{url:"/favicon/safari-pinned-tab.svg",revision:"378a916e4ac7925c7f20e231b3162392"},{url:"/favicon/vivek-website-logo.svg",revision:"d51da0edfc4faa778f692e4617339c70"},{url:"/img/dataism-24-black.svg",revision:"3e43f89f61ac977a22e4b529aa9ff534"},{url:"/img/dataism-24.svg",revision:"cf22b8801a9289aeb3b4ecbcabb063f5"},{url:"/img/github_icon.png",revision:"ec3a60c8c6539a07eb70b52f6737ea6e"},{url:"/img/google_icon.png",revision:"4100c1990034b377da8f7e7ce946bc11"},{url:"/img/jobs.png",revision:"784a706919b46d338d528f7644b5934d"},{url:"/img/msc-mock_stack/01.png",revision:"91f94189221b74eef746a3c61b9c1e99"},{url:"/img/msc-mock_stack/02.png",revision:"b1b23b3dcd698d5ce5e30a05c33b0e0f"},{url:"/img/msc-mock_stack/03.png",revision:"6923775c2d308d9edd5c610250840591"},{url:"/img/noimageavailable.jpg",revision:"0eecdd9b234ec23a9557de074c622979"},{url:"/img/portfolio-mock_single-raw.png",revision:"0bb7a9a15ba35ed91c9658679b077511"},{url:"/img/portfolio-mock_single.png",revision:"4befdc816b008066758e5756557eb71a"},{url:"/img/profile-pic.jpeg",revision:"4eb21c1f8dae630fbc5eaee956c64854"},{url:"/img/profile-pic.jpg",revision:"c9468c423599025847d751bbdf89e287"},{url:"/img/user.jpg",revision:"9f6de95c7c2717a54608b98ac3b6dc58"},{url:"/img/user2.jpg",revision:"802f160a48ef08e445ed5527df4eba5a"},{url:"/lottie/boysearching.json",revision:"84ae6ede1ca72c8f7faef58a99cb5544"},{url:"/lottie/codingdev.json",revision:"ec4ddf9d89c827d54302fb68765b4cd6"},{url:"/lottie/constuction.json",revision:"dc97ef2653e2f53a89be90095f8c079b"},{url:"/lottie/ghost.json",revision:"7ff73ac129bcad6974681cdf20740f63"},{url:"/lottie/github.json",revision:"24dec41d23206e051d06df24466854ea"},{url:"/lottie/laptop.json",revision:"a78d3c24364a1710a9bfc954dc0b4aed"},{url:"/lottie/loadcode.json",revision:"e1f6af84158aec91b5d3721b1fd246f1"},{url:"/lottie/looking.json",revision:"365936cd93bf3525b57b4c90e3259476"},{url:"/lottie/serverboot.json",revision:"c9f67668d3137f02708cc4af41e71bab"},{url:"/lottie/ufo.json",revision:"eb08f3cb74bc32a2d01bf7f51e0fbc12"},{url:"/manifest.json",revision:"cf544eda9a7cdae219b1b13719a96ba6"},{url:"/robots.txt",revision:"9858b241b16e28a9e0774257124c48e1"},{url:"/sitemap-0.xml",revision:"b065f4ede00b0813e9fa48eb6aa7a09a"},{url:"/sitemap.xml",revision:"5ad502241dfb4148a98bfa76d61b0811"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:a,state:c})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
