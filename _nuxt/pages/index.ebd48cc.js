(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{206:function(e,n,t){"undefined"!=typeof self&&self,e.exports=function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n,t){"use strict";function r(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),s=function(){function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(this,e);var i=this;i.settings=Object.assign({minWords:4,selector:"p",ignoreClass:"js-typemate__ignore",ignoreExistingSpaceChars:!1},t),i.elems=[].concat(r(void 0===n?document.querySelectorAll(i.settings.selector):n.querySelectorAll(i.settings.selector)))}return i(e,[{key:"apply",value:function(){var e=this;e.elems.map((function(n){if(n.classList.contains(e.settings.ignoreClass))return!1;if(e.shouldElementBeIgnored(n))return!1;var t="",r=n.innerHTML.trim().replace(/&nbsp;/g," ").split(/ (?=[^>]*(?:<|$))/);r.length<e.settings.minWords||(t=(t=(r=e.preventOrphans(r)).join(" ")).replace(/&nbsp; /g,"&nbsp;"),n.innerHTML=t)}))}},{key:"preventOrphans",value:function(e){var n=e[e.length-2];return e[e.length-2]=n+"&nbsp;",e}},{key:"reset",value:function(){var e=this;e.elems.map((function(n){if(e.shouldElementBeIgnored(n))return!1;n.innerHTML=n.innerHTML.replace(/&nbsp;/g," ")}))}},{key:"shouldElementBeIgnored",value:function(e){return!!(e.innerHTML.indexOf("&nbsp;")>-1&&this.settings.ignoreExistingSpaceChars)}}]),e}();e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new s(e,n)}}])},290:function(e,n,t){"use strict";t.r(n);t(14);var r=t(2),o=t(206),c=t.n(o),l={components:{},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function n(){var t,r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.$prismic,r=e.error,n.prev=1,n.next=4,t.api.getSingle("page-home");case 4:return o=n.sent.data,n.abrupt("return",{pageContent:o});case 8:n.prev=8,n.t0=n.catch(1),r({statusCode:404,message:"Page not found"});case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()},mounted:function(){this.$nextTick((function(){new c.a(void 0,{selector:"h2, h3, p, li",ignoreClass:"noTypeFix"}).apply()}))}},d=t(9),component=Object(d.a)(l,(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("section",{attrs:{id:"top"}},[t("div",{staticClass:"intro pageWidth"},[t("h2",[e._v("Curious. Designed to grow your business.")])])]),e._v(" "),t("section",{attrs:{id:"main"}},[t("div",{staticClass:"pageWidth"},[t("h4",[e._v("Delivering better customers, and more of them, by ensuring your brand, marketing, and sales are working together.")]),e._v(" "),t("div",{staticClass:"col3"},[t("div",{staticClass:"col"},[t("h5",[e._v("We stay focused on revenue goals and consider your cash flow.")])]),e._v(" "),t("div",{staticClass:"col"},[t("h5",[e._v("We don’t compromise on design and storytelling.")])]),e._v(" "),t("div",{staticClass:"col"},[t("h5",[e._v("We only invest in marketing to your potential buyers.")])])])])]),e._v(" "),t("section",{attrs:{id:"aboutUs"}},[t("div",{staticClass:"pageWidth"},[t("h3",[e._v("Proven Process")]),e._v(" "),t("div",{staticClass:"col"},[t("h5",[e._v("We’ve refined our holistic approach into a proven 3-phase process that starts with defining your goals and marketing architecture, designing and executing a strategy, and refining based on results.")])])])])])}],!1,null,null,null);n.default=component.exports}}]);