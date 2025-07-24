// import {Router} from "express";
// import {authenticateUser} from "../controllers/authController";
//
// const authRouter:Router = Router();
//
// authRouter.post("/login",authenticateUser)
//
// export default authRouter

import {Router} from "express";
import {authenticateUser, register,} from "../controllers/authController";

const authRouter: Router = Router()

authRouter.post("/register", register)
authRouter.post("/login", authenticateUser);


export default authRouter;