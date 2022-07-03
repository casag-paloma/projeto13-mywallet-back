import { getFiles, createFile} from "../controllers/fileController.js";
import { Router } from "express";

const router = Router();

router.get('/', getFiles);
router.post('/revenue', createFile);
router.post('/expense', createFile)

export default router;