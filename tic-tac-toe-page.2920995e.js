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
`,l=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],s=document.querySelectorAll("[data-tictactoe-cell]"),c=document.querySelector("[data-draw-value]"),o=function(){let e=document.querySelectorAll(".opponent__item"),t=localStorage.getItem("tictactoe-level")||"easy";return"easy"===t?e[0].classList.add("active-level"):e[1].classList.add("active-level"),e.forEach(e=>e.addEventListener("click",e=>{let l=document.querySelector(".active-level");l&&l.classList.remove("active-level");let s=e.currentTarget;s.classList.add("active-level"),t=s.dataset.level,localStorage.setItem("tictactoe-level",t)})),t}()||localStorage.getItem("tictactoe-level"),a=!0,n=!0,i=!1,r=["0","1","2","3","4","5","6","7","8"],d=null,u=!0,v=0,g=Number(localStorage.getItem("tictactoe-draw"))||0;function L(){s.forEach((e,l)=>{e.addEventListener("click",()=>{u||e.classList.contains("x")||e.classList.contains("o")||(e.innerHTML=t,e.classList.add("o"),v+=1,r[l]="busy",u=!0,n=!0,i=!1,setTimeout(()=>{f()},500),y())})})}function m(){d=r.filter(e=>"busy"!==e)}function f(){let t=[0,2,4,6,8];if(m(),a&&n){let l=Math.floor(Math.random()*t.length);s[t[l]].innerHTML=e,s[t[l]].classList.add("x"),r[t[l]]="busy",v+=1,a=!1,n=!1,i=!0,u=!1,m(),L()}if(!i&&!a&&n){let t=Number(Math.floor(Math.random()*d.length));console.log(r),console.log(d),console.log(t),s[d[t]].innerHTML=e,s[d[t]].classList.add("x"),r[d[t]]="busy",v+=1,n=!1,i=!0,u=!1,y(),L()}}function y(){let e=null;9===v&&(e="The game ended in a draw",g+=1,c.textContent=g,localStorage.setItem("tictactoe-draw",g));for(let t=0;t<l.length;t++)s[l[t][0]].classList.contains("x")&&s[l[t][1]].classList.contains("x")&&s[l[t][2]].classList.contains("x")&&(e="Winner - X"),s[l[t][0]].classList.contains("o")&&s[l[t][1]].classList.contains("o")&&s[l[t][2]].classList.contains("o")&&(e="Winner - 0");e&&setTimeout(()=>{console.log(e)},500)}c.textContent=g,"easy"===o&&f()}();
//# sourceMappingURL=tic-tac-toe-page.2920995e.js.map
