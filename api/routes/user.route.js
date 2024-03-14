import express from "express";
import {
  deleteUser,
  test,
  updadeUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.put("/update/:userId", verifyToken, updadeUser);
router.delete("/delete/:userId", verifyToken, deleteUser);

export default router;
