parcelRequire=function(e){var r="function"==typeof parcelRequire&&parcelRequire,n="function"==typeof require&&require,i={};function u(e,u){if(e in i)return i[e];var t="function"==typeof parcelRequire&&parcelRequire;if(!u&&t)return t(e,!0);if(r)return r(e,!0);if(n&&"string"==typeof e)return n(e);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return u.register=function(e,r){i[e]=r},i=e(u),u.modules=i,u}(function (require) {function g(e,r){return void 0===r&&(r="prefetch"),(e=document.createElement("link")).relList&&e.relList.supports&&e.relList.supports(r)}function h(e,r){return new Promise(function(n,t,o){(o=document.createElement("link")).rel=r,o.href=e,o.onload=n,o.onerror=t,document.head.appendChild(o)})}function j(e){return new Promise(function(r,n,t){(t=new XMLHttpRequest).open("GET",e,t.withCredentials=!0),t.onload=function(){200===t.status?r():n()},t.send()})}function m(e){return window.fetch?fetch(e,{credentials:"include"}):j(e)}var k=g(void 0,"prefetch")?function(e){return h(e,"prefetch")}:j,p=g(void 0,"prerender")?function(e){return h(e,"prerender")}:k,q=window.requestIdleCallback||function(e){var r=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-r))}})},1)},b=new Set,d=new Set;function l(e){if(e||(e={}),window.IntersectionObserver){var r=function(e){e=e||1;var r=[],n=0;function t(){n<e&&r.length>0&&(r.shift()(),n++)}return[function(e){r.push(e)>1||t()},function(){n--,t()}]}(e.throttle||1/0),n=r[0],t=r[1],o=e.limit||1/0,$=e.origins||[location.hostname],i=e.ignores||[],a=e.delay||0,c=e.relAttr||"prefetch",u=[],f=e.timeoutFn||q,s="function"==typeof e.hrefFn&&e.hrefFn,w=new IntersectionObserver(function(r){r.forEach(function(r){if(r.isIntersecting)u.push((r=r.target).href),function(e,r){a?setTimeout(e,a):e()}(function(){-1!==u.indexOf(r.href)&&(w.unobserve(r),("prefetch"===c&&b.size<o||"prerender"===c&&d.size<o)&&n(function(){v(s?s(r):r.href,c,e.priority).then(t).catch(function(r){t(),e.onError&&e.onError(r)})}))});else{var $=u.indexOf((r=r.target).href);$>-1&&u.splice($)}})});return f(function(){(e.el||document).querySelectorAll("a").forEach(function(e){$.length&&!$.includes(e.hostname)||function e(r,n){return Array.isArray(n)?n.some(function(n){return e(r,n)}):(n.test||n).call(n,r.href,r)}(e,i)||w.observe(e)})},{timeout:e.timeout||2e3}),function(){"prefetch"===c?b.clear():"prerender"===c&&d.clear(),w.disconnect()}}}function v(e,r,n,t){if(t=navigator.connection){if(t.saveData)return Promise.reject(new Error("Cannot prefetch, Save-Data is enabled"));if(/2g/.test(t.effectiveType))return Promise.reject(new Error("Cannot prefetch, network conditions are poor"))}var o="prerender"===r?d:b,$="prerender"===r?p:k;return n&&($=m),Promise.all([].concat(e).map(function(e){if(!o.has(e))return o.add(e),$(new URL(e,location.href).toString())}))}window.addEventListener("load",function(){l({relAttr:"prerender",ignores:[function(e,r){return!r.hasAttribute("data-prerender")}]}),l({relAttr:"prefetch",ignores:[function(e,r){return r.hasAttribute("data-prerender")||r.hasAttribute("data-noprefetch")}]})});return{"fGcC":{}};});