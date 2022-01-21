import Task from '../modules/task.js';
import AddTaskMethod from '../../_mocks_/AddTaskMethod.js';
import RemoveTask from '../../_mocks_/RemoveTask.js';

describe('Removing task from class task', () => {
  test('Test remove task', () => {
    const description = 'TestTaskB';
    AddTaskMethod(description);
    RemoveTask(description);
    expect(Task.arrTask).toHaveLength(0);
  });
});