!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n=window.webpackJsonp;window.webpackJsonp=function(t,r,i){for(var a,s,u=0,c=[];u<t.length;u++)s=t[u],o[s]&&c.push(o[s][0]),o[s]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);for(n&&n(t,r,i);c.length;)c.shift()()};var r={},o={1:0};t.e=function(e){function n(){s.onerror=s.onload=null,clearTimeout(u);var t=o[e];0!==t&&(t&&t[1](new Error("Loading chunk "+e+" failed.")),o[e]=void 0)}var r=o[e];if(0===r)return new Promise(function(e){e()});if(r)return r[2];var i=new Promise(function(t,n){r=o[e]=[t,n]});r[2]=i;var a=document.getElementsByTagName("head")[0],s=document.createElement("script");s.type="text/javascript",s.charset="utf-8",s.async=!0,s.timeout=12e4,t.nc&&s.setAttribute("nonce",t.nc),s.src=t.p+""+({}[e]||e)+"."+{0:"ed1aec54956e3836da88"}[e]+".js";var u=setTimeout(n,12e4);return s.onerror=s.onload=n,a.appendChild(s),i},t.m=e,t.c=r,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t.oe=function(e){throw console.error(e),e},t(t.s=10)}([function(e,t,n){n.p=window.__assets},,,,function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},,,,,,function(e,t,n){n(0),e.exports=n(11)},function(e,t,n){n(12),n(13),n(14),n(15),n(17)},function(e,t){},function(e,t){},function(e,t,n){!function(e){var t=e.querySelectorAll("[data-docsearch]");if(t.length){var r=0;n.e(0).then(function(){n(22);var e=n(23);Array.prototype.forEach.call(t,function(t){var n=t.getAttribute("id");n||(n="docsearch-"+r++,t.setAttribute("id",n)),e({apiKey:"4c440463ddff54a35b4d7dc24afb010b",indexName:"reactphp",inputSelector:"#"+n,debug:"true"===t.getAttribute("data-docsearch-debug"),algoliaOptions:{hitsPerPage:5}})})}.bind(null,n)).catch(n.oe)}}(document)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(16);n.n(r)},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(18),o=n(19);n.n(o);Object(r.a)({namespace:"version-selector-toggle"})},function(e,t,n){"use strict";function r(e,t,n){var r=void 0;try{r=new CustomEvent(t,{detail:n,bubbles:!0,cancelable:!0})}catch(e){r=a.createEvent("CustomEvent"),r.initCustomEvent(t,!0,!0,n)}e.dispatchEvent(r)}function o(){function e(e,n,o){u('[aria-controls="'+n+'"]').forEach(function(e){return e.setAttribute("aria-expanded","true")}),o.classList.add(f+"--ready"),o.setAttribute("aria-hidden","false"),o.setAttribute("tabindex","-1"),o.focus(),o.scrollTop=0;var i=l[n]={control:e,target:o,keyup:function(e){27===e.keyCode&&t(n)},activate:function(){d=n},deactivate:function(){d=null},evtOptions:{passive:!0}};a.addEventListener("keyup",i.keyup,i.evtOptions),o.addEventListener("mouseenter",i.activate,i.evtOptions),o.addEventListener("mouseleave",i.deactivate,i.evtOptions),o.addEventListener("touchstart",i.activate,i.evtOptions),o.addEventListener("touchend",i.deactivate,i.evtOptions),r(o,f+":open",{control:e})}function t(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!e||!l[e])return!1;var n=l[e],o=n.control,i=n.target,s=n.keyup,c=n.activate,p=n.deactivate,v=n.evtOptions;delete l[e],i.removeEventListener("mouseenter",c,v),i.removeEventListener("mouseleave",p,v),i.removeEventListener("touchstart",c,v),i.removeEventListener("touchend",p,v),a.removeEventListener("keyup",s,v),d===e&&(d=null),i.setAttribute("aria-hidden","true"),i.removeAttribute("tabindex"),i.blur(),u('[aria-controls="'+e+'"]').forEach(function(e){return e.setAttribute("aria-expanded","false")}),t&&o.focus(),r(i,f+":close",{control:o})}function n(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];for(var r in l)r!==e&&t(r,n)}var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!("addEventListener"in i&&"querySelector"in a&&s.classList))return{destroy:function(){}};var c=o||{},f=c.namespace||"toggle",l={},d=void 0,p="data-"+f,v=function(r){for(var o=r.target;!o.hasAttribute(p)&&o.parentElement&&o!==a.body;)o=o.parentElement;if(!o.hasAttribute(p))return void(d||n());var i=o.getAttribute("aria-controls");if(i){var s=a.getElementById(i);s&&(r.preventDefault(),"false"===s.getAttribute("aria-hidden")?t(i):(c.allowMultiple||n(i,!1),e(o,i,s)))}else for(;o;){if(!1!==t(o.getAttribute("id"))){r.preventDefault();break}o=o.parentElement}};a.addEventListener("click",v);var h=function(){!d&&c.closeOnScroll&&n()};return i.addEventListener("scroll",h),{destroy:function(){a.removeEventListener("click",v),i.removeEventListener("scroll",h),n()}}}t.a=o;var i="undefined"!=typeof window?window:this,a=i.document,s=a.documentElement,u=function(e){return[].slice.call(a.querySelectorAll(e))}},function(e,t){},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=v[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(f(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(f(r.parts[i],t));v[r.id]={id:r.id,refs:1,parts:a}}}}function o(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s=i[1],u=i[2],c=i[3],f={css:s,media:u,sourceMap:c};r[a]?r[a].parts.push(f):n.push(r[a]={id:a,parts:[f]})}return n}function i(e,t){var n=b(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function s(e){var t=document.createElement("style");return e.attrs.type="text/css",c(t,e.attrs),i(e,t),t}function u(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",c(t,e.attrs),i(e,t),t}function c(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function f(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var c=y++;n=m||(m=s(t)),r=l.bind(null,n,c,!1),o=l.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(t),r=p.bind(null,n,t),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=d.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function l(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=E(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function d(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=w(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var v={},h=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),b=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),m=null,y=0,g=[],w=n(4);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=h()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],u=v[s.id];u.refs--,i.push(u)}if(e){r(o(e,t),t)}for(var a=0;a<i.length;a++){var u=i[a];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete v[u.id]}}}};var E=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()}]);