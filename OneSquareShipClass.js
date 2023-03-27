import board from './constants';
import checkPlaceForOneSquareShip from './helper';

class OneSquareShip {
  constructor() {
    this.x = Math.floor(Math.random() * 9);
    this.y = Math.floor(Math.random() * 9);
  }

  getCreateOneSquareShip() {
    if (!checkPlaceForOneSquareShip(board, this.x, this.y)) {
      this.x = Math.floor(Math.random() * 9);
      this.y = Math.floor(Math.random() * 9);
      board[this.x][this.y] = 'q';
    } else {
      board[this.x][this.y] = 'q';
    }
  }
}

export default OneSquareShip;
