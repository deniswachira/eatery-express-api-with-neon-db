"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
require("dotenv/config");
const auth_service_1 = require("./auth.service");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_1 = require("hono/jwt");
//register
const registerUser = async (c) => {
    try {
        const user = await c.req.json();
        const pass = user.password;
        const hashedPass = bcrypt_1.default.hashSync(pass, 10);
        user.password = hashedPass;
        const createdUser = await (0, auth_service_1.createUserService)(user);
        if (!createdUser)
            return c.text("User not created 😒", 400);
        return c.json({ msg: createdUser }, 200);
    }
    catch (error) {
        return c.json({ error: error.message }, 400);
    }
};
exports.registerUser = registerUser;
//login
const loginUser = async (c) => {
    try {
        const user = await c.req.json();
        //check if user exists
        const userExists = await (0, auth_service_1.loginUserService)(user);
        if (!userExists)
            return c.text("User not found 😒", 400);
        //check if password is correct
        const pass = user.password;
        const hashedPass = userExists?.password;
        const isMatch = bcrypt_1.default.compareSync(pass, hashedPass);
        if (!isMatch) {
            return c.text("Invalid Login Credentials!! 😒", 400);
        }
        else {
            // return c.json({msg: userExists}, 200);
            //generate token
            let payload = {
                role: userExists.role,
                username: userExists.username,
                exp: Math.floor(Date.now() / 1000) + (60 * 180)
            };
            let secret = process.env.JWT_SECRET; // secret key
            const token = await (0, jwt_1.sign)(payload, secret); // create a JWT token
            let user = userExists?.user;
            let role = userExists?.role;
            return c.json({ token, user: { role, ...user } }, 200); // return token and user details
        }
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.loginUser = loginUser;
