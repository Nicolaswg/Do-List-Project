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

const ClearCompleted = () => {
  const data = GetLocalTask();
  const uncompleted = data.filter((e) => (!e.check));
  data.forEach((d, index) => { d.index = index; });
  StoreTask(JSON.stringify(uncompleted));
};

const EditTask = (data, index, e) => {
  const parent = e.target.parentElement.previousSibling;
  const description = parent.lastChild;
  const value = prompt('Edit selected task');
  if (value !== null && value !== '') {
    description.innerText = value;
    data[index].description = value;
    StoreTask(JSON.stringify(data));
  }
};

const CheckTask = (e, remove, edit, index) => {
  const data = GetLocalTask();
  const parent = e.target.parentElement;
  const check = parent.firstChild;
  if (check.checked) {
    remove[index].classList.toggle('toggle');
    edit[index].classList.toggle('toggle');
    data[index].check = true;
    StoreTask(JSON.stringify(data));
  } else {
    remove[index].classList.toggle('toggle');
    edit[index].classList.toggle('toggle');
    data[index].check = false;
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
      return data;
    });
    const removeBtn = document.querySelectorAll('i.remove');
    removeBtn.forEach((e, index) => {
      removeBtn[index].classList.toggle('toggle');
      removeBtn[index].addEventListener('click', (e) => {
        e.target.parentElement.parentElement.remove();
        RemoveTask(index, container);
      });
    });
    const editBtn = document.querySelectorAll('i.edit');
    editBtn.forEach((e, index) => {
      editBtn[index].addEventListener('click', (e) => {
        EditTask(data, index, e);
      });
    });
    const checkBtn = document.querySelectorAll('.check');
    checkBtn.forEach((e, index) => {
      checkBtn[index].addEventListener('change', (e) => {
        CheckTask(e, removeBtn, editBtn, index);
      });
    });
  }
};
export {
  GetLocalTask, DisplayTask, AddTaskMethod, ClearCompleted,
};