import express from 'express';
import dotenv from 'dotenv';
import { DBconn } from './db/db-conn.js';
dotenv.config();
const PORT = process.env.PORT || 30001;
const app = express();
DBconn() ;


app.listen((PORT), ()=>{
    console.log(`port is running on ${PORT}`)
})