export const CROSS_EL = `
<svg class="cell-icon cross">
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
<svg class="cell-icon zero">
          <circle
            r="23"
            cx="48"
            cy="48"
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
