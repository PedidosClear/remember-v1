(function(t){function a(a){for(var s,o,n=a[0],c=a[1],l=a[2],d=0,m=[];d<n.length;d++)o=n[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(a);while(m.length)m.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,o=1;o<e.length;o++){var c=e[o];0!==i[c]&&(s=!1)}s&&(r.splice(a--,1),t=n(n.s=e[0]))}return t}var s={},i={app:0},r=[];function o(t){return n.p+"js/"+({about:"about",admin:"admin",imagenes:"imagenes"}[t]||t)+"."+{about:"159f6455",admin:"8b1fbc5f",imagenes:"ff90676a"}[t]+".js"}function n(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.e=function(t){var a=[],e=i[t];if(0!==e)if(e)a.push(e[2]);else{var s=new Promise((function(a,s){e=i[t]=[a,s]}));a.push(e[2]=s);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.src=o(t);var l=new Error;r=function(a){c.onerror=c.onload=null,clearTimeout(d);var e=i[t];if(0!==e){if(e){var s=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",l.name="ChunkLoadError",l.type=s,l.request=r,e[1](l)}i[t]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(a)},n.m=t,n.c=s,n.d=function(t,a,e){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)n.d(e,s,function(a){return t[a]}.bind(null,s));return e},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/",n.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=a,c=c.slice();for(var d=0;d<c.length;d++)a(c[d]);var u=l;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var s=e("85ec"),i=e.n(s);i.a},"56d7":function(t,a,e){"use strict";e.r(a),e.d(a,"firebase",(function(){return z})),e.d(a,"db",(function(){return R})),e.d(a,"autn",(function(){return T})),e.d(a,"storage",(function(){return M}));e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},r=[],o=(e("034f"),e("2877")),n={},c=Object(o["a"])(n,i,r,!1,null,null,null),l=c.exports,d=(e("d3b7"),e("8c4f")),u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{staticClass:"navbar navbar-expand-lg bg-secondary text-uppercase fixed-top",attrs:{id:"mainNav"}},[e("div",{staticClass:"container"},[e("a",{staticClass:"navbar-brand js-scroll-trigger",attrs:{href:"#"},on:{click:function(a){return t.closeMenu()}}},[t._v("Remember")]),t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item mx-0 mx-lg-1"},[e("div",{staticClass:"btn-group",staticStyle:{position:"''"}},[e("a",{staticClass:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger dropdown-toggle dropdown-toggle-split",attrs:{"data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(" Productos ")]),e("div",{staticClass:"dropdown-menu",staticStyle:{position:"''"}},[t.ListaLanzamiento.length>0?e("a",{staticClass:"dropdown-item",attrs:{href:"#Lanzamiento"},on:{click:function(a){return t.closeMenu()}}},[t._v("Lanzamientos")]):t._e(),t.ListaRemeres.length>0?e("a",{staticClass:"dropdown-item",attrs:{href:"#Remeras"},on:{click:function(a){return t.closeMenu()}}},[t._v("Remeras")]):t._e(),t.ListaTazas.length>0?e("a",{staticClass:"dropdown-item",attrs:{href:"#Tazas"},on:{click:function(a){return t.closeMenu()}}},[t._v("Tazas")]):t._e(),t.ListaAccesorios.length>0?e("a",{staticClass:"dropdown-item",attrs:{href:"#Accesorios"},on:{click:function(a){return t.closeMenu()}}},[t._v("Accesorios")]):t._e()])])]),e("li",{staticClass:"nav-item mx-0 mx-lg-1"},[e("a",{staticClass:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",attrs:{href:"#about"},on:{click:function(a){return t.closeMenu()}}},[t._v("Somos")])]),0!=t.contador?e("li",{staticClass:"nav-item mx-0 mx-lg-1"},[e("a",{staticClass:"nav-link left py-3 px-0 px-lg-3 rounded js-scroll-trigger",attrs:{"data-toggle":"modal","data-target":"#compra"},on:{click:function(a){return t.closeMenu()}}},[t._v("Carrito "),e("span",{staticClass:"badge badge-pill badge-danger"},[t._v(t._s(t.contador))])])]):t._e()])])])]),t._m(1),e("section",{staticClass:"page-section portfolio",attrs:{id:"portfolio"}},[e("div",{staticClass:"container"},[e("h2",{staticClass:"page-section-heading text-center text-uppercase text-secondary mb-0"},[t._v("Catalogo de Ventas")]),t._m(2),t.ListaLanzamiento.length>0?e("h2",{staticClass:"text-uppercase text-left text-secondary mb-0 mt-3",attrs:{id:"Lanzamiento"}},[t._v("Lanzamientos")]):t._e(),t.ListaLanzamiento.length>0?e("div",{staticClass:"row"},t._l(t.ListaLanzamiento,(function(a){return e("div",{key:a.id,staticClass:"col-md-6 col-lg-4"},[e("div",{staticClass:"portfolio-item mx-auto",attrs:{"data-toggle":"modal","data-target":"#id"+a.numero}},[t._m(3,!0),e("img",{staticClass:"img-fluid",attrs:{src:a.url,"btn-dark":"",alt:""}})]),e("button",{staticClass:"btn mb-3 btn-primary",on:{click:function(e){t.agregar(a),t.ver()}}},[t._v("Agregar x $ "+t._s(a.precio)+" ")])])})),0):t._e(),t.ListaRemeres.length>0?e("h2",{staticClass:"text-uppercase text-left text-secondary mb-0 mt-3",attrs:{id:"Remeras"}},[t._v("Remeras")]):t._e(),t.ListaRemeres.length>0?e("div",{staticClass:"row"},t._l(t.ListaRemeres,(function(a){return e("div",{key:a.id,staticClass:"col-md-6 col-lg-4"},[e("div",{staticClass:"portfolio-item mx-auto",attrs:{"data-toggle":"modal","data-target":"#id"+a.numero}},[t._m(4,!0),e("img",{staticClass:"img-fluid",attrs:{src:a.url,"btn-dark":"",alt:""}})]),e("button",{staticClass:"btn mb-3 btn-primary",on:{click:function(e){t.agregar(a),t.ver()}}},[t._v("Agregar x $ "+t._s(a.precio)+" ")])])})),0):t._e(),t.ListaTazas.length>0?e("h2",{staticClass:"text-uppercase text-left text-secondary mb-0 mt-3",attrs:{id:"Tazas"}},[t._v("Tazas")]):t._e(),t.ListaTazas.length>0?e("div",{staticClass:"row"},t._l(t.ListaTazas,(function(a){return e("div",{key:a.id,staticClass:"col-md-6 col-lg-4"},[e("div",{staticClass:"portfolio-item mx-auto",attrs:{"data-toggle":"modal","data-target":"#id"+a.numero}},[t._m(5,!0),e("img",{staticClass:"img-fluid",attrs:{src:a.url,"btn-dark":"",alt:""}})]),e("button",{staticClass:"btn mb-3 btn-primary",on:{click:function(e){t.agregar(a),t.ver()}}},[t._v("Agregar x $ "+t._s(a.precio)+" ")])])})),0):t._e(),t.ListaAccesorios.length>0?e("h2",{staticClass:"text-uppercase text-left text-secondary mb-0 mt-3",attrs:{id:"Accesorios"}},[t._v("Accesorios")]):t._e(),t.ListaAccesorios.length>0?e("div",{staticClass:"row"},t._l(t.ListaAccesorios,(function(a){return e("div",{key:a.id,staticClass:"col-md-6 col-lg-4"},[e("div",{staticClass:"portfolio-item mx-auto",attrs:{"data-toggle":"modal","data-target":"#id"+a.numero}},[t._m(6,!0),e("img",{staticClass:"img-fluid",attrs:{src:a.url,"btn-dark":"",alt:""}})]),e("button",{staticClass:"btn mb-3 btn-primary",on:{click:function(e){t.agregar(a),t.ver()}}},[t._v("Agregar x $ "+t._s(a.precio)+" ")])])})),0):t._e()])]),t._m(7),t._m(8),t._m(9),t._m(10),t._l(t.productos,(function(a){return e("div",{key:a.id,staticClass:"portfolio-modal modal fade",attrs:{id:"id"+a.numero,tabindex:"-1",role:"dialog","aria-labelledby":"portfolioModal9Label","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(11,!0),e("div",{staticClass:"modal-body text-center"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-8"},[e("h2",{staticClass:"portfolio-modal-title text-secondary text-uppercase mb-0"},[t._v(t._s(a.nombre))]),t._m(12,!0),e("img",{staticClass:"img-fluid rounded mb-5",attrs:{src:a.url,alt:""}}),e("p",{staticClass:"mb-5"},[t._v(t._s(a.descripcion))]),e("h2",[t._v(" $ "+t._s(a.precio)+" ")]),e("button",{staticClass:"btn btn-success mb-2",attrs:{"data-dismiss":"modal"},on:{click:function(e){t.agregar(a),t.ver()}}},[t._v("Agregar a Compra")]),e("br"),t._m(13,!0)])])])])])])])})),e("div",{staticClass:"portfolio-modal modal fade",attrs:{id:"compra",tabindex:"-1",role:"dialog","aria-labelledby":"portfolioModal9Label","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(14),e("div",{staticClass:"modal-body text-center"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-8"},[e("h2",{staticClass:"portfolio-modal-title text-secondary text-uppercase mb-0"},[t._v("Items seleccionados")]),t._m(15),e("ul",{staticClass:"list-group"},t._l(t.comprar,(function(a){return e("li",{key:a.id,staticClass:"list-group-item"},[e("table",{staticStyle:{width:"100%"}},[e("tr",[e("td",[e("img",{staticStyle:{width:"70px"},attrs:{src:t.productos.find((function(t){return a.uid==t.uid})).url}})]),e("td",[t._v(" "+t._s(a.nombre)+" "),e("br"),"Remeras"==t.productos.find((function(t){return a.uid==t.uid})).tipo?e("div",[t._v(" Talle: "),e("select",{directives:[{name:"model",rawName:"v-model",value:a.talle,expression:"item.talle"}],staticClass:"mr-2",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(a,"talle",e.target.multiple?s:s[0])}}},t._l(t.productos.find((function(t){return a.uid==t.uid})).talles,(function(a){return e("option",{key:a.id,domProps:{value:a}},[t._v(" "+t._s(a)+" ")])})),0),t._v(" Modelo: "),e("select",{directives:[{name:"model",rawName:"v-model",value:a.modelo,expression:"item.modelo"}],staticClass:"mr-2",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(a,"modelo",e.target.multiple?s:s[0])}}},t._l(t.productos.find((function(t){return a.uid==t.uid})).modelos,(function(a){return e("option",{key:a.id,domProps:{value:a}},[t._v(" "+t._s(a)+" ")])})),0),t._v(" "),e("br")]):t._e(),t._v(" Precio: $"+t._s(a.precio)+" ")]),e("td",[e("button",{staticClass:"btn btn-warning",on:{click:function(e){return t.eliminar(a.id)}}},[t._v("Eliminar")])])])])])})),0),e("h2",[t._v(" Total : $ "+t._s(t.total)+" ")]),e("br"),0!=t.total&&""==t.link?e("button",{staticClass:"btn btn-success mb-2 col-5",on:{click:function(a){return t.clickMP()}}},[t.loading?e("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):e("span",[t._v("Confirmar Pedido")])]):t._e(),""!=t.link&&0!=t.total?e("a",{staticClass:"btn btn-success mb-2 col-5",attrs:{href:t.link}},[t._v(" Pagar Mercadopago ")]):t._e(),t._v(" "),e("br"),""!=t.link&&0!=t.total?e("button",{staticClass:"btn btn-danger mb-2 col-3",on:{click:function(a){t.link=""}}},[t._v(" Cancelar ")]):t._e(),""!=t.link?e("br"):t._e(),t._m(16)])])])])])])]),e("button",{staticStyle:{display:"none"},attrs:{id:"tam"},on:{click:function(a){return t.ver()}}}),t.mostrar?e("div",{staticClass:"btn-finalizar btn btn-success",style:{right:t.tamPantalla+"px"},attrs:{id:"finalizar"}},[e("a",{attrs:{"data-toggle":"modal","data-target":"#compra"}},[t._v("Finalizar compra "),e("span",{staticClass:"badge badge-pill badge-danger"},[t._v(t._s(t.contador))])])]):t._e(),t._m(17)],2)},m=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[t._v(" Menu "),e("i",{staticClass:"fas fa-bars"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"masthead bg-primary text-white text-center"},[e("div",{staticClass:"container d-flex align-items-center flex-column"},[e("img",{staticClass:"masthead-avatar mb-5",attrs:{src:"img/logo.png",alt:""}}),e("h1",{staticClass:"masthead-heading text-uppercase mb-0"},[t._v("Remember")]),e("div",{staticClass:"divider-custom divider-light"},[e("div",{staticClass:"divider-custom-line"}),e("div",{staticClass:"divider-custom-icon"},[e("i",{staticClass:"fas fa-star"})]),e("div",{staticClass:"divider-custom-line"})]),e("p",{staticClass:"masthead-subheading font-weight-light mb-0"},[t._v("🔜Estampas con onda de los 70',80',90' 🚀")]),e("p",{staticClass:"masthead-subheading font-weight-light mb-0"},[t._v("➡️ Sublimamos la imagen que mas te guste 🌈")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"divider-custom"},[e("div",{staticClass:"divider-custom-line"}),e("div",{staticClass:"divider-custom-icon"},[e("i",{staticClass:"fas fa-star"})]),e("div",{staticClass:"divider-custom-line"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"},[e("div",{staticClass:"portfolio-item-caption-content text-center text-white"},[e("i",{staticClass:"fas fa-plus fa-3x"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"},[e("div",{staticClass:"portfolio-item-caption-content text-center text-white"},[e("i",{staticClass:"fas fa-plus fa-3x"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"},[e("div",{staticClass:"portfolio-item-caption-content text-center text-white"},[e("i",{staticClass:"fas fa-plus fa-3x"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"},[e("div",{staticClass:"portfolio-item-caption-content text-center text-white"},[e("i",{staticClass:"fas fa-plus fa-3x"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"page-section bg-primary text-white mb-0",attrs:{id:"about"}},[e("div",{staticClass:"container"},[e("h2",{staticClass:"page-section-heading text-center text-uppercase text-white"},[t._v("Somos")]),e("div",{staticClass:"divider-custom divider-light"},[e("div",{staticClass:"divider-custom-line"}),e("div",{staticClass:"divider-custom-icon"},[e("i",{staticClass:"fas fa-star"})]),e("div",{staticClass:"divider-custom-line"})]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4 ml-auto"},[e("p",{staticClass:"lead"},[t._v("Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.")])]),e("div",{staticClass:"col-lg-4 mr-auto"},[e("p",{staticClass:"lead"},[t._v("You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!")])])]),e("div",{staticClass:"text-center mt-4"},[e("a",{staticClass:"btn btn-xl btn-outline-light",attrs:{href:"https://www.instagram.com/remember.remeras/",target:"_blank"}},[t._v(" Seguime en "),e("img",{attrs:{src:"https://img.icons8.com/clouds/100/000000/instagram.png"}})])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"footer text-center"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4 mb-5 mb-lg-0"},[e("h4",{staticClass:"text-uppercase mb-4"},[t._v("Dirección")]),e("p",{staticClass:"lead mb-0"},[t._v("Garin "),e("br"),t._v("Escobar, Argentina")])]),e("div",{staticClass:"col-lg-4 mb-5 mb-lg-0"},[e("h4",{staticClass:"text-uppercase mb-4"},[t._v("Sigueme en:")]),e("a",{staticClass:"btn btn-outline-light btn-social mx-1",attrs:{href:"https://www.instagram.com/remember.remeras/",target:"_blank"}},[e("i",{staticClass:"fab fa-fw fa-whatsapp"})]),e("a",{staticClass:"btn btn-outline-light btn-social mx-1",attrs:{href:"https://www.instagram.com/remember.remeras/",target:"_blank"}},[e("i",{staticClass:"fab fa-fw fa-instagram"})])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"copyright py-4 text-center text-white"},[e("div",{staticClass:"container"},[e("small",[t._v("Copyright © Your Website 2019")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"scroll-to-top d-lg-none position-fixed "},[e("a",{staticClass:"js-scroll-trigger d-block text-center text-white rounded",attrs:{href:"#page-top"}},[e("i",{staticClass:"fa fa-chevron-up"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"divider-custom"},[e("div",{staticClass:"divider-custom-line"}),e("div",{staticClass:"divider-custom-icon"},[e("i",{staticClass:"fas fa-star"})]),e("div",{staticClass:"divider-custom-line"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"btn btn-danger",attrs:{href:"#","data-dismiss":"modal"}},[e("i",{staticClass:"fas fa-times fa-fw"}),t._v(" Cerrar ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[e("i",{staticClass:"fas fa-times"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"divider-custom"},[e("div",{staticClass:"divider-custom-line"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"btn btn-danger col-3",attrs:{href:"#","data-dismiss":"modal"}},[e("i",{staticClass:"fas fa-times fa-fw"}),t._v(" Cerrar ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"btn-whatsapp"},[e("a",{attrs:{href:"https://wa.me/541166665555?texto=Quisiera%20consultar%20sobre%20la%20oferta%20de%20departamento",target:"_blank"}},[e("img",{attrs:{src:"http://s2.accesoperu.com/logos/btn_whatsapp.png",alt:""}})])])}],p=(e("4de4"),e("4160"),e("9911"),e("159b"),e("5530")),f=e("2f62"),v={name:"Home",data:function(){return{tamPantalla:0,mostrar:!1,link:"",contador:0,comprar:[],nroItem:1,loading:!1,total:0}},methods:Object(p["a"])({},Object(f["b"])(["getProductos","addProductos","delProductos","putProductos"]),{agregar:function(t){var a={};a.nombre=t.nombre,a.numero=t.numero,a.precio=parseFloat(t.precio),a.id=this.nroItem,a.uid=t.uid,this.comprar.push(a),this.contador=this.comprar.length,this.nroItem++,this.total+=a.precio,this.link="",this.loading=!1},eliminar:function(t){var a=this;this.comprar=this.comprar.filter((function(a){return a.id!=t})),this.total=0,this.comprar.forEach((function(t){a.total+=t.precio})),this.contador=this.comprar.length,this.link="",this.loading=!1},ver:function(){var t=$(window).width()/2;this.contador>0&&t<=496?this.mostrar=!0:this.mostrar=!1},clickMP:function(){var t=this;this.loading=!0,console.log(this.comprar),this.axios.post("/mp",this.comprar).then((function(a){console.log(a),t.link=a.data.init_point,console.log(t.link),t.loading=!1})).catch((function(a){console.log(a.response),t.loading=!1}))},closeMenu:function(){var t=$(".navbar-collapse");t.removeClass("show")}}),computed:Object(p["a"])({},Object(f["c"])(["productos","ListaLanzamiento","ListaRemeres","ListaTazas","ListaAccesorios"])),created:function(){this.tamPantalla=$(window).width()/2-100},mounted:function(){this.getProductos(),$(window).resize((function(){this.tamPantalla=$(window).width()/2-100,$("#finalizar").css("right",this.tamPantalla+"px"),$("#tam").click()}))}},g=v,h=Object(o["a"])(g,u,m,!1,null,null,null),b=h.exports;s["a"].use(d["a"]);var C=[{path:"/",name:"Home",component:b},{path:"/about",name:"About",component:function(){return e.e("about").then(e.bind(null,"f820"))}},{path:"/imagenes",name:"imagenes",component:function(){return e.e("imagenes").then(e.bind(null,"b798"))}},{path:"/admin",name:"admin",component:function(){return e.e("admin").then(e.bind(null,"3530"))}}],_=new d["a"]({mode:"history",base:"/",routes:C}),x=_,w=(e("96cf"),e("1da1"));s["a"].use(f["a"]);var y=new f["a"].Store({state:{productos:[],ListaLanzamiento:[],ListaRemeres:[],ListaTazas:[],ListaAccesorios:[],usuario:{uid:"",email:""},error:""},mutations:{setProductos:function(t,a){"get"==a.tipo?t.productos=a.productos:"add"==a.tipo?(console.log(a.producto),t.productos.push(a.producto),console.log(a.producto)):"delete"==a.tipo&&(t.productos=t.productos.filter((function(t){return t.uid!=a.id}))),t.productos=t.productos.sort((function(t,a){return t.nombre.toLowerCase()>a.nombre.toLowerCase()?1:t.nombre.toLowerCase()<a.nombre.toLowerCase()?-1:0}));var e=[];t.productos.forEach((function(t){1==t.lanzamiento&&e.push(t)})),t.ListaLanzamiento=e,e=[],t.productos.forEach((function(t){"Remeras"==t.tipo&&e.push(t)})),t.ListaRemeres=e,e=[],t.productos.forEach((function(t){"Tazas"==t.tipo&&e.push(t)})),t.ListaTazas=e,e=[],t.productos.forEach((function(t){"Accesorios"==t.tipo&&e.push(t)})),t.ListaAccesorios=e},setUsuario:function(t,a){t.usuario=null!=a?a:{uid:"",email:""}},setError:function(t,a){t.error=a}},actions:{getProductos:function(t){var a=t.commit,e=[];R.collection("productosNew").get().then((function(t){console.log(t),t.forEach((function(t){var a=t.data();a.uid=t.id,e.push(a)})),console.log(e),a("setProductos",{tipo:"get",productos:e})})).catch((function(t){console.log(t)}))},addProducto:function(t,a){return Object(w["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=t.commit,e.next=3,R.collection("productosNew").add(a).then((function(t){var e=a;console.log(e),e.uid=t.id,console.log(e),s("setProductos",{tipo:"add",producto:e})})).catch((function(t){console.log(t)}));case 3:case"end":return e.stop()}}),e)})))()},delProducto:function(t,a){var e=t.commit;R.collection("productosNew").doc(a).delete().then((function(){e("setProductos",{tipo:"delete",id:a})})).catch((function(t){console.log(t)}))},ingresoUsuario:function(t,a){return Object(w["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=t.commit,null,s("setError",""),e.next=5,T.signInWithEmailAndPassword(a.email,a.pass).then((function(t){console.log(t),s("setUsuario",{uid:t.user.uid,email:t.user.email})})).catch((function(t){s("setError",t.message)}));case 5:e.sent;case 6:case"end":return e.stop()}}),e)})))()},cerrarSesion:function(t){var a=t.commit;T.signOut().then((function(){a("setUsuario",null)}))}}}),k=e("bc3a"),L=e.n(k),E=e("a7fe"),P=e.n(E),j=e("1157");window.$=j,s["a"].use(P.a,L.a),L.a.defaults.baseURL="https://app-remember-mm.herokuapp.com/api";var z=e("59ca");e("ea7b"),e("e71f"),e("588e");var S={apiKey:"AIzaSyBpk-EHGrxHEDSRntHw5-yYGxkEfsjG1mo",authDomain:"remember-2816a.firebaseapp.com",databaseURL:"https://remember-2816a.firebaseio.com",projectId:"remember-2816a",storageBucket:"remember-2816a.appspot.com",messagingSenderId:"483337582604",appId:"1:483337582604:web:a5e251a51ae072ebf71629",measurementId:"G-KZ3JE1RL8J"},A=z.initializeApp(S);A.firestore().settings({});var R=A.firestore(),T=z.auth(),M=z.storage();s["a"].config.productionTip=!1,new s["a"]({router:x,store:y,render:function(t){return t(l)}}).$mount("#app")},"85ec":function(t,a,e){}});
//# sourceMappingURL=app.1bf46ac4.js.map