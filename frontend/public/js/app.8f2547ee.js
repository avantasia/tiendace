(function(t){function e(e){for(var n,a,i=e[0],u=e[1],c=e[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,a=1;a<r.length;a++){var i=r[a];0!==o[i]&&(n=!1)}n&&(s.splice(e--,1),t=u(u.s=r[0]))}return t}var n={},a={app:0},o={app:0},s=[];function i(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"3e793d96"}[t]+".js"}function u(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(t){var e=[],r={about:1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise((function(e,r){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"54017241"}[t]+".css",o=u.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===o))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],l=c.getAttribute("data-href");if(l===n||l===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[t],p.parentNode.removeChild(p),r(s)},p.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){a[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(t);var d=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(p);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}o[t]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=n,u.d=function(t,e,r){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(r,n,function(e){return t[e]}.bind(null,n));return r},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var p=l;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"1acd":function(t,e,r){},"513f":function(t,e,r){"use strict";var n=r("1acd"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("NavBar"),r("router-view",{key:t.$route.fullPath})],1)},o=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-navbar",{attrs:{toggleable:"lg"}},[r("router-link",{attrs:{to:"/"}},[r("b-navbar-brand",[t._v("TiendaEspecial")])],1),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{to:"/"}},[t._v("Inicio")]),r("b-nav-item",{attrs:{to:{path:"/categories/1"}}},[t._v(" Especias ")]),r("b-nav-item",{attrs:{to:{path:"/categories/2"}}},[t._v(" Frescos ")]),r("b-nav-item",{attrs:{to:{path:"/categories/3"}}},[t._v(" Salsas ")])],1),r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-form",[r("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"md",type:"search",placeholder:"Buscar"},on:{keyup:t.search},model:{value:t.term,callback:function(e){t.term=e},expression:"term"}})],1),t.loggedIn?t._e():r("b-nav-form",{attrs:{name:"loginform"}},[r("b-input-group",[r("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{prepend:"@"}},[r("b-input",{attrs:{id:"inline-form-input-username",placeholder:"Correo"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1),r("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{type:"password",placeholder:"Clave"},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}})],1),r("b-button",{staticClass:"mb-2 mr-sm-2 mb-sm-0",on:{click:t.login}},[t._v(" Iniciar sesión ")]),r("b-button",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{to:{name:"Register"}}},[t._v(" Registro ")])],1),r("b-button",{staticClass:"btn btn-outline-success my-2 my-sm-0",attrs:{to:{name:"Cart"},size:"md",variant:"light",href:"#"}},[t._v("Cesta 🛒 "),r("b-badge",{attrs:{variant:"primary"}},[t._v(t._s(0==Object.keys(this.$store.state.cart).length?"":Object.keys(this.$store.state.cart).length))])],1),t.loggedIn?r("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[r("em",[t._v("Usuario")])]},proxy:!0}],null,!1,3898925750)},[r("b-dropdown-item",{on:{click:t.profile}},[t._v("Perfil")]),r("b-dropdown-item",{attrs:{to:{name:"Orders"}}},[t._v("Pedidos")]),this.$store.state.userIsAdmin?r("b-dropdown-item",{attrs:{to:{name:"AdminOrders"}}},[t._v("Administracion")]):t._e(),r("b-dropdown-item",{on:{click:t.logout}},[t._v("Cerrar sesión")])],1):t._e()],1)],1)],1),r("div",[r("b-alert",{attrs:{dismissible:"",variant:"warning"},model:{value:t.showAlertUserPass,callback:function(e){t.showAlertUserPass=e},expression:"showAlertUserPass"}},[t._v(" Usuario o contraseña incorrecta: "+t._s(t.UserPassError)+"} ")])],1)],1)},i=[],u=(r("d3b7"),r("25f0"),r("ebd1")),c=r("bc3a"),l=r.n(c),d={name:"NavBar",computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},data:function(){return{user:new u["a"]("",""),loading:!1,message:"",showAlertUserPass:!1,UserPassError:"",term:"",options:{keys:["name","description"]}}},created:function(){this.loggedIn&&this.$router.push("/")},methods:{prueba:function(){console.log(this.$store.state.userIsAdmin)},login:function(){var t=this;this.loading=!0,this.$validator.validateAll().then((function(e){e?t.user.email&&t.user.password&&t.$store.dispatch("auth/login",t.user).then((function(){t.checkAdmin(),"/"!=t.$router.currentRoute.path&&t.$router.push("/")}),(function(e){t.loading=!1,t.message=e.response&&e.response.data||e.message||e.toString(),console.log(t.message),t.showAlertUserPass=!0,t.UserPassError=t.message.message})):t.loading=!1}))},checkAdmin:function(){var t=this,e=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_HOST+"/api/v1/users/";l.a.get(e+"isadmin",{headers:{Authorization:"Bearer "+this.$store.state.auth.user.token}}).then((function(e){return t.$store.commit("setAdmin",e.data.admin)}))},logout:function(){this.$store.dispatch("auth/logout")},profile:function(){var t=this,e=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_HOST+"/api/v1/users/";l.a.get(e+"profile",{headers:{Authorization:"Bearer "+this.$store.state.auth.user.token}}).then((function(e){t.$router.push({path:"/profile",params:{user:e.data.user}})}))},cart:function(){},search:function(){var t=this;null!=this.term&&""!=this.term&&this.$search(this.term,this.$store.state.products,this.options).then((function(e){t.$store.commit("setVisibleProducts",e)}))}}},p=d,m=r("2877"),f=Object(m["a"])(p,s,i,!1,null,"e4f98820",null),h=f.exports,g={name:"App",components:{NavBar:h}},b=g,v=(r("5c0b"),Object(m["a"])(b,a,o,!1,null,null,null)),_=v.exports,P=r("9483");Object(P["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var y=r("8c4f"),w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{staticClass:"p-2",attrs:{fluid:""}},[r("b-row",[r("b-carousel",{staticClass:"mb-4 mx-auto imagenPortada  ",staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab","img-width":"1024","img-height":"480","no-animation":""}},[r("b-carousel-slide",{staticClass:"imagenPortada",attrs:{caption:"Especial comida internacional",text:"Viaja por el mundo a través de sus sabores","img-src":"img/zahrin-lukman-VSNoQdimlQQ-unsplash.jpg"}}),r("b-carousel-slide",{staticClass:"imagenPortada",attrs:{caption:"Especias especiales",text:"Especias y condimentos de importación","img-src":"img/hue12-photography-8rTwokBwz1w-unsplash.jpg"}}),r("b-carousel-slide",{staticClass:"imagenPortada",attrs:{caption:"Especial herramientas para artesanos",text:"Fabrica tus propios quesos y tu propia cerveza","img-src":"img/annie-spratt-w5xpOP5z1Uw-unsplash.jpg"}})],1)],1),r("ProductList")],1)},A=[],O=r("96fc"),E={name:"Home",data:function(){return{products:[]}},created:function(){},methods:{},components:{ProductList:O["default"],NavBar:h}},k=E,S=(r("cccb"),Object(m["a"])(k,w,A,!1,null,null,null)),C=S.exports,j=r("5f5b"),I=r("b1e0"),N=(r("f9e3"),r("2dd8"),r("7bb1"));n["default"].use(j["a"]),n["default"].use(I["a"]),n["default"].use(N["a"]),n["default"].use(y["a"]);var x=[{path:"/",name:"Home",component:C},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/productdetails",name:"ProductDetails",component:function(){return r.e("about").then(r.bind(null,"7011"))}},{path:"/productlist",name:"ProductList",component:function(){return r.e("about").then(r.bind(null,"96fc"))}},{path:"/categories/:category",name:"Categories",component:function(){return r.e("about").then(r.bind(null,"96fc"))}},{path:"/cart",name:"Cart",component:function(){return r.e("about").then(r.bind(null,"b789"))}},{path:"/profile",name:"Profile",component:function(){return r.e("about").then(r.bind(null,"c66d"))}},{path:"/checkout",name:"Checkout",component:function(){return r.e("about").then(r.bind(null,"7cb4"))}},{path:"/register",name:"Register",component:function(){return r.e("about").then(r.bind(null,"73cf"))}},{path:"/admin/orders",name:"AdminOrders",component:function(){return r.e("about").then(r.bind(null,"860c"))}},{path:"/orders",name:"Orders",component:function(){return r.e("about").then(r.bind(null,"159d"))}}],U=new y["a"]({routes:x}),$=U,B=(r("c975"),r("a434"),r("2f62")),T=r("d4ec"),V=r("bee2"),L=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_HOST+"/api/v1/users/",R=function(){function t(){Object(T["a"])(this,t)}return Object(V["a"])(t,[{key:"login",value:function(t){return l.a.post(L+"login",{email:t.email,password:t.password}).then((function(t){return t.data.accessToken&&localStorage.setItem("user",JSON.stringify(t.data)),t.data}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(t){return l.a.post(L+"register",{username:t.username,email:t.email,password:t.password})}}]),t}(),D=new R,z=JSON.parse(localStorage.getItem("user")),H=z?{status:{loggedIn:!0},user:z}:{status:{loggedIn:!1},user:null},F={namespaced:!0,state:H,actions:{login:function(t,e){var r=t.commit;return D.login(e).then((function(t){return r("loginSuccess",t),Promise.resolve(t)}),(function(t){return r("loginFailure"),Promise.reject(t)}))},logout:function(t){var e=t.commit;D.logout(),e("logout"),this.commit("emptyCart")},register:function(t,e){var r=t.commit;return D.register(e).then((function(t){return r("registerSuccess"),Promise.resolve(t.data)}),(function(t){return r("registerFailure"),Promise.reject(t)}))}},mutations:{loginSuccess:function(t,e){t.status.loggedIn=!0,t.user=e,this.commit("refreshCart")},loginFailure:function(t){t.status.loggedIn=!1,t.user=null},logout:function(t){t.status.loggedIn=!1,t.user=null},registerSuccess:function(t){t.status.loggedIn=!1},registerFailure:function(t){t.status.loggedIn=!1}}},q=r("bfa9");n["default"].use(B["a"]);var J=new B["a"].Store({state:{cart:[],userIsAdmin:!1,products:[],visibleProducts:[]},mutations:{setProducts:function(t,e){this.state.products=e,this.state.visibleProducts=e},setVisibleProducts:function(t,e){this.state.visibleProducts=e},addToCart:function(t,e){var r=this;if(this.state.cart.push(e),this.state.auth.status.loggedIn){var n=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_HOST+"/api/v1/cart/addtocart";console.log(e),l.a.post(n,{id:e.id},{headers:{Authorization:"Bearer "+this.state.auth.user.token}}).then((function(t){console.log(t.data),r.commit("refreshCart")}))}},addToCartNoRefresh:function(t,e){if(this.state.cart.push(e),this.state.auth.status.loggedIn){var r=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_HOST+"/api/v1/cart/addtocart";console.log(e),l.a.post(r,{id:e.id},{headers:{Authorization:"Bearer "+this.state.auth.user.token}}).then((function(t){console.log(t.data)}))}},refreshCart:function(){var t=this,e=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_HOST+"/api/v1/cart/myproducts";l.a.get(e,{headers:{Authorization:"Bearer "+this.state.auth.user.token}}).then((function(e){t.state.cart=e.data}))},persistCart:function(){this.state.cart.each((function(t){this.addToCart("addToCartNoRefresh",t)}))},removeFromCart:function(t,e){var r=this;if(console.log(e),this.state.cart.splice(this.state.cart.indexOf(e),1),this.state.auth.status.loggedIn){var n=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_HOST+"/api/v1/cart/removefromcart";console.log(e),l.a.post(n,{id:e.id},{headers:{Authorization:"Bearer "+this.state.auth.user.token}}).then((function(t){r.commit("refreshCart")}))}},emptyCart:function(){this.state.cart=[]},setAdmin:function(t,e){this.state.userIsAdmin=e}},actions:{},modules:{auth:F},plugins:[(new q["a"]).plugin]}),M=r("9955"),Q=r.n(M),K=r("2ef0"),G=r.n(K),W=r("dc96"),X=r.n(W),Y=r("660e");n["default"].use(X.a),n["default"].use(Q.a,{lodash:G.a}),n["default"].use(Y["a"],{breakpoints:{mobile:450,tablet:900,laptop:1250,desktop:1/0}}),n["default"].config.productionTip=!1,new n["default"]({router:$,store:J,render:function(t){return t(_)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},"5ced":function(t,e,r){},"96fc":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{fluid:""}},[r("b-row",t._l(t.productsPerRow,(function(e){return r("b-card-group",{key:t.products.index,staticClass:"mx-auto mb-2 ",attrs:{deck:""}},t._l(e,(function(e){return r("b-card",{key:e.index,staticStyle:{"max-width":"20rem"},attrs:{title:e.name,"img-src":e.image,"img-alt":"Image","img-top":"",tag:"article"}},[r("b-card-text",[t._v(" "+t._s(e.description)+". ")]),r("b-button",{staticClass:"mr-2 ml-2",attrs:{variant:"outline-success",to:{name:"ProductDetails",params:e}}},[t._v(" Ver detalles ")])],1)})),1)})),1)],1)},a=[],o=(r("13d5"),r("f2e8"),r("bc3a")),s=r.n(o),i={name:"ProductList",data:function(){return{products:this.$store.state.products,category:this.$route.params}},created:function(){var t,e=this;t=null==this.category.category?Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_HOST+"/api/v1/products/":Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_HOST+"/api/v1/categories/"+this.category.category+"/products",s.a.get(t).then((function(t){e.$store.commit("setProducts",t.data)})).catch((function(t){console.error(err.message)}))},computed:{productsPerRow:function(){return this.$store.state.visibleProducts.reduce((function(t,e,r){return r%5===0&&t.push([]),t[t.length-1].push(e),t}),[])}},methods:{}},u=i,c=(r("513f"),r("2877")),l=Object(c["a"])(u,n,a,!1,null,"6b32bb4e",null);e["default"]=l.exports},"9c0c":function(t,e,r){},cccb:function(t,e,r){"use strict";var n=r("5ced"),a=r.n(n);a.a},ebd1:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r("d4ec"),a=r("ade3"),o=function t(e,r){Object(n["a"])(this,t),Object(a["a"])(this,"address",""),Object(a["a"])(this,"city",""),Object(a["a"])(this,"postal_code",""),Object(a["a"])(this,"profile_picture",""),this.email=e,this.password=r}}});
//# sourceMappingURL=app.8f2547ee.js.map