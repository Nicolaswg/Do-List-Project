export default class Task {
  constructor(description, index) {
    this.index = index + 1;
    this.description = description;
    this.check = false;
  }
}
