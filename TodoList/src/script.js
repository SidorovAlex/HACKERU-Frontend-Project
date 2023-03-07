import Task from "./models/taskModel.js";
import TaskManager from "../src/models/taskManagerModel.js";
import { getItemFromLocalStorage } from "./services/localStorageService.js";
import {
  ADD_TASK,
  TASK_INP,
  TASK_LIST,
  SHOW_COMPLETED_TASKS,
  SHOW_UNCOMPLETED_TASKS,
  SHOW_ALL_TASKS,
  CLEAR_ALL_TASKS,
  DATE_END_TASK,
  
} from "../src/models/DOMModel.js";

let taskManager = new TaskManager();
let checkLocalStorage = JSON.parse( localStorage.getItem("task-list"))

if(checkLocalStorage)
  taskManager.setFromLocalStorage(checkLocalStorage,checkLocalStorage.length);

ADD_TASK?.addEventListener("click", () => {
  let task = new Task();
  task.theTask = TASK_INP.value;
  taskManager.addTask(task);
  TASK_INP.value ="";
  DATE_END_TASK.value="";
  taskManager.showTasks();
});

SHOW_COMPLETED_TASKS?.addEventListener("click",()=>{
  taskManager.showOnlyCompleted();
})
SHOW_UNCOMPLETED_TASKS?.addEventListener("click",()=>{
  taskManager.showOnlyUnompleted();
})
SHOW_ALL_TASKS?.addEventListener("click",()=>{
  taskManager.showTasks();
});

CLEAR_ALL_TASKS?.addEventListener("click",()=>{
    taskManager.deleteAllTasks();
})

