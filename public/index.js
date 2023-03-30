import { FourSquareShip } from './src/FourSquareShipClass.js';
import { ThreeSquareShip } from './src/ThreeSquareShipClass.js';
import { TwoSquareShip } from './src/TwoSquareShipClass.js';
import { OneSquareShip } from './src/OneSquareShipClass.js';
import { BOARD } from './src/constants.js';
import { createBoard } from './src/helper.js';

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
