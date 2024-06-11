"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMenuItemValidator = exports.createMenuItemValidator = void 0;
const zod_1 = require("zod");
exports.createMenuItemValidator = zod_1.z.object({
    name: zod_1.z.string().min(3, { message: "Must be 5 or more characters long" }),
    price: zod_1.z.number().min(1, { message: "Must be 5 or more characters long" }),
    description: zod_1.z.string().min(3, { message: "Must be 5 or more characters long" }),
    ingredients: zod_1.z.string().min(3, { message: "Must be 5 or more characters long" }),
    restaurant_id: zod_1.z.number().min(1, { message: "Must be 5 or more characters long" }),
    category_id: zod_1.z.number().min(1, { message: "Must be 5 or more characters long" })
});
exports.updateMenuItemValidator = zod_1.z.object({
    name: zod_1.z.string().min(3, { message: "Must be 5 or more characters long" }),
    price: zod_1.z.number().min(1, { message: "Must be 5 or more characters long" }),
    description: zod_1.z.string().min(3, { message: "Must be 5 or more characters long" }),
    ingredients: zod_1.z.string().min(3, { message: "Must be 5 or more characters long" }),
    restaurant_id: zod_1.z.number().min(1, { message: "Must be 5 or more characters long" }),
    category_id: zod_1.z.number().min(1, { message: "Must be 5 or more characters long" })
});
