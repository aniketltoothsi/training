/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { AppService } from './app.service';
import { InputDto } from './input.dto';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/string')
  create(@Body() inputString: InputDto ){
     console.log(inputString);
     let s =inputString.text;
     let n=inputString.n;
     return this.appService.stringRotation(s,n);
  }
}

