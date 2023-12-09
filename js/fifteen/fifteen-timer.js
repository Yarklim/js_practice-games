const game = document.querySelector('#fifteen');
const shuffleBtn = document.querySelector('.fifteen__shuffle');
const currentM = document.querySelector('#current-m');
const currentS = document.querySelector('#current-s');
const currentMS = document.querySelector('#current-ms');
const bestM = document.querySelector('#best-m');
const bestS = document.querySelector('#best-s');
const bestMS = document.querySelector('#best-ms');

let isShuffle = false;

let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let interval;

let currentTimeValue = null;
let bestTimeValue = bestM.textContent + bestS.textContent + bestMS.textContent;

shuffleBtn.addEventListener('click', startConfig);

function startTimer() {
  game.removeEventListener('click', getInterval);

  milliseconds++;
  currentMS.innerHTML = '0' + milliseconds;

  if (seconds > 59) {
    minutes++;
    currentM.innerHTML = '0' + minutes;
    seconds = 0;
    currentS.innerHTML = '0' + seconds;
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
}

function startConfig() {
  stopTimer();
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  currentMS.innerHTML = '00';
  currentS.innerHTML = '00';
  currentM.innerHTML = '00';
  isShuffle = true;

  game.addEventListener('click', getInterval);
}

function getInterval() {
  if (!isShuffle) return;

  interval = setInterval(startTimer, 10);
}

function stopTimer() {
  clearInterval(interval);
  //   currentTimeValue =
  //     currentM.textContent + currentS.textContent + currentMS.textContent;

  //   if (Number(currentTimeValue) >= Number(bestTimeValue)) {
  //     bestM.textContent = currentM.textContent;
  //     bestS.textContent = currentS.textContent;
  //     bestMS.textContent = currentMS.textContent;
  //   }
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
