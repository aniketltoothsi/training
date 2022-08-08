import { CreatePaymentDTO } from './dto/payment.dto';
import { PaymentService } from './payment.service';
export declare class PaymentController {
    private paymentService;
    constructor(paymentService: PaymentService);
    private order;
    makePayment(Res: any, req: any): Promise<void>;
    Render(): {
        abc: any;
    };
    verification(res: any, req: any): Promise<void>;
    createPayment(res: any, createPaymentDTO: CreatePaymentDTO): Promise<any>;
    getPayments(res: any): Promise<any>;
    getPayment(res: any, paymentID: any): Promise<any>;
    deletePayment(res: any, paymentID: any): Promise<any>;
    updatePayment(res: any, createPaymentDTO: CreatePaymentDTO, paymentID: any): Promise<any>;
}
