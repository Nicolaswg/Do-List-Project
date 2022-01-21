import AddTaskMethod from '../../__mocks__/AddTaskMethod.js';
import CheckTask from '../../__mocks__/CheckTask.js';

describe('Change task status', () => {
  test('Test status complete', () => {
    const newDescription = 'change status';
    AddTaskMethod(newDescription);
    const checkResult = CheckTask(newDescription);
    expect(checkResult[0].check).toBeTruthy();
  });
});
