import User from "../model/user.model";
import {UserDTO} from "../dto/user.dto";
import {RegisterDataDTO} from "../dto/registerdata.dto";
import bcrypt from "bcryptjs";

export async function getAllUsers() {
    return User.find();
}


export const registerUser = async (regData: RegisterDataDTO) => {
    const hashedPassword = bcrypt.hashSync(regData.password, 10); // Properly hash the password

    const user: UserDTO = {
        id: 0,
        email: regData.email,
        username: regData.username,
        password: hashedPassword,
        image: "user-icon.png",
        role: "USER"
    }
    return User.create(user);
}

export const getUserByEmail = async (email: string) => {
    return User.findOne({email: email})
}

export const deleteUser = async (email: string) => {
    console.log(email)
    const deletedUser = await User.findOneAndDelete({ email: email });
    return !!deletedUser;
}