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





// import { Request, Response } from "express";
// import * as bookService from "../services/book.service";
// import multer from "multer";
// export const createBook = async (req: Request, res: Response) => {
//     try {
//         const book = await bookService.createBook(req.body);
//         res.status(201).json(book);
//     } catch (err) {
//         const error = err as Error;  // type assertion
//         res.status(400).json({ error: error.message });  // use 'error.message' here, not 'err.message'
//     }
// };
//
//
// export const getBooks = async (_req: Request, res: Response) => {
//     const books = await bookService.getAllBooks();
//     res.json(books);
// };
//
// export const getBook = async (req: Request, res: Response) => {
//     const book = await bookService.getBookById(req.params.id);
//     if (!book) return res.status(404).json({ error: "Book not found" });
//     res.json(book);
// };
//
// export const updateBook = async (req: Request, res: Response) => {
//     const book = await bookService.updateBook(req.params.id, req.body);
//     if (!book) return res.status(404).json({ error: "Book not found" });
//     res.json(book);
// };
//
// export const deleteBook = async (req: Request, res: Response) => {
//     const book = await bookService.deleteBook(req.params.id);
//     if (!book) return res.status(404).json({ error: "Book not found" });
//     res.json({ message: "Book deleted successfully" });
// };

////////////////////////////////////////////

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "uploads/"); // make sure this folder exists
//     },
//     filename: (req, file, cb) => {
//         cb(null, `${Date.now()}-${file.originalname}`);
//     }
// });

// const upload = multer({ storage });




// import { Request, Response } from "express";
// import * as bookService from "../services/book.service";
// import multer from "multer";
//
// // ✅ Multer Storage Configuration
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "uploads/"); // make sure the 'uploads' folder exists
//     },
//     filename: (req, file, cb) => {
//         cb(null, `${Date.now()}-${file.originalname}`);
//     }
// });
//
// // ✅ Export the configured multer instance
// export const upload = multer({ storage });
//
// // ✅ CREATE Book with Image Upload
// export const createBook = async (req: Request, res: Response) => {
//     try {
//         const {
//             title, author, isbn, category,
//             publishedYear, availableCopies, totalCopies
//         } = req.body;
//
//         const image = req.file ? req.file.filename : null;
//
//         const book = await bookService.createBook({
//             title,
//             author,
//             isbn,
//             category,
//             publishedYear,
//             availableCopies,
//             totalCopies,
//             image,
//         });
//
//         res.status(201).json(book);
//     } catch (err) {
//         const error = err as Error;
//         res.status(400).json({ error: error.message });
//     }
// };
//
// // ✅ GET All Books
// export const getBooks = async (_req: Request, res: Response) => {
//     const books = await bookService.getAllBooks();
//     res.json(books);
// };
//
// // ✅ GET One Book by ID
// export const getBook = async (req: Request, res: Response) => {
//     const book = await bookService.getBookById(req.params.id);
//     if (!book) return res.status(404).json({ error: "Book not found" });
//     res.json(book);
// };
//
// // ✅ UPDATE Book (optional image)
// export const updateBook = async (req: Request, res: Response) => {
//     try {
//         const updateData = {
//             ...req.body,
//             ...(req.file ? { image: req.file.filename } : {})
//         };
//
//         const book = await bookService.updateBook(req.params.id, updateData);
//         if (!book) return res.status(404).json({ error: "Book not found" });
//
//         res.json(book);
//     } catch (err) {
//         const error = err as Error;
//         res.status(400).json({ error: error.message });
//     }
// };
//
// // ✅ DELETE Book
// export const deleteBook = async (req: Request, res: Response) => {
//     const book = await bookService.deleteBook(req.params.id);
//     if (!book) return res.status(404).json({ error: "Book not found" });
//     res.json({ message: "Book deleted successfully" });
// };
