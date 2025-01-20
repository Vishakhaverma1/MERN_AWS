import app from "./app.js";
import Razorpay from "razorpay";
import {dbConnection} from "./database/dbConnection.js";
import dotenv from "dotenv";

dbConnection();
dotenv.config({path : "./config/config.env"});

export const instance = new Razorpay({
  key_id: process.env.key_id,
  key_secret: process.env.key_secret,
});

console.log("RAZORPAY_KEY_ID:", process.env.key_id);
console.log("RAZORPAY_KEY_SECRET:", process.env.key_secret);


app.listen(process.env.PORT,()=>{
    console.log(`Server Running On Port ${process.env.PORT}`);
});