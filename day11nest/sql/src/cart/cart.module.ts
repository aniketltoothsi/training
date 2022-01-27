import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { Cart } from './entities/Cart';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product1Service } from 'src/product1/product1.service';
import { Product1Module } from 'src/product1/product1.module';
import { Product1Controller } from 'src/product1/product1.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Cart]),Product1Module],
  providers: [CartService],
  controllers: [CartController]
})
export class CartModule {}
