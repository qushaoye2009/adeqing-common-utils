!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.Utils=n():t.Utils=n()}(this,(function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=17)}([function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(10)("wks"),o=e(11),i=e(0).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,n,e){var r=e(1);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var e=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e)},function(t,n,e){"use strict";var r,o,i=e(27),u=RegExp.prototype.exec,c=String.prototype.replace,a=u,l=(r=/a/,o=/b*/g,u.call(r,"a"),u.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),s=void 0!==/()??/.exec("")[1];(l||s)&&(a=function(t){var n,e,r,o,a=this;return s&&(e=new RegExp("^"+a.source+"$(?!\\s)",i.call(a))),l&&(n=a.lastIndex),r=u.call(a,t),l&&r&&(a.lastIndex=a.global?r.index+r[0].length:n),s&&r&&r.length>1&&c.call(r[0],e,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=a},function(t,n,e){var r=e(31),o=e(35);t.exports=e(8)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){t.exports=!e(4)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(5),o=e(0),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(20)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(0),o=e(7),i=e(36),u=e(11)("src"),c=e(37),a=(""+c).split("toString");e(5).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,e,c){var l="function"==typeof e;l&&(i(e,"name")||o(e,"name",n)),t[n]!==e&&(l&&(i(e,u)||o(e,u,t[n]?""+t[n]:a.join(String(n)))),t===r?t[n]=e:c?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[u]||c.call(this)}))},function(t){t.exports=JSON.parse('{"name":"adeqing-common-utils","version":"1.0.1","description":"adeqing-common-utils使用webpack打包一个JavaScript类库","main":"./dist/index.js","scripts":{"build":"webpack","test":"echo \\"Error: no test specified\\" && exit 1"},"repository":{"type":"git","url":"git+https://github.com/qushaoye2009/adeqing-common-utils.git"},"keywords":["webpack","utils","word"],"author":"qushaoyun <250932878@qq.com>","license":"MIT","bugs":{"url":"https://github.com/qushaoye2009/adeqing-common-utils/issues"},"homepage":"https://github.com/qushaoye2009/adeqing-common-utils#readme","devDependencies":{"@babel/core":"^7.1.2","@babel/plugin-transform-runtime":"^7.1.0","@babel/polyfill":"^7.0.0","@babel/preset-env":"^7.1.0","babel-loader":"^8.0.4","webpack":"^4.43.0","webpack-cli":"^3.1.2"},"directories":{"example":"example"},"dependencies":{}}')},function(t,n,e){"use strict";e.r(n);e(18);var r=e(16),o={version:r.version,titleCase:function(t){for(var n=t.toLowerCase().split(" "),e=0;e<n.length;e++)n[e]=n[e][0].toUpperCase()+n[e].substring(1,n[e].length);return n.join(" ")}};n.default=o},function(t,n,e){"use strict";var r=e(19),o=e(3),i=e(21),u=e(22),c=e(24),a=e(25),l=e(6),s=e(4),f=Math.min,p=[].push,d="length",v=!s((function(){RegExp(4294967295,"y")}));e(28)("split",2,(function(t,n,e,s){var g;return g="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1)[d]||2!="ab".split(/(?:ab)*/)[d]||4!=".".split(/(.?)(.?)/)[d]||".".split(/()()/)[d]>1||"".split(/.?/)[d]?function(t,n){var o=String(this);if(void 0===t&&0===n)return[];if(!r(t))return e.call(o,t,n);for(var i,u,c,a=[],s=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,v=void 0===n?4294967295:n>>>0,g=new RegExp(t.source,s+"g");(i=l.call(g,o))&&!((u=g.lastIndex)>f&&(a.push(o.slice(f,i.index)),i[d]>1&&i.index<o[d]&&p.apply(a,i.slice(1)),c=i[0][d],f=u,a[d]>=v));)g.lastIndex===i.index&&g.lastIndex++;return f===o[d]?!c&&g.test("")||a.push(""):a.push(o.slice(f)),a[d]>v?a.slice(0,v):a}:"0".split(void 0,0)[d]?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,r){var o=t(this),i=null==e?void 0:e[n];return void 0!==i?i.call(e,o,r):g.call(String(o),e,r)},function(t,n){var r=s(g,t,this,n,g!==e);if(r.done)return r.value;var l=o(t),p=String(this),d=i(l,RegExp),h=l.unicode,x=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(v?"y":"g"),y=new d(v?l:"^(?:"+l.source+")",x),b=void 0===n?4294967295:n>>>0;if(0===b)return[];if(0===p.length)return null===a(y,p)?[p]:[];for(var m=0,w=0,S=[];w<p.length;){y.lastIndex=v?w:0;var j,_=a(y,v?p:p.slice(w));if(null===_||(j=f(c(y.lastIndex+(v?0:w)),p.length))===m)w=u(p,w,h);else{if(S.push(p.slice(m,w)),S.length===b)return S;for(var E=1;E<=_.length-1;E++)if(S.push(_[E]),S.length===b)return S;w=m=j}}return S.push(p.slice(m)),S}]}))},function(t,n,e){var r=e(1),o=e(9),i=e(2)("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},function(t,n){t.exports=!1},function(t,n,e){var r=e(3),o=e(12),i=e(2)("species");t.exports=function(t,n){var e,u=r(t).constructor;return void 0===u||null==(e=r(u)[i])?n:o(e)}},function(t,n,e){"use strict";var r=e(23)(!0);t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},function(t,n,e){var r=e(13),o=e(14);t.exports=function(t){return function(n,e){var i,u,c=String(o(n)),a=r(e),l=c.length;return a<0||a>=l?t?"":void 0:(i=c.charCodeAt(a))<55296||i>56319||a+1===l||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):i:t?c.slice(a,a+2):u-56320+(i-55296<<10)+65536}}},function(t,n,e){var r=e(13),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){"use strict";var r=e(26),o=RegExp.prototype.exec;t.exports=function(t,n){var e=t.exec;if("function"==typeof e){var i=e.call(t,n);if("object"!=typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(t,n)}},function(t,n,e){var r=e(9),o=e(2)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(u=r(n))&&"function"==typeof n.callee?"Arguments":u}},function(t,n,e){"use strict";var r=e(3);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,e){"use strict";e(29);var r=e(15),o=e(7),i=e(4),u=e(14),c=e(2),a=e(6),l=c("species"),s=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2===e.length&&"a"===e[0]&&"b"===e[1]}();t.exports=function(t,n,e){var p=c(t),d=!i((function(){var n={};return n[p]=function(){return 7},7!=""[t](n)})),v=d?!i((function(){var n=!1,e=/a/;return e.exec=function(){return n=!0,null},"split"===t&&(e.constructor={},e.constructor[l]=function(){return e}),e[p](""),!n})):void 0;if(!d||!v||"replace"===t&&!s||"split"===t&&!f){var g=/./[p],h=e(u,p,""[t],(function(t,n,e,r,o){return n.exec===a?d&&!o?{done:!0,value:g.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}})),x=h[0],y=h[1];r(String.prototype,t,x),o(RegExp.prototype,p,2==n?function(t,n){return y.call(t,this,n)}:function(t){return y.call(t,this)})}}},function(t,n,e){"use strict";var r=e(6);e(30)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},function(t,n,e){var r=e(0),o=e(5),i=e(7),u=e(15),c=e(38),a=function(t,n,e){var l,s,f,p,d=t&a.F,v=t&a.G,g=t&a.S,h=t&a.P,x=t&a.B,y=v?r:g?r[n]||(r[n]={}):(r[n]||{}).prototype,b=v?o:o[n]||(o[n]={}),m=b.prototype||(b.prototype={});for(l in v&&(e=n),e)f=((s=!d&&y&&void 0!==y[l])?y:e)[l],p=x&&s?c(f,r):h&&"function"==typeof f?c(Function.call,f):f,y&&u(y,l,f,t&a.U),b[l]!=f&&i(b,l,p),h&&m[l]!=f&&(m[l]=f)};r.core=o,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,n,e){var r=e(3),o=e(32),i=e(34),u=Object.defineProperty;n.f=e(8)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){t.exports=!e(8)&&!e(4)((function(){return 7!=Object.defineProperty(e(33)("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(1),o=e(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(1);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){t.exports=e(10)("native-function-to-string",Function.toString)},function(t,n,e){var r=e(12);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}}]).default}));