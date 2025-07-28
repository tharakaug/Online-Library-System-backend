// routes/file.upload.routes.ts
import { Router } from "express";
import { handleUpload } from "../controllers/fileUpload";
import {
    uploadBookImage,
} from "../utils/fileUpload";

const fileUploadRoutes: Router = Router();

fileUploadRoutes.post("/book", uploadBookImage.single("file"), handleUpload);

export default fileUploadRoutes;