import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post, Res } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
    constructor(private readonly paymentService: PaymentService) {}


@Get('/all')
cartpage(@Res() res): any {
  
  const ans= this.paymentService.findAll();
  
    return res.status(HttpStatus.OK).json(ans);
}

@Get('/')
async getPayment(@Res() res, @Param('cartID') cartID) {
    const payment = await this.paymentService.findOne(cartID);
    if (!payment) throw new NotFoundException(' does not exist!');
    return res.status(HttpStatus.OK).json(payment);
}


@Post('/create')
createCart(@Body() body): any {
  const newPayment=this.paymentService.createOne(body);
  return{msg:`${newPayment} created`}
}

}
