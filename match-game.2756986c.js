!function(){let e=[{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857850/JS-Games/1_fwr9yt.png"},{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857857/JS-Games/2_s1x5xt.png"},{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857864/JS-Games/3_kau9u0.png"},{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857872/JS-Games/4_rvbsma.png"},{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857879/JS-Games/5_aboue6.png"},{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857886/JS-Games/6_wukmz7.png"},{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857894/JS-Games/7_egkkvw.png"},{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857901/JS-Games/8_hx41aq.png"},{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857908/JS-Games/9_rrrgzl.png"},{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857916/JS-Games/11_qlff4h.png"},{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857923/JS-Games/10_k80def.png"},{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857930/JS-Games/12_ftvibe.png"},{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857938/JS-Games/13_nyvyuk.png"},{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857945/JS-Games/14_t8wjzx.png"},{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857953/JS-Games/15_rg0xrm.png"},{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857960/JS-Games/16_wgfdxq.png"},{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857968/JS-Games/17_lqx3ts.png"},{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857975/JS-Games/18_d1jn1k.png"},{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857982/JS-Games/19_sjkjdv.png"},{src:"https://res.cloudinary.com/doepexhxk/image/upload/v1711857990/JS-Games/20_bh3qrc.png"}],t=t=>`<li class="match__cards--item" data-value='${t}'>
  <img src=${e[t].src}
  alt="card"
  class="match__card--img"
  width="200"
  height="200" />
  </li>`,a=document.querySelector(".backdrop"),s=document.querySelector(".modal__close");function c(){g&&localStorage.setItem(`steps-count-${u}`,JSON.stringify(h)),h<=p&&localStorage.setItem(`steps-count-${u}`,JSON.stringify(h)),h=0,v(),location.reload(),a.classList.add("is-hidden")}function o(e){"Escape"===e.code&&c()}a.addEventListener("click",e=>{e.currentTarget===e.target&&c()}),s.addEventListener("click",c);let r=document.querySelector("[data-counter-minus]"),d=document.querySelector("[data-counter-plus]"),l=document.querySelector(".match__counter--count"),n=document.querySelector(".match__cards--list"),i=document.querySelector(".match__current-steps--value"),m=document.querySelector(".match__best-steps--value"),u=Number(localStorage.getItem("matchCount"))||4,p=Number(localStorage.getItem(`steps-count-${u}`))||0,h=0,g=0===p;i.textContent=h,m.textContent=p,l.textContent=u;let x=v();function v(){let e=[];for(let a=0;a<u;a++)e.push(t(a),t(a));for(let t=0;t<e.length;t++){let a=e[t],s=Math.floor(Math.random()*e.length);e[t]=e[s],e[s]=a}return n.innerHTML=e.join(""),_(),e}n.innerHTML=x.join(""),4===u&&r.classList.add("disabled"),r.addEventListener("click",function(){4!==u&&(5===u&&r.classList.add("disabled"),u-=1,localStorage.setItem("matchCount",JSON.stringify(u)),d.classList.remove("disabled"),l.textContent=u,v(),location.reload())}),d.addEventListener("click",function(){20!==u&&(19===u&&d.classList.add("disabled"),u+=1,localStorage.setItem("matchCount",JSON.stringify(u)),r.classList.remove("disabled"),l.textContent=u,v(),location.reload())});let S=null,y=null;function _(){let e=document.querySelectorAll(".match__cards--item");e.forEach(t=>{t.addEventListener("click",()=>{h+=1,i.textContent=h,t.classList.contains("active")||t.classList.contains("matched-cards")||(S&&y&&(S.classList.remove("active"),y.classList.remove("active"),S=null,y=null),t.classList.add("active"),S?y=t:S=t,S&&y&&S.getAttribute("data-value")===y.getAttribute("data-value")&&(S.classList.add("matched-cards"),y.classList.add("matched-cards")),e.length===document.querySelectorAll(".matched-cards").length&&(a.classList.remove("is-hidden"),window.addEventListener("keydown",o)))})})}_()}();
//# sourceMappingURL=match-game.2756986c.js.map
