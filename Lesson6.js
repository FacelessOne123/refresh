const inputTask = document.querySelector("#inputTask");
const message = document.querySelector("#message");
const taskList = document.querySelector("#taskList");

const addBtn = document.querySelector("#addBtn");

addBtn.addEventListener("click", function(){
    if(inputTask.value.trim() === ""){
        message.textContent = "Enter a Task!"
       return;
    }

    
    const input = (inputTask.value);
    const newLI = document.createElement("li");

    newLI.textContent = inputTask.value;
    taskList.appendChild(newLI);

    taskList = "";
    inputTask.value = "";

});

