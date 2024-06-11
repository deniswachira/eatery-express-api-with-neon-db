"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCommentService = exports.updateCommentService = exports.insertCommentService = exports.getCommentByIdService = exports.commentsService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const commentsService = async () => {
    return await db_1.default.query.comment_table.findMany();
};
exports.commentsService = commentsService;
const getCommentByIdService = async (id) => {
    return await db_1.default.query.comment_table.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.comment_table.comment_id, id)
    });
};
exports.getCommentByIdService = getCommentByIdService;
const insertCommentService = async (comment) => {
    await db_1.default.insert(schema_1.comment_table).values(comment);
    // .returning({id:comment_table.comment_id}
    return "Comment created successfully 🎉";
};
exports.insertCommentService = insertCommentService;
const updateCommentService = async (id, comment) => {
    await db_1.default.update(schema_1.comment_table).set(comment).where((0, drizzle_orm_1.eq)(schema_1.comment_table.comment_id, id));
    return "Comment updated successfully 🎉";
};
exports.updateCommentService = updateCommentService;
const deleteCommentService = async (id) => {
    await db_1.default.delete(schema_1.comment_table).where((0, drizzle_orm_1.eq)(schema_1.comment_table.comment_id, id));
    return "Comment deleted successfully 🎉";
};
exports.deleteCommentService = deleteCommentService;
