import type { CreateBorrowDTO } from "../../dto/Borrow.dto.js";
import type { IBorrow } from "../../models/Borrows.js";

export interface IBorrowRepository{
    create(data:CreateBorrowDTO):Promise<IBorrow>;
    findById(id:string):Promise<IBorrow|null>;
    findActiveBorrow(userId:string,bookId:string):Promise<IBorrow|null>;
    findByUserId(userId:string):Promise<IBorrow[]>;
    findAll():Promise<IBorrow[]>;
    update(id:string,data:Partial<IBorrow>):Promise<IBorrow|null>;
}