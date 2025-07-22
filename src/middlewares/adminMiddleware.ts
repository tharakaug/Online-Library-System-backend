import { Request, Response, NextFunction } from 'express';

export const verifyAdmin = (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user;
    if (user?.role !== 'admin') {
        return res.status(403).json({ error: 'Admin access only' });
    }
    next();
};
