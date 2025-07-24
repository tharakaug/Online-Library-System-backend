// import {User} from "../model/User";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";
//
// dotenv.config()
// const JWT_SECRET = process.env.JWT_SECRET as string
// const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET as string
//
// const refreshTokens = new Set();
//
// const adminUser:User ={
//     id:1,
//     username:"admin",
//     password: bcrypt.hashSync("1234",10),
//     role:"admin"
// }
//
// const customerUser:User={
//     id:2,
//     username:"customer",
//     password: bcrypt.hashSync("1234",10),
//     role:"customer"
// }
//
// const userList:User[]=[adminUser,customerUser];
// userList.push(adminUser);
// userList.push(customerUser);
// export const authenticateUser = (username:string,password:string)=>{
//     const existingUser = userList.find(user => user.username === username );
//
//     if (!existingUser || !bcrypt.compareSync(password,existingUser.password)) {
//         return null
//     }
//
//     const accessToken = jwt.sign({
//         id:existingUser.id,
//         username:existingUser.username,
//         role:existingUser.role
//     },JWT_SECRET,{expiresIn:"5m"});
//
//     const refreshToken = jwt.sign({
//         username:existingUser.username
//     },REFRESH_TOKEN_SECRET,{expiresIn:"7d"});
//
//     refreshTokens.add(refreshToken);
//     return {accessToken,refreshToken};
// }

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
import {getUserByEmail} from "./user.service";

dotenv.config();
let JWT_SECRET = process.env.JWT_SECRET as string;
let REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET as string;

const refreshTokens = new Set<string>() ;

export const authenticateUser = async (email: string, password: string) => {

    const user = await getUserByEmail(email);

    let isValidPassword = bcrypt.compareSync(password, user?.password as string);
    if (!user || !isValidPassword) {
        return null;
    }

    const accessToken = jwt.sign({
        id: user.id,
        username: user.username,
        role: user.role
    }, JWT_SECRET, {expiresIn: '1d'})

    const refreshToken = jwt.sign({
        username: user.username
    }, REFRESH_TOKEN_SECRET, {expiresIn: '7d'})

    refreshTokens.add(refreshToken);
    return {
        accessToken,
        refreshToken
    };
}