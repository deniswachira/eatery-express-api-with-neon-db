"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDriverValidator = exports.createDriverValidator = void 0;
const zod_1 = require("zod");
exports.createDriverValidator = zod_1.z.object({
    car_make: zod_1.z.string().min(3, { message: "Must be 5 or more characters long" }),
    car_model: zod_1.z.string().min(3, { message: "Must be 5 or more characters long" }),
    car_year: zod_1.z.number().min(1, { message: "Must be 5 or more characters long" }),
    user_id: zod_1.z.number().min(1, { message: "Must be 5 or more characters long" }),
    online: zod_1.z.boolean(),
    delivering: zod_1.z.boolean()
});
exports.updateDriverValidator = zod_1.z.object({
    car_make: zod_1.z.string().min(3, { message: "Must be 5 or more characters long" }),
    car_model: zod_1.z.string().min(3, { message: "Must be 5 or more characters long" }),
    car_year: zod_1.z.number().min(1, { message: "Must be 5 or more characters long" }),
    user_id: zod_1.z.number().min(1, { message: "Must be 5 or more characters long" }),
    online: zod_1.z.boolean(),
    delivering: zod_1.z.boolean()
});
