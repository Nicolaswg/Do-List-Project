import AddTaskMethod from '../../__mocks__/AddTaskMethod.js';
import Task from '../modules/task.js';

describe('Adding task to array', () => {
  test('Test add task', () => {
    const description = 'New Task';
    const result = AddTaskMethod(description);
    expect(result).toHaveLength(1);
    
  });
});