import AddTaskMethod from '../modules/addTask.js';

describe('Add task testing', () => {
  test('Test if data is correctly added', () => {
    expect(AddTaskMethod('jesus', [{}])).toHaveLength(1);
  });
});