import type { CreateBookDTO, UpdateBookDTO } from "../../dto/Book.dto.js"
import type { IBook } from "../../models/Books.js"

export interface IBookService{
    createBook(data:CreateBookDTO):Promise<IBook|null>;
    getBooksById(id:string):Promise<IBook|null>;
    getBooks():Promise<IBook[]>;
    updateBook(id:string,data:UpdateBookDTO):Promise<IBook|null>;
    deleteBook(id:string):Promise<void>;
}