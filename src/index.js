import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/authRouter.js"
import userRouter from "./routes/userRouter.js"

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use(authRouter);
app.use(userRouter);

const PORT = process.env.PORT || 5001
app.listen(PORT, ()=> console.log('Servidor está rodando na porta 5000'))

