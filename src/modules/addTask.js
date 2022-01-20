import Task from './task.js';
import { StoreTask } from './localStorage.js';

const AddTaskMethod = (description, data) => {
  const newTask = new Task(description, data.length);
  if (description !== '') {
    data.push(newTask);
    StoreTask(JSON.stringify(data));
  }
  return data;
};

export default AddTaskMethod;