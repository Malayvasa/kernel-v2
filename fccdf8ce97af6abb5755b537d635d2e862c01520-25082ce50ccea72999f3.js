(self.webpackChunkkernel_community=self.webpackChunkkernel_community||[]).push([[6725],{9662:function(t,n,r){var e=r(614),o=r(6330);t.exports=function(t){if(e(t))return t;throw TypeError(o(t)+" is not a function")}},1223:function(t,n,r){var e=r(5112),o=r(30),i=r(3070),u=e("unscopables"),a=Array.prototype;null==a[u]&&i.f(a,u,{configurable:!0,value:o(null)}),t.exports=function(t){a[u][t]=!0}},9670:function(t,n,r){var e=r(111);t.exports=function(t){if(e(t))return t;throw TypeError(String(t)+" is not an object")}},1318:function(t,n,r){var e=r(5656),o=r(7466),i=r(1400),u=function(t){return function(n,r,u){var a,c=e(n),s=o(c.length),l=i(u,s);if(t&&r!=r){for(;s>l;)if((a=c[l++])!=a)return!0}else for(;s>l;l++)if((t||l in c)&&c[l]===r)return t||l||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},7475:function(t,n,r){var e=r(3157),o=r(4411),i=r(111),u=r(5112)("species");t.exports=function(t){var n;return e(t)&&(n=t.constructor,(o(n)&&(n===Array||e(n.prototype))||i(n)&&null===(n=n[u]))&&(n=void 0)),void 0===n?Array:n}},5417:function(t,n,r){var e=r(7475);t.exports=function(t,n){return new(e(t))(0===n?0:n)}},4326:function(t){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},648:function(t,n,r){var e=r(1694),o=r(614),i=r(4326),u=r(5112)("toStringTag"),a="Arguments"==i(function(){return arguments}());t.exports=e?i:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(r){}}(n=Object(t),u))?r:a?i(n):"Object"==(e=i(n))&&o(n.callee)?"Arguments":e}},9920:function(t,n,r){var e=r(6656),o=r(3887),i=r(1236),u=r(3070);t.exports=function(t,n){for(var r=o(n),a=u.f,c=i.f,s=0;s<r.length;s++){var l=r[s];e(t,l)||a(t,l,c(n,l))}}},8880:function(t,n,r){var e=r(9781),o=r(3070),i=r(9114);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},9114:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},9781:function(t,n,r){var e=r(7293);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,n,r){var e=r(7854),o=r(111),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},8113:function(t,n,r){var e=r(5005);t.exports=e("navigator","userAgent")||""},7392:function(t,n,r){var e,o,i=r(7854),u=r(8113),a=i.process,c=i.Deno,s=a&&a.versions||c&&c.version,l=s&&s.v8;l?o=(e=l.split("."))[0]<4?1:e[0]+e[1]:u&&(!(e=u.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=u.match(/Chrome\/(\d+)/))&&(o=e[1]),t.exports=o&&+o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,n,r){var e=r(7854),o=r(1236).f,i=r(8880),u=r(1320),a=r(3505),c=r(9920),s=r(4705);t.exports=function(t,n){var r,l,f,p,v,d=t.target,x=t.global,g=t.stat;if(r=x?e:g?e[d]||a(d,{}):(e[d]||{}).prototype)for(l in n){if(p=n[l],f=t.noTargetGet?(v=o(r,l))&&v.value:r[l],!s(x?l:d+(g?".":"#")+l,t.forced)&&void 0!==f){if(typeof p==typeof f)continue;c(p,f)}(t.sham||f&&f.sham)&&i(p,"sham",!0),u(r,l,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(n){return!0}}},6790:function(t,n,r){"use strict";var e=r(3157),o=r(7466),i=r(9974),u=function(t,n,r,a,c,s,l,f){for(var p,v=c,d=0,x=!!l&&i(l,f,3);d<a;){if(d in r){if(p=x?x(r[d],d,n):r[d],s>0&&e(p))v=u(t,n,p,o(p.length),v,s-1)-1;else{if(v>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[v]=p}v++}d++}return v};t.exports=u},9974:function(t,n,r){var e=r(9662);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},6530:function(t,n,r){var e=r(9781),o=r(6656),i=Function.prototype,u=e&&Object.getOwnPropertyDescriptor,a=o(i,"name"),c=a&&"something"===function(){}.name,s=a&&(!e||e&&u(i,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:s}},5005:function(t,n,r){var e=r(7854),o=r(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t]):e[t]&&e[t][n]}},8173:function(t,n,r){var e=r(9662);t.exports=function(t,n){var r=t[n];return null==r?void 0:e(r)}},7854:function(t,n,r){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},6656:function(t,n,r){var e=r(7908),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,n){return o.call(e(t),n)}},3501:function(t){t.exports={}},490:function(t,n,r){var e=r(5005);t.exports=e("document","documentElement")},4664:function(t,n,r){var e=r(9781),o=r(7293),i=r(317);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,n,r){var e=r(7293),o=r(4326),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},2788:function(t,n,r){var e=r(614),o=r(5465),i=Function.toString;e(o.inspectSource)||(o.inspectSource=function(t){return i.call(t)}),t.exports=o.inspectSource},9909:function(t,n,r){var e,o,i,u=r(8536),a=r(7854),c=r(111),s=r(8880),l=r(6656),f=r(5465),p=r(6200),v=r(3501),d="Object already initialized",x=a.WeakMap;if(u||f.state){var g=f.state||(f.state=new x),m=g.get,h=g.has,y=g.set;e=function(t,n){if(h.call(g,t))throw new TypeError(d);return n.facade=t,y.call(g,t,n),n},o=function(t){return m.call(g,t)||{}},i=function(t){return h.call(g,t)}}else{var b=p("state");v[b]=!0,e=function(t,n){if(l(t,b))throw new TypeError(d);return n.facade=t,s(t,b,n),n},o=function(t){return l(t,b)?t[b]:{}},i=function(t){return l(t,b)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!c(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},3157:function(t,n,r){var e=r(4326);t.exports=Array.isArray||function(t){return"Array"==e(t)}},614:function(t){t.exports=function(t){return"function"==typeof t}},4411:function(t,n,r){var e=r(7293),o=r(614),i=r(648),u=r(5005),a=r(2788),c=[],s=u("Reflect","construct"),l=/^\s*(?:class|function)\b/,f=l.exec,p=!l.exec((function(){})),v=function(t){if(!o(t))return!1;try{return s(Object,c,t),!0}catch(n){return!1}};t.exports=!s||e((function(){var t;return v(v.call)||!v(Object)||!v((function(){t=!0}))||t}))?function(t){if(!o(t))return!1;switch(i(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return p||!!f.call(l,a(t))}:v},4705:function(t,n,r){var e=r(7293),o=r(614),i=/#|\.prototype\./,u=function(t,n){var r=c[a(t)];return r==l||r!=s&&(o(n)?e(n):!!n)},a=u.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=u.data={},s=u.NATIVE="N",l=u.POLYFILL="P";t.exports=u},111:function(t,n,r){var e=r(614);t.exports=function(t){return"object"==typeof t?null!==t:e(t)}},1913:function(t){t.exports=!1},2190:function(t,n,r){var e=r(614),o=r(5005),i=r(3307);t.exports=i?function(t){return"symbol"==typeof t}:function(t){var n=o("Symbol");return e(n)&&Object(t)instanceof n}},133:function(t,n,r){var e=r(7392),o=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&e&&e<41}))},8536:function(t,n,r){var e=r(7854),o=r(614),i=r(2788),u=e.WeakMap;t.exports=o(u)&&/native code/.test(i(u))},30:function(t,n,r){var e,o=r(9670),i=r(6048),u=r(748),a=r(3501),c=r(490),s=r(317),l=r(6200),f=l("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"</"+"script>"},d=function(t){t.write(v("")),t.close();var n=t.parentWindow.Object;return t=null,n},x=function(){try{e=new ActiveXObject("htmlfile")}catch(o){}var t,n;x="undefined"!=typeof document?document.domain&&e?d(e):((n=s("iframe")).style.display="none",c.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F):d(e);for(var r=u.length;r--;)delete x.prototype[u[r]];return x()};a[f]=!0,t.exports=Object.create||function(t,n){var r;return null!==t?(p.prototype=o(t),r=new p,p.prototype=null,r[f]=t):r=x(),void 0===n?r:i(r,n)}},6048:function(t,n,r){var e=r(9781),o=r(3070),i=r(9670),u=r(1956);t.exports=e?Object.defineProperties:function(t,n){i(t);for(var r,e=u(n),a=e.length,c=0;a>c;)o.f(t,r=e[c++],n[r]);return t}},3070:function(t,n,r){var e=r(9781),o=r(4664),i=r(9670),u=r(4948),a=Object.defineProperty;n.f=e?a:function(t,n,r){if(i(t),n=u(n),i(r),o)try{return a(t,n,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},1236:function(t,n,r){var e=r(9781),o=r(5296),i=r(9114),u=r(5656),a=r(4948),c=r(6656),s=r(4664),l=Object.getOwnPropertyDescriptor;n.f=e?l:function(t,n){if(t=u(t),n=a(n),s)try{return l(t,n)}catch(r){}if(c(t,n))return i(!o.f.call(t,n),t[n])}},8006:function(t,n,r){var e=r(6324),o=r(748).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},5181:function(t,n){n.f=Object.getOwnPropertySymbols},6324:function(t,n,r){var e=r(6656),o=r(5656),i=r(1318).indexOf,u=r(3501);t.exports=function(t,n){var r,a=o(t),c=0,s=[];for(r in a)!e(u,r)&&e(a,r)&&s.push(r);for(;n.length>c;)e(a,r=n[c++])&&(~i(s,r)||s.push(r));return s}},1956:function(t,n,r){var e=r(6324),o=r(748);t.exports=Object.keys||function(t){return e(t,o)}},5296:function(t,n){"use strict";var r={}.propertyIsEnumerable,e=Object.getOwnPropertyDescriptor,o=e&&!r.call({1:2},1);n.f=o?function(t){var n=e(this,t);return!!n&&n.enumerable}:r},2140:function(t,n,r){var e=r(614),o=r(111);t.exports=function(t,n){var r,i;if("string"===n&&e(r=t.toString)&&!o(i=r.call(t)))return i;if(e(r=t.valueOf)&&!o(i=r.call(t)))return i;if("string"!==n&&e(r=t.toString)&&!o(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},3887:function(t,n,r){var e=r(5005),o=r(8006),i=r(5181),u=r(9670);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(u(t)),r=i.f;return r?n.concat(r(t)):n}},1320:function(t,n,r){var e=r(7854),o=r(614),i=r(6656),u=r(8880),a=r(3505),c=r(2788),s=r(9909),l=r(6530).CONFIGURABLE,f=s.get,p=s.enforce,v=String(String).split("String");(t.exports=function(t,n,r,c){var s,f=!!c&&!!c.unsafe,d=!!c&&!!c.enumerable,x=!!c&&!!c.noTargetGet,g=c&&void 0!==c.name?c.name:n;o(r)&&("Symbol("===String(g).slice(0,7)&&(g="["+String(g).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(r,"name")||l&&r.name!==g)&&u(r,"name",g),(s=p(r)).source||(s.source=v.join("string"==typeof g?g:""))),t!==e?(f?!x&&t[n]&&(d=!0):delete t[n],d?t[n]=r:u(t,n,r)):d?t[n]=r:a(n,r)})(Function.prototype,"toString",(function(){return o(this)&&f(this).source||c(this)}))},4488:function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:function(t,n,r){var e=r(7854);t.exports=function(t,n){try{Object.defineProperty(e,t,{value:n,configurable:!0,writable:!0})}catch(r){e[t]=n}return n}},6200:function(t,n,r){var e=r(2309),o=r(9711),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,n,r){var e=r(7854),o=r(3505),i="__core-js_shared__",u=e[i]||o(i,{});t.exports=u},2309:function(t,n,r){var e=r(1913),o=r(5465);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.18.1",mode:e?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1400:function(t,n,r){var e=r(9958),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},5656:function(t,n,r){var e=r(8361),o=r(4488);t.exports=function(t){return e(o(t))}},9958:function(t){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},7466:function(t,n,r){var e=r(9958),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},7908:function(t,n,r){var e=r(4488);t.exports=function(t){return Object(e(t))}},7593:function(t,n,r){var e=r(111),o=r(2190),i=r(8173),u=r(2140),a=r(5112)("toPrimitive");t.exports=function(t,n){if(!e(t)||o(t))return t;var r,c=i(t,a);if(c){if(void 0===n&&(n="default"),r=c.call(t,n),!e(r)||o(r))return r;throw TypeError("Can't convert object to primitive value")}return void 0===n&&(n="number"),u(t,n)}},4948:function(t,n,r){var e=r(7593),o=r(2190);t.exports=function(t){var n=e(t,"string");return o(n)?n:String(n)}},1694:function(t,n,r){var e={};e[r(5112)("toStringTag")]="z",t.exports="[object z]"===String(e)},6330:function(t){t.exports=function(t){try{return String(t)}catch(n){return"Object"}}},9711:function(t){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},3307:function(t,n,r){var e=r(133);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(t,n,r){var e=r(7854),o=r(2309),i=r(6656),u=r(9711),a=r(133),c=r(3307),s=o("wks"),l=e.Symbol,f=c?l:l&&l.withoutSetter||u;t.exports=function(t){return i(s,t)&&(a||"string"==typeof s[t])||(a&&i(l,t)?s[t]=l[t]:s[t]=f("Symbol."+t)),s[t]}},6535:function(t,n,r){"use strict";var e=r(2109),o=r(6790),i=r(9662),u=r(7908),a=r(7466),c=r(5417);e({target:"Array",proto:!0},{flatMap:function(t){var n,r=u(this),e=a(r.length);return i(t),(n=c(r,0)).length=o(n,r,r,e,0,1,t,arguments.length>1?arguments[1]:void 0),n}})},9244:function(t,n,r){r(1223)("flatMap")},9832:function(t,n,r){"use strict";r.d(n,{Z:function(){return R}});var e=r(6156),o=r(7294),i=r(977),u=r(4029),a=r(4546),c=r(4293),s=r.n(c),l=r(5444),f=r(9499),p=r(2283),v=r(5452),d=r(9873),x=r(7329),g=(r(6535),r(9244),r(528));function m(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function(t,n){if(!t)return;if("string"==typeof t)return h(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(t,n)}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var e=0;return function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function h(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var y=r(7460);function b(t,n){return n||(n=t.slice(0)),t.raw=n,t}var j,w,O,S,P,E=r(7169),A=r(2074),k=r(4126),T=(r(7669),r(4042),r(3624)),C=r.n(T);var z=(0,E.Z)(u.xu)(j||(j=b(["\n  position: relative;\n  width: 100%;\n"]))),D=(0,E.Z)(p.rU)(w||(w=b([""]))),I=(0,E.Z)(u.xv)(O||(O=b(["\n  margin: 0;\n  display: flex;\n  align-items: center;\n"]))),M=(0,E.Z)(u.xv)(S||(S=b(["\n  margin: 0;\n"]))),F=(0,E.Z)(k.E.div)(P||(P=b(["\n  display: flex;\n  align-items: center;\n"]))),L={duration:.3,type:"spring",ease:"easeIn",damping:8},_={duration:.3,type:"spring",ease:"easeOut",damping:7,stiffness:150},N={rest:{x:0,transition:L},hover:{x:10,transition:_}},$={rest:{x:0,transition:L},hover:{x:-10,transition:_}},Z=function(t){var n=t.sidenavData.items,r=t.pagePath,e=n[0],a=(0,v.$G)().t,c=(0,o.useMemo)((function(){return e?function(t,n){if(!n)throw new Error("must provide pagePath");var r,e,o,i=t.items,u=C()(n,1).join("");return t.url===u&&(r=t,e=i[0]),i.forEach((function(t,n){var a,c,s,l=i[n-1],f=i[n+1],p=i[n],v=t.items;t.url===u&&(r=t,l&&(s=null==l||null===(c=l.items)||void 0===c?void 0:c.length,o=s?l.items[s-1]:l),e=null!=p&&null!==(a=p.items)&&void 0!==a&&a.length?p.items[0]:f),t.items&&v.forEach((function(t,n){if(t.url===u){r=t;var i=v[n-1];i?o=i:p&&(o=p);var a=v[n+1];e=a||f}}))})),{currentSection:r,nextSection:e,previousSection:o}}(e,r):{}}),[e,r]),s=c.nextSection,l=c.previousSection;return(0,i.jsx)(z,null,(0,i.jsx)(u.kC,{sx:{justifyContent:"space-between",py:["20px","20px","14px"],px:["10px"],maxWidth:"1364px",margin:"0 auto",width:"100%"}},l?(0,i.jsx)(k.E.div,{whileHover:"hover"},(0,i.jsx)(D,{to:l.url,sx:{color:"text"}},(0,i.jsx)(I,{sx:{fontSize:"1rem","@media screen and (min-width: 640px)":{fontSize:"1rem"}}},(0,i.jsx)(F,{variants:$},(0,i.jsx)(A.J,{sx:{transform:"rotate(180deg)",marginRight:"3px"},size:18,name:"arrow_right"})),a("Previous")),(0,i.jsx)(M,{sx:{fontSize:"1.3rem","@media screen and (min-width: 640px)":{fontSize:"1.5rem"}}},l.title))):(0,i.jsx)("span",null),s?(0,i.jsx)(k.E.div,{whileHover:"hover"},(0,i.jsx)(D,{to:s.url,sx:{color:"text"}},(0,i.jsx)(I,{sx:{fontSize:"0.9rem","@media screen and (min-width: 640px)":{fontSize:"1rem"}}},a("Next"),(0,i.jsx)(F,{variants:N},(0,i.jsx)(A.J,{size:18,name:"arrow_right",sx:{marginLeft:"3px"}}))),(0,i.jsx)(M,{sx:{fontSize:"1.3rem","@media screen and (min-width: 640px)":{fontSize:"1.5rem"}}},s.title))):(0,i.jsx)("span",null)))};function G(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}var R=function(t){var n,r,c=(0,v.$G)(),h=c.locale,b=c.t,j=c.DEFAULT_LOCALE,w=(0,l.useStaticQuery)("263894237").allMdx,O=t.children,S=t.pageContext,P=t.uri,E=S.pagePath,A=S.frontmatter,k=A.title,T=A.description,C=A.keywords,z=A.featuredImage,D=A.status,I=A.hideLanguageSelector,M=A.hideBreadcrumbs;if(A.isCorePage)return(0,i.jsx)(o.Fragment,null,O);var F=E.replace(/^\/|\/$/g,"").split("/").slice(1),L=F.join("/"),_=function(t,n,r,e,o){void 0===t&&(t=[]),void 0===r&&(r="en"),void 0===e&&(e="en");var i=function(t,r){return t.filter((function(t){var e=t.node;return-1!==e.fileAbsolutePath.indexOf("/"+r+"/"+n+"/")&&-1===e.fileAbsolutePath.indexOf("/"+r+"/"+n+"/index.mdx")})).flatMap((function(t){var n=t.node,e=n.headings,o=n.frontmatter,i=n.fileAbsolutePath,u=i.slice(i.indexOf("/"+r+"/"),i.length).replace(/(.mdx|index.mdx|.md)$/gm,"").replace(/\/$/,""),a=u.replace(/^\/([\w]{2})\//,"/"),c=u.split("/").slice(-1)[0];return{title:o.title||(e.length>0?e[0].value:null)||c,slug:u,rawSlug:a,slugPart:c,order:o.order}}))},u=i(t,r),a=r!==e?i(t,e):[],c=(0,x.Z)(a),s=a.length<=0?u:u.map((function(t){var n=a.find((function(n,r){var e=n.rawSlug===t.rawSlug;return e&&c.splice(r,1),e}));return null!=n?n:t})).concat(c),l=n?[{part:n,title:(0,g.Qs)(n.replace(/-|_|\./g," ")),url:"/"+e+"/"+n}]:[];return{sidenavData:s.reduce((function(t,r){for(var i,u=r.title,a=r.slug,c=r.rawSlug,s=r.order,f=c.split("/"),p=t.items,v=function(){var t=i.value,r=p&&p.find((function(n){return n.slugPart===t}));r?r.items||(r.items=[]):(r={slugPart:t,title:(0,g.Qs)(t.replace(/-|_|\./g," ")),items:[],url:"/"+e+"/"+n},p.push(r)),p=r.items.sort((function(t,n){return null===t.order&&null!==n.order?1:null!==t.order&&null===n.order?-1:null===t.order&&null===n.order||t.order===n.order?t.title===n.title?0:t.title.localeCompare(n.title):t.order<n.order?-1:t.order>n.order?1:0}))},d=m(f.slice(1,-1));!(i=d()).done;)v();var x=f.length-1,h=p.find((function(t){return t.slugPart===f[x]}));return h?(h.url=a,h.title=u,h.order=s,o.includes(h.slugPart)&&l.push({part:h.slugPart,title:h.title,url:a})):(p.push({slugPart:f[x],url:a,items:[],title:u,order:s}),o.includes(f[x])&&l.push({part:f[x],title:u,url:a}),p.sort((function(t,n){return null===t.order&&null!==n.order?1:null!==t.order&&null===n.order?-1:null===t.order&&null===n.order||t.order===n.order?t.title===n.title?0:t.title.localeCompare(n.title):t.order<n.order?-1:t.order>n.order?1:0}))),t}),{items:[]}),breadcrumbData:l}}(w.edges,F[0],j,h,F),N=_.sidenavData,$=_.breadcrumbData,R=w.edges.filter((function(t){var n=t.node;return(0,g.af)(n).replace(/^\/|\/$/g,"").split("/").slice(1).join("/")===L&&(0,g.bL)(n.fileAbsolutePath)!==h})).map((function(t){var n=t.node;return{value:(0,g.af)(n),label:b("Language",null,null,(0,g.bL)(n.fileAbsolutePath))}})),U=null===(n=w.edges.find((function(t){var n=(0,g.af)(t.node);return t.node.fileAbsolutePath.includes("index.mdx")||(n+="/"),!s()(t.node)&&n===E})))||void 0===n?void 0:n.node.tableOfContents,W="object"==typeof D?function(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?G(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}({children:D.text},D):{children:D},H=(0,f.useLocation)().pathname.split("/")[2],B=k||function(){var t=o.Children.toArray(O).find((function(t){return"h1"===t.props.mdxType}));if(void 0!==t)return t.props.children}()||P.split("/").pop(),J=void 0!==H&&""!==H,Q=S.frontmatter&&!S.frontmatter.hideSidenav&&J,X=J&&!I,q=!s()(U)&&0!==(null===(r=U.items)||void 0===r?void 0:r.length),K=!M||J&&!I,V={title:B,description:T,keywords:C,featuredImage:z},Y=X||q?234:0;return Q&&(Y+=256),(0,i.jsx)(o.Fragment,null,Q&&(0,i.jsx)(u.xu,{sx:{width:"256px",display:["none","none","initial"]}},(0,i.jsx)(a.ZP,{boundaryElement:".content-boundary",dontUpdateHolderHeightWhenSticky:!0,style:{position:"relative"},hideOnBoundaryHit:!1,sx:{display:["none","none","initial"]}},(0,i.jsx)(p.t7,{data:N,currentPath:E}))),(0,i.jsx)(u.xu,{as:"article",sx:{width:["100%","100%","calc(100% - "+Y+"px)"],mt:J?[4,4,"64px"]:0,pl:J?[4,4,"32px"]:0,pr:J?[4,4,0]:0,pb:4}},(0,i.jsx)(y.HJ,V),D&&(0,i.jsx)(u.xu,{sx:{marginTop:J?2:0}},(0,i.jsx)(d.E_,Object.assign({sticky:!0},W,{sx:{width:"100%"}}))),K&&(0,i.jsx)(u.kC,{sx:{justifyContent:"space-between",position:"relative",alignItems:"flex-start",flexWrap:["wrap","wrap","unset"],px:J?0:[3,3,0]}},(0,i.jsx)(p.Oo,{data:$,pathDirs:F})),(0,i.jsx)(u.xu,{sx:{display:["block","block","none"]}},X&&(0,i.jsx)(v.$z,{data:R,pagePath:E}),q&&(0,i.jsx)(p.o5,{isMobile:!0,data:U})),(0,i.jsx)(u.xu,null,O),(0,i.jsx)(Z,{sidenavData:N,pagePath:E})),(0,i.jsx)(u.xu,{sx:{position:"relative"}},X&&(0,i.jsx)(v.$z,{sx:{display:["none","none","block"]},data:R,pagePath:E}),q&&(0,i.jsx)(p.o5,{styles:{display:["none","none","block"]},data:U})),(0,i.jsx)(p.zM,{sidenavData:N}))}},4259:function(t){t.exports=function(t,n,r){var e=-1,o=t.length;n<0&&(n=-n>o?0:o+n),(r=r>o?o:r)<0&&(r+=o),o=n>r?0:r-n>>>0,n>>>=0;for(var i=Array(o);++e<o;)i[e]=t[e+n];return i}},7561:function(t,n,r){var e=r(7990),o=/^\s+/;t.exports=function(t){return t?t.slice(0,e(t)+1).replace(o,""):t}},7990:function(t){var n=/\s/;t.exports=function(t){for(var r=t.length;r--&&n.test(t.charAt(r)););return r}},3624:function(t,n,r){var e=r(4259),o=r(554);t.exports=function(t,n,r){var i=null==t?0:t.length;return i?(n=r||void 0===n?1:o(n),e(t,0,(n=i-n)<0?0:n)):[]}},3218:function(t){t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}},8601:function(t,n,r){var e=r(4841),o=1/0;t.exports=function(t){return t?(t=e(t))===o||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}},554:function(t,n,r){var e=r(8601);t.exports=function(t){var n=e(t),r=n%1;return n==n?r?n-r:n:0}},4841:function(t,n,r){var e=r(7561),o=r(3218),i=r(3448),u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return NaN;if(o(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=o(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=e(t);var r=a.test(t);return r||c.test(t)?s(t.slice(2),r?2:8):u.test(t)?NaN:+t}}}]);
//# sourceMappingURL=fccdf8ce97af6abb5755b537d635d2e862c01520-25082ce50ccea72999f3.js.map