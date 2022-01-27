import { Cart } from "src/cart/interfaces/cart.interface";

export interface Payment extends Document {
    readonly price: number ;
    readonly status: ['NEW','COMPLETED'];
    readonly shippingAddress: string;
    readonly cart: Cart;
    readonly createdAt: Date;
}