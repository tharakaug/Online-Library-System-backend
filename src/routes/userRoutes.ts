import {Router} from "express";
import {deleteUser, getAllUsers} from "../controllers/userController";
import {authorizeRoles} from "../middlewares/authMiddleware";

const userRouter :Router = Router();

userRouter.get("/all", authorizeRoles('ADMIN'), getAllUsers)
userRouter.delete("/delete/:id", authorizeRoles('ADMIN'), deleteUser)

export default userRouter;