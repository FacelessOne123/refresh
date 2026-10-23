const button5 = document.querySelector("#button1");
const button10 = document.querySelector("#button2");
const button15 = document.querySelector("#button3");
const button20 = document.querySelector("#button4");
const calculateBtn = document.querySelector("#calculateBtn");

const billAmount = document.querySelector("#bill");
const tipPercent = document.querySelector("#percentAmount");
const population = document.querySelector("#numberOfpeople");

const tipresult = document.querySelector("#tipAmount");
const totalresult = document.querySelector("#totalAmount");
const numberOfpeople = document.querySelector("#Persons");

let selectedTip = 0;

button5.addEventListener("click", function(){
selectedTip = 5;

tipPercent.textContent = "5%";

});

button10.addEventListener("click", function(){
selectedTip = 10;

tipPercent.textContent = "10%";

});

button15.addEventListener("click", function(){
selectedTip = 15;

tipPercent.textContent = "15%";

});

button20.addEventListener("click", function(){
selectedTip = 20;

tipPercent.textContent = "20%";

});


calculateBtn.addEventListener("click" , function(){

    if (billAmount.value === "" || population.value === "" ){
        tipresult.textContent = "Enter";
        totalresult.textContent = "Enter";
        numberOfpeople.textContent = "Enter";
        return;
    }

    const bill = Number(billAmount.value);
    const people = Number(population.value);

    
   if(bill <0 || people <=0 || selectedTip === 0){
        tipresult.textContent = "Check your inputs";
        totalresult.textContent = "Check your inputs";
        numberOfpeople.textContent = "Check your inputs";
        return;

   }

    const tipAmount = bill * (selectedTip / 100); 
    const totalAmount = tipAmount + bill;
    const eachPerson = totalAmount / people;

    tipresult.textContent = tipAmount.toFixed(2);
    totalresult.textContent = totalAmount.toFixed(2);
    numberOfpeople.textContent = eachPerson.toFixed(2);



















});