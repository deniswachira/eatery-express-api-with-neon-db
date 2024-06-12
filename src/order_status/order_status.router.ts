import {Hono} from "hono"
import { deleteOrderStatus, getOrderStatusById, insertOrderStatus, listOrdersStatus, updateOrderStatus } from "./order_status.controller";
import { adminRoleAuth, bothRolesAuth } from "../middleWare/bearAuth";


export const orderStatusRouter = new Hono();

//get all orders_status
orderStatusRouter.get('/orders-status',adminRoleAuth, listOrdersStatus);

//get orderstatus by id
orderStatusRouter.get('/orders-status/:id',adminRoleAuth, getOrderStatusById);

//insert orderstatus
orderStatusRouter.post('/orders-status',bothRolesAuth, insertOrderStatus);

//update orderstatus
orderStatusRouter.put('/orders-status/:id',bothRolesAuth, updateOrderStatus);

//delete orderstatus
orderStatusRouter.delete('/orders-status/:id',adminRoleAuth, deleteOrderStatus);