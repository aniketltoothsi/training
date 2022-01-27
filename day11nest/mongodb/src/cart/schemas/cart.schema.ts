import { Schema } from "mongoose";
import { Product } from "src/product/interfaces/product.interface";
import { ProductSchema } from "src/product/schemas/product.schema";
import { UserSchema } from "src/users/schemas/user.schema";

export const CartSchema = new Schema({
    items: [ProductSchema],
    user: UserSchema,
    price: Number,
    createdAt: { type: Date, default: Date.now }
});