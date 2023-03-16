let locationX = Math.floor(Math.random() * 9); // розташування по осі Х (дошка)
let locationY = Math.floor(Math.random() * 9); // розташування по осі У (дошка)

alert(locationX); // перевірочне
alert(locationY); // перевірочне

let guessLocationX; 
let guessLocationY;
let hitsLocationX = 0;
let hitsLocationY = 0;
let hits = 0;

let goal = false;

function oneSquareShip () {
while(hitsLocationX != 1){
 guessLocationX = prompt('Зроби вибір клітинки від 0 до 9 (з ліва на право)');
 if(guessLocationX < 0 || guessLocationX > 9){
    alert('треба вибрати число від 0 до 9 (тобто 10 клітинок)');
 } else {
    if(guessLocationX == locationX){
        hitsLocationX++;
        alert('You hit location X')
 } else {
    alert('miss location X')
 }
 }
}

 while(hitsLocationY != 1){
 guessLocationY = prompt('Зроби вібір клітинки від 0 до 9 (з гори до низу)');
 if (guessLocationY < 0 || guessLocationY > 9){
        alert('треба вибрати число від 0 до 9 (тобто 10 клітинок)');
    } else {
         if (guessLocationY == locationY){
            hitsLocationY++;
            alert('you heet location Y');
         } else {
            alert('miss location Y');
         }
        }
 }    
 while(!goal) {
    if (hitsLocationX == 1 && hitsLocationY == 1){
            hits++;
            if(hits == 1){
                goal = true;
                alert('You hit one square ship')
            }
        } 
    } 
}


oneSquareShip();

