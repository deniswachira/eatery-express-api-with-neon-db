import {Hono} from 'hono'

import { deleteRestaurantOwner, getRestaurantOwnerById, insertRestaurantOwner, listRestaurantOwners, updateRestaurantOwner } from  './restauarant_onwer.controller';
import { adminRoleAuth } from '../middleWare/bearAuth';

export const restaurantOwnerRouter = new Hono();

//list restaurants
restaurantOwnerRouter.get("/restaurants",adminRoleAuth,listRestaurantOwners);

//get restaurant by id
restaurantOwnerRouter.get("/restaurants/:id",adminRoleAuth, getRestaurantOwnerById);

//insert restaurant
restaurantOwnerRouter.post("/restaurants",adminRoleAuth, insertRestaurantOwner);

//update restaurant
restaurantOwnerRouter.put("/restaurants/:id",adminRoleAuth, updateRestaurantOwner);

//delete restaurant
restaurantOwnerRouter.delete("/restaurants/:id",adminRoleAuth, deleteRestaurantOwner);