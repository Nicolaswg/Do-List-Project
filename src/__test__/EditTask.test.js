import EditTask from '../../__mocks__/EditTask.js';
import AddTaskMethod from '../../__mocks__/AddTaskMethod.js';

describe('Edit task description', () => {
  test('Test edit description', () => {
    const task = 'hello';
    AddTaskMethod(task);
    const editEvent = EditTask(task, 'olleh');
    expect(editEvent[0].description).toBe('olleh');
  });

  test('Test index of task', () => {
    const editEvent = EditTask('hello', 'olleh');
    expect(editEvent[0].index).toBe(1);
  });
});