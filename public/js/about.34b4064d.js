(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"07ac":function(t,e,s){var r=s("23e7"),a=s("6f53").values;r({target:"Object",stat:!0},{values:function(t){return a(t)}})},1148:function(t,e,s){"use strict";var r=s("a691"),a=s("1d80");t.exports="".repeat||function(t){var e=String(a(this)),s="",i=r(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(s+=e);return s}},"159b":function(t,e,s){var r=s("da84"),a=s("fdbc"),i=s("17c2"),o=s("9112");for(var n in a){var c=r[n],l=c&&c.prototype;if(l&&l.forEach!==i)try{o(l,"forEach",i)}catch(u){l.forEach=i}}},"159d":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",[s("b-row",{staticClass:"just\n    ify-content-center"},[s("h1",[t._v("Estado de los pedidos")])]),s("b-row",{staticClass:"justify-content-center"},t._l(this.orders,(function(e){return s("b-card",{key:e.index,staticClass:"text-center mt-3 mr-3",attrs:{"bg-variant":t.getColor(e),header:t.getTitle(e),"body-bg-variant":"white","header-class":"card-title text-xl-center"}},[s("b-card-text",[t._v("Pedido del usuario "+t._s(e.user.email))]),s("b-card-text",[t._v("Dirección de envío : "+t._s(e.user.address)+" . "+t._s(e.user.city))]),s("b-card-text",[t._v("Realizado el dia "+t._s(e.created_at))]),e.sent_date?s("b-card-text",[t._v("Enviado el dia "+t._s(e.sent_date))]):t._e(),e.received_date?s("b-card-text",[t._v("Recibido el dia "+t._s(e.received_date))]):t._e(),e.received_date?t._e():s("b-button",{staticClass:"mr-2 ml-2",attrs:{variant:"outline-success"},on:{click:function(s){return t.markAsReceived(e)}}},[t._v(" Marcar como recibido ")]),e.sent_date?t._e():s("b-button",{staticClass:"mr-2 ml-2",attrs:{variant:"outline-danger"},on:{click:function(s){return t.cancelOrder(e)}}},[t._v(" Anular pedido ")])],1)})),1)],1)},a=[],i=s("bc3a"),o=s.n(i),n={name:"Orders",data:function(){return{orders:[]}},created:function(){this.refreshOrders()},computed:{},methods:{refreshOrders:function(){var t=this,e="https://tiendace.mundofido.com/api/v1/orders";o.a.get(e,{headers:{Authorization:"Bearer "+this.$store.state.auth.user.token}}).then((function(e){t.orders=e.data})).catch((function(t){return console.log(t)}))},getColor:function(t){return null==t.sent_date?"danger":null==t.received_date?"warning":"success"},getTitle:function(t){return null==t.sent_date?"Pedido #"+t.id+" - Pendiente de envio":null==t.received_date?"Pedido #"+t.id+" - Enviado":"Pedido #"+t.id+" - Recibido"},markAsReceived:function(t){var e=this,s="https://tiendace.mundofido.com/api/v1/orders";o.a.get(s+"/"+t.id+"/receive",{headers:{Authorization:"Bearer "+this.$store.state.auth.user.token}}).then((function(t){e.orders=t.data,e.refreshOrders()})).catch((function(t){return console.log(t)}))},cancelOrder:function(t){var e=this,s="https://tiendace.mundofido.com/api/v1/orders";o.a.get(s+"/"+t.id+"/cancel",{headers:{Authorization:"Bearer "+this.$store.state.auth.user.token}}).then((function(t){e.orders=t.data,e.refreshOrders()})).catch((function(t){return console.log(t)}))}}},c=n,l=(s("a1c8"),s("2877")),u=Object(l["a"])(c,r,a,!1,null,"0d68a80e",null);e["default"]=u.exports},1733:function(t,e,s){"use strict";var r=s("9149"),a=s.n(r);a.a},"17c2":function(t,e,s){"use strict";var r=s("b727").forEach,a=s("a640"),i=s("ae40"),o=a("forEach"),n=i("forEach");t.exports=o&&n?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"408a":function(t,e,s){var r=s("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},4160:function(t,e,s){"use strict";var r=s("23e7"),a=s("17c2");r({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"4de4":function(t,e,s){"use strict";var r=s("23e7"),a=s("b727").filter,i=s("1dde"),o=s("ae40"),n=i("filter"),c=o("filter");r({target:"Array",proto:!0,forced:!n||!c},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},"6f53":function(t,e,s){var r=s("83ab"),a=s("df75"),i=s("fc6a"),o=s("d1e7").f,n=function(t){return function(e){var s,n=i(e),c=a(n),l=c.length,u=0,d=[];while(l>u)s=c[u++],r&&!o.call(n,s)||d.push(t?[s,n[s]]:n[s]);return d}};t.exports={entries:n(!0),values:n(!1)}},7011:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{staticClass:"p-2"},[s("div",[s("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:"success"},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v(" Añadido a la cesta correctamente "),s("b-progress",{attrs:{variant:"warning",max:t.dismissSecs,value:t.dismissCountDown,height:"4px"}})],1)],1),s("b-card",{staticClass:"overflow-hidden"},[s("b-row",[s("b-col",{attrs:{md:"6"}},[s("b-card-img",{staticClass:"rounded-0",attrs:{src:t.product.image,alt:"Image"}})],1),s("b-col",{attrs:{md:"6"}},[s("b-card-body",{attrs:{title:t.product.name}},[s("b-card-text",[t._v(" "+t._s(t.product.description)+" ")]),s("b-card-text",{staticClass:"alert-info text-xl-center text-dark"},[t._v(" Precio "),s("b-icon-box-arrow-in-right"),s("span",{staticClass:"font-weight-bold"},[t._v(" "+t._s(t.product.price.toFixed(2))+" ")]),t._v(" € ")],1)],1),s("b-button",{staticClass:"mr-2 ml-2",attrs:{variant:"outline-success"},on:{click:function(e){return t.addToCart()}}},[t._v("Añadir a la cesta")])],1)],1)],1)],1)},a=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div")},o=[],n={name:"Product"},c=n,l=s("2877"),u=Object(l["a"])(c,i,o,!1,null,"f58a3f68",null),d=u.exports,m=s("bc3a"),f=s.n(m),h={name:"ProductDetails",components:{Product:d},data:function(){return{product:this.$route.params,dismissSecs:5,dismissCountDown:0,showDismissibleAlert:!1}},methods:{addToCart:function(){this.$store.commit("addToCart",this.product),this.showAlert()},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs},refreshCart:function(){var t=this,e="https://tiendace.mundofido.com/api/v1/cart/myproducts";f.a.get(e,{headers:{Authorization:"Bearer "+this.$store.state.auth.user.token}}).then((function(e){t.$store.commit("refreshCart",e.data),t.products=t.$store.state.cart})).catch((function(t){500==t.response.status&&console.log(t.response)}))}}},p=h,b=Object(l["a"])(p,r,a,!1,null,"d7903db0",null);e["default"]=b.exports},"73cf":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",[s("div",[s("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:t.level},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v(" "+t._s(t.message)+" "),s("b-progress",{attrs:{variant:t.level,max:t.dismissSecs,value:t.dismissCountDown,height:"4px"}})],1)],1),s("b-card",{attrs:{"bg-variant":"light"}},[s("b-form",[s("b-form-group",{attrs:{id:"input-group-2",label:"Nombre Completo","label-for":"input-2"}},[s("b-form-input",{attrs:{id:"input-2",required:"",placeholder:"Nombre"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),s("b-form-group",{attrs:{id:"input-group-1",label:"Correo electrónico:","label-for":"input-1",description:"El correo electrónico debe ser válido, no lo usaremos para enviar correo no deseado."}},[s("b-form-input",{attrs:{id:"input-1",type:"email",required:"",placeholder:"Correo electrónico"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),s("b-form-group",{attrs:{id:"input-group-3",label:"Contraseña","label-for":"input-2"}},[s("b-form-input",{attrs:{id:"input-2",required:"",placeholder:"Contraseña",type:"password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),s("b-form-group",{attrs:{id:"input-group-4",label:"Confirmar contraseña","label-for":"input-2"}},[s("b-form-input",{attrs:{id:"input-4",required:"",placeholder:"Confirmar contraseña",type:"password"},model:{value:t.form.password_confirmation,callback:function(e){t.$set(t.form,"password_confirmation",e)},expression:"form.password_confirmation"}})],1),s("b-button",{staticClass:"btn btn-outline-success btn-block mt-3",attrs:{type:"button",variant:"outline-success"},on:{click:function(e){return t.register()}}},[t._v("Registrarse")])],1)],1)],1)},a=[],i=s("ebd1"),o=s("bc3a"),n=s.n(o),c={name:"Register",data:function(){return{user:new i["a"],form:{email:"",name:"",password:"",password_confirmation:""},level:"warning",show:!0,message:"",dismissSecs:5,dismissCountDown:0,showDismissibleAlert:!1}},methods:{register:function(){var t=this,e="https://tiendace.mundofido.com/api/v1/users/register",s=this.form;s["currentCart"]=this.$store.state.cart,n.a.post(e,s).then((function(e){t.message="Usuario creado correctamente",t.level="success",t.showAlert(),t.$store.commit("emptyCart"),console.log(e.data),t.user.email=s.email,t.user.password=s.password,t.$store.dispatch("auth/login",t.user),t.$store.commit("refreshCart")})).catch((function(e){if(e.response){var s="";for(var r in e.response.data)s+=e.response.data[r][0]+"\n";t.level="warning",t.message=s,t.showAlert()}}))},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs}}},l=c,u=s("2877"),d=Object(u["a"])(l,r,a,!1,null,"0b5e5cce",null);e["default"]=d.exports},"7cb4":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",[s("div",{staticClass:"mt-3"},[s("b-card",{attrs:{"bg-variant":"light"}},[s("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-lg":"3",label:"Confirma la direccion de envío","label-size":"lg","label-class":"font-weight-bold pt-0"}},[s("b-form-group",{attrs:{"label-cols-sm":"3",label:"Dirección:","label-align-sm":"right","label-for":"address"}},[s("b-form-input",{attrs:{id:"address",required:""},model:{value:t.user.address,callback:function(e){t.$set(t.user,"address",e)},expression:"user.address"}})],1),s("b-form-group",{attrs:{"label-cols-sm":"3",label:"Ciudad:","label-align-sm":"right","label-for":"city"}},[s("b-form-input",{attrs:{id:"city",required:""},model:{value:t.user.city,callback:function(e){t.$set(t.user,"city",e)},expression:"user.city"}})],1),s("b-form-group",{attrs:{"label-cols-sm":"3",label:"Codigo postal:","label-align-sm":"right","label-for":"postal_code"}},[s("b-form-input",{attrs:{id:"postal_code",required:""},model:{value:t.user.postal_code,callback:function(e){t.$set(t.user,"postal_code",e)},expression:"user.postal_code"}})],1)],1)],1)],1),s("div",{staticClass:"mt-3"},[s("b-card",{attrs:{"bg-variant":"light"}},[s("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-lg":"3",label:"Selecciona el metodo de envio","label-size":"lg","label-class":"font-weight-bold pt-0"}},[s("b-form-radio-group",{staticClass:"pt-2"},[s("b-form-radio",{attrs:{name:"shipping",value:"2"},model:{value:t.shipping_method,callback:function(e){t.shipping_method=e},expression:"shipping_method"}},[t._v("Correos Urgente +2€ ")]),s("b-form-radio",{attrs:{name:"shipping",value:"0"},model:{value:t.shipping_method,callback:function(e){t.shipping_method=e},expression:"shipping_method"}},[t._v("Correos Normal - Gratis ")]),s("b-form-radio",{attrs:{name:"shipping",value:"3"},model:{value:t.shipping_method,callback:function(e){t.shipping_method=e},expression:"shipping_method"}},[t._v("Mensajería +3€")])],1)],1)],1)],1),s("div",{staticClass:"mt-3"},[s("b-card",{attrs:{"bg-variant":"light"}},[s("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-lg":"3",label:"Selecciona el metodo de pago","label-size":"lg","label-class":"font-weight-bold pt-0"}},[s("b-form-radio-group",{staticClass:"pt-2"},[s("b-form-radio",{attrs:{name:"payment",value:"1"},model:{value:t.payment_method,callback:function(e){t.payment_method=e},expression:"payment_method"}},[t._v("Contra reembolso")]),s("b-form-radio",{attrs:{disabled:"",name:"payment",value:"0"},model:{value:t.payment_method,callback:function(e){t.payment_method=e},expression:"payment_method"}},[t._v("Paypal")]),s("b-form-radio",{attrs:{disabled:"",name:"payment",value:"3"},model:{value:t.payment_method,callback:function(e){t.payment_method=e},expression:"payment_method"}},[t._v("Tarjeta de crédito ")])],1)],1)],1)],1),s("div",{staticClass:"mt-3"},[s("b-card",{staticClass:"mt-3",attrs:{"bg-variant":"light"}},[s("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-lg":"3",label:"Total a pagar","label-size":"lg","label-class":"font-weight-bold pt-0"}},[t._v(" Productos : "+t._s(this.totalPrice())+" , Envío "+t._s(this.shipping())+" "),s("h2",[t._v("Total: "+t._s(parseFloat(this.totalPrice())+parseFloat(this.shipping()))+" €")])])],1)],1),s("div",[s("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:"error"},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v(" "+t._s(t.message)+" "),s("b-progress",{attrs:{variant:"warning",max:t.dismissSecs,value:t.dismissCountDown,height:"4px"}})],1)],1),this.$store.state.auth.status.loggedIn?s("b-button",{staticClass:"btn btn-outline-success btn-block mt-3",attrs:{type:"button",variant:"outline-success"},on:{click:function(e){return t.checkout()}}},[t._v("Confirmar compra ")]):s("b-button",{staticClass:"btn btn-outline-success btn-block mt-3",attrs:{to:{name:"Register"},type:"button",variant:"outline-success"}},[t._v("Registrate para finalizar la compra ")])],1)},a=[],i=(s("13d5"),s("b0c0"),s("b680"),s("07ac"),s("ebd1")),o=s("bc3a"),n=s.n(o),c=s("b789"),l={name:"Checkout",components:{Cart:c["default"]},data:function(){return{user:new i["a"],products:[],shipping_method:"",payment_method:"",dismissSecs:5,dismissCountDown:0,showDismissibleAlert:!1,message:""}},created:function(){this.refreshProfile(),this.products=this.$store.state.cart},methods:{refreshProfile:function(){var t=this,e="https://tiendace.mundofido.com/api/v1/users/myuser";n.a.get(e,{headers:{Authorization:"Bearer "+this.$store.state.auth.user.token}}).then((function(e){t.user.email=e.data.user.email,t.user.name=e.data.user.name,t.user.address=e.data.user.address,t.user.city=e.data.user.city,t.user.postal_code=e.data.user.postal_code,t.user.profile_picture=e.data.user.picture}))},totalPrice:function(){var t=this.products.reduce((function(t,e){return t+Object.values(e)[2]}),0);return t.toFixed(2)},shipping:function(){return isNaN(this.shipping_method)||null==this.shipping_method||""===this.shipping_method?0:parseFloat(this.shipping_method).toFixed(2)},checkout:function(){var t=this;if(isNaN(this.shipping_method)||null==this.shipping_method||""===this.shipping_method)this.message="Debe seleccionar un método de envío",this.showAlert();else if(isNaN(this.payment_method)||null==this.payment_method||""===this.payment_method)this.message="Debe seleccionar un método de pago",this.showAlert();else{var e="https://tiendace.mundofido.com/api/v1/orders/create",s={payment_method:this.payment_method,shipping_method:this.shipping_method};n.a.post(e,s,{headers:{Authorization:"Bearer "+this.$store.state.auth.user.token}}).then((function(e){console.log(e),t.showMsgOk()}))}},showMsgOk:function(){var t=this;this.message="Compra realizada correctamente, volviendo a la página principal",this.showAlert(),this.$store.commit("emptyCart"),this.$store.commit("refreshCart"),setTimeout((function(){t.$router.push("/")}),5e3)},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs}}},u=l,d=s("2877"),m=Object(d["a"])(u,r,a,!1,null,"fde4bd70",null);e["default"]=m.exports},"860c":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",[s("b-row",{staticClass:"justify-content-center"},[s("h1",[t._v("Administración de pedidos")])]),s("b-row",{staticClass:"justify-content-center"},t._l(this.orders,(function(e){return s("b-card",{key:e.index,staticClass:"text-center mt-3 mr-3",attrs:{"bg-variant":t.getColor(e),header:t.getTitle(e),"body-bg-variant":"white","header-class":"card-title text-xl-center"}},[s("b-card-text",[t._v("Pedido del usuario "+t._s(e.user.email))]),s("b-card-text",[t._v("Realizado el dia "+t._s(e.created_at))]),e.sent_date?s("b-card-text",[t._v("Enviado el dia "+t._s(e.sent_date))]):t._e(),e.received_date?s("b-card-text",[t._v("Recibido el dia "+t._s(e.received_date))]):t._e(),e.sent_date?t._e():s("b-button",{staticClass:"mr-2 ml-2",attrs:{variant:"outline-success"},on:{click:function(s){return t.markAsSent(e)}}},[t._v(" Marcar como enviado ")]),e.sent_date?t._e():s("b-button",{staticClass:"mr-2 ml-2",attrs:{variant:"outline-danger"},on:{click:function(s){return t.cancelOrder(e)}}},[t._v(" Anular pedido ")])],1)})),1)],1)},a=[],i=s("bc3a"),o=s.n(i),n={name:"Orders",data:function(){return{orders:[]}},created:function(){this.refreshOrders()},computed:{},methods:{refreshOrders:function(){var t=this,e="https://tiendace.mundofido.com/api/v1/orders";o.a.get(e,{headers:{Authorization:"Bearer "+this.$store.state.auth.user.token}}).then((function(e){t.orders=e.data})).catch((function(t){return console.log(t)}))},getColor:function(t){return null==t.sent_date?"danger":null==t.received_date?"warning":"success"},getTitle:function(t){return null==t.sent_date?"Pedido #"+t.id+" - Pendiente de envio":null==t.received_date?"Pedido #"+t.id+" - Enviado":"Pedido #"+t.id+" - Recibido"},markAsSent:function(t){var e=this,s="https://tiendace.mundofido.com/api/v1/orders";o.a.get(s+"/"+t.id+"/send",{headers:{Authorization:"Bearer "+this.$store.state.auth.user.token}}).then((function(t){e.orders=t.data,e.refreshOrders()})).catch((function(t){return console.log(t)}))},cancelOrder:function(t){var e=this,s="https://tiendace.mundofido.com/api/v1/orders";o.a.get(s+"/"+t.id+"/cancel",{headers:{Authorization:"Bearer "+this.$store.state.auth.user.token}}).then((function(t){e.orders=t.data,e.refreshOrders()})).catch((function(t){return console.log(t)}))}}},c=n,l=(s("1733"),s("2877")),u=Object(l["a"])(c,r,a,!1,null,"0c92b450",null);e["default"]=u.exports},"8ac3":function(t,e,s){},9149:function(t,e,s){},a1c8:function(t,e,s){"use strict";var r=s("8ac3"),a=s.n(r);a.a},a20f:function(t,e,s){},b0c0:function(t,e,s){var r=s("83ab"),a=s("9bf2").f,i=Function.prototype,o=i.toString,n=/^\s*function ([^ (]*)/,c="name";r&&!(c in i)&&a(i,c,{configurable:!0,get:function(){try{return o.call(this).match(n)[1]}catch(t){return""}}})},b680:function(t,e,s){"use strict";var r=s("23e7"),a=s("a691"),i=s("408a"),o=s("1148"),n=s("d039"),c=1..toFixed,l=Math.floor,u=function(t,e,s){return 0===e?s:e%2===1?u(t,e-1,s*t):u(t*t,e/2,s)},d=function(t){var e=0,s=t;while(s>=4096)e+=12,s/=4096;while(s>=2)e+=1,s/=2;return e},m=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!n((function(){c.call({})}));r({target:"Number",proto:!0,forced:m},{toFixed:function(t){var e,s,r,n,c=i(this),m=a(t),f=[0,0,0,0,0,0],h="",p="0",b=function(t,e){var s=-1,r=e;while(++s<6)r+=t*f[s],f[s]=r%1e7,r=l(r/1e7)},g=function(t){var e=6,s=0;while(--e>=0)s+=f[e],f[e]=l(s/t),s=s%t*1e7},v=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==f[t]){var s=String(f[t]);e=""===e?s:e+o.call("0",7-s.length)+s}return e};if(m<0||m>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(h="-",c=-c),c>1e-21)if(e=d(c*u(2,69,1))-69,s=e<0?c*u(2,-e,1):c/u(2,e,1),s*=4503599627370496,e=52-e,e>0){b(0,s),r=m;while(r>=7)b(1e7,0),r-=7;b(u(10,r,1),0),r=e-1;while(r>=23)g(1<<23),r-=23;g(1<<r),b(1,1),g(2),p=v()}else b(0,s),b(1<<-e,0),p=v()+o.call("0",m);return m>0?(n=p.length,p=h+(n<=m?"0."+o.call("0",m-n)+p:p.slice(0,n-m)+"."+p.slice(n-m))):p=h+p,p}})},b727:function(t,e,s){var r=s("0366"),a=s("44ad"),i=s("7b0b"),o=s("50c4"),n=s("65f0"),c=[].push,l=function(t){var e=1==t,s=2==t,l=3==t,u=4==t,d=6==t,m=5==t||d;return function(f,h,p,b){for(var g,v,_=i(f),C=a(_),w=r(h,p,3),x=o(C.length),y=0,k=b||n,$=e?k(f,x):s?k(f,0):void 0;x>y;y++)if((m||y in C)&&(g=C[y],v=w(g,y,_),t))if(e)$[y]=v;else if(v)switch(t){case 3:return!0;case 5:return g;case 6:return y;case 2:c.call($,g)}else if(u)return!1;return d?-1:l||u?u:$}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},b789:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",[t._l(t.groupedProducts,(function(e){return s("b-card",{key:e[0].index,staticClass:"overflow-hidden mt-1 border rounded-sm ",attrs:{title:e[0].name,"img-alt":"Image","img-top":"",tag:"article"}},[s("b-row",{attrs:{"no-gutters":""}},["mobile"==t.mediaSize?s("b-row",[s("b-card-img",{staticClass:"rounded-0 mb-2",attrs:{src:e[0].image,alt:"Image"}})],1):s("b-col",{staticClass:"col-md-4",attrs:{"align-self":"center"}},[s("b-card-img",{staticClass:"rounded-0",attrs:{src:e[0].image,alt:"Image"}})],1),s("b-col",{attrs:{"align-self":"center"}},[t._v(" Cantidad "),s("b-icon-dash-circle",{staticClass:"nosel ml-1",attrs:{role:"button"},on:{click:function(s){return t.removeFromCart(e[0])}}}),t._v(" "+t._s(e.length)+" "),s("b-icon-plus-circle",{staticClass:"nosel",attrs:{role:"button"},on:{click:function(s){return t.addToCart(e[0])}}})],1),s("b-col",{attrs:{"align-self":"center"}},[t._v(" Precio "+t._s(e[0].price.toFixed(2))+" ")]),s("b-col",{attrs:{"align-self":"center"}},[s("b-button",{staticClass:"mr-2 ml-2",attrs:{variant:"outline-success",to:{name:"ProductDetails",params:e[0]}}},[t._v(" Ver Detalles ")])],1),s("b-col",{attrs:{"align-self":"center"}},[s("b-button",{staticClass:"mr-2 ml-2 ",attrs:{variant:"outline-danger"},on:{click:function(s){return t.emptyCart(e[0])}}},[t._v(" Eliminar ")])],1),s("b-col",{attrs:{"align-self":"center"}},[t._v(" Total "+t._s(e.map((function(t){return t.price})).reduce((function(t,e){return e+t})).toFixed(2))+" ")])],1)],1)})),s("b-card",{staticClass:"overflow-hidden mt-1 border rounded-sm ",attrs:{title:"Total de la compra",tag:"article"}},[t._v(" Total "+t._s(this.totalPrice)+" ")]),this.$store.state.auth.status.loggedIn?s("b-button",{staticClass:"btn btn-outline-success btn-block mt-3",attrs:{to:{name:"Checkout"},type:"button",variant:"outline-success"}},[t._v("Confirmar compra ")]):s("b-button",{staticClass:"btn btn-outline-success btn-block mt-3",attrs:{to:{name:"Register"},type:"button",variant:"outline-success"}},[t._v("Registrate para finalizar la compra ")])],2)},a=[],i=(s("4de4"),s("4160"),s("13d5"),s("b680"),s("07ac"),s("159b"),{name:"Cart",data:function(){return{products:[],groupedProducts:[],category:this.$route.params}},created:function(){this.products=this.$store.state.cart,this.groupedProducts=_.groupBy(this.products,"id")},computed:{mediaSize:function(){return this.$mq},totalPrice:function(){var t=this.products.reduce((function(t,e){return t+Object.values(e)[2]}),0);return t.toFixed(2)},productsPerRow:function(){return this.products.reduce((function(t,e,s){return s%5===0&&t.push([]),t[t.length-1].push(e),t}),[])}},methods:{removeFromCart:function(t){this.$store.commit("removeFromCart",t),this.products=this.$store.state.cart,this.groupedProducts=_.groupBy(this.products,"id")},addToCart:function(t){this.$store.commit("addToCart",t),this.products=this.$store.state.cart,this.groupedProducts=_.groupBy(this.products,"id")},emptyCart:function(t){var e=this;this.$bvModal.msgBoxConfirm("¿Desea eliminar todos los productos del carro?.",{title:"Por favor confirme la eliminación",size:"sm",buttonSize:"sm",okVariant:"danger",okTitle:"SI",cancelTitle:"NO",footerClass:"p-2",hideHeaderClose:!1,centered:!0}).then((function(s){s&&e.products.filter((function(e){return e.id==t.id})).forEach((function(t){return e.removeFromCart(t)}))})).catch((function(t){console.log(t)}))}}}),o=i,n=(s("ef5d"),s("2877")),c=Object(n["a"])(o,r,a,!1,null,"083feb4e",null);e["default"]=c.exports},c66d:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",[s("div",[s("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:t.level},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v(" "+t._s(t.message)+" "),s("b-progress",{attrs:{variant:t.level,max:t.dismissSecs,value:t.dismissCountDown,height:"4px"}})],1),s("b-card",{staticClass:"mb-3",attrs:{"bg-variant":"light"}},[s("b-img",{staticClass:"mb-3",staticStyle:{"max-height":"200px","max-width":"200px"},attrs:{src:t.getProfilePic(),thumbnail:"",center:"",fluid:"",rounded:"circle"}}),s("b-form-group",{attrs:{label:"Imagen de perfil","label-for":"form-image","label-cols-lg":"2"}},[s("b-input-group",[s("b-input-group-prepend",{attrs:{"is-text":""}},[s("b-icon",{attrs:{icon:"image-fill"}})],1),s("b-form-file",{attrs:{id:"profile_picture",placeholder:"Elige un fichero o arrástralo aquí",accept:"image/*","browse-text":"Seleccionar",capture:""},model:{value:t.profilepic,callback:function(e){t.profilepic=e},expression:"profilepic"}})],1)],1)],1),s("b-card",{staticClass:"mb-3",attrs:{"bg-variant":"light"}},[s("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-lg":"3",label:"Datos del usuario","label-size":"lg","label-class":"font-weight-bold pt-0"}},[s("b-form-group",{attrs:{"label-cols-sm":"3",label:"Nombre:","label-align-sm":"right","label-for":"name"}},[s("b-form-input",{attrs:{id:"name"},model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}})],1),s("b-form-group",{attrs:{"label-cols-sm":"3",label:"Email:","label-align-sm":"right","label-for":"email"}},[s("b-form-input",{attrs:{id:"email"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1)],1)],1)],1),s("div",[s("b-card",{attrs:{"bg-variant":"light"}},[s("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-lg":"3",label:"Direccion de envío","label-size":"lg","label-class":"font-weight-bold pt-0"}},[s("b-form-group",{attrs:{"label-cols-sm":"3",label:"Dirección:","label-align-sm":"right","label-for":"address"}},[s("b-form-input",{attrs:{id:"address"},model:{value:t.user.address,callback:function(e){t.$set(t.user,"address",e)},expression:"user.address"}})],1),s("b-form-group",{attrs:{"label-cols-sm":"3",label:"Ciudad:","label-align-sm":"right","label-for":"city"}},[s("b-form-input",{attrs:{id:"city"},model:{value:t.user.city,callback:function(e){t.$set(t.user,"city",e)},expression:"user.city"}})],1),s("b-form-group",{attrs:{"label-cols-sm":"3",label:"Codigo postal:","label-align-sm":"right","label-for":"postal_code"}},[s("b-form-input",{attrs:{id:"postal_code"},model:{value:t.user.postal_code,callback:function(e){t.$set(t.user,"postal_code",e)},expression:"user.postal_code"}})],1)],1)],1)],1),s("b-row",{staticClass:"mt-3",attrs:{"align-h":"center"}},[s("b-button",{staticClass:"btn btn-outline-success btn-block",attrs:{type:"button",variant:"outline-success"},on:{click:t.updateUser}},[t._v("Actualizar datos")])],1)],1)},a=[],i=(s("b0c0"),s("bc3a")),o=s.n(i),n=s("ebd1"),c={name:"Profile.vue",data:function(){return{user:new n["a"],profilepic:void 0,message:"",dismissSecs:5,dismissCountDown:0,showDismissibleAlert:!1,level:"primary"}},created:function(){this.refreshProfile()},methods:{refreshProfile:function(){var t=this,e="https://tiendace.mundofido.com/api/v1/users/myuser";o.a.get(e,{headers:{Authorization:"Bearer "+this.$store.state.auth.user.token}}).then((function(e){console.log(e.data.user.email),t.user.email=e.data.user.email,t.user.name=e.data.user.name,t.user.address=e.data.user.address,t.user.city=e.data.user.city,t.user.postal_code=e.data.user.postal_code,t.user.profile_picture=e.data.user.picture}))},updateUser:function(){var t=this,e="https://tiendace.mundofido.com/api/v1/users/update",s=new FormData;s.append("name",this.user.name),s.append("address",this.user.address),s.append("city",this.user.city),s.append("postal_code",this.user.postal_code),s.append("profile_picture",this.profilepic),o.a.post(e,s,{headers:{Authorization:"Bearer "+this.$store.state.auth.user.token}}).then((function(e){console.log(e),t.refreshProfile(),t.message="Datos actualizados correctamente",t.showAlert()})).catch((function(e){console.log(e),t.message="Error actualizando datos "+e,t.showAlert()}))},getProfilePic:function(){return""==this.user.profile_picture||null==this.user.profile_picture?"https://picsum.photos/id/20/250/250":"img/users/"+this.user.profile_picture},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs}}},l=c,u=s("2877"),d=Object(u["a"])(l,r,a,!1,null,"56789a95",null);e["default"]=d.exports},ef5d:function(t,e,s){"use strict";var r=s("a20f"),a=s.n(r);a.a},f820:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about"},[s("h1",[t._v("This is an about page")])])}],i=s("2877"),o={},n=Object(i["a"])(o,r,a,!1,null,null,null);e["default"]=n.exports},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=about.34b4064d.js.map