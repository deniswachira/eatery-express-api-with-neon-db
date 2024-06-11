"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_server_1 = require("@hono/node-server");
const hono_1 = require("hono");
require("dotenv/config");
const prometheus_1 = require("@hono/prometheus");
const user_router_1 = require("./users/user.router");
const restaurant_router_1 = require("./restaurants/restaurant.router");
const city_router_1 = require("./cities/city.router");
const state_router_1 = require("./states/state.router");
const status_catalog_router_1 = require("./status_catalog/status_catalog.router");
const order_router_1 = require("./orders/order.router");
const order_status_router_1 = require("./order_status/order_status.router");
const address_router_1 = require("./addresses/address.router");
const comment_router_1 = require("./comments/comment.router");
const driver_router_1 = require("./drivers/driver.router");
const order_menu_item_router_1 = require("./order_menu_items/order_menu_item.router");
const restaurant_owner_router_1 = require("./restauarant_onwers/restaurant_owner.router");
const menu_item_router_1 = require("./menu_items/menu_item.router");
const category_router_1 = require("./category/category.router");
const auth_router_1 = require("./auth/auth.router");
const app = new hono_1.Hono();
const { printMetrics, registerMetrics } = (0, prometheus_1.prometheus)();
//3rd party middleware
app.use('*', registerMetrics);
//default routes
app.get('/ok', (c) => {
    return c.text('The server is running ');
});
app.notFound((c) => {
    return c.text('Route Not Found', 404);
});
app.get('/metrics', printMetrics);
//custom routes
app.route("/api", user_router_1.userRouter);
app.route("/api", restaurant_router_1.restaurantRouter);
app.route("/api", city_router_1.cityRouter);
app.route("/api", state_router_1.stateRouter);
app.route("/api", status_catalog_router_1.statusCatalogRouter);
app.route("/api", order_router_1.orderRouter);
app.route("/api", order_status_router_1.orderStatusRouter);
app.route("/api", address_router_1.addressRouter);
app.route("/api", comment_router_1.commentRouter);
app.route("/api", driver_router_1.driverRouter);
app.route("/api", order_menu_item_router_1.orderMenuItemRouter);
app.route("/api", restaurant_owner_router_1.restaurantOwnerRouter);
app.route("/api", menu_item_router_1.menuItemRouter);
app.route("/api", category_router_1.categoryRouter);
app.route("/api/auth", auth_router_1.authRouter);
console.log("Server is running on port " + process.env.PORT || 3000);
(0, node_server_1.serve)({
    fetch: app.fetch,
    port: Number(process.env.PORT || 3000)
});
