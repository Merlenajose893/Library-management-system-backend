import type { NextFunction, Request, Response } from "express";
import type { IUserService } from "../services/interfaces/IUserService.js";

export class UserController{
    constructor(private userservice:IUserService)
    {

    }

    registerUser=async (req:Request,res:Response,next:NextFunction) => {
        try {
            const data=await this.userservice.registerUser(req.body);
            return res.status(201).json(data)
        } catch (error) {
            next(error)
        }
    }

    loginUser=async (req:Request,res:Response,next:NextFunction) => {
        try {
            const data=await this.userservice.loginUser(req.body);
            return res.status(200).json(data);
        } catch (error) {
            next(error)
        }
    }
    getAllUsers=async (req:Request,res:Response,next:NextFunction) => {
        try {
            const data=await this.userservice.getUsers();
            return res.status(200).json(data);
        } catch (error) {
            next(error)
        }
    }
    updateUser=async (req:Request,res:Response,next:NextFunction) => {
        try {
            const userId=req.params.id!;
            const data=await this.userservice.updateUser(userId,req.body)
            return res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }


}