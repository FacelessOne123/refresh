const loginForm = document.querySelector("#loginForm");
const message = document.querySelector("#message");

loginForm.addEventListener("submit", function(event){
event.preventDefault();
message.textContent = "Congrats! welcome to lesson 2";

window.location.href = "lesson2.html"

});