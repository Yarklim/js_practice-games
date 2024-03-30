import { cardItemEl } from './item-element';

const countMinusEl = document.querySelector('[data-counter-minus]');
const countPlusEl = document.querySelector('[data-counter-plus]');
const countInputEl = document.querySelector('.match__counter--count');
const cardsListEl = document.querySelector('.match__cards--list');

let count = Number(localStorage.getItem('matchCount')) || 4;

countInputEl.textContent = count;

const randomCardsLayout = makeRandomCardsLayout();

cardsListEl.innerHTML = randomCardsLayout.join('');

if (count === 4) {
  countMinusEl.classList.add('disabled');
}

countMinusEl.addEventListener('click', decrementCount);
countPlusEl.addEventListener('click', incrementCount);

// =========== Count =============
function incrementCount() {
  if (count === 20) return;

  if (count === 19) {
    countPlusEl.classList.add('disabled');
  }

  count += 1;
  localStorage.setItem('matchCount', JSON.stringify(count));
  countMinusEl.classList.remove('disabled');
  countInputEl.textContent = count;

  makeRandomCardsLayout();
}

function decrementCount() {
  if (count === 4) return;

  if (count === 5) {
    countMinusEl.classList.add('disabled');
  }

  count -= 1;
  localStorage.setItem('matchCount', JSON.stringify(count));
  countPlusEl.classList.remove('disabled');
  countInputEl.textContent = count;

  makeRandomCardsLayout();
}

// ========= Make Random Cards Layout =========
function makeRandomCardsLayout() {
  const randomList = [];

  for (let i = 0; i < count; i++) {
    randomList.push(cardItemEl(i + 1), cardItemEl(i + 1));
  }

  for (let i = 0; i < randomList.length; i++) {
    let tempPos = randomList[i];
    const randomPos = Math.floor(Math.random() * randomList.length);

    randomList[i] = randomList[randomPos];
    randomList[randomPos] = tempPos;
  }

  cardsListEl.innerHTML = randomList.join('');

  getCardItem();

  return randomList;
}

// ============= Choise Card =============
let firstCard = null;
let secondCard = null;

function getCardItem() {
  const cardsItems = document.querySelectorAll('.match__cards--item');

  cardsItems.forEach(card => {
    card.addEventListener('click', () => onClickCard(card, cardsItems));
  });
}
getCardItem();

// ============= Click on Card =============
function onClickCard(card, cardsItems) {
  if (
    card.classList.contains('active') ||
    card.classList.contains('matched-cards')
  ) {
    return;
  }
  if (firstCard && secondCard) {
    firstCard.classList.remove('active');
    secondCard.classList.remove('active');

    firstCard = null;
    secondCard = null;
  }

  card.classList.add('active');

  if (!firstCard) {
    firstCard = card;
  } else {
    secondCard = card;
  }

  if (firstCard && secondCard) {
    if (firstCard.textContent === secondCard.textContent) {
      firstCard.classList.add('matched-cards');
      secondCard.classList.add('matched-cards');
    }
  }

  if (
    cardsItems.length === document.querySelectorAll('.matched-cards').length
  ) {
    setTimeout(() => alert('You Win!'), 300);
  }
}
