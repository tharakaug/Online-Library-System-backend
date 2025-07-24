import { Router } from "express";
import * as borrowController from "../controllers/borrowController";

const router = Router();

router.post("/", borrowController.borrowBook);
router.put("/:id/return", borrowController.returnBook);
router.get("/", borrowController.getAllBorrows);

export default router;
