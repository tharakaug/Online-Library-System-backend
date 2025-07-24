import {Request, Response} from "express";
import * as userService from "../services/user.service";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users)
    } catch (e) {
        res.status(500).json({error:"Something went wrong!"})
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const email = req.params.id;
        const deleted = await userService.deleteUser(email);
        if (deleted) {
            res.status(200).json({message: "User deleted successfully!"});
        } else {
            res.status(404).json({error: "User not found!"});
        }
    } catch (e) {
        res.status(500).json({error: "Something went wrong!"});
    }
}