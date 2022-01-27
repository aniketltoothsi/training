import { Document } from "mongoose";
import { Product } from "src/product/interfaces/product.interface";
import { User } from "src/users/interfaces/user.interface";
export interface Cart extends Document {
    readonly items: Product[];
    readonly user: User;
    readonly price: number;
    readonly createdAt: Date;
}
