"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAddress = exports.updateAddress = exports.insertAddress = exports.getAddressById = exports.listAddresses = void 0;
const address_service_1 = require("./address.service");
//list addresses
const listAddresses = async (c) => {
    try {
        const addresses = await (0, address_service_1.addressesService)();
        if (addresses == null)
            return c.text("No addresses found 😒", 404);
        return c.json(addresses, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.listAddresses = listAddresses;
//get address by id
const getAddressById = async (c) => {
    // return c.text("Not implemented yet",501)
    const id = parseInt(c.req.param("id"));
    try {
        if (isNaN(id))
            return c.text("Invalid ID 😒", 400);
        //search for address
        const address = await (0, address_service_1.getAddressByIdService)(id);
        if (address == undefined)
            return c.text("Address not found 😒", 404);
        return c.json(address, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.getAddressById = getAddressById;
//insert address
const insertAddress = async (c) => {
    // return c.text("Not implemented yet",501)
    try {
        const address = await c.req.json();
        const createdAddress = await (0, address_service_1.insertAddressService)(address);
        if (!createdAddress) {
            return c.text("Address not created 😒", 400);
        }
        return c.json(address, 201);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.insertAddress = insertAddress;
//update address
const updateAddress = async (c) => {
    // return c.text("Not implemented yet",501)
    const id = Number(c.req.param("id"));
    const address = await c.req.json();
    try {
        if (isNaN(id))
            return c.text("Invalid ID 😒", 400);
        //search for address
        const existingAddress = await (0, address_service_1.getAddressByIdService)(id);
        if (existingAddress == undefined)
            return c.text("Address not found 😒", 404);
        //update address
        const updatedAddress = await (0, address_service_1.updateAddressService)(id, address);
        return c.json({ msg: updatedAddress }, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.updateAddress = updateAddress;
//delete address
const deleteAddress = async (c) => {
    // return c.text("Not implemented yet",501)
    const id = Number(c.req.param("id"));
    try {
        if (isNaN(id))
            return c.text("Invalid ID 😒", 400);
        //search for address
        const existingAddress = await (0, address_service_1.getAddressByIdService)(id);
        if (existingAddress == undefined)
            return c.text("Address not found 😒", 404);
        //delete address
        const deletedAddress = await (0, address_service_1.deleteAddressService)(id);
        return c.json({ msg: deletedAddress }, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.deleteAddress = deleteAddress;
