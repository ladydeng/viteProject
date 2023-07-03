import { RouteRecordRaw } from "vue-router";

var routes:Array<RouteRecordRaw> = [
    {
        path:"/",
        name:"index",
        component: () => import("/@/views/Index.vue")
    },
    {
        path:"/login",
        name:"login",
        component: () => import("/@/views/Login.vue")
    },
    {
        path:"/newsDetail",
        name:"newsDetail",
        component: () => import("/@/views/NewsDetail.vue")
    }
]


export default routes