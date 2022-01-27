import { PaginationParams } from './paginationParams';
import { Product1Service } from './product1.service';
export declare class cartProduct {
    private readonly productService;
    constructor(productService: Product1Service);
    getProducts(res: any, cartID: any): Promise<any>;
}
export declare class Product1Controller {
    private readonly productService;
    constructor(productService: Product1Service);
    createProduct(res: any, body: any): Promise<any>;
    getProducts(res: any, { skip, limit }: PaginationParams): Promise<any>;
    getProduct(res: any, productID: any): Promise<any>;
    deleteProduct(res: any, productID: any): Promise<any>;
    updateProduct(res: any, data: any, productID: any): Promise<any>;
}
