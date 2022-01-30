import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { ProductController } from './product/product.controller';
import { ProductModule } from './product/product.module';
import { ProductService } from './product/product.service';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './users/roles.guard';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { CartModule } from './cart/cart.module';
import { PaymentModule } from './payment/payment.module';
import { join } from 'path/posix';
import { ServeStaticModule } from '@nestjs/serve-static';
@Module({
  imports: [UsersModule, AuthModule,ProductModule,PaymentModule,
    MongooseModule.forRoot('mongodb://localhost/nest', {
      useNewUrlParser: true
    }),
    CartModule,
    PaymentModule],
  controllers: [AppController],
  providers: [AppService,{
    provide: APP_GUARD,
    useClass: RolesGuard,
  }],
})
export class AppModule {}
