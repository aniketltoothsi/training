"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const product_module_1 = require("./product/product.module");
const mongoose_1 = require("@nestjs/mongoose");
const core_1 = require("@nestjs/core");
const roles_guard_1 = require("./users/roles.guard");
const cart_module_1 = require("./cart/cart.module");
const payment_module_1 = require("./payment/payment.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [users_module_1.UsersModule, auth_module_1.AuthModule, product_module_1.ProductModule, payment_module_1.PaymentModule,
            mongoose_1.MongooseModule.forRoot('mongodb://localhost/nest', {
                useNewUrlParser: true
            }),
            cart_module_1.CartModule,
            payment_module_1.PaymentModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, {
                provide: core_1.APP_GUARD,
                useClass: roles_guard_1.RolesGuard,
            }],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map