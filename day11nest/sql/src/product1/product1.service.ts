import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDto } from 'nestjs-keyset-paginator/dist';
import { take } from 'rxjs';
import { Repository } from 'typeorm';
import { Product } from './entities/Product';

@Injectable()
export class Product1Service {

    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
      ) {}

      async showAll() {
        //return await this.productRepository.find();
        
        const [result,total] =await this.productRepository.findAndCount(
             {
                take: 20,
    
             }
        );
        
        return {
            data: result,
            count:total
        };
      }
      
      async showByCart(cartid: string){
       //return await this.productRepository.find({where:{cartId: id}});
       
       const cart : Product[]= await this.productRepository.find({relations:["cart"]});

       return cart;
      }

       

      async create(data: Product) {
        const user = this.productRepository.create(data);
        await this.productRepository.save(data);
        return user;
      }


      async read(id: string) {
        return await this.productRepository.findOne({ where: { id: id } });
      }

      async update(id: string, data: Partial<Product>) {
        await this.productRepository.update({ id }, data);
        return await this.productRepository.findOne({ id });
      }

      async destroy(id: string) {
        await this.productRepository.delete({ id });
        return { deleted: true };
      }
}
