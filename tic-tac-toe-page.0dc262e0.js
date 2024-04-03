!function(){let e=`
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
`,l=document.querySelectorAll("[data-tictactoe-cell]");!function(){let e=document.querySelectorAll(".opponent__item"),t=localStorage.getItem("tictactoe-level")||"easy";"easy"===t?e[0].classList.add("active-level"):e[1].classList.add("active-level"),e.forEach(e=>e.addEventListener("click",e=>{let l=document.querySelector(".active-level");l&&l.classList.remove("active-level");let c=e.currentTarget;c.classList.add("active-level"),t=c.dataset.level,localStorage.setItem("tictactoe-level",t)}))}();let c=!0;l.forEach(l=>{l.addEventListener("click",()=>{c?(l.innerHTML=e,c=!1):(l.innerHTML=t,c=!0)})})}();
//# sourceMappingURL=tic-tac-toe-page.0dc262e0.js.map
