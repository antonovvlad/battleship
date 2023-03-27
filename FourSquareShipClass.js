import board from './constants';
import { getRandom } from './helper';

class FourSquareShip {
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
      board[this.x][this.y] = 'r';
      board[this.secondx][this.secondy] = 'r';
      board[this.thirdx][this.thirdy] = 'r';
      board[this.fourthx][this.fourthy] = 'r';
    } else if (position === 1) {
      this.secondx = this.x;
      this.secondy = this.y + 1;
      this.thirdx = this.x;
      this.thirdy = this.secondy + 1;
      this.fourthx = this.x;
      this.fourthy = this.thirdy + 1;
      board[this.x][this.y] = 'r';
      board[this.secondx][this.secondy] = 'r';
      board[this.thirdx][this.thirdy] = 'r';
      board[this.fourthx][this.fourthy] = 'r';
    }
  }
}

export default FourSquareShip;
