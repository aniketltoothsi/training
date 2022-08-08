import { UsersService } from './users/users.service';
export declare class AppController {
    private readonly usersService;
    constructor(usersService: UsersService);
    login(req: any): any;
    getHello(req: any): string;
    signup(body: any): any;
    logout(req: any): any;
}
