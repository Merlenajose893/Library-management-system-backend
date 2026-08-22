import type { NextFunction, Request,Response } from "express";
import type { IBookService } from "../services/interfaces/IBookService.js";

export class BookController{
    constructor(private bookservice:IBookService)
    {

    }
    createBook=async (req:Request,res:Response,next:NextFunction) => {
        try {
            const data=await this.bookservice.createBook(req.body);
            return res.status(201).json(data)
        } catch (error) {
            next(error)
        }
    }

    getBooksById=async (req:Request,res:Response,next:NextFunction) => {
        try {
            const bookId=req.params.id;
            const data=await this.bookservice.getBooksById(bookId);
            return res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
    getBooks=async (req:Request,res:Response,next:NextFunction) => {
        try {
            const data=await this.bookservice.getBooks();
            return res.status(200).json(data);
        } catch (error) {
            next(error)
        }
    }

    updateBook=async (req:Request,res:Response,next:NextFunction) => {
        try {
            const bookId=req.params.id;
            const data=await this.bookservice.updateBook(bookId,req.body);
            return res.status(200).json(data);
        } catch (error) {
            next(error)
        }
    }

    deleteBook=async (req:Request,res:Response,next:NextFunction) => {
        try {
            const bookId=req.params.id;
            const data=await this.bookservice.deleteBook(bookId);
            return res.status(200).json(data);
        } catch (error) {
            next(error)
        }
    }


}