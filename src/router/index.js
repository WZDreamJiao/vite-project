import {createRouter, createWebHistory} from "vue-router";
import {routes} from "./routes"

const Home = () => import('../pages/home/index.vue');
const staticRoutes = [
    {
        name: "Home",
        path: "/",
        component: Home,
        meta: {
            title: "首页"
        }
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes: staticRoutes.concat(routes)
})
export default router
