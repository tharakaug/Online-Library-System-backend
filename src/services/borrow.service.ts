import {Borrow} from "../model/borrow.model";
import { BorrowDTO } from "../dto/borrow.dto";

export const borrowBook = async (data: BorrowDTO) => {
    const borrow = new Borrow(data);
    return await borrow.save();
};

export const returnBook = async (id: string) => {
    return await Borrow.findByIdAndUpdate(id, {
        return_date: new Date(),
    }, { new: true });
};

export const getAllBorrows = async () => {
    return await Borrow.find().populate("user_id").populate("book_id");
};
