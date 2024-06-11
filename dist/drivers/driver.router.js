"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.driverRouter = void 0;
const hono_1 = require("hono");
const driver_controller_1 = require("./driver.controller");
exports.driverRouter = new hono_1.Hono();
//get all drivers
exports.driverRouter.get('/drivers', driver_controller_1.listDrivers);
//get comment by id
exports.driverRouter.get('/drivers/:id', driver_controller_1.getDriverById);
//insert comment
exports.driverRouter.post('/drivers', driver_controller_1.insertDriver);
//update comment
exports.driverRouter.put('/drivers/:id', driver_controller_1.updateDriver);
//delete comment
exports.driverRouter.delete('/drivers/:id', driver_controller_1.deleteDriver);
