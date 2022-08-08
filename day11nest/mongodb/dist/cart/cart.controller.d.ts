import { CartService } from './cart.service';
import { CreateCartDTO } from './dto/cart.dto';
export declare class CartController {
    private cartService;
    constructor(cartService: CartService);
    createCart(res: any, createCartDTO: CreateCartDTO): Promise<any>;
    getCarts(res: any): Promise<any>;
    getcart(res: any, cartID: any): Promise<any>;
    deleteCart(res: any, cartID: any): Promise<any>;
    updateCart(res: any, createCartDTO: CreateCartDTO, cartID: any): Promise<any>;
    addProduct(res: any, req: any): Promise<void>;
    removeProduct(res: any, req: any): Promise<void>;
}
