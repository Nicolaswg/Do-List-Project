import { StoreTask, GetLocalTask } from './localStorage.js';

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

export default CheckTask;