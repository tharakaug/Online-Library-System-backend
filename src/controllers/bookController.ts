import Book from '../models/Book';
import { Request, Response } from 'express';

export const getBooks = async (req: Request, res: Response) => {
    const books = await Book.find();
    res.json(books);
};

export const addBook = async (req: Request, res: Response) => {
    const book = await Book.create(req.body);
    res.status(201).json(book);
};

export const updateBook = async (req: Request, res: Response) => {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(book);
};

export const deleteBook = async (req: Request, res: Response) => {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: 'Book deleted' });
};
