"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderStatusRouter = void 0;
const hono_1 = require("hono");
const order_status_controller_1 = require("./order_status.controller");
exports.orderStatusRouter = new hono_1.Hono();
//get all orders_status
exports.orderStatusRouter.get('/orders-status', order_status_controller_1.listOrdersStatus);
//get orderstatus by id
exports.orderStatusRouter.get('/orders-status/:id', order_status_controller_1.getOrderStatusById);
//insert orderstatus
exports.orderStatusRouter.post('/orders-status', order_status_controller_1.insertOrderStatus);
//update orderstatus
exports.orderStatusRouter.put('/orderstatus/:id', order_status_controller_1.updateOrderStatus);
//delete orderstatus
exports.orderStatusRouter.delete('/orderstatus/:id', order_status_controller_1.deleteOrderStatus);
