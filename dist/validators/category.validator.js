"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCategoryValidator = exports.createCategoryValidator = void 0;
const zod_1 = require("zod");
exports.createCategoryValidator = zod_1.z.object({
    name: zod_1.z.string().min(3, { message: "Must be 5 or more characters long" }),
});
exports.updateCategoryValidator = zod_1.z.object({
    name: zod_1.z.string().min(3, { message: "Must be 5 or more characters long" }),
});
