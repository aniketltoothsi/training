import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    login(req: any): any;
    getHello(req: any): string;
    logout(req: any): any;
}
