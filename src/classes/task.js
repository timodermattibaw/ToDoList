import { v4 as uuidv4 } from "uuid";

export default class Task {
  constructor(title, status) {
    this.id = uuidv4();
    this.title = title;
    this.status = status;
  }
}
