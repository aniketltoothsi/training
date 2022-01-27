import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Req, Res, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { Roles } from 'src/users/roles.decorator';
import { CartService } from './cart.service';
import { CreateCartDTO } from './dto/cart.dto';

@Controller('cart')
export class CartController {
    
    constructor(private cartService: CartService) { }
      
    

    @Post('/create')
    async createCart(@Res() res, @Body() createCartDTO: CreateCartDTO) {
        const cart = await this.cartService.createCart(createCartDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Cart Successfully Created',
            cart
        });
    }

    // Get all carts
    // @Get('/list')
    @Get('/')
    //@UseGuards(AuthenticatedGuard)
    async getCarts(@Res() res) {
        const carts = await this.cartService.getCarts();

        return res.status(HttpStatus.OK).json(carts);
    }
    


    // GET single cart
    @Get('/:cartID')
    @UseGuards(AuthenticatedGuard)
    async getcart(@Res() res, @Param('cartID') cartID) {
        const cart = await this.cartService.getCart(cartID);
        if (!cart) throw new NotFoundException('Cart does not exist!');
        return res.status(HttpStatus.OK).json(cart);
    }
    
  

    // Delete Cart
    @Delete('/delete')
    async deleteCart(@Res() res, @Query('cartID') cartID) {
        const cartDeleted = await this.cartService.deleteCart(cartID);
        if (!cartDeleted) throw new NotFoundException('Cart does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Cart Deleted Successfully',
            cartDeleted
        });
    }

    // Update Cart
    @Put('/update')
    async updateCart(@Res() res, @Body() createCartDTO: CreateCartDTO, @Query('cartID') cartID) {
        const updatedCart = await this.cartService.updateCart(cartID, createCartDTO);
        if (!updatedCart) throw new NotFoundException('Cart does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Payment Updated Successfully',
            updatedCart 
        });
    }

    @Post('/addProduct')
    @UseGuards(AuthenticatedGuard)
    async addProduct(@Res() res,@Req() req){
      const{cartID,product}= req.body;
      const addedProduct=await this.cartService.addProduct(cartID,product);

     res.status(HttpStatus.OK).json({
        message: 'Product Added Successfully',
        addedProduct  
    });
    }

    @Post('/removeProduct')
    @UseGuards(AuthenticatedGuard)
    async removeProduct(@Res() res,@Req() req){
        const{cartID,productID}= req.body;
        await this.cartService.removeProduct(cartID,productID);
        res.status(HttpStatus.OK).json({
            message: 'Product Removed Successfully',  
        });

    }
}
