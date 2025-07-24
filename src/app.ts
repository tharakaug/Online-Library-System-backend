// // // app.ts
// // // import express, {Express, Request, Response} from "express";
// // //
// // // // 1. Initialize the express app
// // // const app: Express = express();
// // //
// // // // 2. Define a simple HTTP GET Request
// // // app.use(express.json());
// // // // app.use(cors()); // Enable/Allow CORS here
// // // const allowedOrigins = [
// // //     "http://localhost:5173"
// // // ];
// // // const corsOptions = {
// // //     origin: (origin: string | undefined,
// // //              callback: (err: Error | null,
// // //                         allow?:boolean) => void) => {
// // //         if (!origin || allowedOrigins.includes(origin)) {
// // //             callback(null, true);
// // //         } else {
// // //             callback(new Error("Not allowed by CORS"));
// // //         }
// // //     }
// // // };
// // //
// // // app.use(cors(corsOptions));
// // // app.use("/api/auth",authRouter)
// // // // 3. Expert the app to use outside (in index.ts)
// // // export default app;
// //
// // import express, {Express, Request, Response} from "express";
// // import cors from "cors";
// // import authRouter from "./routes/authRoutes";
// //
// // const app: Express = express();
// //
// // app.use(express.json());
// // const allowedOrigins = [
// //     "http://localhost:5173"
// // ];
// // const corsOptions = {
// //     origin: (origin: string | undefined,
// //              callback: (err: Error | null,
// //                         allow?:boolean) => void) => {
// //         if (!origin || allowedOrigins.includes(origin)) {
// //             callback(null, true);
// //         } else {
// //             callback(new Error("Not allowed by CORS"));
// //         }
// //     }
// // };
// //
// // app.use(cors(corsOptions));
// // app.use("/api/auth",authRouter)
// //
// // export default app;

import express, {Express} from "express";
import cors from "cors";
import {authenticateToken} from "./middlewares/authMiddleware";
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";

const app :Express = express();

app.use(express.json())
const allowedOrigins = ["http://localhost:3000", "http://localhost:5173"];

const corsOptions = {
    origin: (origin :string | undefined, callback :(err :Error | null, allow? :boolean) => void) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error("Not allowed by CORS"), false);
        }
    }
}
app.use(cors(corsOptions)) // Enable or allow cors

app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/user", authenticateToken, userRoutes)

export default app;