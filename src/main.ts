import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index'
import store from './store/index'
import axios from "./axios/index"
import config from "./config"

import ElementPlus from 'element-plus'
import '../node_modules/element-plus/theme-chalk/index.css'

import TipPop from "/@/components/common/TipPop.vue"
const app = createApp(App)

// 定义全局变量
app.config.globalProperties.$store = store
app.config.globalProperties.$title = "新闻资讯中心"
app.config.globalProperties.$baseUrl = config.baseUrl
app.config.globalProperties.$tipPop = TipPop

app.use(router).use(store).use(axios).use(ElementPlus)
app.mount('#app')
