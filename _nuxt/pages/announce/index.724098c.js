(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{206:function(e,t,n){"undefined"!=typeof self&&self,e.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(this,e);var i=this;i.settings=Object.assign({minWords:4,selector:"p",ignoreClass:"js-typemate__ignore",ignoreExistingSpaceChars:!1},n),i.elems=[].concat(r(void 0===t?document.querySelectorAll(i.settings.selector):t.querySelectorAll(i.settings.selector)))}return i(e,[{key:"apply",value:function(){var e=this;e.elems.map((function(t){if(t.classList.contains(e.settings.ignoreClass))return!1;if(e.shouldElementBeIgnored(t))return!1;var n="",r=t.innerHTML.trim().replace(/&nbsp;/g," ").split(/ (?=[^>]*(?:<|$))/);r.length<e.settings.minWords||(n=(n=(r=e.preventOrphans(r)).join(" ")).replace(/&nbsp; /g,"&nbsp;"),t.innerHTML=n)}))}},{key:"preventOrphans",value:function(e){var t=e[e.length-2];return e[e.length-2]=t+"&nbsp;",e}},{key:"reset",value:function(){var e=this;e.elems.map((function(t){if(e.shouldElementBeIgnored(t))return!1;t.innerHTML=t.innerHTML.replace(/&nbsp;/g," ")}))}},{key:"shouldElementBeIgnored",value:function(e){return!!(e.innerHTML.indexOf("&nbsp;")>-1&&this.settings.ignoreExistingSpaceChars)}}]),e}();e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new s(e,t)}}])},267:function(e,t,n){"use strict";n.r(t);var r=n(206),o=n.n(r),c={components:{},mounted:function(){this.$nextTick((function(){new o.a(void 0,{selector:"h2, h3, p, li",ignoreClass:"noTypeFix"}).apply()}));var e=document.createElement("script");e.src="//js.hs-scripts.com/3891745.js",document.body.appendChild(e)},head:function(){return{title:"Curious: Announcing a new partnership",meta:[{hid:"description",name:"description",content:"Curious and Closers Media create sales and marketing partnership to enhance your business."},{hid:"og:title",property:"og:title",content:"Curious: Announcing a new partnership"},{hid:"og:description",property:"og:description",content:"Curious and Closers Media create sales and marketing partnership to enhance your business."},{hid:"og:image",property:"og:image",content:"https://discovercurious.com/insights/closers.png"},{hid:"og:image:type",property:"og:image:type",content:"image/png"},{hid:"og:image:width",property:"og:image:width",content:"945"},{hid:"og:image:height",property:"og:image:height",content:"349"}],script:[]}}},l=n(9),component=Object(l.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"announce",attrs:{id:"app"}},[t("section",{staticClass:"studySection s-ImageGroup s-noBorder bg-ltGray",attrs:{id:""}},[t("div",{staticClass:"pageWidth"},[t("div",{staticClass:"col2"},[this._m(0),this._v(" "),t("div",{staticClass:"col"},[t("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:"/insights/closers_transparent.png",expression:"`/insights/closers_transparent.png`",arg:"background-image"}],staticClass:"responsiveImage"})])]),this._v(" "),this._m(1),this._v(" "),this._m(2)])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col"},[t("h3",[this._v("Curious & Closers Media Join Forces")]),this._v(" "),t("p",[this._v("Due to current circumstances, Curious and "),t("a",{attrs:{href:"https://mailchi.mp/d724e965a327/closerscommunity"}},[this._v("Closers Media")]),this._v(" have joined forces to offer an end-to-end marketing/sales solution to EOS led companies to help them thrive during these unprecedented times.")]),this._v(" "),t("p",[this._v("At Curious, we pair data with human intelligence, expert training, and industry experience to fill your pipeline with conversations that close. Sales + marketing done right. ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col4 s-textRow"},[n("div",{staticClass:"col"},[n("h5",[e._v("Your Audience")]),e._v(" "),n("p",[e._v("By researching historical data, technology, and current market research, we define customer profiles that are most likely to choose you over your competitors.")])]),e._v(" "),n("div",{staticClass:"col"},[n("h5",[e._v("Unique Voice")]),e._v(" "),n("p",[e._v("Your brand and offering have a story unique to you and your ideal prospect. Together, let’s perfect and organize an awareness campaign that speaks directly to your target market.")])]),e._v(" "),n("div",{staticClass:"col"},[n("h5",[e._v("Take Action")]),e._v(" "),n("p",[e._v("We put an action-based sales spin on our marketing campaigns so that when we deploy, quality conversations follow. ")])]),e._v(" "),n("div",{staticClass:"col"},[n("h5",[e._v("Expert Advice")]),e._v(" "),n("p",[e._v("As your sales pipeline begins to fill, our virtual closing experts are available to provide “on-demand” deal assistance to ensure expeditious deal closure.")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"ctaText"},[t("span",[this._v("Want to learn more about the benefits of this partnership? ")]),this._v(" "),t("a",{staticClass:"button",attrs:{href:"https://doodle.com/mm/garrioharrison/discovercurious"}},[this._v("Let's Chat")])])}],!1,null,null,null);t.default=component.exports}}]);