(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[5],{50:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a(51),n=a.n(r),c=a(53),s=a(2),i=a(49);function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.body,r=Object(i.a)(t,["body"]),o={"content-type":"application/json"},l=Object(s.a)(Object(s.a)({method:a?"POST":"GET"},r),{},{headers:Object(s.a)(Object(s.a)({},o),r.headers)});return a&&(l.body=JSON.stringify(a)),window.fetch("/api/".concat(e),l).then(function(){var e=Object(c.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(a=e.sent,!t.ok){e.next=7;break}return e.abrupt("return",a);case 7:return e.abrupt("return",Promise.reject(a));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},74:function(e,t,a){e.exports={view_wrapper:"product_view_wrapper__2mzXD",view_background:"product_view_background__1faTq",full_view:"product_full_view__2qZzi",view_foreground:"product_view_foreground__1uxUO",view_controller:"product_view_controller__1mbFE",right_aligned:"product_right_aligned__23i1V",arrow_btns:"product_arrow_btns__3xb94",fs_btn:"product_fs_btn__3S3mq",dark_btn:"product_dark_btn__oJwtZ",product_details:"product_product_details__2VYs5",details_meta:"product_details_meta__1bpPX",breadcrumb:"product_breadcrumb__33chX",details_id:"product_details_id__3cPlV",details_info:"product_details_info__2oZe7",details_more:"product_details_more__1UtS-",colors:"product_colors__1iUae",ratings_reviews:"product_ratings_reviews__10TY-",r_count:"product_r_count__1vrSx",stars:"product_stars__6Fiai",details_actions:"product_details_actions__3lf0W",size_details:"product_size_details__1kf2w",action_buy:"product_action_buy__28oM5",price:"product_price__3ZtTI",price_big:"product_price_big__3xaNR",buy_icon:"product_buy_icon__1LIhi",preview:"product_preview__27lGa",preview_large:"product_preview_large__3dueA",cover:"product_cover__3fgp4",cover_large:"product_cover_large__3vQ25",buy_text:"product_buy_text__1knkt"}},75:function(e,t,a){"use strict";a.r(t);var r=a(19),n=a(49),c=a(0),s=a.n(c),i=a(6),o=a(9),l=a(60),u=a.n(l),_=(a(73),a(12)),m=a(20),d=a(50),p=a(74),b=a.n(p),v={superLargeDesktop:{breakpoint:{max:4e3,min:1921},items:3},desktop:{breakpoint:{max:1920,min:1201},items:2},tablet:{breakpoint:{max:1200,min:0},items:1}},f={preview:{breakpoint:{max:4e3,min:0},items:1}},E=function(e){var t=e.next,a=e.previous;e.goToSlide,Object(n.a)(e,["next","previous","goToSlide"]);return s.a.createElement("div",{className:b.a.arrow_btns},s.a.createElement("button",{type:"button",onClick:function(){return a()}},s.a.createElement("span",{className:"material-icons"},"chevron_left")),s.a.createElement("button",{type:"button",onClick:function(){return t()}},s.a.createElement("span",{className:"material-icons"},"chevron_right")))},w=function(e){var t=e.product;return s.a.createElement(u.a,{infinite:!0,partialVisible:!1,responsive:f,keyBoardControl:!0,swipeable:!0,showDots:!1,arrows:!1,customButtonGroup:s.a.createElement(E,{totalItems:5}),renderButtonGroupOutside:!0},t.images.map((function(e,a){return s.a.createElement("div",{className:b.a.preview_large,key:a},s.a.createElement("div",{className:b.a.cover_large},s.a.createElement("img",{src:e.src,alt:t.name})))})))},g=function(e){var t=e.product;return s.a.createElement(u.a,{infinite:!0,partialVisible:!1,responsive:v,keyBoardControl:!0,swipeable:!0,showDots:!1,arrows:!1,customButtonGroup:s.a.createElement(E,{totalItems:5}),renderButtonGroupOutside:!0},t.images.map((function(e,a){return s.a.createElement("div",{className:b.a.preview,key:a},s.a.createElement("div",{className:b.a.cover},s.a.createElement("img",{src:e.src,alt:t.name})))})))};t.default=function(){var e=Object(i.g)().id,t=Object(c.useContext)(_.a).setProduct,a=Object(c.useState)(null),n=Object(r.a)(a,2),l=n[0],u=n[1],p=Object(c.useState)([]),v=Object(r.a)(p,2),f=v[0],E=v[1],N=Object(c.useState)(!0),k=Object(r.a)(N,2),y=k[0],h=k[1],O=Object(c.useState)(1),j=Object(r.a)(O,2),x=j[0],S=j[1];Object(c.useEffect)((function(){document.body.classList.add("noscroll-web"),document.body.classList.remove("trans")}),[]),Object(c.useEffect)((function(){var t=e.split("-").pop(),a="products/".concat(t);Object(d.a)(a).then((function(e){u(e.data.product);var t=e.data.product.images.map((function(e){return{name:e.color,code:e.hex}})).filter((function(e,t,a){return a.findIndex((function(t){return t.name===e.name}))===t}));E(t),h(!1)})).catch((function(e){u(null),h(!1)}))}),[e]);var C=Object(c.useState)(!1),T=Object(r.a)(C,2),z=T[0],B=T[1];return y?s.a.createElement(m.a,null):s.a.createElement("div",null,s.a.createElement("div",{className:"".concat(b.a.view_wrapper," ").concat(z?b.a.full_view:"")},s.a.createElement("div",{className:b.a.view_background},z?s.a.createElement(w,{product:l}):s.a.createElement(g,{product:l}),s.a.createElement("div",{className:"".concat(b.a.view_controller," ").concat(z?b.a.right_aligned:"")},s.a.createElement("div",{className:b.a.fs_btn},z?s.a.createElement("button",{type:"button",className:b.a.dark_btn,onClick:function(e){return B(!1)}},s.a.createElement("span",{className:"material-icons"},"close")):s.a.createElement("button",{type:"button",onClick:function(e){return B(!0)}},s.a.createElement("span",{className:"material-icons"},"add"))))),!z&&s.a.createElement("div",{className:b.a.view_foreground},s.a.createElement("div",{className:b.a.product_details},s.a.createElement("div",{className:b.a.details_meta},s.a.createElement("ul",{className:b.a.breadcrumb},s.a.createElement("li",null,s.a.createElement(o.b,{to:"/"},"Home")),s.a.createElement("li",null,"Products"),s.a.createElement("li",null,l.category),s.a.createElement("li",null,function(e){var t="";switch(e){case 2:t="Men";break;case 3:t="Women";break;case 4:t="Unisex";break;case 5:t="Kids";break;default:t="All"}return t}(l.customerType))),s.a.createElement("span",{className:b.a.details_id},"Id: ",l.productCode)),s.a.createElement("div",{className:b.a.details_info},s.a.createElement("h2",null,l.name),s.a.createElement("p",null,l.description)),s.a.createElement("div",{className:b.a.details_more},s.a.createElement("div",{className:b.a.colors},f.map((function(e,t){return s.a.createElement("span",{key:t,title:e.name,style:{backgroundColor:e.code,border:"1px solid ".concat("White"===e.name?"#ddd":e.code)},className:"".concat(x===t+1?b.a.selected_color:""),onClick:function(e){return S(t+1)}})}))),s.a.createElement("div",{className:b.a.ratings_reviews},s.a.createElement("div",{className:b.a.r_count},l.ratings.total," Reviews"),s.a.createElement("div",{className:b.a.stars},s.a.createElement("span",{className:"material-icons"},"star"),s.a.createElement("span",{className:"material-icons"},"star"),s.a.createElement("span",{className:"material-icons"},"star"),s.a.createElement("span",{className:"material-icons"},"star_half"),s.a.createElement("span",{className:"material-icons"},"star_outline")))),s.a.createElement("div",{className:b.a.price_big},l.currency.format," ",l.price.toFixed(2)),s.a.createElement("div",{className:b.a.details_actions},s.a.createElement("div",{className:b.a.size_details},s.a.createElement("span",null,"Available sizes:"),s.a.createElement("span",null,"US ",l.sizes.join(", "))),s.a.createElement("div",{className:b.a.action_buy,onClick:function(){t({qty:1,product:l})}},s.a.createElement("span",{className:b.a.price}," ",l.currency.format," ",l.price.toFixed(2)),s.a.createElement("span",{className:b.a.buy_text},"Add to Cart"),s.a.createElement("span",{className:"material-icons ".concat(b.a.buy_icon)},"shopping_cart")))))))}}}]);
//# sourceMappingURL=5.8ca032c0.chunk.js.map