"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantRouter = void 0;
const hono_1 = require("hono");
const restaurant_controller_1 = require("./restaurant.controller");
exports.restaurantRouter = new hono_1.Hono();
//get all restaurants
exports.restaurantRouter.get('/restaurants', restaurant_controller_1.listRestaurants);
//get restaurant by id
exports.restaurantRouter.get('/restaurants/:id', restaurant_controller_1.getRestaurantById);
//insert restaurant
exports.restaurantRouter.post('/restaurants', restaurant_controller_1.insertRestaurant);
//update restaurant
exports.restaurantRouter.put('/restaurants/:id', restaurant_controller_1.updateRestaurant);
//delete restaurant
exports.restaurantRouter.delete('/restaurants/:id', restaurant_controller_1.deleteRestaurant);
