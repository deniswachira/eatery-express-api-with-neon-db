import {Hono} from "hono"
import { deleteOrder, getOrderById, getOrderDetails, insertOrder, listOrders, updateOrder } from "./order.controller";
import { adminRoleAuth, bothRolesAuth } from "../middleWare/bearAuth";

export const orderRouter = new Hono();

//get all orders
orderRouter.get('/orders',adminRoleAuth, listOrders)

//get order by id
orderRouter.get('/orders/:id',adminRoleAuth, getOrderById)

// get order details
orderRouter.get('/order-with-details/:id',adminRoleAuth, getOrderDetails)

//insert order
orderRouter.post('/orders',adminRoleAuth, insertOrder)

//update order
orderRouter.put('/orders/:id',adminRoleAuth, updateOrder)

//delete order
orderRouter.delete('/orders/:id',adminRoleAuth, deleteOrder)