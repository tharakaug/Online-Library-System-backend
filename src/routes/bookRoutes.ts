import express from "express";
import * as bookController from "../controllers/bookController";
import { authenticateToken } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/", authenticateToken, bookController.createBook);
router.get("/", bookController.getBooks);
router.get("/:id", bookController.getBook);
router.put("/:id", authenticateToken, bookController.updateBook);
router.delete("/:id", authenticateToken, bookController.deleteBook);

export default router;
