const e=[{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857850/JS-Games/1_fwr9yt.png"},{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857857/JS-Games/2_s1x5xt.png"},{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857864/JS-Games/3_kau9u0.png"},{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857872/JS-Games/4_rvbsma.png"},{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857879/JS-Games/5_aboue6.png"},{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857886/JS-Games/6_wukmz7.png"},{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857894/JS-Games/7_egkkvw.png"},{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857901/JS-Games/8_hx41aq.png"},{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857908/JS-Games/9_rrrgzl.png"},{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857916/JS-Games/11_qlff4h.png"},{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857923/JS-Games/10_k80def.png"},{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857930/JS-Games/12_ftvibe.png"},{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857938/JS-Games/13_nyvyuk.png"},{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857945/JS-Games/14_t8wjzx.png"},{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857953/JS-Games/15_rg0xrm.png"},{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857960/JS-Games/16_wgfdxq.png"},{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857968/JS-Games/17_lqx3ts.png"},{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857975/JS-Games/18_d1jn1k.png"},{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857982/JS-Games/19_sjkjdv.png"},{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857990/JS-Games/20_bh3qrc.png"}],t=t=>`<li class="match__cards--item" data-value='${t}'>
  <img src=${e[t].src}
  alt="card"
  class="match__card--img"
  width="200"
  height="200" />
  </li>`,a=document.querySelector(".backdrop"),s=document.querySelector(".modal__close"),c=document.querySelector(".match__result--steps");function o(){p(),a.classList.add("is-hidden")}function r(e){"Escape"===e.code&&o()}a.addEventListener("click",e=>{e.currentTarget===e.target&&o()}),s.addEventListener("click",o);const d=document.querySelector("[data-counter-minus]"),n=document.querySelector("[data-counter-plus]"),l=document.querySelector(".match__counter--count"),i=document.querySelector(".match__cards--list"),m=document.querySelector(".match__current-steps--value"),u=document.querySelector(".match__best-steps--value");function p(){let e=Number(localStorage.getItem("matchCount"))||4,s=Number(localStorage.getItem(`steps-count-${e}`))||0,o=0,p=0===s;m.textContent=o,u.textContent=s,l.textContent=e;let h=g();function g(){let a=[];for(let s=0;s<e;s++)a.push(t(s),t(s));for(let e=0;e<a.length;e++){let t=a[e],s=Math.floor(Math.random()*a.length);a[e]=a[s],a[s]=t}return i.innerHTML=a.join(""),S(),a}i.innerHTML=h.join(""),4===e&&d.classList.add("disabled"),d.addEventListener("click",function(){4!==e&&(5===e&&d.classList.add("disabled"),e-=1,localStorage.setItem("matchCount",JSON.stringify(e)),n.classList.remove("disabled"),l.textContent=e,g(),location.reload())}),n.addEventListener("click",function(){20!==e&&(19===e&&n.classList.add("disabled"),e+=1,localStorage.setItem("matchCount",JSON.stringify(e)),d.classList.remove("disabled"),l.textContent=e,g(),location.reload())});let x=null,v=null;function S(){let t=document.querySelectorAll(".match__cards--item");t.forEach(d=>{d.addEventListener("click",()=>(function(t,d){if(t.classList.contains("active")||t.classList.contains("matched-cards")||(o+=1,m.textContent=o),!(t.classList.contains("active")||t.classList.contains("matched-cards"))&&(x&&v&&(x.classList.remove("active"),v.classList.remove("active"),x=null,v=null),t.classList.add("active"),x?v=t:x=t,x&&v&&x.getAttribute("data-value")===v.getAttribute("data-value")&&(x.classList.add("matched-cards"),v.classList.add("matched-cards")),d.length===document.querySelectorAll(".matched-cards").length)){var n;n=o,a.classList.remove("is-hidden"),c.textContent=`${n} steps`,window.addEventListener("keydown",r),p&&localStorage.setItem(`steps-count-${e}`,JSON.stringify(o)),o<=s&&localStorage.setItem(`steps-count-${e}`,JSON.stringify(o)),o=0}})(d,t))})}S()}p();
//# sourceMappingURL=match-game.9aecbe00.js.map
