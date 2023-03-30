import BOARD from './constants';
import checkPlaceForOneSquareShip from './helper';

export class OneSquareShip {
  constructor() {
    this.x = Math.floor(Math.random() * 9);
    this.y = Math.floor(Math.random() * 9);
  }

  getCreateOneSquareShip() {
    if (!checkPlaceForOneSquareShip(BOARD, this.x, this.y)) {
      this.x = Math.floor(Math.random() * 9);
      this.y = Math.floor(Math.random() * 9);
      BOARD[this.x][this.y] = 'q';
    } else {
      BOARD[this.x][this.y] = 'q';
    }
  }
}