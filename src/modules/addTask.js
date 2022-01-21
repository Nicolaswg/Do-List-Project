import Task from './task.js';

const AddTaskMethod = (description, data) => {
  const newTask = new Task(description, data.length);
  if (description !== '') {
    data.push(newTask);
  }
  return data;
};

export default AddTaskMethod;