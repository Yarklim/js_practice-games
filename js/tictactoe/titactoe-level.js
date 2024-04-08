import { openModal } from './tictactoe-modal';

export function changeGameLevel() {
  const gameLevelEl = document.querySelectorAll('.opponent__item');

  let selectedLevel = 'easy';

  gameLevelEl[0].classList.add('active-level');

  gameLevelEl[1].addEventListener('click', () => openModal('soon'));

  // let selectedLevel = localStorage.getItem('tictactoe-level') || 'easy';

  //   if (selectedLevel === 'easy') {
  //     gameLevelEl[0].classList.add('active-level');
  //   } else {
  //     gameLevelEl[1].classList.add('active-level');
  //   }

  //   gameLevelEl.forEach(el =>
  //     el.addEventListener('click', e => {
  //       const currentActiveLevel = document.querySelector('.active-level');

  //       if (currentActiveLevel) {
  //         currentActiveLevel.classList.remove('active-level');
  //       }

  //       const nextActiveLevel = e.currentTarget;
  //       nextActiveLevel.classList.add('active-level');

  //       selectedLevel = nextActiveLevel.dataset.level;

  //       localStorage.setItem('tictactoe-level', selectedLevel);
  //     })
  //   );

  return selectedLevel;
}
