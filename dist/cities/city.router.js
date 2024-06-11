"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cityRouter = void 0;
const hono_1 = require("hono");
const city_controller_1 = require("./city.controller");
const bearAuth_1 = require("../middleWare/bearAuth");
exports.cityRouter = new hono_1.Hono();
//get all cities
exports.cityRouter.get('/cities', city_controller_1.listAllCities);
//get city by id
exports.cityRouter.get('/cities/:id', city_controller_1.getCityById);
//insert city
exports.cityRouter.post('/cities', city_controller_1.insertCity);
//update city
exports.cityRouter.put('/cities/:id', city_controller_1.updateCity);
//delete city
exports.cityRouter.delete('/cities/:id', city_controller_1.deleteCity);
//get city with restaurants
exports.cityRouter.get("/cities-with-restaurants", bearAuth_1.userRoleAuth, city_controller_1.getCityWithRestaurants);
