import { RemoveTask } from './removeTask.js';
import EditTask from './editTask.js';
import CheckTask from './checkTask.js';

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
export default DisplayTask;
