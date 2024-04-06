!function(){let e=`
<svg class="cell-icon cross">
          <line
            class="first"
            x1="25"
            y1="25"
            x2="70"
            y2="70"
            stroke-width="7"
            stroke-linecap="round"
          />
          <line
            class="second"
            x1="70"
            y1="25"
            x2="25"
            y2="70"
            stroke-width="7"
            stroke-linecap="round"
          />
        </svg>
`,t=`
<svg class="cell-icon zero">
          <circle
            r="25"
            cx="48"
            cy="48"
            stroke-width="7"
            fill="none"
            stroke-linecap="round"
          />
        </svg>
`,l=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],s=document.querySelectorAll("[data-tictactoe-cell]"),c=document.querySelector("[data-draw-value]"),a=function(){let e=document.querySelectorAll(".opponent__item"),t=localStorage.getItem("tictactoe-level")||"easy";return"easy"===t?e[0].classList.add("active-level"):e[1].classList.add("active-level"),e.forEach(e=>e.addEventListener("click",e=>{let l=document.querySelector(".active-level");l&&l.classList.remove("active-level");let s=e.currentTarget;s.classList.add("active-level"),t=s.dataset.level,localStorage.setItem("tictactoe-level",t)})),t}()||localStorage.getItem("tictactoe-level"),n=!0,o=!0,i=!1,r=["0","1","2","3","4","5","6","7","8"],d=null,u=!0,v=0,L=null,g=Number(localStorage.getItem("tictactoe-draw"))||0;function m(){s.forEach((e,l)=>{e.addEventListener("click",()=>{u||e.classList.contains("x")||e.classList.contains("o")||L||(e.innerHTML=t,e.classList.add("o"),v+=1,r[l]="busy",u=!0,o=!0,i=!1,setTimeout(()=>{y()},500),h())})})}function f(){d=r.filter(e=>"busy"!==e)}function y(){let t=[0,2,4,6,8];if(f(),n&&o&&!L){let l=Math.floor(Math.random()*t.length);s[t[l]].innerHTML=e,s[t[l]].classList.add("x"),r[t[l]]="busy",v+=1,n=!1,o=!1,i=!0,u=!1,f(),m()}if(!i&&!n&&o&&!L){let t=Number(Math.floor(Math.random()*d.length));s[d[t]].innerHTML=e,s[d[t]].classList.add("x"),r[d[t]]="busy",v+=1,o=!1,i=!0,u=!1,h(),m()}}function h(){for(let e=0;e<l.length;e++)s[l[e][0]].classList.contains("x")&&s[l[e][1]].classList.contains("x")&&s[l[e][2]].classList.contains("x")&&(L="Winner - X"),s[l[e][0]].classList.contains("o")&&s[l[e][1]].classList.contains("o")&&s[l[e][2]].classList.contains("o")&&(L="Winner - 0");9===v&&"Winner - X"!==L&&"Winner - 0"!==L&&(L="The game ended in a draw",g+=1,c.textContent=g,localStorage.setItem("tictactoe-draw",g)),L&&setTimeout(()=>{console.log(L)},500)}c.textContent=g,"easy"===a&&y()}();
//# sourceMappingURL=tic-tac-toe-page.e7db4063.js.map
