import { Payment } from 'src/payment/entities/Payment';
import { Product } from 'src/product1/entities/Product';
import { User } from 'src/users/entities/User';
export declare class Cart {
    id: string;
    price: number;
    user: User;
    paymentID: Payment;
    items: Product[];
}
