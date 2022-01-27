import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment } from './entities/Payment';

@Injectable()
export class PaymentService {
    constructor(
        @InjectRepository(Payment)
        public paymentRepository: Repository<Payment>,
      ) {}
   
    async createOne(payment: Payment): Promise<Payment | undefined> {
        const created = this.paymentRepository.create(payment);
        return this.paymentRepository.save(created);
      }
    async findOne(cartID: string): Promise<Payment[] | undefined> {
        const cart : Payment[]= await this.paymentRepository.find({relations:["cart"],where: {cart: {id: cartID}}});
        return cart;
      }
    
    async findAll(){
      return this.paymentRepository.find();
    }  


}
