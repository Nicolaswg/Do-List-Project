const StoreTask = (task) => {
  localStorage.setItem('task-list', task);
};

const GetLocalTask = () => {
  let localTask = JSON.parse(localStorage.getItem('task-list'));
  if (!localTask) {
    localTask = [];
  }
  return localTask;
};

export { StoreTask, GetLocalTask };