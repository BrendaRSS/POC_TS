import { Request, Response } from "express";
import { Book, BookUpadate, Genre } from "../protocols.js";
import {
    allBooks, 
    newBook, 
    updateBookStarted, 
    updateBookFinished, 
    deleteOneBook
} from "../repositories/bookRepositories.js"

export async function getAllBooks(req: Request, res: Response) : Promise<Response<Book>> {
    const { genre } = req.query as Genre;

    try {
        const books = await allBooks(genre); 
        return res.status(200).send(books.rows);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

export async function postNewBook(req: Request, res: Response) : Promise<Response> {
    const bodyBook = res.locals.bodyBook as Book

    try {
        await newBook(bodyBook);
        return res.sendStatus(201);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

export async function BookStarted(req: Request, res: Response) : Promise<Response> {
    const { id }= req.params;
    const bodyUpdate = res.locals.bodyUpdate as BookUpadate;

    try {
        await updateBookStarted(bodyUpdate, id);
        return res.sendStatus(201);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

export async function BookFinished(req: Request, res: Response) : Promise<Response>{
    const { id } = req.params;
    const bodyUpdate = res.locals.bodyUpdate as BookUpadate;

    try{
        await updateBookFinished(id);
        return res.sendStatus(201);
    } catch (error){
        console.log(error);
        return res.sendStatus(500);
    }
}

export async function deleteBook(req: Request, res: Response) : Promise<Response> {
    const { id } = req.params;

    try{
        await deleteOneBook(id);
        return res.sendStatus(200);
    } catch(error){
        console.log(error);
        return res.sendStatus(500);
    }
}