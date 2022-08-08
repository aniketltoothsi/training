import { Model } from 'mongoose';
import { CreatePaymentDTO } from './dto/payment.dto';
import { Payment } from './interfaces/payment.interface';
export declare class PaymentService {
    private readonly paymentModel;
    constructor(paymentModel: Model<Payment>);
    getPayments(): Promise<Payment[]>;
    getpayment(paymentId: string): Promise<Payment>;
    createPayment(createpaymentDTO: CreatePaymentDTO): Promise<Payment>;
    deletepayment(paymentID: any): Promise<any>;
    updatePayment(paymentID: string, createpaymentDTO: CreatePaymentDTO): Promise<Payment>;
}
