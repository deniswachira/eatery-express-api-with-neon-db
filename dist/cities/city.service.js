"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCityWithStateService = exports.getCitiesWithRestaurantsService = exports.deleteCityService = exports.updateCityService = exports.insertCityService = exports.getCityByIdService = exports.citiesService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const citiesService = async () => {
    return await db_1.default.query.city_table.findMany();
};
exports.citiesService = citiesService;
const getCityByIdService = async (id) => {
    return await db_1.default.query.city_table.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.city_table.city_id, id)
    });
};
exports.getCityByIdService = getCityByIdService;
const insertCityService = async (city) => {
    await db_1.default.insert(schema_1.city_table).values(city);
    // .returning({id:city_table.city_id}
    return "City created successfully 🎉";
};
exports.insertCityService = insertCityService;
const updateCityService = async (id, city) => {
    await db_1.default.update(schema_1.city_table).set(city).where((0, drizzle_orm_1.eq)(schema_1.city_table.city_id, id));
    return "City updated successfully 🎉";
};
exports.updateCityService = updateCityService;
const deleteCityService = async (id) => {
    await db_1.default.delete(schema_1.city_table).where((0, drizzle_orm_1.eq)(schema_1.city_table.city_id, id));
    return "City deleted successfully 🎉";
};
exports.deleteCityService = deleteCityService;
const getCitiesWithRestaurantsService = async () => {
    return await db_1.default.query.city_table.findMany({
        with: {
            // list colums
            restaurants: true
        }
    });
};
exports.getCitiesWithRestaurantsService = getCitiesWithRestaurantsService;
const getCityWithStateService = async () => {
    return await db_1.default.query.city_table.findMany({
        with: {
            state: true
        }
    });
};
exports.getCityWithStateService = getCityWithStateService;
