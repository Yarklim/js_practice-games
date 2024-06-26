import { changeGameLevel } from './titactoe-level';
import { openModal } from './tictactoe-modal';
import { CROSS_EL, ZERO_EL, WINNING_COMB, gameEasyMoves } from './utilities';

const fieldCells = document.querySelectorAll('[data-tictactoe-cell]');
const playerResultEl = document.querySelector('[data-player-value]');
const compResultEl = document.querySelector('[data-comp-value]');
const drawResultEl = document.querySelector('[data-draw-value]');
const whoseMoveEl = document.querySelector('.first-move__value');

let gameLevel = changeGameLevel() || localStorage.getItem('tictactoe-level');
let playerMoveFirst = true;
let compMoveFirst = false;
let compMove = true;
let playerMove = false;
let movesArr = null;
let otherCompMoves = null;

let crossStep = true;
let stepsCount = 0;

let resultGame = null;

let gameResultPlayerWin =
  Number(localStorage.getItem('tictactoe-player-win')) || 0;
playerResultEl.textContent = gameResultPlayerWin;
let gameResultCompWin = Number(localStorage.getItem('tictactoe-comp-win')) || 0;
compResultEl.textContent = gameResultCompWin;
let gameResultDrawValue = Number(localStorage.getItem('tictactoe-draw')) || 0;
drawResultEl.textContent = gameResultDrawValue;

// ========== Start Game ===========
export function startGame() {
  fieldCells.forEach(cell => {
    cell.classList.remove('x');
    cell.classList.remove('o');
    cell.innerHTML = null;
  });

  compMove = true;
  playerMove = false;
  movesArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
  otherCompMoves = null;

  crossStep = true;
  stepsCount = 0;

  resultGame = null;

  if (gameLevel === 'easy' && !playerMoveFirst) {
    whoseMoveEl.textContent = 'Computer';
    compMovesEasyLevel();
  } else {
    whoseMoveEl.textContent = 'Player';
    playerMoves();
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
        !cell.classList.contains('o') &&
        !resultGame
      ) {
        cell.innerHTML = ZERO_EL;
        cell.classList.add('o');
        stepsCount += 1;
        movesArr[idx] = 'o';

        crossStep = true;
        compMove = true;
        playerMove = false;

        setTimeout(() => {
          compMovesEasyLevel();
        }, 700);
      } else if (
        crossStep &&
        !compMoveFirst &&
        !cell.classList.contains('x') &&
        !cell.classList.contains('o') &&
        !resultGame
      ) {
        cell.innerHTML = CROSS_EL;
        cell.classList.add('x');

        stepsCount += 1;
        movesArr[idx] = 'x';

        crossStep = false;
        compMove = true;
        playerMove = false;

        setTimeout(() => {
          compMovesEasyLevel();
        }, 700);
      } else {
        return;
      }

      gameResult();
    });
  });
}

function filterMoves() {
  otherCompMoves = movesArr.filter(el => el !== 'x' && el !== 'o');
}

// ============= Comp Moves ============
function compMovesEasyLevel() {
  const firstCompMoves = [0, 2, 4, 6, 8];

  filterMoves();

  // -------- if Comp move first ---------
  if (!playerMoveFirst && compMoveFirst && compMove && !resultGame) {
    const idxCell = Math.floor(Math.random() * firstCompMoves.length);

    fieldCells[firstCompMoves[idxCell]].innerHTML = CROSS_EL;
    fieldCells[firstCompMoves[idxCell]].classList.add('x');
    movesArr[firstCompMoves[idxCell]] = 'x';

    stepsCount += 1;
    compMoveFirst = false;
    compMove = false;
    playerMove = true;
    crossStep = false;

    filterMoves();
    playerMoves();
  }

  if (
    !playerMoveFirst &&
    !playerMove &&
    !compMoveFirst &&
    compMove &&
    !resultGame
  ) {
    const nextMoveIdx = gameEasyMoves(movesArr, playerMoveFirst);

    const idxCell = Number(Math.floor(Math.random() * otherCompMoves.length));

    if (
      nextMoveIdx &&
      !fieldCells[nextMoveIdx].classList.contains('x') &&
      !fieldCells[nextMoveIdx].classList.contains('o')
    ) {
      fieldCells[Number(nextMoveIdx)].innerHTML = CROSS_EL;
      fieldCells[Number(nextMoveIdx)].classList.add('x');
      movesArr[Number(nextMoveIdx)] = 'x';

      stepsCount += 1;
      compMove = false;
      playerMove = true;
      crossStep = false;

      gameResult();
      playerMoves();
    } else {
      fieldCells[otherCompMoves[idxCell]].innerHTML = CROSS_EL;
      fieldCells[otherCompMoves[idxCell]].classList.add('x');
      movesArr[otherCompMoves[idxCell]] = 'x';

      stepsCount += 1;
      compMove = false;
      playerMove = true;
      crossStep = false;

      gameResult();
      playerMoves();
    }
  }

  // --------- if Player move first ---------
  if (
    playerMoveFirst &&
    !playerMove &&
    !compMoveFirst &&
    compMove &&
    !resultGame
  ) {
    const nextMoveIdx = gameEasyMoves(movesArr, playerMoveFirst);

    const idxCell = Number(Math.floor(Math.random() * otherCompMoves.length));

    if (
      !fieldCells[4].classList.contains('x') &&
      !fieldCells[4].classList.contains('o')
    ) {
      fieldCells[4].innerHTML = ZERO_EL;
      fieldCells[4].classList.add('o');
      movesArr[4] = 'o';

      stepsCount += 1;
      compMove = false;
      playerMove = true;
      crossStep = true;

      gameResult();
      playerMoves();
    } else if (
      nextMoveIdx &&
      !fieldCells[nextMoveIdx].classList.contains('x') &&
      !fieldCells[nextMoveIdx].classList.contains('o')
    ) {
      fieldCells[Number(nextMoveIdx)].innerHTML = ZERO_EL;
      fieldCells[Number(nextMoveIdx)].classList.add('o');
      movesArr[Number(nextMoveIdx)] = 'o';

      stepsCount += 1;
      compMove = false;
      playerMove = true;
      crossStep = true;

      gameResult();
      playerMoves();
    } else {
      fieldCells[otherCompMoves[idxCell]].innerHTML = ZERO_EL;
      fieldCells[otherCompMoves[idxCell]].classList.add('o');
      movesArr[otherCompMoves[idxCell]] = 'o';

      stepsCount += 1;
      compMove = false;
      playerMove = true;
      crossStep = true;

      gameResult();
      playerMoves();
    }
  }
}

// ========== Game Result =========
function gameResult() {
  for (let i = 0; i < WINNING_COMB.length; i++) {
    if (
      fieldCells[WINNING_COMB[i][0]].classList.contains('x') &&
      fieldCells[WINNING_COMB[i][1]].classList.contains('x') &&
      fieldCells[WINNING_COMB[i][2]].classList.contains('x')
    ) {
      if (playerMoveFirst) {
        resultGame = 'playerWin';
        gameResultPlayerWin += 1;
        playerResultEl.textContent = gameResultPlayerWin;
        localStorage.setItem('tictactoe-player-win', gameResultPlayerWin);
      } else {
        resultGame = 'compWin';
        gameResultCompWin += 1;
        compResultEl.textContent = gameResultCompWin;
        localStorage.setItem('tictactoe-comp-win', gameResultCompWin);
      }
    }
    if (
      fieldCells[WINNING_COMB[i][0]].classList.contains('o') &&
      fieldCells[WINNING_COMB[i][1]].classList.contains('o') &&
      fieldCells[WINNING_COMB[i][2]].classList.contains('o')
    ) {
      if (!playerMoveFirst) {
        resultGame = 'playerWin';
        gameResultPlayerWin += 1;
        playerResultEl.textContent = gameResultPlayerWin;
        localStorage.setItem('tictactoe-player-win', gameResultPlayerWin);
      } else {
        resultGame = 'compWin';
        gameResultCompWin += 1;
        compResultEl.textContent = gameResultCompWin;
        localStorage.setItem('tictactoe-comp-win', gameResultCompWin);
      }
    }
  }

  if (
    stepsCount === 9 &&
    resultGame !== 'playerWin' &&
    resultGame !== 'compWin'
  ) {
    resultGame = 'gameDraw';
    gameResultDrawValue += 1;
    drawResultEl.textContent = gameResultDrawValue;
    localStorage.setItem('tictactoe-draw', gameResultDrawValue);
  }

  if (resultGame) {
    setTimeout(() => {
      playerMoveFirst = !playerMoveFirst;
      openModal(resultGame);
    }, 1000);
  }
}
