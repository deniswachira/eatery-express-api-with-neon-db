import {Hono} from 'hono'
import { deleteAddress, getAddressById, insertAddress, listAddresses, updateAddress } from './address.controller'
import { adminRoleAuth } from '../middleWare/bearAuth'

export const addressRouter = new Hono()

//get all addresses
addressRouter.get('/addresses',adminRoleAuth, listAddresses)

//get address by id
addressRouter.get('/addresses/:id',adminRoleAuth, getAddressById)

//insert address
addressRouter.post('/addresses', insertAddress)

//update address
addressRouter.put('/addresses/:id',adminRoleAuth, updateAddress)

//delete address
addressRouter.delete('/addresses/:id',adminRoleAuth, deleteAddress)