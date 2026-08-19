import type { RegisterUserDTO, UpdateUserDTO } from "../../dto/User.dto.js";
import type { IUser } from "../../models/User.js";
import type { IUserRepository } from "../interfaces/IUserRepository.js";

export class UserRepository implements IUserRepository
{
    constructor(private usermodel:typeof User)
    {
        this.usermodel=usermodel;
    }
    create(data: RegisterUserDTO): Promise<IUser> {
        return this.usermodel.create(data);
    }
    findById(id: string): Promise<IUser | null> {
        return this.usermodel.findById(id);
    }
    findByEmail(email: string): Promise<IUser> {
        return this.usermodel.findOne({email})
    }
    updateUser(id: string, data: UpdateUserDTO): Promise<IUser> {
        return this.usermodel.findByIdAndUpdate(id,data,{new:true})
    }
    findUsers(): Promise<IUser[]> {
        return this.usermodel.find();
    }
}