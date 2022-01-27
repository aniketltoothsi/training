import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './users/roles.guard';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { User } from './users/entities/User';
import { CartModule } from './cart/cart.module';
import { PaymentModule } from './payment/payment.module';
import { Product1Module } from './product1/product1.module';
import { Product } from './product1/entities/Product';
import { Payment } from './payment/entities/Payment';
import { Cart } from './cart/entities/Cart';


@Module({
  imports: [UsersModule, AuthModule,Product1Module,
    MongooseModule.forRoot('mongodb://localhost/nest', {
      useNewUrlParser: true
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root1234',
      database: 'toothsi_training',
      entities: [User,Product,Payment,Cart],
      synchronize: true,
    }),
    CartModule,
    PaymentModule,
    Product1Module],
  controllers: [AppController],
  providers: [AppService, AuthService,{
    provide: APP_GUARD,
    useClass: RolesGuard,
  }],
})
export class AppModule {
  constructor (private connection: Connection){}
}
