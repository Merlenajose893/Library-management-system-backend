import dotenv from "dotenv"
import express from "express";
import type { Request,Response } from "express";
import  connectDB from "./config/db.js";
const app=express();
connectDB();
app.get("/",(req:Request,res:Response)=>{
    res.send("hello")
})
app.listen(4000,()=>{
    console.log("Server is running");
    
})