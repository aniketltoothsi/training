import { Repository } from 'typeorm';
import { Cart } from './entities/Cart';
export declare class CartService {
    private cartsRepository;
    constructor(cartsRepository: Repository<Cart>);
    findOne(userName: string): Promise<Cart[] | undefined>;
    createOne(cart: Cart): Promise<Cart | undefined>;
}
