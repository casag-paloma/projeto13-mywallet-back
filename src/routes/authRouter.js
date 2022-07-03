import { createUser } from "../controllers/authController.js";
import { Router } from "express";

const router = Router();

router.post('/sign-up', createUser);

export default router;