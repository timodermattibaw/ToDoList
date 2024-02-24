import mongoose from "mongoose";
import Task from "../models/task.js";

export async function getTasks() {
  return Task.find();
}

export async function getTask(id) {
  return Task.findById(id);
}

export async function createTask(newTask) {
  try {
    return Task.create(newTask);
  } catch (e) {
    console.error(e);
  }
}

export async function updateTask(id, updatedTask) {
  try {
    return Task.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(id) },
      updatedTask,
      {
        new: true,
      }
    );
  } catch (e) {
    console.error(e);
  }
}

export async function removeTask(id) {
  return Task.findByIdAndDelete(id);
}
