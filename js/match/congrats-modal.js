import { startGame } from './match-game';

const backdropEl = document.querySelector('.backdrop');
const modalCloseEl = document.querySelector('.modal__close');
const stepsResultEl = document.querySelector('.match__result--steps');

backdropEl.addEventListener('click', e => {
  if (e.currentTarget === e.target) {
    closeModal();
  }
});

modalCloseEl.addEventListener('click', closeModal);

export function openModal(currentStepsCount) {
  backdropEl.classList.remove('is-hidden');

  stepsResultEl.textContent = `${currentStepsCount} steps`;

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
