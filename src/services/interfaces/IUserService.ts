import type { LoginUserDTO, RegisterUserDTO, UpdateUserDTO } from "../../dto/User.dto.js";
import type { IUser } from "../../models/User.js";

 export interface IUserService{
    registerUser(data:RegisterUserDTO):Promise<IUser>;
    loginUser(data:LoginUserDTO):Promise<IUser>;
    getUsers():Promise<IUser[]>;
    updateUser(id:string,data:UpdateUserDTO):Promise<IUser>
 }