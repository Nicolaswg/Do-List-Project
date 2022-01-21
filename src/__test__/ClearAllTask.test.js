import AddTaskMethod from '../../__mocks__/AddTaskMethod.js';
import ClearAllTask from '../../__mocks__/ClearAllTask.js';
import CheckTask from '../../__mocks__/CheckTask.js';

describe('Clear all task added', () => {
  test('Test arr legnth', () => {
    const descriptiona = 'Task 1';
    const descriptionb = 'Task 2';
    const descriptionc = 'Task 3';
    const descriptiond = 'Task 4';

    AddTaskMethod(descriptiona);
    AddTaskMethod(descriptionb);
    AddTaskMethod(descriptionc);
    AddTaskMethod(descriptiond);

    CheckTask(descriptiona);
    CheckTask(descriptionb);
    CheckTask(descriptionc);
    CheckTask(descriptiond);

    ClearAllTask();
    expect(ClearAllTask()).toHaveLength(0);
  });
});
