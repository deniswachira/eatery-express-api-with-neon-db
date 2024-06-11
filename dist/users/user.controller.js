"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.insertUser = exports.getUserById = exports.listUsers = void 0;
const user_service_1 = require("./user.service");
//list user
const listUsers = async (c) => {
    try {
        const users = await (0, user_service_1.usersService)();
        if (users == null)
            return c.text("No users found 😒", 404);
        return c.json(users, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.listUsers = listUsers;
//get user by id
const getUserById = async (c) => {
    const id = parseInt(c.req.param("id"));
    try {
        if (isNaN(id))
            return c.text("Invalid ID 😒", 400);
        const user = await (0, user_service_1.getUserByIdService)(id);
        if (user == undefined)
            return c.text("User not found 😒", 404);
        return c.json(user, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.getUserById = getUserById;
//insert user
const insertUser = async (c) => {
    // return c.text("Not implemented yet",501)
    try {
        const user = await c.req.json();
        const createdUser = await (0, user_service_1.insertUserService)(user);
        if (!createdUser) {
            return c.text("User not created 😒", 400);
        }
        return c.json(createdUser, 201);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.insertUser = insertUser;
//update user
const updateUser = async (c) => {
    const id = Number(c.req.param("id"));
    const user = await c.req.json();
    try {
        if (isNaN(id))
            return c.text("Invalid ID 😒", 400);
        //search for user
        const existingUser = await (0, user_service_1.getUserByIdService)(id);
        if (existingUser == undefined)
            return c.text("User not found 😒", 404);
        //update user
        const updatedUser = await (0, user_service_1.updateUserService)(id, user);
        return c.json({ msg: updatedUser }, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.updateUser = updateUser;
const deleteUser = async (c) => {
    const id = Number(c.req.param("id"));
    try {
        if (isNaN(id))
            return c.text("Invalid ID 😒", 400);
        //search for user
        const existingUser = await (0, user_service_1.getUserByIdService)(id);
        if (existingUser == undefined)
            return c.text("User not found 😒", 404);
        //delete user
        const deletedUser = await (0, user_service_1.deleteUserService)(id);
        return c.json({ msg: deletedUser }, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.deleteUser = deleteUser;
