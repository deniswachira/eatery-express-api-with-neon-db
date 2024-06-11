"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const hono_1 = require("hono");
const zod_validator_1 = require("@hono/zod-validator");
const user_validator_1 = require("../validators/user.validator");
const auth_controller_1 = require("./auth.controller");
exports.authRouter = new hono_1.Hono();
exports.authRouter.post('/register', (0, zod_validator_1.zValidator)('json', user_validator_1.registerValidator, (result, c) => { if (!result.success)
    return c.text(result.error.message + "😒", 400); }), auth_controller_1.registerUser);
exports.authRouter.post('/login', (0, zod_validator_1.zValidator)('json', user_validator_1.loginValidator, (result, c) => { if (!result.success)
    return c.text(result.error.message + "😒", 400); }), auth_controller_1.loginUser);
