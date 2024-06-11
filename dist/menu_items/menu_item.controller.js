"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMenuItem = exports.updateMenuItem = exports.insertMenuItem = exports.getMenuItemById = exports.listMenuItems = void 0;
const menu_item_service_1 = require("./menu_item.service");
//list menu_items
const listMenuItems = async (c) => {
    try {
        const menu_items = await (0, menu_item_service_1.menuItemsService)();
        if (menu_items == null)
            return c.text("No menu_items found 😒", 404);
        return c.json(menu_items, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.listMenuItems = listMenuItems;
//get menu_item by id
const getMenuItemById = async (c) => {
    // return c.text("Not implemented yet",501)
    const id = parseInt(c.req.param("id"));
    try {
        if (isNaN(id))
            return c.text("Invalid ID 😒", 400);
        //search for menu_item
        const menu_item = await (0, menu_item_service_1.getMenuItemByIdService)(id);
        if (menu_item == undefined)
            return c.text("Menu_item not found 😒", 404);
        return c.json(menu_item, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.getMenuItemById = getMenuItemById;
//insert menu_item
const insertMenuItem = async (c) => {
    // return c.text("Not implemented yet",501)
    try {
        const menu_item = await c.req.json();
        const createdMenuItem = await (0, menu_item_service_1.insertMenuItemService)(menu_item);
        if (!createdMenuItem) {
            return c.text("Menu_item not created 😒", 400);
        }
        return c.json(menu_item, 201);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.insertMenuItem = insertMenuItem;
//update menu_item
const updateMenuItem = async (c) => {
    // return c.text("Not implemented yet",501)
    const id = Number(c.req.param("id"));
    const menu_item = await c.req.json();
    try {
        if (isNaN(id))
            return c.text("Invalid ID 😒", 400);
        //search for menu_item
        const existingMenuItem = await (0, menu_item_service_1.getMenuItemByIdService)(id);
        if (existingMenuItem == undefined)
            return c.text("Menu_item not found 😒", 404);
        //update menu_item
        const updatedMenuItem = await (0, menu_item_service_1.updateMenuItemService)(id, menu_item);
        return c.json({ msg: updatedMenuItem }, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.updateMenuItem = updateMenuItem;
//delete menu_item
const deleteMenuItem = async (c) => {
    // return c.text("Not implemented yet",501)
    const id = Number(c.req.param("id"));
    try {
        if (isNaN(id))
            return c.text("Invalid ID 😒", 400);
        //search for menu_item
        const existingMenuItem = await (0, menu_item_service_1.getMenuItemByIdService)(id);
        if (existingMenuItem == undefined)
            return c.text("Menu_item not found 😒", 404);
        //delete menu_item
        const deletedMenuItem = await (0, menu_item_service_1.deleteMenuItemService)(id);
        return c.json({ msg: deletedMenuItem }, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.deleteMenuItem = deleteMenuItem;
