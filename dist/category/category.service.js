"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategoryService = exports.updateCategoryService = exports.insertCategoryService = exports.getCategoryByIdService = exports.categoriesService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const categoriesService = async () => {
    return await db_1.default.query.category_table.findMany();
};
exports.categoriesService = categoriesService;
const getCategoryByIdService = async (id) => {
    return await db_1.default.query.category_table.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.category_table.category_id, id)
    });
};
exports.getCategoryByIdService = getCategoryByIdService;
const insertCategoryService = async (category) => {
    await db_1.default.insert(schema_1.category_table).values(category);
    // .returning({id:category_table.category_id}
    return "Category created successfully 🎉";
};
exports.insertCategoryService = insertCategoryService;
const updateCategoryService = async (id, category) => {
    await db_1.default.update(schema_1.category_table).set(category).where((0, drizzle_orm_1.eq)(schema_1.category_table.category_id, id));
    return "Category updated successfully 🎉";
};
exports.updateCategoryService = updateCategoryService;
const deleteCategoryService = async (id) => {
    await db_1.default.delete(schema_1.category_table).where((0, drizzle_orm_1.eq)(schema_1.category_table.category_id, id));
    return "Category deleted successfully 🎉";
};
exports.deleteCategoryService = deleteCategoryService;
