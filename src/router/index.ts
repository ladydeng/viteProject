import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index"
import routes from "./routes" 
var router:any = createRouter({
    history: createWebHistory(), 
    routes
})

// router.beforeEach((to, from, next) => {
//     const safeRoute = ['/']  //设置白名单路由
//     if(!store.getters.token && to.path != "/login" && safeRoute.indexOf(to.path) == -1){
//         next("/login")
//     }else{
//         next()
//     }
// })

export default router