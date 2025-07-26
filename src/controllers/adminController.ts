import { Request, Response } from 'express';
import Book from '../model/book.model';
import User from '../model/user.model';
import {Borrow} from '../model/borrow.model';

export const getAdminStats = async (req: Request, res: Response) => {
    try {
        const totalBooks = await Book.countDocuments();
        const totalUsers = await User.countDocuments();
        const totalBorrows = await Borrow.countDocuments();

        res.json({ totalBooks, totalUsers, totalBorrows });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch stats' });
    }
};
