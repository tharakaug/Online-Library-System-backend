import { Router } from "express";
import express from "express";
import * as borrowController from "../controllers/borrowController";

 const router = Router();
// const router = express.Router();

router.post("/", borrowController.borrowBook);
router.put("/:id", borrowController.returnBook);
router.get("/all", borrowController.getAllBorrows);

export default router;
