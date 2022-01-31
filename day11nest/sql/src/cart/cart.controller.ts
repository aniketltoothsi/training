import { Body, Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { request } from 'express';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { Product } from 'src/product1/entities/Product';
import { getConnection, getRepository } from 'typeorm';
import { CartService } from './cart.service';
import { Cart } from './entities/Cart';

@Controller('cart')
export class CartController {



    constructor(private readonly cartService: CartService) {}
    
    @UseGuards(AuthenticatedGuard)
    @Post('/page')
    cartpage(@Body() body): any {
      
      const ans= this.cartService.findOne(body.username);
      
        return ans;
    } 
    
    @UseGuards(AuthenticatedGuard)
    @Post('/addProduct')
    async addProduct(@Req() req,@Res() res) {
        const{cartId, productId}= req.body;

        const cart = await getRepository(Cart).findOne({
            id: cartId,
        });
        if(!cart){
            throw new Error('Cart not found');
        }

        const product= new Product();
        product.id= productId;
        product.cart= cart;

        await getRepository(Product).save(product);

        res.status(201).json({
            product:{
                id:product.id,
                cart: {
                    id: product.cart.id,
                },
            },
        });
    }

    @UseGuards(AuthenticatedGuard)
    @Post('/create')
    createCart(@Body() body): any {
      const newCart=this.cartService.createOne(body);
      return{msg:`${newCart} created`}
    }
  
    @UseGuards(AuthenticatedGuard)
    @Post('/removeProduct')
    async removeProduct(@Req() req,@Res() res) {
        const{cartId, productId} = req.body;

        const cart = await getRepository(Cart).findOne({
            id: cartId,
        });
        if(!cart){
            throw new Error('Cart not found');
        }

        const product= new Product();
        product.id= productId;
        product.cart= null;
        

        await getRepository(Product).save(product);

        res.status(201).send('product removed from cart successfully');
    }




    }





