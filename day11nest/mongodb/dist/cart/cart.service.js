"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let CartService = class CartService {
    constructor(cartModel) {
        this.cartModel = cartModel;
    }
    async getCarts() {
        const carts = await this.cartModel.find();
        return carts;
    }
    async getCart(cartId) {
        const cart = await this.cartModel.findById(cartId);
        return cart;
    }
    async addProduct(cartId, product) {
        const cart = await this.cartModel.findById(cartId);
        cart.items.push(product);
        cart.save();
    }
    async removeProduct(cartId, productId) {
        const cart = await this.cartModel.updateOne({ _id: cartId }, { "$pull": { "items": { _id: productId } } });
    }
    async createCart(createCartDTO) {
        const newCart = new this.cartModel(createCartDTO);
        return newCart.save();
    }
    async deleteCart(cartID) {
        const deletedCart = await this.cartModel.deleteOne(cartID);
    }
    async updateCart(cartID, createCartDTO) {
        const updatedCart = await this.cartModel.findByIdAndUpdate(cartID, createCartDTO, { new: true });
        return updatedCart;
    }
};
CartService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Cart')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CartService);
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map