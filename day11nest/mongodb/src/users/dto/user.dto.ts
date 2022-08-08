import { Role } from "../entities/role.enum";

export class createUserDTO{
    readonly name: string;
    readonly username: string;
    readonly password: string;
    readonly role: ['USER','ADMIN'];
    readonly createdAt: Date;
}