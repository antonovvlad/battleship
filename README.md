
** ПОКИ ЩО НАПИСАНА ТА ПРАЦЮЄ ФУНКЦІЯ ТІЛЬКИ З ОДНОПАЛУБНИМ КОРАБЛЕМ 

Правила
1. Ввести в даілогове вікно клітинку на осі Х, якщо клітинка невірна, спробуй ще, якщо ти попав, тебе про це повідомлять
2. Ввести в діалогове вікно клітинку на осі У, якщо клітинка невірна, спробуй ще, якщо ти попав, тебе про це повідомлять
3. клітинки вводити тільки від 0 до 9, інакше буде помилка, та нова спроба




/*

даємо завдання що ми маємо знайти 1 потім 2 потім 3 потім 4
1. створюємо обєкти кораблів в конструкторі (функції разні для кожних конструкторів)
2. створюємо функцію в залежності від довжини в самому конструкторі.
*/

/*
// створення 3-х палубного судна на одній строці
let location1 = Math.floor(Math.random() * 7);
let location2 = location1 + 1;
let location3 = location2 + 1;
*/

/* приклад непрацюючого классу (створити працюючий, з урахуванням нового коду)
class OnePShip {
    constructor(location, guess, hits, goal){
        this.location = Math.floor(Math.random() * 7);
        this.guess;
        this.hits = 0;
        this.goal = false;
    }

    get game(){

        while(!goal){
            guess = prompt('Take a shoot, 0-9');

 if(guess < 0 || guess > 9){
    alert('out of line');

 } else {
    if (guess == location){
        hits++;

        if(hits == 1){
            goal = true;
            alert('You win')
    } else {
        alert("miss");
    }
 } 
}
}
}
*/