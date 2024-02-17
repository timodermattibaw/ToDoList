import express from "express";
import {
  get,
  list,
  create,
  update,
  remove,
} from "../controller/taskController.js";

const router = express.Router();

router.get("/", list);
router.get("/:id", get);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

export default router;
