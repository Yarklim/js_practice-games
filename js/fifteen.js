const gameContainer = document.querySelector('.content--wrapper');
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
const maxShuffleCount = 100;
let timer;
let shuffled = false;
const shuffledClassName = 'gameShuffle';

document.querySelector('#shuffle').addEventListener('click', () => {
  if (shuffled) {
    return;
  }
  shuffled = true;
  let shuffleCount = 0;
  clearInterval(timer);
  gameContainer.classList.add(shuffledClassName);

  timer = setInterval(() => {
    randomSwap(matrix);
    setPositionItem(matrix);

    shuffleCount += 1;

    if (shuffleCount >= maxShuffleCount) {
      gameContainer.classList.remove(shuffledClassName);
      clearInterval(timer);
      shuffled = false;
    }
  }, 70);
});

/* ====== Change Position by click ======*/
const blankPosition = 16;

containerButtons.addEventListener('click', e => {
  if (shuffled) {
    return;
  }
  const buttonItem = e.target.closest('button');
  if (!buttonItem) {
    return;
  }
  const buttonNumber = Number(buttonItem.dataset.matrixId);
  const buttonCoords = findCoordsByNumber(buttonNumber, matrix);
  const blankCoords = findCoordsByNumber(blankPosition, matrix);
  const isValid = isValidForSwap(buttonCoords, blankCoords);

  if (isValid) {
    swap(blankCoords, buttonCoords, matrix);
    setPositionItem(matrix);
  }
});

/* ====== Change Position by keydown ======*/
window.addEventListener('keydown', e => {
  if (shuffled) {
    return;
  }
  if (!e.key.includes('Arrow')) {
    return;
  }

  const blankCoords = findCoordsByNumber(blankPosition, matrix);
  const buttonCoords = {
    x: blankCoords.x,
    y: blankCoords.y,
  };

  const direction = e.key.split('Arrow')[1].toLowerCase();
  const maxIndexMatrix = matrix.length;

  switch (direction) {
    case 'up':
      buttonCoords.y += 1;
      break;
    case 'down':
      buttonCoords.y -= 1;
      break;
    case 'left':
      buttonCoords.x += 1;
      break;
    case 'right':
      buttonCoords.x -= 1;
      break;
  }

  if (
    buttonCoords.y >= maxIndexMatrix ||
    buttonCoords.y < 0 ||
    buttonCoords.x >= maxIndexMatrix ||
    buttonCoords.x < 0
  ) {
    return;
  }

  swap(blankCoords, buttonCoords, matrix);
  setPositionItem(matrix);
});

/* ====== HELPERS ======*/
/* =====================*/
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

// ====================
function setPositionItem(matrix) {
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      const value = matrix[y][x];
      const item = buttonItems[value - 1];
      setItemStyles(item, x, y);
    }
  }
}

// ====================
function setItemStyles(item, x, y) {
  const shiftPs = 100;
  item.style.transform = `translate3D(calc(${x * shiftPs}% + ${gap}px), calc(${
    y * shiftPs
  }% + ${gap}px), 0)`;
}

// ====================
let blockedCoords = null;
function randomSwap(matrix) {
  const blankCoords = findCoordsByNumber(blankPosition, matrix);
  const validCords = findValidCoords({
    blankCoords,
    matrix,
    blockedCoords,
  });

  const swapCoords = validCords[Math.floor(Math.random() * validCords.length)];

  swap(blankCoords, swapCoords, matrix);
  blockedCoords = blankCoords;
}

// ====================
function findValidCoords({ blankCoords, matrix, blockedCoords }) {
  const validCordsArr = [];

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (isValidForSwap({ x, y }, blankCoords)) {
        if (
          !blockedCoords ||
          !(blockedCoords.x === x && blockedCoords.y === y)
        ) {
          validCordsArr.push({ x, y });
        }
      }
    }
  }
  return validCordsArr;
}

// ====================
function findCoordsByNumber(number, matrix) {
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] === number) {
        return { x, y };
      }
    }
  }
  return null;
}

// ====================
function isValidForSwap(coordsBtn, coordsBlank) {
  const diffX = Math.abs(coordsBtn.x - coordsBlank.x);
  const diffY = Math.abs(coordsBtn.y - coordsBlank.y);

  return (
    (diffX === 1 || diffY === 1) &&
    (coordsBtn.x === coordsBlank.x || coordsBtn.y === coordsBlank.y)
  );
}

// ====================
function swap(blankCoords, buttonCoords, matrix) {
  const blankNumber = matrix[blankCoords.y][blankCoords.x];
  matrix[blankCoords.y][blankCoords.x] = matrix[buttonCoords.y][buttonCoords.x];
  matrix[buttonCoords.y][buttonCoords.x] = blankNumber;

  if (isWon(matrix)) {
    addWonClass();
  }
}

/* ====== Show Win ======*/
const winFlatArr = new Array(16).fill(0).map((_item, i) => i + 1);

function isWon(matrix) {
  const flatMatrix = matrix.flat();

  for (let i = 0; i < winFlatArr.length; i++) {
    if (flatMatrix[i] !== winFlatArr[i]) {
      return false;
    }
  }
  return true;
}

// =======================
const wonClass = 'fifteenWon';
function addWonClass() {
  setTimeout(() => {
    containerButtons.classList.add(wonClass);

    setTimeout(() => {
      containerButtons.classList.remove(wonClass);
    }, 1350);
  }, 350);
}
