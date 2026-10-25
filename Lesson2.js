const firstNumber = document.querySelector("#number1");
const secondNumber = document.querySelector("#number2");

const addition = document.querySelector("#addition");
const subtraction = document.querySelector("#subtraction");
const multiplication = document.querySelector("#multiplication");
const division = document.querySelector("#division");

const calculateBtn = document.querySelector("#calculateBtn");
const clearBtn = document.querySelector("#clearBtn");
const result = document.querySelector("#result");

    // operator statement
let operator = "";

// buttons eventclicker
addition.addEventListener("click", function(){
    operator = "+";
    result.textContent = "addition";

});

subtraction.addEventListener("click", function(){
    operator = "-";
    result.textContent = "subtraction";

});

multiplication.addEventListener("click", function(){
    operator = "*";
    result.textContent = "multiplication";

});

division.addEventListener("click", function(){
    operator = "/";
    result.textContent = "division";

});

clearBtn.addEventListener("click", ()=>{
    firstNumber.value = "";
    secondNumber.value = "";
    result.textContent = "";
    return;
});

calculateBtn.addEventListener("click", function(){
    //checker if the input is empty
    if(number1.value === "" || number2.value === ""){
        result.textContent = "enter both number";
        return;
    };

    //prevent the number to show string
    const firstNumber = Number(number1.value);
    const secondNumber = Number(number2.value);

    // logic for operator
    switch (operator){
        case "+" :{
            result.textContent = firstNumber + secondNumber;
            break;
        }
        case "-" :{
            result.textContent = firstNumber - secondNumber;
            break;
        }
        case "*" :{
            result.textContent = firstNumber * secondNumber;
            break;
        }
        case "/" :{
            if(secondNumber === 0){
                result.textContent = "Cannot divide to zero"
                break;
            }else{
                result.textContent = firstNumber / secondNumber;
                break;
            }
        }
        default:
            result.textContent = "Enter operator";
    };


});















    // switch (operator){
    //  case "+":
    //     result.textContent = firstNumber + secondNumber;
    //      break;
    //  case "-":
    //      result.textContent = firstNumber - secondNumber;
    //      break;
    //  case "*":
    //      result.textContent = firstNumber * secondNumber;
    //      break;
    //  case "/":
    //      if(secondNumber === "0"){
    //         result.textContent = "Cannot divide to zero";
    //      }else{result.textContent = "firstNumber / secondNumber;"} break;
    //      default:
    //      result.textContent = "choose a operator";          