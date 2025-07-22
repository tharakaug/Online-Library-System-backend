import {Router} from "express";
// import productRoutes from "./product.routes";
import {authenticateUser} from "../controllers/authController";

const authRouter:Router = Router();

authRouter.post("/login",authenticateUser)

export default authRouter