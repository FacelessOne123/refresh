const inputTask = document.querySelector("#inputTask");
const message = document.querySelector("#message");
const taskList = document.querySelector("#taskList");
const counter = document.querySelector("#counter");

const addBtn = document.querySelector("#addBtn");


addBtn.addEventListener("click", () =>{
    if(inputTask.value.trim() === ""){
        message.textContent = "Enter Task!";
        return;
    }
    message.textContent = "";
    const newLI = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.textContent = inputTask.value.trim();
    
  
    const doneBtn = document.createElement("button");
    doneBtn.textContent = "done";
    doneBtn.className = "done-btn";
    
    doneBtn.addEventListener("click", ()=>{
        if(taskText.style.textDecoration === "line-through"){
            taskText.style.textDecoration = "none";
        }else{
            taskText.style.textDecoration = "line-through";
        }

    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete"
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener("click", () =>{
            newLI.remove();
            counter.textContent = taskList.children.length;
    });

    
    newLI.appendChild(taskText);
    newLI.appendChild(doneBtn);
    newLI.appendChild(deleteBtn);
    taskList.appendChild(newLI);

    counter.textContent = taskList.children.length;
    inputTask.value = "";
});