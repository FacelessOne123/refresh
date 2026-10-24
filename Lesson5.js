const display = document.querySelector("#display");
const displayDate = document.querySelector("#displayDate");

function updateClock(){

    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    display.textContent = 
    String(hours).padStart(2, "0") + ":" +
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0");


    const monthname = ["january","february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    const currentMonth = monthname[now.getMonth()];
    const upperMonth = currentMonth.toUpperCase();
    const day = now.getDate();
    const year = now.getFullYear();

    displayDate.textContent = 
    upperMonth + " " + day + ", " + year;

}
updateClock();
setInterval(updateClock, 1000);