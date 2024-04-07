const t=`
<svg class="cell-icon cross" width="100" height="100" viewBox="0 0 100 100">
          <line
            class="first"
            x1="30"
            y1="30"
            x2="70"
            y2="70"
            stroke-width="7"
            stroke-linecap="round"
          />
          <line
            class="second"
            x1="70"
            y1="30"
            x2="30"
            y2="70"
            stroke-width="7"
            stroke-linecap="round"
          />
        </svg>
`,e=`
<svg class="cell-icon zero" width="100" height="100" viewBox="0 0 100 100">
          <circle
            r="23"
            cx="50"
            cy="50"
            stroke-width="7"
            fill="none"
            stroke-linecap="round"
          />
        </svg>
`,l=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],o=t=>{let e=new Map([["12",0],["48",0],["36",0],["02",1],["47",1],["01",2],["58",2],["46",2],["45",3],["06",3],["35",4],["17",4],["08",4],["26",4],["34",5],["28",5],["78",6],["03",6],["24",6],["68",7],["14",7],["67",8],["25",8],["04",8]]),l=[];for(let e=0;e<t.length;e++)"x"===t[e]&&l.push(e);let o=[];for(let e=0;e<t.length;e++)"o"===t[e]&&o.push(e);return e.get(o.join(""))},a=document.querySelectorAll("[data-tictactoe-cell]"),c=document.querySelector("[data-player-value]"),s=document.querySelector("[data-comp-value]"),n=document.querySelector("[data-draw-value]");let i=function(){let t=document.querySelectorAll(".opponent__item"),e=localStorage.getItem("tictactoe-level")||"easy";return"easy"===e?t[0].classList.add("active-level"):t[1].classList.add("active-level"),t.forEach(t=>t.addEventListener("click",t=>{let l=document.querySelector(".active-level");l&&l.classList.remove("active-level");let o=t.currentTarget;o.classList.add("active-level"),e=o.dataset.level,localStorage.setItem("tictactoe-level",e)})),e}()||localStorage.getItem("tictactoe-level"),r=!0,d=!0,u=!1;const g=["0","1","2","3","4","5","6","7","8"];let m=null,x=!0,L=0,v=null,h=Number(localStorage.getItem("tictactoe-player-win"))||0;c.textContent=h;let f=Number(localStorage.getItem("tictactoe-comp-win"))||0;s.textContent=f;let y=Number(localStorage.getItem("tictactoe-draw"))||0;function p(){a.forEach((l,o)=>{l.addEventListener("click",()=>{if(x||l.classList.contains("x")||l.classList.contains("o")||v){if(!x||r||l.classList.contains("x")||l.classList.contains("o")||v)return;l.innerHTML=t,l.classList.add("x"),L+=1,g[o]="x",console.log(g),x=!1,d=!0,u=!1,setTimeout(()=>{S()},500)}else l.innerHTML=e,l.classList.add("o"),L+=1,g[o]="o",console.log(g),x=!0,d=!0,u=!1,setTimeout(()=>{S()},500);M()})})}function w(){m=g.filter(t=>"x"!==t&&"o"!==t)}function S(){let e=[0,2,4,6,8];if(w(),r&&d&&!v){let l=Math.floor(Math.random()*e.length);a[e[l]].innerHTML=t,a[e[l]].classList.add("x"),g[e[l]]="x",console.log(g),L+=1,r=!1,d=!1,u=!0,x=!1,w(),p()}if(!u&&!r&&d&&!v){let e=o(g),l=Number(Math.floor(Math.random()*m.length));e&&!a[e].classList.contains("x")?(a[e].innerHTML=t,a[e].classList.add("x"),g[e]="x"):(a[m[l]].innerHTML=t,a[m[l]].classList.add("x"),g[m[l]]="x"),console.log(e),L+=1,d=!1,u=!0,x=!1,M(),p()}}function M(){for(let t=0;t<l.length;t++)a[l[t][0]].classList.contains("x")&&a[l[t][1]].classList.contains("x")&&a[l[t][2]].classList.contains("x")&&(v="Comp Win!",f+=1,s.textContent=f,localStorage.setItem("tictactoe-comp-win",f)),a[l[t][0]].classList.contains("o")&&a[l[t][1]].classList.contains("o")&&a[l[t][2]].classList.contains("o")&&(v="Player Win!",h+=1,c.textContent=h,localStorage.setItem("tictactoe-player-win",h));9===L&&"Player Win!"!==v&&"Comp Win!"!==v&&(v="The game ended in a draw",y+=1,n.textContent=y,localStorage.setItem("tictactoe-draw",y)),v&&setTimeout(()=>{console.log(v)},500)}n.textContent=y,"easy"===i?S():p();
//# sourceMappingURL=tic-tac-toe-page.31400c2a.js.map
