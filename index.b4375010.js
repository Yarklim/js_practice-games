document.querySelector("#fifteen");const e=Array.from(document.querySelectorAll(".fifteen__button"));if(16!==e.length)throw Error("There should be 16 items in HTML");console.log(function(e){let t=[[],[],[],[]],r=0,o=0;for(let n=0;n<e.length;n++)r>=4&&(o++,r=0),t[o][r]=e[n],r++;return t}(e.map(e=>Number(e.dataset.matrixId))));
//# sourceMappingURL=index.b4375010.js.map
