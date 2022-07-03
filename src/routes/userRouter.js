import { getUser} from "../controllers/userController.js";
import { Router } from "express";

const router = Router();

router.get('/', getUser);

export default router;