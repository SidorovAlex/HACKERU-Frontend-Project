import Task from "./models/taskModel.js";
import TaskManager from "../src/models/taskManagerModel.js";
import {
  ADD_TASK,
  TASK_INP,
  TASK_LIST,
  DELETE_TASK,
} from "../src/models/DOMModel.js";

let taskManager = new TaskManager();

ADD_TASK?.addEventListener("click", () => {
  let task = new Task();
  task.theTask = TASK_INP.value;
  task.timeLeftToDo = 28;
  taskManager.addTask(task);
  taskManager.showTasks();
});
