// reminder: to transpile run `npm run build` from the root
// compiled code is in lib/

const printBoard = (board) => {
  console.log('Current Board: ');
  console.log(board[0].join(' | '));
  console.log(board[1].join(' | '));
  console.log(board[2].join(' | '));
};

let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

printBoard(board);
board[0][1] = '1';
board[2][2] = 'B'
printBoard(board);
