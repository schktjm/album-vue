(function(t){function e(e){for(var i,s,o=e[0],l=e[1],c=e[2],d=0,f=[];d<o.length;d++)s=o[d],n[s]&&f.push(n[s][0]),n[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},n={app:0},r=[];function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0e4a":function(t,e,a){},"1baf":function(t,e,a){},"26f9":function(t,e,a){},"361e":function(t,e,a){"use strict";var i=a("0e4a"),n=a.n(i);n.a},"56d7":function(t,e,a){"use strict";a.r(e);var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),a("router-view")],1)},r=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",{staticClass:"navbar is-dark is-fixed-top",attrs:{role:"navigation","aria-label":"main navigation"}},[i("div",{staticClass:"navbar-brand"},[i("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[i("img",{attrs:{src:a("cf05"),height:"28"}})])],1)])},o=[],l={name:"Navbar"},c=l,u=a("2877"),d=Object(u["a"])(c,s,o,!1,null,null,null),f=d.exports,p={name:"App",components:{Navbar:f}},m=p,h=(a("5c0b"),Object(u["a"])(m,n,r,!1,null,null,null)),g=h.exports,v=a("8c4f"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"has-background-black"},[a("div",{staticClass:"columns is-multiline is-centered"},[t._l(t.images,function(e,i){return a("div",{key:i,staticClass:"column  is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd"},[a("a",{on:{click:function(a){return t.actievModal(e)}}},[a("base-image",{staticClass:"is-1by1",attrs:{data:e}})],1)])}),a("b-modal",{attrs:{active:t.isModalActive,"has-modal-card":"",scroll:"keep"},on:{close:function(e){t.isModalActive=!1}}},[a("modal-view",{staticStyle:{"max-width":"512px"},attrs:{data:t.activeModalImg}})],1),a("infinite-loading",{staticClass:"column is-full",attrs:{spinner:"spiral"},on:{infinite:t.fetchImage}})],2)])},w=[],_=a("75fc"),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("figure",{staticClass:"image parent",staticStyle:{height:"100%"}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.data.url,expression:"data.url"}],style:{width:t.width}})])},S=[],C=(a("c5f6"),{name:"BaseImage",props:{data:{location:{lat:Number,lng:Number},id:String,url:String,title:String,description:String,postDatetime:String,width:Number,height:Number},width:String}}),x=C,j=(a("7add"),Object(u["a"])(x,y,S,!1,null,"563031c6",null)),M=j.exports,O=a("e166"),k=a.n(O),I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card",staticStyle:{overflow:"scroll"}},[a("div",{staticClass:"card-image"},[a("figure",{staticClass:"image is-4by3"},[a("img",{attrs:{src:t.data.url,alt:"Image"}})])]),a("div",{staticClass:"card-content"},[a("div",{staticClass:"media"},[a("div",{staticClass:"media-content"},[a("p",{staticClass:"title is-4"},[t._v(t._s(t.data.title))]),a("p",{staticClass:"subtitle is-6"},[t._v(t._s(t.data.author))])])]),a("div",{staticClass:"content"},[t._v("\n            id : "+t._s(t.data.id)),a("br"),t._v("\n            link : "),a("a",{staticStyle:{display:"block",width:"90%","white-space":"nowrap","text-overflow":"ellipsis",overflow:"hidden"},attrs:{href:t.data.url}},[t._v(t._s(t.data.url))]),a("br"),a("small",[t._v(t._s(t.unixTime2ymd(t.data.postDatetime)))])])])])},N=[],D={name:"ModalCard",props:{data:{location:{lat:Number,lng:Number},id:String,url:String,title:String,description:String,postDatetime:String,width:Number,height:Number}},methods:{unixTime2ymd:function(t){var e=new Date(t),a=new Date(1e3*t),i=a.getFullYear(),n=e.getMonth()+1,r=e.getDate(),s=("0"+e.getHours()).slice(-2),o=("0"+e.getMinutes()).slice(-2),l=("0"+e.getSeconds()).slice(-2);return i+"-"+n+"-"+r+" "+s+":"+o+":"+l}}},B=D,E=Object(u["a"])(B,I,N,!1,null,null,null),$=E.exports,T=a("69ae"),L={name:"Layout",components:{BModal:T["a"],BaseImage:M,InfiniteLoading:k.a,ModalView:$},props:{BaseImage:M},data:function(){return{images:[],page:0,isModalActive:!1,activeModalImg:{}}},computed:{},created:function(){},methods:{getData:function(t){return fetch(t,{method:"GET",mode:"cors"}).then(function(t){return t.json()})},fetchImage:function(t){var e=this,a="https://wfc-2019.firebaseapp.com/images?",i="limit=12&",n="offset="+this.page;this.getData(a+i+n).then(function(a){var i;a.data.images.length?(e.page+=12,(i=e.images).push.apply(i,Object(_["a"])(a.data.images)),t.loaded()):t.complete()}).catch(function(t){console.error(t)})},actievModal:function(t){this.isModalActive=!0,this.activeModalImg=t}}},P=L,A=Object(u["a"])(P,b,w,!1,null,"c861e556",null),V=A.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"has-background-black",staticStyle:{height:"100%"}},[a("a",{on:{click:function(e){t.isShow=!t.isShow}}},[a("base-image",{attrs:{data:t.data,width:t.width}}),a("detail-view-card",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],attrs:{data:t.data}})],1)])},z=[],G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("base-card",{staticClass:"is-4 flexbox"},[a("p",{staticClass:"title is-4"},[t._v(t._s(t.data.title))]),a("p",[t._v("*"+t._s(t.data.description))]),a("p",[t._v("*"+t._s(t.data.postDatetime))]),a("p",[t._v("*"+t._s(t.data.location.lat)+":"+t._s(t.data.location.lng))]),a("p",[t._v("*"+t._s(t.data.width)+"x"+t._s(t.data.height))])])},J=[],F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[t._t("default")],2)])},H=[],Y={name:"BaseCard"},K=Y,Q=Object(u["a"])(K,F,H,!1,null,"e88ab4e6",null),R=Q.exports,U={name:"DetailViewCard",components:{BaseCard:R},props:{data:{location:{lat:Number,lng:Number},id:String,url:String,title:String,description:String,postDatetime:String,width:Number,height:Number}},data:function(){return{}}},W=U,X=(a("a5c0"),Object(u["a"])(W,G,J,!1,null,"4bafa6c2",null)),Z=X.exports,tt=a("b89f"),et=a("0e95"),at={name:"DetailView",components:{BIcon:et["a"],BLoading:tt["a"],BaseImage:M,DetailViewCard:Z},props:{},created:function(){this.data=this.fetchImageById()},data:function(){return{width:"1024px",data:{},isLoading:!0,isShow:!1}},methods:{getData:function(t){return fetch(t,{method:"GET",mode:"cors"}).then(function(t){return t.json()})},fetchImageById:function(){var t=this,e="https://wfc-2019.firebaseapp.com/image/",a=this.$route.params.id;this.getData(e+a).then(function(e){console.log(e),t.data=e.data,t.isLoading=!1}).catch(function(t){console.error(t)})}}},it=at,nt=(a("361e"),Object(u["a"])(it,q,z,!1,null,"b304eb78",null)),rt=nt.exports;i["default"].use(v["a"]);var st=new v["a"]({routes:[{path:"/",name:"layout",component:V},{path:"/detail/:id",name:"detail",component:rt}]}),ot=a("8a03"),lt=a.n(ot),ct=(a("5abe"),a("283e")),ut=a.n(ct);i["default"].use(ut.a,{preLoad:1.3,error:"./assets/gomennne.jpg",attempt:1}),i["default"].use(lt.a),i["default"].config.productionTip=!1,new i["default"]({router:st,render:function(t){return t(g)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var i=a("5e27"),n=a.n(i);n.a},"5e27":function(t,e,a){},"7add":function(t,e,a){"use strict";var i=a("26f9"),n=a.n(i);n.a},a5c0:function(t,e,a){"use strict";var i=a("1baf"),n=a.n(i);n.a},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.ea5fcd51.js.map