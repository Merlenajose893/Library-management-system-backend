import type { RegisterUserDTO, UpdateUserDTO } from "../../dto/User.dto.js";
import type { IUser } from "../../models/User.js";

export interface IUserRepository{
    create(data:RegisterUserDTO):Promise<IUser>;
    findById(id:string):Promise<IUser|null>;
    findByEmail(email:string):Promise<IUser>;
    updateUser(id:string,data:UpdateUserDTO):Promise<IUser>;
    findUsers():Promise<IUser[]>;
}