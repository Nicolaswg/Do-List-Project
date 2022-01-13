import './style.css';
import {
  GetLocalTask, DisplayTask, AddTaskMethod,
} from './task-functions.js';

const listContainer = document.getElementById('list');
const addTask = document.getElementById('btn-add');
const inputBox = document.getElementById('task');

const data = GetLocalTask();

addTask.addEventListener('click', () => {
  AddTaskMethod(inputBox, data);
  DisplayTask(listContainer, data);
  inputBox.value = '';
});

inputBox.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    AddTaskMethod(inputBox, data);
    DisplayTask(listContainer, data);
    inputBox.value = '';
  }
});

const newdata = JSON.parse(localStorage.getItem('task-list'));
if (newdata !== null) {
  DisplayTask(listContainer, newdata);
}
