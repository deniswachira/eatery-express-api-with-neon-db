"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAddressValidator = exports.createAddressValidator = void 0;
const zod_1 = require("zod");
exports.createAddressValidator = zod_1.z.object({
    street_address_1: zod_1.z.string().min(3, { message: "Must be 5 or more characters long" }),
    street_address_2: zod_1.z.string().min(3, { message: "Must be 5 or more characters long" }),
    delivery_instructions: zod_1.z.string().min(3, { message: "Must be 5 or more characters long" }),
    zip_code: zod_1.z.number().min(3, { message: "Must be 5 or more characters long" }),
    city_id: zod_1.z.number().min(1, { message: "Must be 5 or more characters long" }),
    user_id: zod_1.z.number().min(1, { message: "Must be 5 or more characters long" })
});
exports.updateAddressValidator = zod_1.z.object({
    street_address_1: zod_1.z.string().min(3, { message: "Must be 5 or more characters long" }),
    street_address_2: zod_1.z.string().min(3, { message: "Must be 5 or more characters long" }),
    delivery_instructions: zod_1.z.string().min(3, { message: "Must be 5 or more characters long" }),
    zip_code: zod_1.z.number().min(3, { message: "Must be 5 or more characters long" }),
    city_id: zod_1.z.number().min(1, { message: "Must be 5 or more characters long" }),
    user_id: zod_1.z.number().min(1, { message: "Must be 5 or more characters long" }),
});
