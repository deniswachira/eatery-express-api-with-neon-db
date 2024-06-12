import {Hono} from 'hono'
import { deleteCategory, getCategoryById, insertCategory, listCategories, updateCategory } from './category.controller';
import { adminRoleAuth } from '../middleWare/bearAuth';


export const categoryRouter = new Hono();

//list categories
categoryRouter.get("/categories",adminRoleAuth, listCategories);

//get category by id
categoryRouter.get("/categories/:id",adminRoleAuth, getCategoryById);

//insert category
categoryRouter.post("/categories",adminRoleAuth, insertCategory);

//update category
categoryRouter.put("/categories/:id",adminRoleAuth, updateCategory);

//delete category
categoryRouter.delete("/categories/:id",adminRoleAuth, deleteCategory);