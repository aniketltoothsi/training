"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentSchema = void 0;
const mongoose_1 = require("mongoose");
const cart_schema_1 = require("../../cart/schemas/cart.schema");
exports.PaymentSchema = new mongoose_1.Schema({
    price: Number,
    status: ['NEW', 'COMPLETED'],
    shippingAddress: String,
    cart: cart_schema_1.CartSchema,
    createdAt: { type: Date, default: Date.now }
});
//# sourceMappingURL=payment.schema.js.map