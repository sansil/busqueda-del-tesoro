(function(e){function t(t){for(var o,a,s=t[0],u=t[1],c=t[2],l=0,d=[];l<s.length;l++)a=s[l],r[a]&&d.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},i=[];function a(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"77c93d06"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=o);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=a(e),i=function(t){u.onerror=u.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+o+": "+i+")");a.type=o,a.request=i,n[1](a)}r[e]=void 0}};var c=setTimeout(function(){i({type:"timeout",target:u})},12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},"2af0":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},i=[],a=(n("034f"),n("2877")),s={},u=Object(a["a"])(s,r,i,!1,null,null,null),c=u.exports,l=n("8c4f"),f=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}}),o("chronometer")],1)},d=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"})},h=[],v={name:"HelloWorld",props:{msg:String}},m=v,g=(n("9580"),Object(a["a"])(m,p,h,!1,null,"d2e89fd2",null)),b=g.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"clock"}},[n("p",{staticClass:"time"},[e._v(e._s(e.zeroPadding(e.hours))+":"+e._s(e.zeroPadding(e.minutes))+":"+e._s(e.zeroPadding(e.seconds)))])])},k=[],y={data:function(){return{hours:0,minutes:0,seconds:0,millis:0,running:!1,tickCallback:null}},mounted:function(){this.startClock()},methods:{startClock:function(){var e=this;this.running=!0,this.tickCallback=setInterval(function(){e.tick()},100)},tick:function(){var e=this.millis+1,t=this.seconds,n=this.minutes,o=this.hours;10===e&&(e=0,t+=1),60===t&&(e=0,t=0,n+=1),60===n&&(n=0,o+=1),this.update(e,t,n,o)},update:function(e,t,n,o){this.hours=o,this.minutes=n,this.seconds=t,this.millis=e},stop:function(){this.running&&(clearInterval(this.tickCallback),this.running=!1)},zeroPadding:function(e){return e<10?"0".concat(e):e}}},_=y,j=(n("cfae"),Object(a["a"])(_,w,k,!1,null,"d75ad926",null)),O=j.exports,P={name:"home",components:{HelloWorld:b,chronometer:O}},x=P,C=Object(a["a"])(x,f,d,!1,null,null,null),S=C.exports;o["a"].use(l["a"]);var E=new l["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:S},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),A=n("2f62");o["a"].use(A["a"]);var T=new A["a"].Store({state:{},mutations:{},actions:{}}),$=n("9483");Object($["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("92c6");o["a"].config.productionTip=!1,new o["a"]({router:E,store:T,render:function(e){return e(c)}}).$mount("#app")},"64a9":function(e,t,n){},9580:function(e,t,n){"use strict";var o=n("9f27"),r=n.n(o);r.a},"9f27":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},cfae:function(e,t,n){"use strict";var o=n("2af0"),r=n.n(o);r.a}});
//# sourceMappingURL=app.d8a17ba7.js.map