import express from "express";
import http from "http";
import { Server } from "socket.io";
import taskRoutes from "./routes/taskRoutes.js";
import dotenv from "dotenv";
import connectDb from "./utils/db.js";
import cors from "cors";

dotenv.config();

connectDb();

const app = express();
const port = process.env.PORT || 1111;

app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST"],
  },
});

export { io };

app.use(taskRoutes);

// Handle Socket.IO connections
io.on("connection", (socket) => {
  console.log("A user connected");

  // Handle task update events
  socket.on("taskUpdate", () => {
    // Emit updated tasks to all connected clients
    io.emit("taskUpdate");
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

server.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
