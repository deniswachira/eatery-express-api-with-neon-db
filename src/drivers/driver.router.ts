import {Hono} from 'hono'
import { deleteDriver, getDriverById, insertDriver, listDrivers, updateDriver } from './driver.controller'
import { adminRoleAuth } from '../middleWare/bearAuth';
export const driverRouter = new Hono();

//get all drivers
driverRouter.get('/drivers',adminRoleAuth, listDrivers);

//get comment by id
driverRouter.get('/drivers/:id',adminRoleAuth, getDriverById);

//insert comment
driverRouter.post('/drivers',adminRoleAuth, insertDriver);

//update comment
driverRouter.put('/drivers/:id',adminRoleAuth, updateDriver);

//delete comment
driverRouter.delete('/drivers/:id',adminRoleAuth, deleteDriver);