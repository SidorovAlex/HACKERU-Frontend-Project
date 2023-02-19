const taskInput = document.querySelector(".task-input");
const taskVal = document.querySelector(".tsInput");
const taskList = document.querySelector(".task-list");

let tasks = JSON.parse(localStorage.getItem("task-list"));

function showTasks() {
  let li = "";
  if (tasks) {
    tasks.forEach((task, id) => {
      li += `<li id="task" class="d-flex"></li>
            <label for="${id}" class="d-flex">
              <input type="checkbox" id="${id}" />
              <p>${task.name}</p>
            </label>
            <div class="tast-options">
              <span class="cursor">Delete</span>
              <span class="cursor">Edite</span>
            </div>
          </li>`;
    });
  }

  taskList.innerHTML = li;
}

taskInput.addEventListener("keyup", (e) => {
  const value = taskVal.value.trim();
  if (e.key === "Enter" && value) {
    if (!tasks) tasks = [];
    taskVal.value = [];
    let taskClass = { name: value, status: "pending" };
    tasks.push(taskClass);
    localStorage.setItem("task-list", JSON.stringify(tasks));
    showTasks();
  }
});
