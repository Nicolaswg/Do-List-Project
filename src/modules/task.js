export default class Task {
  static arrTask = [];

  constructor(description, index) {
    this.index = index + 1;
    this.description = description;
    this.check = false;
  }
}
