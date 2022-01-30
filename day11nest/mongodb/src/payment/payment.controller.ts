import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Render, Req, Res, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { Role } from 'src/users/entities/role.enum';
import { Roles } from 'src/users/roles.decorator';
import { CreatePaymentDTO } from './dto/payment.dto';
import { PaymentService } from './payment.service';
const Razorpay = require('razorpay');
const uuid =require('uuid');
const crypto = require('crypto');

const uuidv1 = uuid.v1;
var express = require('express');
var app = express();
app.set('view engine', 'ejs');
const razor = new Razorpay({
    key_id:'rzp_test_F7d9FKcJRAUS4I',
    key_secret:'GfqbYstREkSv4ubiucJCD1JS'
});



@Controller('payment')
export class PaymentController {
    constructor(private paymentService: PaymentService) { }

    private order; 
    
   @Post('/new')
   async makePayment(@Res() Res,@Req() req){
       const{paymentID} = req.body;

       const payment= await this.paymentService.getpayment(paymentID);
       const amount= payment.price;
       const paymentCapture=1;
       const currency = 'INR';

       const options={
           amount: (amount*100).toString(),
           currency,
           receipt: uuidv1(),
           payment_capture: paymentCapture
       };
       try{
           const response = await razor.orders.create(options);
           console.log(response);
            this.order=response.id;
           Res.send({
               orderId:response.id
           });
         

       }catch(error){
           console.log(error);
       }

   }
   

   @Get('/checkout')
   @Render('payment')
   Render(){

    return {abc:this.order};
   }
   @Post('/verification')
   async verification(@Res() res,@Req() req){
       const secret= 'a123';
       const shasum= crypto.createHmac('sha256',secret);
       shasum.update(JSON.stringify(req.body));
       const digest = shasum.digest('hex');
  
       console.log(digest, req.headers["x-razorpay-signature"]);


       if (digest === req.headers["x-razorpay-signature"]) {
        console.log("request is legit");
        res.status(200).json({
        message: "OK",
       });
       } else {
          res.status(403).json({ message: "Invalid" });
         }
   }

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
   // @UseGuards(AuthenticatedGuard)
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
