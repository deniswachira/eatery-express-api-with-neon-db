"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStatusCatalogService = exports.updateStatusCatalogService = exports.insertStatusCatalogService = exports.getStatusCatalogByIdService = exports.statusCatalogService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const statusCatalogService = async () => {
    return await db_1.default.query.status_catalog_table.findMany();
};
exports.statusCatalogService = statusCatalogService;
const getStatusCatalogByIdService = async (id) => {
    return await db_1.default.query.status_catalog_table.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.status_catalog_table.status_catalog_id, id)
    });
};
exports.getStatusCatalogByIdService = getStatusCatalogByIdService;
const insertStatusCatalogService = async (statusCatalog) => {
    await db_1.default.insert(schema_1.status_catalog_table).values(statusCatalog);
    // .returning({id:status_catalog_table.status_catalog_id}
    return "Status Catalog created successfully 🎉";
};
exports.insertStatusCatalogService = insertStatusCatalogService;
const updateStatusCatalogService = async (id, statusCatalog) => {
    await db_1.default.update(schema_1.status_catalog_table).set(statusCatalog).where((0, drizzle_orm_1.eq)(schema_1.status_catalog_table.status_catalog_id, id));
    return "Status Catalog updated successfully 🎉";
};
exports.updateStatusCatalogService = updateStatusCatalogService;
const deleteStatusCatalogService = async (id) => {
    await db_1.default.delete(schema_1.status_catalog_table).where((0, drizzle_orm_1.eq)(schema_1.status_catalog_table.status_catalog_id, id));
    return "Status Catalog deleted successfully 🎉";
};
exports.deleteStatusCatalogService = deleteStatusCatalogService;
