import { Schema } from "mongoose";
import { Role } from "../entities/role.enum";

export const UserSchema = new Schema({
    name: String,
    username: String,
    password: String,
    role: ['USER','ADMIN'],
    createdAt: { type: Date, default: Date.now }
});