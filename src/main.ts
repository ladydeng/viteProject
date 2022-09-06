import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index'
import store from './store/index'

import ElementPlus from 'element-plus'
import '../node_modules/element-plus/theme-chalk/index.css'

const app  = createApp(App)
// 定义全局变量
app.config.globalProperties.$store = store
app.config.globalProperties.$title = "全局变量值"
app.use(router).use(store).use(ElementPlus)

app.mount('#app')
