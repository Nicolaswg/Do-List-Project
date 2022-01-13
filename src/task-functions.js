import Task from './task.js';

function StoreTask(task) {
  return localStorage.setItem('task-list', task);
}

function GetLocalTask() {
  let localTask = JSON.parse(localStorage.getItem('task'));
  if (!localTask) {
    localTask = [];
    return localTask;
  }
  return localTask;
}

const DisplayTask = (container, data) => {
  if (data.length === 0) {
    container.innerHTML = 'no task added';
  } else {
    let newLiTag = '';
    data.map((e, i) => {
      newLiTag += `<li class="task">
      <div class="item-description">
      <input type="checkbox" name="check" class="check">
      <p class="description">${data[i].description}</p>
      </div>
      <i class="fas fa-trash" class="remove"></i>
  </li>`;
      container.innerHTML = newLiTag;
      return data;
    });
  }
};

const AddTaskMethod = (input, data) => {
  const description = input.value.toString();
  const newTask = new Task(description);
  if (description !== '') {
    data.push(newTask);
    StoreTask(JSON.stringify(data));
    console.log(newTask);
  }
};

export {
  GetLocalTask, DisplayTask, AddTaskMethod,
};
