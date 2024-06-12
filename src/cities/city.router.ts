import {Hono} from "hono"
import { deleteCity, getCityById, getCityWithRestaurants, insertCity, listAllCities, updateCity } from "./city.controller";
import { adminRoleAuth, bothRolesAuth, userRoleAuth } from "../middleWare/bearAuth";

export const cityRouter = new Hono();

//get all cities
cityRouter.get('/cities',adminRoleAuth, listAllCities)

//get city by id
cityRouter.get('/cities/:id',adminRoleAuth, getCityById)

//insert city
cityRouter.post('/cities',adminRoleAuth, insertCity)

//update city
cityRouter.put('/cities/:id',adminRoleAuth, updateCity)

//delete city
cityRouter.delete('/cities/:id',adminRoleAuth, deleteCity)

//get city with restaurants
cityRouter.get("/cities-with-restaurants",adminRoleAuth, getCityWithRestaurants)