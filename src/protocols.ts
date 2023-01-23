export type Book = {
    title: string,
    author: string,
    genre: string,
    status: string,
    startedIn?: string,
    finishedIn?: string
}

export type BookUpadate ={
    status: string
}

export type Genre = {
    genre: string
}