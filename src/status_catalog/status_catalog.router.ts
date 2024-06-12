import {Hono} from "hono"
import { deleteStatusCatalog, getStatusCatalogById, insertStatusCatalog, listStatusCatalogs, updateStatusCatalog } from "./status_catalog.controller";
import { adminRoleAuth } from "../middleWare/bearAuth";

export const statusCatalogRouter = new Hono();

//get all status_catalogs
statusCatalogRouter.get('/status-catalogs',adminRoleAuth, listStatusCatalogs)

//get status_catalog by id
statusCatalogRouter.get('/status-catalogs/:id',adminRoleAuth, getStatusCatalogById)

//insert status_catalog
statusCatalogRouter.post('/status-catalogs',adminRoleAuth, insertStatusCatalog)

//update status_catalog
statusCatalogRouter.put('/status-catalogs/:id',adminRoleAuth, updateStatusCatalog)

//delete status_catalog
statusCatalogRouter.delete('/status-catalogs/:id', adminRoleAuth, deleteStatusCatalog)
