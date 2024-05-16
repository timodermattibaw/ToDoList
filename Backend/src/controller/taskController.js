import {
  createTask,
  removeTask,
  updateTask,
  getTasks,
  getTask,
} from "../services/task.js";
import { io } from "../index.js"; // Import socket.io instance

export const get = async (req, res, next) => {
  try {
    const task = await getTask(req.params.id);
    res.send(task);
  } catch (err) {
    res.send(err);
    console.error(err);
    next();
  }
};

export const list = async (req, res, next) => {
  try {
    const tasks = await getTasks();
    res.send(tasks);
  } catch (err) {
    res.send(err);
    console.error(err);
    next();
  }
};

export const create = async (req, res, next) => {
  try {
    const task = await createTask(req.body);
    io.emit("taskUpdate", task); // Emit event to all connected clients
    res.send(task);
  } catch (err) {
    res.send(err);
    console.error(err);
    next();
  }
};

export const update = async (req, res, next) => {
  try {
    const result = await updateTask(req.params.id, req.body);
    io.emit("taskUpdate", result); // Emit event to all connected clients
    res.send(result);
  } catch (err) {
    res.send(err);
    console.error(err);
    next();
  }
};

export const remove = async (req, res, next) => {
  try {
    const result = await removeTask(req.params.id);
    io.emit("taskUpdate", result); // Emit event to all connected clients
    res.send(result);
  } catch (err) {
    res.send(err);
    console.error(err);
    next();
  }
};
