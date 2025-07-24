import { Request, Response } from "express";
import * as borrowService from "../services/borrow.service";

export const borrowBook = async (req: Request, res: Response) => {
    try {
        const result = await borrowService.borrowBook(req.body);
        res.status(201).json(result);
    } catch (err) {
        const error = err as Error;
        res.status(500).json({ error: error.message });
    }
};

export const returnBook = async (req: Request, res: Response) => {
    try {
        const result = await borrowService.returnBook(req.params.id);
        res.json({ message: "Book returned successfully", result });
    } catch (err) {
        const error = err as Error;
        res.status(500).json({ error: error.message });
    }
};

export const getAllBorrows = async (_req: Request, res: Response) => {
    try {
        const borrows = await borrowService.getAllBorrows();
        res.json(borrows);
    } catch (err) {
        const error = err as Error;
        res.status(500).json({ error: error.message });
    }
};
