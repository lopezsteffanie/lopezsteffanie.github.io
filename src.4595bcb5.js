parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"H99C":[function(require,module,exports) {
function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(){"use strict";e=function(){return n};var n={},r=Object.prototype,o=r.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},a=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(T){s=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,c=Object.create(o.prototype),a=new O(r||[]);return i(c,"_invoke",{value:b(t,n,a)}),c}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(T){return{type:"throw",arg:T}}}n.wrap=f;var d={};function y(){}function p(){}function v(){}var m={};s(m,a,function(){return this});var g=Object.getPrototypeOf,_=g&&g(g(k([])));_&&_!==r&&o.call(_,a)&&(m=_);var w=v.prototype=y.prototype=Object.create(m);function x(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function L(e,n){var r;i(this,"_invoke",{value:function(i,c){function a(){return new n(function(r,a){!function r(i,c,a,u){var l=h(e[i],e,c);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==t(f)&&o.call(f,"__await")?n.resolve(f.__await).then(function(t){r("next",t,a,u)},function(t){r("throw",t,a,u)}):n.resolve(f).then(function(t){s.value=t,a(s)},function(t){return r("throw",t,a,u)})}u(l.arg)}(i,c,r,a)})}return r=r?r.then(a,a):a()}})}function b(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return j()}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var a=E(c,n);if(a){if(a===d)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=h(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function E(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=h(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=v,i(w,"constructor",{value:v,configurable:!0}),i(v,"constructor",{value:p,configurable:!0}),p.displayName=s(v,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},n.awrap=function(t){return{__await:t}},x(L.prototype),s(L.prototype,u,function(){return this}),n.AsyncIterator=L,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var c=new L(f(t,e,r,o),i);return n.isGeneratorFunction(e)?c:c.next().then(function(t){return t.done?t.value:c.next()})},x(w),s(w,l,"Generator"),s(w,a,function(){return this}),s(w,"toString",function(){return"[object Generator]"}),n.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=k,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return c.type="throw",c.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var a=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(a&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},n}function n(t,e,n,r,o,i,c){try{var a=t[i](c),u=a.value}catch(l){return void n(l)}a.done?e(u):Promise.resolve(u).then(r,o)}function r(t){return function(){var e=this,r=arguments;return new Promise(function(o,i){var c=t.apply(e,r);function a(t){n(c,o,i,a,u,"next",t)}function u(t){n(c,o,i,a,u,"throw",t)}a(void 0)})}}var o={temp:72,city:"San Luis Obispo",lat:35.2828,lon:-120.6596},i=o.temp,c=document.querySelector("#tempValue"),a=document.querySelector("#tempStyle"),u=function(){var t="";a.textContent.includes("°F")?i>=85?t="crimson":i>=70?t="coral":i>=55?t="peru":i>=33?t="olive":i<=32&&(t="steelblue"):i>=30?t="crimson":i>=21?t="coral":i>=13?t="peru":i>=1?t="olive":i<=0&&(t="steelblue"),c.style.color=t,a.style.color=t},l=function(){i+=1,c.textContent="".concat(i),u(),h()},s=function(){i-=1,c.textContent="".concat(i),u(),h()},f=document.querySelector("#landscape"),h=function(){var t=document.getElementById("landscape"),e="";a.textContent.includes("°F")?i>=85?e="🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂":i>=65?e="🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷":i>=40?e="🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃":i<=39&&(e="🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"):i>=30?e="🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂":i>=18?e="🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷":i>=5?e="🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃":i<=4&&(e="🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"),t.textContent=e},d=o.city,y=document.querySelector("#cityName"),p=function(){var t=document.querySelector("#inputCity");o.city=t.value,y.textContent=o.city},v=function(t){return 1.8*(t-273.15)+32},m=function(){var t=r(e().mark(function t(){var n,r;return e().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,axios.get("http://127.0.0.1:5000/weather",{params:{lat:o.lat,lon:o.lon}});case 2:n=t.sent,r=v(n.data.main.temp),i=Math.round(r),c.textContent="".concat(i),u(),h();case 8:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),g=function(){var t=r(e().mark(function t(){var n;return e().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,axios.get("http://127.0.0.1:5000/location",{params:{q:o.city}});case 2:n=t.sent,o.lat=n.data[0].lat,o.lon=n.data[0].lon,m();case 6:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),_=function(){var t=document.getElementById("sky-select").value,e=document.querySelector("#sky"),n="",r="";"Sunny"===t?(n="☁️ ☁️ ☁️ ☀️ ☁️ ☁️",r="sunny"):"Cloudy"===t?(n="☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️",r="cloudy"):"Rainy"===t?(n="🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧",r="rainy"):"Snowy"===t&&(n="🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨",r="snowy"),e.style.color=n,e.textContent=n,document.getElementById("gardenContent").classList="garden__content ".concat(r)},w=function(){document.querySelector("#inputCity").value="San Luis Obispo",y.textContent="San Luis Obispo",o.city="San Luis Obispo",g()},x=function(){return 5/9*(i-32)},L=function(){return 1.8*i+32},b=function(){var t=document.querySelector("#convertTemp");if(t.textContent.includes("Convert to Celsius")){var e=x();i=Math.round(e),c.textContent="".concat(i),a.textContent="°C",convertTemp.textContent="Convert to Fahrenheit"}else if(t.textContent.includes("Convert to Fahrenheit")){var n=L();i=Math.round(n),c.textContent="".concat(i),a.textContent="°F",convertTemp.textContent="Convert to Celsius"}},E=function(){m(),document.getElementById("increaseTempControl").addEventListener("click",l),document.getElementById("decreaseTempControl").addEventListener("click",s),p(),document.querySelector("#inputCity").addEventListener("input",p),document.querySelector("#currentTempButton").addEventListener("click",g),_(),document.getElementById("sky-select").addEventListener("change",_),document.getElementById("resetCityButton").addEventListener("click",w),document.getElementById("convertTemp").addEventListener("click",b)};document.addEventListener("DOMContentLoaded",E);
},{}]},{},["H99C"], null)
//# sourceMappingURL=/weather-report/src.4595bcb5.js.map