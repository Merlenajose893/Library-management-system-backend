import mongoose from "mongoose";

export interface IBook{
    title:string;
    author:string;
    category:string;
    isbn:string;
    quantity:number;
    availableQuantity:number;
    createdAt:Date;
    updatedAt:Date;
}

const bookSchema=new mongoose.Schema<IBook>({
title:{
type:String,
required:true
},
author:{
type:String,
required:true
},
category:{
type:String,
required:true
},
isbn:{
type:String,
required:true
},
quantity:{
type:Number,
required:true,
min:0
},
availableQuantity:{
type:Number,
required:true,
min:0
},

},{timestamps:true})

export const Book=mongoose.model<IBook>("Book",bookSchema)