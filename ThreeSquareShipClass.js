import BOARD from './constants';
import { getRandom, checkPlaceForThreeSquareShip } from './helper';

export class ThreeSquareShip {
  constructor() {
    this.x = Math.floor(Math.random() * 7);
    this.y = Math.floor(Math.random() * 7);
  }

  getCreateThreeSquareShip() {
    const result = checkPlaceForThreeSquareShip(BOARD, this.x, this.y, this.secondx, this.secondy, this.thirdx, this.thirdy);
    if (!result) {
      this.x = Math.floor(Math.random() * 7);
      this.y = Math.floor(Math.random() * 7);
      const position = getRandom(2);
      if (position === 0) {
        this.secondx = this.x + 1;
        this.secondy = this.y;
        this.thirdx = this.secondx + 1;
        this.thirdy = this.y;
        BOARD[this.x][this.y] = 'e';
        BOARD[this.secondx][this.secondy] = 'e';
        BOARD[this.thirdx][this.thirdy] = 'e';
      } else if (position === 1) {
        this.secondx = this.x;
        this.secondy = this.y + 1;
        this.thirdx = this.x;
        this.thirdy = this.secondy + 1;
        BOARD[this.x][this.y] = 'e';
        BOARD[this.secondx][this.secondy] = 'e';
        BOARD[this.thirdx][this.thirdy] = 'e';
      }
    } else {
      const position = getRandom(2);
      if (position === 0) {
        this.secondx = this.x + 1;
        this.secondy = this.y;
        this.thirdx = this.secondx + 1;
        this.thirdy = this.y;
        BOARD[this.x][this.y] = 'e';
        BOARD[this.secondx][this.secondy] = 'e';
        BOARD[this.thirdx][this.thirdy] = 'e';
      } else if (position === 1) {
        this.secondx = this.x;
        this.secondy = this.y + 1;
        this.thirdx = this.x;
        this.thirdy = this.secondy + 1;
        BOARD[this.x][this.y] = 'e';
        BOARD[this.secondx][this.secondy] = 'e';
        BOARD[this.thirdx][this.thirdy] = 'e';
      }
    }
  }
}
