"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderStatusService = exports.updateOrderStatusService = exports.insertOrderStatusService = exports.getOrderStatusByIdService = exports.orderStatusService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const orderStatusService = async () => {
    return await db_1.default.query.order_status_table.findMany();
};
exports.orderStatusService = orderStatusService;
const getOrderStatusByIdService = async (id) => {
    return await db_1.default.query.order_status_table.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.order_status_table.order_status_id, id)
    });
};
exports.getOrderStatusByIdService = getOrderStatusByIdService;
const insertOrderStatusService = async (order_status) => {
    await db_1.default.insert(schema_1.order_status_table).values(order_status);
    // .returning({id:order_status_table.order_status_id}
    return "Order status created successfully 🎉";
};
exports.insertOrderStatusService = insertOrderStatusService;
const updateOrderStatusService = async (id, order_status) => {
    await db_1.default.update(schema_1.order_status_table).set(order_status).where((0, drizzle_orm_1.eq)(schema_1.order_status_table.order_status_id, id));
    return "Order status updated successfully 🎉";
};
exports.updateOrderStatusService = updateOrderStatusService;
const deleteOrderStatusService = async (id) => {
    await db_1.default.delete(schema_1.order_status_table).where((0, drizzle_orm_1.eq)(schema_1.order_status_table.order_status_id, id));
    return "Order status deleted successfully 🎉";
};
exports.deleteOrderStatusService = deleteOrderStatusService;
