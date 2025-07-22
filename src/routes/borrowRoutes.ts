import express from 'express';
import { borrowBook, returnBook, listBorrowedBooks } from '../controllers/borrowController';
import { verifyToken } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/borrow', verifyToken, borrowBook);
router.put('/return/:borrowId', verifyToken, returnBook);
router.get('/my-borrows', verifyToken, listBorrowedBooks);

export default router;
