// import mongoose from 'mongoose';

import mongoose from "mongoose"; 
const DB = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/mernauth";
export const  DBconn = async() => { 
mongoose.connect(DB)
.then(()=> { console.log('DB connected successfully') })
.catch((err)=> {console.log(err)})
}