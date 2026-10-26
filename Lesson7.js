const numberInput = document.querySelector("#numberInput");
const hintDisplay = document.querySelector("#hintDisplay");
const attemptCounter = document.querySelector("#attemptCounter");

const submitBtn = document.querySelector("#submitBtn");
const restartBtn = document.querySelector("#restartBtn");

let max = 100;
let secretNumber = Math.floor(Math.random() * max )+ 1;
let attempt = 0;
let gameOver = false;
let isSubmitting = false;
submitBtn.addEventListener("click", function (){
    if(gameOver || isSubmitting){
        return;
    }

    isSubmitting = true;
    submitBtn.disabled = true;

    if(numberInput.value === ""){
        hintDisplay.textContent = "Enter a valid number!";
        return;
    }
    
    const guess = Number(numberInput.value);
    if(guess < 1 || guess > max){
        hintDisplay.textContent = "Enter a number between 1 and 100"
        return;
    }
    
    if(guess < secretNumber){
        hintDisplay.textContent = "Too low";
    }else if (guess > secretNumber){
        hintDisplay.textContent = "Too high";
    }else{
        hintDisplay.textContent = "You are correct! , Click the restart to play again with new number";3
        gameOver = true;

        return;
    }

    attempt++;
    attemptCounter.textContent = attempt;
    

    setTimeout(()=>{
        isSubmitting = false;

        if(!gameOver){
            submitBtn.disabled = false;

        }
    }, 500);

});

restartBtn.addEventListener("click", function (){
    attempt = 0;
    attemptCounter.textContent = "0";
    hintDisplay.textContent = "";
    numberInput.value = "";
    secretNumber = Math.floor(Math.random() * max )+ 1;
    gameOver = false;
    
    submitBtn.disabled = false;

});