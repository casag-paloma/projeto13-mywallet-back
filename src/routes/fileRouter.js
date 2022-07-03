import { getFiles, createFile} from "../controllers/fileController.js";
import { validateUser } from "../middlewares/validateUser.js";
import { Router } from "express";

const router = Router();

router.get('/', validateUser, getFiles);
router.post('/revenue', createFile);
router.post('/expense', createFile)

export default router;