"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const hono_1 = require("hono");
const user_controller_1 = require("./user.controller");
const zod_validator_1 = require("@hono/zod-validator");
const user_validator_1 = require("../validators/user.validator");
const bearAuth_1 = require("../middleWare/bearAuth");
exports.userRouter = new hono_1.Hono();
//get all users
exports.userRouter.get('/users', bearAuth_1.adminRoleAuth, user_controller_1.listUsers);
//get user by id
exports.userRouter.get('/users/:id', user_controller_1.getUserById);
//insert user
exports.userRouter.post('/users', (0, zod_validator_1.zValidator)('json', user_validator_1.createUserValidator, (result, c) => {
    if (!result.success)
        return c.text(result.error.message + "😒", 400);
}), user_controller_1.insertUser);
//update user
exports.userRouter.put('/users/:id', user_controller_1.updateUser);
//delete user
exports.userRouter.delete('/users/:id', bearAuth_1.adminRoleAuth, user_controller_1.deleteUser);
