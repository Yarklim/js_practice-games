let e,t;const n=document.querySelector(".content--wrapper"),r=document.querySelector("#fifteen"),o=Array.from(document.querySelectorAll(".fifteen__button"));if(16!==o.length)throw Error("There should be 16 items in HTML");o[15].style.display="none";let l=function(e){let t=[[],[],[],[]],n=0,r=0;for(let o=0;o<e.length;o++)n>=4&&(r++,n=0),t[r][n]=e[o],n++;return t}(o.map(e=>Number(e.dataset.matrixId)));i(l);let a=!1,c=!1;const s="gameShuffle";function i(e){for(let l=0;l<e.length;l++)for(let a=0;a<e[l].length;a++){var t,n,r;t=o[e[l][a]-1],n=a,r=l,t.style.transform=`translate3D(calc(${100*n}% + 10px), calc(${100*r}% + 10px), 0)`}}document.querySelector("#shuffle").addEventListener("click",()=>{if(a)return;a=!0,c=!0;let t=0;clearInterval(e),n.classList.add(s),e=setInterval(()=>{(function(e){let t=m(16,e),n=function({blankCoords:e,matrix:t,blockedCoords:n}){let r=[];for(let o=0;o<t.length;o++)for(let l=0;l<t[o].length;l++)!f({x:l,y:o},e)||n&&n.x===l&&n.y===o||r.push({x:l,y:o});return r}({blankCoords:t,matrix:e,blockedCoords:u});d(t,n[Math.floor(Math.random()*n.length)],e),u=t})(l),i(l),(t+=1)>=100&&(n.classList.remove(s),clearInterval(e),a=!1)},70)}),r.addEventListener("click",e=>{if(a)return;let t=e.target.closest("button");if(!t)return;let n=m(Number(t.dataset.matrixId),l),r=m(16,l);f(n,r)&&(d(r,n,l),i(l))}),window.addEventListener("keydown",e=>{if(a||!e.key.includes("Arrow"))return;let t=m(16,l),n={x:t.x,y:t.y},r=e.key.split("Arrow")[1].toLowerCase(),o=l.length;switch(r){case"up":n.y+=1;break;case"down":n.y-=1;break;case"left":n.x+=1;break;case"right":n.x-=1}n.y>=o||n.y<0||n.x>=o||n.x<0||(d(t,n,l),i(l))});let u=null;function m(e,t){for(let n=0;n<t.length;n++)for(let r=0;r<t[n].length;r++)if(t[n][r]===e)return{x:r,y:n};return null}function f(e,t){let n=Math.abs(e.x-t.x),r=Math.abs(e.y-t.y);return(1===n||1===r)&&(e.x===t.x||e.y===t.y)}function d(e,t,n){let o=n[e.y][e.x];if(n[e.y][e.x]=n[t.y][t.x],n[t.y][t.x]=o,function(e){let t=e.flat();for(let e=0;e<y.length;e++)if(t[e]!==y[e])return!1;return!0}(n)){if(!c)return;setTimeout(()=>{r.classList.add(x),setTimeout(()=>{r.classList.remove(x)},1350)},350),c=!1}}const y=Array(16).fill(0).map((e,t)=>t+1),x="fifteenWon",b=document.querySelector("#fifteen"),g=document.querySelector(".fifteen__shuffle"),L=document.querySelector("#current-m"),h=document.querySelector("#current-s"),S=document.querySelector("#current-ms"),v=document.querySelector("#best-m"),M=document.querySelector("#best-s"),C=document.querySelector("#best-ms"),T=document.querySelectorAll(".timer__wrapper");v.innerHTML=localStorage.getItem("min")||"00",M.innerHTML=localStorage.getItem("sec")||"00",C.innerHTML=localStorage.getItem("ms")||"00";let I=!1,k=0,H=0,_=0,q=Number((localStorage.getItem("min")||"00")+(localStorage.getItem("sec")||"00")+(localStorage.getItem("ms")||"00")),p=null;function w(){b.removeEventListener("click",E),_++,S.innerHTML="0"+_,H>59&&(k++,L.innerHTML="0"+k,H=0,h.innerHTML="0"+H),_>99&&(H++,h.innerHTML="0"+H,_=0),_>9&&(S.innerHTML=_),H>9&&(h.innerHTML=H),k>9&&(L.innerHTML=k),_<=9&&(S.textContent="0"+_)}function E(){I&&(t=setInterval(w,10))}function A(){var e,n,r;clearInterval(t),(0!==(p=Number(L.textContent+h.textContent+S.textContent))&&p<=q&&0!==q||0===q)&&(q=p,v.textContent=L.textContent,M.textContent=h.textContent,C.textContent=S.textContent,e=v.textContent,n=M.textContent,r=C.textContent,localStorage.setItem("min",e),localStorage.setItem("sec",n),localStorage.setItem("ms",r),T[0].classList.add("beat__best-time")),Number(p)>q&&0!==q&&T[0].classList.add("no-beat__best-time")}g.addEventListener("click",function(){A(),k=0,H=0,_=0,S.innerHTML="00",h.innerHTML="00",L.innerHTML="00",I=!0,T[0].classList.remove("beat__best-time"),T[0].classList.remove("no-beat__best-time"),b.addEventListener("click",E)}),new MutationObserver(function(e){e.forEach(function(e){"class"===e.attributeName&&A()})}).observe(b,{attributes:!0,attributeFilter:["class"]});
//# sourceMappingURL=index.8a35be1f.js.map
