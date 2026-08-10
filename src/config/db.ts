import mongoose from "mongoose";
import dotenv from "dotenv";
const connectDB=async ():Promise<void>=>{
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("Mongodb connected");
        
    } catch (error) {
        console.error("Mongodb connected",error);
        process.exit(1)
        
    }
}

export default connectDB;