
import { Schema } from "mongoose";
import { CartSchema } from "src/cart/schemas/cart.schema";

export const PaymentSchema = new Schema({
    price: Number,
    status: ['NEW','COMPLETED'],
    shippingAddress: String,
    cart: CartSchema,
    createdAt: { type: Date, default: Date.now }
});