(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{289:function(t,e,n){"use strict";n.r(e);n(14);var o=n(2),r=(n(18),n(10),n(127),{name:"result",components:{},head:function(){var t="Curious - "+this.pageContent.headline[0].text,e={title:t,meta:[{hid:"og:title",property:"og:title",content:t}]};return this.pageContent.seo_description&&e.meta.push({hid:"description",name:"description",content:this.pageContent.seo_description},{hid:"og:description",property:"og:description",content:this.pageContent.seo_description}),this.pageContent.seo_keywords&&e.meta.push({hid:"keywords",name:"keywords",content:this.pageContent.seo_keywords}),this.pageContent.preview_image&&Object.entries(this.pageContent.preview_image).length>0&&e.meta.push({hid:"og:image",property:"og:image",content:this.pageContent.preview_image.url},{hid:"og:image:width",property:"og:image:width",content:this.pageContent.preview_image.dimensions.width+""},{hid:"og:image:height",property:"og:image:height",content:this.pageContent.preview_image.dimensions.height+""}),e},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$prismic,o=t.params,r=t.error,e.prev=1,e.next=4,n.api.getByUID("results",o.uid);case 4:return c=e.sent.data,e.abrupt("return",{pageContent:c});case 8:e.prev=8,e.t0=e.catch(1),r({statusCode:404,message:"Page not found"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()}}),c=n(9),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blogSection",attrs:{id:"app"}},[n("section",{staticClass:"studySection bg-ltGray"},[n("div",{staticClass:"pageWidth"},[n("h3",{staticClass:"blog-title"},[t._v(t._s(t.$prismic.asText(t.pageContent.headline)))]),t._v(" "),n("prismic-rich-text",{staticClass:"content-prime",attrs:{field:t.pageContent.content}})],1)]),t._v(" "),n("section",{attrs:{id:"cta"}},[n("div",{staticClass:"pageWidth"},[n("div",{staticClass:"ctaText"},[n("span",[t._v("Do you want marketing that runs like clockwork? Let’s talk about your immediate marketing opportunities and how they can build up to a larger marketing strategy. ")]),t._v(" "),n("nuxt-link",{staticClass:"button",attrs:{to:"#contact"}},[t._v("Get in touch")])],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);