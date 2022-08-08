import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { Role } from "./entities/role.enum";


@Injectable()
export class RolesGuard implements CanActivate{
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean{
        //required role?
        const requiredRoles =this.reflector.getAllAndOverride<Role[]>('roles',[
            context.getHandler(),
            context.getClass()
        ]);
        if(!requiredRoles){
            return true;
        }
       //check if current user has that role?
       const { user } = context.switchToHttp().getRequest(); 
       // console.log(user);
        return requiredRoles[0]=user.role;
        
    }
}