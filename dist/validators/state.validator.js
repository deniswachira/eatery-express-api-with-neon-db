"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStateValidator = exports.createStateValidator = void 0;
const zod_1 = require("zod");
exports.createStateValidator = zod_1.z.object({
    name: zod_1.z.string().min(3, { message: "Must be 5 or more characters long" }),
    code: zod_1.z.string().max(3, { message: "Must be 5 or more characters long" })
});
exports.updateStateValidator = zod_1.z.object({
    name: zod_1.z.string().min(3, { message: "Must be 5 or more characters long" }),
    code: zod_1.z.string().max(3, { message: "Must be 5 or more characters long" })
});
