import { RpcExceptionFilter } from "@nestjs/common";
import { Document } from "mongoose";
import { Role } from "../entities/role.enum";

export interface User extends Document {
    readonly name: string;
    readonly username: string;
    readonly password: string;
    readonly role: ['USER','ADMIN'];
    readonly createdAt: Date;
}