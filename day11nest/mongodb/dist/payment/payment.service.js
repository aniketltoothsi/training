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
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let PaymentService = class PaymentService {
    constructor(paymentModel) {
        this.paymentModel = paymentModel;
    }
    async getPayments() {
        const payments = await this.paymentModel.find();
        return payments;
    }
    async getpayment(paymentId) {
        const payment = await this.paymentModel.findById(paymentId);
        return payment;
    }
    async createPayment(createpaymentDTO) {
        const newPayment = new this.paymentModel(createpaymentDTO);
        return newPayment.save();
    }
    async deletepayment(paymentID) {
        const deletedCart = await this.paymentModel.deleteOne(paymentID);
    }
    async updatePayment(paymentID, createpaymentDTO) {
        const updatedCart = await this.paymentModel.findByIdAndUpdate(paymentID, createpaymentDTO, { new: true });
        return updatedCart;
    }
};
PaymentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Payment')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PaymentService);
exports.PaymentService = PaymentService;
//# sourceMappingURL=payment.service.js.map