"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStatusCatalogValidator = exports.createStatusCatalogValidator = void 0;
const zod_1 = require("zod");
exports.createStatusCatalogValidator = zod_1.z.object({
    status: zod_1.z.string().min(5, { message: "Must be 5 or more characters long" })
});
exports.updateStatusCatalogValidator = zod_1.z.object({
    status: zod_1.z.string().min(5, { message: "Must be 5 or more characters long" })
});
