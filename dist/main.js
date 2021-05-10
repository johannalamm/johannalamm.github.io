/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={144:(t,e,n)=>{"use strict";n.d(e,{Z:()=>d});var i=n(645),o=n.n(i),r=n(667),s=n.n(r),a=n(791),h=o()((function(t){return t[1]})),c=s()(a);h.push([t.id,'@font-face{font-family:"Raleway";font-weight:100 1000;font-stretch:25% 151%;src:url('+c+') format("truetype")}body{font-family:"Raleway",sans-serif;background-color:#ede8e5;margin:0;min-height:100vh;min-height:-webkit-fill-available}html{height:-webkit-fill-available}',""]);const d=h},510:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});var i=n(645),o=n.n(i)()((function(t){return t[1]}));o.push([t.id,"johanna-start .headings{width:fit-content;position:absolute;top:30%;right:0;left:0;margin-left:auto;margin-right:auto;text-align:center;display:flex;flex-direction:column;align-items:center}johanna-start h1{background:#ede8e5;width:fit-content;padding:.2em .4em;margin-bottom:.4em;text-align:center}johanna-start h2{background:#ede8e5;width:fit-content;padding:.2em;margin-top:0;font-weight:500}johanna-start .hill,johanna-start .hill-4,johanna-start .hill-3,johanna-start .hill-2,johanna-start .hill-1{position:absolute;bottom:0}johanna-start .hill-1{right:0;height:75vh}johanna-start .hill-2{left:0;height:81vh}johanna-start .hill-3{right:0;height:48vh}johanna-start .hill-4{left:0;height:42vh}",""]);const r=o},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,i){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(o[s]=!0)}for(var a=0;a<t.length;a++){var h=[].concat(t[a]);i&&o[h[0]]||(n&&(h[2]?h[2]="".concat(n," and ").concat(h[2]):h[2]=n),e.push(h))}},e}},667:t=>{"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},384:(t,e,n)=>{var i,o;!function(r,s){i=[n(131),n(842)],void 0===(o=function(t,e){return function(t,e,n){function i(t,e){for(var n in e)t[n]=e[n];return t}var o=t.jQuery;function r(t,e){this.element="string"==typeof t?document.querySelector(t):t,o&&(this.$element=o(this.element)),this.options=i({},this.constructor.defaults),this.option(e),this._create()}var s=r.prototype=Object.create(n.prototype);r.defaults={},s.option=function(t){i(this.options,t)};var a={relative:!0,absolute:!0,fixed:!0};function h(t,e,n){return n=n||"round",e?Math[n](t/e)*e:t}return s._create=function(){this.position={},this._getPosition(),this.startPoint={x:0,y:0},this.dragPoint={x:0,y:0},this.startPosition=i({},this.position);var t=getComputedStyle(this.element);a[t.position]||(this.element.style.position="relative"),this.on("pointerMove",this.onPointerMove),this.on("pointerUp",this.onPointerUp),this.enable(),this.setHandles()},s.setHandles=function(){this.handles=this.options.handle?this.element.querySelectorAll(this.options.handle):[this.element],this.bindHandles()},s.dispatchEvent=function(t,e,n){var i=[e].concat(n);this.emitEvent(t,i),this.dispatchJQueryEvent(t,e,n)},s.dispatchJQueryEvent=function(e,n,i){var o=t.jQuery;if(o&&this.$element){var r=o.Event(n);r.type=e,this.$element.trigger(r,i)}},s._getPosition=function(){var t=getComputedStyle(this.element),e=this._getPositionCoord(t.left,"width"),n=this._getPositionCoord(t.top,"height");this.position.x=isNaN(e)?0:e,this.position.y=isNaN(n)?0:n,this._addTransformPosition(t)},s._getPositionCoord=function(t,n){if(-1!=t.indexOf("%")){var i=e(this.element.parentNode);return i?parseFloat(t)/100*i[n]:0}return parseInt(t,10)},s._addTransformPosition=function(t){var e=t.transform;if(0===e.indexOf("matrix")){var n=e.split(","),i=0===e.indexOf("matrix3d")?12:4,o=parseInt(n[i],10),r=parseInt(n[i+1],10);this.position.x+=o,this.position.y+=r}},s.onPointerDown=function(t,e){this.element.classList.add("is-pointer-down"),this.dispatchJQueryEvent("pointerDown",t,[e])},s.pointerDown=function(t,e){this.okayPointerDown(t)&&this.isEnabled?(this.pointerDownPointer={pageX:e.pageX,pageY:e.pageY},t.preventDefault(),this.pointerDownBlur(),this._bindPostStartEvents(t),this.element.classList.add("is-pointer-down"),this.dispatchEvent("pointerDown",t,[e])):this._pointerReset()},s.dragStart=function(t,e){this.isEnabled&&(this._getPosition(),this.measureContainment(),this.startPosition.x=this.position.x,this.startPosition.y=this.position.y,this.setLeftTop(),this.dragPoint.x=0,this.dragPoint.y=0,this.element.classList.add("is-dragging"),this.dispatchEvent("dragStart",t,[e]),this.animate())},s.measureContainment=function(){var t=this.getContainer();if(t){var n=e(this.element),i=e(t),o=this.element.getBoundingClientRect(),r=t.getBoundingClientRect(),s=i.borderLeftWidth+i.borderRightWidth,a=i.borderTopWidth+i.borderBottomWidth,h=this.relativeStartPosition={x:o.left-(r.left+i.borderLeftWidth),y:o.top-(r.top+i.borderTopWidth)};this.containSize={width:i.width-s-h.x-n.width,height:i.height-a-h.y-n.height}}},s.getContainer=function(){var t=this.options.containment;if(t)return t instanceof HTMLElement?t:"string"==typeof t?document.querySelector(t):this.element.parentNode},s.onPointerMove=function(t,e,n){this.dispatchJQueryEvent("pointerMove",t,[e,n])},s.dragMove=function(t,e,n){if(this.isEnabled){var i=n.x,o=n.y,r=this.options.grid,s=r&&r[0],a=r&&r[1];i=h(i,s),o=h(o,a),i=this.containDrag("x",i,s),o=this.containDrag("y",o,a),i="y"==this.options.axis?0:i,o="x"==this.options.axis?0:o,this.position.x=this.startPosition.x+i,this.position.y=this.startPosition.y+o,this.dragPoint.x=i,this.dragPoint.y=o,this.dispatchEvent("dragMove",t,[e,n])}},s.containDrag=function(t,e,n){if(!this.options.containment)return e;var i="x"==t?"width":"height",o=h(-this.relativeStartPosition[t],n,"ceil"),r=this.containSize[i];return r=h(r,n,"floor"),Math.max(o,Math.min(r,e))},s.onPointerUp=function(t,e){this.element.classList.remove("is-pointer-down"),this.dispatchJQueryEvent("pointerUp",t,[e])},s.dragEnd=function(t,e){this.isEnabled&&(this.element.style.transform="",this.setLeftTop(),this.element.classList.remove("is-dragging"),this.dispatchEvent("dragEnd",t,[e]))},s.animate=function(){if(this.isDragging){this.positionDrag();var t=this;requestAnimationFrame((function(){t.animate()}))}},s.setLeftTop=function(){this.element.style.left=this.position.x+"px",this.element.style.top=this.position.y+"px"},s.positionDrag=function(){this.element.style.transform="translate3d( "+this.dragPoint.x+"px, "+this.dragPoint.y+"px, 0)"},s.staticClick=function(t,e){this.dispatchEvent("staticClick",t,[e])},s.setPosition=function(t,e){this.position.x=t,this.position.y=e,this.setLeftTop()},s.enable=function(){this.isEnabled=!0},s.disable=function(){this.isEnabled=!1,this.isDragging&&this.dragEnd()},s.destroy=function(){this.disable(),this.element.style.transform="",this.element.style.left="",this.element.style.top="",this.element.style.position="",this.unbindHandles(),this.$element&&this.$element.removeData("draggabilly")},s._init=function(){},o&&o.bridget&&o.bridget("draggabilly",r),r}(r,t,e)}.apply(e,i))||(t.exports=o)}(window)},158:function(t,e,n){var i,o;"undefined"!=typeof window&&window,void 0===(o="function"==typeof(i=function(){"use strict";function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var n=this._events=this._events||{},i=n[t]=n[t]||[];return-1==i.indexOf(e)&&i.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var n=this._onceEvents=this._onceEvents||{};return(n[t]=n[t]||{})[e]=!0,this}},e.off=function(t,e){var n=this._events&&this._events[t];if(n&&n.length){var i=n.indexOf(e);return-1!=i&&n.splice(i,1),this}},e.emitEvent=function(t,e){var n=this._events&&this._events[t];if(n&&n.length){n=n.slice(0),e=e||[];for(var i=this._onceEvents&&this._onceEvents[t],o=0;o<n.length;o++){var r=n[o];i&&i[r]&&(this.off(t,r),delete i[r]),r.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t})?i.call(e,n,e,t):i)||(t.exports=o)},131:(t,e,n)=>{var i,o;window,void 0===(o="function"==typeof(i=function(){"use strict";function t(t){var e=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(e)&&e}var e="undefined"==typeof console?function(){}:function(t){console.error(t)},n=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],i=n.length;function o(t){var n=getComputedStyle(t);return n||e("Style returned "+n+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),n}var r,s=!1;function a(e){if(function(){if(!s){s=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var n=document.body||document.documentElement;n.appendChild(e);var i=o(e);r=200==Math.round(t(i.width)),a.isBoxSizeOuter=r,n.removeChild(e)}}(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var h=o(e);if("none"==h.display)return function(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<i;e++)t[n[e]]=0;return t}();var c={};c.width=e.offsetWidth,c.height=e.offsetHeight;for(var d=c.isBorderBox="border-box"==h.boxSizing,u=0;u<i;u++){var p=n[u],l=h[p],f=parseFloat(l);c[p]=isNaN(f)?0:f}var g=c.paddingLeft+c.paddingRight,v=c.paddingTop+c.paddingBottom,m=c.marginLeft+c.marginRight,b=c.marginTop+c.marginBottom,y=c.borderLeftWidth+c.borderRightWidth,w=c.borderTopWidth+c.borderBottomWidth,E=d&&r,x=t(h.width);!1!==x&&(c.width=x+(E?0:g+y));var _=t(h.height);return!1!==_&&(c.height=_+(E?0:v+w)),c.innerWidth=c.width-(g+y),c.innerHeight=c.height-(v+w),c.outerWidth=c.width+m,c.outerHeight=c.height+b,c}}return a})?i.call(e,n,e,t):i)||(t.exports=o)},379:(t,e,n)=>{"use strict";var i,o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),r=[];function s(t){for(var e=-1,n=0;n<r.length;n++)if(r[n].identifier===t){e=n;break}return e}function a(t,e){for(var n={},i=[],o=0;o<t.length;o++){var a=t[o],h=e.base?a[0]+e.base:a[0],c=n[h]||0,d="".concat(h," ").concat(c);n[h]=c+1;var u=s(d),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(r[u].references++,r[u].updater(p)):r.push({identifier:d,updater:g(p,e),references:1}),i.push(d)}return i}function h(t){var e=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var r=n.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(t){e.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(e);else{var s=o(t.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var c,d=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function u(t,e,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=d(e,o);else{var r=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}function p(t,e,n){var i=n.css,o=n.media,r=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var l=null,f=0;function g(t,e){var n,i,o;if(e.singleton){var r=f++;n=l||(l=h(e)),i=u.bind(null,n,r,!1),o=u.bind(null,n,r,!0)}else n=h(e),i=p.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var n=a(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<n.length;i++){var o=s(n[i]);r[o].references--}for(var h=a(t,e),c=0;c<n.length;c++){var d=s(n[c]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}n=h}}}},842:(t,e,n)=>{var i,o;!function(r,s){i=[n(704)],void 0===(o=function(t){return function(t,e){"use strict";function n(){}var i=n.prototype=Object.create(e.prototype);i.bindHandles=function(){this._bindHandles(!0)},i.unbindHandles=function(){this._bindHandles(!1)},i._bindHandles=function(e){for(var n=(e=void 0===e||e)?"addEventListener":"removeEventListener",i=e?this._touchActionValue:"",o=0;o<this.handles.length;o++){var r=this.handles[o];this._bindStartEvent(r,e),r[n]("click",this),t.PointerEvent&&(r.style.touchAction=i)}},i._touchActionValue="none",i.pointerDown=function(t,e){this.okayPointerDown(t)&&(this.pointerDownPointer={pageX:e.pageX,pageY:e.pageY},t.preventDefault(),this.pointerDownBlur(),this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e]))};var o={TEXTAREA:!0,INPUT:!0,SELECT:!0,OPTION:!0},r={radio:!0,checkbox:!0,button:!0,submit:!0,image:!0,file:!0};return i.okayPointerDown=function(t){var e=o[t.target.nodeName],n=r[t.target.type],i=!e||n;return i||this._pointerReset(),i},i.pointerDownBlur=function(){var t=document.activeElement;t&&t.blur&&t!=document.body&&t.blur()},i.pointerMove=function(t,e){var n=this._dragPointerMove(t,e);this.emitEvent("pointerMove",[t,e,n]),this._dragMove(t,e,n)},i._dragPointerMove=function(t,e){var n={x:e.pageX-this.pointerDownPointer.pageX,y:e.pageY-this.pointerDownPointer.pageY};return!this.isDragging&&this.hasDragStarted(n)&&this._dragStart(t,e),n},i.hasDragStarted=function(t){return Math.abs(t.x)>3||Math.abs(t.y)>3},i.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e]),this._dragPointerUp(t,e)},i._dragPointerUp=function(t,e){this.isDragging?this._dragEnd(t,e):this._staticClick(t,e)},i._dragStart=function(t,e){this.isDragging=!0,this.isPreventingClicks=!0,this.dragStart(t,e)},i.dragStart=function(t,e){this.emitEvent("dragStart",[t,e])},i._dragMove=function(t,e,n){this.isDragging&&this.dragMove(t,e,n)},i.dragMove=function(t,e,n){t.preventDefault(),this.emitEvent("dragMove",[t,e,n])},i._dragEnd=function(t,e){this.isDragging=!1,setTimeout(function(){delete this.isPreventingClicks}.bind(this)),this.dragEnd(t,e)},i.dragEnd=function(t,e){this.emitEvent("dragEnd",[t,e])},i.onclick=function(t){this.isPreventingClicks&&t.preventDefault()},i._staticClick=function(t,e){this.isIgnoringMouseUp&&"mouseup"==t.type||(this.staticClick(t,e),"mouseup"!=t.type&&(this.isIgnoringMouseUp=!0,setTimeout(function(){delete this.isIgnoringMouseUp}.bind(this),400)))},i.staticClick=function(t,e){this.emitEvent("staticClick",[t,e])},n.getPointerPoint=e.getPointerPoint,n}(r,t)}.apply(e,i))||(t.exports=o)}(window)},704:(t,e,n)=>{var i,o;!function(r,s){i=[n(158)],void 0===(o=function(t){return function(t,e){"use strict";function n(){}var i=n.prototype=Object.create(e.prototype);i.bindStartEvent=function(t){this._bindStartEvent(t,!0)},i.unbindStartEvent=function(t){this._bindStartEvent(t,!1)},i._bindStartEvent=function(e,n){var i=(n=void 0===n||n)?"addEventListener":"removeEventListener",o="mousedown";t.PointerEvent?o="pointerdown":"ontouchstart"in t&&(o="touchstart"),e[i](o,this)},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.getTouch=function(t){for(var e=0;e<t.length;e++){var n=t[e];if(n.identifier==this.pointerIdentifier)return n}},i.onmousedown=function(t){var e=t.button;e&&0!==e&&1!==e||this._pointerDown(t,t)},i.ontouchstart=function(t){this._pointerDown(t,t.changedTouches[0])},i.onpointerdown=function(t){this._pointerDown(t,t)},i._pointerDown=function(t,e){t.button||this.isPointerDown||(this.isPointerDown=!0,this.pointerIdentifier=void 0!==e.pointerId?e.pointerId:e.identifier,this.pointerDown(t,e))},i.pointerDown=function(t,e){this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e])};var o={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"]};return i._bindPostStartEvents=function(e){if(e){var n=o[e.type];n.forEach((function(e){t.addEventListener(e,this)}),this),this._boundPointerEvents=n}},i._unbindPostStartEvents=function(){this._boundPointerEvents&&(this._boundPointerEvents.forEach((function(e){t.removeEventListener(e,this)}),this),delete this._boundPointerEvents)},i.onmousemove=function(t){this._pointerMove(t,t)},i.onpointermove=function(t){t.pointerId==this.pointerIdentifier&&this._pointerMove(t,t)},i.ontouchmove=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerMove(t,e)},i._pointerMove=function(t,e){this.pointerMove(t,e)},i.pointerMove=function(t,e){this.emitEvent("pointerMove",[t,e])},i.onmouseup=function(t){this._pointerUp(t,t)},i.onpointerup=function(t){t.pointerId==this.pointerIdentifier&&this._pointerUp(t,t)},i.ontouchend=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerUp(t,e)},i._pointerUp=function(t,e){this._pointerDone(),this.pointerUp(t,e)},i.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e])},i._pointerDone=function(){this._pointerReset(),this._unbindPostStartEvents(),this.pointerDone()},i._pointerReset=function(){this.isPointerDown=!1,delete this.pointerIdentifier},i.pointerDone=function(){},i.onpointercancel=function(t){t.pointerId==this.pointerIdentifier&&this._pointerCancel(t,t)},i.ontouchcancel=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerCancel(t,e)},i._pointerCancel=function(t,e){this._pointerDone(),this.pointerCancel(t,e)},i.pointerCancel=function(t,e){this.emitEvent("pointerCancel",[t,e])},n.getPointerPoint=function(t){return{x:t.pageX,y:t.pageY}},n}(r,t)}.apply(e,i))||(t.exports=o)}(window)},791:(t,e,n)=>{"use strict";t.exports=n.p+"942638e66612b31fad1b.ttf"},135:(t,e,n)=>{"use strict";t.exports=n.p+"2806eb9b90b82933213c.svg"},195:(t,e,n)=>{"use strict";t.exports=n.p+"010f77b61161368d7c50.svg"},213:(t,e,n)=>{"use strict";t.exports=n.p+"ac56d1bd53a7d0893b7b.svg"},902:(t,e,n)=>{"use strict";t.exports=n.p+"948f29214f8d8d43dd42.svg"},551:()=>{class t extends HTMLElement{}window.customElements.define("johanna-projects",t)}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={id:i,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var i=e.getElementsByTagName("script");i.length&&(t=i[i.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),(()=>{"use strict";var t=n(379),e=n.n(t),i=n(144);e()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var o=n(384),r=n.n(o);class s extends HTMLElement{connectedCallback(){new(r())(this,{axis:"x"})}}window.customElements.define("johanna-about",s),n(551);var a=n(510);e()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;var h=n(135),c=n(195),d=n(213),u=n(902);class p extends HTMLElement{constructor(){super(),this.innerHTML=`\n            <img src="${h}" class="hill-1"/>\n            <img src="${c}" class="hill-2"/>\n            <img src="${d}" class="hill-3"/>\n            <img src="${u}" class="hill-4"/>\n            <div class="headings">\n                <h1>johanna thorsen</h1>\n                <h2>projects</h2>\n            </div>\n        `}}function l(){document.documentElement.style.setProperty("--vh",.01*window.innerHeight+"px")}window.customElements.define("johanna-start",p),window.addEventListener("resize",l),l(),document.querySelector(".content").appendChild(document.createElement("johanna-start"))})()})();