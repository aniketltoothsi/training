import { Repository } from 'typeorm';
import { User } from './entities/User';
export declare class UsersService {
    usersRepository: Repository<User>;
    constructor(usersRepository: Repository<User>);
    findOne(userName: string): Promise<User | undefined>;
    createOne(user: User): Promise<User | undefined>;
}
