import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/product1/entities/Product';
import { User } from 'src/users/entities/User';
import { Repository } from 'typeorm';
import { Cart } from './entities/Cart';

@Injectable()
export class CartService {

    constructor(
        @InjectRepository(Cart)
        private cartsRepository: Repository<Cart>,
      ) {}
    
      async findOne(userName: string): Promise<Cart[] | undefined> {
        const cart : Cart[]= await this.cartsRepository.find({relations:["user"],where: {user: {username: userName}}});
        return cart;
      }
    
      async createOne(cart: Cart): Promise<Cart | undefined> {
        const created = this.cartsRepository.create(cart);
        return this.cartsRepository.save(created);
      }


}




