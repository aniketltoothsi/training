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
exports.Product1Service = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Product_1 = require("./entities/Product");
let Product1Service = class Product1Service {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async showAll() {
        const [result, total] = await this.productRepository.findAndCount({
            take: 20,
        });
        return {
            data: result,
            count: total
        };
    }
    async showByCart(cartid) {
        const cart = await this.productRepository.find({ relations: ["cart"] });
        return cart;
    }
    async create(data) {
        const user = this.productRepository.create(data);
        await this.productRepository.save(data);
        return user;
    }
    async read(id) {
        return await this.productRepository.findOne({ where: { id: id } });
    }
    async update(id, data) {
        await this.productRepository.update({ id }, data);
        return await this.productRepository.findOne({ id });
    }
    async destroy(id) {
        await this.productRepository.delete({ id });
        return { deleted: true };
    }
};
Product1Service = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Product_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], Product1Service);
exports.Product1Service = Product1Service;
//# sourceMappingURL=product1.service.js.map