!function(){let e=`
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
`,t=`
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
`,l=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],o=e=>{let t=new Map([["12","0"],["48","0"],["36","0"],["02","1"],["47","1"],["01","2"],["58","2"],["46","2"],["45","3"],["06","3"],["35","4"],["17","4"],["08","4"],["26","4"],["34","5"],["28","5"],["78","6"],["03","6"],["24","6"],["68","7"],["14","7"],["67","8"],["25","8"],["04","8"]]),l=[];for(let t=0;t<e.length;t++)"x"===e[t]&&l.push(t);let o=[];for(let t=0;t<e.length;t++)"o"===e[t]&&(o.push(t),console.log(o));if(o.length>1){for(let e of t.keys())if(e.includes(o.join("").slice(-2)))return console.log(o.join("").slice(-2)),console.log(t.get(e)),t.get(e)}return null},a=document.querySelectorAll("[data-tictactoe-cell]"),c=document.querySelector("[data-player-value]"),s=document.querySelector("[data-comp-value]"),n=document.querySelector("[data-draw-value]"),i=function(){let e=document.querySelectorAll(".opponent__item"),t=localStorage.getItem("tictactoe-level")||"easy";return"easy"===t?e[0].classList.add("active-level"):e[1].classList.add("active-level"),e.forEach(e=>e.addEventListener("click",e=>{let l=document.querySelector(".active-level");l&&l.classList.remove("active-level");let o=e.currentTarget;o.classList.add("active-level"),t=o.dataset.level,localStorage.setItem("tictactoe-level",t)})),t}()||localStorage.getItem("tictactoe-level"),r=!0,d=!0,u=!1,m=["0","1","2","3","4","5","6","7","8"],g=null,x=!0,L=0,v=null,f=Number(localStorage.getItem("tictactoe-player-win"))||0;c.textContent=f;let h=Number(localStorage.getItem("tictactoe-comp-win"))||0;s.textContent=h;let y=Number(localStorage.getItem("tictactoe-draw"))||0;function p(){a.forEach((l,o)=>{l.addEventListener("click",()=>{if(x||l.classList.contains("x")||l.classList.contains("o")||v){if(!x||r||l.classList.contains("x")||l.classList.contains("o")||v)return;l.innerHTML=e,l.classList.add("x"),L+=1,m[o]="x",x=!1,d=!0,u=!1,setTimeout(()=>{S()},500)}else l.innerHTML=t,l.classList.add("o"),L+=1,m[o]="o",x=!0,d=!0,u=!1,setTimeout(()=>{S()},500);M()})})}function w(){g=m.filter(e=>"x"!==e&&"o"!==e)}function S(){let t=[0,2,4,6,8];if(w(),r&&d&&!v){let l=Math.floor(Math.random()*t.length);a[t[l]].innerHTML=e,a[t[l]].classList.add("x"),m[t[l]]="x",L+=1,r=!1,d=!1,u=!0,x=!1,w(),p()}if(!u&&!r&&d&&!v){let t=o(m),l=Number(Math.floor(Math.random()*g.length));t&&!a[t].classList.contains("x")?(a[Number(t)].innerHTML=e,a[Number(t)].classList.add("x"),m[Number(t)]="x"):(a[g[l]].innerHTML=e,a[g[l]].classList.add("x"),m[g[l]]="x"),L+=1,d=!1,u=!0,x=!1,M(),p()}}function M(){for(let e=0;e<l.length;e++)a[l[e][0]].classList.contains("x")&&a[l[e][1]].classList.contains("x")&&a[l[e][2]].classList.contains("x")&&(v="Comp Win!",h+=1,s.textContent=h,localStorage.setItem("tictactoe-comp-win",h)),a[l[e][0]].classList.contains("o")&&a[l[e][1]].classList.contains("o")&&a[l[e][2]].classList.contains("o")&&(v="Player Win!",f+=1,c.textContent=f,localStorage.setItem("tictactoe-player-win",f));9===L&&"Player Win!"!==v&&"Comp Win!"!==v&&(v="The game ended in a draw",y+=1,n.textContent=y,localStorage.setItem("tictactoe-draw",y)),v&&setTimeout(()=>{console.log(v)},500)}n.textContent=y,"easy"===i?S():p()}();
//# sourceMappingURL=tic-tac-toe-page.63da4e28.js.map
