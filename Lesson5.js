const display = document.querySelector("#display");
const displayDate = document.querySelector("#displayDate");

let period;

function updateClock(){
const now = new Date();

const hours = now.getHours();

let hour12 = hours % 12;
if(hour12 === 0 ){
    period = " am";
}else{
    period = " pm";
}

if(hour12 === 0){
    hour12 = 12;
}

const minutes = now.getMinutes();
const seconds = now.getSeconds();

display.textContent = 

String(hour12).padStart(2,"0") + ":" +
String(minutes).padStart(2, "0") + ":" +
String(seconds).padStart(2, "0") +
period;


const days = ["Sunday", "Monday", "Tuesday", "Wednesday" , "Thursday" , "Friday" , "Saturday"];
const currentDay = days[now.getDay()];


const Months = ["January", "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
const arrayofMonth = Months[now.getMonth()];


const date = now.getDate();
const year = now.getFullYear();
displayDate.textContent = 
currentDay + ", " + arrayofMonth + "/" + date + "/" + year;


};
updateClock();
setInterval(updateClock, 1000);