import { count } from './match-counter';
import { cardItemEl } from './item-element';

const cardsListEl = document.querySelector('.match__cards--list');
const countMinusEl = document.querySelector('[data-counter-minus]');
const countPlusEl = document.querySelector('[data-counter-plus]');

let cardsCount = count;
const randomCardsLayout = makeRandomCardsLayout();

cardsListEl.innerHTML = randomCardsLayout.join('');

countPlusEl.addEventListener('click', () => {
  if (cardsCount === 20) return;

  cardsCount += 1;

  makeRandomCardsLayout();
});

countMinusEl.addEventListener('click', () => {
  if (cardsCount === 4) return;

  cardsCount -= 1;

  makeRandomCardsLayout();
});

// ========= Make Random Cards Layout =========
function makeRandomCardsLayout() {
  const randomList = [];

  for (let i = 0; i < cardsCount; i++) {
    randomList.push(cardItemEl(i + 1), cardItemEl(i + 1));
  }

  for (let i = 0; i < randomList.length; i++) {
    let tempPos = randomList[i];
    const randomPos = Math.floor(Math.random() * randomList.length);

    randomList[i] = randomList[randomPos];
    randomList[randomPos] = tempPos;
  }

  cardsListEl.innerHTML = randomList.join('');

  return randomList;
}
