import Task from '../src/modules/task.js';

const RemoveTask = (description) => {
  Task.arrTask = Task.arrTask.filter((task) => task.description !== description);
  Task.arrTask.pop();
};

export default RemoveTask;