import { v4 as uuidv4 } from "uuid";

export default class Task {
  constructor(name, status) {
    this.id = uuidv4();
    this.name = name;
    this.status = status;
  }
}
