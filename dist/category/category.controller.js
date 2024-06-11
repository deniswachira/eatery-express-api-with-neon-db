"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.updateCategory = exports.insertCategory = exports.getCategoryById = exports.listCategories = void 0;
const category_service_1 = require("./category.service");
//list categories
const listCategories = async (c) => {
    try {
        const categories = await (0, category_service_1.categoriesService)();
        if (categories == null)
            return c.text("No categories found 😒", 404);
        return c.json(categories, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.listCategories = listCategories;
//get category by id
const getCategoryById = async (c) => {
    // return c.text("Not implemented yet",501)
    const id = parseInt(c.req.param("id"));
    try {
        if (isNaN(id))
            return c.text("Invalid ID 😒", 400);
        //search for category
        const category = await (0, category_service_1.getCategoryByIdService)(id);
        if (category == undefined)
            return c.text("Category not found 😒", 404);
        return c.json(category, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.getCategoryById = getCategoryById;
//insert category
const insertCategory = async (c) => {
    // return c.text("Not implemented yet",501)
    try {
        const category = await c.req.json();
        const createdCategory = await (0, category_service_1.insertCategoryService)(category);
        if (!createdCategory) {
            return c.text("Category not created 😒", 400);
        }
        return c.json(category, 201);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.insertCategory = insertCategory;
//update category
const updateCategory = async (c) => {
    // return c.text("Not implemented yet",501)
    const id = Number(c.req.param("id"));
    const category = await c.req.json();
    try {
        if (isNaN(id))
            return c.text("Invalid ID 😒", 400);
        //search for category
        const existingCategory = await (0, category_service_1.getCategoryByIdService)(id);
        if (existingCategory == undefined)
            return c.text("Category not found 😒", 404);
        //update category
        const updatedCategory = await (0, category_service_1.updateCategoryService)(id, category);
        return c.json({ msg: updatedCategory }, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.updateCategory = updateCategory;
//delete category
const deleteCategory = async (c) => {
    // return c.text("Not implemented yet",501)
    const id = Number(c.req.param("id"));
    try {
        if (isNaN(id))
            return c.text("Invalid ID 😒", 400);
        //search for category
        const existingCategory = await (0, category_service_1.getCategoryByIdService)(id);
        if (existingCategory == undefined)
            return c.text("Category not found 😒", 404);
        //delete category
        const deletedCategory = await (0, category_service_1.deleteCategoryService)(id);
        return c.json({ msg: deletedCategory }, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.deleteCategory = deleteCategory;
