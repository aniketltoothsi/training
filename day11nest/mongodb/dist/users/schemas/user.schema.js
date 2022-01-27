"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    name: String,
    username: String,
    password: String,
    role: ['USER', 'ADMIN'],
    createdAt: { type: Date, default: Date.now }
});
//# sourceMappingURL=user.schema.js.map