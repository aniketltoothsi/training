import { Controller, Post, Res, HttpStatus, Body, Get, Param, NotFoundException, Delete, Query, Put } from '@nestjs/common';
import { ProductService } from "./product.service";

import { CreateProductDTO } from "./dto/product.dto";
import { resolveSoa } from 'dns';
import { Roles } from 'src/users/roles.decorator';
import { Role } from 'src/users/entities/role.enum';
import { PaginationDto, projectionDto } from 'nestjs-keyset-paginator';
import { PaginationParams } from './paginationParams';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) { }

    // Add Product: /product/create

    @Post('/create')
    @Roles(Role.ADMIN)
    async createProduct(@Res() res, @Body() createProductDTO: CreateProductDTO) {
        const product = await this.productService.createProduct(createProductDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Product Successfully Created',
            product
        });
    }

    // Get Products /product
    // @Get('/list')
    @Get('/')
    //@Roles(Role.ADMIN)
    async getProducts(@Res() res,@Query(){skip,limit}: PaginationParams) {
        const products = await this.productService.findAll();

        return res.status(HttpStatus.OK).json(products);
    }
    


    // GET single product:
    @Get('/:productID')
    @Roles(Role.ADMIN)
    async getProduct(@Res() res, @Param('productID') productID) {
        const product = await this.productService.getProduct(productID);
        if (!product) throw new NotFoundException('Product does not exist!');
        return res.status(HttpStatus.OK).json(product);
    }
    
  

    // Delete Product
    @Delete('/delete')
    @Roles(Role.ADMIN)
    async deleteProduct(@Res() res, @Query('productID') productID) {
        const productDeleted = await this.productService.deleteProduct(productID);
        if (!productDeleted) throw new NotFoundException('Product does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Product Deleted Successfully',
            productDeleted
        });
    }

    // Update Product:
    @Put('/update')
    @Roles(Role.ADMIN)
    async updateProduct(@Res() res, @Body() createProductDTO: CreateProductDTO, @Query('productID') productID) {
        const updatedProduct = await this.productService.updateProduct(productID, createProductDTO);
        if (!updatedProduct) throw new NotFoundException('Product does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Product Updated Successfully',
            updatedProduct 
        });
    }

}
