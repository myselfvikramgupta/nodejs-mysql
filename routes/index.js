import express from "express";
const router = express.Router();
import { userController } from "../controller";
router.get("/", userController.getAllUsers);
router.post("/user-save", userController.saveUsers);
export default router;
