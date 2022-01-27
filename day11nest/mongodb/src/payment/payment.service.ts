import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePaymentDTO } from './dto/payment.dto';
import { Payment } from './interfaces/payment.interface';

@Injectable()
export class PaymentService {


    constructor(@InjectModel('Payment') private readonly paymentModel: Model<Payment>) {}
    // Get all payment records
    async getPayments(): Promise<Payment[]> {
        const payments = await this.paymentModel.find();
        return payments;
    }


    // Get a single Payment record
    async getpayment(paymentId: string): Promise<Payment> {
        const payment = await this.paymentModel.findById(paymentId); 
        return payment;
    }




    
    async createPayment(createpaymentDTO: CreatePaymentDTO): Promise<Payment> {
        const newPayment = new this.paymentModel(createpaymentDTO);
        return newPayment.save();
    }

    
    async deletepayment(paymentID): Promise<any> {
        const deletedCart = await this.paymentModel.deleteOne(paymentID);
       
    }

    // Put a single payment
    async updatePayment(paymentID: string, createpaymentDTO: CreatePaymentDTO): Promise<Payment> {
        const updatedCart = await this.paymentModel.findByIdAndUpdate(paymentID, createpaymentDTO, {new: true});
        return updatedCart;
    }
}
