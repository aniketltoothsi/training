import { Repository } from 'typeorm';
import { Product } from './entities/Product';
export declare class Product1Service {
    private productRepository;
    constructor(productRepository: Repository<Product>);
    showAll(): Promise<{
        data: Product[];
        count: number;
    }>;
    showByCart(cartid: string): Promise<Product[]>;
    create(data: Product): Promise<Product>;
    read(id: string): Promise<Product>;
    update(id: string, data: Partial<Product>): Promise<Product>;
    destroy(id: string): Promise<{
        deleted: boolean;
    }>;
}
