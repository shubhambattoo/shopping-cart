"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[49],{5169:function(e,r,s){s.d(r,{W:function(){return o}});var t=s(4165),n=s(5861),i=s(8683),a=s(4925),c=["body"];function o(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=r.body,o=(0,a.Z)(r,c),d=(0,i.Z)((0,i.Z)({method:s?"POST":"GET"},o),{},{headers:(0,i.Z)((0,i.Z)({},{"content-type":"application/json"}),o.headers)});return s&&(d.body=JSON.stringify(s)),window.fetch("/api/".concat(e),d).then(function(){var e=(0,n.Z)((0,t.Z)().mark((function e(r){var s;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.json();case 2:if(s=e.sent,!r.ok){e.next=7;break}return e.abrupt("return",s);case 7:return e.abrupt("return",Promise.reject(s));case 8:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}())}},8857:function(e,r,s){s.r(r),s.d(r,{default:function(){return g}});var t=s(9439),n=s(4925),i=s(2791),a=s(7689),c=s(1087),o=s(6766),d=(s(5141),s(6164)),l=s(1374),u=s(5169),_=s(3586),p=s.n(_),m={view_wrapper:"product_view_wrapper__MmQGK",view_background:"product_view_background__Dbd4s",full_view:"product_full_view__vVmNU",view_foreground:"product_view_foreground__g6wfs",view_controller:"product_view_controller__hkPy+",right_aligned:"product_right_aligned__ksEt1",arrow_btns:"product_arrow_btns__w9zc4",fs_btn:"product_fs_btn__E0oSg",dark_btn:"product_dark_btn__d01F-",product_details:"product_product_details__83wcZ",details_meta:"product_details_meta__jJ2HF",breadcrumb:"product_breadcrumb__Bzs3R",details_id:"product_details_id__fGktD",details_info:"product_details_info__ptNNE",details_more:"product_details_more__QMxJu",colors:"product_colors__A9slg",ratings_reviews:"product_ratings_reviews__k-cfS",r_count:"product_r_count__+WPnh",stars:"product_stars__L1L9r",details_actions:"product_details_actions__gnbCk",size_details:"product_size_details__7YBsA",action_buy:"product_action_buy__-GIAc",price:"product_price__-ArNK",price_big:"product_price_big__gEh9g",buy_icon:"product_buy_icon__DN6KE",preview:"product_preview__-E+Nx",preview_large:"product_preview_large__2ZnFX",cover:"product_cover__o4Z+B",cover_large:"product_cover_large__0hO5T",buy_text:"product_buy_text__pQNSh"},h=(s(6869),s(4922),s(184)),x=["next","previous","goToSlide"],v={superLargeDesktop:{breakpoint:{max:4e3,min:1921},items:3},desktop:{breakpoint:{max:1920,min:1201},items:2},tablet:{breakpoint:{max:1200,min:0},items:1}},b={preview:{breakpoint:{max:4e3,min:0},items:1}},f=function(e){var r=e.next,s=e.previous;e.goToSlide,(0,n.Z)(e,x);return(0,h.jsxs)("div",{className:m.arrow_btns,children:[(0,h.jsx)("button",{type:"button",onClick:function(){return s()},children:(0,h.jsx)("span",{className:"material-icons",children:"chevron_left"})}),(0,h.jsx)("button",{type:"button",onClick:function(){return r()},children:(0,h.jsx)("span",{className:"material-icons",children:"chevron_right"})})]})},j=function(e){var r=e.product;return(0,h.jsx)(o.default,{infinite:!0,partialVisible:!1,responsive:b,keyBoardControl:!0,swipeable:!0,showDots:!1,arrows:!1,customButtonGroup:(0,h.jsx)(f,{totalItems:5}),renderButtonGroupOutside:!0,children:r.images.map((function(e,s){return(0,h.jsx)("div",{className:m.preview_large,children:(0,h.jsx)("div",{className:m.cover_large,children:(0,h.jsx)("img",{src:e.src,alt:r.name})})},s)}))})},w=function(e){var r=e.product;return(0,h.jsx)(o.default,{infinite:!0,partialVisible:!1,responsive:v,keyBoardControl:!0,swipeable:!0,showDots:!1,arrows:!1,customButtonGroup:(0,h.jsx)(f,{totalItems:5}),renderButtonGroupOutside:!0,children:r.images.map((function(e,s){return(0,h.jsx)("div",{className:m.preview,children:(0,h.jsx)("div",{className:m.cover,children:(0,h.jsx)("img",{src:e.src,alt:r.name})})},s)}))})},g=function(){var e=(0,a.UO)().id,r=(0,i.useContext)(d.A).setProduct,s=(0,i.useState)(null),n=(0,t.Z)(s,2),o=n[0],_=n[1],x=(0,i.useState)([]),v=(0,t.Z)(x,2),b=v[0],f=v[1],g=(0,i.useState)(!0),N=(0,t.Z)(g,2),k=N[0],y=N[1],Z=(0,i.useState)(1),C=(0,t.Z)(Z,2),S=C[0],B=C[1];(0,i.useEffect)((function(){document.body.classList.add("noscroll-web"),document.body.classList.remove("trans")}),[]),(0,i.useEffect)((function(){var r=e.split("-").pop(),s="products/".concat(r);(0,u.W)(s).then((function(e){_(e.data.product);var r=e.data.product.images.map((function(e){return{name:e.color,code:e.hex}})).filter((function(e,r,s){return s.findIndex((function(r){return r.name===e.name}))===r}));f(r),y(!1)})).catch((function(e){_(null),y(!1)}))}),[e]);var A=(0,i.useState)(!1),E=(0,t.Z)(A,2),G=E[0],z=E[1];return k?(0,h.jsx)(l.a,{}):(0,h.jsx)("div",{children:(0,h.jsxs)("div",{className:"".concat(m.view_wrapper," ").concat(G?m.full_view:""),children:[(0,h.jsxs)("div",{className:m.view_background,children:[G?(0,h.jsx)(j,{product:o}):(0,h.jsx)(w,{product:o}),(0,h.jsx)("div",{className:"".concat(m.view_controller," ").concat(G?m.right_aligned:""),children:(0,h.jsx)("div",{className:m.fs_btn,children:G?(0,h.jsx)("button",{type:"button",className:m.dark_btn,onClick:function(e){return z(!1)},children:(0,h.jsx)("span",{className:"material-icons",children:"close"})}):(0,h.jsx)("button",{type:"button",onClick:function(e){return z(!0)},children:(0,h.jsx)("span",{className:"material-icons",children:"add"})})})})]}),!G&&(0,h.jsx)("div",{className:m.view_foreground,children:(0,h.jsxs)("div",{className:m.product_details,children:[(0,h.jsxs)("div",{className:m.details_meta,children:[(0,h.jsxs)("ul",{className:m.breadcrumb,children:[(0,h.jsx)("li",{children:(0,h.jsx)(c.rU,{to:"/",children:"Home"})}),(0,h.jsx)("li",{children:"Products"}),(0,h.jsx)("li",{children:o.category}),(0,h.jsx)("li",{children:function(e){var r="";switch(e){case 2:r="Men";break;case 3:r="Women";break;case 4:r="Unisex";break;case 5:r="Kids";break;default:r="All"}return r}(o.customerType)})]}),(0,h.jsxs)("span",{className:m.details_id,children:["Id: ",o.productCode]})]}),(0,h.jsxs)("div",{className:m.details_info,children:[(0,h.jsx)("h2",{children:o.name}),(0,h.jsx)("p",{children:o.description})]}),(0,h.jsxs)("div",{className:m.details_more,children:[(0,h.jsx)("div",{className:m.colors,children:b.map((function(e,r){return(0,h.jsx)("span",{title:e.name,style:{backgroundColor:e.code,border:"1px solid ".concat("White"===e.name?"#ddd":e.code)},className:"".concat(S===r+1?m.selected_color:""),onClick:function(e){return B(r+1)}},r)}))}),(0,h.jsxs)("div",{className:m.ratings_reviews,children:[(0,h.jsxs)("div",{className:m.r_count,children:[o.ratings.total," Reviews"]}),(0,h.jsxs)("div",{className:m.stars,children:[(0,h.jsx)("span",{className:"material-icons",children:"star"}),(0,h.jsx)("span",{className:"material-icons",children:"star"}),(0,h.jsx)("span",{className:"material-icons",children:"star"}),(0,h.jsx)("span",{className:"material-icons",children:"star_half"}),(0,h.jsx)("span",{className:"material-icons",children:"star_outline"})]})]})]}),(0,h.jsxs)("div",{className:m.price_big,children:[o.currency.format," ",o.price.toFixed(2)]}),(0,h.jsxs)("div",{className:m.details_actions,children:[(0,h.jsxs)("div",{className:m.size_details,children:[(0,h.jsx)("span",{children:"Available sizes:"}),(0,h.jsxs)("span",{children:["US ",o.sizes.join(", ")]})]}),(0,h.jsxs)("div",{className:m.action_buy,onClick:function(){r({qty:1,product:o}),new(p())({layout:"bottomCenter",progressBar:!1,text:'<div style="display:flex; align-items: center;gap:15px;"><img width="40" src='.concat(o.images[0].src," alt='sneaker' /> <div>Added to cart</div></div>"),theme:"relax",timeout:1e3}).show()},children:[(0,h.jsxs)("span",{className:m.price,children:[" ",o.currency.format," ",o.price.toFixed(2)]}),(0,h.jsx)("span",{className:m.buy_text,children:"Add to Cart"}),(0,h.jsx)("span",{className:"material-icons ".concat(m.buy_icon),children:"shopping_cart"})]})]})]})})]})})}}}]);
//# sourceMappingURL=49.2ca42f1f.chunk.js.map