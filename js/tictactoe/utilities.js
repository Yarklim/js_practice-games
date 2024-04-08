export const CROSS_EL = `
<svg class="cell-icon cross" width="100" height="100" viewBox="0 0 100 100">
          <line
            class="first"
            x1="30"
            y1="30"
            x2="70"
            y2="70"
            stroke-width="7"
            stroke-linecap="round"
          />
          <line
            class="second"
            x1="70"
            y1="30"
            x2="30"
            y2="70"
            stroke-width="7"
            stroke-linecap="round"
          />
        </svg>
`;

export const ZERO_EL = `
<svg class="cell-icon zero" width="100" height="100" viewBox="0 0 100 100">
          <circle
            r="23"
            cx="50"
            cy="50"
            stroke-width="7"
            fill="none"
            stroke-linecap="round"
          />
        </svg>
`;

export const WINNING_COMB = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const gameEasyMoves = (movesArr, playerMoveFirst) => {
  const GAME_EASY_MOVES = new Map([
    ['12', '0'], // -> 0
    ['48', '0'], // -> 0
    ['36', '0'], // -> 0
    ['02', '1'], // -> 1
    ['47', '1'], // -> 1
    ['01', '2'], // -> 2
    ['58', '2'], // -> 2
    ['46', '2'], // -> 2
    ['45', '3'], // -> 3
    ['06', '3'], // -> 3
    ['35', '4'], // -> 4
    ['17', '4'], // -> 4
    ['08', '4'], // -> 4
    ['26', '4'], // -> 4
    ['34', '5'], // -> 5
    ['28', '5'], // -> 5
    ['78', '6'], // -> 6
    ['03', '6'], // -> 6
    ['24', '6'], // -> 6
    ['68', '7'], // -> 7
    ['14', '7'], // -> 7
    ['67', '8'], // -> 8
    ['25', '8'], // -> 8
    ['04', '8'], // -> 8
  ]);

  // ---------- Player Move First ----------
  if (playerMoveFirst) {
    const compMoves0 = [];
    for (let i = 0; i < movesArr.length; i++) {
      if (movesArr[i] === 'o') {
        compMoves0.push(i);
      }
    }

    const playerMovesX = [];
    for (let i = 0; i < movesArr.length; i++) {
      if (movesArr[i] === 'x') {
        playerMovesX.push(i);
      }
    }

    if (playerMovesX.length > 1) {
      for (let num of GAME_EASY_MOVES.keys()) {
        if (num.includes(playerMovesX.join('').slice(-2))) {
          return GAME_EASY_MOVES.get(num);
        }
      }
    }
  }

  // ---------- Comp Move First ----------

  if (!playerMoveFirst) {
    const compMovesX = [];
    for (let i = 0; i < movesArr.length; i++) {
      if (movesArr[i] === 'x') {
        compMovesX.push(i);
      }
    }

    const playerMovesO = [];
    for (let i = 0; i < movesArr.length; i++) {
      if (movesArr[i] === 'o') {
        playerMovesO.push(i);
      }
    }

    if (playerMovesO.length > 1) {
      for (let num of GAME_EASY_MOVES.keys()) {
        if (num.includes(playerMovesO.join('').slice(-2))) {
          return GAME_EASY_MOVES.get(num);
        }
      }
    }
  }

  return null;
};
