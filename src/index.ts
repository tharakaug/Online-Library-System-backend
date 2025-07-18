

// // index.ts
// import app from "./app";
//
// // 1. Define the application port
// const port = 3000;
//
// // 2. Instructs the express app to listen on port 3000
// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`)
// });

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import bookRoutes from './routes/bookRoutes';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI!).then(() => console.log('MongoDB Connected ✅'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);

app.listen(process.env.PORT || 5000, () => console.log('Server running ✅'));
