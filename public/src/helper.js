import { BOARD } from './constants.js';

const getRandom = (max) => (Math.floor(Math.random() * max) === 0 ? 0 : 1);

const checkPlaceForOneSquareShip = (x, y) => (BOARD[x][y] === 0);

const checkPlaceForTwoSquareShip = (x, y, secondx, secondy) => BOARD[x][y] === 0 || BOARD[secondx][secondy] === 0;

const checkPlaceForThreeSquareShip = (x, y, secondx, secondy, thirdx, thirdy) => board[x][y] === 0 || BOARD[secondx][secondy] === 0 || BOARD[thirdx][thirdy] === 0;

const createBoard = () => {
    for (let i = 0; i < 10; i += 1) {
      const row = [];
      for (let j = 0; j < 10; j += 1) {
        row.push(0);
      }
      BOARD.push(row);
    }
  };

  export {
    getRandom, 
    checkPlaceForOneSquareShip, 
    checkPlaceForTwoSquareShip, 
    checkPlaceForThreeSquareShip, 
    createBoard,
  }