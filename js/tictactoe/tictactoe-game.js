import { changeGameLevel } from './titactoe-level';
import { CROSS_EL, ZERO_EL } from './utilities';

const fieldCells = document.querySelectorAll('[data-tictactoe-cell]');

changeGameLevel();

let crossStep = true;

fieldCells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (crossStep) {
      cell.innerHTML = CROSS_EL;
      crossStep = false;
    } else {
      cell.innerHTML = ZERO_EL;
      crossStep = true;
    }
  });
});

// ========== Draw Cross or Cell =========
