"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserService = exports.createUserService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const createUserService = async (user) => {
    await db_1.default.insert(schema_1.auth_on_users_table).values(user);
    // .returning({id:user_table.user_id}
    return "User Registered successfully 🎉";
};
exports.createUserService = createUserService;
const loginUserService = async (user) => {
    const { username, password } = user;
    return await db_1.default.query.auth_on_users_table.findFirst({
        columns: {
            username: true,
            role: true,
            password: true,
        }, where: (0, drizzle_orm_1.sql) `${schema_1.auth_on_users_table.username} = ${username}`,
        with: {
            user: {
                columns: {
                    user_id: true,
                    fullname: true,
                    email: true,
                    phone: true,
                }
            }
        }
    });
};
exports.loginUserService = loginUserService;
