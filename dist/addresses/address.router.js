"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressRouter = void 0;
const hono_1 = require("hono");
const address_controller_1 = require("./address.controller");
exports.addressRouter = new hono_1.Hono();
//get all addresses
exports.addressRouter.get('/addresses', address_controller_1.listAddresses);
//get address by id
exports.addressRouter.get('/addresses/:id', address_controller_1.getAddressById);
//insert address
exports.addressRouter.post('/addresses', address_controller_1.insertAddress);
//update address
exports.addressRouter.put('/addresses/:id', address_controller_1.updateAddress);
//delete address
exports.addressRouter.delete('/addresses/:id', address_controller_1.deleteAddress);
