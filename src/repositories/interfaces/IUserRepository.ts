import type { IUser } from "../../models/User.js";

export interface IUserRepository{
    create(data:IUser):Promise<IUser>;
    findById(id:string):Promise<IUser>;
    findByEmail(email:string):Promise<IUser>;
    updateUser(id:string):Promise<IUser>;
    findUsers():Promise<IUser[]>;
}