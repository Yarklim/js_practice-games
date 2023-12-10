const game = document.querySelector('#fifteen');
const shuffleBtn = document.querySelector('.fifteen__shuffle');
const currentM = document.querySelector('#current-m');
const currentS = document.querySelector('#current-s');
const currentMS = document.querySelector('#current-ms');
const bestM = document.querySelector('#best-m');
const bestS = document.querySelector('#best-s');
const bestMS = document.querySelector('#best-ms');
const currentTime = document.querySelectorAll('.timer__wrapper');

bestM.innerHTML = localStorage.getItem('min') || '00';
bestS.innerHTML = localStorage.getItem('sec') || '00';
bestMS.innerHTML = localStorage.getItem('ms') || '00';

let isShuffle = false;

let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let interval;

let currentTimeValue = null;
let bestTimeValue = 0;

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

  currentTime[0].classList.remove('beat__best-time');
  currentTime[0].classList.remove('no-beat__best-time');

  game.addEventListener('click', getInterval);
}

function getInterval() {
  if (!isShuffle) return;

  interval = setInterval(startTimer, 10);
}

function stopTimer() {
  clearInterval(interval);

  currentTimeValue = Number(
    currentM.textContent + currentS.textContent + currentMS.textContent
  );

  if (!bestTimeValue) {
    bestTimeValue = currentTimeValue;
    bestM.textContent = currentM.textContent;
    bestS.textContent = currentS.textContent;
    bestMS.textContent = currentMS.textContent;
  }

  if (currentTimeValue <= bestTimeValue && bestTimeValue !== 0) {
    bestTimeValue = currentTimeValue;
    bestM.textContent = currentM.textContent;
    bestS.textContent = currentS.textContent;
    bestMS.textContent = currentMS.textContent;

    saveInLocaleStorage(
      bestM.textContent,
      bestS.textContent,
      bestMS.textContent
    );

    currentTime[0].classList.add('beat__best-time');
  }

  if (Number(currentTimeValue) > bestTimeValue && bestTimeValue !== 0) {
    currentTime[0].classList.add('no-beat__best-time');
  }
}

function saveInLocaleStorage(min, sec, ms) {
  localStorage.setItem('min', min);
  localStorage.setItem('sec', sec);
  localStorage.setItem('ms', ms);
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
