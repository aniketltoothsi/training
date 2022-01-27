import { Cart } from 'src/cart/entities/Cart';
export declare class Product {
    id: string;
    Name: string;
    description: string;
    price: string;
    createdAt: Date;
    cart: Cart;
}
