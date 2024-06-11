"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stateRouter = void 0;
const hono_1 = require("hono");
const state_controller_1 = require("./state.controller");
exports.stateRouter = new hono_1.Hono();
//get all states
exports.stateRouter.get('/state', state_controller_1.listAllStates);
//get state by id
exports.stateRouter.get('/state/:id', state_controller_1.getStateById);
//insert state
exports.stateRouter.post('/state', state_controller_1.insertState);
//update state
exports.stateRouter.put('/state/:id', state_controller_1.updateState);
//delete state
exports.stateRouter.delete("/state/:id", state_controller_1.deleteState);
exports.stateRouter.get("/state-with-cities", state_controller_1.getStateWithCities);
