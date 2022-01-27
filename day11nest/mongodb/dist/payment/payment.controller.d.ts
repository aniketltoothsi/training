import { CreatePaymentDTO } from './dto/payment.dto';
import { PaymentService } from './payment.service';
export declare class PaymentController {
    private paymentService;
    constructor(paymentService: PaymentService);
    createPayment(res: any, createPaymentDTO: CreatePaymentDTO): Promise<any>;
    getPayments(res: any): Promise<any>;
    getPayment(res: any, paymentID: any): Promise<any>;
    deletePayment(res: any, paymentID: any): Promise<any>;
    updatePayment(res: any, createPaymentDTO: CreatePaymentDTO, paymentID: any): Promise<any>;
}
