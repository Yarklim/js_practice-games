!function(){let e;let t=document.querySelector(".content--wrapper"),r=document.querySelector("#fifteen"),l=Array.from(document.querySelectorAll(".fifteen__button"));if(16!==l.length)throw Error("There should be 16 items in HTML");l[15].style.display="none";let n=function(e){let t=[[],[],[],[]],r=0,l=0;for(let n=0;n<e.length;n++)r>=4&&(l++,r=0),t[l][r]=e[n],r++;return t}(l.map(e=>Number(e.dataset.matrixId)));s(n);let o=!1,a="gameShuffle";function s(e){for(let o=0;o<e.length;o++)for(let a=0;a<e[o].length;a++){var t,r,n;t=l[e[o][a]-1],r=a,n=o,t.style.transform=`translate3D(calc(${100*r}% + 10px), calc(${100*n}% + 10px), 0)`}}document.querySelector("#shuffle").addEventListener("click",()=>{if(o)return;o=!0;let r=0;clearInterval(e),t.classList.add(a),e=setInterval(()=>{(function(e){let t=u(16,e),r=function({blankCoords:e,matrix:t,blockedCoords:r}){let l=[];for(let n=0;n<t.length;n++)for(let o=0;o<t[n].length;o++)!c({x:o,y:n},e)||r&&r.x===o&&r.y===n||l.push({x:o,y:n});return l}({blankCoords:t,matrix:e,blockedCoords:i});f(t,r[Math.floor(Math.random()*r.length)],e),i=t})(n),s(n),(r+=1)>=100&&(t.classList.remove(a),clearInterval(e),o=!1)},70)}),r.addEventListener("click",e=>{if(o)return;let t=e.target.closest("button");if(!t)return;let r=u(Number(t.dataset.matrixId),n),l=u(16,n);c(r,l)&&(f(l,r,n),s(n))}),window.addEventListener("keydown",e=>{if(o||!e.key.includes("Arrow"))return;let t=u(16,n),r={x:t.x,y:t.y},l=e.key.split("Arrow")[1].toLowerCase(),a=n.length;switch(l){case"up":r.y+=1;break;case"down":r.y-=1;break;case"left":r.x+=1;break;case"right":r.x-=1}r.y>=a||r.y<0||r.x>=a||r.x<0||(f(t,r,n),s(n))});let i=null;function u(e,t){for(let r=0;r<t.length;r++)for(let l=0;l<t[r].length;l++)if(t[r][l]===e)return{x:l,y:r};return null}function c(e,t){let r=Math.abs(e.x-t.x),l=Math.abs(e.y-t.y);return(1===r||1===l)&&(e.x===t.x||e.y===t.y)}function f(e,t,l){let n=l[e.y][e.x];l[e.y][e.x]=l[t.y][t.x],l[t.y][t.x]=n,function(e){let t=e.flat();for(let e=0;e<d.length;e++)if(t[e]!==d[e])return!1;return!0}(l)&&setTimeout(()=>{r.classList.add(y),setTimeout(()=>{r.classList.remove(y)},1350)},350)}let d=Array(16).fill(0).map((e,t)=>t+1),y="fifteenWon"}();
//# sourceMappingURL=index.2a074bc3.js.map
