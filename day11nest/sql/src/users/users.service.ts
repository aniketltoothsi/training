import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/User';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    public usersRepository: Repository<User>,
  ) {}

  async findOne(userName: string): Promise<User | undefined> {
    const findUser = await this.usersRepository.findOne({
      username: userName
    });
    if (!findUser) {
      throw new NotFoundException('User not found');
    }
    return findUser;
  }

  async createOne(user: User): Promise<User | undefined> {
    const created = this.usersRepository.create(user);
    return this.usersRepository.save(created);
  }
}
