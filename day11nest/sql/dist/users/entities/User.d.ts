import { Cart } from 'src/cart/entities/Cart';
import { Role } from './role.enum';
export declare class User {
    id: string;
    Name: string;
    username: string;
    password: string;
    role: Role;
    cart: Cart;
}
