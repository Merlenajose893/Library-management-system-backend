import type { LoginUserDTO, RegisterUserDTO, UpdateUserDTO } from "../../dto/User.dto.js";
import type { IUser } from "../../models/User.js";
import type { IUserRepository } from "../../repositories/interfaces/IUserRepository.js";
import type { IUserService } from "../interfaces/IUserService.js";
import bcrypt from "bcrypt"

export class UserService implements IUserService{
    constructor(private userrepository:IUserRepository)
    {

    }
    registerUser=async(data: RegisterUserDTO): Promise<IUser> {
        const existingUser=await this.userrepository.findByEmail(data.email);
        if(existingUser)
        {
            throw new Error("User Already exists")
        }
        const hashpass=await bcrypt.hash(data.password,12);
        const newUser=await this.userrepository.create({
            name:data.name,
            email:data.email,
            password:hashpass
        })
        return newUser
    }
    loginUser=async(data: LoginUserDTO): Promise<IUser> {
        const existingUser=await this.userrepository.findByEmail(data.email);
        if(!existingUser)
        {
            throw new Error("User not found")
        }
        const comparepass=await bcrypt.compare(data.password,existingUser.password)
        if(!comparepass)
        {
            throw new Error("password dont match")
        }

        return existingUser;
    }
    getUsers=async (): Promise<IUser[]> {
        return this.userrepository.findUsers()
    }
    updateUser=async(id:string,data: UpdateUserDTO): Promise<IUser> {
        return this.userrepository.updateUser(id,data)
        
    }
}