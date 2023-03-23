const board = [];

const createBoard = () => {
   for (let i = 0; i < 10; i++) {
      const row = [];
      for (let j = 0; j < 10; j++) {
        row.push(0);
      }
      board.push(row);
}
}

createBoard();

const getRandom = (max) => Math.floor(Math.random() * max) == 0 ? 0:1;

const checkPlaceForOneSquareShip  = (board, x, y) => (board[x][y] === 0);

const checkPlaceForTwoSquareShip = (board, x, y, secondx, secondy) => board[x][y] === 0 || board[secondx][secondy] === 0;
   
const checkPlaceForThreeSquareShip = (board, x, y, secondx, secondy, thirdx, thirdy) => board[x][y] === 0 || board[secondx][secondy] === 0 || board[thirdx][thirdy] === 0;
   

class OneSquareShip {
   constructor (){
      this.x = Math.floor(Math.random() * 9);
      this.y = Math.floor(Math.random() * 9);
   }

   getCreateOneSquareShip () {
      if (!checkPlaceForOneSquareShip(board, this.x, this.y)) {
         this.x = Math.floor(Math.random() * 9);
         this.y = Math.floor(Math.random() * 9);
         board[this.x][this.y] = 'q'
      } else {
         board[this.x][this.y] = 'q'
   }
      }
   }

class TwoSquareShip {
   constructor (){
      this.x = Math.floor(Math.random() * 8);
      this.y = Math.floor(Math.random() * 8);
   }

   getCreateTwoSquareShip () {
      const position = getRandom(2);
      if (position == 0) {
         this.secondx = this.x + 1;
         this.secondy = this.y;
      } else if (position == 1) {
         this.secondx = this.x;
         this.secondy = this.y + 1;
      }

      const result = checkPlaceForTwoSquareShip(board, this.x, this.y, this.secondx, this.secondy);
      if (!result) {
         this.x = Math.floor(Math.random() * 8);
         this.y = Math.floor(Math.random() * 8);
         const position = getRandom(2);
         if (position == 0) {
            this.secondx = this.x + 1;
            this.secondy = this.y;
            board[this.x][this.y] = 'w';
            board[this.secondx][this.secondy] = 'w';
         } else if (position == 1) {
            this.secondx = this.x;
            this.secondy = this.y + 1;
            board[this.x][this.y] = 'w';
            board[this.secondx][this.secondy] = 'w';
         }       
      } else {
         const position = getRandom(2);
         if (position == 0) {
            this.secondx = this.x + 1;
            this.secondy = this.y;
            board[this.x][this.y] = 'w';
            board[this.secondx][this.secondy] = 'w';
         } else if (position == 1) {
            this.secondx = this.x;
            this.secondy = this.y + 1;
            board[this.x][this.y] = 'w';
            board[this.secondx][this.secondy] = 'w';
         }
      }
   }
}

class ThreeSquareShip {
   constructor (){
      this.x = Math.floor(Math.random() * 7);
      this.y = Math.floor(Math.random() * 7);
   }

   getCreateThreeSquareShip () {
      const result = checkPlaceForThreeSquareShip(board, this.x, this.y, this.secondx, this.secondy, this.thirdx, this.thirdy);
      if (!result) {
         this.x = Math.floor(Math.random() * 7);
         this.y = Math.floor(Math.random() * 7);
         const position = getRandom(2);
         if (position == 0){
            this.secondx = this.x + 1;
            this.secondy = this.y;
            this.thirdx = this.secondx + 1;
            this.thirdy = this.y;
            board[this.x][this.y] = 'e';
            board[this.secondx][this.secondy] = 'e';
            board[this.thirdx][this.thirdy] = 'e';
         } else if (position == 1){
            this.secondx = this.x;
            this.secondy = this.y + 1;
            this.thirdx = this.x;
            this.thirdy = this.secondy + 1;
            board[this.x][this.y] = 'e';
            board[this.secondx][this.secondy] = 'e';
            board[this.thirdx][this.thirdy] = 'e';
         }
      } else {
         const position = getRandom(2);
         if (position == 0){
            this.secondx = this.x + 1;
            this.secondy = this.y;
            this.thirdx = this.secondx + 1;
            this.thirdy = this.y;
            board[this.x][this.y] = 'e';
            board[this.secondx][this.secondy] = 'e';
            board[this.thirdx][this.thirdy] = 'e';
         } else if (position == 1){
            this.secondx = this.x;
            this.secondy = this.y + 1;
            this.thirdx = this.x;
            this.thirdy = this.secondy + 1;
            board[this.x][this.y] = 'e';
            board[this.secondx][this.secondy] = 'e';
            board[this.thirdx][this.thirdy] = 'e';
         }
      }
   }
}

class FourSquareShip {
   constructor (){
      this.x = Math.floor(Math.random() * 6);
      this.y = Math.floor(Math.random() * 6);
   }

   getCreateFourSquareShip () {
         const position = getRandom(2);
         if (position == 0) {
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
            } else if (position == 1) {
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

console.log(board);