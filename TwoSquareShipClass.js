import board from './constants';
import { getRandom, checkPlaceForTwoSquareShip } from './helper';

class TwoSquareShip {
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

    const result = checkPlaceForTwoSquareShip(board, this.x, this.y, this.secondx, this.secondy);
    if (!result) {
      this.x = Math.floor(Math.random() * 8);
      this.y = Math.floor(Math.random() * 8);

      const randomPosition = getRandom(2);
      if (randomPosition === 0) {
        this.secondx = this.x + 1;
        this.secondy = this.y;
        board[this.x][this.y] = 'w';
        board[this.secondx][this.secondy] = 'w';
      } else if (position === 1) {
        this.secondx = this.x;
        this.secondy = this.y + 1;
        board[this.x][this.y] = 'w';
        board[this.secondx][this.secondy] = 'w';
      }
    } else {
      const elseRandomPosition = getRandom(2);
      if (elseRandomPosition === 0) {
        this.secondx = this.x + 1;
        this.secondy = this.y;
        board[this.x][this.y] = 'w';
        board[this.secondx][this.secondy] = 'w';
      } else if (position === 1) {
        this.secondx = this.x;
        this.secondy = this.y + 1;
        board[this.x][this.y] = 'w';
        board[this.secondx][this.secondy] = 'w';
      }
    }
  }
}

export default TwoSquareShip;
