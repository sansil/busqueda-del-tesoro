(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0d6d":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hero-body home"},[o("div",{staticClass:"container"},[o("h1",{staticClass:"title"},[o("span",{class:t.equipo},[t._v("Equipo "+t._s(t.equipo))])])]),o("a",{staticClass:"button is-primary",on:{click:function(e){t.openModalCodigo=!0,t.state.codigo=""}}},[t._v("Código")]),o("a",{staticClass:"button is-link",on:{click:function(e){t.openModalPista=!0}}},[t._v("Pista")]),o("div",{staticStyle:{padding:"1rem"}},[o("progress",{staticClass:"progress is-success",attrs:{max:Object.keys(this.pistasDictionary).length},domProps:{value:t.state.avance}}),t._v("\n    "+t._s(t.state.avance)+"/"+t._s(Object.keys(this.pistasDictionary).length)+"\n  ")]),o("div",{staticClass:"modal",class:{"is-active":t.openModalCodigo},attrs:{id:"modal-id"}},[o("div",{staticClass:"modal-background"}),o("div",{staticClass:"modal-card animated jackInTheBox"},[o("header",{staticClass:"modal-card-head"},[o("p",{staticClass:"modal-card-title"},[t._v("Ingresar código")]),o("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){t.openModalCodigo=!1}}})]),o("section",{staticClass:"modal-card-body"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.state.codigo,expression:"state.codigo"}],staticClass:"codigo_input",attrs:{type:"text",maxlength:"8",placeholder:"CÓDIGO",oninput:"this.value=this.value.replace(/[^0-9]/g,'');"},domProps:{value:t.state.codigo},on:{input:function(e){e.target.composing||t.$set(t.state,"codigo",e.target.value)}}})]),o("footer",{staticClass:"modal-card-foot"},[o("a",{staticClass:"button is-success",on:{click:t.checkCode}},[t._v("Probar!")])])])]),o("modal-juego",{attrs:{openModalFlag:t.openModalSucces,effect:"animated heartBeat"},on:{change:t.onSuccesChange},scopedSlots:t._u([{key:"footer-btn",fn:function(){return[t._v("Siguiente pista")]},proxy:!0},{key:"img",fn:function(){return[o("img",{attrs:{src:i("f0c8")}})]},proxy:!0}])}),o("modal-juego",{attrs:{openModalFlag:t.openModalError,effect:"animated shake"},on:{change:t.onErrorChange},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Nop, código incorrecto!")]},proxy:!0},{key:"footer-btn",fn:function(){return[t._v("Ops!")]},proxy:!0},{key:"img",fn:function(){return[o("img",{attrs:{src:i("217f")}})]},proxy:!0}])}),o("modal-juego",{attrs:{openModalFlag:t.openModalWin,effect:"animated flip"},on:{change:t.onWinChange},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Felicitaciones!")]},proxy:!0},{key:"footer-btn",fn:function(){return[t._v("yeah!")]},proxy:!0},{key:"img",fn:function(){return[o("p",{staticClass:"modal-text"},[t._v("El tesoro contiene el siguiente mensaje:")]),o("p",{staticClass:"modal-win-text"},[o("b",[o("i",[t._v('"30 años no son nada! "')])])]),o("p",{staticClass:"modal-text"},[t._v("Lleva este mensaje a la Explanada!")]),o("img",{attrs:{src:i("5550")}})]},proxy:!0}])}),o("modal-juego",{attrs:{openModalFlag:t.openModalPista,effect:"animated jackInTheBox"},on:{change:t.onPistaChange},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Pista")]},proxy:!0},{key:"footer-btn",fn:function(){return[t._v("Listo!")]},proxy:!0},{key:"footer",fn:function(){return[t._v(t._s(t.state.footer))]},proxy:!0},{key:"body-text",fn:function(){return[o("p",{staticClass:"modal-text",domProps:{innerHTML:t._s(t.state.pista)}})]},proxy:!0},{key:"img",fn:function(){return[t.state.con_img?o("div",[o("img",{attrs:{src:t.getImgUrl(t.state.img)}})]):t._e()]},proxy:!0}])})],1)},n=[],s=(i("96cf"),i("3b8d")),r=(i("c5f6"),i("ac6a"),i("456d"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal",class:{"is-active":t.openModalFlag}},[i("div",{staticClass:"modal-background"}),i("div",{staticClass:"modal-card",class:t.effect},[i("header",{staticClass:"modal-card-head"},[i("p",{staticClass:"modal-card-title"},[t._t("title")],2),i("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:t.modalevent}})]),i("section",{staticClass:"modal-card-body"},[t._t("body-text"),t._t("img"),t._t("input")],2),i("footer",{staticClass:"modal-card-foot"},[i("a",{staticClass:"button is-success",on:{click:t.modalevent}},[t._t("footer-btn")],2),i("span",{staticStyle:{"margin-left":"1rem",color:"yellow","font-size":"22px"}},[t._t("footer")],2)])])])}),a=[],c={props:{openModalFlag:{type:Boolean,default:!1},effect:{type:String,default:"animated shake"}},data:function(){return{}},methods:{modalevent:function(){console.log("event");var t=this.openModalFlag;t=!1,this.$emit("change",t)}}},d=c,p=i("2877"),l=Object(p["a"])(d,r,a,!1,null,"1a905082",null),u=l.exports,f=i("bc3a"),h=i.n(f);i("9299"),i("ebd9");var m={props:["equipo"],name:"juego",components:{modalJuego:u},data:function(){return{srcMapaImg:"",openModalPista:!1,openModalCodigo:!1,openModalSucces:!1,openModalError:!1,openModalWin:!1,state:{avance:0,codigo:"",pista:"",img:"",con_img:!1,footer:""},pistasDictionary:{}}},methods:{checkCode:function(){if(this.openModalCodigo=!1,!(this.state.avance>Object.keys(this.pistasDictionary).length-1))if(this.state.codigo===this.pistasDictionary[this.state.avance].codigo){if(this.state.avance=Number(this.state.avance)+1,this.state.avance>=Object.keys(this.pistasDictionary).length)return this.$confetti.start(),this.openModalWin=!0,void(this.openModalSucces=!1);this.openModalSucces=!0,this.state={avance:this.state.avance,codigo:"",pista:this.pistasDictionary[this.state.avance].pista,img:this.pistasDictionary[this.state.avance].img,con_img:this.pistasDictionary[this.state.avance].con_img,footer:this.pistasDictionary[this.state.avance].footer}}else this.openModalError=!0},onErrorChange:function(t){this.openModalError=t},onCodigoChange:function(t){this.openModalCodigo=t},onSuccesChange:function(t){this.openModalSucces=t},onWinChange:function(t){this.openModalWin=t},onPistaChange:function(t){this.openModalPista=t},getImgUrl:function(t){return i("1771")("./"+t)}},mounted:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,i,o,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e={},String(this.equipo)!==String("azul")){t.next=8;break}return t.next=4,h.a.get("https://raw.githubusercontent.com/sansil/busqueda-del-tesoro/gh-pages/pistas/grupoAzul.json");case 4:i=t.sent,e=i.data,t.next=20;break;case 8:if(String(this.equipo)!==String("rojo")){t.next=15;break}return t.next=11,h.a.get("https://raw.githubusercontent.com/sansil/busqueda-del-tesoro/gh-pages/pistas/grupoRojo.json");case 11:o=t.sent,e=o.data,t.next=20;break;case 15:if(String(this.equipo)!==String("verde")){t.next=20;break}return t.next=18,h.a.get("https://raw.githubusercontent.com/sansil/busqueda-del-tesoro/gh-pages/pistas/grupoVerde.json");case 18:n=t.sent,e=n.data;case 20:this.pistasDictionary=e,this.state={avance:0,codigo:"",pista:this.pistasDictionary[0].pista,img:this.pistasDictionary[0].img,con_img:this.pistasDictionary[0].con_img,footer:this.pistasDictionary[0].footer};case 22:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},g=m,y=(i("39e0"),Object(p["a"])(g,o,n,!1,null,null,null));e["default"]=y.exports},"11e9":function(t,e,i){var o=i("52a7"),n=i("4630"),s=i("6821"),r=i("6a99"),a=i("69a8"),c=i("c69a"),d=Object.getOwnPropertyDescriptor;e.f=i("9e1e")?d:function(t,e){if(t=s(t),e=r(e,!0),c)try{return d(t,e)}catch(i){}if(a(t,e))return n(!o.f.call(t,e),t[e])}},1771:function(t,e,i){var o={"./Preboda-36.jpg":"bd50","./check.png":"f0c8","./codigo_diccionario.png":"7498","./css/animate.css":"ebd9","./hojaVid.jpeg":"5f5b","./hunt_treasure.png":"5550","./ingenio.jpg":"9d1d","./map3.png":"4077","./mapa.jpeg":"97a2","./naranja_pista.jpeg":"918b","./sass/main.scss":"9299","./sause_pista.jpeg":"b65c","./skull-crossbones-48.png":"217f","./test2.png":"9d67","./textura.png":"8435","./treasure.png":"1799"};function n(t){var e=s(t);return i(e)}function s(t){var e=o[t];if(!(e+1)){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return e}n.keys=function(){return Object.keys(o)},n.resolve=s,t.exports=n,n.id="1771"},1799:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAQISURBVGhD7ZhfSFNxFMdNM7IMTOgfIaViprDmn1VCImK1LUPT3CSiFKOngor+Oc1Y9pJB1EtRWUSkpZAvWUEF/f8HRVAZEmIPmRVBvVSWo+j0O3dndqfHdjbm9GFf+HDn5Z5zPvd372T3RoQTTjjhjO3stq0wOGzWa4pvNXYrhAJtls1ytc5mSSWNwFJtt+Y6bBYXNyQUOOyWvuoyaybp+Ben3T5BrUQP1ziUKIfXTqczkrTkqbGZ13INJTRU5EPHkRnQf2G8xiv1+dCGPPZYCdVlllWkJY+6B1u5Zr5oqMyHH+ejAS5GeNHXHA0H1IlxNb5Qt/Fp0pLHYbd2cc180XFk5hB5Dy8Pz2RrfGKzvCQteVTRD7aZD1wtUaw80t8ynq3xBX6ZSUue9JTkT4mJiTAWQBfSkmdhWkpeUhLfMJSgA7qQln8xpqbc4ZqGEnQgHf9jNM6Jm5ec9ItrPBy5CxPgUeNE6Ls5Dh6cjIElpgT2OAk4Gx1IJ7Bkp6XWc82H42FjDMAD9aUl7h2PYY+TgLNJI/AUZRlyik0L4H9sNM+H52diof9WJPy5/08e+X13HHy5Gg2fFZ1Nk8F1OxI6zsZqNVwvPTibNAJPcbbhHNdcD8rrpSV8vhIN325EaSfXVj8NVucYhvZWs0kjsJRmZc0qMi1wDWms2F85V1tVFMBV1sROTgUoyAY4awDo2aHYDvAsxVvecwxudfvb9k0fMgNnowPp+B/VxDm4qQdcQb2AJlpYAjBjmdqWArx3unmrTqR7PUDvHoA3lQBLF7mPMSve1QJ0Fmj1uBDcHIWTdPyLPT19QpHJ8EHfbGd5Jnx9UaFW1qGk1gE8z1CC29wr/a4aoF19Lixzbz0nMJhLW90n2q622r46dRLLtRP907Mbuq6XQHmucWAmOqALaclTZDKu08sj319t9JYZIbqul3rNRRfSkkcVPtY3QaBXrRYzMNjglRg0+zFpycP9qJLA/YjTw9VIIC15uCYSOGk9XI0E0pKHayKBk9bD1UggLXm4JhL0spuWz4bN5tle+7gaCaQlD9dEAj4De2TzUpM1PH8H+kCDkJY86/MXQyA8PRg/IIyrr78CTxri2RoJpCUP10TCrhIjfG/+dxU84L4dxRlsjQTSkoe7jFLw7QM+wOMt81PdUviK5VBV4K9VENKSh2sympCWPFyT0YS05OGajCakJU9/SyR0H42Fpi1zoKpgEfvFGklwJs5+c0w96SkX0pJH/x/k7fFJsGVlJjtoJMBZOFPvQFry6IuRD6emwN41ZvbyBhOc8fH0FK/ZCGnJM7gB0l6bxg4NJpfVDG42acnDNek5EccODSY4g5tNWvJwTfB3Djc0mLha+ZfDpBVOOOGEM6YSEfEXWX5p8FI3PqIAAAAASUVORK5CYII="},"217f":function(t,e){t.exports="data:image/png;base64,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"},"39e0":function(t,e,i){"use strict";var o=i("d2eb"),n=i.n(o);n.a},4077:function(t,e,i){t.exports=i.p+"img/map3.aa50a063.png"},"456d":function(t,e,i){var o=i("4bf8"),n=i("0d58");i("5eda")("keys",function(){return function(t){return n(o(t))}})},5550:function(t,e){t.exports="data:image/png;base64,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"},"5dbc":function(t,e,i){var o=i("d3f4"),n=i("8b97").set;t.exports=function(t,e,i){var s,r=e.constructor;return r!==i&&"function"==typeof r&&(s=r.prototype)!==i.prototype&&o(s)&&n&&n(t,s),t}},"5eda":function(t,e,i){var o=i("5ca1"),n=i("8378"),s=i("79e5");t.exports=function(t,e){var i=(n.Object||{})[t]||Object[t],r={};r[t]=e(i),o(o.S+o.F*s(function(){i(1)}),"Object",r)}},"5f5b":function(t,e,i){t.exports=i.p+"img/hojaVid.c27764e5.jpeg"},7498:function(t,e,i){t.exports=i.p+"img/codigo_diccionario.da312025.png"},8435:function(t,e,i){t.exports=i.p+"img/textura.c39f4c5b.png"},"8b97":function(t,e,i){var o=i("d3f4"),n=i("cb7c"),s=function(t,e){if(n(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{o=i("9b43")(Function.call,i("11e9").f(Object.prototype,"__proto__").set,2),o(t,[]),e=!(t instanceof Array)}catch(n){e=!0}return function(t,i){return s(t,i),e?t.__proto__=i:o(t,i),t}}({},!1):void 0),check:s}},9093:function(t,e,i){var o=i("ce10"),n=i("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return o(t,n)}},"918b":function(t,e,i){t.exports=i.p+"img/naranja_pista.77bb5985.jpeg"},9772:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{attrs:{id:"left"}}),i("div",{attrs:{id:"right"}})])}],s=i("caaf"),r=i.n(s),a={data:function(){return{options:""}},mounted:function(){var t=r.a.create({zone:document.getElementById("left"),mode:"static",position:{left:"30%",top:"50%"},color:"green",size:150,lockY:!0}),e=r.a.create({zone:document.getElementById("right"),mode:"static",position:{right:"30%",top:"50%"},color:"rgb(35, 153, 213)",size:150,lockX:!0});console.log(e),t.on("move",function(t,e){console.log(e.direction)})}},c=a,d=i("2877"),p=Object(d["a"])(c,o,n,!1,null,"3d92d5ae",null);e["default"]=p.exports},"97a2":function(t,e,i){t.exports=i.p+"img/mapa.57bcd0d9.jpeg"},"9d1d":function(t,e,i){t.exports=i.p+"img/ingenio.76b464c2.jpg"},aa77:function(t,e,i){var o=i("5ca1"),n=i("be13"),s=i("79e5"),r=i("fdef"),a="["+r+"]",c="​",d=RegExp("^"+a+a+"*"),p=RegExp(a+a+"*$"),l=function(t,e,i){var n={},a=s(function(){return!!r[t]()||c[t]()!=c}),d=n[t]=a?e(u):r[t];i&&(n[i]=d),o(o.P+o.F*a,"String",n)},u=l.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(p,"")),t};t.exports=l},ac6a:function(t,e,i){for(var o=i("cadf"),n=i("0d58"),s=i("2aba"),r=i("7726"),a=i("32e9"),c=i("84f2"),d=i("2b4c"),p=d("iterator"),l=d("toStringTag"),u=c.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=n(f),m=0;m<h.length;m++){var g,y=h[m],v=f[y],b=r[y],A=b&&b.prototype;if(A&&(A[p]||a(A,p,u),A[l]||a(A,l,y),c[y]=u,v))for(g in o)A[g]||s(A,g,o[g],!0)}},b65c:function(t,e,i){t.exports=i.p+"img/sause_pista.74e965f4.jpeg"},bd50:function(t,e,i){t.exports=i.p+"img/Preboda-36.850c3f8a.jpg"},c5f6:function(t,e,i){"use strict";var o=i("7726"),n=i("69a8"),s=i("2d95"),r=i("5dbc"),a=i("6a99"),c=i("79e5"),d=i("9093").f,p=i("11e9").f,l=i("86cc").f,u=i("aa77").trim,f="Number",h=o[f],m=h,g=h.prototype,y=s(i("2aeb")(g))==f,v="trim"in String.prototype,b=function(t){var e=a(t,!1);if("string"==typeof e&&e.length>2){e=v?e.trim():u(e,3);var i,o,n,s=e.charCodeAt(0);if(43===s||45===s){if(i=e.charCodeAt(2),88===i||120===i)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+e}for(var r,c=e.slice(2),d=0,p=c.length;d<p;d++)if(r=c.charCodeAt(d),r<48||r>n)return NaN;return parseInt(c,o)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof h&&(y?c(function(){g.valueOf.call(i)}):s(i)!=f)?r(new m(b(e)),i,h):b(e)};for(var A,x=i("9e1e")?d(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;x.length>O;O++)n(m,A=x[O])&&!n(h,A)&&l(h,A,p(m,A));h.prototype=g,g.constructor=h,i("2aba")(o,f,h)}},caaf:function(t,e,i){!function(e,i){t.exports=i()}(window,function(){return function(t){var e={};function i(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);var o,n=function(t,e){var i=e.x-t.x,o=e.y-t.y;return Math.sqrt(i*i+o*o)},s=function(t){return t*(Math.PI/180)},r=function(t){return t*(180/Math.PI)},a=function(t,e,i){for(var o,n=e.split(/[ ,]+/g),s=0;s<n.length;s+=1)o=n[s],t.addEventListener?t.addEventListener(o,i,!1):t.attachEvent&&t.attachEvent(o,i)},c=function(t,e,i){for(var o,n=e.split(/[ ,]+/g),s=0;s<n.length;s+=1)o=n[s],t.removeEventListener?t.removeEventListener(o,i):t.detachEvent&&t.detachEvent(o,i)},d=function(t){return t.preventDefault(),t.type.match(/^touch/)?t.changedTouches:t},p=function(){return{x:void 0!==window.pageXOffset?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,y:void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop}},l=function(t,e){e.top||e.right||e.bottom||e.left?(t.style.top=e.top,t.style.right=e.right,t.style.bottom=e.bottom,t.style.left=e.left):(t.style.left=e.x+"px",t.style.top=e.y+"px")},u=function(t,e,i){var o=f(t);for(var n in o)if(o.hasOwnProperty(n))if("string"==typeof e)o[n]=e+" "+i;else{for(var s="",r=0,a=e.length;r<a;r+=1)s+=e[r]+" "+i+", ";o[n]=s.slice(0,-2)}return o},f=function(t){var e={};return e[t]="",["webkit","Moz","o"].forEach(function(i){e[i+t.charAt(0).toUpperCase()+t.slice(1)]=""}),e},h=function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t},m=function(t,e){if(t.length)for(var i=0,o=t.length;i<o;i+=1)e(t[i]);else e(t)},g=!!("ontouchstart"in window),y=!!window.PointerEvent,v=!!window.MSPointerEvent,b={start:"mousedown",move:"mousemove",end:"mouseup"},A={};function x(){}y?o={start:"pointerdown",move:"pointermove",end:"pointerup, pointercancel"}:v?o={start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:g?(o={start:"touchstart",move:"touchmove",end:"touchend, touchcancel"},A=b):o=b,x.prototype.on=function(t,e){var i,o=t.split(/[ ,]+/g);this._handlers_=this._handlers_||{};for(var n=0;n<o.length;n+=1)i=o[n],this._handlers_[i]=this._handlers_[i]||[],this._handlers_[i].push(e);return this},x.prototype.off=function(t,e){return this._handlers_=this._handlers_||{},void 0===t?this._handlers_={}:void 0===e?this._handlers_[t]=null:this._handlers_[t]&&this._handlers_[t].indexOf(e)>=0&&this._handlers_[t].splice(this._handlers_[t].indexOf(e),1),this},x.prototype.trigger=function(t,e){var i,o=this,n=t.split(/[ ,]+/g);o._handlers_=o._handlers_||{};for(var s=0;s<n.length;s+=1)i=n[s],o._handlers_[i]&&o._handlers_[i].length&&o._handlers_[i].forEach(function(t){t.call(o,{type:i,target:o},e)})},x.prototype.config=function(t){this.options=this.defaults||{},t&&(this.options=function(t,e){var i={};for(var o in t)t.hasOwnProperty(o)&&e.hasOwnProperty(o)?i[o]=e[o]:t.hasOwnProperty(o)&&(i[o]=t[o]);return i}(this.options,t))},x.prototype.bindEvt=function(t,e){var i=this;return i._domHandlers_=i._domHandlers_||{},i._domHandlers_[e]=function(){"function"==typeof i["on"+e]?i["on"+e].apply(i,arguments):console.warn('[WARNING] : Missing "on'+e+'" handler.')},a(t,o[e],i._domHandlers_[e]),A[e]&&a(t,A[e],i._domHandlers_[e]),i},x.prototype.unbindEvt=function(t,e){return this._domHandlers_=this._domHandlers_||{},c(t,o[e],this._domHandlers_[e]),A[e]&&c(t,A[e],this._domHandlers_[e]),delete this._domHandlers_[e],this};var O=x;function w(t,e){return this.identifier=e.identifier,this.position=e.position,this.frontPosition=e.frontPosition,this.collection=t,this.defaults={size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,mode:"dynamic",zone:document.body,lockX:!1,lockY:!1},this.config(e),"dynamic"===this.options.mode&&(this.options.restOpacity=0),this.id=w.id,w.id+=1,this.buildEl().stylize(),this.instance={el:this.ui.el,on:this.on.bind(this),off:this.off.bind(this),show:this.show.bind(this),hide:this.hide.bind(this),add:this.addToDom.bind(this),remove:this.removeFromDom.bind(this),destroy:this.destroy.bind(this),resetDirection:this.resetDirection.bind(this),computeDirection:this.computeDirection.bind(this),trigger:this.trigger.bind(this),position:this.position,frontPosition:this.frontPosition,ui:this.ui,identifier:this.identifier,id:this.id,options:this.options},this.instance}w.prototype=new O,w.constructor=w,w.id=0,w.prototype.buildEl=function(t){return this.ui={},this.options.dataOnly?this:(this.ui.el=document.createElement("div"),this.ui.back=document.createElement("div"),this.ui.front=document.createElement("div"),this.ui.el.className="nipple collection_"+this.collection.id,this.ui.back.className="back",this.ui.front.className="front",this.ui.el.setAttribute("id","nipple_"+this.collection.id+"_"+this.id),this.ui.el.appendChild(this.ui.back),this.ui.el.appendChild(this.ui.front),this)},w.prototype.stylize=function(){if(this.options.dataOnly)return this;var t=this.options.fadeTime+"ms",e=function(t,e){var i=f(t);for(var o in i)i.hasOwnProperty(o)&&(i[o]=e);return i}("borderRadius","50%"),i=u("transition","opacity",t),o={};return o.el={position:"absolute",opacity:this.options.restOpacity,display:"block",zIndex:999},o.back={position:"absolute",display:"block",width:this.options.size+"px",height:this.options.size+"px",marginLeft:-this.options.size/2+"px",marginTop:-this.options.size/2+"px",background:this.options.color,opacity:".5"},o.front={width:this.options.size/2+"px",height:this.options.size/2+"px",position:"absolute",display:"block",marginLeft:-this.options.size/4+"px",marginTop:-this.options.size/4+"px",background:this.options.color,opacity:".5"},h(o.el,i),h(o.back,e),h(o.front,e),this.applyStyles(o),this},w.prototype.applyStyles=function(t){for(var e in this.ui)if(this.ui.hasOwnProperty(e))for(var i in t[e])this.ui[e].style[i]=t[e][i];return this},w.prototype.addToDom=function(){return this.options.dataOnly||document.body.contains(this.ui.el)?this:(this.options.zone.appendChild(this.ui.el),this)},w.prototype.removeFromDom=function(){return this.options.dataOnly||!document.body.contains(this.ui.el)?this:(this.options.zone.removeChild(this.ui.el),this)},w.prototype.destroy=function(){clearTimeout(this.removeTimeout),clearTimeout(this.showTimeout),clearTimeout(this.restTimeout),this.trigger("destroyed",this.instance),this.removeFromDom(),this.off()},w.prototype.show=function(t){var e=this;return e.options.dataOnly?e:(clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.addToDom(),e.restCallback(),setTimeout(function(){e.ui.el.style.opacity=1},0),e.showTimeout=setTimeout(function(){e.trigger("shown",e.instance),"function"==typeof t&&t.call(this)},e.options.fadeTime),e)},w.prototype.hide=function(t){var e=this;return e.options.dataOnly?e:(e.ui.el.style.opacity=e.options.restOpacity,clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.removeTimeout=setTimeout(function(){var i="dynamic"===e.options.mode?"none":"block";e.ui.el.style.display=i,"function"==typeof t&&t.call(e),e.trigger("hidden",e.instance)},e.options.fadeTime),e.options.restJoystick&&e.restPosition(),e)},w.prototype.restPosition=function(t){var e=this;e.frontPosition={x:0,y:0};var i=e.options.fadeTime+"ms",o={};o.front=u("transition",["top","left"],i);var n={front:{}};n.front={left:e.frontPosition.x+"px",top:e.frontPosition.y+"px"},e.applyStyles(o),e.applyStyles(n),e.restTimeout=setTimeout(function(){"function"==typeof t&&t.call(e),e.restCallback()},e.options.fadeTime)},w.prototype.restCallback=function(){var t={};t.front=u("transition","none",""),this.applyStyles(t),this.trigger("rested",this.instance)},w.prototype.resetDirection=function(){this.direction={x:!1,y:!1,angle:!1}},w.prototype.computeDirection=function(t){var e,i,o,n=t.angle.radian,s=Math.PI/4,r=Math.PI/2;if(n>s&&n<3*s&&!t.lockX?e="up":n>-s&&n<=s&&!t.lockY?e="left":n>3*-s&&n<=-s&&!t.lockX?e="down":t.lockY||(e="right"),t.lockY||(i=n>-r&&n<r?"left":"right"),t.lockX||(o=n>0?"up":"down"),t.force>this.options.threshold){var a,c={};for(a in this.direction)this.direction.hasOwnProperty(a)&&(c[a]=this.direction[a]);var d={};for(a in this.direction={x:i,y:o,angle:e},t.direction=this.direction,c)c[a]===this.direction[a]&&(d[a]=!0);if(d.x&&d.y&&d.angle)return t;d.x&&d.y||this.trigger("plain",t),d.x||this.trigger("plain:"+i,t),d.y||this.trigger("plain:"+o,t),d.angle||this.trigger("dir dir:"+e,t)}return t};var C=w;function k(t,e){return this.nipples=[],this.idles=[],this.actives=[],this.ids=[],this.pressureIntervals={},this.manager=t,this.id=k.id,k.id+=1,this.defaults={zone:document.body,multitouch:!1,maxNumberOfNipples:10,mode:"dynamic",position:{top:0,left:0},catchDistance:200,size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,lockX:!1,lockY:!1},this.config(e),"static"!==this.options.mode&&"semi"!==this.options.mode||(this.options.multitouch=!1),this.options.multitouch||(this.options.maxNumberOfNipples=1),this.updateBox(),this.prepareNipples(),this.bindings(),this.begin(),this.nipples}k.prototype=new O,k.constructor=k,k.id=0,k.prototype.prepareNipples=function(){var t=this.nipples;t.on=this.on.bind(this),t.off=this.off.bind(this),t.options=this.options,t.destroy=this.destroy.bind(this),t.ids=this.ids,t.id=this.id,t.processOnMove=this.processOnMove.bind(this),t.processOnEnd=this.processOnEnd.bind(this),t.get=function(e){if(void 0===e)return t[0];for(var i=0,o=t.length;i<o;i+=1)if(t[i].identifier===e)return t[i];return!1}},k.prototype.bindings=function(){this.bindEvt(this.options.zone,"start"),this.options.zone.style.touchAction="none",this.options.zone.style.msTouchAction="none"},k.prototype.begin=function(){var t=this.options;if("static"===t.mode){var e=this.createNipple(t.position,this.manager.getIdentifier());e.add(),this.idles.push(e)}},k.prototype.createNipple=function(t,e){var i=p(),o={},n=this.options;if(t.x&&t.y)o={x:t.x-(i.x+this.box.left),y:t.y-(i.y+this.box.top)};else if(t.top||t.right||t.bottom||t.left){var s=document.createElement("DIV");s.style.display="hidden",s.style.top=t.top,s.style.right=t.right,s.style.bottom=t.bottom,s.style.left=t.left,s.style.position="absolute",n.zone.appendChild(s);var r=s.getBoundingClientRect();n.zone.removeChild(s),o=t,t={x:r.left+i.x,y:r.top+i.y}}var a=new C(this,{color:n.color,size:n.size,threshold:n.threshold,fadeTime:n.fadeTime,dataOnly:n.dataOnly,restJoystick:n.restJoystick,restOpacity:n.restOpacity,mode:n.mode,identifier:e,position:t,zone:n.zone,frontPosition:{x:0,y:0}});return n.dataOnly||(l(a.ui.el,o),l(a.ui.front,a.frontPosition)),this.nipples.push(a),this.trigger("added "+a.identifier+":added",a),this.manager.trigger("added "+a.identifier+":added",a),this.bindNipple(a),a},k.prototype.updateBox=function(){this.box=this.options.zone.getBoundingClientRect()},k.prototype.bindNipple=function(t){var e,i=this,o=function(t,o){e=t.type+" "+o.id+":"+t.type,i.trigger(e,o)};t.on("destroyed",i.onDestroyed.bind(i)),t.on("shown hidden rested dir plain",o),t.on("dir:up dir:right dir:down dir:left",o),t.on("plain:up plain:right plain:down plain:left",o)},k.prototype.pressureFn=function(t,e,i){var o=this,n=0;clearInterval(o.pressureIntervals[i]),o.pressureIntervals[i]=setInterval(function(){var i=t.force||t.pressure||t.webkitForce||0;i!==n&&(e.trigger("pressure",i),o.trigger("pressure "+e.identifier+":pressure",i),n=i)}.bind(o),100)},k.prototype.onstart=function(t){var e=this,i=e.options,o=t;return t=d(t),e.updateBox(),m(t,function(n){e.actives.length<i.maxNumberOfNipples?e.processOnStart(n):o.type.match(/^touch/)&&(Object.keys(e.manager.ids).forEach(function(i){if(Object.values(o.touches).findIndex(function(t){return t.identifier===i})<0){var n=[t[0]];n.identifier=i,e.processOnEnd(n)}}),e.actives.length<i.maxNumberOfNipples&&e.processOnStart(n))}),e.manager.bindDocument(),!1},k.prototype.processOnStart=function(t){var e,i=this,o=i.options,s=i.manager.getIdentifier(t),r=t.force||t.pressure||t.webkitForce||0,a={x:t.pageX,y:t.pageY},c=i.getOrCreate(s,a);c.identifier!==s&&i.manager.removeIdentifier(c.identifier),c.identifier=s;var d=function(e){e.trigger("start",e),i.trigger("start "+e.id+":start",e),e.show(),r>0&&i.pressureFn(t,e,e.identifier),i.processOnMove(t)};if((e=i.idles.indexOf(c))>=0&&i.idles.splice(e,1),i.actives.push(c),i.ids.push(c.identifier),"semi"!==o.mode)d(c);else{if(!(n(a,c.position)<=o.catchDistance))return c.destroy(),void i.processOnStart(t);d(c)}return c},k.prototype.getOrCreate=function(t,e){var i,o=this.options;return/(semi|static)/.test(o.mode)?(i=this.idles[0])?(this.idles.splice(0,1),i):"semi"===o.mode?this.createNipple(e,t):(console.warn("Coudln't find the needed nipple."),!1):i=this.createNipple(e,t)},k.prototype.processOnMove=function(t){var e=this.options,i=this.manager.getIdentifier(t),o=this.nipples.get(i);if(!o)return console.error("Found zombie joystick with ID "+i),void this.manager.removeIdentifier(i);o.identifier=i;var a,c,d,p,u,f,h,m,g=o.options.size/2,y={x:t.pageX,y:t.pageY},v=n(y,o.position),b=(a=y,c=o.position,d=c.x-a.x,p=c.y-a.y,r(Math.atan2(p,d))),A=s(b),x=v/g,O={distance:v,position:y};v>g&&(v=g,u=o.position,f=v,m={x:0,y:0},h=s(h=b),m.x=u.x-f*Math.cos(h),m.y=u.y-f*Math.sin(h),y=m);var w=y.x-o.position.x,C=y.y-o.position.y;e.lockX&&(C=0),e.lockY&&(w=0),o.frontPosition={x:w,y:C},e.dataOnly||l(o.ui.front,o.frontPosition);var k={identifier:o.identifier,position:y,force:x,pressure:t.force||t.pressure||t.webkitForce||0,distance:v,angle:{radian:A,degree:b},raw:O,instance:o,lockX:e.lockX,lockY:e.lockY};(k=o.computeDirection(k)).angle={radian:s(180-b),degree:180-b},o.trigger("move",k),this.trigger("move "+o.id+":move",k)},k.prototype.processOnEnd=function(t){var e=this,i=e.options,o=e.manager.getIdentifier(t),n=e.nipples.get(o),s=e.manager.removeIdentifier(n.identifier);n&&(i.dataOnly||n.hide(function(){"dynamic"===i.mode&&(n.trigger("removed",n),e.trigger("removed "+n.id+":removed",n),e.manager.trigger("removed "+n.id+":removed",n),n.destroy())}),clearInterval(e.pressureIntervals[n.identifier]),n.resetDirection(),n.trigger("end",n),e.trigger("end "+n.id+":end",n),e.ids.indexOf(n.identifier)>=0&&e.ids.splice(e.ids.indexOf(n.identifier),1),e.actives.indexOf(n)>=0&&e.actives.splice(e.actives.indexOf(n),1),/(semi|static)/.test(i.mode)?e.idles.push(n):e.nipples.indexOf(n)>=0&&e.nipples.splice(e.nipples.indexOf(n),1),e.manager.unbindDocument(),/(semi|static)/.test(i.mode)&&(e.manager.ids[s.id]=s.identifier))},k.prototype.onDestroyed=function(t,e){this.nipples.indexOf(e)>=0&&this.nipples.splice(this.nipples.indexOf(e),1),this.actives.indexOf(e)>=0&&this.actives.splice(this.actives.indexOf(e),1),this.idles.indexOf(e)>=0&&this.idles.splice(this.idles.indexOf(e),1),this.ids.indexOf(e.identifier)>=0&&this.ids.splice(this.ids.indexOf(e.identifier),1),this.manager.removeIdentifier(e.identifier),this.manager.unbindDocument()},k.prototype.destroy=function(){for(var t in this.unbindEvt(this.options.zone,"start"),this.nipples.forEach(function(t){t.destroy()}),this.pressureIntervals)this.pressureIntervals.hasOwnProperty(t)&&clearInterval(this.pressureIntervals[t]);this.trigger("destroyed",this.nipples),this.manager.unbindDocument(),this.off()};var S=k;function T(t){var e,i=this;return i.ids={},i.index=0,i.collections=[],i.config(t),i.prepareCollections(),a(window,"resize",function(t){clearTimeout(e),e=setTimeout(function(){var t,e=p();i.collections.forEach(function(i){i.forEach(function(i){t=i.el.getBoundingClientRect(),i.position={x:e.x+t.left,y:e.y+t.top}})})},100)}),i.collections}T.prototype=new O,T.constructor=T,T.prototype.prepareCollections=function(){var t=this;t.collections.create=t.create.bind(t),t.collections.on=t.on.bind(t),t.collections.off=t.off.bind(t),t.collections.destroy=t.destroy.bind(t),t.collections.get=function(e){var i;return t.collections.every(function(t){return!(i=t.get(e))}),i}},T.prototype.create=function(t){return this.createCollection(t)},T.prototype.createCollection=function(t){var e=new S(this,t);return this.bindCollection(e),this.collections.push(e),e},T.prototype.bindCollection=function(t){var e,i=this,o=function(t,o){e=t.type+" "+o.id+":"+t.type,i.trigger(e,o)};t.on("destroyed",i.onDestroyed.bind(i)),t.on("shown hidden rested dir plain",o),t.on("dir:up dir:right dir:down dir:left",o),t.on("plain:up plain:right plain:down plain:left",o)},T.prototype.bindDocument=function(){this.binded||(this.bindEvt(document,"move").bindEvt(document,"end"),this.binded=!0)},T.prototype.unbindDocument=function(t){Object.keys(this.ids).length&&!0!==t||(this.unbindEvt(document,"move").unbindEvt(document,"end"),this.binded=!1)},T.prototype.getIdentifier=function(t){var e;return t?void 0===(e=void 0===t.identifier?t.pointerId:t.identifier)&&(e=this.latest||0):e=this.index,void 0===this.ids[e]&&(this.ids[e]=this.index,this.index+=1),this.latest=e,this.ids[e]},T.prototype.removeIdentifier=function(t){var e={};for(var i in this.ids)if(this.ids[i]===t){e.id=i,e.identifier=this.ids[i],delete this.ids[i];break}return e},T.prototype.onmove=function(t){return this.onAny("move",t),!1},T.prototype.onend=function(t){return this.onAny("end",t),!1},T.prototype.oncancel=function(t){return this.onAny("end",t),!1},T.prototype.onAny=function(t,e){var i,o=this,n="processOn"+t.charAt(0).toUpperCase()+t.slice(1);return e=d(e),m(e,function(t){i=o.getIdentifier(t),m(o.collections,function(t,e,i){i.ids.indexOf(e)>=0&&(i[n](t),t._found_=!0)}.bind(null,t,i)),t._found_||o.removeIdentifier(i)}),!1},T.prototype.destroy=function(){this.unbindDocument(!0),this.ids={},this.index=0,this.collections.forEach(function(t){t.destroy()}),this.off()},T.prototype.onDestroyed=function(t,e){if(this.collections.indexOf(e)<0)return!1;this.collections.splice(this.collections.indexOf(e),1)};var M=new T;e.default={create:function(t){return M.create(t)},factory:M}}]).default})},d2eb:function(t,e,i){},f0c8:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANOSURBVGhD7ZnLbtNAFIYrbgt23FbAY4DgHbhWIG4P0ooHAITEBipxKU1g2wpoaGFbiUrxjImQSMwOFm3jFNHLurAx55+eisg5k4ydsdnklz6prT1n/rmdGU/HRhpppOE1m8zuVz/VORWru8SbINbfVEdvB7H6A/jnCM/MO/RukiT7uPj/U9gOT6uOekAGYyLJSNuUXVOnOFx5asSN41T5i6CjfgvGMoEYNDpPEZPDFysd69tU8VbayLBQQzYQm6vxryiKDlGvT0uV+4TWz7NG0jjI1foRDe9hWnwfpQoLIdYfUCdXP5xMz5dp/h81LyNRxrSxgenENvKpHus7UuAyCdrhDbaTTZ86X05QZtiUgpaJyU5tfYxtuQvDJwUsioUfi+LfAXmZYltuwg7rY5Nypdp6lVycv5o8DB+Jz+Glvlo/yfYGi48HYjDf7Jm/8O6KwdYI8nSf7fUXDllUgM4pUhC/pM0D/P7+e+90olFYdToA0oI5ny5cBDbzlagqvg/q65/Psk27zHFXKOyTSut1ZvOAFvMk27SLhuqtVNgXNvMzNCLS+91QA+bYpl3mw0Mo7INhzAPy1mKbdtGL2+mCNvrl7jQwf2l+PLd5QLNjk23a5Zr/ke5gYNC8BT7MA3hjm3a5NADmXY3YzQ9ueBqnBtCLfacQcjQMuBiqRv7MA7cpRAtFKtyNLYd3G/Nt3hDrJtu0y1x9SIVT2DLKy1bFah7PpFiuOKXRLBuZrRFFmAfUgAm2aZe5oBIK25AWaTe+zIOwE55hm3bhwBR09JoUwIatEcZ80495WsBuhzkIR1cpSD/S896neUCdeo/tDRau+1z2gzRoxOXauHfz1KE7mT5oIFz3ycH6g0ZMN2fEZ3mh3n/CttyFD2lsHFLAUonVL+r9o2wrm6jwLTFoieh1fZ3t5BPl3udS4HJQj9lGfu1e6upab/DCqeEfJ2xjOOGilUZiUaikECiBLHi73N0TLlqpEYVfdiHjLCVLB7ha/wrawU3KThtS5cOwG1Nd42qKlUmxsZ7Ks9n1onbQ68sry0c4fHnCjo1jBzVkRTZnB2VwPMi8wxYhHLJw6USjMknM4cODTG5hhHiU8D+1r3hGTOBU6XwwG2mkkfpobOwvmYsTyLH4YP8AAAAASUVORK5CYII="},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=about.0e12074e.js.map