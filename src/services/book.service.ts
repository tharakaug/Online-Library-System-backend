import Book from "../model/book.model";
import { BookDTO } from "../dto/book.dto";

export const createBook = async (data: {
    image: string | null;
    totalCopies: any;
    author: any;
    isbn: any;
    availableCopies: any;
    publishedYear: any;
    title: any;
    category: any
}) => {
    return await Book.create(data);
};

export const getAllBooks = async () => {
    return await Book.find();
};

export const getBookById = async (id: string) => {
    return await Book.findById(id);
};

export const updateBook = async (id: string, data: Partial<BookDTO>) => {
    return await Book.findByIdAndUpdate(id, data, { new: true });
};

export const deleteBook = async (id: string) => {
    return await Book.findByIdAndDelete(id);
};
