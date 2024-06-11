"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRestaurantValidator = exports.createRestaurantValidator = void 0;
const zod_1 = require("zod");
exports.createRestaurantValidator = zod_1.z.object({
    name: zod_1.z.string().min(3, { message: "Must be 5 or more characters long" }),
    street_address: zod_1.z.string().min(3, { message: "Must be 5 or more characters long" }),
    zip_code: zod_1.z.number().min(3, { message: "Must be 5 or more characters long" }),
    city_id: zod_1.z.number().min(1, { message: "Must be 5 or more characters long" })
});
exports.updateRestaurantValidator = zod_1.z.object({
    name: zod_1.z.string().min(3, { message: "Must be 5 or more characters long" }),
    street_address: zod_1.z.string().min(3, { message: "Must be 5 or more characters long" }),
    zip_code: zod_1.z.number().min(3, { message: "Must be 5 or more characters long" }),
    city_id: zod_1.z.number().min(1, { message: "Must be 5 or more characters long" })
});
