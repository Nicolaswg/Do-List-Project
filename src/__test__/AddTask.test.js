import AddTaskMethod from '../../__mocks__/AddTaskMethod.js';
import Task from '../modules/task.js';

describe('Adding task to class task', () => {
  test('Test add task', () => {
    const description = 'TestTaskA';
    const result = AddTaskMethod(description);
    expect(result).toHaveLength(1);
  });

  test('Test correct task added', () => {
    expect(Task.arrTask).toContainEqual({
      index: 1,
      description: 'TestTaskA',
      check: false,
    });
  });
});