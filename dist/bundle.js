(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>p});var o=n(81),r=n.n(o),a=n(645),c=n.n(a),i=n(667),d=n.n(i),s=new URL(n(886),n.b),l=c()(r()),u=d()(s);l.push([e.id,`@font-face {\n    font-family: 'DM Serif Display';\n    src: url(${u}) format('woff2');\n    font-style: normal;\n    font-weight: 400;\n}\n\nbody {\n    font-family: 'DM Serif Display';\n    margin: 0;\n    padding: 0;\n    background-color: rgb(147, 212, 212);\n    height: 100vh;\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: minmax(200px, 1fr) 5fr;\n    grid-template-rows: 1fr 100%;\n    grid-template-areas: "sidebar header"\n                        "sidebar content"\n}\n\n.header{\n    display: flex;\n    font-style: italic;\n    grid-area: header;\n    height: 100px;\n    justify-content: center;    \n    align-items: center;\n    background-color: rgb(127, 207, 207);\n    box-shadow: 0 4px 2px -2px rgb(0, 0, 0, .25);\n}\n\n.sidebar {\n    grid-area: sidebar;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    background-color: rgb(127, 207, 207);\n}\n.checkmate {\n    height: 50px;\n    align-items: center;\n}\n\n.create-task-button,\n.all-projects-button,\n.project-button,\n.create-project-button {\n    font-family: 'DM Serif Display';\n    height: 50px;\n    border-style: dotted;\n    background-color: transparent;\n    width: 80%;\n}\n\n.create-project-button,\n.create-task-button {\n    margin-bottom: 25px;\n}\n\n.content {\n    grid-area: content;\n    padding-left: 15px;\n    padding-right: 15px;\n    padding-top: 15px;\n}\n\n.todo-div {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: 30% 45% auto;\n    border-style: dotted;\n    margin-bottom: 15px;\n    padding: 5px;\n}\n\n.todo-div:nth-child(even) {\n    background-color: rgb(127, 207, 207);\n}\n\n.todo-div:nth-child(odd) {\n    background-color: rgb(168, 234, 234);\n}`,""]);const p=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var d=e[i],s=o.base?d[0]+o.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=i,t.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var d=o(e,r),s=0;s<a.length;s++){var l=n(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},886:(e,t,n)=>{e.exports=n.p+"ce5a5668bd09f426e2e3.woff2"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{let e=[];class t{constructor(e,t,n,o,r,a,c){this.project=e,this.title=t,this.description=n,this.dueDate=o,this.priority=r,this.notes=a,this.checkList=Boolean(c)}}function o(n,o,r,a,c,i,d){const s=new t(n,o,r,a,c,i,d);return e.push(s),s}let r=[];function a(e){const t=e;return r.push(t),t}function c(){const t=document.querySelector(".content");t.replaceChildren(),e.forEach((e=>{const n=document.createElement("div");n.className="todo-div";const o=document.createElement("p");o.innerHTML=`${e.title}`;const r=document.createElement("p");r.innerHTML=`${e.description}`;const a=document.createElement("INPUT");a.setAttribute("type","checkbox");const c=document.createElement("select");let i=document.createElement("option");i.value=1,i.text="High",c.options.add(i);let d=document.createElement("option");d.value=2,d.text="Medium",c.options.add(d);let s=document.createElement("option");s.value=3,s.text="High",c.options.add(s),n.appendChild(o),n.appendChild(r),n.appendChild(c),n.appendChild(a),t.appendChild(n)}))}var i=n(379),d=n.n(i),s=n(795),l=n.n(s),u=n(569),p=n.n(u),m=n(565),f=n.n(m),h=n(216),g=n.n(h),v=n(589),b=n.n(v),y=n(426),x={};x.styleTagTransform=b(),x.setAttributes=f(),x.insert=p().bind(null,"head"),x.domAPI=l(),x.insertStyleElement=g(),d()(y.Z,x),y.Z&&y.Z.locals&&y.Z.locals,o("Today","Bake cakes","chocolate","tomorrow","high","n/a",!0),o("Tomorrow","Bake pies","chocolate","tomorrow","high","n/a",!1),o("Yesterday","Bake brownies","chocolate","tomorrow","high","n/a",!0),o("Today","Bake cookies","vanilla","tomorrow","low","n/a",!0),a("Today"),a("Tomorrow"),a("Yesterday");const E=document.querySelector(".sidebar"),w=(document.querySelector(".header"),document.querySelector(".content"),document.getElementById("addTodoForm")),T=document.createElement("button");T.className="create-task-button",T.innerHTML="Create Todo",E.appendChild(T),T.addEventListener("click",(()=>{w.showModal()})),document.getElementById("submit").addEventListener("click",(function(e){e.preventDefault()}));const C=document.createElement("button");C.className="create-project-button",C.innerHTML="Create Project",E.appendChild(C),C.addEventListener("click",(()=>{})),c();const k=document.createElement("button");k.className="all-projects-button",k.innerHTML="All Tasks",E.appendChild(k),k.addEventListener("click",(e=>{e.preventDefault(),c()})),function(){const e=document.querySelector(".sidebar");r.forEach((t=>{const n=document.createElement("button");n.className="project-button",n.innerHTML=`${t}`,e.appendChild(n)}))}(),document.querySelector(".sidebar"),document.querySelectorAll(".project-button").forEach((t=>{t.addEventListener("click",(()=>{let n=t.innerHTML;console.log(n);const o=document.querySelector(".content");o.replaceChildren(),e.forEach((e=>{if(e.project.toUpperCase()==n.toUpperCase()){const t=document.createElement("div");t.className="todo-div";const n=document.createElement("p");n.innerHTML=`${e.title}`;const r=document.createElement("p");r.innerHTML=`${e.description}`;const a=document.createElement("INPUT");a.setAttribute("type","checkbox");const c=document.createElement("select");let i=document.createElement("option");i.value=1,i.text="High",c.options.add(i);let d=document.createElement("option");d.value=2,d.text="Medium",c.options.add(d);let s=document.createElement("option");s.value=3,s.text="Low",c.options.add(s),t.appendChild(n),t.appendChild(r),t.appendChild(c),t.appendChild(a),o.appendChild(t)}}))}))}))})()})();