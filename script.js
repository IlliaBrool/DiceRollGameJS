'use strict';
// Selecting elements
let current0 = document.querySelector('#current--0');
let current1 = document.querySelector('#current--1');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let btnNewGame = document.querySelector('.btn--new');
let score0 = document.querySelector('#score--0');
let score1 = document.querySelector('#score--1');
let diceImage = document.querySelector('.dice')

//additional variables
let playerID=0; // 0 or 1 bcause we have 2 players, we need this to switch the player
let scores=[0,0]; //array with the summary of scores
let turn=0; //additional variable which contains turn scores

// Starting conditions
function NewGame() {
    current0.textContent = '0';
    current1.textContent = '0';
    score0.textContent = '0';
    score1.textContent = '0';   
};
function SwitchPlayer(){
    document.querySelector(`#current--${playerID}`).textContent = 0
    playerID=playerID== 0 ? 1 : 0;
    turn=0;
    player0.classList.toggle('player--active')
    player1.classList.toggle('player--active')
}

// Rolling dice functionality
//btnRoll
btnRoll.addEventListener('click', function() {
    let dice = Math.trunc(Math.random()*6+1);
    console.log(dice);
    diceImage.src =`dice-${dice}.png`;
    if (dice != 1) {
        turn += dice;//добавить этот дайс к счету текущего игрока
        playerID==0?current0.textContent = turn : current1.textContent = turn ;//отобразить суммарный счёт
    } else {
        SwitchPlayer();//поменять игрока
    }
});



//btnHold
btnHold.addEventListener('click', function() {
    scores[playerID] += turn;//добавляет набранные очки к сумме
    playerID===0?score0.textContent = scores[playerID] : score1.textContent =scores[playerID];
    scores[playerID] >= 100 ? prompt("YOU WON ! CONGRATULATIONS")+NewGame() : SwitchPlayer() ;//если счет >= 100 - игрок выиграл
    //если нет - поменять игрока
});


//btnNew
btnNewGame.addEventListener('click', function() { //обнуляем все счетчики на 0
    NewGame();
    // игру должен начинать PLAYER 1
});
