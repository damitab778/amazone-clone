(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{36:function(e,a,t){e.exports=t.p+"static/media/tv.3411fdd1.png"},37:function(e,a,t){e.exports=t.p+"static/media/hp.c78c1d24.jpg"},38:function(e,a,t){e.exports=t.p+"static/media/alien.278b5210.jpg"},39:function(e,a,t){e.exports=t.p+"static/media/harry.9493be7e.jpg"},40:function(e,a,t){e.exports=t.p+"static/media/home-gym.58edb95c.jpg"},41:function(e,a,t){e.exports=t.p+"static/media/dw.187102fa.jpg"},42:function(e,a,t){e.exports=t.p+"static/media/ip12.2c39abc5.jpg"},46:function(e,a,t){e.exports=t.p+"static/media/visaAdd.9552b1d4.jpg"},49:function(e,a,t){e.exports=t(74)},54:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},74:function(e,a,t){"use strict";t.r(a);var n=t(2),c=t.n(n),l=t(21),r=t.n(l),i=(t(54),t(35)),m=t(9),s=(t(55),t(56),t(57),Object(n.createContext)()),o=function(e){var a=e.reducer,t=e.initialState,l=e.children;return c.a.createElement(s.Provider,{value:Object(n.useReducer)(a,t)},l)},u=function(){return Object(n.useContext)(s)};var d=function(e){var a=e.id,t=e.title,n=e.image,l=e.price,r=e.rating,i=u(),s=Object(m.a)(i,2),o=(s[0].basket,s[1]);return c.a.createElement("div",{className:"product"},c.a.createElement("div",{className:"product__info"},c.a.createElement("p",null,t),c.a.createElement("p",{className:"product__price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,l)),c.a.createElement("div",{className:"product__rating"},Array(r).fill().map((function(e,a){return c.a.createElement("p",null,"\u2b50")})))),c.a.createElement("img",{src:n,alt:""}),c.a.createElement("button",{className:"product__btn",onClick:function(){o({type:"ADD_TO_BASKET",item:{id:a,title:t,image:n,price:l,rating:r}})}},"Add to Basket"))},p=t(36),E=t.n(p),_=t(37),g=t.n(_),h=t(38),v=t.n(h),f=t(39),b=t.n(f),N=t(40),k=t.n(N),O=t(41),y=t.n(O),j=t(42),S=t.n(j);var A=function(){return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"home__container"},c.a.createElement("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg",alt:""}),c.a.createElement("div",{className:"home__row"},c.a.createElement(d,{id:"1",title:"Samsung 55 UHD",price:599.99,image:E.a,rating:5}),c.a.createElement(d,{id:"2",title:"HP 15-dw Full-HD",price:259.99,image:g.a,rating:3}),c.a.createElement(d,{id:"3",title:"Alienware PRO",price:669.99,image:v.a,rating:5}),c.a.createElement(d,{id:"4",title:"Hary Potter Saga",price:369.99,image:b.a,rating:4})),c.a.createElement("div",{className:"home__row"},c.a.createElement(d,{id:"5",title:"Home GYM",price:1119.99,image:k.a,rating:5})),c.a.createElement("div",{className:"home__row"},c.a.createElement(d,{id:"6",title:"Dishwasher NO.1!",price:543,image:y.a,rating:5}),c.a.createElement(d,{id:"7",title:"Iphone 12 PRO",price:1119.99,image:S.a,rating:3}))))},w=(t(58),t(43)),P=t.n(w),C=t(44),x=t.n(C),R=t(14),T=t(29),B=(T.a.initializeApp({apiKey:"AIzaSyCKy5wbjapA0WsegVN72LLRfyJG9hyu72Y",authDomain:"challenge-92652.firebaseapp.com",databaseURL:"https://challenge-92652.firebaseio.com",projectId:"challenge-92652",storageBucket:"challenge-92652.appspot.com",messagingSenderId:"897177741111",appId:"1:897177741111:web:b796221cc0311426ab9cb2",measurementId:"G-5VPXQ4Q2BJ"}).firestore(),T.a.auth());var I=function(){var e=u(),a=Object(m.a)(e,2),t=a[0],n=t.basket,l=t.user;return a[1],c.a.createElement("div",{className:"header"},c.a.createElement(R.b,{to:"/"},c.a.createElement("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"})),c.a.createElement("div",{className:"header__search"},c.a.createElement("input",{className:"header__searchInput",type:"text"}),c.a.createElement(P.a,{className:"header__searchIcon",type:"text"})),c.a.createElement("div",{className:"header__nav"},c.a.createElement(R.b,{to:!l&&"/login"},c.a.createElement("div",{onClick:function(){l&&B.signOut()},className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},l?"Hello ".concat(null===l||void 0===l?void 0:l.email):"Hello Guest"),c.a.createElement("span",{className:"header__optionLineTwo"},l?"Sign Out":"Sign In"))),c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Returns"),c.a.createElement("span",{className:"header__optionLineTwo"},"& Orders")),c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Your"),c.a.createElement("span",{className:"header__optionLineTwo"},"Prime")),c.a.createElement(R.b,{to:"/checkout"},c.a.createElement("div",{className:"header__optionBasket"},c.a.createElement("div",{className:"header__basket"},c.a.createElement(x.a,null)),c.a.createElement("span",{className:"header__optionLineTwo header__basketCount"},null===n||void 0===n?void 0:n.length)))))},D=(t(67),t(68),t(45)),L=t.n(D),z=t(8);var G=function(){var e=Object(z.f)(),a=u(),t=Object(m.a)(a,2),n=t[0].basket,l=(t[1],0);return n.forEach((function(e){l+=e.price})),c.a.createElement("div",{className:"subtotal"},c.a.createElement(L.a,{renderText:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Subtotal (",null===n||void 0===n?void 0:n.length," items):",c.a.createElement("strong",null,e)),c.a.createElement("small",{className:"subtotal__gift"},c.a.createElement("input",{type:"checkbox"})," This order contains a gift"))},decimalScale:2,value:l,displayType:"text",thousandSeparator:!0,prefix:"$"}),c.a.createElement("button",{onClick:function(a){return e.push("/payment")}},"Proceed to Checkout"))},H=(t(70),Object(n.forwardRef)((function(e,a){var t=u(),n=Object(m.a)(t,2),l=(n[0].basket,n[1]),r=e.id,i=e.image,s=e.title,o=e.price,d=e.rating;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"checkoutProduct",ref:a},c.a.createElement("img",{className:"checkoutProduct__image",src:i,alt:""}),c.a.createElement("div",{className:"checkoutProduct__info"},c.a.createElement("p",{className:"checkoutProduct__title"},s),c.a.createElement("p",{className:"checkoutProduct__price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,o)),c.a.createElement("div",{className:"checkoutProduct__rating"},Array(d).fill().map((function(e,a){return c.a.createElement("p",null,"\u2b50")}))),c.a.createElement("button",{onClick:function(){l({type:"REMOVE_FROM_BASKET",id:r})}},"Remove from basket"))))}))),U=t(46),K=t.n(U),F=t(47);var M=function(){var e=u(),a=Object(m.a)(e,2),t=a[0].basket;return a[1],c.a.createElement("div",{className:"checkout"},c.a.createElement("div",{className:"checkout__left"},c.a.createElement("img",{src:K.a,alt:"",className:"checkout__ad"}),c.a.createElement("div",null,c.a.createElement("h2",{className:"checkout__title"},"Your shopping Basket"),c.a.createElement(F.a,{leaveAnimation:"fade",duration:500},t.map((function(e){return c.a.createElement(H,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))))),c.a.createElement("div",{className:"checkout__right"},c.a.createElement(G,null)))};t(71);var V=function(){var e=Object(z.f)(),a=Object(n.useState)(""),t=Object(m.a)(a,2),l=t[0],r=t[1],i=Object(n.useState)(""),s=Object(m.a)(i,2),o=s[0],u=s[1];return c.a.createElement("div",{className:"login"},c.a.createElement(R.b,{to:"/"},c.a.createElement("img",{className:"login__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"})),c.a.createElement("div",{className:"login__container"},c.a.createElement("h1",null,"Sign in"),c.a.createElement("form",null,c.a.createElement("h5",null,"E-mail"),c.a.createElement("input",{type:"text",value:l,onChange:function(e){return r(e.target.value)}}),c.a.createElement("h5",null,"Password"),c.a.createElement("input",{type:"password",value:o,onChange:function(e){return u(e.target.value)}}),c.a.createElement("button",{type:"submit",onClick:function(a){a.preventDefault(),B.signInWithEmailAndPassword(l,o).then((function(a){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton"},"Sign In")),c.a.createElement("p",null,"By continuing, you agree to Amazon's FAKE CLONE Conditions of Use and Privacy Notice."),c.a.createElement("button",{onClick:function(a){a.preventDefault(),B.createUserWithEmailAndPassword(l,o).then((function(a){console.log(a),a&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton"},"Create your Amazon Account")))};t(72);var J=function(){var e=u(),a=Object(m.a)(e,2),t=a[0],n=t.basket,l=t.user;return a[1],c.a.createElement("div",{className:"payment"},c.a.createElement("div",{className:"payment__container"},c.a.createElement("h1",null,"Checkout (",c.a.createElement(R.b,{to:"/checkout"},null===n||void 0===n?void 0:n.length," items"),")"),c.a.createElement("div",{className:"payment__section"},c.a.createElement("div",{className:"payment__title"},c.a.createElement("h3",null,"Devilery Adress")),c.a.createElement("div",{className:"payment__address"},c.a.createElement("p",null,null===l||void 0===l?void 0:l.email),c.a.createElement("p",null,"123 React line"),c.a.createElement("p",null,"Los Angelos"))),c.a.createElement("div",{className:"payment__section"},c.a.createElement("div",{className:"payment__title"},c.a.createElement("h3",null,"Review items and delivery")),c.a.createElement("div",{className:"payment__items"},n.map((function(e){return c.a.createElement(H,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),c.a.createElement("div",{className:"payment__section"},c.a.createElement("div",{className:"payment__title"},c.a.createElement("h3",null,"Payment methods")))))};var W=function(){var e=u(),a=Object(m.a)(e,2);Object(i.a)(a[0]);var t=a[1];return Object(n.useEffect)((function(){B.onAuthStateChanged((function(e){t(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),c.a.createElement(R.a,null,c.a.createElement("div",{className:"app"},c.a.createElement(z.c,null,c.a.createElement(z.a,{path:"/login"},c.a.createElement(V,null)),c.a.createElement(z.a,{path:"/checkout"},c.a.createElement(I,null),c.a.createElement(M,null)),c.a.createElement(z.a,{path:"/payment"},c.a.createElement(I,null),c.a.createElement(J,null)),c.a.createElement(z.a,{path:"/"},c.a.createElement(I,null),c.a.createElement(A,null)))))},Y=t(30),$=t(20),Q=function(e,a){switch(a.type){case"ADD_TO_BASKET":return Object($.a)(Object($.a)({},e),{},{basket:[].concat(Object(Y.a)(e.basket),[a.item])});case"REMOVE_FROM_BASKET":var t=e.basket.findIndex((function(e){return e.id===a.id})),n=Object(Y.a)(e.basket);return t>=0?n.splice(t,1):console.warn("Cant remove product (id: ".concat(a.id,") as its not in basket!")),Object($.a)(Object($.a)({},e),{},{basket:n});case"SET_USER":return Object($.a)(Object($.a)({},e),{},{user:a.user});default:return e}};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(o,{initialState:{basket:[],user:null},reducer:Q},c.a.createElement(W,null))),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.dbc4ba12.chunk.js.map