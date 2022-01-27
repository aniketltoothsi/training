import { CartService } from './cart.service';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    cartpage(body: any): any;
    addProduct(req: any, res: any): Promise<void>;
    createCart(body: any): any;
}
