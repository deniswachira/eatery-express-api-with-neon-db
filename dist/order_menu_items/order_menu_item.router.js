"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderMenuItemRouter = void 0;
const hono_1 = require("hono");
const order_menu_item_controller_1 = require("./order_menu_item.controller");
exports.orderMenuItemRouter = new hono_1.Hono();
//list order menu items
exports.orderMenuItemRouter.get("/order_menu_items", order_menu_item_controller_1.listOrderMenuItems);
//get order menu item by id
exports.orderMenuItemRouter.get("/order_menu_items/:id", order_menu_item_controller_1.getOrderMenuItemById);
//insert order menu item
exports.orderMenuItemRouter.post("/order_menu_items", order_menu_item_controller_1.insertOrderMenuItem);
//update order menu item
exports.orderMenuItemRouter.put("/order_menu_items/:id", order_menu_item_controller_1.insertOrderMenuItem);
//delete order menu item
exports.orderMenuItemRouter.delete("/order_menu_items/:id", order_menu_item_controller_1.insertOrderMenuItem);
