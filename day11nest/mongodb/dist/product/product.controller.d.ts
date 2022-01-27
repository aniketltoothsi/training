import { ProductService } from "./product.service";
import { CreateProductDTO } from "./dto/product.dto";
import { PaginationParams } from './paginationParams';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    createProduct(res: any, createProductDTO: CreateProductDTO): Promise<any>;
    getProducts(res: any, { skip, limit }: PaginationParams): Promise<any>;
    getProduct(res: any, productID: any): Promise<any>;
    deleteProduct(res: any, productID: any): Promise<any>;
    updateProduct(res: any, createProductDTO: CreateProductDTO, productID: any): Promise<any>;
}
