(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"053a":function(t,i,e){},9772:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{attrs:{id:"left"}}),e("div",{attrs:{id:"right"}})])}],s=e("caaf"),r=e.n(s),d={data:function(){return{options:""}},mounted:function(){var t=r.a.create({zone:document.getElementById("left"),mode:"static",position:{left:"30%",top:"50%"},color:"green",size:150,lockY:!0}),i=r.a.create({zone:document.getElementById("right"),mode:"static",position:{right:"30%",top:"50%"},color:"rgb(35, 153, 213)",size:150,lockX:!0});console.log(i),t.on("move",function(t,i){console.log(i.direction)})}},a=d,c=e("2877"),p=Object(c["a"])(a,n,o,!1,null,"3d92d5ae",null);i["default"]=p.exports},a77b:function(t,i,e){"use strict";var n=e("053a"),o=e.n(n);o.a},c5f9:function(t,i,e){t.exports=e.p+"img/mapa_intro.1780063e.jpg"},caaf:function(t,i,e){!function(i,e){t.exports=e()}(window,function(){return function(t){var i={};function e(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var o in t)e.d(n,o,function(i){return t[i]}.bind(null,o));return n},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=0)}([function(t,i,e){"use strict";e.r(i);var n,o=function(t,i){var e=i.x-t.x,n=i.y-t.y;return Math.sqrt(e*e+n*n)},s=function(t){return t*(Math.PI/180)},r=function(t){return t*(180/Math.PI)},d=function(t,i,e){for(var n,o=i.split(/[ ,]+/g),s=0;s<o.length;s+=1)n=o[s],t.addEventListener?t.addEventListener(n,e,!1):t.attachEvent&&t.attachEvent(n,e)},a=function(t,i,e){for(var n,o=i.split(/[ ,]+/g),s=0;s<o.length;s+=1)n=o[s],t.removeEventListener?t.removeEventListener(n,e):t.detachEvent&&t.detachEvent(n,e)},c=function(t){return t.preventDefault(),t.type.match(/^touch/)?t.changedTouches:t},p=function(){return{x:void 0!==window.pageXOffset?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,y:void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop}},l=function(t,i){i.top||i.right||i.bottom||i.left?(t.style.top=i.top,t.style.right=i.right,t.style.bottom=i.bottom,t.style.left=i.left):(t.style.left=i.x+"px",t.style.top=i.y+"px")},h=function(t,i,e){var n=u(t);for(var o in n)if(n.hasOwnProperty(o))if("string"==typeof i)n[o]=i+" "+e;else{for(var s="",r=0,d=i.length;r<d;r+=1)s+=i[r]+" "+e+", ";n[o]=s.slice(0,-2)}return n},u=function(t){var i={};return i[t]="",["webkit","Moz","o"].forEach(function(e){i[e+t.charAt(0).toUpperCase()+t.slice(1)]=""}),i},f=function(t,i){for(var e in i)i.hasOwnProperty(e)&&(t[e]=i[e]);return t},m=function(t,i){if(t.length)for(var e=0,n=t.length;e<n;e+=1)i(t[e]);else i(t)},y=!!("ontouchstart"in window),v=!!window.PointerEvent,g=!!window.MSPointerEvent,b={start:"mousedown",move:"mousemove",end:"mouseup"},x={};function _(){}v?n={start:"pointerdown",move:"pointermove",end:"pointerup, pointercancel"}:g?n={start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:y?(n={start:"touchstart",move:"touchmove",end:"touchend, touchcancel"},x=b):n=b,_.prototype.on=function(t,i){var e,n=t.split(/[ ,]+/g);this._handlers_=this._handlers_||{};for(var o=0;o<n.length;o+=1)e=n[o],this._handlers_[e]=this._handlers_[e]||[],this._handlers_[e].push(i);return this},_.prototype.off=function(t,i){return this._handlers_=this._handlers_||{},void 0===t?this._handlers_={}:void 0===i?this._handlers_[t]=null:this._handlers_[t]&&this._handlers_[t].indexOf(i)>=0&&this._handlers_[t].splice(this._handlers_[t].indexOf(i),1),this},_.prototype.trigger=function(t,i){var e,n=this,o=t.split(/[ ,]+/g);n._handlers_=n._handlers_||{};for(var s=0;s<o.length;s+=1)e=o[s],n._handlers_[e]&&n._handlers_[e].length&&n._handlers_[e].forEach(function(t){t.call(n,{type:e,target:n},i)})},_.prototype.config=function(t){this.options=this.defaults||{},t&&(this.options=function(t,i){var e={};for(var n in t)t.hasOwnProperty(n)&&i.hasOwnProperty(n)?e[n]=i[n]:t.hasOwnProperty(n)&&(e[n]=t[n]);return e}(this.options,t))},_.prototype.bindEvt=function(t,i){var e=this;return e._domHandlers_=e._domHandlers_||{},e._domHandlers_[i]=function(){"function"==typeof e["on"+i]?e["on"+i].apply(e,arguments):console.warn('[WARNING] : Missing "on'+i+'" handler.')},d(t,n[i],e._domHandlers_[i]),x[i]&&d(t,x[i],e._domHandlers_[i]),e},_.prototype.unbindEvt=function(t,i){return this._domHandlers_=this._domHandlers_||{},a(t,n[i],this._domHandlers_[i]),x[i]&&a(t,x[i],this._domHandlers_[i]),delete this._domHandlers_[i],this};var O=_;function w(t,i){return this.identifier=i.identifier,this.position=i.position,this.frontPosition=i.frontPosition,this.collection=t,this.defaults={size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,mode:"dynamic",zone:document.body,lockX:!1,lockY:!1},this.config(i),"dynamic"===this.options.mode&&(this.options.restOpacity=0),this.id=w.id,w.id+=1,this.buildEl().stylize(),this.instance={el:this.ui.el,on:this.on.bind(this),off:this.off.bind(this),show:this.show.bind(this),hide:this.hide.bind(this),add:this.addToDom.bind(this),remove:this.removeFromDom.bind(this),destroy:this.destroy.bind(this),resetDirection:this.resetDirection.bind(this),computeDirection:this.computeDirection.bind(this),trigger:this.trigger.bind(this),position:this.position,frontPosition:this.frontPosition,ui:this.ui,identifier:this.identifier,id:this.id,options:this.options},this.instance}w.prototype=new O,w.constructor=w,w.id=0,w.prototype.buildEl=function(t){return this.ui={},this.options.dataOnly?this:(this.ui.el=document.createElement("div"),this.ui.back=document.createElement("div"),this.ui.front=document.createElement("div"),this.ui.el.className="nipple collection_"+this.collection.id,this.ui.back.className="back",this.ui.front.className="front",this.ui.el.setAttribute("id","nipple_"+this.collection.id+"_"+this.id),this.ui.el.appendChild(this.ui.back),this.ui.el.appendChild(this.ui.front),this)},w.prototype.stylize=function(){if(this.options.dataOnly)return this;var t=this.options.fadeTime+"ms",i=function(t,i){var e=u(t);for(var n in e)e.hasOwnProperty(n)&&(e[n]=i);return e}("borderRadius","50%"),e=h("transition","opacity",t),n={};return n.el={position:"absolute",opacity:this.options.restOpacity,display:"block",zIndex:999},n.back={position:"absolute",display:"block",width:this.options.size+"px",height:this.options.size+"px",marginLeft:-this.options.size/2+"px",marginTop:-this.options.size/2+"px",background:this.options.color,opacity:".5"},n.front={width:this.options.size/2+"px",height:this.options.size/2+"px",position:"absolute",display:"block",marginLeft:-this.options.size/4+"px",marginTop:-this.options.size/4+"px",background:this.options.color,opacity:".5"},f(n.el,e),f(n.back,i),f(n.front,i),this.applyStyles(n),this},w.prototype.applyStyles=function(t){for(var i in this.ui)if(this.ui.hasOwnProperty(i))for(var e in t[i])this.ui[i].style[e]=t[i][e];return this},w.prototype.addToDom=function(){return this.options.dataOnly||document.body.contains(this.ui.el)?this:(this.options.zone.appendChild(this.ui.el),this)},w.prototype.removeFromDom=function(){return this.options.dataOnly||!document.body.contains(this.ui.el)?this:(this.options.zone.removeChild(this.ui.el),this)},w.prototype.destroy=function(){clearTimeout(this.removeTimeout),clearTimeout(this.showTimeout),clearTimeout(this.restTimeout),this.trigger("destroyed",this.instance),this.removeFromDom(),this.off()},w.prototype.show=function(t){var i=this;return i.options.dataOnly?i:(clearTimeout(i.removeTimeout),clearTimeout(i.showTimeout),clearTimeout(i.restTimeout),i.addToDom(),i.restCallback(),setTimeout(function(){i.ui.el.style.opacity=1},0),i.showTimeout=setTimeout(function(){i.trigger("shown",i.instance),"function"==typeof t&&t.call(this)},i.options.fadeTime),i)},w.prototype.hide=function(t){var i=this;return i.options.dataOnly?i:(i.ui.el.style.opacity=i.options.restOpacity,clearTimeout(i.removeTimeout),clearTimeout(i.showTimeout),clearTimeout(i.restTimeout),i.removeTimeout=setTimeout(function(){var e="dynamic"===i.options.mode?"none":"block";i.ui.el.style.display=e,"function"==typeof t&&t.call(i),i.trigger("hidden",i.instance)},i.options.fadeTime),i.options.restJoystick&&i.restPosition(),i)},w.prototype.restPosition=function(t){var i=this;i.frontPosition={x:0,y:0};var e=i.options.fadeTime+"ms",n={};n.front=h("transition",["top","left"],e);var o={front:{}};o.front={left:i.frontPosition.x+"px",top:i.frontPosition.y+"px"},i.applyStyles(n),i.applyStyles(o),i.restTimeout=setTimeout(function(){"function"==typeof t&&t.call(i),i.restCallback()},i.options.fadeTime)},w.prototype.restCallback=function(){var t={};t.front=h("transition","none",""),this.applyStyles(t),this.trigger("rested",this.instance)},w.prototype.resetDirection=function(){this.direction={x:!1,y:!1,angle:!1}},w.prototype.computeDirection=function(t){var i,e,n,o=t.angle.radian,s=Math.PI/4,r=Math.PI/2;if(o>s&&o<3*s&&!t.lockX?i="up":o>-s&&o<=s&&!t.lockY?i="left":o>3*-s&&o<=-s&&!t.lockX?i="down":t.lockY||(i="right"),t.lockY||(e=o>-r&&o<r?"left":"right"),t.lockX||(n=o>0?"up":"down"),t.force>this.options.threshold){var d,a={};for(d in this.direction)this.direction.hasOwnProperty(d)&&(a[d]=this.direction[d]);var c={};for(d in this.direction={x:e,y:n,angle:i},t.direction=this.direction,a)a[d]===this.direction[d]&&(c[d]=!0);if(c.x&&c.y&&c.angle)return t;c.x&&c.y||this.trigger("plain",t),c.x||this.trigger("plain:"+e,t),c.y||this.trigger("plain:"+n,t),c.angle||this.trigger("dir dir:"+i,t)}return t};var k=w;function T(t,i){return this.nipples=[],this.idles=[],this.actives=[],this.ids=[],this.pressureIntervals={},this.manager=t,this.id=T.id,T.id+=1,this.defaults={zone:document.body,multitouch:!1,maxNumberOfNipples:10,mode:"dynamic",position:{top:0,left:0},catchDistance:200,size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,lockX:!1,lockY:!1},this.config(i),"static"!==this.options.mode&&"semi"!==this.options.mode||(this.options.multitouch=!1),this.options.multitouch||(this.options.maxNumberOfNipples=1),this.updateBox(),this.prepareNipples(),this.bindings(),this.begin(),this.nipples}T.prototype=new O,T.constructor=T,T.id=0,T.prototype.prepareNipples=function(){var t=this.nipples;t.on=this.on.bind(this),t.off=this.off.bind(this),t.options=this.options,t.destroy=this.destroy.bind(this),t.ids=this.ids,t.id=this.id,t.processOnMove=this.processOnMove.bind(this),t.processOnEnd=this.processOnEnd.bind(this),t.get=function(i){if(void 0===i)return t[0];for(var e=0,n=t.length;e<n;e+=1)if(t[e].identifier===i)return t[e];return!1}},T.prototype.bindings=function(){this.bindEvt(this.options.zone,"start"),this.options.zone.style.touchAction="none",this.options.zone.style.msTouchAction="none"},T.prototype.begin=function(){var t=this.options;if("static"===t.mode){var i=this.createNipple(t.position,this.manager.getIdentifier());i.add(),this.idles.push(i)}},T.prototype.createNipple=function(t,i){var e=p(),n={},o=this.options;if(t.x&&t.y)n={x:t.x-(e.x+this.box.left),y:t.y-(e.y+this.box.top)};else if(t.top||t.right||t.bottom||t.left){var s=document.createElement("DIV");s.style.display="hidden",s.style.top=t.top,s.style.right=t.right,s.style.bottom=t.bottom,s.style.left=t.left,s.style.position="absolute",o.zone.appendChild(s);var r=s.getBoundingClientRect();o.zone.removeChild(s),n=t,t={x:r.left+e.x,y:r.top+e.y}}var d=new k(this,{color:o.color,size:o.size,threshold:o.threshold,fadeTime:o.fadeTime,dataOnly:o.dataOnly,restJoystick:o.restJoystick,restOpacity:o.restOpacity,mode:o.mode,identifier:i,position:t,zone:o.zone,frontPosition:{x:0,y:0}});return o.dataOnly||(l(d.ui.el,n),l(d.ui.front,d.frontPosition)),this.nipples.push(d),this.trigger("added "+d.identifier+":added",d),this.manager.trigger("added "+d.identifier+":added",d),this.bindNipple(d),d},T.prototype.updateBox=function(){this.box=this.options.zone.getBoundingClientRect()},T.prototype.bindNipple=function(t){var i,e=this,n=function(t,n){i=t.type+" "+n.id+":"+t.type,e.trigger(i,n)};t.on("destroyed",e.onDestroyed.bind(e)),t.on("shown hidden rested dir plain",n),t.on("dir:up dir:right dir:down dir:left",n),t.on("plain:up plain:right plain:down plain:left",n)},T.prototype.pressureFn=function(t,i,e){var n=this,o=0;clearInterval(n.pressureIntervals[e]),n.pressureIntervals[e]=setInterval(function(){var e=t.force||t.pressure||t.webkitForce||0;e!==o&&(i.trigger("pressure",e),n.trigger("pressure "+i.identifier+":pressure",e),o=e)}.bind(n),100)},T.prototype.onstart=function(t){var i=this,e=i.options;return t=c(t),i.updateBox(),m(t,function(t){i.actives.length<e.maxNumberOfNipples&&i.processOnStart(t)}),i.manager.bindDocument(),!1},T.prototype.processOnStart=function(t){var i,e=this,n=e.options,s=e.manager.getIdentifier(t),r=t.force||t.pressure||t.webkitForce||0,d={x:t.pageX,y:t.pageY},a=e.getOrCreate(s,d);a.identifier!==s&&e.manager.removeIdentifier(a.identifier),a.identifier=s;var c=function(i){i.trigger("start",i),e.trigger("start "+i.id+":start",i),i.show(),r>0&&e.pressureFn(t,i,i.identifier),e.processOnMove(t)};if((i=e.idles.indexOf(a))>=0&&e.idles.splice(i,1),e.actives.push(a),e.ids.push(a.identifier),"semi"!==n.mode)c(a);else{if(!(o(d,a.position)<=n.catchDistance))return a.destroy(),void e.processOnStart(t);c(a)}return a},T.prototype.getOrCreate=function(t,i){var e,n=this.options;return/(semi|static)/.test(n.mode)?(e=this.idles[0])?(this.idles.splice(0,1),e):"semi"===n.mode?this.createNipple(i,t):(console.warn("Coudln't find the needed nipple."),!1):e=this.createNipple(i,t)},T.prototype.processOnMove=function(t){var i=this.options,e=this.manager.getIdentifier(t),n=this.nipples.get(e);if(!n)return console.error("Found zombie joystick with ID "+e),void this.manager.removeIdentifier(e);n.identifier=e;var d,a,c,p,h,u,f,m,y=n.options.size/2,v={x:t.pageX,y:t.pageY},g=o(v,n.position),b=(d=v,a=n.position,c=a.x-d.x,p=a.y-d.y,r(Math.atan2(p,c))),x=s(b),_=g/y;g>y&&(g=y,h=n.position,u=g,m={x:0,y:0},f=s(f=b),m.x=h.x-u*Math.cos(f),m.y=h.y-u*Math.sin(f),v=m);var O=v.x-n.position.x,w=v.y-n.position.y;i.lockX&&(w=0),i.lockY&&(O=0),n.frontPosition={x:O,y:w},i.dataOnly||l(n.ui.front,n.frontPosition);var k={identifier:n.identifier,position:v,force:_,pressure:t.force||t.pressure||t.webkitForce||0,distance:g,angle:{radian:x,degree:b},instance:n,lockX:i.lockX,lockY:i.lockY};(k=n.computeDirection(k)).angle={radian:s(180-b),degree:180-b},n.trigger("move",k),this.trigger("move "+n.id+":move",k)},T.prototype.processOnEnd=function(t){var i=this,e=i.options,n=i.manager.getIdentifier(t),o=i.nipples.get(n),s=i.manager.removeIdentifier(o.identifier);o&&(e.dataOnly||o.hide(function(){"dynamic"===e.mode&&(o.trigger("removed",o),i.trigger("removed "+o.id+":removed",o),i.manager.trigger("removed "+o.id+":removed",o),o.destroy())}),clearInterval(i.pressureIntervals[o.identifier]),o.resetDirection(),o.trigger("end",o),i.trigger("end "+o.id+":end",o),i.ids.indexOf(o.identifier)>=0&&i.ids.splice(i.ids.indexOf(o.identifier),1),i.actives.indexOf(o)>=0&&i.actives.splice(i.actives.indexOf(o),1),/(semi|static)/.test(e.mode)?i.idles.push(o):i.nipples.indexOf(o)>=0&&i.nipples.splice(i.nipples.indexOf(o),1),i.manager.unbindDocument(),/(semi|static)/.test(e.mode)&&(i.manager.ids[s.id]=s.identifier))},T.prototype.onDestroyed=function(t,i){this.nipples.indexOf(i)>=0&&this.nipples.splice(this.nipples.indexOf(i),1),this.actives.indexOf(i)>=0&&this.actives.splice(this.actives.indexOf(i),1),this.idles.indexOf(i)>=0&&this.idles.splice(this.idles.indexOf(i),1),this.ids.indexOf(i.identifier)>=0&&this.ids.splice(this.ids.indexOf(i.identifier),1),this.manager.removeIdentifier(i.identifier),this.manager.unbindDocument()},T.prototype.destroy=function(){for(var t in this.unbindEvt(this.options.zone,"start"),this.nipples.forEach(function(t){t.destroy()}),this.pressureIntervals)this.pressureIntervals.hasOwnProperty(t)&&clearInterval(this.pressureIntervals[t]);this.trigger("destroyed",this.nipples),this.manager.unbindDocument(),this.off()};var E=T;function z(t){var i,e=this;return e.ids={},e.index=0,e.collections=[],e.config(t),e.prepareCollections(),d(window,"resize",function(t){clearTimeout(i),i=setTimeout(function(){var t,i=p();e.collections.forEach(function(e){e.forEach(function(e){t=e.el.getBoundingClientRect(),e.position={x:i.x+t.left,y:i.y+t.top}})})},100)}),e.collections}z.prototype=new O,z.constructor=z,z.prototype.prepareCollections=function(){var t=this;t.collections.create=t.create.bind(t),t.collections.on=t.on.bind(t),t.collections.off=t.off.bind(t),t.collections.destroy=t.destroy.bind(t),t.collections.get=function(i){var e;return t.collections.every(function(t){return!(e=t.get(i))}),e}},z.prototype.create=function(t){return this.createCollection(t)},z.prototype.createCollection=function(t){var i=new E(this,t);return this.bindCollection(i),this.collections.push(i),i},z.prototype.bindCollection=function(t){var i,e=this,n=function(t,n){i=t.type+" "+n.id+":"+t.type,e.trigger(i,n)};t.on("destroyed",e.onDestroyed.bind(e)),t.on("shown hidden rested dir plain",n),t.on("dir:up dir:right dir:down dir:left",n),t.on("plain:up plain:right plain:down plain:left",n)},z.prototype.bindDocument=function(){this.binded||(this.bindEvt(document,"move").bindEvt(document,"end"),this.binded=!0)},z.prototype.unbindDocument=function(t){Object.keys(this.ids).length&&!0!==t||(this.unbindEvt(document,"move").unbindEvt(document,"end"),this.binded=!1)},z.prototype.getIdentifier=function(t){var i;return t?void 0===(i=void 0===t.identifier?t.pointerId:t.identifier)&&(i=this.latest||0):i=this.index,void 0===this.ids[i]&&(this.ids[i]=this.index,this.index+=1),this.latest=i,this.ids[i]},z.prototype.removeIdentifier=function(t){var i={};for(var e in this.ids)if(this.ids[e]===t){i.id=e,i.identifier=this.ids[e],delete this.ids[e];break}return i},z.prototype.onmove=function(t){return this.onAny("move",t),!1},z.prototype.onend=function(t){return this.onAny("end",t),!1},z.prototype.oncancel=function(t){return this.onAny("end",t),!1},z.prototype.onAny=function(t,i){var e,n=this,o="processOn"+t.charAt(0).toUpperCase()+t.slice(1);return i=c(i),m(i,function(t){e=n.getIdentifier(t),m(n.collections,function(t,i,e){e.ids.indexOf(i)>=0&&(e[o](t),t._found_=!0)}.bind(null,t,e)),t._found_||n.removeIdentifier(e)}),!1},z.prototype.destroy=function(){this.unbindDocument(!0),this.ids={},this.index=0,this.collections.forEach(function(t){t.destroy()}),this.off()},z.prototype.onDestroyed=function(t,i){if(this.collections.indexOf(i)<0)return!1;this.collections.splice(this.collections.indexOf(i),1)};var P=new z;i.default={create:function(t){return P.create(t)},factory:P}}]).default})},f820:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("div",{staticClass:"background-start"}),n("div",{staticClass:"card-cont container"},[n("div",{staticClass:"card",staticStyle:{"z-index":"100"}},[n("div",{staticClass:"card-image"},[n("figure",{staticClass:"image is-4by3"},[n("img",{attrs:{src:e("c5f9"),alt:"Placeholder image"}})])]),n("div",{staticClass:"card-content"})])])])}],s={},r=s,d=(e("a77b"),e("2877")),a=Object(d["a"])(r,n,o,!1,null,"585c5214",null);i["default"]=a.exports}}]);
//# sourceMappingURL=about.7f9be66c.js.map