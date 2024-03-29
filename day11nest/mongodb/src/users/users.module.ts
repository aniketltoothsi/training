import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from './schemas/user.schema';
import { UsersService } from './users.service';

@Module({
  imports: [MongooseModule.forFeature([{name: 'User', schema: UserSchema}])],
  controllers:[],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
