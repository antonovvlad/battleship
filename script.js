import FourSquareShip from './FourSquareShipClass';
import ThreeSquareShip from './ThreeSquareShipClass';
import TwoSquareShip from './TwoSquareShipClass';
import OneSquareShip from './OneSquareShipClass';
import board from './constants';

const createBoard = () => {
  for (let i = 0; i < 10; i += 1) {
    const row = [];
    for (let j = 0; j < 10; j += 1) {
      row.push(0);
    }
    board.push(row);
  }
};

createBoard();

console.log(board);

const fourSquareShip = new FourSquareShip();
fourSquareShip.getCreateFourSquareShip();

const threeSquareShip = new ThreeSquareShip();
threeSquareShip.getCreateThreeSquareShip();
threeSquareShip.getCreateThreeSquareShip();

const twoSquareShip = new TwoSquareShip();
twoSquareShip.getCreateTwoSquareShip();
twoSquareShip.getCreateTwoSquareShip();
twoSquareShip.getCreateTwoSquareShip();

const oneSquareShip = new OneSquareShip();
oneSquareShip.getCreateOneSquareShip();
oneSquareShip.getCreateOneSquareShip();
oneSquareShip.getCreateOneSquareShip();
oneSquareShip.getCreateOneSquareShip();
