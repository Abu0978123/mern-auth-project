import express from 'express';
import dotenv from 'dotenv';
import { DBconn } from './db/db-conn.js';
dotenv.config();
const PORT = process.env.PORT || 30001;
import useRouter from './routes/user.route.js'
const app = express();
DBconn() ;
app.use(express.json());

app.listen((PORT), ()=>{
    console.log(`port is running on ${PORT}`)
})

app.use('/api/user', useRouter)
