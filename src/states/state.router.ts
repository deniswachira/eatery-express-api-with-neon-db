import {Hono} from "hono"
import { deleteState, getStateById, getStateWithCities, insertState, listAllStates, updateState } from "./state.controller";
import { adminRoleAuth, bothRolesAuth } from "../middleWare/bearAuth";

export const stateRouter = new Hono();

//get all states
stateRouter.get('/state',adminRoleAuth, listAllStates)

//get state by id
stateRouter.get('/state/:id',adminRoleAuth, getStateById)

//insert state
stateRouter.post('/state',adminRoleAuth, insertState)

//update state
stateRouter.put('/state/:id',adminRoleAuth, updateState)

//delete state
stateRouter.delete("/state/:id",adminRoleAuth, deleteState)

stateRouter.get("/state-with-cities",bothRolesAuth, getStateWithCities)
