class Task {
  id;
  theTask;
  timeLeftToDo;
  status;

  constructor(theTask, timeLeftToDo, status) {
    this.theTask = theTask;
    this.timeLeftToDo = timeLeftToDo;
    this.status = "undefined";
  }
}

export default Task;
