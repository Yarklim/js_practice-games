const e=`
<svg class="cell-icon cross">
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
<svg class="cell-icon zero">
          <circle
            r="23"
            cx="48"
            cy="48"
            stroke-width="7"
            fill="none"
            stroke-linecap="round"
          />
        </svg>
`,s=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],c=document.querySelectorAll("[data-tictactoe-cell]"),l=document.querySelector("[data-draw-value]");!function(){let e=document.querySelectorAll(".opponent__item"),t=localStorage.getItem("tictactoe-level")||"easy";"easy"===t?e[0].classList.add("active-level"):e[1].classList.add("active-level"),e.forEach(e=>e.addEventListener("click",e=>{let s=document.querySelector(".active-level");s&&s.classList.remove("active-level");let c=e.currentTarget;c.classList.add("active-level"),t=c.dataset.level,localStorage.setItem("tictactoe-level",t)}))}();let a=!0,n=0,o=Number(localStorage.getItem("tictactoe-draw"))||0;l.textContent=o,c.forEach(i=>{i.addEventListener("click",()=>(function(i){if(!a||i.classList.contains("x")||i.classList.contains("o")){if(a||i.classList.contains("x")||i.classList.contains("o"))return;i.innerHTML=t,i.classList.add("o"),n+=1,a=!0}else i.innerHTML=e,i.classList.add("x"),n+=1,a=!1;(function(){let e=null;9===n&&(e="The game ended in a draw",o+=1,l.textContent=o,localStorage.setItem("tictactoe-draw",o));for(let t=0;t<s.length;t++)c[s[t][0]].classList.contains("x")&&c[s[t][1]].classList.contains("x")&&c[s[t][2]].classList.contains("x")&&(e="Winner - X"),c[s[t][0]].classList.contains("o")&&c[s[t][1]].classList.contains("o")&&c[s[t][2]].classList.contains("o")&&(e="Winner - 0");e&&setTimeout(()=>{console.log(e)},500)})()})(i))});
//# sourceMappingURL=tic-tac-toe-page.8022eef9.js.map
