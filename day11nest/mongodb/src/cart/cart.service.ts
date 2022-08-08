import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDTO } from 'src/product/dto/product.dto';
import { Product } from 'src/product/interfaces/product.interface';
import { ProductModule } from 'src/product/product.module';
import { ProductService } from 'src/product/product.service';
import { ProductSchema } from 'src/product/schemas/product.schema';
import { Db } from 'typeorm';
import { CreateCartDTO } from './dto/cart.dto';
import { Cart } from './interfaces/cart.interface';

@Injectable()
export class CartService {
    constructor(@InjectModel('Cart') private readonly cartModel: Model<Cart>) {}
    private readonly productModel: Model<Product>;
    private productService: ProductService;
    // Get all products
    async getCarts(): Promise<Cart[]> {
        const carts = await this.cartModel.find();
        return carts;
    }


    // Get a single Product
    async getCart(cartId: string): Promise<Cart> {
        const cart = await this.cartModel.findById(cartId); 
        return cart;
    }

    async addProduct(cartId: string,product: Product) {
            
        const cart = await this.cartModel.findById(cartId);
        cart.items.push(product);
        cart.save();
        
    }

    async removeProduct(cartId: string,productId: string){
        
        const cart = await this.cartModel.updateOne({_id:cartId},{ "$pull": { "items" : {_id: productId }}}); 
            

    }



    
    async createCart(createCartDTO: CreateCartDTO): Promise<Cart> {
        const newCart = new this.cartModel(createCartDTO);
        return newCart.save();
    }

    
    async deleteCart(cartID): Promise<any> {
        const deletedCart = await this.cartModel.deleteOne(cartID);
       
    }

    // Put a single product
    async updateCart(cartID: string, createCartDTO: CreateCartDTO): Promise<Cart> {
        const updatedCart = await this.cartModel.findByIdAndUpdate(cartID, createCartDTO, {new: true});
        return updatedCart;
    } 


}
