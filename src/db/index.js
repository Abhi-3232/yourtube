import dotenv from 'dotenv'
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

dotenv.config({
    path : './env'
})

export const connectDB = async() => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB is connected !! DB Host : ${connectionInstance.connection.host}`)
    }catch(error){
        console.log(`MongoDB Connection Error : ${error}`)
        process.exit(1)
    }
}