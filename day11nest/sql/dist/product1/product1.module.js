"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product1Module = void 0;
const common_1 = require("@nestjs/common");
const product1_service_1 = require("./product1.service");
const product1_controller_1 = require("./product1.controller");
const typeorm_1 = require("@nestjs/typeorm");
const Product_1 = require("./entities/Product");
let Product1Module = class Product1Module {
};
Product1Module = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Product_1.Product])],
        providers: [product1_service_1.Product1Service],
        controllers: [product1_controller_1.Product1Controller, product1_controller_1.cartProduct]
    })
], Product1Module);
exports.Product1Module = Product1Module;
//# sourceMappingURL=product1.module.js.map