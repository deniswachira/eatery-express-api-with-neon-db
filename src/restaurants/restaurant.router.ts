import {Hono} from "hono"
import { deleteRestaurant, getRestaurantById, insertRestaurant, listRestaurants, updateRestaurant } from "./restaurant.controller";
import { adminRoleAuth, bothRolesAuth } from "../middleWare/bearAuth";

export const restaurantRouter = new Hono();

//get all restaurants
restaurantRouter.get('/restaurants',bothRolesAuth, listRestaurants)

//get restaurant by id
restaurantRouter.get('/restaurants/:id',adminRoleAuth, getRestaurantById)

//insert restaurant
restaurantRouter.post('/restaurants',adminRoleAuth, insertRestaurant)

//update restaurant
restaurantRouter.put('/restaurants/:id',adminRoleAuth, updateRestaurant)

//delete restaurant
restaurantRouter.delete('/restaurants/:id', adminRoleAuth, deleteRestaurant)