import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { Role } from 'src/users/entities/role.enum';
import { Roles } from 'src/users/roles.decorator';
import { CreatePaymentDTO } from './dto/payment.dto';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
    constructor(private paymentService: PaymentService) { }

    

    @Post('/create')
    @Roles(Role.ADMIN)
    async createPayment(@Res() res, @Body() createPaymentDTO: CreatePaymentDTO) {
        const payment = await this.paymentService.createPayment(createPaymentDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Payment Successfully Created',
            payment
        });
    }

    // Get all payment
    // @Get('/list')
    @Get('/')
    @UseGuards(AuthenticatedGuard)
    async getPayments(@Res() res) {
        const payments = await this.paymentService.getPayments();

        return res.status(HttpStatus.OK).json(payments);
    }
    


    // GET single payment
    @Get('/:paymentID')
    @UseGuards(AuthenticatedGuard)
    async getPayment(@Res() res, @Param('paymentID') paymentID) {
        const payment = await this.paymentService.getpayment(paymentID);
        if (!payment) throw new NotFoundException('Payment does not exist!');
        return res.status(HttpStatus.OK).json(payment);
    }
    
  

    // Delete Payment
    @Delete('/delete')
    @Roles(Role.ADMIN)
    async deletePayment(@Res() res, @Query('paymentID') paymentID) {
        const paymentDeleted = await this.paymentService.deletepayment(paymentID);
        if (!paymentDeleted) throw new NotFoundException('Payment does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Payment Deleted Successfully',
            paymentDeleted
        });
    }

    // Update Payment
    @Put('/update')
    @Roles(Role.ADMIN)
    async updatePayment(@Res() res, @Body() createPaymentDTO: CreatePaymentDTO, @Query('paymentID') paymentID) {
        const updatedPayment = await this.paymentService.updatePayment(paymentID, createPaymentDTO);
        if (!updatedPayment) throw new NotFoundException('Payment does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Payment Updated Successfully',
            updatedPayment 
        });
    }
}
