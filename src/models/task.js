import mongoose from "mongoose";
const { Schema } = mongoose;

export const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("task", taskSchema, "task");
