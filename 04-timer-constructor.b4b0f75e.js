!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("1UHsN",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}})),o.register("ffZzF",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),o.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}}));var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){var r=u.default(e,t,"get");return l.default(e,r)};var u=s(o("1UHsN")),l=s(o("ffZzF"));function s(e){return e&&e.__esModule?e:{default:e}}var f={};Object.defineProperty(f,"__esModule",{value:!0}),f.default=function(e,t,r){c.default(e,t),t.set(e,r)};var d,c=(d=o("5k7tO"))&&d.__esModule?d:{default:d};var p={};function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(p,"__esModule",{value:!0}),p.default=function(e,t,r){t&&v(e.prototype,t);r&&v(e,r);return e};var y={};Object.defineProperty(y,"__esModule",{value:!0}),y.default=function(e,t){return _.default(e)||b.default(e,t)||g.default(e,t)||h.default()};var _=m(o("8slrw")),b=m(o("7AJDX")),h=m(o("ifqQW")),g=m(o("auk6i"));function m(e){return e&&e.__esModule?e:{default:e}}var M=o("dbdyf"),w=o("iU1Pc"),x={dateInput:document.querySelector("input#datetime-picker"),startBtn:document.querySelector("[data-start]")},O=null;x.startBtn.disabled=!0;var j={timeout:3e3,width:"300px",position:"center-center",backOverlay:!0,clickToClose:!0,closeButton:!0},P={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:function(t){t[0]<Date.now()?e(w).Notify.failure("Please choose a date in the future",j):(x.startBtn.disabled=!1,O=t[0])}};(0,M.default)(x.dateInput,P);var k=new WeakMap,A=new(function(){"use strict";function t(r){e(a)(this,t),e(f)(this,k,{writable:!0,value:{}}),this.selector=r,this.intervalId=null,this.isActive=!1}return e(p)(t,[{key:"start",value:function(){var t=this;this.getRefs(),e(w).Notify.success("Lets Go!",j),this.isActive||(this.isActive=!0,this.intervalId=setInterval((function(){var r=t,n=O-Date.now(),o=t.convertMs(n);Object.entries(o).forEach((function(t,n){var o=e(y)(t,2),a=(o[0],o[1]);e(i)(r,k).data[n].textContent=r.addLeadingZero(a)})),n<=1e3&&(clearInterval(t.intervalId),e(w).Notify.info("Deadline!",j))}),1e3))}},{key:"getRefs",value:function(){e(i)(this,k).data=document.querySelectorAll("".concat(this.selector," .timer_js"))}},{key:"convertMs",value:function(e){return{days:Math.floor(e/1e3/60/60/24),hours:Math.floor(e/1e3/60/60)%24,minutes:Math.floor(e/1e3/60)%60,seconds:Math.floor(e/1e3)%60}}},{key:"addLeadingZero",value:function(e){return String(e).padStart(2,"0")}}]),t}())(".timers_js",O);x.startBtn.addEventListener("click",A.start.bind(A))}();
//# sourceMappingURL=04-timer-constructor.b4b0f75e.js.map
