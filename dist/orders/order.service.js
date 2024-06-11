"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderService = exports.updateOrderService = exports.insertOrderService = exports.getOrderByIdService = exports.ordersService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const ordersService = async () => {
    return await db_1.default.query.order_table.findMany();
};
exports.ordersService = ordersService;
const getOrderByIdService = async (id) => {
    return await db_1.default.query.order_table.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.order_table.order_id, id)
    });
};
exports.getOrderByIdService = getOrderByIdService;
const insertOrderService = async (order) => {
    await db_1.default.insert(schema_1.order_table).values(order);
    // .returning({id:order_table.order_id}
    return "Order created successfully 🎉";
};
exports.insertOrderService = insertOrderService;
const updateOrderService = async (id, order) => {
    await db_1.default.update(schema_1.order_table).set(order).where((0, drizzle_orm_1.eq)(schema_1.order_table.order_id, id));
    return "Order updated successfully 🎉";
};
exports.updateOrderService = updateOrderService;
const deleteOrderService = async (id) => {
    await db_1.default.delete(schema_1.order_table).where((0, drizzle_orm_1.eq)(schema_1.order_table.order_id, id));
    return "Order deleted successfully 🎉";
};
exports.deleteOrderService = deleteOrderService;
