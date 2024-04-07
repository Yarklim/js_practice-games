!function(){let e=`
<svg class="cell-icon cross" width="100" height="100" viewBox="0 0 100 100">
          <line
            class="first"
            x1="30"
            y1="28"
            x2="72"
            y2="70"
            stroke-width="7"
            stroke-linecap="round"
          />
          <line
            class="second"
            x1="72"
            y1="28"
            x2="30"
            y2="70"
            stroke-width="7"
            stroke-linecap="round"
          />
        </svg>
`,t=`
<svg class="cell-icon zero" width="100" height="100" viewBox="0 0 100 100">
          <circle
            r="25"
            cx="50"
            cy="50"
            stroke-width="7"
            fill="none"
            stroke-linecap="round"
          />
        </svg>
`,l=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],s=document.querySelectorAll("[data-tictactoe-cell]"),c=document.querySelector("[data-draw-value]"),a=function(){let e=document.querySelectorAll(".opponent__item"),t=localStorage.getItem("tictactoe-level")||"easy";return"easy"===t?e[0].classList.add("active-level"):e[1].classList.add("active-level"),e.forEach(e=>e.addEventListener("click",e=>{let l=document.querySelector(".active-level");l&&l.classList.remove("active-level");let s=e.currentTarget;s.classList.add("active-level"),t=s.dataset.level,localStorage.setItem("tictactoe-level",t)})),t}()||localStorage.getItem("tictactoe-level"),n=!0,o=!0,i=!1,r=["0","1","2","3","4","5","6","7","8"],d=null,u=!0,v=0,g=null,L=Number(localStorage.getItem("tictactoe-draw"))||0;function h(){s.forEach((e,l)=>{e.addEventListener("click",()=>{u||e.classList.contains("x")||e.classList.contains("o")||g||(e.innerHTML=t,e.classList.add("o"),v+=1,r[l]="busy",u=!0,o=!0,i=!1,setTimeout(()=>{f()},500),y())})})}function m(){d=r.filter(e=>"busy"!==e)}function f(){let t=[0,2,4,6,8];if(m(),n&&o&&!g){let l=Math.floor(Math.random()*t.length);s[t[l]].innerHTML=e,s[t[l]].classList.add("x"),r[t[l]]="busy",v+=1,n=!1,o=!1,i=!0,u=!1,m(),h()}if(!i&&!n&&o&&!g){let t=Number(Math.floor(Math.random()*d.length));s[d[t]].innerHTML=e,s[d[t]].classList.add("x"),r[d[t]]="busy",v+=1,o=!1,i=!0,u=!1,y(),h()}}function y(){for(let e=0;e<l.length;e++)s[l[e][0]].classList.contains("x")&&s[l[e][1]].classList.contains("x")&&s[l[e][2]].classList.contains("x")&&(g="Winner - X"),s[l[e][0]].classList.contains("o")&&s[l[e][1]].classList.contains("o")&&s[l[e][2]].classList.contains("o")&&(g="Winner - 0");9===v&&"Winner - X"!==g&&"Winner - 0"!==g&&(g="The game ended in a draw",L+=1,c.textContent=L,localStorage.setItem("tictactoe-draw",L)),g&&setTimeout(()=>{console.log(g)},500)}c.textContent=L,"easy"===a&&f()}();
//# sourceMappingURL=tic-tac-toe-page.112e9c09.js.map
