import express from "express";
import * as bookController from "../controllers/bookController";
import { authenticateToken } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/save", bookController.createBook);
router.get("/all", bookController.getBooks);
router.get("/:id", bookController.getBook);
router.put("/update/:id", bookController.updateBook);
router.delete("/delete/:id", bookController.deleteBook);

export default router;


// import express from "express";
// import * as bookController from "../controllers/bookController";
// import { authenticateToken } from "../middlewares/authMiddleware";
// import multer from 'multer';
// import path from 'path';
//
//
// const router = express.Router();
//
// ///////////////////////////////////////////////////////
// //
// // Configure Multer storage
// const storage = multer.diskStorage({
//     destination: 'uploads/',
//     filename: (req, file, cb) => {
//         const uniqueSuffix = Date.now() + '-' + file.originalname;
//         cb(null, uniqueSuffix);
//     },
// });
// const upload = multer({ storage });
//
// //////////////////////////////////////////////////////////
//
// router.post("/save", bookController.createBook);
// router.get("/all", bookController.getBooks);
// router.get("/:id", bookController.getBook);
// router.put("/update/:id", bookController.updateBook);
// router.delete("/delete/:id", bookController.deleteBook);
//
// // // ✅ Image upload route
// router.post('/add', upload.single('image'), bookController.createBook);
// router.put('/update/:id', upload.single('image'), bookController.updateBook);
//
// export default router;
