import type { CreateBookDTO, UpdateBookDTO } from "../../dto/Book.dto.js";
import type { IBook } from "../../models/Books.js";
import type { IBookRepository } from "../interfaces/IBookRepository.js";

export class BookRepository implements IBookRepository{
    constructor(private bookModel:Model<IBook>)
    {

    }
    create(data: CreateBookDTO): Promise<IBook> {
        return this.bookModel.create(data);
    }
    findById(id: string): Promise<IBook | null> {
        return this.bookModel.findById(id);
    }
    findAll(): Promise<IBook[]> {
        return this.bookModel.find();
    }
    update(id: string, data: UpdateBookDTO): Promise<IBook | null> {
        return this.bookModel.findByIdAndUpdate(id,data,{new:true})
    }
    delete(id: string): Promise<void> {
        return this.bookModel.findByIdAndDelete(id)
    }

}