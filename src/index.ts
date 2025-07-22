//
//
// // // index.ts
// // import app from "./app";
// //
// // // 1. Define the application port
// // const port = 3000;
// //
// // // 2. Instructs the express app to listen on port 3000
// // app.listen(port, () => {
// //     console.log(`Server is running at http://localhost:${port}`)
// // });
//
// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import authRoutes from './routes/authRoutes';
// import bookRoutes from './routes/bookRoutes';
// import borrowRoutes from "./routes/borrowRoutes";
// import adminRoutes from './routes/adminRoutes';
// import DBConnection from "./db/DBConnection";
//
// dotenv.config();
// const app = express();
//
// DBConnection().then(result => console.log(result));
//
// app.use(cors());
// app.use(express.json());
//
// mongoose.connect(process.env.MONGO_URI!).then(() => console.log('MongoDB Connected ✅'));
//
// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/books', bookRoutes);
// app.use('/api/borrows', borrowRoutes);
// app.use('/api/admin', adminRoutes);
//
// app.listen(process.env.PORT || 5000, () => console.log('Server running ✅'));

import app from "./app";
import dotenv from "dotenv";
import DBConnection from "./db/DBConnection";

dotenv.config(); // Load the environment
// variables from the file

// 1. Define the application port
const port = process.env.PORT || 3002; //Access the port

DBConnection().then(result => console.log(result))

// 2. Instructs the express app to listen on port 3000
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
});



