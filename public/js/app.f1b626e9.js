(function(t){function a(a){for(var s,o,n=a[0],c=a[1],l=a[2],d=0,m=[];d<n.length;d++)o=n[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(a);while(m.length)m.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,o=1;o<e.length;o++){var c=e[o];0!==i[c]&&(s=!1)}s&&(r.splice(a--,1),t=n(n.s=e[0]))}return t}var s={},i={app:0},r=[];function o(t){return n.p+"js/"+({about:"about"}[t]||t)+"."+{about:"159f6455"}[t]+".js"}function n(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.e=function(t){var a=[],e=i[t];if(0!==e)if(e)a.push(e[2]);else{var s=new Promise((function(a,s){e=i[t]=[a,s]}));a.push(e[2]=s);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.src=o(t);var l=new Error;r=function(a){c.onerror=c.onload=null,clearTimeout(d);var e=i[t];if(0!==e){if(e){var s=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",l.name="ChunkLoadError",l.type=s,l.request=r,e[1](l)}i[t]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(a)},n.m=t,n.c=s,n.d=function(t,a,e){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)n.d(e,s,function(a){return t[a]}.bind(null,s));return e},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/",n.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=a,c=c.slice();for(var d=0;d<c.length;d++)a(c[d]);var u=l;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var s=e("85ec"),i=e.n(s);i.a},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},r=[],o=(e("034f"),e("2877")),n={},c=Object(o["a"])(n,i,r,!1,null,null,null),l=c.exports,d=(e("d3b7"),e("8c4f")),u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{staticClass:"navbar navbar-expand-lg bg-secondary text-uppercase fixed-top",attrs:{id:"mainNav"}},[e("div",{staticClass:"container"},[e("a",{staticClass:"navbar-brand js-scroll-trigger",attrs:{href:"#"}},[t._v("Remember")]),t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[t._m(1),t._m(2),t._m(3),0!=t.contador?e("li",{staticClass:"nav-item mx-0 mx-lg-1"},[e("a",{staticClass:"nav-link left py-3 px-0 px-lg-3 rounded js-scroll-trigger",attrs:{"data-toggle":"modal","data-target":"#compra"}},[t._v("Buy "),e("span",{staticClass:"badge badge-pill badge-danger"},[t._v(t._s(t.contador))])])]):t._e()])])])]),t._m(4),e("section",{staticClass:"page-section portfolio",attrs:{id:"portfolio"}},[e("div",{staticClass:"container"},[e("h2",{staticClass:"page-section-heading text-center text-uppercase text-secondary mb-0"},[t._v("Catalogo de Ventas")]),t._m(5),e("div",{staticClass:"row"},t._l(t.productos,(function(a){return e("div",{key:a.id,staticClass:"col-md-6 col-lg-4"},[e("div",{staticClass:"portfolio-item mx-auto",attrs:{"data-toggle":"modal","data-target":"#"+a.numero}},[t._m(6,!0),e("img",{staticClass:"img-fluid",attrs:{src:a.url,"btn-dark":"",alt:""}})]),e("button",{staticClass:"btn mb-3 btn-primary",on:{click:function(e){t.agregar(a),t.ver()}}},[t._v("Agregar x $ "+t._s(a.precio)+" ")])])})),0)])]),t._m(7),t._m(8),t._m(9),t._m(10),t._l(t.productos,(function(a){return e("div",{key:a.id,staticClass:"portfolio-modal modal fade",attrs:{id:a.numero,tabindex:"-1",role:"dialog","aria-labelledby":"portfolioModal9Label","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(11,!0),e("div",{staticClass:"modal-body text-center"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-8"},[e("h2",{staticClass:"portfolio-modal-title text-secondary text-uppercase mb-0"},[t._v(t._s(a.nombre))]),t._m(12,!0),e("img",{staticClass:"img-fluid rounded mb-5",attrs:{src:a.url,alt:""}}),e("h2",[t._v(" $ "+t._s(a.precio)+" ")]),e("button",{staticClass:"btn btn-success mb-2",on:{click:function(e){t.agregar(a),t.ver()}}},[t._v("Agregar a Compra")]),e("br"),t._m(13,!0)])])])])])])])})),e("div",{staticClass:"portfolio-modal modal fade",attrs:{id:"compra",tabindex:"-1",role:"dialog","aria-labelledby":"portfolioModal9Label","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(14),e("div",{staticClass:"modal-body text-center"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-8"},[e("h2",{staticClass:"portfolio-modal-title text-secondary text-uppercase mb-0"},[t._v("Items seleccionados")]),t._m(15),e("ul",{staticClass:"list-group"},t._l(t.comprar,(function(a){return e("li",{key:a.id,staticClass:"list-group-item"},[t._v(" "+t._s(a.nombre)+" "),e("button",{staticClass:"btn btn-warning",on:{click:function(e){return t.eliminar(a.id)}}},[t._v("Eliminar")])])})),0),e("h2",[t._v(" Total monto : $ "+t._s(t.total)+" ")]),e("br"),0!=t.total&&""==t.link?e("button",{staticClass:"btn btn-success mb-2",on:{click:function(a){return t.clickMP()}}},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}),t._v(" Confirmar Pedido")]):t._e(),e("br"),""!=t.link&&0!=t.total?e("a",{staticClass:"btn btn-warning mb-2",attrs:{href:t.link}},[t._v(" Pagar Mercadopago ")]):t._e(),""!=t.link&&0!=t.total?e("button",{staticClass:"btn btn-success mb-2",on:{click:function(a){t.link=""}}},[t._v(" Cancelar ")]):t._e(),e("br"),t._m(16)])])])])])])]),e("button",{staticStyle:{display:"none"},attrs:{id:"tam"},on:{click:function(a){return t.ver()}}}),t.mostrar?e("div",{staticClass:"btn-finalizar btn btn-success",style:{right:t.tamPantalla+"px"},attrs:{id:"finalizar"}},[e("a",{attrs:{"data-toggle":"modal","data-target":"#compra"}},[t._v("Finalizar compra "),e("span",{staticClass:"badge badge-pill badge-danger"},[t._v(t._s(t.contador))])])]):t._e(),t._m(17)],2)},m=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[t._v(" Menu "),e("i",{staticClass:"fas fa-bars"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav-item mx-0 mx-lg-1"},[e("a",{staticClass:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",attrs:{href:"#portfolio"}},[t._v("Productos")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav-item mx-0 mx-lg-1"},[e("a",{staticClass:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",attrs:{href:"#about"}},[t._v("Somos")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav-item mx-0 mx-lg-1"},[e("a",{staticClass:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",attrs:{href:"#contact"}},[t._v("Contacto")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"masthead bg-primary text-white text-center"},[e("div",{staticClass:"container d-flex align-items-center flex-column"},[e("img",{staticClass:"masthead-avatar mb-5",attrs:{src:"img/logo.png",alt:""}}),e("h1",{staticClass:"masthead-heading text-uppercase mb-0"},[t._v("Remember")]),e("div",{staticClass:"divider-custom divider-light"},[e("div",{staticClass:"divider-custom-line"}),e("div",{staticClass:"divider-custom-icon"},[e("i",{staticClass:"fas fa-star"})]),e("div",{staticClass:"divider-custom-line"})]),e("p",{staticClass:"masthead-subheading font-weight-light mb-0"},[t._v("🔜Estampas con onda de los 70',80',90' 🚀")]),e("p",{staticClass:"masthead-subheading font-weight-light mb-0"},[t._v("➡️ Sublimamos la imagen que mas te guste 🌈")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"divider-custom"},[e("div",{staticClass:"divider-custom-line"}),e("div",{staticClass:"divider-custom-icon"},[e("i",{staticClass:"fas fa-star"})]),e("div",{staticClass:"divider-custom-line"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"},[e("div",{staticClass:"portfolio-item-caption-content text-center text-white"},[e("i",{staticClass:"fas fa-plus fa-3x"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"page-section bg-primary text-white mb-0",attrs:{id:"about"}},[e("div",{staticClass:"container"},[e("h2",{staticClass:"page-section-heading text-center text-uppercase text-white"},[t._v("Somos")]),e("div",{staticClass:"divider-custom divider-light"},[e("div",{staticClass:"divider-custom-line"}),e("div",{staticClass:"divider-custom-icon"},[e("i",{staticClass:"fas fa-star"})]),e("div",{staticClass:"divider-custom-line"})]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4 ml-auto"},[e("p",{staticClass:"lead"},[t._v("Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.")])]),e("div",{staticClass:"col-lg-4 mr-auto"},[e("p",{staticClass:"lead"},[t._v("You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!")])])]),e("div",{staticClass:"text-center mt-4"},[e("a",{staticClass:"btn btn-xl btn-outline-light",attrs:{href:"https://www.instagram.com/remember.remeras/",target:"_blank"}},[t._v(" Seguime en "),e("img",{attrs:{src:"https://img.icons8.com/clouds/100/000000/instagram.png"}})])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"footer text-center"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4 mb-5 mb-lg-0"},[e("h4",{staticClass:"text-uppercase mb-4"},[t._v("Dirección")]),e("p",{staticClass:"lead mb-0"},[t._v("Garin "),e("br"),t._v("Escobar, Argentina")])]),e("div",{staticClass:"col-lg-4 mb-5 mb-lg-0"},[e("h4",{staticClass:"text-uppercase mb-4"},[t._v("Sigueme en:")]),e("a",{staticClass:"btn btn-outline-light btn-social mx-1",attrs:{href:"https://www.instagram.com/remember.remeras/",target:"_blank"}},[e("i",{staticClass:"fab fa-fw fa-whatsapp"})]),e("a",{staticClass:"btn btn-outline-light btn-social mx-1",attrs:{href:"https://www.instagram.com/remember.remeras/",target:"_blank"}},[e("i",{staticClass:"fab fa-fw fa-instagram"})])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"copyright py-4 text-center text-white"},[e("div",{staticClass:"container"},[e("small",[t._v("Copyright © Your Website 2019")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"scroll-to-top d-lg-none position-fixed "},[e("a",{staticClass:"js-scroll-trigger d-block text-center text-white rounded",attrs:{href:"#page-top"}},[e("i",{staticClass:"fa fa-chevron-up"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"divider-custom"},[e("div",{staticClass:"divider-custom-line"}),e("div",{staticClass:"divider-custom-icon"},[e("i",{staticClass:"fas fa-star"})]),e("div",{staticClass:"divider-custom-line"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"btn btn-danger",attrs:{href:"#","data-dismiss":"modal"}},[e("i",{staticClass:"fas fa-times fa-fw"}),t._v(" Close Window ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"divider-custom"},[e("div",{staticClass:"divider-custom-line"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"btn btn-danger",attrs:{href:"#","data-dismiss":"modal"}},[e("i",{staticClass:"fas fa-times fa-fw"}),t._v(" Close Window ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"btn-whatsapp"},[e("a",{attrs:{href:"https://wa.me/541166665555?texto=Quisiera%20consultar%20sobre%20la%20oferta%20de%20departamento",target:"_blank"}},[e("img",{attrs:{src:"http://s2.accesoperu.com/logos/btn_whatsapp.png",alt:""}})])])}],p=(e("4de4"),e("4160"),e("9911"),e("159b"),e("5530")),f=e("2f62"),v={name:"Home",data:function(){return{tamPantalla:0,mostrar:!1,link:"",contador:0,comprar:[],nroItem:1,loading:!1,total:0}},methods:Object(p["a"])({},Object(f["b"])(["getProductos","addProductos","delProductos","putProductos"]),{agregar:function(t){var a={};a.nombre=t.nombre,a.numero=t.numero,a.precio=t.precio,a.id=this.nroItem,this.comprar.push(a),this.contador=this.comprar.length,this.nroItem++,this.total+=a.precio,this.link="",this.loading=!1},eliminar:function(t){var a=this;this.comprar=this.comprar.filter((function(a){return a.id!=t})),this.total=0,this.comprar.forEach((function(t){a.total+=t.precio})),this.contador=this.comprar.length,this.link="",this.loading=!1},ver:function(){var t=$(window).width()/2;this.contador>0&&t<=496?this.mostrar=!0:this.mostrar=!1},clickMP:function(){var t=this;this.loading=!0,this.axios.post("/mp",this.comprar).then((function(a){console.log(a),t.link=a.data.init_point,console.log(t.link),t.loading=!1})).catch((function(a){console.log(a.response),t.loading=!1}))}}),computed:Object(p["a"])({},Object(f["c"])(["productos"])),created:function(){this.tamPantalla=$(window).width()/2-100},mounted:function(){this.getProductos(),$(window).resize((function(){this.tamPantalla=$(window).width()/2-100,$("#finalizar").css("right",this.tamPantalla+"px"),$("#tam").click()}))}},g=v,b=Object(o["a"])(g,u,m,!1,null,null,null),h=b.exports;s["a"].use(d["a"]);var C=[{path:"/",name:"Home",component:h},{path:"/about",name:"About",component:function(){return e.e("about").then(e.bind(null,"f820"))}}],_=new d["a"]({mode:"history",base:"/",routes:C}),x=_;s["a"].use(f["a"]);var w=new f["a"].Store({state:{productos:[]},mutations:{setProductos:function(t,a){"get"==a.tipo?t.productos=a.productos:"add"==a.tipo?t.productos.push(a.producto):"delete"==a.tipo?t.productos=t.productos.filter((function(t){return t.uid!=a.id})):"update"==a.tipo&&(t.productos=t.productos.filter((function(t){return t.uid==a.payload.uid&&(t.nombre=a.payload.nombre,t.precio=a.payload.precio,t.categoria.text=a.payload.categoria.text,t.categoria.value=a.payload.categoria.value),t})))}},actions:{getProductos:function(t){var a=t.commit,e=[];I.collection("productos").get().then((function(t){t.forEach((function(t){var a=t.data();a.uid=t.id,e.push(a)})),a("setProductos",{tipo:"get",productos:e})})).catch((function(t){console.log(t)}))},delProducto:function(t,a){var e=t.commit;I.collection("productos").doc(a).delete().then((function(){e("setProductos",{tipo:"delete",id:a})})).catch((function(t){console.error("Error removing document: ",t)}))},putProducto:function(t,a){var e=t.commit;I.collection("productos").doc(a.uid).update({nombre:a.nombre,precio:a.precio,categoria:{value:a.categoria.value,text:a.categoria.text}}).then((function(){e("setProductos",{tipo:"update",payload:a})})).catch((function(t){console.error("Error updating document: ",t)}))},addProducto:function(t,a){var e=t.commit;I.collection("productos").add({nombre:a.nombre,precio:a.precio,categoria:{value:a.categoria.value,text:a.categoria.text}}).then((function(t){var s=a;s.uid=t.id,e("setProductos",{tipo:"add",producto:s})})).catch((function(t){console.error("Error document: ",t)}))}},modules:{}}),y=e("bc3a"),k=e.n(y),E=e("a7fe"),P=e.n(E),j=e("1157");window.$=j,s["a"].use(P.a,k.a),k.a.defaults.baseURL="https://app-remember-mm.herokuapp.com/api";var S=e("59ca");e("ea7b"),e("e71f");var O={apiKey:"AIzaSyBpk-EHGrxHEDSRntHw5-yYGxkEfsjG1mo",authDomain:"remember-2816a.firebaseapp.com",databaseURL:"https://remember-2816a.firebaseio.com",projectId:"remember-2816a",storageBucket:"remember-2816a.appspot.com",messagingSenderId:"483337582604",appId:"1:483337582604:web:a5e251a51ae072ebf71629",measurementId:"G-KZ3JE1RL8J"},M=S.initializeApp(O);M.firestore().settings({});var I=a["default"]=M.firestore();s["a"].config.productionTip=!1,new s["a"]({router:x,store:w,render:function(t){return t(l)}}).$mount("#app")},"85ec":function(t,a,e){}});
//# sourceMappingURL=app.f1b626e9.js.map