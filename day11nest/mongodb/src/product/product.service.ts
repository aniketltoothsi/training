import { Injectable } from '@nestjs/common';

import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { Product } from "./interfaces/product.interface";
import { CreateProductDTO } from "./dto/product.dto";

@Injectable()
export class ProductService {
    

    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}

    // Get all products
    async getProducts(): Promise<Product[]> {
        const products = await this.productModel.find();
        return products;
    }

    async findAll(documentsToSkip=0) {
        const query = this.productModel.find()
        .skip(documentsToSkip)
        
          query.limit(20);
        const results = await query;
        const count = await this.productModel.count()
        return {results,count};
      }
    // Get a single Product
    async getProduct(productID: string): Promise<Product> {
        const product = await this.productModel.findById(productID); 
        return product;
    }

    // Post a single product
    async createProduct(createProductDTO: CreateProductDTO): Promise<Product> {
        const newProduct = new this.productModel(createProductDTO);
        return newProduct.save();
    }

    // Delete Product
    async deleteProduct(productID): Promise<any> {
        const deletedProduct = await this.productModel.deleteOne(productID);
       // return deletedProduct;
    }

    // Put a single product
    async updateProduct(productID: string, createProductDTO: CreateProductDTO): Promise<Product> {
        const updatedProduct = await this.productModel.findByIdAndUpdate(productID, createProductDTO, {new: true});
        return updatedProduct;
    }

}
