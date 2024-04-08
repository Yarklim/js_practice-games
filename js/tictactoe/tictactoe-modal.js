import { playerWin, compWin, gameDraw, soon } from './modal-content';

import { startGame } from './tictactoe-game';

const backdropEl = document.querySelector('.tictactoe__backdrop');
const contentWrapperEl = document.querySelector('.tictactoe__modal--wrapper');
const modalCloseEl = document.querySelector('.tictactoe__modal--close');

backdropEl.addEventListener('click', e => {
  if (e.currentTarget === e.target) {
    closeModal();
    startGame();
  }
});

modalCloseEl.addEventListener('click', closeModal);

export function openModal(content) {
  backdropEl.classList.remove('is-hidden');

  const contentText = {
    playerWin,
    compWin,
    gameDraw,
    soon,
  };

  contentWrapperEl.innerHTML = contentText[content];

  window.addEventListener('keydown', onEscKeyPress);
}

export function closeModal() {
  startGame();
  backdropEl.classList.add('is-hidden');
}

function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}
