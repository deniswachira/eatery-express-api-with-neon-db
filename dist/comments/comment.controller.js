"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteComment = exports.updateComment = exports.insertComment = exports.getCommentById = exports.listComments = void 0;
const comment_service_1 = require("./comment.service");
//list comments
const listComments = async (c) => {
    try {
        const comments = await (0, comment_service_1.commentsService)();
        if (comments == null)
            return c.text("No comments found 😒", 404);
        return c.json(comments, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.listComments = listComments;
//get comment by id
const getCommentById = async (c) => {
    // return c.text("Not implemented yet",501)
    const id = parseInt(c.req.param("id"));
    try {
        if (isNaN(id))
            return c.text("Invalid ID 😒", 400);
        //search for comment
        const comment = await (0, comment_service_1.getCommentByIdService)(id);
        if (comment == undefined)
            return c.text("Comment not found 😒", 404);
        return c.json(comment, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.getCommentById = getCommentById;
//insert comment
const insertComment = async (c) => {
    // return c.text("Not implemented yet",501)
    try {
        const comment = await c.req.json();
        const createdComment = await (0, comment_service_1.insertCommentService)(comment);
        if (!createdComment) {
            return c.text("Comment not created 😒", 400);
        }
        return c.json(comment, 201);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.insertComment = insertComment;
//update comment
const updateComment = async (c) => {
    // return c.text("Not implemented yet",501)
    const id = Number(c.req.param("id"));
    const comment = await c.req.json();
    try {
        if (isNaN(id))
            return c.text("Invalid ID 😒", 400);
        //search for comment
        const existingComment = await (0, comment_service_1.getCommentByIdService)(id);
        if (existingComment == undefined)
            return c.text("Comment not found 😒", 404);
        //update comment
        const updatedComment = await (0, comment_service_1.updateCommentService)(id, comment);
        return c.json({ msg: updatedComment }, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.updateComment = updateComment;
//delete comment
const deleteComment = async (c) => {
    // return c.text("Not implemented yet",501)
    const id = Number(c.req.param("id"));
    try {
        if (isNaN(id))
            return c.text("Invalid ID 😒", 400);
        //search for comment
        const existingComment = await (0, comment_service_1.getCommentByIdService)(id);
        if (existingComment == undefined)
            return c.text("Comment not found 😒", 404);
        //delete comment
        const deletedComment = await (0, comment_service_1.deleteCommentService)(id);
        return c.json({ msg: deletedComment }, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.deleteComment = deleteComment;
