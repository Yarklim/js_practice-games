const containerButtons = document.querySelector('#fifteen');
const buttonItems = Array.from(document.querySelectorAll('.fifteen__button'));

const countItems = 16;

if (buttonItems.length !== countItems) {
  throw new Error(`There should be ${countItems} items in HTML`);
}

/* ====== Position ======*/
