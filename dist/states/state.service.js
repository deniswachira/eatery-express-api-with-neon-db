"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatesWithCitiesService = exports.deleteStateService = exports.updateStateService = exports.insertStateService = exports.getStateByIdService = exports.statesService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const statesService = async () => {
    return await db_1.default.query.state_table.findMany();
};
exports.statesService = statesService;
const getStateByIdService = async (id) => {
    return await db_1.default.query.state_table.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.state_table.state_id, id)
    });
};
exports.getStateByIdService = getStateByIdService;
const insertStateService = async (state) => {
    await db_1.default.insert(schema_1.state_table).values(state);
    // .returning({id:state_table.state_id}
    return "State created successfully 🎉";
};
exports.insertStateService = insertStateService;
const updateStateService = async (id, state) => {
    await db_1.default.update(schema_1.state_table).set(state).where((0, drizzle_orm_1.eq)(schema_1.state_table.state_id, id));
    return "State updated successfully 🎉";
};
exports.updateStateService = updateStateService;
const deleteStateService = async (id) => {
    await db_1.default.delete(schema_1.state_table).where((0, drizzle_orm_1.eq)(schema_1.state_table.state_id, id));
    return "State deleted successfully 🎉";
};
exports.deleteStateService = deleteStateService;
const getStatesWithCitiesService = async () => {
    return await db_1.default.query.state_table.findMany({
        with: {
            cities: true
        }
    });
};
exports.getStatesWithCitiesService = getStatesWithCitiesService;
