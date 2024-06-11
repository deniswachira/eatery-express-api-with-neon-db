"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCommentValidator = exports.createCommentValidator = void 0;
const zod_1 = require("zod");
exports.createCommentValidator = zod_1.z.object({
    user_id: zod_1.z.number().min(1, { message: "Must be 5 or more characters long" }),
    order_id: zod_1.z.number().min(1, { message: "Must be 5 or more characters long" }),
    comment_text: zod_1.z.string().min(3, { message: "Must be 5 or more characters long" }),
    is_complaint: zod_1.z.boolean(),
    is_praise: zod_1.z.boolean(),
});
exports.updateCommentValidator = zod_1.z.object({
    user_id: zod_1.z.number().min(1, { message: "Must be 5 or more characters long" }),
    order_id: zod_1.z.number().min(1, { message: "Must be 5 or more characters long" }),
    comment_text: zod_1.z.string().min(3, { message: "Must be 5 or more characters long" }),
    is_complaint: zod_1.z.boolean(),
    is_praise: zod_1.z.boolean(),
});
