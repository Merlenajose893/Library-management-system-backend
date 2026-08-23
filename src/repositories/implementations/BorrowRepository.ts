import type { CreateBorrowDTO } from "../../dto/Borrow.dto.js";
import type { IBorrow } from "../../models/Borrows.js";
import { Model } from "mongoose";
import type { IBorrowRepository } from "../interfaces/IBorrowRepository.js";

export class BorrowRepository implements IBorrowRepository{
    constructor(private borrowmodel:Model<IBorrow>)
    {

    }
    create(data: CreateBorrowDTO): Promise<IBorrow> {
        return this.borrowmodel.create(data);
    }
    update(id: string, data: Partial<IBorrow>): Promise<IBorrow | null> {
        return this.borrowmodel.findByIdAndUpdate(id,data,{new:true});
    }
    findByUserId(userId: string): Promise<IBorrow[]> {
        return this.borrowmodel.findById(userId)
    }
    findActiveBorrow(userId: string, bookId: string): Promise<IBorrow | null> {
        return this.borrowmodel.findOne({userId,bookId,status:"BORROWED"})
    }
    findById(id: string): Promise<IBorrow | null> {
        return this.borrowmodel.findById(id)
    }
    findAll(): Promise<IBorrow[]> {
        return this.borrowmodel.find() 
    }
}