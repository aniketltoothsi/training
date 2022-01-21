import { AuthService } from "./auth.service";
import { Strategy } from "passport-local";
declare const LocalStategy_base: new (...args: any[]) => Strategy;
export declare class LocalStategy extends LocalStategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(username: string, password: string): Promise<any>;
}
export {};
