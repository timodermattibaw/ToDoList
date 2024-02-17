import fs from "fs";
import Task from "../classes/task.js";

let tasks = JSON.parse(fs.readFileSync("./tasks.json")); //!! PROBABLY CLASSES/TASK.JS, TASKCONTROLLER_OLD, TASKS.JSON CAN BE DELETED.

const save = () => {
  fs.writeFile("./tasks.json", JSON.stringify(tasks, null, 2), (error) => {
    if (error) throw error;
  });
};

export const getTasks = (req, res) => {
  res.json(tasks);
};

export const getTask = (req, res) => {
  const found = tasks.find((e) => e.id == req.params.id);

  found
    ? res.json(found)
    : res.status(400).json({
        success: false,
        message: `No task found with id ${req.params.id}`,
      });
};

export const createTask = (req, res) => {
  const task = new Task(req.body.title, req.body.status);
  tasks.push(task);
  save();
  res.json({ success: true, data: req.body });
};

export const updateTask = (req, res) => {
  let modified = false;
  let newTasks = tasks.map((e) => {
    if (e.id == req.params.id) {
      req.body.id = e.id;
      modified = true;
      return req.body;
    } else {
      return e;
    }
  });

  if (modified) {
    tasks = newTasks;
    save();
    res.json({ success: true, data: tasks });
  } else {
    res.status(400).json({
      success: false,
      message: `No product found with id ${req.params.id}`,
    });
  }
};

export const deleteTask = (req, res) => {
  tasks = tasks.filter((e) => e.id != req.params.id);
  save();
  res.json({ success: true, data: tasks });
};
