"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDriverService = exports.updateDriverService = exports.insertDriverService = exports.getDriverByIdService = exports.driversService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const driversService = async () => {
    return await db_1.default.query.driver_table.findMany();
};
exports.driversService = driversService;
const getDriverByIdService = async (id) => {
    return await db_1.default.query.driver_table.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.driver_table.driver_id, id)
    });
};
exports.getDriverByIdService = getDriverByIdService;
const insertDriverService = async (driver) => {
    await db_1.default.insert(schema_1.driver_table).values(driver);
    // .returning({id:driver_table.driver_id}
    return "Driver created successfully 🎉";
};
exports.insertDriverService = insertDriverService;
const updateDriverService = async (id, driver) => {
    await db_1.default.update(schema_1.driver_table).set(driver).where((0, drizzle_orm_1.eq)(schema_1.driver_table.driver_id, id));
    return "Driver updated successfully 🎉";
};
exports.updateDriverService = updateDriverService;
const deleteDriverService = async (id) => {
    await db_1.default.delete(schema_1.driver_table).where((0, drizzle_orm_1.eq)(schema_1.driver_table.driver_id, id));
    return "Driver deleted successfully 🎉";
};
exports.deleteDriverService = deleteDriverService;
