const display = document.querySelector("#display");

const Start = document.querySelector("#Start");
const Stop = document.querySelector("#Stop");
const Reset = document.querySelector("#Reset");


let elapsedTime = 0;
let timer = null;
let startTime = 0;

function updateDisplay(){

    const hours = Math.floor(elapsedTime / 3600000);
    const minutes = Math.floor((elapsedTime % 3600000) / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);

    display.textContent = 
    String(hours).padStart(2, "0") + ":" +
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0");


}


Start.addEventListener("click", function(){

    if (timer !== null){
        return;
    }

        startTime = Date.now();
    timer = setInterval(function(){
        elapsedTime += Date.now() - startTime;
        startTime = Date.now();

        updateDisplay();


    },100)


});

Stop.addEventListener("click", function(){
    clearInterval(timer);
    timer = null;

});

Reset.addEventListener("click", function(){
    clearInterval(timer);
    timer = null;
    elapsedTime = 0;
    startTime = 0;
    updateDisplay();


});