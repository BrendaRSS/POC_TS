import { Router } from "express";
import { getAllBooks, postNewBook, BookStarted, deleteBook } from "../controllers/booksConteollers.js";
import { bookMiddleware } from "../middlewares/bookMiddleware.js";
import { updateBookMiddleware } from "../middlewares/updateBookMiddleware.js";

const router = Router();

router.get("/AllBooks", getAllBooks);

router.post("/NewBook", bookMiddleware, postNewBook);

router.patch("/BookStarted/:id", updateBookMiddleware, BookStarted);

router.delete("/DeleteBook", deleteBook);

export default router;