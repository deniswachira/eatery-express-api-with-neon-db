"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRestaurantService = exports.updateRestaurantService = exports.insertRestaurantService = exports.getRestaurantByIdService = exports.restaurantsService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const restaurantsService = async () => {
    return await db_1.default.query.restaurant_table.findMany();
};
exports.restaurantsService = restaurantsService;
const getRestaurantByIdService = async (id) => {
    return await db_1.default.query.restaurant_table.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.restaurant_table.restaurant_id, id)
    });
};
exports.getRestaurantByIdService = getRestaurantByIdService;
const insertRestaurantService = async (restaurant) => {
    await db_1.default.insert(schema_1.restaurant_table).values(restaurant);
    // .returning({id:restaurant_table.restaurant_id}
    return "Restaurant created successfully 🎉";
};
exports.insertRestaurantService = insertRestaurantService;
const updateRestaurantService = async (id, restaurant) => {
    await db_1.default.update(schema_1.restaurant_table).set(restaurant).where((0, drizzle_orm_1.eq)(schema_1.restaurant_table.restaurant_id, id));
    return "Restaurant updated successfully 🎉";
};
exports.updateRestaurantService = updateRestaurantService;
const deleteRestaurantService = async (id) => {
    await db_1.default.delete(schema_1.restaurant_table).where((0, drizzle_orm_1.eq)(schema_1.restaurant_table.restaurant_id, id));
    return "Restaurant deleted successfully 🎉";
};
exports.deleteRestaurantService = deleteRestaurantService;
