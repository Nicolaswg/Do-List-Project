import Task from '../modules/task.js';
import AddTaskMethod from '../../__mocks__/AddTaskMethod.js';
import RevomeTask from '../../__mocks__/RemoveTask.js';

describe('Removing task from class task', () => {
  test('Test remove task', () => {
    const description = 'TestTaskB';
    AddTaskMethod(description);
    RevomeTask(description);
    expect(Task.arrTask).toHaveLength(0);
  });
});