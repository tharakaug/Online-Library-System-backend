import Borrow from '../model/Borrow';
import Book from '../model/Book';
import { Request, Response } from 'express';

// Borrow a Book
export const borrowBook = async (req: Request, res: Response) => {
    const { bookId } = req.body;
    const userId = (req as any).user.id;

    const book = await Book.findById(bookId);
    if (!book || !book.available) return res.status(400).json({ error: 'Book not available' });

    book.available = false;
    await book.save();

    const borrow = await Borrow.create({ user: userId, book: bookId });
    res.status(201).json(borrow);
};

// Return a Book
export const returnBook = async (req: Request, res: Response) => {
    const { borrowId } = req.params;
    const borrow = await Borrow.findById(borrowId).populate('book');
    if (!borrow) return res.status(404).json({ error: 'Borrow record not found' });

    borrow.returnDate = new Date();
    await borrow.save();

    const book = await Book.findById(borrow.book._id);
    if (book) {
        book.available = true;
        await book.save();
    }

    res.json({ message: 'Book returned successfully' });
};

// Get Borrowed Books by User
export const listBorrowedBooks = async (req: Request, res: Response) => {
    const userId = (req as any).user.id;
    const borrowed = await Borrow.find({ user: userId }).populate('book');
    res.json(borrowed);
};
