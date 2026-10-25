const numberInput = document.querySelector("#numberInput");
const hintDisplay = document.querySelector("#hintDisplay");
const attemptCounter = document.querySelector("#attemptCounter");

const restartBtn = document.querySelector("#restartBtn");
const submitBtn = document.querySelector("#submitBtn");

let max = 100;
let secretNumber = Math.floor(Math.random() * max + 1);

let attempt = 0;
let gameOver = false;
submitBtn.addEventListener("click", function(){
    if(gameOver){
        return;
    }
   if(numberInput.value === ""){
    hintDisplay.textContent = "Enter a Valid Number!";
    return;
   }

    const guess = Number(numberInput.value);

    if(guess < 1 || guess > max){
    hintDisplay.textContent = "Enter a number between 1 and 100";
    return;
    }
    numberInput.value = "";
    attempt++;
    attemptCounter.textContent = attempt;
    
    if(guess < secretNumber){
        hintDisplay.textContent = "too low";
    }else if (guess > secretNumber){
        hintDisplay.textContent = "too high";
    }else{
        hintDisplay.textContent = "You are correct! Please Restart to play again!";
        gameOver = true;
        return;
    }

});

restartBtn.addEventListener("click", function(){
    attempt = 0;
    attemptCounter.textContent = "0";
    hintDisplay.textContent = "New game started! Guess a number from 1 to 100.";
    numberInput.value = "";
    gameOver = false;
    secretNumber = Math.floor(Math.random() * max + 1);

});