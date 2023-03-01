import Task from "./taskModel.js";
import { TASK_LIST, TASK_INP,DATE_END_TASK } from "./DOMModel.js";
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
        let editBtn = document.createElement("button");
        let checkBoxInp = document.createElement("input");
        let timeLeftToEnd = document.createElement("span")
        checkBoxInp.setAttribute("type","checkbox");
        
        if(this.checkIfTheDateValid(task.dateToEnd)) {
          timeLeftToEnd.classList.add("redNotice");
         }
        if(task.status === "Completed"){
          taskSp.classList.add("checked");
          checkBoxInp.setAttribute("checked","true");
          timeLeftToEnd.classList.remove("redNotice");
        }
       
        
        checkBoxInp?.addEventListener("click",()=>{
          if(taskSp.classList.contains("checked")){
            task.status="Uncompleted";
            addItemToLocalStorage("task-list",JSON.stringify(this.TaskManager));
            if(this.checkIfTheDateValid(task.dateToEnd)) {
              timeLeftToEnd.classList.add("redNotice");
             }
          }else{
            task.status="Completed";
            addItemToLocalStorage("task-list",JSON.stringify(this.TaskManager));
            timeLeftToEnd.classList.remove("redNotice");
          }
          
        })

        timeLeftToEnd.innerText = "End date of the task: " + task.dateToEnd.toString();
        taskSp.innerText = task.theTask;

        
         
         
        deleteBtn.innerText = "Delete";
        deleteBtn.style.color = "red";

        editBtn.innerText = "Edit";
        editBtn.style.color = "blue"

        deleteBtn.addEventListener("click", () => {
          this.deleteTask(task.id);
        });
        editBtn.addEventListener("click",()=>{
          if(editBtn.innerText === "Edit")
          {
            editBtn.innerHTML = "Save";
            taskSp.setAttribute("contenteditable",true);
          }
          else{
            editBtn.innerText = "Edit";
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
        list.appendChild(timeLeftToEnd);
        list.appendChild(editBtn);
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
        let editBtn = document.createElement("button");
        let checkBoxInp = document.createElement("input");
        let timeLeftToEnd = document.createElement("span")
        checkBoxInp.setAttribute("type","checkbox");
        
        if(this.checkIfTheDateValid(task.dateToEnd)) {
          timeLeftToEnd.classList.add("redNotice");
         }
        if(task.status === "Completed"){
          taskSp.classList.add("checked");
          checkBoxInp.setAttribute("checked","true");
          timeLeftToEnd.classList.remove("redNotice");

          checkBoxInp?.addEventListener("click",()=>{
            if(taskSp.classList.contains("checked")){
              task.status="Uncompleted";
              taskSp.classList.remove("checked")
              addItemToLocalStorage("task-list",JSON.stringify(this.TaskManager));
              if(this.checkIfTheDateValid(task.dateToEnd)) {
                timeLeftToEnd.classList.add("redNotice");
               }
            }else{
              task.status="Completed";
              taskSp.classList.add("checked")
              addItemToLocalStorage("task-list",JSON.stringify(this.TaskManager));
              timeLeftToEnd.classList.remove("redNotice");
            }
          })
          
  
          timeLeftToEnd.innerText = "End date of the task: " + task.dateToEnd.toString();
          taskSp.innerText = task.theTask;
  
          
         
           
          deleteBtn.innerText = "Delete";
          deleteBtn.style.color = "red";
  
          editBtn.innerText = "Edit";
          editBtn.style.color = "blue"
  
          deleteBtn.addEventListener("click", () => {
            this.deleteTask(task.id);
          });
          editBtn.addEventListener("click",()=>{
            if(editBtn.innerText === "Edit")
            {
              editBtn.innerHTML = "Save";
              taskSp.setAttribute("contenteditable",true);
            }
            else{
              editBtn.innerText = "Edit";
              taskSp.setAttribute("contenteditable",false);
              task.theTask= taskSp.innerText;
              addItemToLocalStorage("task-list",JSON.stringify(this.TaskManager));
            }
          });
  
          
          
          
          list.appendChild(checkBoxInp);
          list.appendChild(taskSp);
          list.appendChild(timeLeftToEnd);
          list.appendChild(editBtn);
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
        let editBtn = document.createElement("button");
        let checkBoxInp = document.createElement("input");
        let timeLeftToEnd = document.createElement("span")
        checkBoxInp.setAttribute("type","checkbox");
        
        if(task.status === "Uncompleted"){
          timeLeftToEnd.innerText = "End date of the task: " +task.dateToEnd;
        taskSp.innerText = task.theTask;
        taskSp.innerText = task.theTask;
        deleteBtn.innerText = "Delete";
        deleteBtn.style.color = "red";

        editBtn.innerText = "Edit";
        editBtn.style.color = "blue"

        deleteBtn.addEventListener("click", () => {
          this.deleteTask(task.id);
        });
        editBtn.addEventListener("click",()=>{
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

        checkBoxInp?.addEventListener("click",()=>{
          if(taskSp.classList.contains("checked")){
            task.status="Uncompleted";
            taskSp.classList.remove("checked")
            addItemToLocalStorage("task-list",JSON.stringify(this.TaskManager));
            if(this.checkIfTheDateValid(task.dateToEnd)) {
              timeLeftToEnd.classList.add("redNotice");
             }
          }else{
            task.status="Completed";
            taskSp.classList.add("checked")
            addItemToLocalStorage("task-list",JSON.stringify(this.TaskManager));
            timeLeftToEnd.classList.remove("redNotice");
          }
        })

        

        timeLeftToEnd.innerText = "End date of the task: " + task.dateToEnd.toString();
        taskSp.innerText = task.theTask;

        
         if(this.checkIfTheDateValid(task.dateToEnd)) {
          timeLeftToEnd.classList.add("redNotice");
         }
        

        list.appendChild(checkBoxInp);
        list.appendChild(taskSp);
        list.appendChild(timeLeftToEnd);
        list.appendChild(editBtn);
        list.appendChild(deleteBtn);

        TASK_LIST.appendChild(list);
      }
      });
    }
  }


  addTask(task) {
    let val = TASK_INP.value.trim();
   
    if (val && DATE_END_TASK.value) {
      let date = new Date(DATE_END_TASK.value);
      const day = date.getDate();
      const month = date.getMonth()+1;
      const year = date.getFullYear();
      task.id = this.taskCounter;
      
      task.dateToEnd=DATE_END_TASK.value;
      this.taskCounter += 1;
      this.TaskManager.push(task);
    }
    addItemToLocalStorage("task-list",JSON.stringify(this.TaskManager));
  }

  deleteTask(id) {
    let i=0;
    this.TaskManager.splice(id, 1);
    if(this.taskCounter>0)
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
  checkIfTheDateValid(taskDateToEnd) {
    const inpDate = new Date(taskDateToEnd);
    const currDate = new Date();
    

    const day1 = inpDate.getDate();
    const month1 = inpDate.getMonth()+1;
    const year1 = inpDate.getFullYear();

    const day2 = currDate.getDate();
    const month2 = currDate.getMonth()+1;
    const year2 = currDate.getFullYear(); 
   

    if(year2>year1)
      return true;
    else if(year2===year1){
      if(month2>month1)
      return true;
    else if(month2===month1){
      if(day2>day1)
    return true;
    else if(day2===day1)
      return false;
    }
    }else return false
      
  
}
}

export default TaskManager;
