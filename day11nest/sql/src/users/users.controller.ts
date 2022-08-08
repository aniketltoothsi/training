import { Controller, Post, Get, Body, Param, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { User } from './entities/User';
import { UsersService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  // @UseGuards(LocalAuthGuard)
  // @Post('register')
  // craeteUser(@Body() user: User) {
  //   return this.userService.createOne(user);
  // }

//   @Get(':id')
//   findUser(@Param() userName: string,passWord: string) {
//     return this.userService.findOne(userName,passWord);
//   }
// }
}
