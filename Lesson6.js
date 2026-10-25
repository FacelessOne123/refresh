const inputTask = document.querySelector("#inputTask");
const message = document.querySelector("#message");
const taskList = document.querySelector("#taskList");
const counter = document.querySelector("#counter");

const addBtn = document.querySelector("#addBtn");

addBtn.addEventListener("click", ()=>{
    if(inputTask.value.trim() === ""){
        message.textContent = "Enter a Task!";
        return;
    }
        message.textContent = "";
        const input = inputTask.value;
    
        const newLI = document.createElement('li');
        newLI.textContent = taskList.value;
    
        
        const taskText = document.createElement('span');
        taskText.textContent = inputTask.value;
    
        const doneBtn = document.createElement('button');
        doneBtn.textContent = "done";
        

        doneBtn.addEventListener("click", function(){
        let taskCompleted = taskText.classList.toggle('completed');
        completedTask();
        if(taskCompleted){
            taskText.style.textDecoration = 'line-through';
            this.textContent = 'undo'
        }else{
            taskText.style.textDecoration = 'none';
            this.textContent = 'done'
        }
        });
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "delete";

        deleteBtn.addEventListener("click", ()=>{
            newLI.remove();
            counter.textContent = taskList.children.length;
            completedTask();
        });

        inputTask.value = "";

        newLI.appendChild(taskText);
        newLI.appendChild(doneBtn);
        newLI.appendChild(deleteBtn);
        taskList.appendChild(newLI);
        
        completedTask();
});

function completedTask(){
    let Completedtask = 0;
    let taskDone = taskList.querySelectorAll('span');
    for(let i= 0; i < taskDone.length; i++)
        if(taskDone[i].classList.contains('completed')){
            Completedtask++;
        }
       counter.textContent = taskDone.length - Completedtask;
}