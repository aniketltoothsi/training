import { Controller, Get,Post, Req, Request,UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
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

  @Get('logout')
  logout(@Request() req) : any {
    req.logOut();
    return {msg:'User Logged Out!'}
  }
}
