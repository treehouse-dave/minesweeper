// reminder: to transpile run `npm run build` from the root
// compiled code is in lib/

// To play Minesweeper, we will create instances of MineSweeperGame in command line.
// For example:
// In the command line, navigate to the lib directory and run `node`
// Run `.load game.js` to load the contents of this file.
// Then create a Game instance and run commands like so:
// let game = new Game(3, 3, 3);
// game.playMove(0, 1);
// game.playMove(1, 2);
// When done run `.exit`

import { Board } from './board.js';

class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
    this._isOver = false;
  }
  playMove(rowIndex, columnIndex) {
    if (this._isOver) {
      return;
    }
    this._board.flipTile(rowIndex, columnIndex);
    // is there a bomb?
    if (this._board._bombBoard[rowIndex][columnIndex] === 'B') {
      console.log('Ouch! Game over');
      this._isOver = true;
      this._board.print();
    } else if (this._board.hasSafeTiles()) {
      console.log('You won!!!!');
    } else {
      console.log('Current Board:');
      this._board.print();
    }
  }
}
