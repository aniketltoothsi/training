import { Injectable } from '@nestjs/common';

export type User ={
    id:number;
    name: string;
    username: string;
    password: string;
};



@Injectable()
export class UsersService {
    private readonly users: User[]=[
        {
            id:1,
            name: 'Aniket',
            username: 'aniketl',
            password:'123',
        },
        {
            id:2,
            name: 'Shambhu',
            username: 'shambhug',
            password:'456',

        },
    ];

    async findOne(username: string): Promise<User | undefined>{
        return this.users.find(user => user.username === username);
    }
}
