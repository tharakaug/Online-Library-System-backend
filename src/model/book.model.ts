import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: String,
    isbn: {
        type: String,
        unique: true,
        required: true,
    },
    category: String,
    publishedYear: Number,
    availableCopies: {
        type: Number,
        default: 1,
    },
    totalCopies: {
        type: Number,
        default: 1,
    },
}, { timestamps: true });

const Book = mongoose.model("Book", bookSchema);
export default Book;
