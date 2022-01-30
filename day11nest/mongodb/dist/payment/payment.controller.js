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
exports.PaymentController = void 0;
const common_1 = require("@nestjs/common");
const authenticated_guard_1 = require("../auth/authenticated.guard");
const role_enum_1 = require("../users/entities/role.enum");
const roles_decorator_1 = require("../users/roles.decorator");
const payment_dto_1 = require("./dto/payment.dto");
const payment_service_1 = require("./payment.service");
const Razorpay = require('razorpay');
const uuid = require('uuid');
const crypto = require('crypto');
const uuidv1 = uuid.v1;
var express = require('express');
var app = express();
app.set('view engine', 'ejs');
const razor = new Razorpay({
    key_id: 'rzp_test_F7d9FKcJRAUS4I',
    key_secret: 'GfqbYstREkSv4ubiucJCD1JS'
});
let PaymentController = class PaymentController {
    constructor(paymentService) {
        this.paymentService = paymentService;
    }
    async makePayment(Res, req) {
        const { paymentID } = req.body;
        const payment = await this.paymentService.getpayment(paymentID);
        const amount = payment.price;
        const paymentCapture = 1;
        const currency = 'INR';
        const options = {
            amount: (amount * 100).toString(),
            currency,
            receipt: uuidv1(),
            payment_capture: paymentCapture
        };
        try {
            const response = await razor.orders.create(options);
            console.log(response);
            this.order = response.id;
            Res.send({
                orderId: response.id
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    Render() {
        return { abc: this.order };
    }
    async verification(res, req) {
        const secret = 'a123';
        const shasum = crypto.createHmac('sha256', secret);
        shasum.update(JSON.stringify(req.body));
        const digest = shasum.digest('hex');
        console.log(digest, req.headers["x-razorpay-signature"]);
        if (digest === req.headers["x-razorpay-signature"]) {
            console.log("request is legit");
            res.status(200).json({
                message: "OK",
            });
        }
        else {
            res.status(403).json({ message: "Invalid" });
        }
    }
    async createPayment(res, createPaymentDTO) {
        const payment = await this.paymentService.createPayment(createPaymentDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Payment Successfully Created',
            payment
        });
    }
    async getPayments(res) {
        const payments = await this.paymentService.getPayments();
        return res.status(common_1.HttpStatus.OK).json(payments);
    }
    async getPayment(res, paymentID) {
        const payment = await this.paymentService.getpayment(paymentID);
        if (!payment)
            throw new common_1.NotFoundException('Payment does not exist!');
        return res.status(common_1.HttpStatus.OK).json(payment);
    }
    async deletePayment(res, paymentID) {
        const paymentDeleted = await this.paymentService.deletepayment(paymentID);
        if (!paymentDeleted)
            throw new common_1.NotFoundException('Payment does not exist!');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Payment Deleted Successfully',
            paymentDeleted
        });
    }
    async updatePayment(res, createPaymentDTO, paymentID) {
        const updatedPayment = await this.paymentService.updatePayment(paymentID, createPaymentDTO);
        if (!updatedPayment)
            throw new common_1.NotFoundException('Payment does not exist!');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Payment Updated Successfully',
            updatedPayment
        });
    }
};
__decorate([
    (0, common_1.Post)('/new'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "makePayment", null);
__decorate([
    (0, common_1.Get)('/checkout'),
    (0, common_1.Render)('payment'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PaymentController.prototype, "Render", null);
__decorate([
    (0, common_1.Post)('/verification'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "verification", null);
__decorate([
    (0, common_1.Post)('/create'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, payment_dto_1.CreatePaymentDTO]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "createPayment", null);
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "getPayments", null);
__decorate([
    (0, common_1.Get)('/:paymentID'),
    (0, common_1.UseGuards)(authenticated_guard_1.AuthenticatedGuard),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('paymentID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "getPayment", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('paymentID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "deletePayment", null);
__decorate([
    (0, common_1.Put)('/update'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)('paymentID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, payment_dto_1.CreatePaymentDTO, Object]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "updatePayment", null);
PaymentController = __decorate([
    (0, common_1.Controller)('payment'),
    __metadata("design:paramtypes", [payment_service_1.PaymentService])
], PaymentController);
exports.PaymentController = PaymentController;
//# sourceMappingURL=payment.controller.js.map