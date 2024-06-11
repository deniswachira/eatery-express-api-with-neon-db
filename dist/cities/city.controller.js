"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCityWithRestaurants = exports.deleteCity = exports.updateCity = exports.insertCity = exports.getCityById = exports.listAllCities = void 0;
const city_service_1 = require("./city.service");
//list of cities
const listAllCities = async (c) => {
    try {
        const cities = await (0, city_service_1.citiesService)();
        if (cities === null)
            return c.text("No cities found");
        return c.json(cities, 200);
    }
    catch (error) {
        return c.text("Error while fetching cities");
    }
};
exports.listAllCities = listAllCities;
//get city by id
const getCityById = async (c) => {
    const id = parseInt(c.req.param("id"));
    try {
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        //search for city    
        const city = await (0, city_service_1.getCityByIdService)(id);
        if (city === undefined)
            return c.text("City not found", 404);
        return c.json(city, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.getCityById = getCityById;
//insert city
const insertCity = async (c) => {
    try {
        const city = await c.req.json();
        const createdCity = await (0, city_service_1.insertCityService)(city);
        if (!createdCity) {
            return c.json({ msg: createdCity }, 400);
        }
        return c.json(city, 201);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.insertCity = insertCity;
//update city
const updateCity = async (c) => {
    // return c.text("Not implemented yet", 501);
    const id = Number(c.req.param("id"));
    const city = await c.req.json();
    try {
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        //search for city
        const existingCity = await (0, city_service_1.getCityByIdService)(id);
        if (existingCity === undefined)
            return c.text("City not found", 404);
        //update city
        const updatedCity = await (0, city_service_1.updateCityService)(id, city);
        return c.json({ msg: updatedCity }, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.updateCity = updateCity;
//delete city
const deleteCity = async (c) => {
    // return c.text("Not implemented yet", 501);
    const id = Number(c.req.param("id"));
    try {
        //delete city
        const deletedCity = await (0, city_service_1.deleteCityService)(id);
        return c.json({ msg: deletedCity }, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.deleteCity = deleteCity;
//get city with restaurants
const getCityWithRestaurants = async (c) => {
    try {
        const citiesWithRestaurants = await (0, city_service_1.getCitiesWithRestaurantsService)();
        if (citiesWithRestaurants === null)
            return c.text("No cities with restaurant found");
        return c.json(citiesWithRestaurants, 200);
    }
    catch (error) {
        return c.text("Error while fetching cities with restaurants");
    }
};
exports.getCityWithRestaurants = getCityWithRestaurants;
