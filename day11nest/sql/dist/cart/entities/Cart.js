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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const Payment_1 = require("../../payment/entities/Payment");
const Product_1 = require("../../product1/entities/Product");
const User_1 = require("../../users/entities/User");
const typeorm_1 = require("typeorm");
let Cart = class Cart {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Cart.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Cart.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(type => User_1.User, user => user.cart),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", User_1.User)
], Cart.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(type => Payment_1.Payment, payment => payment.cart),
    __metadata("design:type", Payment_1.Payment)
], Cart.prototype, "paymentID", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => Product_1.Product, items => items.cart),
    __metadata("design:type", Array)
], Cart.prototype, "items", void 0);
Cart = __decorate([
    (0, typeorm_1.Entity)()
], Cart);
exports.Cart = Cart;
//# sourceMappingURL=Cart.js.map