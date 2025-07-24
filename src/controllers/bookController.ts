import { Request, Response } from "express";
import * as bookService from "../services/book.service";

export const createBook = async (req: Request, res: Response) => {
    try {
        const book = await bookService.createBook(req.body);
        res.status(201).json(book);
    } catch (err) {
        const error = err as Error;  // type assertion
        res.status(400).json({ error: error.message });  // use 'error.message' here, not 'err.message'
    }
};


export const getBooks = async (_req: Request, res: Response) => {
    const books = await bookService.getAllBooks();
    res.json(books);
};

export const getBook = async (req: Request, res: Response) => {
    const book = await bookService.getBookById(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.json(book);
};

export const updateBook = async (req: Request, res: Response) => {
    const book = await bookService.updateBook(req.params.id, req.body);
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.json(book);
};

export const deleteBook = async (req: Request, res: Response) => {
    const book = await bookService.deleteBook(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.json({ message: "Book deleted successfully" });
};
