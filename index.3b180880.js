!function(){let e,t;let n=document.querySelector(".content--wrapper"),r=document.querySelector("#fifteen"),o=Array.from(document.querySelectorAll(".fifteen__button"));if(16!==o.length)throw Error("There should be 16 items in HTML");o[15].style.display="none";let l=function(e){let t=[[],[],[],[]],n=0,r=0;for(let o=0;o<e.length;o++)n>=4&&(r++,n=0),t[r][n]=e[o],n++;return t}(o.map(e=>Number(e.dataset.matrixId)));s(l);let i=!1,c=!1,u="gameShuffle";function s(e){for(let l=0;l<e.length;l++)for(let i=0;i<e[l].length;i++){var t,n,r;t=o[e[l][i]-1],n=i,r=l,t.style.transform=`translate3D(calc(${100*n}% + 10px), calc(${100*r}% + 10px), 0)`}}document.querySelector("#shuffle").addEventListener("click",()=>{if(i)return;i=!0,c=!0;let t=0;clearInterval(e),n.classList.add(u),e=setInterval(()=>{(function(e){let t=f(16,e),n=function({blankCoords:e,matrix:t,blockedCoords:n}){let r=[];for(let o=0;o<t.length;o++)for(let l=0;l<t[o].length;l++)!d({x:l,y:o},e)||n&&n.x===l&&n.y===o||r.push({x:l,y:o});return r}({blankCoords:t,matrix:e,blockedCoords:a});m(t,n[Math.floor(Math.random()*n.length)],e),a=t})(l),s(l),(t+=1)>=100&&(n.classList.remove(u),clearInterval(e),i=!1)},70)}),r.addEventListener("click",e=>{if(i)return;let t=e.target.closest("button");if(!t)return;let n=f(Number(t.dataset.matrixId),l),r=f(16,l);d(n,r)&&(m(r,n,l),s(l))}),window.addEventListener("keydown",e=>{if(i||!e.key.includes("Arrow"))return;let t=f(16,l),n={x:t.x,y:t.y},r=e.key.split("Arrow")[1].toLowerCase(),o=l.length;switch(r){case"up":n.y+=1;break;case"down":n.y-=1;break;case"left":n.x+=1;break;case"right":n.x-=1}n.y>=o||n.y<0||n.x>=o||n.x<0||(m(t,n,l),s(l))});let a=null;function f(e,t){for(let n=0;n<t.length;n++)for(let r=0;r<t[n].length;r++)if(t[n][r]===e)return{x:r,y:n};return null}function d(e,t){let n=Math.abs(e.x-t.x),r=Math.abs(e.y-t.y);return(1===n||1===r)&&(e.x===t.x||e.y===t.y)}function m(e,t,n){let o=n[e.y][e.x];if(n[e.y][e.x]=n[t.y][t.x],n[t.y][t.x]=o,function(e){let t=e.flat();for(let e=0;e<x.length;e++)if(t[e]!==x[e])return!1;return!0}(n)){if(!c)return;setTimeout(()=>{r.classList.add(y),setTimeout(()=>{r.classList.remove(y)},1350)},350),c=!1}}let x=Array(16).fill(0).map((e,t)=>t+1),y="fifteenWon",b=document.querySelector("#fifteen"),L=document.querySelector(".fifteen__shuffle"),h=document.querySelector("#current-m"),C=document.querySelector("#current-s"),v=document.querySelector("#current-ms"),M=document.querySelector("#best-m"),k=document.querySelector("#best-s"),T=document.querySelector("#best-ms"),g=document.querySelectorAll(".timer__wrapper"),S=!1,_=0,q=0,p=0,w=null,H=0;function E(){b.removeEventListener("click",N),p++,v.innerHTML="0"+p,q>59&&(_++,h.innerHTML="0"+_,q=0,C.innerHTML="0"+q),p>99&&(q++,C.innerHTML="0"+q,p=0),p>9&&(v.innerHTML=p),q>9&&(C.innerHTML=q),_>9&&(h.innerHTML=_),p<=9&&(v.textContent="0"+p)}function N(){S&&(t=setInterval(E,10))}function I(){clearInterval(t),w=h.textContent+C.textContent+v.textContent,H||(H=Number(w),M.innerHTML=h.textContent,k.textContent=C.textContent,T.textContent=v.textContent),Number(w=h.textContent+C.textContent+v.textContent)<=H&&(H=Number(w),M.textContent=h.textContent,k.textContent=C.textContent,T.textContent=v.textContent),Number(w)<=H&&0!==H&&g[0].classList.add("beat__best-time"),Number(w)>H&&0!==H&&g[0].classList.add("no-beat__best-time")}L.addEventListener("click",function(){I(),_=0,q=0,p=0,v.innerHTML="00",C.innerHTML="00",h.innerHTML="00",S=!0,g[0].classList.remove("beat__best-time"),g[0].classList.remove("no-beat__best-time"),b.addEventListener("click",N)}),new MutationObserver(function(e){e.forEach(function(e){"class"===e.attributeName&&I()})}).observe(b,{attributes:!0,attributeFilter:["class"]})}();
//# sourceMappingURL=index.3b180880.js.map
