import express from "express";
const router = express.Router();
import  {getAllUsers}  from "../controller/userController";
router.get("/users/get-all-users", getAllUsers);
//router.post("/users/save", userController.saveUsers);
export default router;
