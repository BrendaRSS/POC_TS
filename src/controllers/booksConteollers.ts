import { connection } from "../configs/database.js";
import { Request, Response } from "express";
import { Book, BookUpadate } from "../protocols.js";

export async function getAllBooks(req: Request, res: Response) {
    try {
        const books = await connection.query(`SELECT * FROM books;`);
        return res.status(200).send(books.rows);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

export async function postNewBook(req: Request, res: Response) {
    const bodyBook = res.locals.bodyBook as Book

    try {
        await connection.query(`
            INSERT INTO 
            books (title, author, genre, status) 
            VALUES ($1, $2, $3, $4)
            RETURNING id`,
            [bodyBook.title, bodyBook.author, bodyBook.genre, bodyBook.status]);

        return res.sendStatus(201);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

export async function BookStarted(req: Request, res: Response) {
    const { id }= req.params;
    const bodyUpdate = res.locals.bodyUpdate as BookUpadate;

    try {
        await connection.query(`UPDATE books SET "status" = $1, "startedIn" = NOW() WHERE id = $2`,
        [bodyUpdate.status, id]);

        return res.sendStatus(201);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

export async function deleteBook(req: Request, res: Response) {
    return res.send("delete ok");
}