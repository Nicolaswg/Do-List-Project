import Task from './task.js';

function StoreTask(task) {
  return localStorage.setItem('task-list', task);
}

function GetLocalTask() {
  let localTask = JSON.parse(localStorage.getItem('task-list'));
  if (!localTask) {
    localTask = [];
    return localTask;
  }
  return localTask;
}

const RemoveTask = (index) => {
  const data = GetLocalTask();
  const dataIndex = data.indexOf(data[index]);
  data.splice(dataIndex, 1);
};

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
      <i class="fas fa-trash remove"></i>
  </li>`;
      container.innerHTML = newLiTag;
      const removeBtn = document.querySelectorAll('i.remove');
      removeBtn.forEach((e, index) => {
        removeBtn[index].addEventListener('click', (e) => {
          e.target.parentElement.remove();
          RemoveTask(index);
        });
      });
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
  }
};

export {
  GetLocalTask, DisplayTask, AddTaskMethod, RemoveTask,
};
