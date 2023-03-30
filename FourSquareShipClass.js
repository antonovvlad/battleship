import BOARD from './constants';
import getRandom from './helper';

export class FourSquareShip {
  constructor() {
    this.x = Math.floor(Math.random() * 6);
    this.y = Math.floor(Math.random() * 6);
  }

  getCreateFourSquareShip() {
    const position = getRandom(2);
    if (position === 0) {
      this.secondx = this.x + 1;
      this.secondy = this.y;
      this.thirdx = this.secondx + 1;
      this.thirdy = this.y;
      this.fourthx = this.thirdx + 1;
      this.fourthy = this.y;
      BOARD[this.x][this.y] = 'r';
      BOARD[this.secondx][this.secondy] = 'r';
      BOARD[this.thirdx][this.thirdy] = 'r';
      BOARD[this.fourthx][this.fourthy] = 'r';
    } else if (position === 1) {
      this.secondx = this.x;
      this.secondy = this.y + 1;
      this.thirdx = this.x;
      this.thirdy = this.secondy + 1;
      this.fourthx = this.x;
      this.fourthy = this.thirdy + 1;
      BOARD[this.x][this.y] = 'r';
      BOARD[this.secondx][this.secondy] = 'r';
      BOARD[this.thirdx][this.thirdy] = 'r';
      BOARD[this.fourthx][this.fourthy] = 'r';
    }
  }
}
