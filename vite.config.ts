// 项目配置文件
const { resolve } = require("path")
const config = require("./src/config/index-vite")
// import { defineConfig } from 'vite'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


export default {
    alias: {
        '/@/': resolve(__dirname, './src')
    },
    proxy: {
        '/lencon': {
            target: config.baseUrl,
            changeOrigin: true,
            secure: false,
            rewrite: (path) => path.replace('/lencon', '')
        }
    },
    // element-plus 按需导入
    plugins: [
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
}