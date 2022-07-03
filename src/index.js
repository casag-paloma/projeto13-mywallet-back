import express, { application } from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

app.use(express.json);
app.use(cors());

app.listen(5000, ()=> console.log('Servidor está rodando na porta 5000'))

