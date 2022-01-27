import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { ProductModule } from 'src/product/product.module';
import { CartSchema } from './schemas/cart.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[ProductModule,
    MongooseModule.forFeature([{name: 'Cart', schema: CartSchema}])],
  providers: [CartService],
  controllers: [CartController]
})
export class CartModule {}
