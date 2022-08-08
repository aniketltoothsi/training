import { Cart } from "src/cart/interfaces/cart.interface";
export declare class CreatePaymentDTO {
    readonly price: number;
    readonly status: ['NEW', 'COMPLETED'];
    readonly shippingAddress: string;
    readonly cart: Cart;
    readonly createdAt: Date;
}
