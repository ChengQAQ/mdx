!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/wp-content/themes/mdx/js",n(n.s=214)}({0:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(81))},10:function(t,e,n){var r=n(5);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},11:function(t,e,n){var r=n(7);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},12:function(t,e,n){var r=n(10),o=n(55),i=n(11),u=n(24),c=Object.defineProperty;e.f=r?c:function(t,e,n){if(i(t),e=u(e,!0),i(n),o)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},13:function(t,e,n){var r=n(58),o=n(28);t.exports=function(t){return r(o(t))}},15:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},17:function(t,e,n){var r=n(9),o=n(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},207:function(t,e,n){t.exports=n(215)},21:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},214:function(t,e,n){"use strict";n.r(e);var r,o=n(207),i=n.n(o),u="",c="",a=!1;$("body").prepend('<div class="OutOfsearchBox"><div class="searchBoxFill"></div></div>');var s=!1,f="undefined"!=typeof offlineMode&&offlineMode;function l(){"false"!=sessionStorage.getItem("rts_wra")&&(""!=(u=$(".seainput").val())&&""==c||""!=c&&u!=c&&""!=u?(sessionStorage.getItem("rtsk_"+u)?p(sessionStorage.getItem("rtsk_"+u),!0):a||(a=!0,$.get("/wp-json/wp/v2/posts?search="+u+"&pre_page=10&context=embed",(function(t,e){"success"==e?(!function(t,e){sessionStorage.getItem("rtsk_"+t)||(sessionStorage.length>=100?(sessionStorage.removeItem(sessionStorage.key(0)),sessionStorage.setItem("rtsk_"+t,e)):sessionStorage.setItem("rtsk_"+t,e))}(u,i()(t)),p(t,!1),a=!1):(mdui.snackbar({message:snackMuti,timeout:3e3,position:"top"}),sessionStorage.setItem("rts_wra","false"),a=!1)}))),c=u):""==u&&(f?$(".OutOfsearchBox").html('<div class="searchBoxFill"></div><div class="underRes">'+tipMutiOff+"</div>"):$(".OutOfsearchBox").html('<div class="searchBoxFill"></div>'),c=u)),s||(r=window.requestAnimationFrame(l))}function p(t,e){var n=t;if(e&&(n=JSON.parse(t)),$(".OutOfsearchBox").html('<div class="searchBoxFill"></div>'),"Axton"!==$(".seainput").val()&&"axton"!==$(".seainput").val()&&"无垠"!==$(".seainput").val()&&"flyhigher"!==$(".seainput").val()&&"Flyhigher"!==$(".seainput").val()||n.unshift({title:{rendered:"无垠"},date:"Forever",link:"https://flyhigher.top",excerpt:{rendered:"飞翔的天空无限大"}}),n.length>0)for(var r=0;r<n.length;r++){var o=n[r].title.rendered,i=n[r].date,u=n[r].link,c=n[r].excerpt.rendered,a=$(".OutOfsearchBox").html();$(".OutOfsearchBox").html(a+'<article class="searchCard mdui-shadow-2 mdui-typo"><a href="'+u+'"><h1>'+o+"</h1></a><p>"+c.replace(" [&hellip;]","&hellip;").replace("<p>","").replace("</p>","")+'</p><div class="mdui-divider underline"></div><span class="info">&nbsp;&nbsp;<i class="mdui-icon material-icons info-icon">&#xe192;</i> '+i.substring(0,10)+'</span><a class="mdui-btn mdui-ripple mdui-ripple-white coun-read" href="'+u+'">'+moreMuti+"</a></article>")}if(10==n.length){var s=$(".OutOfsearchBox").html();$(".OutOfsearchBox").html(s+'<div class="underRes">'+tipMuti+"</div>")}}$(".seainput").focus((function(){"false"==sessionStorage.getItem("rts_wra")&&mdui.snackbar({message:snackMuti,timeout:3e3,position:"top"}),s=!1,window.requestAnimationFrame(l)})),$(".seainput").blur((function(){s=!0,window.cancelAnimationFrame(r)}))},215:function(t,e,n){var r=n(216);t.exports=r},216:function(t,e,n){n(217);var r=n(9);r.JSON||(r.JSON={stringify:JSON.stringify}),t.exports=function(t,e,n){return r.JSON.stringify.apply(null,arguments)}},217:function(t,e,n){var r=n(4),o=n(17),i=n(5),u=o("JSON","stringify"),c=/[\uD800-\uDFFF]/g,a=/^[\uD800-\uDBFF]$/,s=/^[\uDC00-\uDFFF]$/,f=function(t,e,n){var r=n.charAt(e-1),o=n.charAt(e+1);return a.test(t)&&!s.test(o)||s.test(t)&&!a.test(r)?"\\u"+t.charCodeAt(0).toString(16):t},l=i((function(){return'"\\udf06\\ud834"'!==u("\udf06\ud834")||'"\\udead"'!==u("\udead")}));u&&r({target:"JSON",stat:!0,forced:l},{stringify:function(t,e,n){var r=u.apply(null,arguments);return"string"==typeof r?r.replace(c,f):r}})},24:function(t,e,n){var r=n(7);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},26:function(t,e,n){var r=n(27);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},27:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},28:function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},4:function(t,e,n){"use strict";var r=n(0),o=n(45).f,i=n(69),u=n(9),c=n(26),a=n(8),s=n(6),f=function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e};t.exports=function(t,e){var n,l,p,d,v,h,y,g,m=t.target,x=t.global,b=t.stat,O=t.proto,w=x?r:b?r[m]:(r[m]||{}).prototype,S=x?u:u[m]||(u[m]={}),j=S.prototype;for(p in e)n=!i(x?p:m+(b?".":"#")+p,t.forced)&&w&&s(w,p),v=S[p],n&&(h=t.noTargetGet?(g=o(w,p))&&g.value:w[p]),d=n&&h?h:e[p],n&&typeof v==typeof d||(y=t.bind&&n?c(d,r):t.wrap&&n?f(d):O&&"function"==typeof d?c(Function.call,d):d,(t.sham||d&&d.sham||v&&v.sham)&&a(y,"sham",!0),S[p]=y,O&&(s(u,l=m+"Prototype")||a(u,l,{}),u[l][p]=d,t.real&&j&&!j[p]&&a(j,p,d)))}},44:function(t,e,n){var r=n(0),o=n(7),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},45:function(t,e,n){var r=n(10),o=n(59),i=n(15),u=n(13),c=n(24),a=n(6),s=n(55),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=u(t),e=c(e,!0),s)try{return f(t,e)}catch(t){}if(a(t,e))return i(!o.f.call(t,e),t[e])}},5:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},55:function(t,e,n){var r=n(10),o=n(5),i=n(44);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},58:function(t,e,n){var r=n(5),o=n(21),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},59:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},6:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},69:function(t,e,n){var r=n(5),o=/#|\.prototype\./,i=function(t,e){var n=c[u(t)];return n==s||n!=a&&("function"==typeof e?r(e):!!e)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},a=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},7:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},8:function(t,e,n){var r=n(10),o=n(12),i=n(15);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},81:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},9:function(t,e){t.exports={}}});