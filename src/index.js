import express, { application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/authRouter.js"

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use(authRouter);

const PORT = process.env.PORT || 5001
app.listen(PORT, ()=> console.log('Servidor está rodando na porta 5000'))

