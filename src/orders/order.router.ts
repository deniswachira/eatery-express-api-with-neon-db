import {Hono} from "hono"
import { deleteOrder, getOrderById, insertOrder, listOrders, updateOrder } from "./order.controller";
import { adminRoleAuth, bothRolesAuth } from "../middleWare/bearAuth";

export const orderRouter = new Hono();

//get all orders
orderRouter.get('/orders',adminRoleAuth, listOrders)

//get order by id
orderRouter.get('/orders/:id',bothRolesAuth, getOrderById)

//insert order
orderRouter.post('/orders',bothRolesAuth, insertOrder)

//update order
orderRouter.put('/orders/:id',adminRoleAuth, updateOrder)

//delete order
orderRouter.delete('/orders/:id',adminRoleAuth, deleteOrder)