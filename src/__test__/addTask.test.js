import AddTaskMethod from '../modules/addTask.js';

describe('Add task testing', () => {
  test('Test if Localdata have an element', () => {
    expect(AddTaskMethod('jesus', [])).toHaveLength(1);
  });

  test('Test if Localdata have description', () => {
    const description = 'jesus';
    const taskarr = {
      index: 1,
      description,
      check: false,
    };
    expect(AddTaskMethod(description, [])).toContainEqual(taskarr);
  });
});