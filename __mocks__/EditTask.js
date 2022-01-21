import Task from '../src/modules/task.js';

const EditTask = (oldTask, editTask) => {
  Task.arrTask.forEach((task) => {
    if (task.description === oldTask) {
      task.description = editTask;
    }
  });
  return Task.arrTask;
};

export default EditTask;