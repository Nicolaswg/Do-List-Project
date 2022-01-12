import './style.css';

const listContainer = document.getElementById('list');

const CreatedTask = () => {
  let newLiTag = '';
  const arrTask = [{
    description: 'Hacer ejercicio a las 6 Am',
    completed: true,
    index: 0,
  },
  {
    description: 'Practicar JavaScript',
    completed: true,
    index: 1,
  },
  {
    description: 'Comer me la torta jiji',
    completed: true,
    index: 2,
  }];

  arrTask.map((e, i) => {
    newLiTag += `<li class="task">
    <div class="item-description">
    <input type="checkbox" name="check" id="check">
    <p for="check">${arrTask[i].description}</p>
    </div>
    <i class="fas fa-ellipsis-v"></i>
</li>`;
    listContainer.innerHTML = newLiTag;
    return arrTask;
  });
};

CreatedTask();
