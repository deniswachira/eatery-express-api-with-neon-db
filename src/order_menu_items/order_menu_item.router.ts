import {Hono} from 'hono'
import { getOrderMenuItemById, insertOrderMenuItem, listOrderMenuItems } from  './order_menu_item.controller'
import { adminRoleAuth } from '../middleWare/bearAuth';

export const orderMenuItemRouter = new Hono();

//list order menu items
orderMenuItemRouter.get("/order_menu_items",adminRoleAuth, listOrderMenuItems);

//get order menu item by id
orderMenuItemRouter.get("/order_menu_items/:id",adminRoleAuth, getOrderMenuItemById);

//insert order menu item
orderMenuItemRouter.post("/order_menu_items",adminRoleAuth,insertOrderMenuItem);

//update order menu item
orderMenuItemRouter.put("/order_menu_items/:id",adminRoleAuth,insertOrderMenuItem);

//delete order menu item
orderMenuItemRouter.delete("/order_menu_items/:id",adminRoleAuth,insertOrderMenuItem);