(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{206:function(e,t,n){"undefined"!=typeof self&&self,e.exports=function(e){function t(r){if(n[r])return n[r].exports;var c=n[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,t),c.l=!0,c.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};c(this,e);var i=this;i.settings=Object.assign({minWords:4,selector:"p",ignoreClass:"js-typemate__ignore",ignoreExistingSpaceChars:!1},n),i.elems=[].concat(r(void 0===t?document.querySelectorAll(i.settings.selector):t.querySelectorAll(i.settings.selector)))}return i(e,[{key:"apply",value:function(){var e=this;e.elems.map((function(t){if(t.classList.contains(e.settings.ignoreClass))return!1;if(e.shouldElementBeIgnored(t))return!1;var n="",r=t.innerHTML.trim().replace(/&nbsp;/g," ").split(/ (?=[^>]*(?:<|$))/);r.length<e.settings.minWords||(n=(n=(r=e.preventOrphans(r)).join(" ")).replace(/&nbsp; /g,"&nbsp;"),t.innerHTML=n)}))}},{key:"preventOrphans",value:function(e){var t=e[e.length-2];return e[e.length-2]=t+"&nbsp;",e}},{key:"reset",value:function(){var e=this;e.elems.map((function(t){if(e.shouldElementBeIgnored(t))return!1;t.innerHTML=t.innerHTML.replace(/&nbsp;/g," ")}))}},{key:"shouldElementBeIgnored",value:function(e){return!!(e.innerHTML.indexOf("&nbsp;")>-1&&this.settings.ignoreExistingSpaceChars)}}]),e}();e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new s(e,t)}}])},208:function(e,t,n){"use strict";var r=n(1),c=n.n(r).a.extend({name:"BrandingStudies",props:{type:String}}),l=n(9),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"caseStudyList",class:"full"==this.type?"studiesFull":"col3",attrs:{id:"brandingStudies"}},["/case-studies/branding-alomere"!=e.$nuxt.$route.path?n("nuxt-link",{staticClass:"caseStudy col",attrs:{to:"/case-studies/branding-alomere",tag:"div"}},[n("div",{staticClass:"picWrap"},[n("div",{staticClass:"pic"},[n("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:"/images/casestudies/alomereBrand/2.jpg",expression:"`/images/casestudies/alomereBrand/2.jpg`",arg:"background-image"}],staticClass:"responsiveImage"})])]),e._v(" "),n("div",{staticClass:"studyInfo"},[n("h4",[n("span",[e._v("Alomere Health")]),e._v(" Guiding Rename & Rebrand Strategy")]),e._v(" "),n("button",[e._v("View Case Study")])])]):e._e(),e._v(" "),"/case-studies/branding-ostra"!=e.$nuxt.$route.path?n("nuxt-link",{staticClass:"caseStudy col",attrs:{to:"/case-studies/branding-ostra",tag:"div"}},[n("div",{staticClass:"picWrap"},[n("div",{staticClass:"pic"},[n("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:"/images/casestudies/ostra/2.jpg",expression:"`/images/casestudies/ostra/2.jpg`",arg:"background-image"}],staticClass:"responsiveImage"})])]),e._v(" "),n("div",{staticClass:"studyInfo"},[n("h4",[n("span",[e._v("Ostra")]),e._v(" Collaborative Brand Story Development")]),e._v(" "),n("button",[e._v("View Case Study")])])]):e._e(),e._v(" "),"/case-studies/branding-heimies"!=e.$nuxt.$route.path?n("nuxt-link",{staticClass:"caseStudy col",attrs:{to:"/case-studies/branding-heimies",tag:"div"}},[n("div",{staticClass:"picWrap"},[n("div",{staticClass:"pic"},[n("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:"/images/casestudies/heimies/4.jpg",expression:"`/images/casestudies/heimies/4.jpg`",arg:"background-image"}],staticClass:"responsiveImage"})])]),e._v(" "),n("div",{staticClass:"studyInfo"},[n("h4",[n("span",[e._v("Heimies Made")]),e._v(" Define Unique Brand Position")]),e._v(" "),n("button",[e._v("View Case Study")])])]):e._e(),e._v(" "),"/case-studies/branding-foundry"!=e.$nuxt.$route.path?n("nuxt-link",{staticClass:"caseStudy col",attrs:{to:"/case-studies/branding-foundry",tag:"div"}},[n("div",{staticClass:"picWrap"},[n("div",{staticClass:"pic"},[n("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:"/images/casestudies/foundry/1.jpg",expression:"`/images/casestudies/foundry/1.jpg`",arg:"background-image"}],staticClass:"responsiveImage"})])]),e._v(" "),n("div",{staticClass:"studyInfo"},[n("h4",[n("span",[e._v("The Foundry")]),e._v(" New Name Evokes a Storied History")]),e._v(" "),n("button",[e._v("View Case Study")])])]):e._e(),e._v(" "),"/case-studies/branding-welia"!=e.$nuxt.$route.path?n("nuxt-link",{staticClass:"caseStudy col",attrs:{to:"/case-studies/branding-welia",tag:"div"}},[n("div",{staticClass:"picWrap"},[n("div",{staticClass:"pic"},[n("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:"/images/casestudies/welia/feature.png",expression:"`/images/casestudies/welia/feature.png`",arg:"background-image"}],staticClass:"responsiveImage"})])]),e._v(" "),n("div",{staticClass:"studyInfo"},[n("h4",[n("span",[e._v("Welia Health")]),e._v(" Launching a new brand.")]),e._v(" "),n("button",[e._v("View Case Study")])])]):e._e()],1)}),[],!1,null,null,null);t.a=component.exports},210:function(e,t,n){"use strict";var r=n(1),c=n.n(r).a.extend({name:"MarketingStudies",props:{type:String}}),l=n(9),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"caseStudyList",class:"full"==this.type?"studiesFull":"col3",attrs:{id:"marketingStudies"}},["/case-studies/marketing-white-crane"!=e.$nuxt.$route.path?n("nuxt-link",{staticClass:"caseStudy col",attrs:{to:"/case-studies/marketing-white-crane",tag:"div"}},[n("div",{staticClass:"picWrap"},[n("div",{staticClass:"pic"},[n("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:"/images/casestudies/whitecrane/1.jpg",expression:"`/images/casestudies/whitecrane/1.jpg`",arg:"background-image"}],staticClass:"responsiveImage"})])]),e._v(" "),n("div",{staticClass:"studyInfo"},[n("h4",[n("span",[e._v("White Crane")]),e._v(" Lead Generation + Sales Integration Strategy")]),e._v(" "),n("button",[e._v("View Case Study")])])]):e._e(),e._v(" "),"/case-studies/marketing-alomere"!=e.$nuxt.$route.path?n("nuxt-link",{staticClass:"caseStudy col",attrs:{to:"/case-studies/marketing-alomere",tag:"div"}},[n("div",{staticClass:"picWrap"},[n("div",{staticClass:"pic"},[n("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:"/images/casestudies/alomereMarketing/1.jpg",expression:"`/images/casestudies/alomereMarketing/1.jpg`",arg:"background-image"}],staticClass:"responsiveImage"})])]),e._v(" "),n("div",{staticClass:"studyInfo"},[n("h4",[n("span",[e._v("Alomere Health")]),e._v("Digital Marketing Strategy")]),e._v(" "),n("button",[e._v("View Case Study")])])]):e._e(),e._v(" "),"/case-studies/marketing-alomere-covid"!=e.$nuxt.$route.path?n("nuxt-link",{staticClass:"caseStudy col",attrs:{to:"/case-studies/marketing-alomere-covid",tag:"div"}},[n("div",{staticClass:"picWrap"},[n("div",{staticClass:"pic"},[n("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:"/images/casestudies/alomereMarketing/3880Percent_1100x700.png",expression:"`/images/casestudies/alomereMarketing/3880Percent_1100x700.png`",arg:"background-image"}],staticClass:"responsiveImage"})])]),e._v(" "),n("div",{staticClass:"studyInfo"},[n("h4",[n("span",[e._v("Alomere Health")]),e._v("Public Health Messaging")]),e._v(" "),n("button",[e._v("View Case Study")])])]):e._e()],1)}),[],!1,null,null,null);t.a=component.exports},211:function(e,t,n){"use strict";var r=n(1),c=n.n(r).a.extend({name:"ProductStudies",props:{type:String},mounted:function(){console.log("route "+$nuxt.$route.path)}}),l=n(9),component=Object(l.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"caseStudyList",class:"full"==this.type?"studiesFull":"col3",attrs:{id:"productStudies"}},[t("nuxt-link",{staticClass:"caseStudy col",attrs:{to:"/case-studies/product-itsawego",tag:"div"}},[t("div",{staticClass:"picWrap"},[t("div",{staticClass:"pic"},[t("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:"/images/casestudies/itsawego/1.jpg",expression:"`/images/casestudies/itsawego/1.jpg`",arg:"background-image"}],staticClass:"responsiveImage"})])]),this._v(" "),t("div",{staticClass:"studyInfo"},[t("h4",[t("span",[this._v("Itsawego")]),this._v("Product Story + Prototyping")]),this._v(" "),t("button",[this._v("View Case Study")])])])],1)}),[],!1,null,null,null);t.a=component.exports},268:function(e,t,n){"use strict";n.r(t);var r=n(206),c=n.n(r),l=n(208),o=n(210),d=n(211),v={components:{BrandingStudies:l.a,MarketingStudies:o.a,ProductStudies:d.a},mounted:function(){this.$nextTick((function(){new c.a(void 0,{selector:"h2, h3, p, li",ignoreClass:"noTypeFix"}).apply()}))},head:function(){return{meta:[]}}},m=n(9),component=Object(m.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"allStudies",attrs:{id:"app"}},[e._m(0),e._v(" "),n("section",{staticClass:"studySection s-ImageGroup bg-ltGray",attrs:{id:""}},[n("div",{staticClass:"pageWidth"},[n("h3",[e._v("Brand Strategy")]),e._v(" "),n("BrandingStudies",{attrs:{type:"full"}})],1)]),e._v(" "),n("section",{staticClass:"studySection s-ImageGroup bg-ltGray",attrs:{id:""}},[n("div",{staticClass:"pageWidth"},[n("h3",[e._v("Marketing Consulting")]),e._v(" "),n("MarketingStudies",{attrs:{type:"full"}})],1)]),e._v(" "),n("section",{staticClass:"studySection s-ImageGroup bg-ltGray",attrs:{id:""}},[n("div",{staticClass:"pageWidth"},[n("h3",[e._v("Digital Product Development")]),e._v(" "),n("ProductStudies",{attrs:{type:"full"}})],1)])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("section",{attrs:{id:"top"}},[t("div",{staticClass:"intro pageWidth"},[t("h2",[this._v("We’re strong believers in show & tell, so here are a few examples of past projects.")])]),this._v(" "),t("div",{staticClass:"sidebar"},[this._v("Highlight Center - "),t("strong",[this._v("Minneapolis, Minnesota USA")])])])}],!1,null,null,null);t.default=component.exports}}]);