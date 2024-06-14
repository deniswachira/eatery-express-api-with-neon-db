import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { readFile } from 'fs/promises';
import "dotenv/config"
import { prometheus } from '@hono/prometheus'
import { userRouter } from './users/user.router'
import { restaurantRouter } from './restaurants/restaurant.router'
import { cityRouter } from './cities/city.router'
import { stateRouter } from './states/state.router'
import { statusCatalogRouter } from './status_catalog/status_catalog.router'
import { orderRouter } from './orders/order.router'
import { orderStatusRouter } from './order_status/order_status.router'
import { addressRouter } from './addresses/address.router'
import { commentRouter } from './comments/comment.router'
import { driverRouter } from './drivers/driver.router'
import { orderMenuItemRouter } from './order_menu_items/order_menu_item.router'
import { restaurantOwnerRouter } from './restauarant_onwers/restaurant_owner.router'
import { menuItemRouter } from './menu_items/menu_item.router'
import { categoryRouter } from './category/category.router'
import { authRouter } from './auth/auth.router'
import { limiter } from './middleWare/rateLimiter';

const app = new Hono();
const {printMetrics, registerMetrics} = prometheus();

//3rd party middleware
app.use('*', registerMetrics) //prometheus to monitor metrics
app.use(limiter); //rate limiter

//default routes
app.get('/', async (c) => {
    try {
        let html = await readFile('./index.html', 'utf-8');
        return c.html(html);
    } catch (err:any) {
        return c.text(err.message, 500);
    }
});

app.notFound((c) => {
  return c.text('Route Not Found', 404)
})
app.get('/metrics', printMetrics)


//custom routes
app.route("/api",userRouter)
app.route("/api",restaurantRouter)
app.route("/api",cityRouter)
app.route("/api",stateRouter)
app.route("/api",statusCatalogRouter)
app.route("/api",orderRouter)
app.route("/api",orderStatusRouter)
app.route("/api",addressRouter)
app.route("/api",commentRouter)
app.route("/api", driverRouter)
app.route("/api", orderMenuItemRouter)
app.route("/api", restaurantOwnerRouter)
app.route("/api", menuItemRouter)
app.route("/api", categoryRouter)
app.route("/api/auth", authRouter)

console.log("Server is running on port " + process.env.PORT || 3000)

serve({
  fetch: app.fetch,
  port:Number(process.env.PORT || 3000)
})
