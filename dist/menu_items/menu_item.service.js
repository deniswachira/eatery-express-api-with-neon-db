"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMenuItemService = exports.updateMenuItemService = exports.insertMenuItemService = exports.getMenuItemByIdService = exports.menuItemsService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const menuItemsService = async () => {
    return await db_1.default.query.menu_item_table.findMany();
};
exports.menuItemsService = menuItemsService;
const getMenuItemByIdService = async (id) => {
    return await db_1.default.query.menu_item_table.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.menu_item_table.menu_item_id, id)
    });
};
exports.getMenuItemByIdService = getMenuItemByIdService;
const insertMenuItemService = async (menu_item) => {
    await db_1.default.insert(schema_1.menu_item_table).values(menu_item);
    // .returning({id:menu_item_table.menu_item_id}
    return "Menu item created successfully 🎉";
};
exports.insertMenuItemService = insertMenuItemService;
const updateMenuItemService = async (id, menu_item) => {
    await db_1.default.update(schema_1.menu_item_table).set(menu_item).where((0, drizzle_orm_1.eq)(schema_1.menu_item_table.menu_item_id, id));
    return "Menu item updated successfully 🎉";
};
exports.updateMenuItemService = updateMenuItemService;
const deleteMenuItemService = async (id) => {
    await db_1.default.delete(schema_1.menu_item_table).where((0, drizzle_orm_1.eq)(schema_1.menu_item_table.menu_item_id, id));
    return "Menu item deleted successfully 🎉";
};
exports.deleteMenuItemService = deleteMenuItemService;
