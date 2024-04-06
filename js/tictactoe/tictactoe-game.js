import { changeGameLevel } from './titactoe-level';
import { CROSS_EL, ZERO_EL, WINNING_COMB } from './utilities';

const fieldCells = document.querySelectorAll('[data-tictactoe-cell]');
const drawResultEl = document.querySelector('[data-draw-value]');

let gameLevel = changeGameLevel() || localStorage.getItem('tictactoe-level');
let playerMoveFirst = false;
let compMoveFirst = true;
let compMove = true;
let playerMove = false;
const movesArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
let otherCompMoves = null;

let crossStep = true;
let stepsCount = 0;

let gameResultDrawValue = Number(localStorage.getItem('tictactoe-draw')) || 0;
drawResultEl.textContent = gameResultDrawValue;

// ========== Start Game ===========
function startGame() {
  if (gameLevel === 'easy' && !playerMoveFirst) {
    compFirstMovesEasyLevel();
  }
}

startGame();

// ========== Player Move ==========
function playerMoves() {
  fieldCells.forEach((cell, idx) => {
    cell.addEventListener('click', () => {
      if (
        !crossStep &&
        !cell.classList.contains('x') &&
        !cell.classList.contains('o')
      ) {
        cell.innerHTML = ZERO_EL;
        cell.classList.add('o');
        stepsCount += 1;
        movesArr[idx] = 'busy';

        crossStep = true;
        compMove = true;
        playerMove = false;

        setTimeout(() => {
          compFirstMovesEasyLevel();
        }, 500);
      } else {
        return;
      }

      gameResult();
    });
  });
}

function filterMoves() {
  otherCompMoves = movesArr.filter(el => el !== 'busy');
}

// ============= Comp Moves ============
function compFirstMovesEasyLevel() {
  const firstCompMoves = [0, 2, 4, 6, 8];

  filterMoves();

  if (!playerMoveFirst && compMoveFirst && compMove) {
    const idxCell = Math.floor(Math.random() * firstCompMoves.length);

    fieldCells[firstCompMoves[idxCell]].innerHTML = CROSS_EL;
    fieldCells[firstCompMoves[idxCell]].classList.add('x');
    movesArr[firstCompMoves[idxCell]] = 'busy';

    stepsCount += 1;
    compMoveFirst = false;
    compMove = false;
    playerMove = true;
    crossStep = false;

    filterMoves();
    playerMoves();
  }

  if (!playerMoveFirst && !playerMove && !compMoveFirst && compMove) {
    const idxCell = Number(Math.floor(Math.random() * otherCompMoves.length));
    console.log(movesArr);
    console.log(otherCompMoves);
    console.log(idxCell);

    fieldCells[otherCompMoves[idxCell]].innerHTML = CROSS_EL;
    fieldCells[otherCompMoves[idxCell]].classList.add('x');
    movesArr[otherCompMoves[idxCell]] = 'busy';

    stepsCount += 1;
    compMove = false;
    playerMove = true;
    crossStep = false;

    gameResult();
    playerMoves();
  }
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
