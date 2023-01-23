import { QueryResult } from "pg";
import { connection } from "../configs/database.js";
import { Book, BookUpadate } from "../protocols.js";

export async function allBooks(genre : string) : Promise<QueryResult<Book>>{
   if(genre){
      return await connection.query(`
      SELECT * FROM books WHERE genre = $1
   `, [genre]);
   } else {
      return await connection.query(`
   SELECT * FROM books 
   ORDER BY id DESC;`);

   }
}

export async function newBook(bodyBook : Book) : Promise<void>{
   await connection.query(`
      INSERT INTO 
      books (title, author, genre, status) 
      VALUES ($1, $2, $3, $4)
      RETURNING id`,
      [bodyBook.title, bodyBook.author, bodyBook.genre, bodyBook.status]);
}

export async function updateBookStarted(bodyUpdate : BookUpadate, id : string) : Promise<void>{
   await connection.query(`
      UPDATE books 
      SET "status" = 'reading', "startedIn" = NOW() 
      WHERE id = $1`,
   [id]);
}

export async function updateBookFinished(id : string) : Promise<void>{
   await connection.query(`
      UPDATE books 
      SET "status" = 'finished', "finishedIn" = NOW() 
      WHERE id = $1`,
   [id]);
}

export async function deleteOneBook(id : string){
   await connection.query(`
   DELETE FROM books 
   WHERE id = $1`,
   [id]);
}