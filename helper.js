import board from './constants';

const getRandom = (max) => (Math.floor(Math.random() * max) === 0 ? 0 : 1);

const checkPlaceForOneSquareShip = (x, y) => (board[x][y] === 0);

const checkPlaceForTwoSquareShip = (x, y, secondx, secondy) => board[x][y] === 0 || board[secondx][secondy] === 0;

const checkPlaceForThreeSquareShip = (x, y, secondx, secondy, thirdx, thirdy) => board[x][y] === 0 || board[secondx][secondy] === 0 || board[thirdx][thirdy] === 0;

export {
  getRandom,
  checkPlaceForOneSquareShip,
  checkPlaceForTwoSquareShip,
  checkPlaceForThreeSquareShip,
};
