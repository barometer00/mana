import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import { Plugin as importToCDN,  autoComplete } from 'vite-plugin-cdn-import'
//import path from 'path'

export default defineConfig({
  plugins: [vue(), 
            visualizer({open:true}),
            importToCDN({
              modules: [
                autoComplete('vue'),
                autoComplete('axios'),
                {
                  name: 'vue-demi',
                  var: 'VueDemi',
                  path: "lib/index.iife.min.js",
                },
                {
                  name: "element-plus",
                  var: "ElementPlus",
                  css: "//unpkg.com/element-plus/dist/index.css",
                  path: "//unpkg.com/element-plus",
                }, 
                {
                  name: "@element-plus/icons-vue",
                  var:"ElementPlusIconsVue",
                  path:'//unpkg.com/@element-plus/icons-vue',
                },
                {
                  name:"echarts",
                  var:"echarts",
                  path:"//cdn.bootcdn.net/ajax/libs/echarts/5.4.0/echarts.common.js"
                },
                {
                  name: "vue-router",
                  var: "VueRouter",
                  path: "//cdn.jsdelivr.net/npm/vue-router@4/dist/vue-router.global.min.js",
                }, 
                {
                  name:'sortablejs',
                  var:'Sortable',
                  path:"//cdn.bootcdn.net/ajax/libs/Sortable/1.15.0/Sortable.js",
                },          
              ],
          }),
  ],
  base:'./',
  resolve:{
    alias: {                //配置别名 需引入path
        //'@':  path.resolve(__dirname, 'src'),  
      }
  },
  build:{
    chunkSizeWarningLimit:500,
  },
})
