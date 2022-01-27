"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartSchema = void 0;
const mongoose_1 = require("mongoose");
const product_schema_1 = require("../../product/schemas/product.schema");
const user_schema_1 = require("../../users/schemas/user.schema");
exports.CartSchema = new mongoose_1.Schema({
    items: [product_schema_1.ProductSchema],
    user: user_schema_1.UserSchema,
    price: Number,
    createdAt: { type: Date, default: Date.now }
});
//# sourceMappingURL=cart.schema.js.map