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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let ProductService = class ProductService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async getProducts() {
        const products = await this.productModel.find();
        return products;
    }
    async findAll(documentsToSkip = 0) {
        const query = this.productModel.find()
            .skip(documentsToSkip);
        query.limit(20);
        const results = await query;
        const count = await this.productModel.count();
        return { results, count };
    }
    async getProduct(productID) {
        const product = await this.productModel.findById(productID);
        return product;
    }
    async createProduct(createProductDTO) {
        const newProduct = new this.productModel(createProductDTO);
        return newProduct.save();
    }
    async deleteProduct(productID) {
        const deletedProduct = await this.productModel.deleteOne(productID);
    }
    async updateProduct(productID, createProductDTO) {
        const updatedProduct = await this.productModel.findByIdAndUpdate(productID, createProductDTO, { new: true });
        return updatedProduct;
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Product')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map