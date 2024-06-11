"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentRouter = void 0;
const hono_1 = require("hono");
const comment_controller_1 = require("./comment.controller");
exports.commentRouter = new hono_1.Hono();
//get all comments
exports.commentRouter.get('/comments', comment_controller_1.listComments);
//get comment by id
exports.commentRouter.get('/comments/:id', comment_controller_1.getCommentById);
//insert comment
exports.commentRouter.post('/comments', comment_controller_1.insertComment);
//update comment
exports.commentRouter.put('/comments/:id', comment_controller_1.updateComment);
//delete comment
exports.commentRouter.delete('/comments/:id', comment_controller_1.deleteComment);
