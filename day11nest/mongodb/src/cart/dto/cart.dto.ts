import { Product } from "src/product/interfaces/product.interface";
import { User } from "src/users/interfaces/user.interface";

export class CreateCartDTO {
    readonly items: Product[];
    readonly user: User;
    readonly price: number;
    readonly createdAt: Date;
}