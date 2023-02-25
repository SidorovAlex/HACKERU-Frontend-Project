import Task from "./taskModel.js";
import { TASK_LIST, TASK_INP, DELETE_TASK } from "./DOMModel.js";

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
        let spanWithValue = document.createElement("span");
        let spanWithBtn = document.createElement("button");

        spanWithValue.innerText = TASK_INP.value;
        spanWithBtn.innerText = "Delete";
        spanWithBtn.style.color = "red";

        spanWithBtn.addEventListener("click", () => {
          console.log("Asdasd");
          this.deleteTask(task.ida);
        });

        list.appendChild(spanWithValue);
        list.appendChild(spanWithBtn);

        TASK_LIST.appendChild(list);
      });
    }
  }

  addTask(task) {
    let val = TASK_INP.value.trim();
    if (val) {
      this.taskCounter += 1;
      task.id = this.taskCounter;
      this.TaskManager.push(task);
    }
  }
  deleteTask(id) {
    this.TaskManager.splice(id, 1);
    this.showTasks();
  }
  edite() {}
}

export default TaskManager;
