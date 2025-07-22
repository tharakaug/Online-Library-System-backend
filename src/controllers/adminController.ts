import Book from '../model/Book';
import User from '../model/User';
import Borrow from '../model/Borrow';
import { Request, Response } from 'express';

export const getAdminStats = async (req: Request, res: Response) => {
    const totalBooks = await Book.countDocuments();
    const totalUsers = await User.countDocuments();
    const totalBorrows = await Borrow.countDocuments();
    res.json({ totalBooks, totalUsers, totalBorrows });
};
