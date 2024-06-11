"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStateWithCities = exports.deleteState = exports.updateState = exports.insertState = exports.getStateById = exports.listAllStates = void 0;
const state_service_1 = require("./state.service");
//list of states
const listAllStates = async (c) => {
    try {
        const states = await (0, state_service_1.statesService)();
        if (states === null)
            return c.text("No states found");
        return c.json(states, 200);
    }
    catch (error) {
        return c.text("Error while fetching states");
    }
};
exports.listAllStates = listAllStates;
//get state by id
const getStateById = async (c) => {
    const id = parseInt(c.req.param("id"));
    try {
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        //search for state    
        const state = await (0, state_service_1.getStateByIdService)(id);
        if (state === undefined)
            return c.text("State not found", 404);
        return c.json(state, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.getStateById = getStateById;
//insert state
const insertState = async (c) => {
    try {
        const state = await c.req.json();
        const createdState = await (0, state_service_1.insertStateService)(state);
        if (!createdState) {
            return c.json({ msg: createdState }, 400);
        }
        return c.json(state, 201);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.insertState = insertState;
//update state
const updateState = async (c) => {
    // return c.text("Not implemented yet", 501);
    const id = Number(c.req.param("id"));
    const state = await c.req.json();
    try {
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        //search for state
        const existingState = await (0, state_service_1.getStateByIdService)(id);
        if (existingState === undefined)
            return c.text("State not found", 404);
        //update state
        const updatedState = await (0, state_service_1.updateStateService)(id, state);
        return c.json({ msg: updatedState }, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.updateState = updateState;
//delete state
const deleteState = async (c) => {
    const id = parseInt(c.req.param("id"));
    try {
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        //search for state
        const existingState = await (0, state_service_1.getStateByIdService)(id);
        if (existingState === undefined)
            return c.text("State not found", 404);
        //delete state
        const deletedState = await (0, state_service_1.deleteStateService)(id);
        return c.json({ msg: deletedState }, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.deleteState = deleteState;
const getStateWithCities = async (c) => {
    try {
        const statesWithCites = await (0, state_service_1.getStatesWithCitiesService)();
        if (statesWithCites === null)
            return c.text("No states with cities found");
        return c.json(statesWithCites, 200);
    }
    catch (error) {
        return c.text("Error while fetching states with cities");
    }
};
exports.getStateWithCities = getStateWithCities;
