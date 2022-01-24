import { AppService } from './app.service';
import { InputDto } from './input.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    create(inputString: InputDto): string;
}
