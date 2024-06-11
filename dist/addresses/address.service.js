"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAddressService = exports.updateAddressService = exports.insertAddressService = exports.getAddressByIdService = exports.addressesService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const addressesService = async () => {
    return await db_1.default.query.address_table.findMany();
};
exports.addressesService = addressesService;
const getAddressByIdService = async (id) => {
    return await db_1.default.query.address_table.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.address_table.address_id, id)
    });
};
exports.getAddressByIdService = getAddressByIdService;
const insertAddressService = async (address) => {
    await db_1.default.insert(schema_1.address_table).values(address);
    // .returning({id:address_table.address_id}
    return "Address created successfully 🎉";
};
exports.insertAddressService = insertAddressService;
const updateAddressService = async (id, address) => {
    await db_1.default.update(schema_1.address_table).set(address).where((0, drizzle_orm_1.eq)(schema_1.address_table.address_id, id));
    return "Address updated successfully 🎉";
};
exports.updateAddressService = updateAddressService;
const deleteAddressService = async (id) => {
    await db_1.default.delete(schema_1.address_table).where((0, drizzle_orm_1.eq)(schema_1.address_table.address_id, id));
    return "Address deleted successfully 🎉";
};
exports.deleteAddressService = deleteAddressService;
