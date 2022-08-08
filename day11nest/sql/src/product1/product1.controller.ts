import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Request, Res, UseGuards } from '@nestjs/common';
import { PaginationDto } from 'nestjs-keyset-paginator/dist';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { Role } from 'src/users/entities/role.enum';
import { Roles } from 'src/users/roles.decorator';
import { Product } from './entities/Product';
import { PaginationParams } from './paginationParams';
import { Product1Service } from './product1.service';



@Controller('cartpage')
export class cartProduct{
    constructor(private readonly productService: Product1Service) {}


    @UseGuards(AuthenticatedGuard)
    @Get('/')
    async getProducts(@Res() res, @Param('cartID') cartID) {
        const products = await this.productService.showByCart(cartID);
        if (!products) throw new NotFoundException('Cart does not exist!');
        return res.status(HttpStatus.OK).json(products);
    }

   
    

}


@Controller('product1')
export class Product1Controller {


    constructor(private readonly productService: Product1Service) {}

    @UseGuards(AuthenticatedGuard)
    @Post('/create')
    @Roles(Role.ADMIN)
    async createProduct(@Res() res, @Body() body) {
        const product = await this.productService.create(body);
        return res.status(HttpStatus.OK).json({
            message: 'Product Successfully Created',product
        });
    }

    // Get Products /product
    // @Get('/list')  
    @UseGuards(AuthenticatedGuard)
    @Get('/')
    @Roles(Role.ADMIN)
    async getProducts(@Res() res,@Query(){skip,limit}: PaginationParams) {
        const products = await this.productService.showAll();

        return res.status(HttpStatus.OK).json(products);
    }



    // GET single product: 
    @UseGuards(AuthenticatedGuard)
    @Get('/:productID')
    @Roles(Role.ADMIN)
    async getProduct(@Res() res, @Param('productID') productID) {
        const product = await this.productService.read(productID);
        if (!product) throw new NotFoundException('Product does not exist!');
        return res.status(HttpStatus.OK).json(product);
    }
    
  

    // Delete Product
    @UseGuards(AuthenticatedGuard)
    @Delete('/delete')
    @Roles(Role.ADMIN)
    async deleteProduct(@Res() res, @Query('productID') productID) {
        const productDeleted = await this.productService.destroy(productID);
        if (!productDeleted) throw new NotFoundException('Product does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Product Deleted Successfully',
            productDeleted
        });
    }

    @UseGuards(AuthenticatedGuard)
    @Put('/update')
    @Roles(Role.ADMIN)
    async updateProduct(@Res() res, @Body() data, @Query('productID') productID) {
        const updatedProduct = await this.productService.update(productID, data);
        if (!updatedProduct) throw new NotFoundException('Product does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Product Updated Successfully',
            updatedProduct 
        });
    }


}
