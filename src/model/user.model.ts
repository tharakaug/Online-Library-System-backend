import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    "username": {
        required: true,
        type: String,
    },
    "email": {
        required: true,
        type: String,
        unique: true,
        index: true     // For better performance on queries
    },
    "password": {
        required: true,
        type: String
    },
    "image": {
        type: String
    },
    "role": {
        required: true,
        type: String
    }
})

const User = mongoose.model('user', userModel);
export default User;