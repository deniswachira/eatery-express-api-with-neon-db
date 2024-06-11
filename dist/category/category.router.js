"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const hono_1 = require("hono");
const category_controller_1 = require("./category.controller");
exports.categoryRouter = new hono_1.Hono();
//list categories
exports.categoryRouter.get("/categories", category_controller_1.listCategories);
//get category by id
exports.categoryRouter.get("/categories/:id", category_controller_1.getCategoryById);
//insert category
exports.categoryRouter.post("/categories", category_controller_1.insertCategory);
//update category
exports.categoryRouter.put("/categories/:id", category_controller_1.updateCategory);
//delete category
exports.categoryRouter.delete("/categories/:id", category_controller_1.deleteCategory);
