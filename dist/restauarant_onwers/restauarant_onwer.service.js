"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRestaurantOwnerService = exports.updateRestaurantOwnerService = exports.insertRestaurantOwnerService = exports.getRestaurantOwnerByIdService = exports.restaurantOwnersService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const restaurantOwnersService = async () => {
    return await db_1.default.query.restaurant_owner_table.findMany();
};
exports.restaurantOwnersService = restaurantOwnersService;
const getRestaurantOwnerByIdService = async (id) => {
    return await db_1.default.query.restaurant_owner_table.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.restaurant_owner_table.restaurant_owner_id, id)
    });
};
exports.getRestaurantOwnerByIdService = getRestaurantOwnerByIdService;
const insertRestaurantOwnerService = async (restaurant_owner) => {
    await db_1.default.insert(schema_1.restaurant_owner_table).values(restaurant_owner);
    // .returning({id:restaurant_owner_table.restaurant_owner_id}
    return "Restaurant owner created successfully 🎉";
};
exports.insertRestaurantOwnerService = insertRestaurantOwnerService;
const updateRestaurantOwnerService = async (id, restaurant_owner) => {
    await db_1.default.update(schema_1.restaurant_owner_table).set(restaurant_owner).where((0, drizzle_orm_1.eq)(schema_1.restaurant_owner_table.restaurant_owner_id, id));
    return "Restaurant owner updated successfully 🎉";
};
exports.updateRestaurantOwnerService = updateRestaurantOwnerService;
const deleteRestaurantOwnerService = async (id) => {
    await db_1.default.delete(schema_1.restaurant_owner_table).where((0, drizzle_orm_1.eq)(schema_1.restaurant_owner_table.restaurant_owner_id, id));
    return "Restaurant owner deleted successfully 🎉";
};
exports.deleteRestaurantOwnerService = deleteRestaurantOwnerService;
