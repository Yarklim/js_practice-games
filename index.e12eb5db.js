let e,t;const n=document.querySelector(".content--wrapper"),r=document.querySelector("#fifteen"),o=Array.from(document.querySelectorAll(".fifteen__button"));if(16!==o.length)throw Error("There should be 16 items in HTML");o[15].style.display="none";let l=function(e){let t=[[],[],[],[]],n=0,r=0;for(let o=0;o<e.length;o++)n>=4&&(r++,n=0),t[r][n]=e[o],n++;return t}(o.map(e=>Number(e.dataset.matrixId)));u(l);let c=!1,s=!1;const i="gameShuffle";function u(e){for(let l=0;l<e.length;l++)for(let c=0;c<e[l].length;c++){var t,n,r;t=o[e[l][c]-1],n=c,r=l,t.style.transform=`translate3D(calc(${100*n}% + 10px), calc(${100*r}% + 10px), 0)`}}document.querySelector("#shuffle").addEventListener("click",()=>{if(c)return;c=!0,s=!0;let t=0;clearInterval(e),n.classList.add(i),e=setInterval(()=>{(function(e){let t=f(16,e),n=function({blankCoords:e,matrix:t,blockedCoords:n}){let r=[];for(let o=0;o<t.length;o++)for(let l=0;l<t[o].length;l++)!d({x:l,y:o},e)||n&&n.x===l&&n.y===o||r.push({x:l,y:o});return r}({blankCoords:t,matrix:e,blockedCoords:a});m(t,n[Math.floor(Math.random()*n.length)],e),a=t})(l),u(l),(t+=1)>=100&&(n.classList.remove(i),clearInterval(e),c=!1)},70)}),r.addEventListener("click",e=>{if(c)return;let t=e.target.closest("button");if(!t)return;let n=f(Number(t.dataset.matrixId),l),r=f(16,l);d(n,r)&&(m(r,n,l),u(l))}),window.addEventListener("keydown",e=>{if(c||!e.key.includes("Arrow"))return;let t=f(16,l),n={x:t.x,y:t.y},r=e.key.split("Arrow")[1].toLowerCase(),o=l.length;switch(r){case"up":n.y+=1;break;case"down":n.y-=1;break;case"left":n.x+=1;break;case"right":n.x-=1}n.y>=o||n.y<0||n.x>=o||n.x<0||(m(t,n,l),u(l))});let a=null;function f(e,t){for(let n=0;n<t.length;n++)for(let r=0;r<t[n].length;r++)if(t[n][r]===e)return{x:r,y:n};return null}function d(e,t){let n=Math.abs(e.x-t.x),r=Math.abs(e.y-t.y);return(1===n||1===r)&&(e.x===t.x||e.y===t.y)}function m(e,t,n){let o=n[e.y][e.x];if(n[e.y][e.x]=n[t.y][t.x],n[t.y][t.x]=o,function(e){let t=e.flat();for(let e=0;e<x.length;e++)if(t[e]!==x[e])return!1;return!0}(n)){if(!s)return;setTimeout(()=>{r.classList.add(y),setTimeout(()=>{r.classList.remove(y)},1350)},350),s=!1}}const x=Array(16).fill(0).map((e,t)=>t+1),y="fifteenWon",b=document.querySelector("#fifteen"),L=document.querySelector(".fifteen__shuffle"),h=document.querySelector("#current-m"),C=document.querySelector("#current-s"),v=document.querySelector("#current-ms"),M=document.querySelector("#best-m"),k=document.querySelector("#best-s"),g=document.querySelector("#best-ms"),S=document.querySelectorAll(".timer__wrapper");let T=!1,_=0,q=0,p=0,w=null,H=0;function E(){b.removeEventListener("click",N),p++,v.innerHTML="0"+p,q>59&&(_++,h.innerHTML="0"+_,q=0,C.innerHTML="0"+q),p>99&&(q++,C.innerHTML="0"+q,p=0),p>9&&(v.innerHTML=p),q>9&&(C.innerHTML=q),_>9&&(h.innerHTML=_),p<=9&&(v.textContent="0"+p)}function N(){T&&(t=setInterval(E,10))}function I(){clearInterval(t),w=h.textContent+C.textContent+v.textContent,H||(H=Number(w),M.textContent=h.textContent,k.textContent=C.textContent,g.textContent=v.textContent),Number(w=h.textContent+C.textContent+v.textContent)<=H&&(H=Number(w),M.textContent=h.textContent,k.textContent=C.textContent,g.textContent=v.textContent),Number(w)<=H&&0!==H&&S[0].classList.add("beat__best-time"),Number(w)>H&&0!==H&&S[0].classList.add("no-beat__best-time")}L.addEventListener("click",function(){I(),_=0,q=0,p=0,v.innerHTML="00",C.innerHTML="00",h.innerHTML="00",T=!0,S[0].classList.remove("beat__best-time"),S[0].classList.remove("no-beat__best-time"),b.addEventListener("click",N)}),new MutationObserver(function(e){e.forEach(function(e){"class"===e.attributeName&&I()})}).observe(b,{attributes:!0,attributeFilter:["class"]});
//# sourceMappingURL=index.e12eb5db.js.map