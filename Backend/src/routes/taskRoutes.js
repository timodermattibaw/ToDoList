import express from "express";
import {
  get,
  list,
  create,
  update,
  remove,
} from "../controller/taskController.js";

const router = express.Router();

router.get("/task", list);
router.get("/task/:id", get);
router.post("/task", create);
router.put("/task/:id", update);
router.delete("/task/:id", remove);

export default router;
