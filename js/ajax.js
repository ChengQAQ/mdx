!function(e){function t(t){for(var a,d,i=t[0],s=t[1],l=t[2],g=0,m=[];g<i.length;g++)d=i[g],Object.prototype.hasOwnProperty.call(r,d)&&r[d]&&m.push(r[d][0]),r[d]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);for(p&&p(t);m.length;)m.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(a=!1)}a&&(o.splice(t--,1),e=d(d.s=n[0]))}return e}var a={},r={2:0},o=[];function d(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.m=e,d.c=a,d.d=function(e,t,n){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)d.d(n,a,function(t){return e[t]}.bind(null,a));return n},d.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/wp-content/themes/mdx/js";var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var p=s;o.push([121,0]),n()}({121:function(e,t,n){"use strict";n.r(t);n(21);var a,r=n(4),o=n(0),d=1;window.addEventListener("DOMContentLoaded",()=>{var e=Object(o.a)("div.nextpage a").innerText;if(""===e?Object(o.a)("div.nextpage",e=>{e.parentNode.removeChild(e)}):(a=Object(o.a)("div.nextpage a").getAttribute("href"),Object(o.a)("#postlist").insertAdjacentHTML("afterend",'<div class="mdui-hoverable nextpage2">'.concat(e,"</div>")),Object(o.a)("div.nextpage",e=>{e.parentNode.removeChild(e)}),Object(o.a)("div.main").addEventListener("click",e=>{var t;e.target.classList.contains("nextpage2")&&"div"===e.target.tagName.toLowerCase()&&(Object(o.a)("div.nextpage2").style.display="none",Object(o.a)("div.nextpage2").insertAdjacentHTML("afterend",'<div class="mdui-spinner mdx-ajax-loading mdui-center"></div>'),mdui.updateSpinners(),t=a,Object(r.a)(t,{credentials:"same-origin"}).then(e=>{d++;let t=(new DOMParser).parseFromString(e,"text/html");a=t.querySelector("div.nextpage a"),enhanced_ajax&&parseInt(sessionStorage.getItem("mdx_index_loaded_page"))<=30&&(sessionStorage.setItem("mdx_index_page_"+d,window.btoa(encodeURIComponent(e))),sessionStorage.setItem("mdx_index_loaded_page",d));let n="";if(null===a)n=e.replace('<div class="nextpage mdui-center"></div>',""),Object(o.a)("div.nextpage2",e=>{e.parentNode.removeChild(e)});else{n=e;let t=(new DOMParser).parseFromString(n,"text/html").querySelector("div.nextpage");t.parentNode.removeChild(t),Object(o.a)("div.nextpage2").style.display=""}Object(o.a)("div.mdx-ajax-loading",e=>{e.parentNode.removeChild(e)});let r=("undefined"!=typeof data2Parsed?data2Parsed:(new DOMParser).parseFromString(n,"text/html")).getElementById("postlist").innerHTML;Object(o.a)("#postlist").insertAdjacentHTML("beforeend",r)}).catch(()=>{mdui.snackbar({message:ajax_error,timeout:5e3,position:"top"})}))})),enhanced_ajax&&document.getElementById("postlist").getElementsByTagName("a").length>0)if(sessionStorage.getItem("mdx_index_page_1")){if(sessionStorage.getItem("mdx_index_page_1")!==window.btoa(encodeURIComponent(document.getElementById("postlist").getElementsByTagName("a")[0].href))){for(let e=1;e<=parseInt(sessionStorage.getItem("mdx_index_loaded_page"));e++)sessionStorage.removeItem("mdx_index_page_"+e);sessionStorage.setItem("mdx_index_page_1",window.btoa(encodeURIComponent(document.getElementById("postlist").getElementsByTagName("a")[0].href))),sessionStorage.setItem("mdx_index_loaded_page",1)}else if(parseInt(sessionStorage.getItem("mdx_index_loaded_page"))>1)for(let e=2;e<=parseInt(sessionStorage.getItem("mdx_index_loaded_page"));e++){var t=decodeURIComponent(window.atob(sessionStorage.getItem("mdx_index_page_"+e)));let n=(new DOMParser).parseFromString(t,"text/html"),r="";if(null===(a=n.querySelector("div.nextpage a")))r=t.replace('<div class="nextpage mdui-center"></div>',""),Object(o.a)("div.nextpage2",e=>{e.parentNode.removeChild(e)});else{r=t;let e=(new DOMParser).parseFromString(r,"text/html").querySelector("div.nextpage");e.parentNode.removeChild(e),Object(o.a)("div.nextpage2").style.display=""}let i=("undefined"!=typeof data2Parsed?data2Parsed:(new DOMParser).parseFromString(r,"text/html")).getElementById("postlist").innerHTML;Object(o.a)("#postlist").insertAdjacentHTML("beforeend",i),d=e}}else sessionStorage.setItem("mdx_index_page_1",window.btoa(encodeURIComponent(document.getElementById("postlist").getElementsByTagName("a")[0].href))),sessionStorage.setItem("mdx_index_loaded_page",1)})}});
//# sourceMappingURL=ajax.js.map