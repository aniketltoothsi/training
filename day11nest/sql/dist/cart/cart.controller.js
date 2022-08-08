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
const Product_1 = require("../product1/entities/Product");
const typeorm_1 = require("typeorm");
const cart_service_1 = require("./cart.service");
const Cart_1 = require("./entities/Cart");
let CartController = class CartController {
    constructor(cartService) {
        this.cartService = cartService;
    }
    cartpage(body) {
        const ans = this.cartService.findOne(body.username);
        return ans;
    }
    async addProduct(req, res) {
        const { cartId, productId } = req.body;
        const cart = await (0, typeorm_1.getRepository)(Cart_1.Cart).findOne({
            id: cartId,
        });
        if (!cart) {
            throw new Error('Cart not found');
        }
        const product = new Product_1.Product();
        product.id = productId;
        product.cart = cart;
        await (0, typeorm_1.getRepository)(Product_1.Product).save(product);
        res.status(201).json({
            product: {
                id: product.id,
                cart: {
                    id: product.cart.id,
                },
            },
        });
    }
    createCart(body) {
        const newCart = this.cartService.createOne(body);
        return { msg: `${newCart} created` };
    }
    async removeProduct(req, res) {
        const { cartId, productId } = req.body;
        const cart = await (0, typeorm_1.getRepository)(Cart_1.Cart).findOne({
            id: cartId,
        });
        if (!cart) {
            throw new Error('Cart not found');
        }
        const product = new Product_1.Product();
        product.id = productId;
        product.cart = null;
        await (0, typeorm_1.getRepository)(Product_1.Product).save(product);
        res.status(201).send('product removed from cart successfully');
    }
};
__decorate([
    (0, common_1.Post)('/page'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], CartController.prototype, "cartpage", null);
__decorate([
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    (0, common_1.Post)('/addProduct'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "addProduct", null);
__decorate([
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], CartController.prototype, "createCart", null);
__decorate([
    (0, common_1.Post)('/removeProduct'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
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