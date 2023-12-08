const containerButtons = document.querySelector('#fifteen');
const buttonItems = Array.from(document.querySelectorAll('.fifteen__button'));

const countItems = 16;

if (buttonItems.length !== countItems) {
  throw new Error(`There should be ${countItems} items in HTML`);
}

/* ====== 1 - Position ======*/
let matrix = getMatrix(buttonItems.map(el => Number(el.dataset.matrixId)));

console.log(matrix);
/* ====== 2 - Shuffle ======*/
/* ====== 3 - Change Position by click ======*/
/* ====== 3 - Change Position by keydown ======*/

/* ====== Helpers ======*/
function getMatrix(arr) {
  const matrix = [[], [], [], []];
  let x = 0;
  let y = 0;

  for (let i = 0; i < arr.length; i++) {
    if (x >= 4) {
      y++;
      x = 0;
    }

    matrix[y][x] = arr[i];
    x++;
  }

  return matrix;
}
