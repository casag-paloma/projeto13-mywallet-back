import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/authRouter.js"
import fileRouter from "./routes/fileRouter.js"

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use(authRouter);
app.use(fileRouter);

const PORT = process.env.PORT || 5001
app.listen(PORT, ()=> console.log("Server running on port " + process.env.PORT))

