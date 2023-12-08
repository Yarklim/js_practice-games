const containerButtons = document.querySelector('#fifteen');
const buttonItems = Array.from(document.querySelectorAll('.fifteen__button'));

const countItems = 16;
const gap = 10;

if (buttonItems.length !== countItems) {
  throw new Error(`There should be ${countItems} items in HTML`);
}

/* ====== Start Position ======*/
buttonItems[countItems - 1].style.display = 'none';

let matrix = getMatrix(buttonItems.map(el => Number(el.dataset.matrixId)));

setPositionItem(matrix);

/* ====== Shuffle ======*/
document.querySelector('#shuffle').addEventListener('click', () => {
  const shuffledArr = shuffleArr(matrix.flat());
  console.log(shuffledArr);
  matrix = getMatrix(shuffledArr);
  setPositionItem(matrix);
});

/* ====== Change Position by click ======*/
/* ====== Change Position by keydown ======*/

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

function setPositionItem(matrix) {
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      const value = matrix[y][x];
      const item = buttonItems[value - 1];
      setItemStyles(item, x, y);
    }
  }
}

function setItemStyles(item, x, y) {
  const shiftPs = 100;
  item.style.transform = `translate3D(calc(${x * shiftPs}% + ${gap}px), calc(${
    y * shiftPs
  }% + ${gap}px), 0)`;
}

function shuffleArr(arr) {
  return arr
    .map(el => ({ el, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ el }) => el);
}
