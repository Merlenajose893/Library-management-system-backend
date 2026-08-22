import type { CreateBookDTO, UpdateBookDTO } from "../../dto/Book.dto.js";
import type { IBook } from "../../models/Books.js";
import type { IBookRepository } from "../../repositories/interfaces/IBookRepository.js";
import type { IBookService } from "../interfaces/IBookService.js";

export class BookService implements IBookService{
    constructor(private bookrepository:IBookRepository)
    {

    }
    createBook=async(data: CreateBookDTO): Promise<IBook|null> =>{
        const existingTitle=await this.bookrepository.findByTitle(data.title)
        if(existingTitle)
        {
            throw new Error("Already book exists")
        }
        const newBook=await this.bookrepository.create({
            title:data.title,
            isbn:data.isbn,
            quantity:data.quantity,
            author:data.author,
            category:data.category
        })
        return newBook
    }
    getBooks=async(): Promise<IBook[]>=> {
        return this.bookrepository.findAll();
    }
    updateBook=async(id:string,data: UpdateBookDTO): Promise<IBook | null> =>{
        return this.bookrepository.update(id,data)
    }
    getBooksById=async(id: string): Promise<IBook | null> {
        const book=await this.bookrepository.findById(id)
        return book;
    }
    deleteBook(id: string): Promise<void> {
        return this.bookrepository.delete(id)
    }
}