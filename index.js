import FourSquareShip from './FourSquareShipClass';
import ThreeSquareShip from './ThreeSquareShipClass';
import TwoSquareShip from './TwoSquareShipClass';
import OneSquareShip from './OneSquareShipClass';
import BOARD from './constants';
import createBoard from './helper';

createBoard();

console.log(BOARD);

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
