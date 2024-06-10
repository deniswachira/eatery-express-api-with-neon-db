import { eq, sql } from "drizzle-orm";
import db from "../drizzle/db";
import { TAuthOnUsers, TAuthOnUsersSelect,auth_on_users_table } from "../drizzle/schema";

export const createUserService = async(user:TAuthOnUsers) => {
     await db.insert(auth_on_users_table).values(user)
    // .returning({id:user_table.user_id}
        return "User Registered successfully 🎉";
}

export const loginUserService = async(user:TAuthOnUsersSelect) => {
    const {username,password} = user;
    return await db.query.auth_on_users_table.findFirst({
        columns: {
            username: true,
            role: true,
            password: true,
        }, where : sql `${auth_on_users_table.username} = ${username}`,
        with:{
            user:{
                columns:{
                    user_id:true,
                    fullname:true,
                    email:true,
                    phone:true,
                }
            }
        }
    })
}
