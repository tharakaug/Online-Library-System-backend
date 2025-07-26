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
