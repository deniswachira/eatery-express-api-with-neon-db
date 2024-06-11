"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerValidator = exports.loginValidator = exports.updateUserValidator = exports.createUserValidator = void 0;
const zod_1 = require("zod");
exports.createUserValidator = zod_1.z.object({
    fullname: zod_1.z.string().min(5, { message: "Must be 5 or more characters long" }),
    email: zod_1.z.string().email({ message: "Invalid email address" }),
    phone: zod_1.z.number()
});
exports.updateUserValidator = zod_1.z.object({
    fullname: zod_1.z.string().min(5, { message: "Must be 5 or more characters long" }),
    email: zod_1.z.string().email({ message: "Invalid email address" }),
    password: zod_1.z.string().min(4, { message: "Must be 4 or more characters long" }),
});
//login validator
exports.loginValidator = zod_1.z.object({
    username: zod_1.z.string().min(4, { message: "Must be  or more characters long" }),
    password: zod_1.z.string().min(4, { message: "Must be 4 or more characters long" }),
});
//register validator
exports.registerValidator = zod_1.z.object({
    user_id: zod_1.z.number(),
    username: zod_1.z.string().min(4, { message: "Must be 4 or more characters long" }),
    password: zod_1.z.string().min(4, { message: "Must be 4 or more characters long" }),
    role: zod_1.z.string().optional(),
});
