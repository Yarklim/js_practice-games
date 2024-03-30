const countMinusEl = document.querySelector('[data-counter-minus]');
const countPlusEl = document.querySelector('[data-counter-plus]');
const countInputEl = document.querySelector('.match__counter--count');

export let count = 4;

countInputEl.textContent = count;

if (count === 4) {
  countMinusEl.classList.add('disabled');
}

countMinusEl.addEventListener('click', decrementCount);
countPlusEl.addEventListener('click', incrementCount);

function incrementCount() {
  if (count === 20) return;

  if (count === 19) {
    countPlusEl.classList.add('disabled');
  }

  count += 1;
  countMinusEl.classList.remove('disabled');
  countInputEl.textContent = count;
}

function decrementCount() {
  if (count === 4) return;

  if (count === 5) {
    countMinusEl.classList.add('disabled');
  }

  count -= 1;
  countPlusEl.classList.remove('disabled');
  countInputEl.textContent = count;
}
