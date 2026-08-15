import type { Types } from "mongoose";
import mongoose, { Schema } from "mongoose";

export interface IBorrow{
    userId:Types.ObjectId;
    bookId:Types.ObjectId;
    borrowedAt:Date;
    dueDate:Date;
    returnedAt:Date;
    status:"BORROWED"|"RETURNED",
    createdAt:Date;
    updatedAt:Date;

}


const borrowSchema=new mongoose.Schema<IBorrow>({
userId:{
type:Schema.Types.ObjectId,
required:true
},
bookId:{
type:Schema.Types.ObjectId,
required:true
},
borrowedAt:{
type:Date,
required:true
},
dueDate:{
type:Date,
required:true
},
status:{
type:String,
enum:["BORROWED","RETURNED"],
required:true
},
returnedAt:{
type:Date
}
},{timestamps:true})

export const Borrow=mongoose.model<IBorrow>("Borrow",borrowSchema)
