function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},c=n.parcelRequire0a7e;null==c&&((c=function(t){if(t in r)return r[t].exports;if(t in a){var e=a[t];delete a[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var c=Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(t,e){a[t]=e},n.parcelRequire0a7e=c),(0,c.register)("kyEFX",function(e,n){t(e.exports,"register",function(){return r},function(t){return r=t});var r,a=new Map;r=function(t,e){for(var n=0;n<e.length-1;n+=2)a.set(e[n],{baseUrl:t,path:e[n+1]})}}),c("kyEFX").register(new URL("",import.meta.url).toString(),JSON.parse('["fktKQ","match-game.f3c7d65f.js","hLVGg","1.f189bd89.png","3T5C9","2.fd7e5ffe.png","6ORol","3.22df8977.png","bQEUj","4.0a998f5f.png","4LboE","5.864e2aee.png","jf5qc","6.4aa43873.png","fp7c0","7.298a234b.png","akGlx","8.2abc8a8f.png","a1Y5g","9.857174e9.png","1tj8Y","10.f9e31123.png","dd0QF","11.dcb417ea.png","806iG","12.9fe5c020.png","hRhe1","13.04455064.png","in2Ut","14.50abe247.png","osta0","15.76e6d485.png","h7b7j","16.5dc9c74f.png","1ssVc","17.6ed3f9e6.png","joXrK","18.dc2cb9de.png","9pNUs","19.976225b5.png","95Avo","20.a6905a8b.png"]'));var i={};t(i,"img0",function(){return e(o)}),t(i,"img1",function(){return e(d)}),t(i,"img2",function(){return e(u)}),t(i,"img3",function(){return e(l)}),t(i,"img4",function(){return e(s)}),t(i,"img5",function(){return e(g)}),t(i,"img6",function(){return e(m)}),t(i,"img7",function(){return e(_)}),t(i,"img8",function(){return e(f)}),t(i,"img9",function(){return e(p)}),t(i,"img10",function(){return e(H)}),t(i,"img11",function(){return e(S)}),t(i,"img12",function(){return e(R)}),t(i,"img13",function(){return e(b)}),t(i,"img14",function(){return e(E)}),t(i,"img15",function(){return e(v)}),t(i,"img16",function(){return e(L)}),t(i,"img17",function(){return e(A)}),t(i,"img18",function(){return e(F)}),t(i,"img19",function(){return e(h)});var o={};o=new URL("1.f189bd89.png",import.meta.url).toString();var d={};d=new URL("2.fd7e5ffe.png",import.meta.url).toString();var u={};u=new URL("3.22df8977.png",import.meta.url).toString();var l={};l=new URL("4.0a998f5f.png",import.meta.url).toString();var s={};s=new URL("5.864e2aee.png",import.meta.url).toString();var g={};g=new URL("6.4aa43873.png",import.meta.url).toString();var m={};m=new URL("7.298a234b.png",import.meta.url).toString();var _={};_=new URL("8.2abc8a8f.png",import.meta.url).toString();var f={};f=new URL("9.857174e9.png",import.meta.url).toString();var p={};p=new URL("10.f9e31123.png",import.meta.url).toString();var H={};H=new URL("11.dcb417ea.png",import.meta.url).toString();var S={};S=new URL("12.9fe5c020.png",import.meta.url).toString();var R={};R=new URL("13.04455064.png",import.meta.url).toString();var b={};b=new URL("14.50abe247.png",import.meta.url).toString();var E={};E=new URL("15.76e6d485.png",import.meta.url).toString();var v={};v=new URL("16.5dc9c74f.png",import.meta.url).toString();var L={};L=new URL("17.6ed3f9e6.png",import.meta.url).toString();var A={};A=new URL("18.dc2cb9de.png",import.meta.url).toString();var F={};F=new URL("19.976225b5.png",import.meta.url).toString();var h={};h=new URL("20.a6905a8b.png",import.meta.url).toString();const w=t=>`<li class="match__cards--item" data-value='${t}'>
  <img src=${i["img"+t]}
  alt="card"
  class="match__card--img"
  width="200"
  height="200" />
  </li>`,U=document.querySelector(".backdrop"),y=document.querySelector(".modal__close"),q=document.querySelector(".match__result--steps");function x(){I(),U.classList.add("is-hidden")}function C(t){"Escape"===t.code&&x()}U.addEventListener("click",t=>{t.currentTarget===t.target&&x()}),y.addEventListener("click",x);const k=document.querySelector("[data-counter-minus]"),N=document.querySelector("[data-counter-plus]"),O=document.querySelector(".match__counter--count"),j=document.querySelector(".match__cards--list"),T=document.querySelector(".match__current-steps--value"),M=document.querySelector(".match__best-steps--value");function I(){let t=Number(localStorage.getItem("matchCount"))||4,e=Number(localStorage.getItem(`steps-count-${t}`))||0,n=0,r=0===e;T.textContent=n,M.textContent=e,O.textContent=t;let a=c();function c(){let e=[];for(let n=0;n<t;n++)e.push(w(n),w(n));for(let t=0;t<e.length;t++){let n=e[t],r=Math.floor(Math.random()*e.length);e[t]=e[r],e[r]=n}return j.innerHTML=e.join(""),d(),e}j.innerHTML=a.join(""),4===t&&k.classList.add("disabled"),k.addEventListener("click",function(){4!==t&&(5===t&&k.classList.add("disabled"),t-=1,localStorage.setItem("matchCount",JSON.stringify(t)),N.classList.remove("disabled"),O.textContent=t,c(),location.reload())}),N.addEventListener("click",function(){20!==t&&(19===t&&N.classList.add("disabled"),t+=1,localStorage.setItem("matchCount",JSON.stringify(t)),k.classList.remove("disabled"),O.textContent=t,c(),location.reload())});let i=null,o=null;function d(){let a=document.querySelectorAll(".match__cards--item");a.forEach(c=>{c.addEventListener("click",()=>{c.classList.contains("active")||c.classList.contains("matched-cards")||(n+=1,T.textContent=n),c.classList.contains("active")||c.classList.contains("matched-cards")||(i&&o&&(i.classList.remove("active"),o.classList.remove("active"),i=null,o=null),c.classList.add("active"),i?o=c:i=c,i&&o&&i.getAttribute("data-value")===o.getAttribute("data-value")&&(i.classList.add("matched-cards"),o.classList.add("matched-cards")),a.length===document.querySelectorAll(".matched-cards").length&&setTimeout(()=>{var a;a=n,U.classList.remove("is-hidden"),q.textContent=`${a} steps`,window.addEventListener("keydown",C),r&&localStorage.setItem(`steps-count-${t}`,JSON.stringify(n)),n<=e&&localStorage.setItem(`steps-count-${t}`,JSON.stringify(n)),n=0},300))})})}d()}I();
//# sourceMappingURL=match-game.f3c7d65f.js.map
