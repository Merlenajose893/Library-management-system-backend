import type { CreateBookDTO, UpdateBookDTO } from "../../dto/Book.dto.js";
import type { IBook } from "../../models/Books.js";

export interface IBookRepository{
    create(data:CreateBookDTO):Promise<IBook>;
    findById(id:string):Promise<IBook|null>
    findAll():Promise<IBook[]>;
    findByTitle(title:string):Promise<IBook|null>;
    update(id:string,data:UpdateBookDTO):Promise<IBook|null>
    delete(id:string):Promise<void>;
}