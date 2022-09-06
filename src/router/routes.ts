import { RouteRecordRaw } from "vue-router";

var routes:Array<RouteRecordRaw> = [
    {
        path:"/",
        name:"index",
        component: () => import("/@/views/index/Index.vue")
    },
    {
        path:"/login",
        name:"login",
        component: () => import("/@/views/login/Login.vue")
    }
]


export default routes