import { changeGameLevel } from './titactoe-level';
import { CROSS_EL, ZERO_EL, WINNING_COMB } from './utilities';

const fieldCells = document.querySelectorAll('[data-tictactoe-cell]');
const drawResultEl = document.querySelector('[data-draw-value]');

changeGameLevel();

let crossStep = true;
let stepsCount = 0;

let gameResultDrawValue = Number(localStorage.getItem('tictactoe-draw')) || 0;
drawResultEl.textContent = gameResultDrawValue;

fieldCells.forEach(cell => {
  cell.addEventListener('click', () => setCrossOrZero(cell));
});

// ========== set Cross Or Zero ==========
function setCrossOrZero(cell) {
  if (
    crossStep &&
    !cell.classList.contains('x') &&
    !cell.classList.contains('o')
  ) {
    cell.innerHTML = CROSS_EL;
    cell.classList.add('x');
    stepsCount += 1;
    crossStep = false;
  } else if (
    !crossStep &&
    !cell.classList.contains('x') &&
    !cell.classList.contains('o')
  ) {
    cell.innerHTML = ZERO_EL;
    cell.classList.add('o');
    stepsCount += 1;
    crossStep = true;
  } else {
    return;
  }
  gameResult();
}
// ========== Game Result =========
function gameResult() {
  let gameResult = null;

  if (stepsCount === 9) {
    gameResult = 'The game ended in a draw';
    gameResultDrawValue += 1;
    drawResultEl.textContent = gameResultDrawValue;
    localStorage.setItem('tictactoe-draw', gameResultDrawValue);
  }

  for (let i = 0; i < WINNING_COMB.length; i++) {
    if (
      fieldCells[WINNING_COMB[i][0]].classList.contains('x') &&
      fieldCells[WINNING_COMB[i][1]].classList.contains('x') &&
      fieldCells[WINNING_COMB[i][2]].classList.contains('x')
    ) {
      gameResult = 'Winner - X';
    }
    if (
      fieldCells[WINNING_COMB[i][0]].classList.contains('o') &&
      fieldCells[WINNING_COMB[i][1]].classList.contains('o') &&
      fieldCells[WINNING_COMB[i][2]].classList.contains('o')
    ) {
      gameResult = 'Winner - 0';
    }
  }

  if (gameResult) {
    setTimeout(() => {
      console.log(gameResult);
    }, 500);
  }
}

// =============== End Game ================
function endGame() {}
