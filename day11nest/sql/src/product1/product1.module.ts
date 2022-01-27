import { Module } from '@nestjs/common';
import { Product1Service } from './product1.service';
import { cartProduct, Product1Controller } from './product1.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/Product';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [Product1Service],
  controllers: [Product1Controller,cartProduct]
})
export class Product1Module {}
