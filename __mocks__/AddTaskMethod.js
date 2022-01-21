import Task from '../src/modules/task.js';

const AddTaskMethod = (description) => {
  const newTask = new Task(description, Task.arrTask.length);
  Task.arrTask.push(newTask);
  return Task.arrTask;
};

export default AddTaskMethod;