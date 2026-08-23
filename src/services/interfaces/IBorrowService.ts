import type { CreateBorrowDTO } from "../../dto/Borrow.dto.js";
import type { IBorrow } from "../../models/Borrows.js";

export interface IBorrowService{
    borrowBook(data:CreateBorrowDTO):Promise<IBorrow>;
    returnBook(borrowId:string):Promise<IBorrow>;
    getMyBorrowings(userId:string):Promise<IBorrow[]>;
    getBorrowById(borrowId:string):Promise<IBorrow>;
    getAllBorrowings():Promise<IBorrow[]>;
}