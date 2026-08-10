import mongoose, { Schema,Document, mongo } from "mongoose";
export interface IUser{
name:string;
email:string;
password:string;
createdAt:Date;
updatedAt:Date;

}

const userSchema=new Schema<IUser>({
name:{
type:String,
required:true
},
email:{
type:String,
required:true
},
password:{
type:String,
required:true
}
},{timestamps:true})

export const User=mongoose.model("User",userSchema)