import mongoose from "mongoose";

const borrowSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    book_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required: true,
    },
    borrow_date: {
        type: Date,
        default: Date.now,
    },
    return_date: {
        type: Date,
        default: null,
    },
});

export const Borrow = mongoose.model("Borrow", borrowSchema);
