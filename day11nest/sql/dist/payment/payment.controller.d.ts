import { PaymentService } from './payment.service';
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    cartpage(res: any): any;
    getPayment(res: any, cartID: any): Promise<any>;
    createCart(body: any): any;
}
