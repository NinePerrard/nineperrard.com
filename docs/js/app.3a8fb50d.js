!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){"use strict";t.r(r);t(1);var n=0;function o(){document.querySelector("picture").addEventListener("click",function(){var e=document.querySelector("#oeuvres").children.length;++n>=e&&(n=0),u(n)})}function u(e){var r=document.querySelector("#oeuvres").children,t=document.querySelector("#article-container"),n=t.querySelector(".legend-container"),u=r[e];n.innerHTML=u.querySelector(".legend").innerHTML;var c=n.querySelector(".legend-content"),l=u.querySelector("lang[code="+navigator.language+"]");null==l&&(l=u.querySelector("lang[code=fr-FR]")),c.innerHTML=l.querySelector("p").innerHTML;var i=t.querySelector(".picture-container"),a=i.querySelector("picture");null!=a&&i.removeChild(a);var d=u.querySelector("picture").cloneNode(!0);i.insertBefore(d,i.firstChild),o()}u(n),document.querySelector("#left-arrow").addEventListener("click",function(){var e=document.querySelector("#oeuvres").children.length;(n-=1)<0&&(n=e-1),u(n)}),document.querySelector("#right-arrow").addEventListener("click",function(){var e=document.querySelector("#oeuvres").children.length;++n>=e&&(n=0),u(n)})},function(e,r,t){}]);
//# sourceMappingURL=app.3a8fb50d.js.map