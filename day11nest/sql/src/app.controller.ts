import { Body, Controller, Get,Post, Req, Request,UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  //constructor(private readonly appService: AppService) {}
  constructor(private readonly usersService: UsersService) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req):any {
    return {msg:'Logged in!'};
  }
  
  @UseGuards(AuthenticatedGuard)
  @Get('hello')
  getHello(@Request() req): string {
    return "Hello";
  }

  @Post('signup')
  signup(@Body() body): any {
    const newUser=this.usersService.createOne(body);
    return{msg:`${newUser} signed up`}
  }

  @Get('logout')
  logout(@Request() req) : any {
    req.logOut();
    return {msg:'User Logged Out!'}
  }
}
