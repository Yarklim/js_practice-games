import { count } from './match-counter';
import { cardItemEl } from './item-element';

const cardsListEl = document.querySelector('.match__cards--list');
const countMinusEl = document.querySelector('[data-counter-minus]');
const countPlusEl = document.querySelector('[data-counter-plus]');

let cardsCount = count;
const cardsList = onMakeCardsList();

countPlusEl.addEventListener('click', () => {
  if (cardsCount === 20) return;

  cardsCount += 1;

  onMakeCardsList();
});

countMinusEl.addEventListener('click', () => {
  if (cardsCount === 4) return;

  cardsCount -= 1;

  onMakeCardsList();
});

// ========= Make Cards List ==========
function onMakeCardsList() {
  const list = [];
  for (let i = 0; i < cardsCount; i++) {
    list.push(cardItemEl(i + 1));
  }
  cardsListEl.innerHTML = list.join('');
  return list;
}
