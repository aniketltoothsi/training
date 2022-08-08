import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentSchema } from './schemas/payment.schema';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path/posix';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Payment', schema: PaymentSchema}]),
  ],
  providers: [PaymentService],
  controllers: [PaymentController]
})
export class PaymentModule {}
