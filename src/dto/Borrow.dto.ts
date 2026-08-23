export interface CreateBorrowDTO{
    userId:string;
    bookId:string;
    borrowedAt:Date;
    dueDate:Date;
    returnedAt:Date;
    status:"BORROWED"|"RETURNED";
    
}