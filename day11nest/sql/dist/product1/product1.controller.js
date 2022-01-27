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
exports.Product1Controller = exports.cartProduct = void 0;
const common_1 = require("@nestjs/common");
const authenticated_guard_1 = require("../auth/authenticated.guard");
const role_enum_1 = require("../users/entities/role.enum");
const roles_decorator_1 = require("../users/roles.decorator");
const paginationParams_1 = require("./paginationParams");
const product1_service_1 = require("./product1.service");
let cartProduct = class cartProduct {
    constructor(productService) {
        this.productService = productService;
    }
    async getProducts(res, cartID) {
        const products = await this.productService.showByCart(cartID);
        if (!products)
            throw new common_1.NotFoundException('Cart does not exist!');
        return res.status(common_1.HttpStatus.OK).json(products);
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('cartID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], cartProduct.prototype, "getProducts", null);
cartProduct = __decorate([
    (0, common_1.Controller)('cartpage'),
    __metadata("design:paramtypes", [product1_service_1.Product1Service])
], cartProduct);
exports.cartProduct = cartProduct;
let Product1Controller = class Product1Controller {
    constructor(productService) {
        this.productService = productService;
    }
    async createProduct(res, body) {
        const product = await this.productService.create(body);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Product Successfully Created', product
        });
    }
    async getProducts(res, { skip, limit }) {
        const products = await this.productService.showAll();
        return res.status(common_1.HttpStatus.OK).json(products);
    }
    async getProduct(res, productID) {
        const product = await this.productService.read(productID);
        if (!product)
            throw new common_1.NotFoundException('Product does not exist!');
        return res.status(common_1.HttpStatus.OK).json(product);
    }
    async deleteProduct(res, productID) {
        const productDeleted = await this.productService.destroy(productID);
        if (!productDeleted)
            throw new common_1.NotFoundException('Product does not exist!');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Product Deleted Successfully',
            productDeleted
        });
    }
    async updateProduct(res, data, productID) {
        const updatedProduct = await this.productService.update(productID, data);
        if (!updatedProduct)
            throw new common_1.NotFoundException('Product does not exist!');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Product Updated Successfully',
            updatedProduct
        });
    }
};
__decorate([
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    (0, common_1.Post)('/create'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], Product1Controller.prototype, "createProduct", null);
__decorate([
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    (0, common_1.Get)('/'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, paginationParams_1.PaginationParams]),
    __metadata("design:returntype", Promise)
], Product1Controller.prototype, "getProducts", null);
__decorate([
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    (0, common_1.Get)('/:productID'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('productID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], Product1Controller.prototype, "getProduct", null);
__decorate([
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    (0, common_1.Delete)('/delete'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('productID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], Product1Controller.prototype, "deleteProduct", null);
__decorate([
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    (0, common_1.Put)('/update'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)('productID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], Product1Controller.prototype, "updateProduct", null);
Product1Controller = __decorate([
    (0, common_1.Controller)('product1'),
    __metadata("design:paramtypes", [product1_service_1.Product1Service])
], Product1Controller);
exports.Product1Controller = Product1Controller;
//# sourceMappingURL=product1.controller.js.map