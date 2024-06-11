"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuItemRouter = void 0;
const hono_1 = require("hono");
const menu_item_controller_1 = require("./menu_item.controller");
exports.menuItemRouter = new hono_1.Hono();
//get all menu items
exports.menuItemRouter.get("/menu-item", menu_item_controller_1.listMenuItems);
//get menu item by id
exports.menuItemRouter.get("/menu-item/:id", menu_item_controller_1.getMenuItemById);
//insert menu item
exports.menuItemRouter.post("/menu-item", menu_item_controller_1.insertMenuItem);
//update   menu item 
exports.menuItemRouter.put("/menu-item/:id", menu_item_controller_1.updateMenuItem);
//delete
exports.menuItemRouter.delete("/menu-item/:id", menu_item_controller_1.deleteMenuItem);
