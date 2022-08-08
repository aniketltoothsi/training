import { Repository } from 'typeorm';
import { Payment } from './entities/Payment';
export declare class PaymentService {
    paymentRepository: Repository<Payment>;
    constructor(paymentRepository: Repository<Payment>);
    createOne(payment: Payment): Promise<Payment | undefined>;
    findOne(cartID: string): Promise<Payment[] | undefined>;
    findAll(): Promise<Payment[]>;
}
