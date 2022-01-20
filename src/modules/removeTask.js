import { GetLocalTask, StoreTask } from './localStorage.js';

const RemoveTask = (index, container, e) => {
  e.target.parentElement.parentElement.remove();
  const data = GetLocalTask();
  const dataIndex = data.indexOf(data[index]);
  data.splice(dataIndex, 1);
  data.forEach((d, index) => { d.index = index + 1; });
  StoreTask(JSON.stringify(data));
  if (data.length === 0) {
    container.innerHTML = 'no task added';
  }
};

const ClearCompleted = () => {
  const data = GetLocalTask();
  const uncompleted = data.filter((e) => (!e.check));
  data.forEach((d, index) => { d.index = index; });
  StoreTask(JSON.stringify(uncompleted));
};

export { RemoveTask, ClearCompleted };