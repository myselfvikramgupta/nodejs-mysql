import express from "express";
const router = express.Router();
import  {userController}  from "../controller";
router.get("/users/get-all-users", userController.getAllUsers);
router.post("/users/save", userController.saveUsers);
export default router;
