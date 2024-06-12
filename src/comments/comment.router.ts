import {Hono} from 'hono'
import { deleteComment, getCommentById, insertComment, listComments, updateComment } from './comment.controller'
import { adminRoleAuth } from '../middleWare/bearAuth'

export const commentRouter = new Hono()

//get all comments
commentRouter.get('/comments',adminRoleAuth, listComments)

//get comment by id
commentRouter.get('/comments/:id',adminRoleAuth, getCommentById)

//insert comment
commentRouter.post('/comments',adminRoleAuth, insertComment)

//update comment
commentRouter.put('/comments/:id',adminRoleAuth, updateComment)

//delete comment
commentRouter.delete('/comments/:id',adminRoleAuth, deleteComment)