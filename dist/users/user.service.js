"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserService = exports.updateUserService = exports.insertUserService = exports.getUserByIdService = exports.usersService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const usersService = async () => {
    return await db_1.default.query.user_table.findMany();
};
exports.usersService = usersService;
const getUserByIdService = async (id) => {
    return await db_1.default.query.user_table.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.user_table.user_id, id)
    });
};
exports.getUserByIdService = getUserByIdService;
const insertUserService = async (user) => {
    await db_1.default.insert(schema_1.user_table).values(user);
    // .returning({id:user_table.user_id}
    return "User created successfully 🎉";
};
exports.insertUserService = insertUserService;
const updateUserService = async (id, user) => {
    await db_1.default.update(schema_1.user_table).set(user).where((0, drizzle_orm_1.eq)(schema_1.user_table.user_id, id));
    return "User updated successfully 🎉";
};
exports.updateUserService = updateUserService;
const deleteUserService = async (id) => {
    await db_1.default.delete(schema_1.user_table).where((0, drizzle_orm_1.eq)(schema_1.user_table.user_id, id));
    return "User deleted successfully 🎉";
};
exports.deleteUserService = deleteUserService;
