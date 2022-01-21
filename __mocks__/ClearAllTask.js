import Task from '../src/modules/task.js';

const ClearAllTask = () => {
  const list = Task.arrTask.filter((task) => !task.check);
  return list;
};

export default ClearAllTask;