"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantOwnerRouter = void 0;
const hono_1 = require("hono");
const restauarant_onwer_controller_1 = require("./restauarant_onwer.controller");
exports.restaurantOwnerRouter = new hono_1.Hono();
//list restaurants
exports.restaurantOwnerRouter.get("/restaurants", restauarant_onwer_controller_1.listRestaurantOwners);
//get restaurant by id
exports.restaurantOwnerRouter.get("/restaurants/:id", restauarant_onwer_controller_1.getRestaurantOwnerById);
//insert restaurant
exports.restaurantOwnerRouter.post("/restaurants", restauarant_onwer_controller_1.insertRestaurantOwner);
//update restaurant
exports.restaurantOwnerRouter.put("/restaurants/:id", restauarant_onwer_controller_1.updateRestaurantOwner);
//delete restaurant
exports.restaurantOwnerRouter.delete("/restaurants/:id", restauarant_onwer_controller_1.deleteRestaurantOwner);
