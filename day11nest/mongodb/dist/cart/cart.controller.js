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
exports.CartController = void 0;
const common_1 = require("@nestjs/common");
const authenticated_guard_1 = require("../auth/authenticated.guard");
const cart_service_1 = require("./cart.service");
const cart_dto_1 = require("./dto/cart.dto");
let CartController = class CartController {
    constructor(cartService) {
        this.cartService = cartService;
    }
    async createCart(res, createCartDTO) {
        const cart = await this.cartService.createCart(createCartDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Cart Successfully Created',
            cart
        });
    }
    async getCarts(res) {
        const carts = await this.cartService.getCarts();
        return res.status(common_1.HttpStatus.OK).json(carts);
    }
    async getcart(res, cartID) {
        const cart = await this.cartService.getCart(cartID);
        if (!cart)
            throw new common_1.NotFoundException('Cart does not exist!');
        return res.status(common_1.HttpStatus.OK).json(cart);
    }
    async deleteCart(res, cartID) {
        const cartDeleted = await this.cartService.deleteCart(cartID);
        if (!cartDeleted)
            throw new common_1.NotFoundException('Cart does not exist!');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Cart Deleted Successfully',
            cartDeleted
        });
    }
    async updateCart(res, createCartDTO, cartID) {
        const updatedCart = await this.cartService.updateCart(cartID, createCartDTO);
        if (!updatedCart)
            throw new common_1.NotFoundException('Cart does not exist!');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Payment Updated Successfully',
            updatedCart
        });
    }
    async addProduct(res, req) {
        const { cartID, product } = req.body;
        const addedProduct = await this.cartService.addProduct(cartID, product);
        res.status(common_1.HttpStatus.OK).json({
            message: 'Product Added Successfully',
            addedProduct
        });
    }
    async removeProduct(res, req) {
        const { cartID, productID } = req.body;
        await this.cartService.removeProduct(cartID, productID);
        res.status(common_1.HttpStatus.OK).json({
            message: 'Product Removed Successfully',
        });
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, cart_dto_1.CreateCartDTO]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "createCart", null);
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "getCarts", null);
__decorate([
    (0, common_1.Get)('/:cartID'),
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('cartID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "getcart", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('cartID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "deleteCart", null);
__decorate([
    (0, common_1.Put)('/update'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)('cartID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, cart_dto_1.CreateCartDTO, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "updateCart", null);
__decorate([
    (0, common_1.Post)('/addProduct'),
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "addProduct", null);
__decorate([
    (0, common_1.Post)('/removeProduct'),
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "removeProduct", null);
CartController = __decorate([
    (0, common_1.Controller)('cart'),
    __metadata("design:paramtypes", [cart_service_1.CartService])
], CartController);
exports.CartController = CartController;
//# sourceMappingURL=cart.controller.js.map