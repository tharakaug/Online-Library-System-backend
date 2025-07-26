import express, {Express} from "express";
import cors from "cors";
import {authenticateToken} from "./middlewares/authMiddleware";
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";
import bookRoutes from "./routes/bookRoutes";
import borrowRoutes from "./routes/borrowRoutes";
import adminRoutes from "./routes/adminRoutes";

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
app.use("/api/v1/user", userRoutes)
app.use("/api/v1/book", bookRoutes)
app.use("/api/v1/borrows", borrowRoutes);
app.use('/api/v1/admin', adminRoutes)

export default app;