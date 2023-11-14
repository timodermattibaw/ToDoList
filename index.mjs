import express from "express";
import taskRoutes from "./routes/taskRoutes.mjs";

const app = express();
const PORT = 1111;

app.use(express.json());

app.use("/task", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
