import { Cart } from 'src/cart/entities/Cart';
export declare class Payment {
    id: number;
    price: number;
    status: string;
    shippingAddress: string;
    createTimestamp: Date;
    cartId: number;
    cart: Cart;
}
