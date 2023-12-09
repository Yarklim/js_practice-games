const game = document.querySelector('#fifteen');
const shuffleBtn = document.querySelector('.fifteen__shuffle');
const currentM = document.querySelector('#current-m');
const currentS = document.querySelector('#current-s');
const currentMS = document.querySelector('#current-ms');

let isShuffle = false;

let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let interval;

let currentTimeValue = null;

shuffleBtn.addEventListener('click', startConfig);

function startTimer() {
  game.removeEventListener('click', getInterval);

  milliseconds++;
  currentMS.innerHTML = '0' + milliseconds;

  if (seconds === 60) {
    minutes++;
    currentM.innerHTML = '0' + minutes;
    seconds = 0;
  }
  if (milliseconds > 99) {
    seconds++;
    currentS.innerHTML = '0' + seconds;
    milliseconds = 0;
  }

  if (milliseconds > 9) {
    currentMS.innerHTML = milliseconds;
  }

  if (seconds > 9) {
    currentS.innerHTML = seconds;
  }

  if (minutes > 9) {
    currentM.innerHTML = minutes;
  }

  if (milliseconds <= 9) {
    currentMS.textContent = '0' + milliseconds;
  }

  currentTimeValue =
    currentM.textContent + currentS.textContent + currentMS.textContent;
}

function startConfig() {
  currentMS.innerHTML = '00';
  currentS.innerHTML = '00';
  currentM.innerHTML = '00';
  isShuffle = true;

  game.addEventListener('click', getInterval);
}

function stopTimer() {
  clearInterval(interval);
  console.log(Number(currentTimeValue));
  isShuffle = false;
}

function getInterval() {
  if (!isShuffle) return;

  interval = setInterval(startTimer, 10);
}

// =========== Check changing className for stop interval ===========
let observeChanges = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.attributeName === 'class') {
      stopTimer();
    }
  });
});

const config = { attributes: true, attributeFilter: ['class'] };
observeChanges.observe(game, config);
