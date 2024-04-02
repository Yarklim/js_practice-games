const gameLevelEl = document.querySelectorAll('.opponent__item');

gameLevelEl.forEach(el => el.addEventListener('click', changeGameLevel));

function changeGameLevel(e) {
  const currentLevel = document.querySelector('.active-level');

  console.log(e.target.closest('li'));

  //   if (e.target.closest('li') !== currentLevel) {
  //     currentLevel.classList.remove('.active-level');
  //     e.target.closest('li').classList.add('.active-level');
  //   }
}
