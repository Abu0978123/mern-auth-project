import express from 'express';
import dotenv from 'dotenv';
import { DBconn } from './db/db-conn.js';
dotenv.config();
const PORT = process.env.PORT || 3001;
import useUserRouter from './routes/user.route.js';
import useAuthRouter from './routes/auth.route.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();  
DBconn() ;
app.use(express.json());
app.use(cors())
app.use(cookieParser());


app.listen((PORT), ()=>{
    console.log(`port is running on ${PORT}`)
})

app.use('/api/user', useUserRouter)
app.use('/api/auth', useAuthRouter)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      message,
      statusCode,
    });
  });