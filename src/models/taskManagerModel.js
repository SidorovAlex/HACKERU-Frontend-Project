import Task from "./taskModel.js";
import { TASK_LIST, TASK_INP } from "./DOMModel.js";
import { addItemToLocalStorage,removeItemfromLocalStorage } from "../services/localStorageService.js";

class TaskManager {
  taskCounter;
  constructor(taskCounter) {
    this.TaskManager = [];
    this.taskCounter = 0;
  }
  showTasks() {
    TASK_LIST.innerHTML = "";
    let li = "";
    if (this.TaskManager) {
      this.TaskManager.forEach((task) => {
        let list = document.createElement("li");
        let taskSp = document.createElement("span");
        let deleteBtn = document.createElement("button");
        let editeBtn = document.createElement("button");
        let checkBoxInp = document.createElement("input");
        checkBoxInp.setAttribute("type","checkbox");
        
        if(task.status === "Completed"){
          taskSp.classList.add("checked");
          checkBoxInp.setAttribute("checked","true");
        }



        taskSp.innerText = task.theTask;
        deleteBtn.innerText = "Delete";
        deleteBtn.style.color = "red";

        editeBtn.innerText = "Edit";
        editeBtn.style.color = "blue"

        deleteBtn.addEventListener("click", () => {
          this.deleteTask(task.id);
        });
        editeBtn.addEventListener("click",()=>{
          if(editeBtn.innerText === "Edit")
          {
            editeBtn.innerHTML = "Save";
            taskSp.setAttribute("contenteditable",true);
          }
          else{
            editeBtn.innerText = "Edit";
            taskSp.setAttribute("contenteditable",false);
            task.theTask= taskSp.innerText;
            addItemToLocalStorage("task-list",JSON.stringify(this.TaskManager));
          }
        });

        checkBoxInp.addEventListener("click",()=>{
          if(checkBoxInp.checked){
            taskSp.classList.add("checked")
            task.status = "Completed"
          }
          else{
            task.status = "Uncompleted"
            taskSp.classList.remove("checked")
          }
        })
        

        list.appendChild(checkBoxInp);
        list.appendChild(taskSp);
        list.appendChild(editeBtn);
        list.appendChild(deleteBtn);

        TASK_LIST.appendChild(list);
      });
    }
  }
  showOnlyCompleted(){
    TASK_LIST.innerHTML = "";
    let li = "";
    if (this.TaskManager) {
      this.TaskManager.forEach((task) => {
        let list = document.createElement("li");
        let taskSp = document.createElement("span");
        let deleteBtn = document.createElement("button");
        let editeBtn = document.createElement("button");
        let checkBoxInp = document.createElement("input");
        checkBoxInp.setAttribute("type","checkbox");
        checkBoxInp.setAttribute("checked","true");
        
        if(task.status === "Completed"){
          taskSp.classList.add("checked");



          taskSp.innerText = task.theTask;
          deleteBtn.innerText = "Delete";
          deleteBtn.style.color = "red";

          editeBtn.innerText = "Edit";
          editeBtn.style.color = "blue"

          deleteBtn.addEventListener("click", () => {
            this.deleteTask(task.id);
          });
          editeBtn.addEventListener("click",()=>{
            if(editeBtn.innerText === "Edit")
            {
              editeBtn.innerHTML = "Save";
              taskSp.setAttribute("contenteditable",true);
            }
            else{
              editeBtn.innerText = "Edit";
              taskSp.setAttribute("contenteditable",false);
              task.theTask= taskSp.innerText;
              addItemToLocalStorage("task-list",JSON.stringify(this.TaskManager));
            }
          });

          checkBoxInp.addEventListener("click",()=>{
            if(checkBoxInp.checked){
              taskSp.classList.add("checked")
              task.status = "Completed"
            }
            else{
              task.status = "Uncompleted"
              taskSp.classList.remove("checked")
            }
          })
        

          list.appendChild(checkBoxInp);
          list.appendChild(taskSp);
          list.appendChild(editeBtn);
          list.appendChild(deleteBtn);

         TASK_LIST.appendChild(list);
        }
      });
    }
  }
  showOnlyUnompleted(){
    TASK_LIST.innerHTML = "";
    let li = "";
    if (this.TaskManager) {
      this.TaskManager.forEach((task) => {
        let list = document.createElement("li");
        let taskSp = document.createElement("span");
        let deleteBtn = document.createElement("button");
        let editeBtn = document.createElement("button");
        let checkBoxInp = document.createElement("input");
        checkBoxInp.setAttribute("type","checkbox");
        
        if(task.status === "Uncompleted"){
  
        taskSp.innerText = task.theTask;
        deleteBtn.innerText = "Delete";
        deleteBtn.style.color = "red";

        editeBtn.innerText = "Edit";
        editeBtn.style.color = "blue"

        deleteBtn.addEventListener("click", () => {
          this.deleteTask(task.id);
        });
        editeBtn.addEventListener("click",()=>{
          if(editeBtn.innerText === "Edit")
          {
            editeBtn.innerHTML = "Save";
            taskSp.setAttribute("contenteditable",true);
          }
          else{
            editeBtn.innerText = "Edit";
            taskSp.setAttribute("contenteditable",false);
            task.theTask= taskSp.innerText;
            addItemToLocalStorage("task-list",JSON.stringify(this.TaskManager));
          }
        });

        checkBoxInp.addEventListener("click",()=>{
          if(checkBoxInp.checked){
            taskSp.classList.add("checked")
            task.status = "Completed"
          }
          else{
            task.status = "Uncompleted"
            taskSp.classList.remove("checked")
          }
        })
        

        list.appendChild(checkBoxInp);
        list.appendChild(taskSp);
        list.appendChild(editeBtn);
        list.appendChild(deleteBtn);

        TASK_LIST.appendChild(list);
      }
      });
    }
  }

  addTask(task) {
    let val = TASK_INP.value.trim();
    if (val) {
      task.id = this.taskCounter;
      this.taskCounter += 1;
      this.TaskManager.push(task);
    }
    addItemToLocalStorage("task-list",JSON.stringify(this.TaskManager));
    this.showTasks();
  }

  deleteTask(id) {
    let i=0;
    this.TaskManager.splice(id, 1);
    this.taskCounter -= 1;
    this.TaskManager.forEach(task =>{
      task.id=i;
      i++;
    })
    removeItemfromLocalStorage("task-list",JSON.stringify(this.TaskManager));
    this.showTasks();
  }
  setFromLocalStorage(local,idSize){
   for(let i=0;i<idSize;i++)
   {
      this.TaskManager[i]=local[i];
   }
   this.showTasks()
  }
  deleteAllTasks(){
    this.TaskManager=[];
    removeItemfromLocalStorage("task-list",JSON.stringify(this.TaskManager));
    this.showTasks();
  }
}

export default TaskManager;
