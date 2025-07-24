import {Request, Response} from 'express';
import * as authService from "../services/auth.service"
import {registerUser} from "../services/user.service";

export const authenticateUser = async (req: Request, res: Response) => {
    try {
        const {email, password} = req.body;

        const authTokens = await authService.authenticateUser(email, password);

        if (!authTokens) {
            res.status(401).json({error: 'Invalid email or password.'});
            return;
        }
        res.status(200).json(authTokens);
    } catch (error) {
        console.error('Authentication error:', error);
        res.status(500).json({error: 'Something went wrong during authentication.'});
    }
}

export const register = async (req: Request, res: Response) => {
    try {
        const registerDataDTO = req.body;
        const user = await registerUser(registerDataDTO);

        res.status(201).json(user)
    } catch (e) {
        res.status(500).json({error: "Something went wrong!"})
    }
}