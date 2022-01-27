import { Model } from 'mongoose';
import { createUserDTO } from './dto/user.dto';
import { User } from './interfaces/user.interface';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    getUsers(): Promise<User[]>;
    getUser(username: string): Promise<User>;
    createUser(createUserDTO: createUserDTO): Promise<User>;
    deleteUser(userID: any): Promise<any>;
    updateUser(userID: string, createUserDTO: createUserDTO): Promise<User>;
}
