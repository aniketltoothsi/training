import { Model } from 'mongoose';
import { Product } from 'src/product/interfaces/product.interface';
import { CreateCartDTO } from './dto/cart.dto';
import { Cart } from './interfaces/cart.interface';
export declare class CartService {
    private readonly cartModel;
    constructor(cartModel: Model<Cart>);
    private readonly productModel;
    private productService;
    getCarts(): Promise<Cart[]>;
    getCart(cartId: string): Promise<Cart>;
    addProduct(cartId: string, product: Product): Promise<void>;
    removeProduct(cartId: string, productId: string): Promise<void>;
    createCart(createCartDTO: CreateCartDTO): Promise<Cart>;
    deleteCart(cartID: any): Promise<any>;
    updateCart(cartID: string, createCartDTO: CreateCartDTO): Promise<Cart>;
}
