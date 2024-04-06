// export function compMoves(
//   playerMoveFirst,
//   level,
//   fieldCells,
//   CROSS_EL,
//   ZERO_EL,
//   crossStep
// ) {
//   const firstCompMoves = [0, 2, 4, 6, 8];

//   function randomMove() {
//     return Math.floor(Math.random() * firstCompMoves.length);
//   }

//   if (!playerMoveFirst && level === 'easy') {
//     fieldCells[firstCompMoves[randomMove()]].innerHTML = CROSS_EL;
//     crossStep = false;
//   }
// }

// if (
// 	crossStep &&
// 	!cell.classList.contains('x') &&
// 	!cell.classList.contains('o')
//   ) {
// 	cell.innerHTML = CROSS_EL;
// 	cell.classList.add('x');
// 	stepsCount += 1;
// 	movesArr[idx] = 'busy';
// 	crossStep = false;
// 	compMove = true;
// 	playerMove = false;
//   }
