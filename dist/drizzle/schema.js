"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user_address_relation = exports.state_city_relation = exports.city_state_relation = exports.city_restaurant_relation = exports.restaurant_city_relation = exports.status_catalog_table = exports.order_status_table = exports.order_menu_table = exports.comment_table = exports.order_table = exports.driver_table = exports.category_table = exports.menu_item_table = exports.restaurant_owner_table = exports.restaurant_table = exports.AuthOnUsersRelation = exports.auth_on_users_table = exports.roleEnum = exports.user_table = exports.address_table = exports.city_table = exports.state_table = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const pg_core_1 = require("drizzle-orm/pg-core");
// State table 1
exports.state_table = (0, pg_core_1.pgTable)('state_table', {
    state_id: (0, pg_core_1.serial)('state_id').primaryKey(),
    name: (0, pg_core_1.text)('name'),
    code: (0, pg_core_1.text)('code'),
    created_at: (0, pg_core_1.timestamp)('created_at').defaultNow(),
    updated_at: (0, pg_core_1.timestamp)('updated_at').defaultNow(),
});
// city table 2
exports.city_table = (0, pg_core_1.pgTable)('city_table', {
    city_id: (0, pg_core_1.serial)('city_id').primaryKey(),
    city_name: (0, pg_core_1.text)('city_name'),
    state_id: (0, pg_core_1.integer)('state_id').notNull().references(() => exports.state_table.state_id, { onDelete: 'cascade' }),
    created_at: (0, pg_core_1.timestamp)('created_at').defaultNow(),
    updated_at: (0, pg_core_1.timestamp)('updated_at').defaultNow(),
});
// address table 3
exports.address_table = (0, pg_core_1.pgTable)('address_table', {
    address_id: (0, pg_core_1.serial)('address_id').primaryKey(),
    street_address_1: (0, pg_core_1.text)('street_address_1'),
    street_address_2: (0, pg_core_1.text)('street_address_2'),
    zip_code: (0, pg_core_1.text)('zip_code'),
    delivery_instructions: (0, pg_core_1.text)('delivery_instructions'),
    user_id: (0, pg_core_1.integer)('user_id').notNull().references(() => exports.user_table.user_id, { onDelete: 'cascade' }),
    city_id: (0, pg_core_1.integer)('city_id').notNull().references(() => exports.city_table.city_id, { onDelete: 'cascade' }),
    created_at: (0, pg_core_1.timestamp)('created_at').defaultNow(),
    updated_at: (0, pg_core_1.timestamp)('updated_at').defaultNow(),
});
//user table 4
exports.user_table = (0, pg_core_1.pgTable)("user_table", {
    user_id: (0, pg_core_1.serial)("user_id").primaryKey(),
    fullname: (0, pg_core_1.varchar)("fullname"),
    email: (0, pg_core_1.varchar)("email").notNull(),
    phone: (0, pg_core_1.varchar)("phone"),
    phone_verified: (0, pg_core_1.boolean)("phone_verified").default(false),
    email_verified: (0, pg_core_1.boolean)("email_verified").default(false),
    confirmation_code: (0, pg_core_1.integer)("confirmation_code"),
    created_at: (0, pg_core_1.timestamp)("created_at").defaultNow(),
    updated_at: (0, pg_core_1.timestamp)("updated_at").defaultNow(),
});
exports.roleEnum = (0, pg_core_1.pgEnum)("role", ['admin', 'user', 'restaurant_owner', 'driver']);
//AuthOnUsersTable
exports.auth_on_users_table = (0, pg_core_1.pgTable)('auth_on_users_table', {
    auth_on_users_id: (0, pg_core_1.serial)('auth_on_users_id').primaryKey(),
    user_id: (0, pg_core_1.integer)('user_id').notNull().references(() => exports.user_table.user_id, { onDelete: 'cascade' }),
    password: (0, pg_core_1.varchar)('password', { length: 100 }),
    username: (0, pg_core_1.varchar)('username', { length: 50 }),
    role: (0, exports.roleEnum)('role').default('user'),
});
// =======================relationship=======================
exports.AuthOnUsersRelation = (0, drizzle_orm_1.relations)(exports.auth_on_users_table, ({ one }) => ({
    user: one(exports.user_table, {
        fields: [exports.auth_on_users_table.user_id],
        references: [exports.user_table.user_id]
    })
}));
//restaurant table 5
exports.restaurant_table = (0, pg_core_1.pgTable)('restaurant_table', {
    restaurant_id: (0, pg_core_1.serial)('restaurant_id').primaryKey(),
    name: (0, pg_core_1.text)('name'),
    street_address: (0, pg_core_1.text)('street_address'),
    zip_code: (0, pg_core_1.text)('zip_code'),
    city_id: (0, pg_core_1.integer)('city_id').notNull().references(() => exports.city_table.city_id, { onDelete: 'cascade' }),
    created_at: (0, pg_core_1.timestamp)('created_at').defaultNow(),
    updated_at: (0, pg_core_1.timestamp)('updated_at').defaultNow(),
});
//restaurant_owner 6
exports.restaurant_owner_table = (0, pg_core_1.pgTable)('restaurant_owner_table', {
    restaurant_owner_id: (0, pg_core_1.serial)('restaurant_owner_id').primaryKey(),
    restaurant_id: (0, pg_core_1.integer)("restaurant_id").notNull().references(() => exports.restaurant_table.restaurant_id, { onDelete: 'cascade' }),
    owner_id: (0, pg_core_1.integer)('owner_id').notNull().references(() => exports.user_table.user_id, { onDelete: 'cascade' }),
});
// new added tables
// menu item table 7
exports.menu_item_table = (0, pg_core_1.pgTable)('menu_item_table', {
    menu_item_id: (0, pg_core_1.serial)('menu_item_id').primaryKey(),
    name: (0, pg_core_1.text)('name'),
    price: (0, pg_core_1.decimal)('price'),
    description: (0, pg_core_1.text)('description'),
    ingredients: (0, pg_core_1.text)('ingredients'),
    active: (0, pg_core_1.boolean)('active').default(true),
    restaurant_id: (0, pg_core_1.integer)('restaurant_id').notNull().references(() => exports.restaurant_table.restaurant_id, { onDelete: 'cascade' }),
    category_id: (0, pg_core_1.integer)('category_id').notNull().references(() => exports.category_table.category_id, { onDelete: 'cascade' }),
    created_at: (0, pg_core_1.timestamp)('created_at').defaultNow(),
    updated_at: (0, pg_core_1.timestamp)('updated_at').defaultNow(),
});
//category table 8
exports.category_table = (0, pg_core_1.pgTable)('category_table', {
    category_id: (0, pg_core_1.serial)('category_id').primaryKey(),
    name: (0, pg_core_1.text)('name'),
    created_at: (0, pg_core_1.timestamp)('created_at').defaultNow(),
    updated_at: (0, pg_core_1.timestamp)('updated_at').defaultNow(),
});
// driver table 9
exports.driver_table = (0, pg_core_1.pgTable)('driver_table', {
    driver_id: (0, pg_core_1.serial)('driver_id').primaryKey(),
    car_make: (0, pg_core_1.text)('car_make'),
    car_model: (0, pg_core_1.text)('car_model'),
    car_year: (0, pg_core_1.integer)('car_year'),
    user_id: (0, pg_core_1.integer)('user_id').notNull().references(() => exports.user_table.user_id, { onDelete: 'cascade' }),
    online: (0, pg_core_1.boolean)('online').default(false),
    delivering: (0, pg_core_1.boolean)('delivering').default(false),
    created_at: (0, pg_core_1.timestamp)('created_at').defaultNow(),
    updated_at: (0, pg_core_1.timestamp)('updated_at').defaultNow(),
});
//order table 10
exports.order_table = (0, pg_core_1.pgTable)('order_table', {
    order_id: (0, pg_core_1.serial)('order_id').primaryKey(),
    user_id: (0, pg_core_1.integer)('user_id').notNull().references(() => exports.user_table.user_id, { onDelete: 'cascade' }),
    driver_id: (0, pg_core_1.integer)('driver_id').references(() => exports.driver_table.driver_id, { onDelete: 'cascade' }),
    restaurant_id: (0, pg_core_1.integer)('restaurant_id').notNull().references(() => exports.restaurant_table.restaurant_id, { onDelete: 'cascade' }),
    delivery_address_id: (0, pg_core_1.integer)('delivery_address_id').notNull().references(() => exports.address_table.address_id, { onDelete: 'cascade' }),
    estimated_delivery_time: (0, pg_core_1.timestamp)('estimated_delivery_time'),
    actual_delivery_time: (0, pg_core_1.timestamp)('actual_delivery_time'),
    price: (0, pg_core_1.decimal)('price'),
    discount: (0, pg_core_1.decimal)('discount'),
    final_price: (0, pg_core_1.decimal)('final_price'),
    comment: (0, pg_core_1.text)('comment'),
    created_at: (0, pg_core_1.timestamp)('created_at').defaultNow(),
    updated_at: (0, pg_core_1.timestamp)('updated_at').defaultNow(),
});
// comment table 11
exports.comment_table = (0, pg_core_1.pgTable)('comment_table', {
    comment_id: (0, pg_core_1.serial)('comment_id').primaryKey(),
    user_id: (0, pg_core_1.integer)('user_id').notNull().references(() => exports.user_table.user_id, { onDelete: 'cascade' }),
    order_id: (0, pg_core_1.integer)('order_id').notNull().references(() => exports.order_table.order_id, { onDelete: 'cascade' }),
    comment_text: (0, pg_core_1.text)('comment_text'),
    is_complaint: (0, pg_core_1.boolean)('is_complaint').default(false),
    is_praise: (0, pg_core_1.boolean)('is_praise').default(false),
    created_at: (0, pg_core_1.timestamp)('created_at').defaultNow(),
    updated_at: (0, pg_core_1.timestamp)('updated_at').defaultNow(),
});
// order_menu table 12
exports.order_menu_table = (0, pg_core_1.pgTable)('order_menu_table', {
    order_menu_id: (0, pg_core_1.serial)('order_menu_id').primaryKey(),
    order_id: (0, pg_core_1.integer)('order_id').notNull().references(() => exports.order_table.order_id, { onDelete: 'cascade' }),
    menu_item_id: (0, pg_core_1.integer)('menu_item_id').notNull().references(() => exports.menu_item_table.menu_item_id, { onDelete: 'cascade' }),
    quantity: (0, pg_core_1.integer)('quantity'),
    item_price: (0, pg_core_1.decimal)('item_price'),
    price: (0, pg_core_1.decimal)('price'),
    comment: (0, pg_core_1.text)('comment'),
    created_at: (0, pg_core_1.timestamp)('created_at').defaultNow(),
    updated_at: (0, pg_core_1.timestamp)('updated_at').defaultNow(),
});
//order_status table 13
exports.order_status_table = (0, pg_core_1.pgTable)('order_status_table', {
    order_status_id: (0, pg_core_1.serial)('order_status_id').primaryKey(),
    order_id: (0, pg_core_1.integer)('order_id').notNull().references(() => exports.order_table.order_id, { onDelete: 'cascade' }),
    status_catalog_id: (0, pg_core_1.integer)('status_catalog_id').notNull().references(() => exports.status_catalog_table.status_catalog_id, { onDelete: 'cascade' }),
    created_at: (0, pg_core_1.timestamp)('created_at').defaultNow(),
    updated_at: (0, pg_core_1.timestamp)('updated_at').defaultNow(),
});
//status_catalog table 14
exports.status_catalog_table = (0, pg_core_1.pgTable)('status_catalog_table', {
    status_catalog_id: (0, pg_core_1.serial)('status_catalog_id').primaryKey(),
    status: (0, pg_core_1.text)('status'),
    created_at: (0, pg_core_1.timestamp)('created_at').defaultNow(),
    updated_at: (0, pg_core_1.timestamp)('updated_at').defaultNow(),
});
//relation between restaurant(1) --> (1)city
exports.restaurant_city_relation = (0, drizzle_orm_1.relations)(exports.restaurant_table, ({ one }) => ({
    city: one(exports.city_table, {
        fields: [exports.restaurant_table.city_id],
        references: [exports.city_table.city_id]
    })
}));
//relation between city(1) --> (n)restaurant
exports.city_restaurant_relation = (0, drizzle_orm_1.relations)(exports.city_table, ({ many }) => ({
    restaurants: many(exports.restaurant_table)
}));
//relation between city(1) --> (1)state
exports.city_state_relation = (0, drizzle_orm_1.relations)(exports.city_table, ({ one }) => ({
    state: one(exports.state_table, {
        fields: [exports.city_table.state_id],
        references: [exports.state_table.state_id]
    })
}));
//relation between state(1) --> (n)cities
exports.state_city_relation = (0, drizzle_orm_1.relations)(exports.state_table, ({ many }) => ({
    cities: many(exports.city_table)
}));
//relation user(1) --> (1) address user(1) --> (1)city user(1) --> (1)state
exports.user_address_relation = (0, drizzle_orm_1.relations)(exports.user_table, ({ one }) => ({
    address: one(exports.address_table, {
        fields: [exports.user_table.user_id],
        references: [exports.address_table.address_id]
    }),
    city: one(exports.city_table, {
        fields: [exports.user_table.user_id],
        references: [exports.city_table.city_id]
    }),
    state: one(exports.state_table, {
        fields: [exports.user_table.user_id],
        references: [exports.state_table.state_id]
    })
}));
