import { BOARD } from './constants.js';
import { getRandom, checkPlaceForTwoSquareShip } from './helper.js';

 export class TwoSquareShip {
  constructor() {
    this.x = Math.floor(Math.random() * 8);
    this.y = Math.floor(Math.random() * 8);
  }

  getCreateTwoSquareShip() {
    const position = getRandom(2);
    if (position === 0) {
      this.secondx = this.x + 1;
      this.secondy = this.y;
    } else if (position === 1) {
      this.secondx = this.x;
      this.secondy = this.y + 1;
    }

    const result = checkPlaceForTwoSquareShip(BOARD, this.x, this.y, this.secondx, this.secondy);
    if (!result) {
      this.x = Math.floor(Math.random() * 8);
      this.y = Math.floor(Math.random() * 8);

      const randomPosition = getRandom(2);
      if (randomPosition === 0) {
        this.secondx = this.x + 1;
        this.secondy = this.y;
        BOARD[this.x][this.y] = 'w';
        BOARD[this.secondx][this.secondy] = 'w';
      } else if (position === 1) {
        this.secondx = this.x;
        this.secondy = this.y + 1;
        BOARD[this.x][this.y] = 'w';
        BOARD[this.secondx][this.secondy] = 'w';
      }
    } else {
      const elseRandomPosition = getRandom(2);
      if (elseRandomPosition === 0) {
        this.secondx = this.x + 1;
        this.secondy = this.y;
        BOARD[this.x][this.y] = 'w';
        BOARD[this.secondx][this.secondy] = 'w';
      } else if (position === 1) {
        this.secondx = this.x;
        this.secondy = this.y + 1;
        BOARD[this.x][this.y] = 'w';
        BOARD[this.secondx][this.secondy] = 'w';
      }
    }
  }
}
