import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export default function connect() {
  try {
    return mongoose.connect(process.env.mongo_uri);
  } catch (e) {
    console.error(e);
  }
}
