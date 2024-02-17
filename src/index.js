import express from "express";
import taskRoutes from "./routes/taskRoutes.js";
import dotenv from "dotenv";
import connectDb from "./utils/db.js";
import cors from "cors";

dotenv.config();

connectDb();

const app = express();
const port = process.env.port;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.use("/task", taskRoutes);

app.use(express.static("public"));
