import { makeRandomCardsLayout, countStepsStop } from './match-game';

const backdropEl = document.querySelector('.backdrop');
const modalCloseEl = document.querySelector('.modal__close');

backdropEl.addEventListener('click', e => {
  if (e.currentTarget === e.target) {
    closeModal();
  }
});

modalCloseEl.addEventListener('click', closeModal);

export function openModal() {
  backdropEl.classList.remove('is-hidden');

  window.addEventListener('keydown', onEscKeyPress);
}

export function closeModal() {
  countStepsStop();
  makeRandomCardsLayout();
  location.reload();
  backdropEl.classList.add('is-hidden');
}

function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}
