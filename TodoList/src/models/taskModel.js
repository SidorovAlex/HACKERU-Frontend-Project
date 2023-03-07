class Task {
  id;
  theTask;
  dateToEnd;
  status;

  constructor(theTask, dateToEnd, status) {
    this.theTask = theTask;
    this.dateToEnd = dateToEnd;
    this.status = "Uncompleted";
  }
}

export default Task;
