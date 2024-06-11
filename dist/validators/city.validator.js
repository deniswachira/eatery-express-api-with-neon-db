"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCityValidator = exports.createCityValidator = void 0;
const zod_1 = require("zod");
exports.createCityValidator = zod_1.z.object({
    city_name: zod_1.z.string().min(3, { message: "Must be 5 or more characters long" }),
    state_id: zod_1.z.number().min(1, { message: "Must be 5 or more characters long" }),
});
exports.updateCityValidator = zod_1.z.object({
    city_name: zod_1.z.string().min(3, { message: "Must be 5 or more characters long" }),
    state_id: zod_1.z.number().min(1, { message: "Must be 5 or more characters long" }),
});
