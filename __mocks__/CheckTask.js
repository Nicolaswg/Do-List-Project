import Task from '../src/modules/task.js';

const editTaskStatus = (description) => {
  Task.arrTask.forEach((task) => {
    if (task.description === description) {
      task.check = true;
    }
  });
  return Task.arrTask;
};

export default editTaskStatus;