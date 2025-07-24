export interface BookDTO {
    title: string;
    author?: string;
    isbn: string;
    category?: string;
    publishedYear?: number;
    availableCopies?: number;
    totalCopies?: number;
}
