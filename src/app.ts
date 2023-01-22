import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import booksRoutes from "./routes/booksRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(booksRoutes)

app.get("/health", (req: Request, res : Response)=> {
    return res.send("Tudo ok!")
});

const port = process.env.PORT
app.listen( port, () => console.log(`Server ruuning in port: ${port}`))