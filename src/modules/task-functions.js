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

const AddTaskMethod = (input, data) => {
  const description = input.value.toString();
  const newTask = new Task(description, data.length);
  if (description !== '') {
    data.push(newTask);
    StoreTask(JSON.stringify(data));
  }
};

const RemoveTask = (index, container) => {
  const data = GetLocalTask();
  const dataIndex = data.indexOf(data[index]);
  data.splice(dataIndex, 1);
  data.forEach((d, index) => { d.index = index + 1; });
  StoreTask(JSON.stringify(data));
  if (data.length === 0) {
    container.innerHTML = 'no task added';
  }
};

const EditTask = (data, index, e) => {
  const parent = e.target.parentElement.previousSibling;
  const description = parent.lastChild;
  const value = prompt('coloca un valor');
  if (value !== null && value !== '') {
    description.innerText = value;
    data[index].description = value;
    StoreTask(JSON.stringify(data));
  }
};

const DisplayTask = (container, data) => {
  if (data.length === 0) {
    container.innerHTML = 'no task added';
  } else {
    let newLiTag = '';
    data.map((e, i) => {
      newLiTag += `<li class="task"><div class="item-description"><input type="checkbox" name="check" class="check"><p class="description">${data[i].description}</p></div><div class="list-icons"><i class="fas fa-trash remove"></i><i class="fas fa-pen edit"></i></div></li>`;
      container.innerHTML = newLiTag;
      const removeBtn = document.querySelectorAll('i.remove');
      removeBtn.forEach((e, index) => {
        removeBtn[index].addEventListener('click', (e) => {
          e.target.parentElement.parentElement.remove();
          RemoveTask(index, container);
        });
      });
      return data;
    });
    const editBtn = document.querySelectorAll('i.edit');
    editBtn.forEach((e, index) => {
      editBtn[index].addEventListener('click', (e) => {
        EditTask(data, index, e);
      });
    });
  }
};

export {
  GetLocalTask, DisplayTask, AddTaskMethod,
};
