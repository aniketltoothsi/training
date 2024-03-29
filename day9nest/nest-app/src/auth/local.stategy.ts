import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { Strategy } from "passport-local";
import { unlinkSync } from "fs";

@Injectable()
export class LocalStategy extends PassportStrategy(Strategy) {
    constructor(private authService : AuthService) {
        super();
    }
    async validate(username: string,password:string) : Promise<any>{
        const user= await this.authService.validateUser(username,password);

        if(!user){
            throw new UnauthorizedException();
        }
        return user;
    }
}